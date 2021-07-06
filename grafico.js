import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, Button, Chart } from 'react-native';
import { firebaseApp, contasDB } from './Firebase.js';

export default class grafico extends Component {
    // componentDidMount() {
    //     this.contabilizarContas();
    // }
    // contabilizarContas = () => {
    //     var valores;
    //     contasDB.on("value", (contas) => {
    //         contas.forEach((conta) => {
    //             valores.push(
    //                 conta.val().valor
    //             );
    //         });
    //     });
    //     var data = valores;
    //     return data;
    // }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Gráfico</Text>
                </View>
                {/* <Chart width={'600px'} height={'400px'} chartType="LineChart" loader={<div>Carregando Grafico</div>} data={this.contabilizarContas()} options={{
                    hAxis: { title: 'Valor', }, vAxis: {
                        title: 'Valores',
                    },
                }} rootProps={{ 'data-testid': '1' }} /> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161f2e',
        marginHorizontal: 1
    },
    titulo: {
        marginTop: 35,
        textAlign: "center",
        fontSize: 36,
        color: "#ffffff"
    }
});
