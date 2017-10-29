import {StyleSheet, Dimensions} from 'react-native'

const window = Dimensions.get('window')

import colors from '../../config/colors'

export const ICON_SIZE=25

const styles = StyleSheet.create({
    image:{
        width: window.width/2,
        height:window.width/2,
        borderRadius:window.width/4
    },
    headerContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15
    },
    name:{
        marginTop:15,
        color:colors.subtleText
    },
    actionContainer:{
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopColor:colors.border,
        borderBottomColor:colors.border,
        paddingVertical:15,
        backgroundColor:colors.greyBackground
    },
    actionRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    actionLabel:{
        fontSize:12,
        color:'red',
        marginBottom:3
    },
    actionBody:{
        fontSize:16,
        color:colors.primaryText,
        marginBottom:5
    },
    actionIcons:{
        flexDirection:'row'
    },
    actionIcon:{
        marginLeft:13
    }
});

export default styles