import Head from "../../components/Head";
import BlogScreen from "../../screens/BlogScreen/BlogScreen";

const Blog = (props) => {
  return (
    <>
      <Head title="Blog" content="Blog to read" />
      <BlogScreen />
    </>
  );
};

Blog.propTypes = {};

export default Blog;
