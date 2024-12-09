import { useFormik } from "formik";

function FormikTag() {

    function validateUserFormDetails(userData) {

        console.log("From validate user form");
        console.log(userData);

        var errors = {
            username: '',
            userage: '',
            gender: '',
            countryName: '',
        };

        if(userData.username.length == 0){
            errors.username = "Name is mandate";
        }else if(userData.username.length <= 3){
            errors.username = "Name is Too short";
        }else if(userData.username.length >= 8){
            errors.username = "Name should be of maximum 8 characters";
        }

        if(userData.userage == ' '){
            errors.userage = "Age is mandate";
        }else if(userData.userage <= 21){
            errors.userage = "Age should be greater than 21";
        }

        if(userData.gender == ' '){
            errors.gender = "select gender";
        }

        if(userData.countryName == ' '){
            errors.countryName = "select country of residence";
        }

        return errors;
    }

    var formik = useFormik({
        initialValues: {
            username: '',
            userage: 0,
            gender: '',
            countryName: '',
        },
        validate: validateUserFormDetails,
        onSubmit: (userDetails) => {
            console.log("On submit User Details");
            console.log(userDetails);
        }
    });
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <ul className="formData">
                    <li>
                        Enter User Name 
                        <input type="text" name="username" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        <div className="errorMsg">{formik.errors.username}</div>
                    </li>
                    <li>
                        Enter User Age
                        <input type="number" name="userage" className="form-control" onChange={formik.handleChange}></input>
                        <div className="errorMsg">{formik.errors.userage}</div>
                    </li>
                    <li>
                        Select Gender
                        <input type="radio" name="gender" value="male" onChange={formik.handleChange}></input>Male
                        <input type="radio" name="gender" value="female" onChange={formik.handleChange}></input>Female
                        <div className="errorMsg">{formik.errors.gender}</div>
                    </li>
                    <li>
                        Select Country of resident
                        <select name="countryName" onChange={formik.handleChange}>
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="japan">Japan</option>
                            <option value="sweden">Sweden</option>
                            <option value="norway">Norway</option>
                            <option value="germany">Germany</option> 
                        </select>
                        <div className="errorMsg">{formik.errors.countryName}</div>
                    </li>
                    <li>
                        <button type="submit" className="btn btn-primary">Save Details</button>
                        {/* by default button type is submit ie. type="submit" */}

                        {/* <input type="button" value="Save Details 2" className="btn btn-primary"></input>
                        <input type="submit" value="Save Details 3" className="btn btn-primary"></input> */}

                    </li>
                </ul>
            </form>    
    </div>
    )
}

export default FormikTag;