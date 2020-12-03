import React,{useContext} from 'react'
import UserContext from '../middleware/contextScreens'

import '../styles/Hero.css'

function Hero(){
    const {userData,setUserData} = useContext(UserContext)

    const showOrderInterface = () => {
        setUserData({...userData,'actualScreen':'mainMenu','lastScreen':'mainHero'})
    }

    return(
        <>
            <div className="mainHero screen">
                <div className="mainHeroCircle"></div>
                <img alt="Pizza logo" className="mainPizza" src={`${process.env.PUBLIC_URL}/images/pizza.svg`}></img>
                <div className="mainHeroContents">
                    <div className="mainHeroContent">
                        <h1>LaPizzaria</h1>
                        <p>A melhor pizza da cidade agora no conforto da sua casa! Quem disse que é preciso sair para comer bem? Faça agora o seu pedido que chegamos aí com o que há de melhor! </p>
                    </div>
                    <div className="mainHeroBtns">
                        <button onClick={showOrderInterface} className="mainHeroMakeOrder">Faça Seu Pedido!</button>
                        {/* <button className="mainHeroMakeOrder">Contato</button> */}
                    </div>
                </div>
                <div className="mainHeroFooter">
                    <img alt="Facebook logo" className="" src={`${process.env.PUBLIC_URL}/images/facebook.svg`}></img>
                    <div className="mainHeroFooterNames">
                        <div className="mainHeroFooterNamesBorder"></div>
                        <span>Facebook</span>
                    </div>
                    <img alt="Intagram logo" className="" src={`${process.env.PUBLIC_URL}/images/instagram.svg`}></img>
                    <div className="mainHeroFooterNames">
                        <div className="mainHeroFooterNamesBorder"></div>
                        <span>Intagram</span>
                    </div>
                    <img alt="Twitter logo" className="" src={`${process.env.PUBLIC_URL}/images/twitter.svg`}></img>
                    <div className="mainHeroFooterNames">
                        <div className="mainHeroFooterNamesBorder"></div>
                        <span>Twitter</span>
                    </div>
                    <img alt="Telegram logo" className="" src={`${process.env.PUBLIC_URL}/images/telegram.svg`}></img>
                    <div className="mainHeroFooterNames">
                        <div className="mainHeroFooterNamesBorder"></div>
                        <span>Telegram</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero