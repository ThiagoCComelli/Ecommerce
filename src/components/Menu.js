import React,{useContext, useEffect} from 'react'
import ContextUser from '../middleware/contextScreens'
import ContextBasket from '../middleware/contextBasket'
import ContextItems from '../middleware/contextItems'
import ContextForceUpdate from '../middleware/contextForceUpdate'
import MenuItem from './MenuItem'
import '../styles/Menu.css'

function Menu(){
    const {userData,setUserData} = useContext(ContextUser)
    const {userBasket,setUserBasket} = useContext(ContextBasket)
    const {userForceUpdate,setForceUpdate} = useContext(ContextForceUpdate)
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
    },[userForceUpdate])



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
                    <div className="mainMenuBtns">
                        <div onClick={() => {
                                setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
                            }} className="mainMenuLeftArrow">
                            <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/leftArrow.svg`}></img>
                            <span>Voltar</span>
                        </div>
                        <div onClick={() => {
                                setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
                            }} className="mainMenuRightArrow">
                            <span>Finalizar</span>
                            <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/rightArrow.svg`}></img>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Menu