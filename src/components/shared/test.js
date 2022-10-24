import {StyleSheet, Text, View} from 'react-native';

const test = () => {
  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await res.json();
      console.log('data', JSON.stringify(data));
    } catch (error) {
      console.log('error', error);
    }
  };
  getData();
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
