import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './Header';
import { navigationRef } from './RootNavigation';
import Footer from './Footer';
import NewsDetail from './NewsDetail';
import AboutGlobo from './About';
import QuotePage from './Quote';



const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  } else {

  return (

    <NavigationContainer
    ref={navigationRef}>
      <Stack.Navigator initialRouteName='Globomantics' headerMode="screen">
        <Stack.Screen
        name="Globomantics"
        component={Home}
        options={{
          header: () => <Header headerDisplay='Globomantics' />
        }}/>
        <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: () => <Header headerDisplay='News' />
        }}/>
        <Stack.Screen
        name="About"
        component={AboutGlobo}
        options={{
          header: () => <Header headerDisplay='About Globomantics' />
        }}/>
        <Stack.Screen
        name="Quote"
        component={QuotePage}
        options={{
          header: () => <Header headerDisplay='Get a quote' />
        }}/>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
}
