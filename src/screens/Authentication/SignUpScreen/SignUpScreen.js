import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
//Components
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Scrollbar from '../../../components/Scrollbar';

const SignUpScreen = (props) =>
{

    const [data, setData] = useState({
        fullname:{
            value:"",
            isRequired:true,
            isValid: false,
            touched:false
        },
        username:{
            value:"",
            isRequired:true,
            isValid: false,
            touched:false
        },
        phone:{
            value:"",
            isRequired:false,
            isValid: true,
            touched:false
        },
        email:{
            value:"",
            isRequired:true,
            isValid: false,
            touched:false
        },
        password:{
            value:"",
            isRequired:true,
            isValid: false,
            touched:false
        },
        isFormValid:false
    })

    //Validate input fields
    const checkValidity = (value, rules) =>
	{
		let isValid = true

		if(rules.required)
		{
			isValid = value.trim() !== "" && isValid
		}

		if(rules.isEmail)
		{
            isValid = emailRegex.test(value) && isValid
        }
		
		return isValid;
    }

    const dataHandler = (formField, value) =>
    {
        const currentState = {...data}
        const currentField = {...currentState[formField]}

        currentField.value = value
        currentField.isValid = checkValidity(currentField.value, currentField.validation)

        currentField.touched = true
        currentState[formField] = currentField

        let formValidation = true
		for (let key in currentState)
		{
			formValidation = currentState[key].isValid && formValidation
        }

        currentState.isFormValid = formValidation

        
        setData(currentState)
    }



    return (
        <div
          className="flex flex-col py-5 w-full items-center bg-white bg-opacity-70 rounded-3xl space-y-4
            transition-all            
            "
        >
          <Logo imageCss="h-14 smd:h-20 md:h-auto" />

          <span className="text-2xl">Create Account</span>
          <span className="text-sm text-gray-500">Sign up to get started!</span>

          <Scrollbar height="256px">

          <div className="flex flex-col w-full h-64 space-y-4
            smd:px-5
            md:px-10
            lg:px-16
            xl:px-20
            2xl:px-24
            ">
          <Input
            label="Fullname"
            autoFocus
            value={data.fullname.value}
            error={!data.fullname.isValid && data.fullname.touched}
            onChange={(val) => dataHandler("fullname",val)}
          />

          <Input
            label="Username"
            value={data.username.value}
            error={!data.username.isValid && data.username.touched}
            onChange={(val) => dataHandler("username",val)}
          />

          <Input
            label="Phone No."
            value={data.phone.value}
            error={!data.phone.isValid && data.phone.touched}
            onChange={(val) => dataHandler("phone",val)}
          />

          <Input
            label="Email"
            value={data.email.value}
            error={!data.email.isValid && data.email.touched}
            onChange={(val) => dataHandler("email",val)}
          />

          <Input
            label="Password"
            type="password"
            value={data.password.value}
            error={!data.password.isValid && data.password.touched}
            onChange={(val) => dataHandler("password",val)}
          />

          </div>
          </Scrollbar>

          <div className="flex flex-col w-full space-y-4
            smd:px-5
            md:px-10
            lg:px-16
            xl:px-20
            2xl:px-24
            ">
            <Button title="Register" disabled={!data.isFormValid}/>
          </div>
        
        </div>
      
    );
};


SignUpScreen.propTypes = 
{

}

export default SignUpScreen;
/*
  
             */