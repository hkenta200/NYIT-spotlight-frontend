import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navigation from './Navigation';
import AuthStack from './Navigation/AuthStack';

//https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <AuthStack/>
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
