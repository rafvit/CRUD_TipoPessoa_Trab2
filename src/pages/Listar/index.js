import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native'


import api from '../../services/api'

import ListItems from '../../componentes/listItens'

function UsersList({ navigation }) {
  const [pessoa, setPessoa] = useState([])

  useEffect(() => {
    handleDataUserList()
  }, [])

  async function handleDataUserList() {
    try {
      const response = await api.get('/pessoas')
      
      setPessoa(response.data)

    } catch (response) {
      Alert.alert(response.data.erro)
    }

  }

  return (
    <View style={styles.screen}>
      <Text style={styles.textInformativo}>
        Exclua ou atualize os cadastros!
      </Text>
      <View style={styles.divList}>
        <FlatList
          data={pessoa}
          key={(item) => item._id}
          renderItem={({ item }) => (
            <ListItems data={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => (
            <View backgroundColor="#000" height={2} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ffff',
  },
  textInformativo: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: 'center',
    color: '#fff',
  },
  header: {
    marginTop: 10,
    maxHeight: 120,
  },
  buttonBack: {
    position: 'absolute',
    left: 1,
    top: 23,
    marginLeft: 10,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divList: {
    flex: 1,
    width: '100%',
  },
})

export default UsersList