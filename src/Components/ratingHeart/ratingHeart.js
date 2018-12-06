import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

render(<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
/>)

export default ratingChanged