//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import {contacts} from '../config/data'
import colors from '../config/colors'
import {ListItem} from '../components/ListItem/index'
// create a component
class Contacts extends Component {
    handleRowPress=(item)=>{
        this.props.navigation.navigate('DetailsScreen',item)
    }
    render() {
        return (
                <FlatList
                style={{backgroundColor:colors.background}}
                data={contacts}
                renderItem={({item}) => 
            <ListItem contact={item} onPress={()=> this.handleRowPress(item)} />
            }
                keyExtractor={(item) => item.email}
                />
        );
    }
}


//make this component available to the app
export default Contacts;
