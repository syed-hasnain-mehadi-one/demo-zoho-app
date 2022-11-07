import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

export const PrimaryInput = ({
  lable,
  placeholder,
  keyboard = 'default',
  isPassword = false,
  setData,
}) => {
  return (
    <View style={styles.formField}>
      <Text style={styles.formLabel}>{lable}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.formInput}
        keyboardType={keyboard}
        secureTextEntry={isPassword}
        placeholderTextColor={COLORS.black}
        onChangeText={text => setData(text)}
      />
    </View>
  );
};

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
    borderRadius: 6,
    size: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },
});
