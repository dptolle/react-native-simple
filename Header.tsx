import { StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';
import logo from './assets/icon.png';

interface HeaderProps {
    headerDisplay: string;
}

export default function Header(props: HeaderProps) {
    return (
      <View style={styles.header}>
          <Image source={logo} style={{ width: 35, height: 35}} />
          <View>
          <Text style={styles.text}>{props.headerDisplay}</Text>
          </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight:0
    },
    text: {
        fontFamily: 'OpenSans'
    }
  });
