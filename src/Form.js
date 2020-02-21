import React from 'react'

import { withFormik, Form, Field } from 'formik'
import formik from 'formik'
import yup from 'yup'
import axios from 'axios'

const UserForm = props => {
    console.log(props)
    return(
        <div>
            <Form>
                <label>
                    Name:
                    <Field type='text' name='name' placeholder='name'/>
                </label>
                <label>
                    Email:
                    <Field type='text' name='email' placeholder='email'/>
                </label>
                <label>
                    Password:
                    <Field type='password' name='password'/>
                </label>
                <label>
                    Have you read and agreed to the terms of service?:
                    <Field type='checkbox' name='tos'></Field>
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
        tos: ''
    }),

    handleSubmit(values){
        console.log(values)
    }
})(UserForm)