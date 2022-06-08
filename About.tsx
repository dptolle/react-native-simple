import React from "react";
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import imageA from './assets/pexels-craig-adderley-1563356.jpeg';
import imageB from './assets/pexels-pixabay-36717.jpeg';
import imageC from './assets/pexels-simon-berger-1323550.jpeg';


const blockA = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const blockB = `Tincidunt id aliquet risus feugiat in ante. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Urna duis convallis convallis tellus id. Consectetur adipiscing elit pellentesque habitant morbi. Vel orci porta non pulvinar neque laoreet suspendisse. Ridiculus mus mauris vitae ultricies. A lacus vestibulum sed arcu non. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Venenatis a condimentum vitae sapien. Consequat ac felis donec et odio pellentesque. Congue nisi vitae suscipit tellus mauris a diam. Fames ac turpis egestas maecenas pharetra convallis. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Vitae auctor eu augue ut lectus arcu bibendum at. Mauris sit amet massa vitae tortor. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Mi tempus imperdiet nulla malesuada pellentesque. Nunc mattis enim ut tellus elementum sagittis vitae et.`;

export default function AboutGlobo () {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300}}/>
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{ width: '100%', height: 300}}/>
                <Text style={styles.heading}>Leaders in our field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{ width: '100%', height: 300}}/>
                <Text style={styles.heading}>We Are Experts</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      alignItems: 'center',
    },
    heading:{
        paddingTop:5,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    text:{
        fontFamily: 'OpenSans',
    }
  });
