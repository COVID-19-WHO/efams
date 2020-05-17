import React, { useState } from 'react';
import Nav from './Nav'
import Message1 from './Message1'
import Message2 from './Message2'
import Contributors from './Contributors'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Donate from './Donate'
import Error from './Error'
import { BrowserRouter as MainRouter, Route, Switch, NavLink } from 'react-router-dom'


const Index = () => {

    const ref1 = React.createRef()



    return (
        <div>

            <MainRouter>
                <Nav check={ref1} />

                <Switch>

                    <Route exact path="/efams" >
                        <Message1 />
                        <div ref={ref1}>
                            <Message2 />
                        </div>
                    </Route>

                    <Route exact path="/Contributors">
                        <Contributors />
                    </Route>

                    <Route exact path="/About_Us">
                        <AboutUs />
                    </Route>

                    <Route exact path="/Donate">
                        <Donate />
                    </Route>

                    <Route path="*">
                        <Error />
                    </Route>

                </Switch>

                <Footer />
            </MainRouter>

        </div>
    );
}

export default Index;
