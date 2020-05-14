
import React from 'react';

import { bounceInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../styles/aboutus.css'


const styles = {
    bounceInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounceInUp, 'bounceInUp')
    }
}


const AboutUs = () => {
    return (
        <StyleRoot>
        <div className="about_us" style={styles.bounceInUp}>
            <h3 className="us">
                What Is Emergency Fund Accredition and Management Scheme(EFAMS) <span style={{color:'#f00'}}>?</span>

            </h3>
            <article>
            <p> EFAMS is a sub Branch under the World Health Organisation .Due to the situation of recent times,The need arise to operate directly for efficient functionality. </p>
            <p>We team up with local government agencies, NGO partners, and community leaders to bring efficient, effective relief to communities hit by disaster. Our rapid response capabilities and teams on the ground allow us to immediately deliver lifesaving supplies and care.</p> 
            <p> We are aid organization, with a mission to improve the health and lives of people affected by emergencies – without regard to politics, religion, or ability to pay.</p>
            <p> In communities that are prone to disaster, we work to manage their risk of and strengthen their resilience to future shocks. We help bolster local economies, improve infrastructure, and plan for long-term development.</p>
            <p> In the past years, we have responded to every major humanitarian crisis in the world—including Bangladesh, Nigeria, South Sudan, Yemen, Syria, Iraq, and Central African Republic. Our teams around the world delivered rapid, effective, lifesaving assistance—and we will stay for the long-haul to create sustainable solutions for whole communities. </p>
            <p>We provid mental health care to pressured and distressed health care workers which is an essential service.</p>
            <p>The principle that all people should enjoy the highest standard of health, regardless of race, religion, political belief, economic or social condition, has guided us through time</p>
            <p>From the very beginning, we have brought together the world’s top health experts to produce international reference materials and to make recommendations to bring better health to people throughout the world. 
                These range from the International Classification of Diseases, which enables all countries to use a common standard for reporting diseases and identifying health trends, to serve as a guide for countries on the key medicines that a national health system needs.</p>
                <p>Shifting focus
                In recent decades, the world has seen a rise in noncommunicable diseases such as cancer, diabetes and heart disease. Driven by forces such as rapid unplanned urbanization, globalization of unhealthy lifestyles and population ageing, these diseases now account for 70%of all deaths. So we had focused, along with health authorities around the world, to promote healthy eating, physical exercise and regular health checks.</p>
                <p>
                The Organization has run global health campaigns on the prevention of diabetes and high blood pressure and on healthy cities. A formidable tool to help reduce disease and death caused by tobacco.
                </p>
            </article>



        </div>
        </StyleRoot>
    );
}

export default AboutUs;
