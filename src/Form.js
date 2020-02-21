import React from 'react'

import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const UserForm = props => {
    return(
        <div>
            <Form className='form'>
                <label className='form-element'>
                    Name:
                    <Field type='text' name='name' placeholder='name'/>
                    {props.touched.name && props.errors.name && (
                        <p className='error-message'>{props.errors.name}</p>
                    )}
                </label>
                <label className='form-element'>
                    Email:
                    <Field type='text' name='email' placeholder='email'/>
                    {props.touched.email && props.errors.email && (
                        <p className='error-message'>{props.errors.email}</p>
                    )}
                </label>
                <label className='form-element'>
                    Password:
                    <Field type='password' name='password'/>
                    {props.touched.password && props.errors.password && (
                        <p className='error-message'>{props.errors.password}</p>
                    )}
                </label>
                <label className='form-element'>
                    Have you read and agreed to the terms of service?:
                    <Field type='checkbox' name='tos'></Field>
                    {props.touched.tos && props.errors.tos && (
                        <p className='error-message'>{props.errors.tos}</p>
                    )}
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        password: '',
        tos: false
    }),

    validationSchema: Yup.object().shape({
        name: Yup
            .string('Invalid')
            .required('Name is a required field'),
        email: Yup
            .string().email('Invalid Email')
            .required('Email is a required field'),
        password: Yup
            .mixed(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
            .required('Password is a required field'),
        tos: Yup
            .boolean()
            .oneOf([true], 'Please read and agree to the terms of service')
    }),

    handleSubmit(values){
        console.log(values)
        axios.post('https://reqres.in/api/user')
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }
})(UserForm)