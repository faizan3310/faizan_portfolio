import './app.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import  { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import utilDetails from './services'
import { useNavigate } from 'react-router-dom';
import { useCookies} from 'react-cookie';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function ShowLoginDialog() {
    
    const [open, setOpen] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [isAdminChecked, setIsAdminChecked] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [cookie, setCookie] = useCookies("userDetails");

    function checkHandler () {
        setIsChecked(!isChecked);
        // console.log(!isChecked);
        setIsAdminChecked(!isChecked);
    }

    var navigate = useNavigate();

    var formik = useFormik({
        initialValues: {
            accountID: '' ,
            accountPwd: '',
            isAdmin: [],
        },
        validationSchema: yup.object({

            accountID: yup.string().required("Enter a valid Account ID/Mail ID ").matches( /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ 
            , "Please enter a valid mail id"),

            accountPwd: yup.string().required("Enter a valid Password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password should have min 8 chars, at least one letter, one number and one special char"),
            
        }),
        onSubmit: (userDetails) => {
            handleLoginAction(userDetails);
        }
    });

    function handleClickOpen () {
      setOpen(true);
    };
    function handleClose () {
      setOpen(false);
    };

    function handleLoginAction(userDetails) {
        userDetails.isAdmin[0] = isAdminChecked;
        console.log("On submit User Details");
        console.log(userDetails);
       
        var apiUrl = utilDetails.getDomain() + utilDetails.apiUrl.userCredentials;
        // console.log("apiUrl"); 
        // console.log(apiUrl);
        // apiUrl = http://localhost:8080/validate/userCredentials
       
        axios.post(apiUrl, userDetails).then((response)=> {
            console.log(response);
            // console.log(response.data.msg);
          
            if(response.data.msg === 'success'){
                setCookie("userID", userDetails.accountID);
                handleClose();
                if( userDetails.isAdmin[0] === true){
                    navigate('/adminUser'); // programatically routing to admin url
                }else {
                    navigate('/userPage');
                }
            }else{
                setError(true);
            } 
            
        }).catch((error) => {
            console.log(error);
        }) 
    }

    function handleSignUpAction() {

    }


    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Login
            </Button>
            <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <b>Welcome Back!</b> <br/>
                    Please enter your details 
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                    <DialogContent dividers>

                        <form onSubmit={formik.handleSubmit}>
                            <ul className="formData">      
                                <li>
                                    Enter Account ID 
                                    <input type="text" name="accountID" className="form-control" {...formik.getFieldProps("accountID")}></input>
                                    <div className="errorMsg">{formik.errors.accountID}</div>
                                </li>    
                                <li>
                                    Enter Account Password
                                    <input type="password" name="accountPwd" className="form-control" {...formik.getFieldProps("accountPwd")}></input>
                                    <div className="errorMsg">{formik.errors.accountPwd}</div>
                                </li>
                            
                                <li>
                                    Is Admin User 
                                    <input type="checkbox" name="isAdmin"  checked={isChecked}  onChange={checkHandler} className="form-control" ></input>
                                </li>

                                <li>
                                    <button type="submit" className="btn btn-primary" >Login</button> 
                                    {error && <div className='errorMsg'>Invalid User Credentials</div>}
                                </li>
                            </ul>
                        </form>    

                    </DialogContent>
                    <DialogActions>
                        Don't have an account 
                        <Button autoFocus onClick={handleSignUpAction}>
                            Sign Up
                        </Button>
                    </DialogActions>
            </BootstrapDialog>
        </div>
    )
}

export default ShowLoginDialog;