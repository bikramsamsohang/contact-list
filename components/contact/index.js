import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            {this.props.contact.first_name} {this.props.contact.last_name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 3
    },  
    text: {
        color: 'blue',
        fontSize: 20
    }
})

export default Contact;