import React,{useEffect,useContext} from 'react'
import UserContext from '../middleware/context'
import '../styles/Navbar.css'

function Navbar(){
    const {setUserData} = useContext(UserContext)

    const handleScroll = () => {
        console.log(window.pageYOffset)
    }

    const backToMain = () => {
        setUserData('mainHero')
    }

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
            </div>
        </>
    )
}

export default Navbar