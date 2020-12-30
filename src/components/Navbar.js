import React,{useEffect,useContext, useState} from 'react'
import UserContext from '../middleware/contextScreens'
import BasketContext from '../middleware/contextBasket'
import Basket from './Basket'
import '../styles/Navbar.css'

function Navbar(){
    const {userData,setUserData} = useContext(UserContext)
    const {userBasket, setUserBasket} = useContext(BasketContext)
    const [count,setCount] = useState(0)

    const backToMain = () => {
        setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
    }

    useEffect(() => {
        setCount(userBasket.length)
    },[userBasket])

    useEffect(() => {
        var elementList = document.getElementsByClassName('mainNavbarList')[0]
        var elementBasket = document.getElementsByClassName('mainNavbarBasket')[0]
        if(userData['actualScreen'] !== 'mainHero'){
            elementBasket.style.scale = '1'
            elementBasket.style.transform = 'translate(0,0)'
            elementList.style.transform = 'translate(100%,0)'
        } else {
            elementList.style.transform = 'translate(0,0)'
            elementBasket.style.transform = 'translate(0,-10vh)'
            elementBasket.style.scale = '0'
        }

    },[userData['actualScreen']])

    const openBasket = () => {
        var element = document.getElementsByClassName('mainBasket')[0]
        element.style.scale = '1'
    }

    return(
        <>
            <div className="mainNavbar">
                <div onClick={backToMain}  className="mainNavbarH1">
                    <div className="mainNavbarH1other"></div>
                    <h1>LaPizzaria</h1>
                </div>
                <ul className="mainNavbarList">
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
                <div className="mainNavbarBasket">
                    <img onClick={openBasket} id="mainNavbarBasket" alt="shooping basket" src={`${process.env.PUBLIC_URL}/images/basket.svg`}></img>
                    <div className="mainNavbarBasketCountBox">{count}</div>
                    <Basket />
                </div>
            </div>
        </>
    )
}

export default Navbar