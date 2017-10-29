import React, {Component} from 'react'
import {View} from 'react-native'

import colors from '../../config/colors'
import {toPhoneNumber } from '../../helpers/string'
import Action from './Action'
import styles from './styles'

const Actions=({email, cell, phone})=>{
    return(
        <View style={styles.actionContainer}>
        <Action label='E-mail' info={email} actions={[
            {
                onPress:()=>null,
                iconIos:'ios-mail',
                iconAndroid:'md-mail'
            }
        ]} />
        <Action label='Cell' info={toPhoneNumber(cell)} actions={[
            {
                onPress:()=>null,
                iconIos:'ios-call',
                iconAndroid:'md-call'
            },
            {
                onPress:()=>null,
                iconIos:'ios-call',
                iconAndroid:'md-call'
            }
        ]} />
        <Action label='Phone' info={toPhoneNumber(phone)} actions={[
            {
                onPress:()=>null,
                iconIos:'ios-text',
                iconAndroid:'md-text'
            }
        ]} />
        </View>
    )
}
export default Actions