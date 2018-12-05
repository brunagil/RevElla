import React from 'react'
import './textarea.css'

const Textarea = (props) => (
    <textarea 
        className='textarea'
        rows={props.rows} 
        cols={props.cols}
    />
)

export default Textarea 