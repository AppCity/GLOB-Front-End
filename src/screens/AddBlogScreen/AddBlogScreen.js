import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import TextButton from "../../components/TextButton";

const AddBlogScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();

  const [data, setData] = useState({
    title: {
      value: "",
      isRequired: true,
      isValid: false,
      touched: false,
    },
    content: {
      value: "",
      isRequired: true,
      isValid: false,
      touched: false,
    },
    isFormValid: false,
  });

  //Validate input fields
  const checkValidity = (value, isRequired, field) => {
    let isValid = true;

    if (isRequired) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  };

  const dataHandler = (formField, value) => {
    const currentState = { ...data };
    const currentField = { ...currentState[formField] };

    currentField.value = value.trim();
    currentField.touched = true;
    currentState[formField] = currentField;
    //Fields Validation
    currentField.isValid = checkValidity(
      currentField.value,
      currentField.isRequired,
      formField
    );

    //Form Validation
    let formValidation = true;
    for (let key in currentState) {
      if (key !== "isFormValid") {
        formValidation = currentState[key].isValid && formValidation;
      }
    }

    currentState.isFormValid = formValidation;

    setData(currentState);
  };

  const creatBlogHandler = () => {
    console.log("creatBlogHandler");

    const postData = {
      username: data.title.value,
      password: data.content.value,
    };
    console.log("data =>", postData);
  };

  useEffect(() => {
    if (!state.isUserLoggedIn) {
      router.push("/authentication");
    }
  }, []);

  return (
    <div className="flex w-full h-full mt-24 z-10 p-5 flex-col items-center space-y-5 smd:ml-16 smd:mr-[216px] md:ml-16 md:mr-[264px] xl:mr-[295px] mb-20 smd:mb-0 md:mb-0">
      <GradientText customCss="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        Create a New Blog!
      </GradientText>

      <div className="flex flex-col w-full space-y-10 shadow-sm dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 rounded-xl p-5 ">
        <Input
          autoFocus
          label="Enter a Title"
          required
          value={data.title.value}
          error={!data.title.isValid && data.title.touched}
          onChange={(val) => dataHandler("title", val)}
          autoCapitalize
        />

        <TextArea
          autoFocus
          label="Enter some content"
          required
          value={data.content.value}
          error={!data.content.isValid && data.content.touched}
          onChange={(val) => dataHandler("content", val)}
        />

        <div className="flex w-40">
          <TextButton title="Upload an Image" customCss="text-lg" />
        </div>
      </div>

      <div className="flex justify-center items-center w-44">
        <Button
          title="Create"
          disabled={!data.isFormValid}
          onClick={creatBlogHandler}
        />
      </div>
    </div>
  );
};

export default AddBlogScreen;

//  smd:flex
// mx-32 sm:mx-36 md:mx-48
//
//       lg:flex lg:mr-[264px]
//       xl:flex xl:mr-[312px]
//       2xl:flex 2xl:mr-[312px]
