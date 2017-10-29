//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment'

import styles from './styles' 
import Action from './Action' 
// create a component
class ExtraInfo extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        const {location, registered} = this.props.info
        const dob=moment(this.props.info.dob).format('MMMM Do, YYYY')
        return (
            <View style={styles.actionContainer}>
            <Action label='City' info={location.city}  />
        <Action label='Street' info={location.street} />
        <Action label='State' info={location.state} />
        <Action label='Postcode' info={location.postcode} />
        <Action label='Birthday' info={dob} />
         {/* <Action label='Register Date' info={registered} />
               <Info label='City' info={location.city} />
                <Info label='Street' info={location.street} />
                <Info label='State' info={location.state} />
                <Info label='Postcode' info={location.postcode} />
                <Info label='Birthday' info={dob} />*/}
                <Info label='Register Date' info={registered} /> 
            </View>
        );
    }
}

const Info=({label, info})=>{
    return (
        <View style={styles.actionRow}>
        <View >
        <Text style={styles.actionLabel}>{label}</Text>
        <Text style={styles.actionBody}>{info}</Text>
    </View>
    </View>
    )
}



//make this component available to the app
export default ExtraInfo;
