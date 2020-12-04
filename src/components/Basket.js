import React,{useContext,useEffect,useState} from 'react'
import ContextBasket from '../middleware/contextBasket'
import ContextForceUpdate from '../middleware/contextForceUpdate'
import BasketItem from './BasketItem'

import '../styles/Basket.css'

function Basket(){
    const {userBasket, setUserBasket} = useContext(ContextBasket)
    const {userForceUpdate,setForceUpdate} = useContext(ContextForceUpdate)

    const [stats,setStats] = useState(0)

    const closeBasket = () => {
        var element = document.getElementsByClassName('mainBasket')[0]
        element.style.scale = '0'
    }

    useEffect(() => {
        var value_ = 0

        Object.keys(userBasket).map((item) => {
            value_ += userBasket[item].quantity * userBasket[item].price
        })

        setStats(value_)

    },[userForceUpdate])

    return(
        <>
            <div onMouseLeave={closeBasket} className="mainBasket">
                <div className="mainBasketCloseBox">
                    <img onClick={closeBasket} alt="shooping basket close" src={`${process.env.PUBLIC_URL}/images/basket.svg`}></img>
                </div>
                <div className="mainBasketBox">
                    {Object.keys(userBasket).map((item) => {
                        if(item === 'length') return
                        return <BasketItem key={userBasket[item]._id} props={userBasket[item]} />
                    })}
                </div>
                <div className="mainBasketTotal">
                    <p>Total a pagar: R${stats.toFixed(2)}</p>
                    <button>Finalizar compra</button>
                </div>
            </div>
        </>
    )
}

export default Basket