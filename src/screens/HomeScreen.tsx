import {ScrollView, StyleSheet, View} from 'react-native';
import List from '../components/List';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.wrap}>
        <List />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 16,
  },
});
