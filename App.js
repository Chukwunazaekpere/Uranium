import React from 'react';
import AppIndex from "./src/AppIndex";

import AppStore from "./src/components/redux/Store";
import {Provider} from "react-redux";

import { SafeAreaView } from "react-native";

const App = () => {
  return (
    <Provider store={AppStore}>
      {/* <SafeAreaView> */}
        <AppIndex />
      {/* </SafeAreaView> */}
    </Provider>
  )
}
export default App; 
    


