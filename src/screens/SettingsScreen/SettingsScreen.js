import { useRouter } from "next/router";
import { memo, useEffect, useMemo, useRef, useState } from "react";
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
import toast from "react-hot-toast";
import { avatar } from "../../data/data";
import Skeleton from "react-loading-skeleton";

const SettingsScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();
  const dispatch = useDispatch();
  const uploadLogoRef = useRef();
  const [isSkeletonLoaded, setIsSkeletonLoaded] = useState(true);

  const [editMode, setEditMode] = useState(false);

  if (!state.isUserLoggedIn) {
    router.push("/authentication");
    return <></>;
  }

  const [localImage, setLocalImage] = useState(
    state.user?.profileImage ?? avatar
  );

  const [data, setData] = useState({
    username: {
      value: state.user?.username,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    fullname: {
      value: state.user?.fullname,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    email: {
      value: state.user?.email,
      isRequired: true,
      isValid: false,
      touched: false,
    },
    website: {
      value: state.user?.website,
      isRequired: true,
      isValid: true,
      touched: false,
    },
    phone: {
      value: state.user?.phone,
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

    currentField.value = value; //.trim();
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

  const editHandler = () => {
    toggleEditMode();
    if (editMode) {
      const putData = {
        userId: state.user.userId,
        username: data.username.value,
        fullname: data.fullname.value,
        email: data.email.value,
        website: data.website.value,
        phone: data.phone.value,
        profileImage: avatar, //FIXME: FIx image later
      };

      dispatch(actions.editUser(state.token, putData));
    }
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
      phone: {
        value: state.user.phone,
        isRequired: true,
        isValid: true,
        touched: false,
      },
      isFormValid: true,
    });
    setLocalImage(state.user?.profileImage ?? avatar);
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

  const chooseFile = () => uploadLogoRef.current.click();

  useEffect(() => {
    if (!state.isUserLoggedIn) {
      router.push("/authentication");
    }
  }, []);

  const avatarSkeleton = <Skeleton width={240} height={240} circle />;

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
          onClick={() => {
            editMode && chooseFile();
          }}
        >
          {isSkeletonLoaded && avatarSkeleton}

          {localImage && (
            <Image
              src={localImage}
              layout="intrinsic"
              objectFit="cover"
              width={400}
              height={400}
              alt="Profile Image"
              // onClick={() => {
              //   editMode && chooseFile();
              // }}
              unoptimized
              onLoad={() => setTimeout(() => setIsSkeletonLoaded(false), 1000)}
            />
          )}
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

        <Input
          autoFocus
          label="Phone"
          required
          value={data.phone.value}
          error={!data.phone.isValid && data.phone.touched}
          onChange={(val) => dataHandler("phone", val)}
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
        <div className="flex justify-center items-center w-44">
          <Button title={editMode ? "Save" : "Edit"} onClick={editHandler} />
        </div>
      </div>
    </div>
  );
};

export default memo(SettingsScreen);
