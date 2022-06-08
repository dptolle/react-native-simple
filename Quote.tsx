import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function QuotePage(){
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [message, messageChange] = useState('');
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);


    const postMessage = () => {
        if(!name|!email|!message) {
            setError(true);
        } else {
            setError(false);
            trySubmit(true);
        }
    };

    return(
<View style={styles.container}>
            <ScrollView>
                {
                    submitError ?
                        <Text style={styles.status}>You didn't enter a Name, Email, or message</Text>
                        :
                        <Text style={styles.status}>
                            Please enter the requested information
                        </Text>
                }
                {
                    submitted ?
                        <Text>
                            Name: {name} Email: {email}
                        </Text>
                        :
                        <Text style={styles.req}>
                            * required
                        </Text>
                }
                 <Text style={styles.label}>
                            Name *
                        </Text>
                <TextInput
                        style={styles.input}
                        onChangeText={ text => nameChange(text)}
                        value={name}
                        />
                        <Text  style={styles.label}>
                            Email *
                        </Text>
                <TextInput
                        style={styles.input}
                        onChangeText={ text => emailChange(text)}
                        value={email}
                        />
                        <Text  style={styles.label}>
                            Phone number
                        </Text>
                <TextInput
                        style={styles.input}
                        onChangeText={ text => phoneChange(text)}
                        value={phone}
                        />
                        <Text  style={styles.label}>
                            Message *
                        </Text>
                        <TextInput
                        style={styles.multi}
                        onChangeText={ text => messageChange(text)}
                        value={message}
                        multiline
                        numberOfLines={6}
                        />
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => postMessage()}>
                            <Text>SubmitQuote</Text>
                        </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      alignItems: 'flex-start',
      paddingLeft:20,
      paddingRight: 20,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'

    },
    input:{
        fontFamily: 'OpenSans',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        width: 250
    },
    label:{
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic'
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight:'auto',
        paddingTop:10
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
  });
