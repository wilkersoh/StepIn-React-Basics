import React from "react";

// 母
function FormComponent(props){
    console.log(props)
    return(
        <main>
            <form>
                <input 
                name="firstName" 
                value={props.data.firstName} 
                onChange={props.handleChange} 
                placeholder="First name" /><br />
                <input 
                name="lastName"
                value={props.data.lastName} 
                onChange={props.handleChange} 
                placeholder="Last name" /><br />
                <input 
                name="age" 
                value={props.data.age} 
                onChange={props.handleChange} 
                placeholder="age" /><br />

<hr />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <select 
                    value={props.data.destination} 
                    name="destination"
                    onChange={props.handleChange}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North pole</option>
                    <option value="south pole">South pole</option>
                </select>

                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> isVegan?
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> isKosher?
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> isLactoseFree?
                </label>

                <button>Submit</button>
            </form>
            <hr />
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your diatary restrictions:</p>

            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    ) 
}

export default FormComponent;