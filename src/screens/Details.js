//import liraries
import React, { Component } from 'react';
import { View, Text,ScrollView  } from 'react-native';

import {Header,Actions,ExtraInfo} from '../components/UserDetails'
import colors from '../config/colors'

// create a component
class Details extends Component {
    render() {
        const contact = this.props.navigation.state.params
        return (
            <ScrollView style={{backgroundColor:colors.background }}>
            <Header {...contact} />
            <Actions {...contact} />
            <ExtraInfo info={contact}/>
            </ScrollView>
        );
    }
}

export default Details;
