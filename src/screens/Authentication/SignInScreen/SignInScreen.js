import {useState, useEffect, useRef} from 'react'
import Proptypes from 'prop-types'

//Components
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextButton from '../../../components/TextButton';
import Icons from '../../../components/Icons';
import { EMAIL_REGEX } from '../../../constants/constants';

const SignInScreen = (props) =>
{

    const [data, setData] = useState({
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
    const checkValidity = (value, isRequired, field) =>
    {
      let isValid = true

      if(isRequired)
      {
        isValid = value.trim() !== "" && isValid
      }

      //Email validation
      if(field==="email")
      {
        isValid = EMAIL_REGEX.test(value) && isValid
      }

      //Password validation
      if(field==="password")
      {
        isValid = value.length > 6 && isValid
      }
      
      return isValid;
    }

    const dataHandler = (formField, value) =>
    {
        const currentState = {...data}
        const currentField = {...currentState[formField]}

        currentField.value = value.trim()
        currentField.touched = true
        currentState[formField] = currentField
        //Fields Validation
        currentField.isValid = checkValidity(currentField.value, currentField.isRequired, formField)

        //Form Validation
        let formValidation = true
        for (let key in currentState)
        {
          if(key!=="isFormValid")
          {
            formValidation = currentState[key].isValid && formValidation
          }
        }

        currentState.isFormValid = formValidation

        setData(currentState)
    }

    const login = () =>
    {
      const postData = {
        email:data.email.value,
        password:data.password.value,
      }
      console.log("LOGIN", postData)
    }

    const [animate, setAnimate] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
      if(!ref.current)
      setTimeout(() => {
        setAnimate(true)
        ref.current=true
      }, 300);
    
    }, [])

    return(
        <div 
            className={`flex flex-col py-5 w-full items-center bg-white space-y-4
            h-full rounded-t-3xl px-5
            smd:rounded-3xl smd:bg-opacity-70
            md:px-10 md:bg-opacity-70
            lg:px-16 lg:bg-opacity-70
            xl:px-20 xl:bg-opacity-70
            2xl:px-24 2xl:bg-opacity-70
            transition-all
            ${animate ? "animate-slideUp smd:animate-none md:animate-none lg:animate-none xl:animate-none 2xl:animate-none" : "hidden smd:flex md:flex lg:flex xl:flex 2xl:flex smd:animate-none md:animate-none lg:animate-none xl:animate-none 2xl:animate-none"}
            `}
        >
            <Logo imageCss="h-14 smd:h-20 md:h-auto" customCss={"hidden smd:flex md:flex lg:flex xl:flex 2xl:flex"}/>

            <span className="text-2xl self-start
          smd:self-auto
          md:self-auto
          lg:self-auto
          xl:self-auto
          2xl:self-auto">Welcome back</span>
            <span className="text-sm text-gray-500 self-start pb-5
          smd:self-auto
          md:self-auto
          lg:self-auto
          xl:self-auto
          2xl:self-auto">Sign in with your account</span>

            <Input 
            label="Username" 
            autoFocus
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

            <Button title="Login" disabled={!data.isFormValid} onClick={login}/>

            <div>
                <span className="text-xs text-gray-500">Forgot your password? </span>
            
                <TextButton title="Reset Here" onClick={() =>{}}/>
            </div>

            <span className="text-xs text-gray-500 font-thin">OR SIGN IN WITH</span>
            <div className="flex space-x-5">
                <Icons type="google" className="h-7"/>
                <Icons type="facebook" className="h-7"/>
                <Icons type="twitter" className="h-7"/>
            </div>
        </div>
    )
};


SignInScreen.propTypes = 
{

}

export default SignInScreen;