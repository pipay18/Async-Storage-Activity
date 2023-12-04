import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigate';
import { TableList } from './src/table';

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}