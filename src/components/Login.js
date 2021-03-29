import React from 'react'

export default function Login(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
        } = props

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value } = evt.target
        const valueToUSe = value;
        change(name, valueToUSe)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>Log In!</h2>
                <button disabled={disabled} className='submit'> Submit </button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>

                <label>Username:
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
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