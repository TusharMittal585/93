import React, { Component } from 'react';
import { Text, View,StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
   } from 'react-native';
  import { RFValue } from "react-native-responsive-fontsize";

export default class BoyDetailScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      boy_name:'',
      boy_age:'',
      boy_number:'',
      family_details:'',
      boy_address:''
    }
  }
     render() {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Dowry Man</Text>
            </View>
          </View>
          <TextInput style={styles.inputFont} 
          onChangeText={boy_name=>this.setState({
            boy_name
          })}
          placeholder={'Enter the boy name'}
          placeholderTextColor='white'
          />
          <TextInput style={styles.inputFont} 
          onChangeText={boy_age=>this.setState({
            boy_age
          })}
          placeholder={'Enter the boy age'}
          placeholderTextColor='white'
          />
          <TextInput style={styles.inputFont} 
          onChangeText={boy_number=>this.setState({
            boy_number
          })}
          placeholder={'Enter the boy number'}
           placeholderTextColor='white'
          />
           <TextInput style={styles.inputFont} 
          onChangeText={boy_address=>this.setState({
            boy_address
          })}
          placeholder={'Enter the boy address'}
           placeholderTextColor='white'
          multiline={true}
          numberOfLines={4}
          />
           <TextInput style={styles.inputFont} 
          onChangeText={family_details=>this.setState({
            family_details 
          })}
          placeholder={'Enter the boy family details'}
           placeholderTextColor='white'
          multiline={true}
          numberOfLines={4}  
          />
        <TouchableOpacity style={styles.goButton}>
        <Text style={styles.buttonText}>SUBMIT</Text> 
        </TouchableOpacity>

        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7, 
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
 inputFont:{
   height:RFValue(40),
   borderColor:'white',
   borderWidth:RFValue(1),
   borderRadius:RFValue(10),
   paddingLeft:RFValue(10),
   color:'white',
   fontFamily:'Arial'
 },
 goButton:{ 
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10,
    borderRadius:RFValue(10),
    borderColor:'white'
  }, 
  buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  }  
});