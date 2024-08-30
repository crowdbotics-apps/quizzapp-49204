import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
const testData = [{
  id: '1',
  name: 'Blood Test',
  description: 'Basic blood work to check your overall health.'
}, {
  id: '2',
  name: 'X-Ray',
  description: 'Radiography used to view the inside of the body.'
}, {
  id: '3',
  name: 'MRI Scan',
  description: 'Magnetic resonance imaging for detailed images.'
}, {
  id: '4',
  name: 'CT Scan',
  description: 'Computed tomography scan for cross-sectional images.'
}, {
  id: '5',
  name: 'Ultrasound',
  description: 'Uses sound waves to capture images of the body.'
}];

const TestScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.itemContainer} onPress={() => console.log('Test Selected:', item.name)}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={testData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    color: '#666'
  }
});
export default TestScreen;