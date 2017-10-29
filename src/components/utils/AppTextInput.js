import React from 'react'
import {TextInput, View} from 'react-native'
import styles from './styles'
const AppTextInput = (props)=>{
    return (
        <View style={styles.textInputContainer}>
            <TextInput placeholder='Enter..'
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.input}
            {...props}
            />
        </View>
    )
}

export default AppTextInput