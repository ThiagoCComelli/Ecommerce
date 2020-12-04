import React,{useContext, useState, useEffect} from 'react'
import ContextBasket from '../middleware/contextBasket'
import '../styles/BasketItem.css'

function Basket(props){
    const {userBasket,setUserBasket} = useContext(ContextBasket)

    return(
        <>
            <div className="mainBasketItem">
                <div className="mainBasketBoxItem">
                    <div className="mainBasketBoxItemImage">
                        <img alt="Product image" src={`${process.env.PUBLIC_URL}/images/${props.props.image}`}></img>
                    </div>
                    <div className="mainBasketBoxTitle">
                        <h4>{props.props.title}</h4>
                        <span>{props.props.ingredients}</span>
                    </div>
                    <div className="mainBasketBoxDelete">
                        <span>{props.props.quantity}x R${props.props.price} = R${(props.props.quantity*props.props.price).toFixed(2)}</span>
                        <button>Remover</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket