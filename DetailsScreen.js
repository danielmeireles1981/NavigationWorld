import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const DetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>Olá, mundo!</Text>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/906/439/small/sun-graphic-clipart-design-free-png.png' }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
      <Text>Item 4</Text>
      <Text>Item 5</Text>
      {/* Adicione mais itens conforme necessário */}
    </ScrollView>
  );
};

export default DetailsScreen;
