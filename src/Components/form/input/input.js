import React, {Component} from 'react'
import './input.css'

class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            message : null
        }
        this.value = ""
    }

    getValue = () => {
        return this.value 
    }

    hasError = () => {
        if(this.state.message === null || this.state.message !=='') {
            return true 
        } else {
            return false
        }
    }

    handleChange = (e) => { 
        this.value = e.target.value
        let message = '';
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if(this.props.required && this.value.trim() === '') { 
            message = 'Campo Obrigatório' 
        } else if(this.props.type ==='email' && !regex.test(this.value)) { 
            message = 'Digite um e-mail válido' 

        this.setState({ message : message }, this.props.onChange);
        }
    }


    render() {
        return ( 
            <React.Fragment> 
                <input
                    onChange={this.handleChange}
                    onBlur={this.handleChange}                  
                    type={this.props.type}  
                    id={this.props.id}
                    className= 'input'
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                />
                <p className='input__erro'>{this.state.message}</p>
            </React.Fragment>
        )
    }
}

export default Input 