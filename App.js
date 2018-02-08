import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

export default class App extends React.Component {
constructor(props)
  {
 
    super(props);
 
    this.state = { 
    isLoading: true
  }
}


componentDidMount() {
    
       return fetch('https://dog.ceo/api/breeds/list')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
     FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  

GetFlatListItem (text) {
   
  Alert.alert(text);

  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 80}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (   
 
<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource.message }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
 
          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item)} > {item} </Text>}
 
          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
 
  }
}


const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'android') ? 20 : 0,
 
},
 
FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
});
