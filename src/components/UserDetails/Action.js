import React from 'react'
import {View,Text, Platform, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../config/colors'
import styles,{ICON_SIZE} from './styles'


const Action=({label, info, actions=[]})=>{
    return(
        <View style={styles.actionRow}>
        <View style={styles.Info}>
            <Text style={styles.actionLabel}>{label}</Text>
            <Text style={styles.actionBody}>{info}</Text>
            </View>
            <View style={styles.actionIcons}>
            {actions.map((item, index)=> (
                  <TouchableOpacity onPress={()=>item.onPress}
                  key={index}
                  >
                <Icon
                    name={ Platform.OS=='ios'?item.iconIos:item.iconAndroid}
                    size={ICON_SIZE}
                    style={styles.actionIcon}
                    color={colors.link}
                />
                </TouchableOpacity>)
            )}
           
            </View>
            </View>
    )
}
export default Action