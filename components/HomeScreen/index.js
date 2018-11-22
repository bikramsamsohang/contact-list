import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Content } from 'native-base';
import * as contactService from '../../services/ContactService';
import * as USER_CONSTANTS from '../../constants/UserConstants';
import Contact from '../contact';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            contacts: []
        };
    }

    componentDidMount() {
        contactService.fetchContacts(USER_CONSTANTS.USER_URL)
        .then(res => {
            this.setState({
                contacts: res.data
            }); 
        });
    }

    render() {
        return (
        <Content style={styles.container}>
            <Text>Home Screen</Text>         
            {
                this.state.contacts.map((contact) => (
                    <Contact contact={contact} key={contact.id} />
                ))
            }   
        </Content>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        // justifyContent: 'center',
        textAlign: 'left',
        marginHorizontal: 20
    }
});

export default HomeScreen;
