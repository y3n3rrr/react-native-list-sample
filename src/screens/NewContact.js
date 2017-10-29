//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {AppTextInput} from '../components/utils'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// create a component

import {PrimaryButton} from '../components/utils'
const fields = [
    {placeholder:'First Name', stateKey:'firstName'},
    {placeholder:'Last Name', stateKey:'lastName'},
    {placeholder:'E-mail', stateKey:'email', keyboardType:'email-address'},
    {placeholder:'Phone', stateKey:'phone'},
    {placeholder:'BirthDay', stateKey:'birthday'},
    {placeholder:'Register', stateKey:'register'},
    {placeholder:'Address', stateKey:'address'},
    {placeholder:'Secret Question', stateKey:'squestion'},
    {placeholder:'Secret Answer', stateKey:'sanswer'}
]
class NewContact extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    onInputchange=(text, stateKey)=>{
        const mod={}
        mod[stateKey]=text
        this.setState(mod)
    }
    handleSubmit=(item)=>{
        //alert('User:"'+item.firstName+'" saved');
        alert('saved');
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                {fields.map((item,index)=>(
                 <AppTextInput 
                 key={item.stateKey}
                 onChangeText={(text)=>this.onInputchange(text, item.stateKey)}
                 {...item}
                    />
        ))}
        <View style={{alignItems:'flex-end', marginRight:15}}>
        <PrimaryButton  label='Submit' onPress={(item)=> this.handleSubmit(item)}/>
        </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default NewContact;
