// import { View, Text } from 'react-native'
// import React from 'react'

// const CreateOrder = () => {
//   return (
//     <View>
//       <Text>CreateOrder</Text>
//     </View>
//   )
// }

// export default CreateOrder
import { View, Text,Image, FlatList, TextInput, Alert, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import {launchImageLibrary, launchCamera} from "react-native-image-picker"
import { Button } from 'react-native-paper'
import Modal from "react-native-modal"
import { Picker } from '@react-native-picker/picker'
import {TextInput as TIP}  from "react-native-paper"





const PostProductScreen = () => {


  const id=useSelector(state=>state.ReducerUserInfo.id);
  const [isloading,setIsloading]=useState(false);
  const [image,setImage]=useState({uri:null});
  const [images,setImages]=useState([]);
  const [name,setName]=useState("");
  const [price,setPrice]=useState(0);
  const [maxquantity,setmaxquantity]=useState(0);
  const [description,setDescription]=useState("");
  const [imageList,setImageList]=useState([]);
  const [isVisible,setIsvisible]=useState(false)
  const [chosenCategory,setChosenCategory]=useState(categories[0].name)
  const [options,setoptions]=useState([])
  const navigation=useNavigation()

  const openCamera=async()=>{

    const options={
      storageOptions:{
        path:'images',
        mediaType:'photo',
      },
      includeBase64:true
    };
    await launchCamera(options,response=>{
      console.log('response = ',response);
      if(response.didCancel){
        console.log('User cancelled image picker');
      }
      else if(response.error){
        console.log('ImagePicker error',response.error)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        const source={uri: response.assets[0].uri};
        console.log("Source = ",source);
        setImage(source);
        console.log("Image = ",image);
        setIsvisible(false);
      }
    })
    //setisVisible(false)
  };
  const openGallery=async() => {
    const options={
      storageOptions:{
        path:'images',
        mediaType:'photo',
      },
      includeBase64:true
    };
    await launchImageLibrary(options, response=>{
      console.log('response = ', response);
      if(response.didCancel){
        console.log('User cancelled image picker');        
      }
      else if(response.error){
        console.log('ImagePicker error', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        const source={uri: response.assets[0].uri};
        console.log("Source = ",source)
        setImage(source)
        console.log("Image = ",image)
        setIsvisible(false)
      }
    })
  };


  const openGalleryformultiplepickers=async() => {
    const options={
      storageOptions:{
        path:'images',
        mediaType:'photo',
      },
      //includeBase64:true,
      selectionLimit:0
    };
    await launchImageLibrary(options, response=>{
      console.log('response = ', response);
      if(response.didCancel){
        console.log('User cancelled image picker');        
      }
      else if(response.error){
        console.log('ImagePicker error', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        const list=[];
        response.assets.forEach(
          i=>{
            list.push(i);
          }
        )
       
        console.log("Source images = ",list)
        setImages(list)
       // console.log("Images = ",images)
        setIsvisible(false)
      }
    })
  };


  
  
    return (
      <View style={{height:"100%",width:"100%"}}>
          <Modal isVisible={isVisible}>
              <View style={{width:"60%",paddingTop:15,alignItems:"center",backgroundColor:"#FFF",borderRadius:15,alignSelf:"center"}}>
                  <Text style={{alignSelf:"center"}}>Where do you want to get it?</Text>
                  <Button onPress={openCamera}>Take a photo now</Button>
                  <Button onPress={openGallery}>Get from my gallery</Button>
                  <Button onPress={()=>{setIsvisible(false)}}>Cancel</Button>
              </View>
          </Modal>
          <ScrollView>
              
              <View style={{borderWidth:1,marginTop:10,backgroundColor:"#fff",height:60,marginHorizontal:10,justifyContent:"center",alignItems:"center",marginBottom:5}}>
                  <FlatList horizontal={true}
                  style={{marginTop:5}}
                  data={images}
                  renderItem={
                      ({item})=>(<Image style={{height:50,width:50}} source={{uri:item.uri}}/>)
                  }
                  />
              </View>
              <Button onPress={openGalleryformultiplepickers}>Chọn ảnh</Button>
  
              <Text style={{marginLeft:15,marginTop:10}}>
                Category
              </Text>
              <Picker selectedValue={chosenCategory} onValueChange={setChosenCategory}>
                {
                  categories.map((i)=>(
                    <Picker.Item 
                    key={i.id}
                    value={i.name}
                    label={i.name}
                    />
                  ))
                }
              </Picker>
              <View style={{marginTop:15,paddingHorizontal:10}}>
                <Button placeholder={"Name"} value={name} setvalue={setName}/>
                <Button placeholder={"Price (VNĐ)"} keyboardType={"number-pad"} value={price} setvalue={setPrice}/>
                <Button placeholder={"Stock"} keyboardType={"number-pad"} value={maxquantity} setvalue={setmaxquantity}/>

              </View>
              <Text style={{marginLeft:15,marginTop:10}}>Options of product (optional):</Text>
              <View
               style={{
               marginTop:15,
               marginHorizontal:10,
               marginBottom:10,
              }}>
                <TIP 
                placeholder='Each option should be placed in 1 line'
                multiline style={{padding:10}} onChangeText={(text)=>{
                  const list=[]
                  text.split('\n').map(word=>{
                    list.push(word)
                  })
                  setoptions(list)
                }}/>
              </View>

              <Text style={{marginLeft:15,marginTop:10}}>Description:</Text>
              <View
               style={{
               backgroundColor: "#fff",
               marginTop:15,
               marginHorizontal:10,
               marginBottom:10,
               borderLeftWidth:1,
               borderRightWidth:1
              }}>
                <TextInput multiline style={{padding:10}} value={description} onChangeText={setDescription} editable={true}/>
              </View>
              <View style={{marginTop:10,marginBottom:10,alignItems:"center"}}>
                  <Button mode="contained" onPress={postProduct}>Submit</Button>
              </View>
              
          </ScrollView>
      </View>
    )
  }




export default PostProductScreen