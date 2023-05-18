import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "../estilo/estilos";

const CadastroScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCEP] = useState('');
    const [celular, setCelular] = useState('');
    const [rg, setRG] = useState('');
    const [bairro, setBairro] = useState('');

    return (
        <View style={estilos.container}>
            <View>
            <TextInput placeholder="Seu nome..." style={estilos.textinputnormal} onChangeText={text => setNome(text)} ></TextInput>
            <TextInput placeholder="Seu email..." style={estilos.textinputnormal} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} placeholder="Sua senha..." style={estilos.textinputnormal} onChangeText={text => setSenha(text)}></TextInput>
            </View>

            <View style={estilos.linha}>
            <TextInput maxLength={8} keyboardType='number-pad' placeholder="Seu CEP..." style={estilos.textinputlinha} onChangeText={text => setCEP(text)} ></TextInput>
            <TextInput maxLength={11} keyboardType='number-pad' placeholder="Seu celular..." style={estilos.textinputlinha} onChangeText={text => setCelular(text)} ></TextInput>
            </View>

            <View style={estilos.linha}>
            <TextInput maxLength={7} keyboardType='number-pad' placeholder="Seu RG..." style={estilos.textinputlinha} onChangeText={text => setRG(text)} ></TextInput>
            <TextInput placeholder="Seu bairro..." style={estilos.textinputlinha} onChangeText={text => setBairro(text)} ></TextInput>
            </View>

            <TouchableOpacity style={estilos.botaocadastro} onPress={() => navigation.navigate('login')}>
                <Text style={{color:'white', textAlign:'center'}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CadastroScreen;