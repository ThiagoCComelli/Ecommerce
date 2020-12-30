import {v4 as uuidv4} from 'uuid'
import React,{useState,useContext} from 'react'
import ItemsAd from '../middleware/itemsAd'
import BasketContext from '../middleware/contextBasket'
import {notification} from '../middleware/notifications'
import '../styles/MenuItemEditor.css'

function MenuItemEditor(props){
    const [infos] = useState(props.state)
    const [obs,setObs] = useState('')
    const [foodItems,setFoodItems] = useState([])
    const {userBasket, setUserBasket} = useContext(BasketContext)

    const addBasket = () => {
        var obj = {...infos,additional:foodItems,obs:obs}
        setUserBasket([...userBasket,{...obj,uuid:uuidv4()}])
        notification({title:"Item adicionado ao carrinho!",type:"success"})
        props.function(undefined)
    }

    const AdditionalItem = (propsAd) => {
        const getQty = () => {
            const exist = foodItems.find((x) => x.product === propsAd.props.product)
            if(exist){
                return exist.qty
            } else {
                return 0
            }
        }
        return(
            <>
            <div className="mainAdItem">
                <div className="mainAdItemImage">
                    <img alt="Product image" src={`${process.env.PUBLIC_URL}/images/pizzas/${infos.image}`}></img>
                </div>
                <div className="mainAdItemDetails">
                    <p>{propsAd.props.product}</p>
                    <span>R${propsAd.props.price} unidade</span>
                </div>
                {getQty()}
                <div className="mainAdItemBtns">
                    <span onClick={() => {
                        const exist = foodItems.find((x) => x.product === propsAd.props.product)
                        if(exist){
                            setFoodItems(
                                foodItems.map((x) => 
                                    x.product === propsAd.props.product ? {...exist, qty: exist.qty + 1} : x
                                )
                            )
                        } else {
                            setFoodItems([...foodItems, {...propsAd.props, qty: 1}])
                        }
                    }}>+</span>
                    <span onClick={() => {
                        const exist = foodItems.find((x) => x.product === propsAd.props.product)
                        if(exist !== undefined){
                            if(exist.qty === 1){
                                setFoodItems(foodItems.filter((x) => x.product !== propsAd.props.product))
                            } else {
                                setFoodItems(foodItems.map((x) => 
                                    x.product === propsAd.props.product ? {...exist,qty:exist.qty-1} : x
                                ))
                            }
                        }
                    }}>-</span>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        <div className="mainMenuItemEditor" >
            <h2>Produto:</h2>
            <div className="menuItemMain">
                <div className="menuItemContents">
                    <div className="menuItemImage" onClick={() => {props.function(undefined)}}>
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
                </div>
            </div>
            <h2>Adicionais:</h2>
            <div className="menuItemEditorConfig gridItemEditor">
                {ItemsAd.map((element_) => {
                    return <AdditionalItem key={element_.product} props={element_}/>
                })}
            </div>
            <h2>Observações:</h2>
            <div className="menuItemEditorConfig">
                <textarea onChange={(e) => {
                    setObs(e.target.value)
                }} spellCheck="false" placeholder="Escreva aqui suas necessidades!"></textarea>
            </div>
            <div className="menuItemEditorBttns">
                <button onClick={() => {props.function(undefined)}}>Cardápio</button>
                <button onClick={() => {addBasket()}}>Adicionar</button>
            </div>
        </div>
        </>
    )
}

export default MenuItemEditor