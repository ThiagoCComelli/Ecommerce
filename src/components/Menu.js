import React,{useContext} from 'react'
import UserContext from '../middleware/context'

import '../styles/Menu.css'

function Menu(props){
    const {userData,setUserData} = useContext(UserContext)

    return(
        <>
            <div className="mainMenu screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">
                        <button onClick={() => {
                            setUserData({...userData,'actualScreen':'mainHero','lastScreen':'mainMenu','op':false})
                        }}>voltar</button>
                        <button onClick={() => {
                            setUserData({...userData,'actualScreen':'mainMenuTest','lastScreen':'mainMenu','op':true})
                        }}>avancar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu