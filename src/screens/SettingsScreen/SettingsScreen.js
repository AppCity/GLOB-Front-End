import { useRouter } from "next/router";
import { memo, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogsCard from "../../components/BlogsCard";
import GradientText from "../../components/GradientText";
import * as actions from "../../store/actions/actions";
import Image from "next/image";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";
import TextArea from "../../components/TextArea";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import { categories } from "../../data/data";

const SettingsScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const [data, setData] = useState({
    username: {
      value: state.user.username,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    fullname: {
      value: state.user.fullname,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    email: {
      value: state.user.email,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    website: {
      value: state.user.website,
      isRequired: true,
      isValid: true,
      touched: false,
    },
    isFormValid: true,
  });

  const toggleEditMode = () => setEditMode(!editMode);

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

  //TODO: Check Here
  const editHandler = () => {
    toggleEditMode();
    setData({
      title: {
        value: state.blog?.title,
        isRequired: true,
        isValid: true,
        touched: true,
      },
      headline: {
        value: state.blog?.headline,
        isRequired: true,
        isValid: true,
        touched: true,
      },
      content: {
        value: state.blog?.content,
        isRequired: true,
        isValid: true,
        touched: true,
      },
      category: {
        value: state.blog?.category,
        isRequired: true,
        isValid: true,
        touched: true,
      },
      isFormValid: true,
    });
  };

  const cancelHandler = () => {
    toggleEditMode();
    setData({
      username: {
        value: state.user.username,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      fullname: {
        value: state.user.fullname,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      email: {
        value: state.user.email,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      website: {
        value: state.user.website,
        isRequired: true,
        isValid: true,
        touched: false,
      },
      isFormValid: true,
    });
  };

  useEffect(() => {
    if (!state.isUserLoggedIn) {
      router.push("/authentication");
    }
  }, []);

  return (
    <div className="flex w-full h-full mt-24 z-10 p-5 flex-col items-center space-y-5 smd:ml-16 smd:mr-[216px] md:ml-16 md:mr-[264px] xl:mr-[295px] mb-20 smd:mb-0 md:mb-0">
      <GradientText customCss="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        My Profile
      </GradientText>

      <div
        className={`flex flex-col w-full ${
          editMode ? "space-y-10" : "space-y-5"
        } shadow-sm dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 rounded-xl p-5 items-center`}
      >
        <div
          className={`flex h-60 w-60 rounded-full overflow-hidden shadow-xl transition-all ${
            editMode && "cursor-pointer hover:shadow-3xl"
          }`}
        >
          <Image
            src={state.user.profileImage}
            layout="intrinsic"
            objectFit="cover"
            width={400}
            height={400}
            alt="Profile Image"
          />
        </div>
        <Input
          autoFocus
          label="User Name"
          required
          value={data.username.value}
          error={!data.username.isValid && data.username.touched}
          onChange={(val) => dataHandler("username", val)}
          autoCapitalize
          editMode={editMode}
          showLabel
        />

        <Input
          autoFocus
          label="Full Name"
          required
          value={data.fullname.value}
          error={!data.fullname.isValid && data.fullname.touched}
          onChange={(val) => dataHandler("fullname", val)}
          autoCapitalize
          editMode={editMode}
          showLabel
        />

        <Input
          autoFocus
          label="Email"
          required
          value={data.email.value}
          error={!data.email.isValid && data.email.touched}
          onChange={(val) => dataHandler("email", val)}
          autoCapitalize
          editMode={editMode}
          showLabel
        />

        <Input
          autoFocus
          label="Website"
          required
          value={data.website.value}
          error={!data.website.isValid && data.website.touched}
          onChange={(val) => dataHandler("website", val)}
          autoCapitalize
          editMode={editMode}
          showLabel
        />

        <div className="flex flex-col w-40 space-y-5">
          {/* {localImage && (
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
          )} */}
          {/* <TextButton
            title="Upload an Image"
            customCss="text-lg"
            onClick={chooseFile}
          /> */}
          <span></span>
          <input
            type="file"
            name="file"
            // ref={uploadLogoRef}
            id="uploadLogo"
            className="hidden"
            // onChange={(e) => uploadImageHandler(e, "logo")}
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
      </div>

      <div className="flex space-x-10">
        {editMode && (
          <div className="flex justify-center items-center w-44">
            <Button title="Cancel" onClick={cancelHandler} />
          </div>
        )}
        //TODO: Check here
        <div className="flex justify-center items-center w-44">
          <Button title={editMode ? "Save" : "Edit"} onClick={toggleEditMode} />
        </div>
      </div>
    </div>
  );
};

export default memo(SettingsScreen);
