
import React,{ useState } from 'react'

export default function Checkbox() {
    const [state, setState] = useState({data:{
                                                checked_org: false,
                                                checked_ind: false
                                            
    }})


    const Checkbox1 = props =>{
          return(  <input type="checkbox" id='organisation' {...props}/> )
    }

    const Checkbox2 = props =>{
      return(  <input type="checkbox"  id='individual' {...props} /> )
} 
    const handleChange = e =>{ 
        if( e.target.id = "organisation" ){
                if(e.target.checked === false){

               
                
            setState({
                    data: {
                        checked_ind: false,
                        checked_org: e.target.checked
                    }
            })
        }else if( e.target.checked ) {

            setState({
                data: {
                    checked_ind: false,
                    checked_org:  false
                }
        })
            
        }
        }else if(e.target.id === 'individual'){
            setState({
                data: {
                    checked_org: false,
                    checked_ind: e.target.checked
                    
                }
        })

        }
    }
        

  return (
    <div>
        <label htmlFor="">
            <Checkbox1
            checked={state.data.checked_org}
            onChange={handleChange}
            
            />
            <span>Organisation</span>
        </label>
        <label htmlFor="">
            <Checkbox2
            checked={state.data.checked_ind}
            onChange={handleChange}
            
            />
            <span>Individual</span>
        </label>
      
    </div>
  )
}
