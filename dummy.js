import React,{useState,useEffect} from 'react'
import {Text,View,FlatList,StyleSheet,ActivityIndicator} from 'react-native'



export default function app(){


const[user,setUser]= useState([])
const[loading,setloading]= useState(true)
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>{setUser(data),setloading(false)})
.catch((err)=>{
  console.error('sdsdsds',err)
  setloading(false)
})
})

if(loading){
<View>
<Text style={styles.common}>welcome dear com</Text>
<ActivityIndicator size='large' color='#333333'/>
</View>
}

return(
  <View style={styles.container}>
  <View style={styles.diver}>
<FlatList
data={user}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=><Text style={styles.omega}>{item.name}</Text>
}
contaonstyle style ={styles.crom}
/>
</View>
</View>

)
}

const styles=StyleSheet.create({

container:{
flex:1,
paddingTop:60,
paddingHorizontal:20,
alignContent:'center',
justifyContent:'center'
},
omega:{
flexDirection:'row',
alignContent:'center',
justifyContent:'center',
paddingHorizontal:100,
paddingVertical:12,
marginHorizontal:11
},
diver:{
flexDirection:'row',
alignContent:'center',
justifyContent:'center'
},
crom:{
flexDirection:'row',
alignContent:'center',
justifyContent:'center'
},
common:{
flexDirection:'row',
alignContent:'center',
justifyContent:'center'
}
})

