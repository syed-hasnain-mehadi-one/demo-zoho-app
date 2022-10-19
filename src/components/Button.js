import {Button, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/Theme';
export const PrimaryButton = () => {
  return (
    <View style={styles.button}>
      <Button title="Sign In" color={COLORS.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
