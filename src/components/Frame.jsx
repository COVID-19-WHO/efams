import React from 'react';
import { bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { withRouter } from 'react-router-dom'

import '../styles/frame.css'

const Frame = (props) => {


    const styles = {
        bounceInRight: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
        }
    }

    const handleClick = (path)=>{
        console.log(path)
        if(path){
            props.history.push("/" + path )
        }
     
        
    }


    const docTemp= props.docs.map((doc)=>{

            return(
               <div  id={doc.id} onClick={()=>{handleClick(doc.id)}} title={doc['title']}>
                <div key={doc.id} className="frame_temp">
                    <div className="frame_img">
                        <img src={doc['img']} alt=""/>
                    </div>
                    <div className="frame_title">
                       <h2>{ doc['title']}</h2>
                    </div>
                    <div className="frame_story">
                      <p> { doc['story'] }</p>
                    </div>
                </div>
                </div>
                
            )
    });
    return (

        <StyleRoot>
            <div style={styles.bounceInRight} className="contain" >
            {docTemp}
            </div>
        </StyleRoot>
    );
}

export default withRouter( Frame );
