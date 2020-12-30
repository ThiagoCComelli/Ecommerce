import React,{useContext,useState,useEffect} from 'react'
import UserContext from '../middleware/contextScreens'
import BasketContext from '../middleware/contextBasket'
import BasketItem from './BasketItem'
import Tilt from 'react-tilt'
import '../styles/PaymentMenu.css'

function PaymentMenu(){
    const [stats,setStats] = useState(0)
    const [data,setData] = useState({cardNumber:'____ ____ ____ ____',cvv:'___',validMon:'__',validYear:'__',name:''})
    const {userData,setUserData} = useContext(UserContext)
    const {userBasket, setUserBasket} = useContext(BasketContext)

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
        <div className="mainPaymentMenu screen">
            <div className="mainPaymentMenuBox">
                <div className="mainPaymentMenuContents">
                    <div className="mainPaymentMenuSemiBox">
                        <div className="mainPaymentMenuCreditCardBox">
                            <Tilt className="TiltCreditCard" options={{ max : 15, scale: 1.05 }}>
                                <div className="mainPaymentMenuCreditCard">
                                    <div className="credirCardImg">
                                        <img alt="Product image" className="creditCardLogo" src={`${process.env.PUBLIC_URL}/images/mastercard.svg`}></img>
                                    </div>
                                    <div className="creditCardBank">
                                        <img alt="Product image" className="creditCardImg" src={`${process.env.PUBLIC_URL}/images/Nubank_logo.png`}></img>
                                    </div>
                                    <div className="creditCardInfos">
                                        <h5>{data.name}</h5>
                                        <span>{data.cardNumber}</span>
                                        <div>
                                            <p>Valid<br />Thru</p>
                                            <span>{data.validMon}/{data.validYear}</span>
                                            <p>CVV</p>
                                            <span>{data.cvv}</span>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                            
                        </div>
                        <div className="mainPaymentMenuCreditCardInfos">
                            <h4>Dados do Cartão:</h4>
                            <div className="doubleBox">
                                <div id="card" className="box">
                                    <p>Numero do Cartão</p>
                                    <input onChange={(e) => {
                                        var number = ''
                                        for(var i = 0; i < 16;i++){
                                            if(e.target.value[i] === undefined){
                                                if((i)%4 === 0){
                                                    number += ' '
                                                }
                                                number += '_'
                                            }else{
                                                if((i)%4 === 0){
                                                    number += ' '
                                                }
                                                number += e.target.value[i]
                                            }
                                        }
                                        setData({...data,cardNumber:number})
                                    }} maxLength="16" type="text"></input>
                                </div>
                                <div id="cvv" className="box">
                                    <p>CVV</p>
                                    <input onChange={(e) => {
                                        var cvv = e.target.value
                                        for(var i = 0; i < 3;i++){
                                            if(e.target.value[i] === undefined){
                                                cvv += '_'
                                            }
                                        }
                                        setData({...data,cvv:cvv})
                                    }} maxLength="3" type="text"></input>
                                </div>
                                <div id="valid" className="box">
                                    <p>Validade</p>
                                    <input onChange={(e) => {
                                        var date = e.target.value.split('-')
                                        setData({...data,validMon:date[1],validYear:date[0].slice(2,4)})
                                    }} type="date"></input>
                                </div>
                            </div>
                            <div className="doubleBox">
                                <div className="box">
                                    <p>Nome</p>
                                    <input onChange={(e) => {
                                        setData({...data,name:e.target.value})
                                    }} type="text"></input>
                                </div>
                                <div className="box">
                                    <p>CPF</p>
                                    <input maxLength="14" type="text"></input>
                                </div>
                            </div>
                            <h4>Entrega:</h4>
                            <div className="doubleBox">
                                <div id="endereco" className="box">
                                    <p>Endereço</p>
                                    <input type="text"></input>
                                </div>
                                <div id="numero" className="box">
                                    <p>Numero</p>
                                    <input type="text"></input>
                                </div>
                                <div id="cep" className="box">
                                    <p>CEP</p>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <button className="mainPaymentBtn">Efetuar Pagamento</button>
                        </div>
                    </div>
                    <div className="mainPaymentMenuSemiBox">
                        <div className="mainPaymentMenuBasket">
                            <div className="mainPaymentMenuBasketBox">
                                {userBasket.map((x) => {
                                    return <BasketItem key={x.uuid} props={x}/>
                                })}
                            </div>
                            <div className="mainPaymentMenuBasketTotal">
                                <p>Total a pagar: R${stats.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainPaymentMenuBtns">
                <div onClick={() => {
                        setUserData({...userData,'actualScreen':'mainMenu','lastScreen':userData['actualScreen']})
                    }} className="mainMenuLeftArrow">
                    <img alt="Return button" src={`${process.env.PUBLIC_URL}/images/leftArrow.svg`}></img>
                    <span>Voltar</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentMenu