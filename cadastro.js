import React, { Component } from 'react';
import {SafeAreaView,StyleSheet,Text,TextInput,View,FlatList,Button} from 'react-native';
import { firebaseApp, contasDB } from './Firebase.js';

export default class cadastro extends Component {
  state = {
    nome: "",
    valor: "",
    proxima_key: 1,
    contas:[]
  }
  componentDidMount() {
    this.listarContas();
  }

  listarContas = () => {
    var contasTemp = [];
    contasDB.on("value", (contas) => {
      contas.forEach((conta) => {
        contasTemp.push({
          key: conta.key,
          nome: conta.val().nome,
          valor: conta.val().valor
        });

      });

      this.setState({contas: contasTemp});
    });
    
  }
  adicionarConta = () =>{
    if (this.state.nome.length > 0 && this.state.valor > 0){
      var conta = { 
        nome: this.state.nome,
        valor: this.state.valor,
      };
      
      this.setState({nome: ""});
      this.setState({valor: ""});
      contasDB.push(conta);
      
      this.listarContas();
    }
  }
  excluirConta = (key) => {
    contasDB.child(key).remove();
    this.listarContas();
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.subtitle}>Sobre a conta: </Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.texto}>Nome:</Text>
          <Text style={styles.texto}>Valor:</Text>
        </View>
        <View style={styles.label}>
          <TextInput placeholder="Digite o nome da conta" style={styles.input} keyboardType={"default"} value={this.state.nome.toString()}
            onChangeText = {(nome) =>{this.setState({nome: nome})}}/>
          <TextInput placeholder="Digite o valor da conta" style={styles.input} keyboardType={"numeric"} value={this.state.valor.toString()}
            onChangeText = {(valor) =>{this.setState({valor: valor})}}/>
          <Button style={styles.botao} title="+" color="#32CD32" onPress = {this.adicionarConta}/>
        </View>
        <View>
          <FlatList style={styles.lista} data={this.state.contas} renderItem={
            ({item, index}) =>
              <View style={styles.itemContainer}>
                <Text style={styles.item}>{item.nome} ----- {item.valor}</Text>
                <Button style={styles.botao} title="x" color="#FF0000" onPress={() => this.excluirConta(item.key)}/>
              </View>
          }/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#161f2e',
    marginHorizontal: 1
  },
  titulo:{
    marginTop: 35,
    textAlign: "center",
    fontSize: 36,
    color: "#ffffff"
  },
  subtitle:{
    marginTop: 35,
    fontSize: 18,
    color: "#ffffff"
  },
  texto:{
    fontSize: 15,
    width: "40%",
    color: "#ffffff"
  },
  label:{
    flexDirection: "row",
    width: "100%"
  },
  input:{
    height: 35,
    borderWidth: 1,
    borderColor: '#000',
    margin: 2,
    padding: 5,
    width: "40%",
    backgroundColor: "#ffffff",
    color: "black",
    flexDirection: "row"
  },
  item:{
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 20,
    width: "90%",
    color: "#ffffff"
  },
  itemContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  botao:{
    width: "20%",
  },
});
