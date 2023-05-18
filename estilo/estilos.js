import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {

        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'

    },

    linha:{

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },

    textinputlinha: {

        width:180,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:10
    
    },

    textinputnormal: {

        width:368,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:10

    },

    botaocadastro: {

        width:368,
        height:40,
        backgroundColor:'black',
        borderRadius:20,
        justifyContent:'center'

    },

    textocarregamento: {

        fontWeight:800,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20
    
    },

    linhalogin: {

    flexDirection:'row',
    marginBottom:10


    }

})