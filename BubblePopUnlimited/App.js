/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>Welcome To Bubble Pop Unlimited</Text>
            <Text>Come & Play!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
