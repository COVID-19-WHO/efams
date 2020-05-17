import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom'

import Modal from 'react-modal'
import '../styles/footer.css'

import ModalComp from './ModalComp'

import banner1 from '../Images/who1.jpeg'
import banner2 from '../Images/accredi.png'
import banner3 from '../Images/chh.jpeg'
import banner4 from '../Images/guid.jpeg'
import banner5 from '../Images/irs.jpeg'
import banner6 from '../Images/watc.png'

import facebook from '../Images/icons/icons8-facebook-50.png'
import linkedin from '../Images/icons/icons8-linkedin-50.png'
import account from '../Images/icons/icons8-merchant-account-50.png'
import twitter from '../Images/icons/icons8-twitter-circled-50.png'
import wallet from '../Images/icons/icons8-coin-wallet-50.png'
import paypal_img from '../Images/icons/icons8-paypal-50.png'




const Footer = (props) => {
    Modal.setAppElement('body')

    const [modal, updateModal] = useState(false);

    const bank = {
        title: "FOR  ORGANIZATION OR INDIVIDUAL DONATION ",
        name: "FINANCE ADMIN: Mike. J. Kelly",
        Routing: " ROUTING NUMBER: 021313103",
        account: "ACCOUNT NUMBER: 4021105491",
        orgName: 'BANK : Citizens Bank, BANK ADDRESS: 1 Citizens Drive, Riverside,RI 02915',
        swiftCode: "SWIFT CODE: CTZIUS33"
    }



    const bitcoin = {

        title: "FOR  ORGANIZATION OR INDIVIDUAL DONATION ",
        name: "NAME: Emergency Fund Accredition and Management Scheme(EFAMS) ",
        Routing: "ALL BITCOIN WALLET PROVIDER ",
        account: "BTC WALLET ADDRESS:   3BAEwgpZMxZiFoh3DS6onozzkXnCRJCNoy",
        orgName: "BITCOIN WALLET TRANSFER",
        swiftCode: "COMMENT: Bitcoin Is Accepted As A Means Of Value Transfer"
    }



    const paypal = {

        title: "FOR  ORGANIZATION OR INDIVIDUAL DONATION ",
        name: "NAME: Emergency Fund Accredition and Management Scheme(EFAMS)",
        Routing: "FINANCE MANAGER: Pamela .A.Mikole",
        account: "ACCOUNT: Papamijoke@yahoo.com",
        orgName: "PLATFORM: PAYPAL",
        swiftCode: "COMMENT: All Donations Are Received Same Day"

    }


    const [state, updateState] = useState("")

    const openModal = (e) => {

        if (e.target.id === "account") {
            updateState(bank)
        } else if (e.target.id === "bitwallet") {
            updateState(bitcoin)
        } else if (e.target.id === "paypal") {
            updateState(paypal)
        }
        updateModal(true)
        console.log(modal)
    }

    const closeModal = () => {
        updateModal(false)
    }


    return (
        <div className="foot">
            <div className="icons">
                <a href="https://web.facebook.com/WHO/?_rdc=1&_rdr"><img src={facebook} alt="" title="FACEBOOK" /></a>
                <a href="https://twitter.com/who?lang=en" ><img src={twitter} alt="" title="TWITTER" /></a>
                <a href="https://www.linkedin.com/company/world-health-organization/"><img src={linkedin} alt="" title="LINKEDIN" /></a>
                <img src={paypal_img} alt="" title="PAYPAL" onClick={openModal} id="paypal" />
                <img src={account} alt="" title="ACCOUNT" onClick={openModal} id="account" />
                <img src={wallet} alt="" title="BITCOIN WALLET" onClick={openModal} id="bitwallet" />

            </div>
            <div className="btn">
                <NavLink to="/Donate" className="donate_btn" >
                    Donate
            </NavLink>
            </div>
            <div className="banner">
                <img src={banner1} alt="" />

                <img src={banner2} alt="" />
                <img src={banner3} alt="" />
                <img src={banner4} alt="" />
                <img src={banner5} alt="" />
                <img src={banner6} alt="" />
            </div>
            <p>
                &copy;2020 Emergency Relief Response | EFMS
            </p>
            <p className="last">
                Emergency Relief Response | EFMS is a recognized 501(c)(3) not-for-profit organization by the IRS.
            </p>

            <Modal
                isOpen={modal}
                contentLabel="example"
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="Overlay"

            >
                <ModalComp behave={closeModal} data={state} />
            </Modal>
        </div>
    );
}

export default withRouter(Footer);
