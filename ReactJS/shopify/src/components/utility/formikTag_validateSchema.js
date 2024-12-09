import { useFormik } from "formik";
import * as yup from "yup";

// import {required, min, max, length, pattern, email} from yup;
// yup.required();

function FormikTagValidateSchema() {

    var formik = useFormik({
        initialValues: {
            username: '',
            userage: 0,
            userGender: '',
            userCountry: '',
            userNumber: '',
            userMailID: '' ,
            userPwd: '',
        },
        validationSchema: yup.object({
            username: yup.string().required("Name is mandate field").min(5, "Name should be of minimum 5 chars").max(10, "Name should be of maximum 10 chars"),
            userage: yup.number().required("Age is mandate").min(21, "Minimum age should be 21").max(35, "Maximum age should be 35"),
            userGender: yup.string().required("Select Gender"),
            userCountry: yup.string().required("Select any one Country"),

            userMailID: yup.string().required("Mail is mandate").matches( /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ 
            , "Please enter a valid mail id"),

            userPwd: yup.string().required("Enter a valid Password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should have min 8 chars, at least one letter, one number and one special char"),
            
            userNumber: yup.string().required("Contact number is mandate").matches(/^\d{10}$/, "Invalid contact no"),
        }),
        onSubmit: (userDetails) => {
            console.log("On submit User Details");
            console.log(userDetails);
        }
    });
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <ul className="formData">
                    {/* <li>
                        Enter User Name 
                        <input type="text" name="username" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        <div className="errorMsg">{formik.errors.username}</div>
                    </li> */}
                    <li>
                        Enter User Name 
                        <input type="text" name="username" className="form-control" {...formik.getFieldProps("username")}></input>
                        <div className="errorMsg">{formik.errors.username}</div>
                    </li>
                    <li>
                        Enter User Age
                        <input type="number" name="userage" className="form-control" {...formik.getFieldProps("userage")}></input>
                        <div className="errorMsg">{formik.errors.userage}</div>
                    </li>
                    <li>
                        Select Gender
                        <input type="radio" name="userGender" value="male" onChange={formik.handleChange}></input>Male
                        <input type="radio" name="userGender" value="female" onChange={formik.handleChange}></input>Female
                        <div className="errorMsg">{formik.errors.userGender}</div>
                    </li>
                    <li>
                        Enter Contact Number (+91)
                        <input type="number" name="userNumber" className="form-control" {...formik.getFieldProps("userNumber")}></input>
                        <div className="errorMsg">{formik.errors.userNumber}</div>
                    </li>
                    <li>
                        Enter Mail ID 
                        <input type="text" name="userMailID" className="form-control" {...formik.getFieldProps("userMailID")}></input>
                        <div className="errorMsg">{formik.errors.userMailID}</div>
                    </li>    
                    <li>
                        Enter Account Password
                        <input type="password" name="userPwd" className="form-control" {...formik.getFieldProps("userPwd")}></input>
                        <div className="errorMsg">{formik.errors.userPwd}</div>
                    </li>
                    <li>
                        Select Country of resident
                        <select name="userCountry" {...formik.getFieldProps("userCountry")}>
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="japan">Japan</option>
                            <option value="sweden">Sweden</option>
                            <option value="norway">Norway</option>
                            <option value="germany">Germany</option> 
                        </select>
                        <div className="errorMsg">{formik.errors.userCountry}</div>
                    </li>
                    <li>
                        <button type="submit" className="btn btn-primary">Save Details</button>
                    </li>
                </ul>
            </form>    
    </div>
    )
}

export default FormikTagValidateSchema;