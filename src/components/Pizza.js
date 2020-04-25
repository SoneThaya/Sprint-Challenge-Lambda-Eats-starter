import React from 'react'
import { Styles } from './Styles'
import { Link } from 'react-router-dom';

function Pizza(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
  } = props


  return (

    <Styles>

    <form>
      <div>
        <h1>Pizza Page</h1>
      </div>

      <div className='errors'></div>

      <label>Name:&nbsp;
      <p className="errors">{errors.name}</p>
      <input
          value={values.name}
          onChange={onInputChange}
          name='name'
          type='text'
        /></label>
      
        <label>Pizza Size:&nbsp;
        <p className="errors">{errors.size}</p>
        <select
            value={values.size}
            onChange={onInputChange}
            name='size'
          >
            <option defaultValue=''>Please choose</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
        </select></label>
        Toppings: 
        <label><input
          checked={values.toppings.cheese}
          onChange={onCheckboxChange}
          name='cheese'
          type="checkbox" /> Cheese</label>
        <label><input
          checked={values.toppings.pepperoni}
          onChange={onCheckboxChange}
          name='pepperoni'
          type="checkbox" /> Pepperoni</label>
        <label><input
          checked={values.toppings.pineapple}
          onChange={onCheckboxChange}
          name='pineapple'
          type="checkbox" /> Pineapple</label>
        <label><input
          checked={values.toppings.bacon}
          onChange={onCheckboxChange}
          name='bacon'
          type="checkbox" /> Bacon</label>
      
          <label><input
            value={values.special}
            onChange={onInputChange}
            name='special'
            type="textarea" /> Special Instructions</label>
        
          
      
            <button onClick={onSubmit}><Link to='/congrats'>Submit Order</Link></button>
      
      </form>
        
    </Styles>
  )
}

export default Pizza