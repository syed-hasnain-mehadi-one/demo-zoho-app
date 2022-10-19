import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/Theme';
const FormField = () => {
  return (
    <View style={styles.formField}>
      <Text style={styles.formLabel}>Email/Username</Text>
      <TextInput
        placeholder="Enter email or username"
        style={styles.formInput}
      />
    </View>
  );
};
export default FormField;

const styles = StyleSheet.create({
  formField: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  formLabel: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.black,
    paddingBottom: 5,
  },
  formInput: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 4,
    size: SIZES.medium,
    fontFamily: FONTS.semiBold,
  },
});
