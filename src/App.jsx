import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SignIn from './Components/SignIn/App'
import { App as WebEditor } from './Components/Web Editor/App'
import Firebase from './firebase'


export default function App() {
 const [isUser,setIsUser] = useState(false)

//  run at start
 useEffect(()=>{

  // event listener firebase
  Firebase.auth().onAuthStateChanged((user) => {
    if (user===null) {
      // user logged out
      setIsUser(false)
    }
    else{
      // user logged in
      setIsUser(true)
    }
  })
},[])
    return (
      <div>
         {isUser?<WebEditor />:<SignIn/>} 
      </div>
    )
}
