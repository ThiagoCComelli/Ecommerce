import React,{useState,useEffect, useContext} from 'react'
import ContextBasket from '../middleware/contextBasket'

import '../styles/MenuItem.css'

function MenuItem(props){
    const [infos,setInfos] = useState(props.props)
    const {userBasket,setUserBasket} = useContext(ContextBasket)

    useEffect(() => {
        setUserBasket({...userBasket,[`id-${infos._id}`]:infos})
    },[infos])

    return(
        <>
            <div className="menuItemMain">
                <div className="menuItemContents">
                    <div className="menuItemImage">
                        <img alt="Product image" src={`${process.env.PUBLIC_URL}/images/${infos.image}`}></img>                   
                    </div>
                    <div className="menuItemDescContents">
                        <h2>{infos.title}</h2>
                        <p>{infos.description}</p>
                        <span>{infos.ingredients}</span>
                    </div>
                    <div className="menuItemPrice">
                        <strong>R${infos.price}</strong>
                    </div>
                    <div className="menuItemBtns">
                        <span>{infos.quantity !== 0 ? `Quantidade: ${infos.quantity}` : false}</span>
                        <button onClick={() => {
                            setInfos({...infos,quantity:infos.quantity+1})
                        }}>Adicionar</button>
                        <button onClick={() => {
                            if(infos.quantity > 0){
                                setInfos({...infos,quantity:infos.quantity-1})
                            }
                            }}>Remover</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem