import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

var FormikComponentsDemo = () => {
    var formikInitialValues = {
        userName: '',
        userAge: 0,
        userGender: '',
        userContactNo: '',
        userMailID: '',
        userCountry: '',
        userPwd: '',
    };
    // var formikValidationSchema = {
       
    // }
    return(
        <div>
            <h3>User Registration Form</h3>

            <Formik initialValues={formikInitialValues} onSubmit={(userDetails) => {console.log(userDetails)}} validationSchema={ yup.object({
            userName: yup.string().required("Name is mandate field").trim().min(5, "Name should be of minimum 5 chars").max(10, "Name should be of maximum 10 chars"),
            userAge: yup.number().required("Age is mandate").min(21, "Minimum age should be 21").max(35, "Maximum age should be 35"),
            userGender: yup.string().required("Select Gender"),
            userCountry: yup.string().required("Select any one Country"),

           userMailID: yup.string().required("Mail is mandate").matches( /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ 
            , "Please enter a valid mail id"),

            userPwd: yup.string().required("Enter a valid Password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should have min 8 chars, at least one letter, one number and one special char"),
            
            userContactNo: yup.string().required("Contact number is mandate").matches(/^\d{10}$/, "Enter 10 digits contact No"),
       }) }>

                <Form>
                    <ul className='formikFormData'>
                        <li>
                            Enter User Name
                            <Field name="userName" type="text"></Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage  name="userName" ></ErrorMessage>
                            </div>
                        </li>
                        <li>
                            Enter User Age 
                            <Field name="userAge" type="number"></Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage name="userAge"/>
                            </div>
                        </li>
                        <li>
                            Select Gender 
                            <Field name="userGender" type="radio" value="Male"></Field>Male
                            <Field name="userGender" type="radio" value="Female"></Field>Female
                            <div className='formikErrorMsg' >
                                <ErrorMessage name="userGender"/>
                            </div>
                        </li>
                        <li>
                            Enter User Contact Number
                            <Field name="userContactNo" type="number"></Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage name="userContactNo" />
                            </div>
                        </li>
                        <li>
                            Enter User Mail ID 
                            <Field name="userMailID" type="text"></Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage name="userMailID" />
                            </div>
                        </li>
                        <li>
                            Select User Country
                            <Field as="select" name="userCountry">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="japan">Japan</option>
                                <option value="sweden">Sweden</option>
                                <option value="norway">Norway</option>
                                <option value="germany">Germany</option> 
                            </Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage name="userCountry"></ErrorMessage>
                            </div>
                        </li> 
                        <li>
                            Enter Account Password
                            <Field name="userPwd" type="password"></Field>
                            <div className='formikErrorMsg'>
                                <ErrorMessage name="userPwd"></ErrorMessage>
                            </div>
                        </li>
                        <li>
                            <button type='submit' className='btn btn-primary'>Save Details</button>
                        </li>
                    </ul>
                </Form>

            </Formik>

        </div>
    )
} 

export default FormikComponentsDemo;