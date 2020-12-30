import React,{useContext, useEffect, useState} from 'react'
import ContextUser from '../middleware/contextScreens'
import BasketContext from '../middleware/contextBasket'
import MenuItems from '../middleware/items'
import MenuItem from './MenuItem'
import MenuItemEditor from './MenuItemEditor'
import '../styles/Menu.css'

function Menu(){
    const {userData,setUserData} = useContext(ContextUser)
    const {userBasket} = useContext(BasketContext)
    const [screenOn,setScreenOn] = useState(undefined)

    const loadItems = () => {
        return(
            <>
            <h2>Pizzas:</h2>
            {MenuItems.map((element_) => {
                if(element_.category === 'food'){
                    return <MenuItem function={setScreenOn} state={screenOn} key={element_._id} props={element_}/>
                }
            })}
            <h2>Bebidas:</h2>
            {MenuItems.map((element_) => {
                if(element_.category === 'drink'){
                    return <MenuItem function={setScreenOn} state={screenOn} key={element_._id} props={element_}/>
                }
            })}
            </>
        )
    }

    return(
        <>
            <div className="mainMenu screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">
                        {screenOn ? <MenuItemEditor function={setScreenOn} state={screenOn}/> : loadItems()}
                    </div>
                    <div className="mainMenuBtns">
                        <div onClick={() => {
                                setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
                            }} className="mainMenuLeftArrow">
                            <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/leftArrow.svg`}></img>
                            <span>Voltar</span>
                        </div>
                        {userBasket.length !== 0 ? (
                            <div onClick={() => {
                                setUserData({...userData,'actualScreen':'mainPaymentMenu','lastScreen':userData['actualScreen']})
                            }} className="mainMenuRightArrow">
                            <span>Finalizar</span>
                            <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/rightArrow.svg`}></img>
                            </div>
                        ) : null}
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Menu