import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/humanit.css';
import Frame from './Frame'
import SpecificFrame from './SpecificFrame'



import hum1 from '../Images/humnitarian/relief1.jpg'
import hum2 from '../Images/humnitarian/train1.jpeg'
import hum3 from '../Images/humnitarian/hh.jpg'
import hum4 from '../Images/humnitarian/mask1.jpg'



const Humanit = () => {
    const [hums, updateHums] = useState([
        { id: "efams/Food", img: hum1, title: "Food and Groceries", story: "The lockdown measures in Affected Regions translate into layoffs and reduced income, making it more of a struggle for many families to put food on the table.We buy stocks,ranging from finished products to large raw food produce from manufacturers with raw stack or finished goods,Large scale farmers.Repack into portable sizes and deliver to appropriate bodies for proper distribution in affected zones. " },
        { id: "efams/Mask", img: hum4, title: "Personal Protective Equipment", story: `EFAMS is coordinating with public health authorities to provide personal protective equipment, or PPE, to health care workers in areas affected by the COVID-19 outbreak. The organization’s most urgent need is to procure and replenish additional PPE items for future deployment. Expanding Our coronavirus response efforts through the large-scale provision of PPE  essentials to not just medical personels but also regular citizen of affected communities.` },
        {
            id: "efams/Medical", img: hum3, title: "Medical Supplies", story: `Aiding and purchase of suplies from  medical manufacturers, and is suppling hospitals,  sharing its assessment and inventory availability with public health agencies.
                        Delivering oxygen concentrators to have available for COVID-19 patients who may need oxygen supplementation during their recovery.
                        Oxygen concentrators can free up ICU beds by allowing patients to recover after they’ve been discharged while still receiving breathing assistance.`},
        {
            id: "efams/Education", img: hum2, title: "Research and Education", story: `
                        Building an ICU medication model and mobilizing private resources to build a stockpile to assist with anticipated spike in ICU patients
                        Boosting support to safety-net facilities to address existing chronic gaps that are likely to grow
                        Collaborating with infectious disease epidemiologists, technology companies and public agencies to use aggregated mobility data to support the COVID-19 response.`}
    ])
    const [Food, updateFood] = useState({ id: "s_f1", type: "food" })
    const [Mask, updateMask] = useState({ id: "s_f2", type: "mask" })
    const [Medical, updateMedical] = useState({ id: "s_f3", type: "medical" })
    const [Education, UpdateEducation] = useState({ id: "s_f4", type: "research" })

    return (
        <div className="init" >
            <BrowserRouter>
                <h3>Relief Categories</h3>
                <Route path="/efams" exact >
                    <Frame docs={hums} />
                </Route>
                <Route path="/efams/Food" exact>
                    <SpecificFrame docs={Food} />
                </Route>
                <Route path="/efams/Mask" exact>
                    <SpecificFrame docs={Mask} />
                </Route>
                <Route path="/efams/Medical" exact>
                    <SpecificFrame docs={Medical} />
                </Route>
                <Route path="/efams/Education" exact>
                    <SpecificFrame docs={Education} />
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default Humanit;
