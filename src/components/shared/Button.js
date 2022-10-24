import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

export const FullSizeBtn = ({label}) => {
  return (
    <View style={styles.fullBtnContainer}>
      <Text style={styles.fullBtn}>{label ?? ''}</Text>
    </View>
  );
};

export const SmallButton = ({label}) => {
  return (
    <View style={styles.smallButtonContainer}>
      <Text style={styles.smallButton}>{label ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  // small button
  smallButtonContainer: {
    marginHorizontal: 16,
    marginVertical: 20,
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '25%',
  },
  smallButton: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    color: COLORS.while,
  },
});
