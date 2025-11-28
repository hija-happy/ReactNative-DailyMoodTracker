import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './MainTab';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
