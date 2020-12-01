import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import MenuTest from './components/TestMenu'
import UserContext from './middleware/context'
import React,{useState, useEffect} from 'react'

function App() {
  const [userData, setUserData] = useState({'actualScreen':'mainHero','lastScreen':'mainHero','mainHero':0,'mainMenu':1})
  // const [getLog,setLog] = useState(false)

  useEffect(() => {
    var allElements = [].slice.call(document.getElementsByClassName('screen'))

    var op = userData['actualScreen'] > userData['lastScreen'] ? 'translate(-100vw,0)' : 'translate(100vw,0)'

    allElements.forEach(element_ => {
      var name = element_.className.split(" ")[0]
      if(name === userData['actualScreen']){
        element_.style.transform = 'translate(0,0)'
      } else if(name === userData['lastScreen']) {
        element_.style.transform = op
      }
    })

  },[userData])

  return (
    <>
      <UserContext.Provider value={{userData,setUserData}}>
        <Navbar />
        <Hero />
        <Menu />
        <MenuTest />
      </UserContext.Provider>
    </>
  );
}

export default App;
