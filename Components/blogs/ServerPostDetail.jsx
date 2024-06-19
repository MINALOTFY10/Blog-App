import PostDetail from "@/Components/blogs/PostDetail";

async function getPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ServerPostDetail = async ({ params }) => {
  const postId = params.postId;
  const post = await getPost(postId);

  return <PostDetail post={post}/>;
};

export default ServerPostDetail;
