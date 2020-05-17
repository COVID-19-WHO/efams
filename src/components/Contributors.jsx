
import React from 'react';

import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import '../styles/contributors.css'

import dowload from '../Images/icons/download.png'

const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
    }
}


const Contributors = () => {
    return (
        <StyleRoot>
            <div style={styles.bounceInUp}>
                <div className="top">
                    <h2>Top Contributors</h2>
                </div>
                <div className="list">
                    <ul>
                        <li>African Development Bank</li>
                        <li>Australia</li>
                        <li>Austria</li>
                        <li>Azerbaijan</li>
                        <li>Bill and Melinda Gates Foundation</li>
                        <li>Canada</li>
                        <li>Central Emergency Response Fund (CERF)</li>
                        <li>China</li>
                        <li>COVID-19 Solidarity Response Fund</li>
                        <li>Czech Republic</li>
                        <li>Denmark</li>
                        <li>European Commission</li>
                        <li>Finland</li>
                        <li>France</li>
                        <li>Gavi, The Vaccine Alliance</li>
                        <li>Germany</li>
                        <li>Holy See</li>
                        <li>Ireland</li>
                        <li>Italy</li>
                        <li>Japan</li>
                        <li>King Baudouin Foundation</li>
                        <li>Kingdom of Saudi Arabia </li>
                        <li>Kuwait</li>
                        <li>Liechtenstein</li>
                        <li>Luxembourg</li>
                        <li>New Zealand</li>
                        <li>Norway</li>
                        <li>Novartis International AG</li>
                        <li>OPEC Fund for International Development (OFID)</li>
                        <li>Republic of Korea </li>
                        <li>Republic of Slovenia</li>
                        <li>Singapore</li>
                        <li>Slovakia</li>
                        <li>Switzerland</li>
                        <li>United Kingdom</li>
                        <li>United Nations Development Programme (UNDP)</li>
                        <li>United Nations Development Programme (UNDP) Multi-Partner Trust Fund (MPTF)</li>
                        <li>United Nations Office for the Coordination of Humanitarian Affairs (UNOCHA)	</li>
                        <li>United States</li>
                        <li>Viet Nam</li>
                        <li>Vital Strategies/Resolve to Save Lives</li>
                        <li>World Bank</li>
                    </ul>

                </div>
                <div className="download">
                    <p>Full List From Countries Down To The least Individual Donor</p>
                    <img src={dowload} alt="==>" title=" FULL CONTRIBUTOR LIST DOWN TO INDIVIDUAL DONORS" />
                </div>
            </div>
        </StyleRoot>
    );
}

export default Contributors;
