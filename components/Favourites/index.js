import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Favourites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favourites Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        textAlign: 'left',
        marginHorizontal: 20
    }
});

export default Favourites;
