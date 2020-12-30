import {v4 as uuidv4} from 'uuid'
import React,{useState,useEffect,useContext} from 'react'
import BasketContext from '../middleware/contextBasket'

import '../styles/MenuItem.css'

function MenuItem(props){
    const [infos,setInfos] = useState(props.props)
    const {userBasket,setUserBasket} = useContext(BasketContext)

    return(
        <>
            <div onClick={() => {infos.category === 'food' ? props.function(infos) : null}} className="menuItemMain" id="hover">
                <div className="menuItemContents">
                    <div className="menuItemImage">
                        <img alt="Product image" src={`${process.env.PUBLIC_URL}/images/pizzas/${infos.image}`}></img>                   
                    </div>
                    <div className="menuItemDescContents">
                        <h2>{infos.title}</h2>
                        <p>{infos.description}</p>
                        <span>{infos.ingredients}</span>
                    </div>
                    <div className="menuItemPrice">
                        <strong>R${infos.price}</strong>
                    </div>
                    {infos.category === 'drink' ? 
                        <div className="menuItemBtns">
                            <button onClick={() => {
                                var exist = userBasket.find((x) => infos.title === x.title)
                                if(exist){
                                    setUserBasket(
                                        userBasket.map((x) => 
                                            x.title === infos.title ? {...exist,qty: exist.qty + 1} : x
                                        )
                                    )
                                }else{
                                    setUserBasket([...userBasket, {...infos, qty: 1, uuid:uuidv4()}])
                                }
                            }}>Adicionar</button>
                            <button>Remover</button>
                        </div> : null} 
                </div>
            </div>
        </>
    )
}

export default MenuItem