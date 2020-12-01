import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import UserContext from './middleware/context'
import React,{useState, useEffect} from 'react'

function App() {
  const [userData, setUserData] = useState('mainHero')
  // const [getLog,setLog] = useState(false)

  useEffect(() => {
    var allElements = [].slice.call(document.getElementsByClassName('screen'))

    allElements.forEach(element_ => {
      var name = element_.className.split(" ")[0]
      if(name !== userData){
        if(name === 'mainHero'){
          element_.style.transform = 'translate(-100vw,0)'
        }else{
          element_.style.transform = 'translate(100vw,0)'

        }
      }else{
        element_.style.transform = 'translate(0,0)'
      }
    })

    // setLog(true)

  },[userData])

  return (
    <>
      <UserContext.Provider value={{userData,setUserData}}>
        <Navbar />
        <Hero />
        <Menu />
      </UserContext.Provider>
    </>
  );
}

export default App;
