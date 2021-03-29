import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './components/validation/formSchema'
import Form from './components/Form'


const initialFormValues = {
  username: '',
  phoneNumber: '',
  password: '',
}
 
const initialFormErrors = {
  username: '',
  phoneNumber: '',
  password: '',
}

const initialDisabled = true

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios
    .post(`https://reqres.in/api/users`, newUser)
    .then(resp => {
      setUsers([resp.data, ...users])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const inputChange = (username, value) => {
    yup
    .reach(formSchema, username)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [username]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        [username]: err.errors[0],
      })
    })
    setFormValues({
      ...formValues,
      [username]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password,
    }
    postNewUser(newUser)
    console.log(newUser)
  }

  useEffect(() => {
    formSchema
    .isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])




  return (
    <div className="App">
      <header className='App-header'>
        <Form values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
        </header>
      <h1>Water my plants</h1>
      {
        users.map(user => {
          return (
            <div details={user}>
              <p>Username: {user.username}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;