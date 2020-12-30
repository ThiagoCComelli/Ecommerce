import React,{useState,useEffect,useContext} from 'react'
import BasketContext from '../middleware/contextBasket'
import '../styles/BasketItem.css'

function BasketItem(props){
    const [price,setPrice] = useState(0)
    const {userBasket, setUserBasket} = useContext(BasketContext)

    useEffect(() => {
        var val = 0
        if(props.props.category === 'food'){
            val += props.props.price
            props.props.additional.map((x) => {
                val += x.price*x.qty
            })
        }else{
            var exist = userBasket.find((x) => x.title === props.props.title)
            val += exist.qty*exist.price
        }
        
        setPrice(price+val)
    },[])

    const deleteItem = () => {
        setUserBasket(userBasket.filter((x) => x.uuid !== props.props.uuid))
    }

    const getAdditional = () => {
        if(props.props.category === 'food'){
            var string = ''
            props.props.additional.map((x) => {
                if(string === ''){
                    string += 'Adicionais: '
                }
                string += `${x.product} x${x.qty}; `
            })
            return string
        }
        return null
    }

    const getObs = () => {
        if(props.props.category === 'food'){
            var string = ''
            if(props.props.obs !== ''){
                string += `Observações: ${props.props.obs}`
            }
            return string
        }
        return null
    }

    const getQty = () => {
        const exist = userBasket.find((x) => x.title === props.props.title)
        if(exist){
            return exist.qty
        }
    }

    return(
        <>
            <div className="mainBasketItem">
                <div className="mainBasketBoxItem">
                    <div className="mainBasketBoxItemImage">
                        <img alt="Product image" src={`${process.env.PUBLIC_URL}/images/pizzas/${props.props.image}`}></img>
                    </div>
                    <div className="mainBasketBoxTitle">
                        <h4>{props.props.title}</h4>
                        <span>{props.props.ingredients}</span>
                        <p>{getAdditional()}</p>
                        <strong>{getObs()}</strong>
                    </div>
                    <div className="mainBasketBoxDelete">
                        <span>R${props.props.price} {props.props.category === 'food' ? `+ Adicionais = R$${price.toFixed(2)}` : `x${getQty()}`}</span>
                        <button onClick={() => {deleteItem()}}>Remover</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketItem