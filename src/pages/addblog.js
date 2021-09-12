import Head from "../components/Head";
import AddBlogScreen from "../screens/AddBlogScreen/AddBlogScreen";

const AddBlog = (props) => {
  return (
    <>
      <Head title="Add Blog" content="Create a new blog" />
      <AddBlogScreen />
    </>
  );
};

AddBlog.propTypes = {};

export default AddBlog;
