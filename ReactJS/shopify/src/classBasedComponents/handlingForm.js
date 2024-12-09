import { Field, Form, Formik } from 'formik';
import React from 'react';

function CountryDetails() {
    return(
        <div>
            Country Name is - Japan
        </div>
    )
}
export class FormDemo extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>

                <CountryDetails></CountryDetails>

                <Formik initialValues={{uname: '-', uage:0}} onSubmit={(values) => {console.log(values)}} >
                    <Form>
                        <ul>
                            <li>
                                Name:
                                <Field type="text" name="uname"></Field>
                            </li>
                            <li>
                                Age:
                                <Field type="number" name="uage"></Field>
                            </li>
                            <button type='submit'>Save Details</button>
                        </ul>
                    </Form>
                </Formik>
            </div>
        )
    }
}