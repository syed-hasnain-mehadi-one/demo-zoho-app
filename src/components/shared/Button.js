import {Button, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
export const PrimaryButton = ({label}) => {
  return (
    <View style={styles.button}>
      <Button title={label ?? ''} color={COLORS.blue} />
    </View>
  );
};

export const FullSizeBtn = ({label}) => {
  return (
    <View style={styles.fullBtnContainer}>
      <Text style={styles.fullBtn}>{label ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  fullBtnContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  fullBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    color: COLORS.while,
  },
});
