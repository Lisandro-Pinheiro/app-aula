import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClassComponent from './src/class-component';
import FunctionComponent from './src/function-component';

export default function App() {
  return (
    <View style={styles.container}>
      <ClassComponent/>
      <FunctionComponent />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    justifyContent:'center',
    alignItems: 'center'
    },
})
