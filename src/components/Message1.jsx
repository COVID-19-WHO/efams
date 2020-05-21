import React from 'react';
import '../styles/message1.css'

import { bounceInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const Message1 = () => {


    const styles = {
        bounceInUp: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
        }
    }



    return (
        <StyleRoot>
            <div style={styles.bounceInUp}>
                <div className="message">
                    <h2 > Emergency Fund Accredition and Management Scheme(EFAMS)</h2>
                    <h2>A Sub-division of World Health Organization(WHO)</h2>
                    <h3>
                        The outbreak and spread of the coronavirus has already created massive disruption around the world, to both businesses and individuals, as well as huge economic uncertainty going forward. The number of confirmed cases grows everyday and, with no market or geography seemingly immune, the difficulties continue to mount.
                        The World is struggling to survive the pandemic, with communities and economies
                        affected barely able to stand.
                </h3>

                    <p>
                        In Response to the Increasing Need For Extensive Relief Packages and Health Care Supplies
            </p>
                    <p>
                        We Are Seeking individual and Organization supports, To Extend Our Reach To The Core Locations In Need.
            </p>
                    <p>
                        The Strategic Preparedness and Response Plan outlines a funding need of at least US$675 million for critical response efforts in countries most in need of help through April 2020. As this outbreak evolves, funding needs are likely to increase.
            </p>
                    <p>
                        As COVID-19 continues to evolve, It reinforces the need for us to act together to keep not only our families, employees and communities healthy, but also our businesses and the economy.
            </p>
                    <p className="notice">
                        We Added Special Forum For Organization And Individuals With Substantial Amount To Give as Loan to The Cause, Pending the passing of this Pandemic  Period.This is to Offer to the Public the Right to have a share in the Patent of the Pre Release COVID-19 Vaccine.  
                </p>
                <p className="notice">
                For Loan Reimbursement, Compensations And Benefits Attached, Are Been Graded Into Categories Based On The Weight Of the Loan. After Donation Fill The Loan form In The Donation Section
                </p>
            
                    <p>
                        Your Donation Is Greatly Appreciated In The Global Effort Supporting The  Ability Of All Countries To Respond to COVID-19, Especially Where The Needs Are Greatest And In Countries With Less Access To Global Markets And Lower Resources
                </p>
            
                </div>

            </div>
        </StyleRoot>
    );
}

export default Message1;
