import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import HomeScreen from './components/HomeScreen';
import Favourites from './components/Favourites';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const App = createBottomTabNavigator(
    {
        Home: {
          screen: HomeScreen
        },
        Favourites: {
          screen: Favourites
        }
    },
    {
      tabBarComponent: props => (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active = {props.navigation.state.index === 0}
              onPress = {()=> props.navigation.navigate('Home')}
            >
              <Icon name="home"></Icon>
              <Text>Home</Text>
            </Button>

            <Button
              vertical
              active = {props.navigation.state.index === 1}
              onPress = {()=> props.navigation.navigate('Favourites')}
            >
              <Icon name="heart"></Icon>
              <Text>Favourites</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(App);