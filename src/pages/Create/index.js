import React, { useState } from 'react'
import { TextInputMask } from 'react-native-masked-text'
import {
    KeyboardAvoidingView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet

} from 'react-native'

import { RadioButton } from 'react-native-paper';
import api from '../../services/api'

export default function Criar({navigation}) {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataDeNascimento, setDataDeNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [tipoPessoa, setTipoPessoa] = useState('')
    const [cpfField, setCpfField] = useState('')

    async function handleSubmit() {
        try{

        const response = await api.post('/pessoa', {
            nome,
            cpf,
            telefone,
            dataDeNascimento,
            tipoPessoa

        })
        Alert.alert(response.data.message)}
        catch(response){
            Alert.alert(response.data.error)
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    onChangeText={(value) => setNome(value)}
                />
                <TextInputMask
                    placeholder="CPF"
                    type={'cpf'}
                    value={cpf}
                    style={styles.input}
                    onChangeText={(text, ref = null) => setCpf(text)}
                    ref={(ref) => {
                        setCpfField(ref)
                    }}
                />
                <TextInput
                placeholder="dataDeNascimento"
                    style={styles.input}
                    onChangeText={(value) => setDataDeNascimento(value)}
                />
                <TextInput
                    placeholder="Telefone"
                    style={styles.input}
                    onChangeText={(value) => setTelefone(value)}
                    
                />
                <View style={{ width: "90%", justifyContent: "flex-start" }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            value="Física"
                            status={tipoPessoa === 'Física' ? 'checked' : 'unchecked'}
                            onPress={() => setTipoPessoa("Física")}
                        />
                        <Text>
                            Física
                </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <RadioButton
                            value="Jurídica"
                            status={tipoPessoa === 'Jurídica' ? 'checked' : 'unchecked'}
                            onPress={() => setTipoPessoa("Jurídica")}

                        />
                        <Text>
                            Jurídica
                </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnCadastrar} onPress={ handleSubmit}>
                    <Text style={styles.btnTextCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnVoltar} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.btnTextVoltar}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    divLogo: {
        minWidth: '100%',
        alignItems: 'center',
        minHeight: 150,
        justifyContent: 'center',
        padding: 6,
        marginTop: 20,
    },
    form: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#00ffff',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 20,
        borderRadius: 7,
        padding: 15,
        borderBottomWidth: 1
    },
    btnCadastrar: {
        marginTop: 15,
        backgroundColor: '#008B8B',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    btnTextCadastrar: {
        color: '#fff',
        fontSize: 20,
    },
    btnVoltar: {
        marginTop: 15,
        backgroundColor: '#FF0000',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 10,
    },
    btnTextVoltar: {
        color: '#fff',
        fontSize: 20,
    },
})