import React,{useContext, useEffect} from 'react'
import ContextUser from '../middleware/contextScreens'
import ContextBasket from '../middleware/contextBasket'
import ContextItems from '../middleware/contextItems'
import MenuItem from './MenuItem'
import '../styles/Menu.css'

function Menu(){
    const {userData,setUserData} = useContext(ContextUser)
    const {userBasket,setUserBasket} = useContext(ContextBasket)
    const {userItems} = useContext(ContextItems)

    useEffect(() => {
        var obj = userBasket
        var remove = []

        Object.keys(userBasket).map((item) => {
            if(userBasket[item].quantity === 0){
                remove.push(item)
            }
        })

        remove.forEach((item) => {
            delete obj[item]
        })

        setUserBasket(obj)

    },[userBasket])

    return(
        <>
            <div className="mainMenu screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">
                        {Object.keys(userItems).map((element_) => {
                            return <MenuItem key={element_} props={userItems[element_]}/>
                        })}
                    </div>
                </div>
                <div onClick={() => {
                        setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
                    }} className="mainMenuLeftArrow">
                    <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/leftArrow.svg`}></img>
                    Voltar
                </div>
            </div>
        </>
    )
}

export default Menu