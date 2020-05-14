import React from 'react';

import { bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../styles/donate.css'


const Donate = () => {
    const styles = {
        bounceInDown: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
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
                <p>FINANCE MANAGER: Pamela .A.Mikole </p>
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
        </div>
        </div>
        </StyleRoot>
    );
}

export default Donate;
