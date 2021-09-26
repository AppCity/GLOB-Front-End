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
import { categories } from "../../data/data";
import Image from "next/image";
import * as actions from "../../store/actions/actions";
import EditIcon from "../../components/Icons/EditIcon";
import DeleteIcon from "../../components/Icons/DeleteIcon";
import CancelIcon from "../../components/Icons/CancelIcon";

const BlogScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const router = useRouter();
  const uploadLogoRef = useRef();
  const [localImage, setLocalImage] = useState();
  const [editMode, setEditMode] = useState(router.query.editMode ?? false);
  const [isUserBlog, setIsUserBlog] = useState(false);

  const blogId = router.query.id;
  console.log("🚀 --- BlogScreen --- blogId", blogId);

  const [data, setData] = useState({
    title: {
      value: "",
      isRequired: true,
      isValid: true,
      touched: true,
    },
    headline: {
      value: "",
      isRequired: true,
      isValid: true,
      touched: true,
    },
    content: {
      value: "",
      isRequired: true,
      isValid: true,
      touched: true,
    },
    category: {
      value: "",
      isRequired: true,
      isValid: true,
      touched: true,
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

  const saveBlog = () => {
    const postData = {
      title: data.title.value,
      headline: data.headline.value,
      content: data.content.value,
      category: data.category.value,
      // image: localImage,//FIXME: Fix later
    };
    toggleEditMode();
    console.log("creatBlogHandler data =>", postData);
    dispatch(actions.editBlog(blogId, state.token, postData)); //FIXME: fix id
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
    dispatch(actions.getBlog(blogId));
  }, [blogId]);

  useEffect(() => {
    dispatch(actions.setLoading(true));
    if (state.blog) {
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
      setLocalImage(state.blog.image);
      if (!state.blog.image) dispatch(actions.setLoading(false));
    }

    if (router.query.editMode) {
      setEditMode(true);
    }

    state.user && checkIfUserBlog();

    return () => {
      state.blog && dispatch(actions.setBlog(null));
    };
  }, [state.blog, blogId]);

  const checkIfUserBlog = () => {
    setIsUserBlog(false);

    state.userBlogs.forEach((item) => {
      if (item.userId === state.blog?.userId) {
        setIsUserBlog(true);
        return;
      }
    });
  };

  const editHandler = () => {
    toggleEditMode();
  };

  const cancelHandler = () => {
    toggleEditMode();
    setData({
      title: {
        value: state.blog?.title,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      headline: {
        value: state.blog?.headline,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      content: {
        value: state.blog?.content,
        isRequired: true,
        isValid: false,
        touched: false,
      },
      category: {
        value: state.blog?.category,
        isRequired: true,
        isValid: true,
        touched: false,
      },
      isFormValid: false,
    });
  };

  const deleteHandler = () => {
    console.log("Delete blog =>", blogId);
  };

  return (
    <div className="flex w-full h-full mt-24 z-10 p-5 flex-col items-center space-y-5 smd:ml-16 smd:mr-[216px] md:ml-16 md:mr-[264px] xl:mr-[295px] mb-20 smd:mb-0 md:mb-0">
      <div className="flex items-center justify-between w-full ">
        <GradientText customCss="text-2xl sm:text-3xl md:text-4xl font-extrabold w-72 sm:w-full">
          Let's read something Interesting ..
        </GradientText>
        {isUserBlog && (
          <div className="flex space-x-5">
            {!editMode ? (
              <EditIcon size={20} onClick={editHandler} />
            ) : (
              <CancelIcon size={20} onClick={cancelHandler} />
            )}
            <DeleteIcon size={20} onClick={deleteHandler} />
          </div>
        )}
      </div>

      <div className="flex flex-col w-full space-y-10 shadow-sm dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 rounded-xl p-5 z-40">
        {state.blog && state.blog.image && (
          <Image
            src={state.blog.image}
            layout="intrinsic"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg shadow-lg"
            onLoad={() => dispatch(actions.setLoading(false))}
          />
        )}

        <Input
          autoFocus
          label="Enter a Title"
          required
          value={data.title.value}
          error={!data.title.isValid && data.title.touched}
          onChange={(val) => dataHandler("title", val)}
          autoCapitalize
          editMode={editMode}
          textCss="text-4xl"
        />

        <Input
          autoFocus
          label="Enter a Headlines"
          required
          value={data.headline.value}
          error={!data.headline.isValid && data.headline.touched}
          onChange={(val) => dataHandler("headline", val)}
          autoCapitalize
          editMode={editMode}
          textCss="text-2xl"
        />

        {editMode && (
          <Dropdown
            label="Category"
            data={categories}
            setCategory={(val) => dataHandler("category", val)}
            category={data.category.value}
          />
        )}

        <TextArea
          autoFocus
          label="Enter some content"
          required
          value={data.content.value}
          error={!data.content.isValid && data.content.touched}
          onChange={(val) => dataHandler("content", val)}
          editMode={editMode}
          textCss="text-xl"
        />

        {editMode && (
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
        )}
      </div>

      {editMode && (
        <div className="flex justify-center items-center w-44">
          <Button
            title="Save"
            disabled={!data.isFormValid}
            onClick={saveBlog}
          />
        </div>
      )}
    </div>
  );
};

export default BlogScreen;
