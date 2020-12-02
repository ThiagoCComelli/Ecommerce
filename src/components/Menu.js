import React,{useContext} from 'react'
import UserContext from '../middleware/context'

import '../styles/Menu.css'

function Menu(props){
    // const {userData,setUserData} = useContext(UserContext)

    return(
        <>
            <div className="mainMenu screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu