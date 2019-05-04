import React, { Component } from "react";
import FormComponent from "./FormComponent"

class Form extends Component {
    // 从 母 做这里的更改 过后传去 App 
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const { name, value, type, checked } = e.target
        type === "checkbox" ?
          this.setState({
            [name]: checked
          })
        :
            this.setState({
                [name]: value
            })
    }
    render(){
        return (
            // 子
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form;