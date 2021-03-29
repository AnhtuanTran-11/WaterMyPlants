import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
      const onChange = evt => {
        const { name, value } = evt.target
        const valueToUse = value;
        change(name, valueToUse)
      }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2> Sign-up Now! </h2>
                <button disabled={disabled} className="submit"> Submit </button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.phoneNumber}</div>
                    <div>{errors.password}</div>
                </div>

                <h4>General information</h4>
                
                <label>Username:
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'/>
                </label>
                <label>Phone Number:
                    <input
                    value={values.phoneNumber}
                    onChange={onChange}
                    name='phoneNumber'
                    type='text'/>
                </label>
                <label>Password:
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'/>
                </label>
            </form>
        </div>
    )
}
