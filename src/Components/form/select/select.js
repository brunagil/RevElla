import React from 'react'
import './select.css'

class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      const listOfOptions = this.props.listOfOptions;
      return (
            <select className={this.props.className} onChange={this.handleChange}>
              {
                listOfOptions.map(item => (
                  <option key={item.id} value={item.text}>
                      {item.text}
                  </option>
              ))
              }
            
            </select>
      );
    }
  }

export default Select  