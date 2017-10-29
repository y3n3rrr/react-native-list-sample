//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

import {Header,Actions,ExtraInfo} from '../components/UserDetails'
import colors from '../config/colors'

import {me} from '../config/data'

import {PrimaryButton} from '../components/utils'
// create a component
class Me extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:colors.background }}>
                <Header {...me} />
                <PrimaryButton label='Edit Profile' onPress={()=>null} />
                <Actions {...me} />
                <ExtraInfo info={me}/>
            </ScrollView>
        );
    }
}


//make this component available to the app
export default Me;
