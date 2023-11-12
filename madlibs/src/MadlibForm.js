import React from "react";
import { useState } from "react";

const MadlibForm = ({add, tog}) => {
    let INITIALVALUE = {
        noun:"",
        color:"",
        noun2:"",
        adjective:""
    }

    let [formData, newFormData] = useState({
        INITIALVALUE
    })
    
    
    let handleChange = (e) => {
        const {name, value} = e.target
        newFormData(fdata => ({
            ...fdata,
           [name]:value
        }))
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        add(formData)
        tog()

    }




    return(
        <form onSubmit={handleSubmit}>
        <input name="noun" placeholder="noun" onChange={handleChange}/>
        <input name="noun2" placeholder="noun2" onChange={handleChange}/>
        <input name="adjective" placeholder="adjective" onChange={handleChange}/>
        <input name="color" placeholder="color" onChange={handleChange}/>
        
        <button type="submit">Add</button>
        </form>

    )

}

export default MadlibForm;