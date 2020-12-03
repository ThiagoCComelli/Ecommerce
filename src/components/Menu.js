import React,{useContext} from 'react'
import UserContext from '../middleware/context'
import MenuItem from './MenuItem'
import '../styles/Menu.css'

function Menu(){
    const {userData,setUserData} = useContext(UserContext)

    return(
        <>
            <div className="mainMenu screen">
                <div className="mainMenuCircle"></div>
                <div className="mainMenuContents">
                    <div className="mainMenuContentsItems">
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum \n dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
                        <MenuItem price="49.90" ingredients="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida." description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt pulvinar nisl, sed tempus risus tincidunt ut. Donec euismod augue vitae leo venenatis, et tincidunt dui porta." title="Lorem ipsum dolor." image="pizzaMenu.jpg"/>
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