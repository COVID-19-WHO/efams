import React,{ useState } from 'react';

import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import '../styles/donate.css'

import Toastr from '../shared/Notification'
import Checkbox from './Checkbox'


const Donate = () => {
    const styles = {
        bounceInDown: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
        }
    };




    const [ Data, setData ] =  useState({data:{
                                            name:"",
                                            phoneNumber:"",
                                            email:"",
                                            platform:"",
                                            categorie:"",
                                            receipt:""
    }})

    const [ state, setState ] =  useState({is_checked: false,
                                            state_org:false,
                                            state_ind: false
                                                })

    const handleChange = e =>{
        if(state.is_checked === false ){

            if(  e.target.id === "organisation" ){
                let copyData = {...Data.data}
                copyData.platform="organisation"
                setData({ data: copyData })
                setState({is_checked: true,state_org: true, state_ind: false })
                 
            }else if( e.target.id === "individual" ){
                let copyData = {...Data.data}
                copyData.platform="individual"
                setData({ data: copyData })
             setState({is_checked: true,state_org: false, state_ind: true })
             
            }
        }else if (state.is_checked === true ){


            if(  e.target.id === "organisation" && state.state_org === true ){
                setState({is_checked: false ,state_org: false, state_ind: false })
                 
            }else if( e.target.id === "individual" && state.state_ind === true ){
             setState({is_checked: false,state_org: false, state_ind: false })
             
            }


        }
            
       
    }



    const handleTextChange = e =>{
        let copyData = {...Data.data}
        copyData[e.target.id] = e.target.value;
        setData({data: copyData})
    }


    const handleSubmit = e =>{
            e.preventDefault()

            if(Data.data.name === ""){
                    Toastr.error("PLEASE FILL OUT THE NAME ON THE PAYMENT RECEIPT !!!")
            }else if(Data.data.email === ""){
                Toastr.error("PLEASE ENTER  A VALID CONTACT EMAIL !!!")
            }else if(Data.data.phoneNumber === ""){
                Toastr.error("PLEASE ENTER  A VALID CONTACT PHONE NUMBER !!!")
            }else if(Data.data.categorie === ""){
                Toastr.error("ENTER A CATEGORIE !!!")
            }else if(Data.data.platform === ""){
                Toastr.error("PLEASE ENTER  A DONATION TYPE !!!")
            }else if(Data.data.receipt === ""){
                Toastr.error("PLEASE ENTER  A VALID RECEIPT !!!")
            }else{
            console.log(Data,"HEEEEERRRREEEE")
            //perform post request
            setData({   data:{
                        name:"",
                        phoneNumber:"",
                        email:"",
                        platform:"",
                        categorie:"",
                        receipt:""
            }
        
            })
            Toastr.success("THANK YOU FOR YOUR DONATION (LOAN) , THIS MAKES YOU A SHARE HOLDER IN THE COVID-19 PRE RELEASE VACCINE IN RELATION TO YOUR DONATION CATEGORIE  ")
        }

            
    }

    return (
        <StyleRoot>
            <div className="don" style={styles.bounceInDown}>
                <div className="don_in">
                    <h2>FOR ALL TYPE OF DONATIONS, PLEASE USE ANY OF THE OPTIONS</h2>
                    <div className="div">
                        <h3>BANK ACCOUNT</h3>
                        <p>For Local and International Wire Transfers. Use The Wire Routing Number For Local Transfer, within United States and the Swift Code for international transfers, Outside United States</p>
                        <p>FINANCE ADMIN: Mike. J. Kelly </p>
                        <p> ROUTING NUMBER: 021313103</p>
                        <p>ACCOUNT NUMBER: 4021105491</p>
                        <p>BANK NAME: Citizens Bank </p>
                        <p>BANK ADDRESS: 1 Citizens Drive, Riverside,RI 02915</p>
                        <p>SWIFT CODE: CTZIUS33</p>
                    </div>
                    <div className="div">
                        <h3>PAYPAL</h3>
                        <p>NAME: Emergency Fund Accredition and Management Scheme(EFAMS)</p>
                        <p>FINANCE MANAGER: Mike. J. Kelly  </p>
                        <p>ACCOUNT: Papamijoke@yahoo.com</p>
                        <p>PLATFORM: PAYPAL</p>
                        <p>COMMENT: All Donations Are Received, Same Day</p>
                    </div>
                    <div className="div kk">
                        <h3>BITCOIN</h3>
                        <p>NAME: Emergency Fund Accredition and Management Scheme(EFAMS) </p>
                        <p>ALL BITCOIN WALLET PROVIDER </p>
                        <p>BTC WALLET ADDRESS:   3BAEwgpZMxZiFoh3DS6onozzkXnCRJCNoy</p>
                        <p>BITCOIN WALLET TRANSFER</p>
                        <p>COMMENT: Bitcoin Is Accepted As A Means Of Value Transfer</p>
                    </div>
                    <form  action="" namw="loan" method="post" onSubmit={handleSubmit}>
                        <h3>For Loans</h3>
                        <h4>After The Donation As Been Made ,Please Fill The Form Below </h4>
                        <h5 className="warning">Please Upload Original Receipt</h5>
                        <h5 className="warning">Please Fill with Care, This Is The Validation of Authenticity To Claim  Reimbursement,Interest And Benefit Attatched </h5>
                        <input className="upp" type="text" name="name" value={Data.data.name} onChange={handleTextChange} placeholder=" Enter Full Name" id="name"/> 
                        <input className="upp"  type="email" name="email" value={Data.data.email} onChange={handleTextChange} placeholder="Contact Email" id="email"/>
                        <input className="upp" type="number" name="number" value={Data.data.phoneNumber} onChange={handleTextChange} placeholder="Contact Phone Number" id="phoneNumber"/>
                        <div className="radio">
                            <div>
                            <input type="checkbox" name="individual" checked={state.state_ind} onChange={handleChange} value="individual" id="individual"/>
                            <label htmlFor="individual" >Individual</label>
                            </div>
                            <div>
                            <input type="checkbox" name="individual" checked={state.state_org} onChange={handleChange}  value="Organisation" id="organisation"/>
                            <label htmlFor="organisation">Organisation</label>
                            </div>
                        </div>
                        <select name="categories" value={Data.data.categorie} onChange={handleTextChange} id="categorie">
                            <option value="" selected>Loan Categories</option>
                            <option value="1">$25,000 - $50,000 </option>
                            <option value="2">$50,001 - $100,000</option>
                            <option value="3">$100,001 - $200,000</option>
                            <option value="4">$200,001 - $1000,000</option>
                            <option value="5">$1000,001 - $100,000,000</option>
                            <option value="6">$100,000,001 - $500,000,000</option>
                            <option value="7">$500,000,001 - $1000,000,000</option>
                            <option value="8">$1000,000,001 - Above</option>

                        </select>
                        <label htmlFor="file">Upload Receipt</label>
                        <input type="file" name="file" value={Data.data.receipt} id="receipt" onChange={handleTextChange} title="UPLOAD RECEIPT" />
                        <div className="subm">
                        <button type="submit" className="form_submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </StyleRoot>
    );
}

export default Donate;
