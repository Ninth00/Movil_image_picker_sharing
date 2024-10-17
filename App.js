import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function App() {
  let openImagePickerAsync = async ()=>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(permissionResult.granted === false){
      alert('Se requiere permiso para acceder a las fotos');
      return;
    }
    
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true){
      return;
    }
  }
  return (
      <View style={style.container}>
      <Text style={style.title}>Presiona en la imagen</Text>
      <TouchableOpacity onPress = {openImagePickerAsync}>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={style.image}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> console.log('hello')} style={style.button}>
        <Text style={style.buttonText}>Compartir</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container:{flex:1, justifyContent: 'center' , alignItems: 'center', backgroundColor:'grey'},
    title:{fontSize:30},
    text: { color: 'blue', backgroundColor: 'green', fontsize:16},
    image: {height:200, width:200, borderRadius: 50},
    button: {backgroundColor:"red", padding: 7, marginTop: 10, borderRadius: 90},
    buttonText: {color:'#fff', fontSize:20},
    countContainer: {
      alignItems: 'center',
      padding: 3,
    }
})