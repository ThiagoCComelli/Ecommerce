import React,{useContext, useState, useEffect} from 'react'
import ContextBasket from '../middleware/contextBasket'
import ContextForceUpdate from '../middleware/contextForceUpdate'
import '../styles/BasketItem.css'

function BasketItem(props){
    const {userBasket,setUserBasket} = useContext(ContextBasket)
    const {userForceUpdate,setForceUpdate} = useContext(ContextForceUpdate)

    const removeItem = () => {
        var obj = userBasket
        var remove = []

        Object.keys(obj).map((item) => {
            if(item === `id${props.props._id}`){
                remove.push(item)
            }
        })

        remove.forEach(item => {
            delete obj[item]
        })

        setForceUpdate(userForceUpdate + 1)
        setUserBasket(obj)
    }

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
                        <button onClick={removeItem}>Remover</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketItem