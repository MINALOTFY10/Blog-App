import classes from "./PostDetail.module.css";
import Button from "../Ui/Button";
import getImage from "@/utils/getImage";

const PostDetail = async ({ post }) => {
  const imgSrc = post.image ? post.image : getImage(post.id);

  return (
    <div className={`container ${classes.details}`}>
      <Button>Technology</Button>

      <h1 className={classes.header}>{post.title}</h1>
      <div className={classes.image}>
        <img src={imgSrc} alt={post.title} />
      </div>

      <p className="mt-5">{post.body}</p>
    </div>
  );
};

export default PostDetail;
