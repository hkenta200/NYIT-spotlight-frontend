import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <Navigation/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
