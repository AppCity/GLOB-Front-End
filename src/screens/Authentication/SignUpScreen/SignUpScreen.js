import {useState, useEffect, useRef} from 'react'
import Proptypes from 'prop-types'
//Components
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Scrollbar from '../../../components/Scrollbar';
import { EMAIL_REGEX } from '../../../constants/constants';
import { useRouter } from 'next/router';

const SignUpScreen = (props) =>
{

  const router = useRouter()

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

        currentField.value = formField === "fullname" ? value : value.trim()
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

    const register = () =>
    {
      const postData = {
        fullname:data.fullname.value,
        username:data.username.value,
        email:data.email.value,
        phone:data.phone.value,
        password:data.password.value,
        
      }
      console.log("REGISTER", postData)

      router.replace('/')      
    }

    const [animate, setAnimate] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
      if(!ref.current)
      setTimeout(() => {
        setAnimate(true)
        ref.current=true
      }, 100);
    
    }, [])



    return (
        <div
          className={`flex flex-col py-5 w-full items-center bg-white space-y-4 dark:bg-black dark:bg-opacity-30
            h-full rounded-t-3xl
            smd:bg-opacity-70 smd:rounded-3xl 
            md:bg-opacity-70
            lg:bg-opacity-70
            xl:bg-opacity-70
            2xl:bg-opacity-70
            transition-all   
            ${animate ? "animate-slideUp smd:animate-none md:animate-none lg:animate-none xl:animate-none 2xl:animate-none" : "hidden smd:flex md:flex lg:flex xl:flex 2xl:flex smd:animate-none md:animate-none lg:animate-none xl:animate-none 2xl:animate-none"}
            `}         
            
        >
          <Logo imageCss="h-14 smd:h-20 md:h-auto" customCss={"hidden smd:flex md:flex lg:flex xl:flex 2xl:flex"}/>

          <span className="text-2xl self-start px-5 dark:text-white
          smd:self-auto
          md:self-auto
          lg:self-auto
          xl:self-auto
          2xl:self-auto
          "
          >Create Account</span>
          <span className="text-sm text-gray-500 dark:text-gray-300 self-start px-5 pb-5
          smd:self-auto
          md:self-auto
          lg:self-auto
          xl:self-auto
          2xl:self-auto">Sign up to get started!</span>

          <Scrollbar height="256px">

          <div className="flex flex-col w-full h-64 space-y-4 px-5
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

          <div className="flex flex-col w-full space-y-4 px-5
            md:px-10
            lg:px-16
            xl:px-20
            2xl:px-24
            ">
            <Button title="Register" disabled={!data.isFormValid} onClick={register}/>
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