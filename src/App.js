import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'

import axios from 'axios'
import * as yup from 'yup'

import Home from './components/Home';
import Pizza from './components/Pizza';
import Congrats from './components/Congrats';

const url = 'https://reqres.in/api/users'

const initialFormValues = {
  name: '',
  size: '',
  special: '',
  toppings: {
    cheese: false,
    pepperoni: false,
    pineapple: false,
    bacon: false
  }
}

const initialFormErrors = {
  name: '',
  special: '',
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Need at least 3 characters')
    .required('Name is required'),
  size: yup
    .string()
    .matches(/(small|medium|large)/)
    .required('Please choose a size'),
  special: yup
    .string()
})



const App = () => {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getUser = () => {
    axios.get(url)
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: formValues.name,
      size: formValues.size,
      special: formValues.special,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }

    postUser(newUser)
    setFormValues(initialFormValues)
  }

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        console.log(err)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
    
    setFormValues({
      ...formValues,
      [name]: value,
      })
  }

  const onCheckboxChange = e => {
    const { name } = e.target
    const isChecked = e.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  return (
    <>
      <header>
        <h1>Lambda Eats</h1>

        <div>
          <Link to='/'>Home </Link> 
          <Link to='/pizza'> Pizza</Link>
        </div>
      </header>
      
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/pizza'>
        <div>
          <Pizza
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            errors={formErrors}
            />
        </div>
      </Route>

      <Route path='/congrats'>
        <div>
          <Congrats />
          </div>
      </Route>
    
      </Switch>
      
      {

        users.map(values => {
          return (
           
            <Styles>
              <p>{values.name}</p>
              <p>{values.size}</p>
              <p>{values.toppings} {' '}</p>
              <p>{values.special}</p>
            </Styles>
          )
        })
      }

    </>
  );
};
export default App;
