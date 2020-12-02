import React,{useEffect,useContext} from 'react'
import UserContext from '../middleware/context'
import '../styles/Navbar.css'

function Navbar(){
    const {userData,setUserData} = useContext(UserContext)

    const handleScroll = () => {
        console.log(window.pageYOffset)
    }

    const backToMain = () => {
        setUserData({...userData,'actualScreen':'mainHero','lastScreen':userData['actualScreen']})
    }

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
        // eslint-disable-next-line
    },userData['actualScreen'])

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    },[])

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
                    <img id="mainNavbarBasket" alt="shooping basket" src={`${process.env.PUBLIC_URL}/images/basket.svg`}></img>
                    <div className="mainNavbarBasketCountBox">0</div>
                </div>
            </div>
        </>
    )
}

export default Navbar