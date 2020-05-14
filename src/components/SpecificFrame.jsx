import React from 'react';
import { bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { withRouter } from 'react-router-dom'

import '../styles/specificframe.css'

//-->Food images
import spec1 from "../Images/humnitarian/relief1.jpg"
import spec3 from "../Images/humnitarian/relief3.jpeg"
import spec4 from "../Images/humnitarian/relief4.jpg"
import spec5 from "../Images/humnitarian/relief6.jpeg"
import spec6 from "../Images/humnitarian/relief7.jpg"
import spec7 from "../Images/humnitarian/relief8.png"


//-->mask images
import mask1 from "../Images/humnitarian/uu.jpg"
import mask2 from "../Images/humnitarian/mask2.jpg"
import mask3 from "../Images/humnitarian/mask3.jpg"
import mask4 from "../Images/humnitarian/mask4.jpg"
import mask5 from "../Images/humnitarian/mask5.jpg"
import mask6 from "../Images/humnitarian/mask6.jpg"
import mask7 from "../Images/humnitarian/mask7.png"
import mask8 from "../Images/humnitarian/mask8.jpg"
import mask9 from "../Images/humnitarian/mask9.jpg"
import mask10 from "../Images/humnitarian/mask10.jpg"


//-->medical images
//import medical1 from "../Images/humnitarianmedical1.jpg"
import medical2 from "../Images/humnitarian/medical2.jpg"
import medical4 from "../Images/humnitarian/medical4.jpeg"
import medical5 from "../Images/humnitarian/medical5.jpg"
import medical6 from "../Images/humnitarian/medical6.jpg"
import medical8 from "../Images/humnitarian/medical8.jpg"
import medical9 from "../Images/humnitarian/medical9.jpg"





//-->research images
//import research1 from "../Images/humnitarian/mask1.jpg"
import research2 from "../Images/humnitarian/lecture2.jpeg"
import research3 from "../Images/humnitarian/lecture3.jpg"
import research4 from "../Images/humnitarian/lecture4.jpeg"
import research5 from "../Images/humnitarian/lecture5.jpg"
import research6 from "../Images/humnitarian/lecture6.jpg"
import research7 from "../Images/humnitarian/lecture7.jpg"
import research8 from "../Images/humnitarian/lecture8.jpg"
import research9 from "../Images/humnitarian/lecture9.jpg"





import back_btn from '../Images/icons/icons8-go-back-50.png'


const SpecificFrame = (props) => {
    let Back;
    //const [Back,setBack]=useState()

    console.log(props.docs)

if(props.docs){

    
    switch(props.docs.type){
        case "food":
            Back=[
                {id:"f_1",text:`We partner with regional and local distributors, whose workforce has been significantly impacted by the closure of many restaurants, hotels, and other food service entities, to purchase $3 billion in fresh produce, dairy, and meat.` ,
                 back_img: spec1},
                { id:"f_3",text:"we have up to an additional $873.3 million available in Section 32 funding to purchase a variety of agricultural products for distribution to food banks. The use of these funds will be determined by industry requests, agricultural market analysis, and food bank needs." ,
                 back_img: spec3},
                { id:"f_4",text:"We  ascertain  the health and safety of our employees while still providing the timely delivery of the services to maintain the movement of  food supply from farm to needed regions" ,
                 back_img: spec4},
                { id:"f_5",text:"producers of eligible commodities can request for loan and they have up to 12 months to repay their commodity loans. The maturity extension applies to nonrecourse loans for crop. Eligible open loans must in good standing and registered with the organisation" ,
                 back_img: spec5},
                { id:"f_6",text:"By creating Food labeling flexibility, food can be diverted from restaurants to retail, ensuring that this food is made available to families around the country and helping restaurants and their suppliers access additional markets, such as grocery stores, that are currently experiencing greater demand " ,
                 back_img: spec6},
                { id:"f_7",text:"we had taken action during the COVID-19 national emergency to make sure children and families are fed during a time of school closures and job losses, as well as increase flexibilities and extensions in our farm programs to ensure the  food supply chain remains safe and secure." ,
                 back_img: spec7}
            ]
            console.log(Back)
            break;
        case 'mask':
            Back= [
                {id:"m_1",text:"We have been providing face masks  for frontline healthcare workers including but not limited to, nurses, long-term care residents, lab techs, EMTs, Pharmacists, Police, Jailers, school servers,  and even food delivery businesses." ,
                 back_img: mask1},
                { id:"m_2",text:"Donating up to 4000 ventilators,The donated ventilators, reflect state-of-the-art and in-demand technology. They are compact, deployable, and support both invasive and non-invasive applications." ,
                 back_img: mask2},
                { id:"m_3",text:"We aimed  to develop technologies to reuse existing masks, domestic production of efficient protective equipment and alternative masks with new properties to trap and kill viruses." ,
                 back_img: mask3},
                { id:"m_4",text:"collaboration with local  manufactures, to increase mass production and implementation of better product formulation to specifically tackle COVID-19 " ,
                 back_img: mask4},
                { id:"m_5",text:"Continous production and distribution of clinical uniforms with anti-viral materials to frontline healthcare workers.  " ,
                 back_img: mask5},
                { id:"m_6",text:"We are on full production with co-operation with local manufacturers, with output more than 440,000 pounds. The sanitizers are donated to hospitals and approprate bodies in need .", 
                 back_img: mask6},
                { id:"m_7",text:"We established how the masks can be sterilized without damaging them, how they can be stored for long periods, and how their effectiveness can be verified beyond doubt even after repeated use. researchers worked with non-infectious particles that simulate the events on the inside and outside of a mask similar to a droplet infection." ,
                 back_img: mask7},
                { id:"m_8",text:" Donating hundreds of thousands of disposable gloves to businesses in need, including hospitals and long-term care facilities, We impose a retooled on manufacturing infrastructure to produce much-needed PPE for workers on the front lines of the COVID-19 pandemic." ,
                 back_img: mask8},
                { id:"m_9",text:"Creating inovations with top researchers to better protect health workers. who stands the most endangered professon in recent times." ,
                 back_img: mask9},
                { id:"m_10",text:"Testing of new Formulars in disinfectant. New techonologies that stays on pores to give hours of protection without negative skin effect.  " ,
                 back_img: mask10}
                
            ];
            break;
        case 'medical':
            Back=[
                { id:"me_2",text:"We deliver new shipment of emergency medical supplies to  most AFrican Countries, as part of COVID-19 response measures." ,
                 back_img: medical2},
                { id:"me_4",text:` Supplies to support the fight against the COVID-19 pandemic, including test kits, essential health supplies, including routine vaccines for children.` ,
                 back_img: medical4},
                { id:"me_5",text:"We Distributed 92 tonnes of medical equipment and essential health supplies ,to numerous affected regions. " ,
                 back_img: medical5},
                { id:"me_6",text:"We are presently at 200 facilities with just over 3000 ventilators, spread accross affected zones. " ,
                 back_img: medical6},
                { id:"me_8",text:"We support health workers battling COVID-19, with surgical masks and gloves, protective suits and goggles, gowns and thermometers." 
                , back_img: medical8},
                { id:"me_9",text:`Market demand for clinical care equipment is estimated to be 20 times the historical demand, with oxygen
                concentrators unlikely to be available before September at the earliest. we to work with private sector
                partners on procurement efforts to secure supplies of oxygen, consumables and accessories for oxygen therapy.` 
                , back_img: medical9}
                
            ];
            break;
        case 'research':
            Back= [
                { id:"r_2",text:"A recent open-label study claimed that hydroxychloroquine and azithromycin represent promising new options for the treatment of SARS-CoV-2. This re-analysis reveals severe limitations in the methodology of this study, including ambiguous inclusion/exclusion of participant data and inconsistent analysis techniques, and yielded nonsignificant differences between control and treatment groups across any treatment days." ,
                 back_img: research2},
                { id:"r_3",text:`Creating awareness about the General protective measures.i.e
                Practicing hand and respiratory hygiene is important at ALL times and is the best way to protect others and yourself.` ,
                 back_img: research3},
                { id:"r_4",text:`Creating platforms for the storage , update and dessemination of COVID-19 related data to update regulation and best protection practices.  ` ,
                 back_img: research4},
                { id:"r_5",text:` Co-ordinating guidance on early investigations, which are critical in an outbreak of a new virus.The data
                collected from the protocols can be used to refine recommendations for surveillance and case definitions, to
                characterize the key epidemiological transmission features of COVID-19, help understand spread, severity,
                spectrum of disease.`, 
                 back_img: research5},
                { id:"r_6",text:"The pathogenesis of COVID-19 is currently believed to proceed via both directly cytotoxic and immune-mediated mechanisms. An additional mechanism facilitating viral cell entry and subsequent damage may involve the so-called antibody-dependent enhancement (ADE)." , 
                back_img: research6},
                { id:"r_7",text:"Creating regional test points and supporting isolation centers with required testing equipments." ,
                 back_img: research7},
                { id:"r_8",text:`we are with working  researchers and other experts to coordinate global work on surveillance,
                .To create interim guidance for afected areas, which are updated regularly.`,
                  back_img: research8},
                { id:"r_9",text:"We colaborate with professionals in disciplines relevant to this disease including virology, pathology, infectious diseases, pulmonology, gastroenterology, and critical care medicine. The conjunction of basic and clinical research prepares us to succeed in a full assault on COVID-19. " ,
                 back_img: research9}              
                
            ];
            break;
            default:
    }
    console.log(Back)
    
    
}
console.log(Back)

    const styles = {
        bounceInRight: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
        }
    }

    const handleClick = ()=>{
        console.log( props.docs)
        //props.docs
        
            props.history.push( "/" )
     
        
    }


    const docTemp= Back.map((doc)=>{
        
            return(
               <div  key={doc.id} className="specific_inner"  >
                   <img src={doc.back_img} alt=""/>
                  <p className="back_text">{doc.text}</p>
                    
                </div>
                
            )
    });
    return (

        <StyleRoot>
            <div style={styles.bounceInRight} >
                <div className="bck_btn">
                    <img src={back_btn} alt="<<<<" onClickCapture={handleClick} title="BACK"/>
                </div>
                <div className="down_contain">
            {docTemp}
            </div>
            </div>
        </StyleRoot>
    );
}

export default withRouter( SpecificFrame );
