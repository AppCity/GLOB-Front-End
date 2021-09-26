import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import GradientText from "../../components/GradientText";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import TextButton from "../../components/TextButton";
import Image from "next/image";
import * as actions from "../../store/actions/actions";

const AddBlogScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();
  const uploadLogoRef = useRef();
  const [localImage, setLocalImage] = useState();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: {
      value: "",
      isRequired: true,
      isValid: false,
      touched: false,
    },
    headline: {
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
    category: {
      value: state.categories[0].title,
      isRequired: true,
      isValid: true,
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
    const postData = {
      title: data.title.value,
      headline: data.headline.value,
      content: data.content.value,
      category: data.category.value,
    };

    console.log("creatBlogHandler data =>", postData);
  };

  const uploadImageHandler = async (e, type) => {
    dispatch(actions.setLoading(true));

    const file = e.target.files[0];
    console.log("🚀 --- uploadImageHandler --- file", file);
    try {
      if (file) {
        const extn = file.name.split(".").pop();

        //Check if file is .png || .jpg || .jpeg
        if (extn !== "png" && extn !== "jpg" && extn !== "jpeg") {
          toast.error("Only images allowed");
          uploadLogoRef.current.value = null;
          return;
        }

        setLocalImage(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("file", file);
        console.log("🚀 --- uploadImageHandler --- formData", formData);

        // formData.append("customer_id", state.customer.id);
        // formData.append("type", type);

        // const response = await nextAPI.post("/upload/image", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // });
      }
    } catch (error) {
      console.log("🚀 --- uploadImageHandler --- error", error);
      toast.error("Image upload failed");
    }

    //Remove file from memory after upload
    // uploadLogoRef.current.value = null;
    dispatch(actions.setLoading(false));
  };

  const chooseFile = () => {
    uploadLogoRef.current.click();
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

        <Input
          autoFocus
          label="Enter a Headline"
          required
          value={data.headline.value}
          error={!data.headline.isValid && data.headline.touched}
          onChange={(val) => dataHandler("headline", val)}
          autoCapitalize
        />

        <Dropdown
          label="Category"
          data={state.categories}
          setCategory={(val) => dataHandler("category", val)}
          category={data.category.value}
        />

        <TextArea
          autoFocus
          label="Enter some content"
          required
          value={data.content.value}
          error={!data.content.isValid && data.content.touched}
          onChange={(val) => dataHandler("content", val)}
        />

        <div className="flex flex-col w-40 space-y-5">
          {localImage && (
            <div className="flex h-40 bg-blue-200 shadow-xl rounded-md overflow-hidden">
              <Image
                src={localImage}
                layout="intrinsic"
                unoptimized
                objectFit="cover"
                width={200}
                height={200}
              />
            </div>
          )}
          <TextButton
            title="Upload an Image"
            customCss="text-lg"
            onClick={chooseFile}
          />
          <span></span>
          <input
            type="file"
            name="file"
            ref={uploadLogoRef}
            id="uploadLogo"
            className="hidden"
            onChange={(e) => uploadImageHandler(e, "logo")}
            accept="image/png, image/jpeg, image/jpg"
          />
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
