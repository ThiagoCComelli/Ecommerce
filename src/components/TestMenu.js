import React,{useContext} from 'react'
import UserContext from '../middleware/context'

import '../styles/Menu.css'

function MenuTest(props){
    const {userData,setUserData} = useContext(UserContext)

    return(
        <>
            <div className="mainMenuTest screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">
                        <button onClick={() => {
                            setUserData({...userData,'actualScreen':'mainMenu','lastScreen':'mainMenuTest','op':true})
                        }}>voltar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuTest