import React, { useState } from "react";

const SmurfForm = () => {

    const [addSmurf, setAddSmurf] = useState({
        id: "",
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e => {
        setAddSmurf({
            ...addSmurf,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setAddSmurf({
            id: "",
            name: "",
            age: "",
            height: ""
        })
        console.log("form is submitting", addSmurf)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={addSmurf.name}
                onChange={handleChange}
            /> 
            <br />

            <label>Age:</label>
            <input
                type="text"
                name="age"
                id="age"
                value={addSmurf.age}
                onChange={handleChange}
            />
            <br />

            <label>Height:</label>
            <input
                type="text"
                name="height"
                id="height"
                value={addSmurf.height}
                onChange={handleChange}
            />
            <br/>
            <button >Lets add them Smurfs</button>
        </form>
    )
}

export default SmurfForm;



