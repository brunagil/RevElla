import React from 'react'
import Button from '../button'
import Input from './input'
import Label from './label'
import Link from './link'
import Select from './select'
import Textarea from './textarea'
import './form.css'

function Form(props) {
    return (
        <form className='form' onSubmit={props.onSubmit}>
            <h2 className='form-part1__title'>{props.title}</h2>
            <p className='form-part1__text'>{props.text}</p>
                {props.children}
            <button>{props.button}</button>
        </form>
    )
}

Form.Button = Button
Form.Input = Input 
Form.Label = Label
Form.Link = Link 
Form.Select = Select
Form.Textarea = Textarea

export default Form 