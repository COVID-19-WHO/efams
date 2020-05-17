import React from 'react';
import Humanit from './Humanit'
import '../styles/message2.css'

const Message2 = () => {
    return (
        <div>
            <div className="message2">

                <Humanit />
                <div className="frame">
                    <iframe src="https://www.who.int/" frameborder="0" title="1"></iframe>
                    <iframe src="https://www.copcap.com/covid-19-overview-of-relief-packages" frameborder="0" title="2"></iframe>
                    <iframe src="https://www.givedirectly.org/covid-19/us/" frameborder="0" title="3"></iframe>
                    <iframe src="https://reliefweb.int/" frameborder="0" title="1"></iframe>
                    <iframe src="https://www2.fundsforngos.org/latest-funds-for-ngos/apply-now-for-the-community-covid-19-united-relief-fund-united-states/" frameborder="0" title="4"></iframe>
                </div>
            </div>


        </div>

    );
}

export default Message2;
