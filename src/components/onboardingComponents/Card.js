import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const Card = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{uri: imageUrl}}
        style={styles.image}
      />
      <View style={styles.line}>
        <Text style={styles.button}>Connect</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  button: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
  container: {
    borderWidth: 1,
    width: '48%',
    margin: '1%',
    borderRadius: 4,
    borderColor: COLORS.lightGray,
  },
  image: {
    width: 180,
    height: 180,
  },
  line: {
    width: '100%',
    borderTopWidth: 1,
    height: 40,
    borderColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
