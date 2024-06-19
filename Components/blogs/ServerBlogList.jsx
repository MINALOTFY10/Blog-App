import BlogList from "./BlogList";

async function getBlog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ServerBlogList = async () => {
  const Blog = await getBlog();

  return <BlogList Blog={Blog} />;
};

export default ServerBlogList;
