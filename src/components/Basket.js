import React,{useContext,useEffect,useState} from 'react'
import BasketContext from '../middleware/contextBasket'
import BasketItem from './BasketItem'

import '../styles/Basket.css'

function Basket(){
    const [stats,setStats] = useState(0)
    const {userBasket, setUserBasket} = useContext(BasketContext)

    const closeBasket = () => {
        var element = document.getElementsByClassName('mainBasket')[0]
        element.style.scale = '0'
    }

    useEffect(() => {
        var val = 0
        userBasket.map((x) => {
            if(x.category === 'food'){
                x.additional.map((y) => {
                    val += y.price*y.qty
                })
                val += x.price
            }else{
                val += x.price * x.qty 
            }
            
        })
        setStats(val)
    },[userBasket])

    return(
        <>
            <div onMouseLeave={closeBasket} className="mainBasket">
                <div className="mainBasketCloseBox">
                    <img onClick={closeBasket} alt="shooping basket close" src={`${process.env.PUBLIC_URL}/images/basket.svg`}></img>
                </div>
                <div className="mainBasketBox">
                    {userBasket.map((x) => {
                        return <BasketItem key={x.uuid} props={x}/>
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