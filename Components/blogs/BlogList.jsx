import BlogItem from "./BlogItem";
import classes from "./BlogList.module.css";

const BlogList = ({ Blog }) => {
  return (
    <div className={`container ${classes.list}`}>
      <div className="row">
        {Blog.map((post) => (
          <div key={post.id} className="col-12 col-sm-12 col-md-6 col-lg-4">
            <BlogItem
              id={post.id}
              image={post.image}
              title={post.title}
              body={post.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
