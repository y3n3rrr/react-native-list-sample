//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {capitalizeFirstLetter} from '../../helpers/string'
import colors from '../../config/colors'
import styles,{CHEVRON_SIZE} from './styles'


// create a component
const ListItem = ({contact,onPress}) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    const icon= Platform.OS=='ios' ? 'ios-arrow-forward':'md-arrow-forward'
        return (
            <TouchableHighlight
                onPress={onPress}
                >
            <View style={styles.row}>
            <Image
             source={{uri:contact.picture.thumbnail}} 
             style={styles.avatar}
             />
             <View>
                 <Text style={styles.name}> {name} </Text>
                 <Text style={styles.email}> {contact.email} </Text>
            </View>
            <View style={styles.chevronContainer}>
                <Icon 
                    name= {icon}
                    size={CHEVRON_SIZE}
                    color={colors.subtleText}
                    style={styles.chevron}
                />
            </View>
            </View>
            </TouchableHighlight>
                
        );
}



//make this component available to the app
export default ListItem;
