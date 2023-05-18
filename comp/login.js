import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "../estilo/estilos";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={estilos.container}>
            <TextInput placeholder="Seu email..." style={estilos.textinputnormal} value={email} onChangeText={(text) => setEmail(text)} ></TextInput>
            <TextInput secureTextEntry={true} placeholder="Sua senha..." style={estilos.textinputnormal} value={senha} onChangeText={(text) => setSenha(text)} ></TextInput>
            <View style={estilos.linhalogin}>
            <Text style={{color:'black'}} onPress={() => navigation.navigate('cadastro')}>Não tem uma conta?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('homescreen')} style={estilos.botaocadastro}>
                <Text style={{color:'white', textAlign:'center'}}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;
