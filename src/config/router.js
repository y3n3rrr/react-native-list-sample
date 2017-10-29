import React from 'react'
import { Platform} from 'react-native'
import {StackNavigator,TabNavigator, DrawerNavigator } from 'react-navigation'
import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import Icon from 'react-native-vector-icons/Ionicons'

import NewContact from '../screens/NewContact'
import Me from '../screens/Me'

import {DrawerButton} from '../components/Header'
const LeftHeaderButton = ({navigation})=>{
    if(Platform.OS==="android"){
        return <DrawerButton  onPress={()=>navigation.navigate('DrawerOpen')} />
    }
    return null
}

export const ContactsStack = StackNavigator({
    ContactsScreen:{
        screen:Contacts,
        navigationOptions:(props)=>({
            title:'Contacts',
            headerLeft: <LeftHeaderButton {...props} />
        })
    },
    DetailsScreen:{
        screen:Details,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}'s Profile'`,
            //title:'Details'
          }),
      
    },
})
export const AddNewContactStack = StackNavigator({
    Scr1:{
        screen:NewContact,
        navigationOptions:(props)=>({
            title:'Add New Contact',
            headerLeft: <LeftHeaderButton {...props}/>
        })
    }
})
export const MeStack = StackNavigator({
    Scr1:{
        screen:Me,
        navigationOptions:(props)=>({
            title:'Me',
            headerLeft: <LeftHeaderButton {...props}/>
        })
    }
})

export const Tabs = TabNavigator({
    Contacts:{
        screen:ContactsStack,
        navigationOptions:{
            tabBarLabel:'Contacts',
            tabBarIcon:({tintColor})=><Icon name='ios-list' size={25} color={tintColor} />
        }
    },
    NewContact:{
        screen:AddNewContactStack,
        navigationOptions:{
            tabBarLabel:'Add',
            tabBarIcon:({tintColor})=><Icon name='ios-add' size={25} color={tintColor} />
        }
    },
    Me:{
        screen:MeStack,
        navigationOptions:{
            tabBarLabel:'Me',
            tabBarIcon:({tintColor})=><Icon name='ios-contact' size={25} color={tintColor} />
        }
    }
},{

    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        upperCaseLabel: false,
        scrollEnabled: false,
    }

})

export const Drawers = DrawerNavigator({
    Contacts:{
        screen:ContactsStack,
        navigationOptions:{
            drawerLabel:'Contacts',
            drawerIcon:({tintColor})=><Icon name='ios-list' size={25} color={tintColor} />
        }
    },
    NewContact:{
        screen:AddNewContactStack,
        navigationOptions:{
            drawerLabel:'Add',
            drawerIcon:({tintColor})=><Icon name='ios-add' size={25} color={tintColor} />
        }
    },
    Me:{
        screen:MeStack,
        navigationOptions:{
            drawerLabel:'Me',
            drawerIcon:({tintColor})=><Icon name='ios-contact' size={25} color={tintColor} />
        }
    }
},{
    
        drawerOptions: {
            showLabel: true,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false,
        }
    
    })