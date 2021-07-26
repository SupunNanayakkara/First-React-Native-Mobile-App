import React, { Component } from "react";
import { Text, View } from "react-native";

//Class Component 
/*class App extends Component{
  render(){
    return(
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}*/

//Functional Component
const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello World!</Text>
    </View>
  );
}

export default App;
