
import React from 'react';
import '../styles/modal.css'
const ModalComp = (props) => {
    return (
        <div className="modal_comp">
            <p  className="cancel" onClick={props.behave}>X</p>
            <div  className="modal_title">
            <h2>{props.data.title}</h2>
            
            </div>

            <div className="mod_contain">
                <p>
                {props.data.name}  
                </p>
                <p>
                {props.data.Routing}  
                </p>
                <p>
                {props.data.account}  
                </p>
                <p>
                {props.data.orgName}  
                </p>
                <p>
                {props.data.swiftCode}  
                </p>
            </div>
            
        </div>
    );
}

export default ModalComp;
