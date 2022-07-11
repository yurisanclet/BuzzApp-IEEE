import { StyleSheet, View } from 'react-native';
import {Routes} from '../frontend/src/routes/';

export default function App() {
  return (
    <View style={styles.container}>
        <Routes></Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
