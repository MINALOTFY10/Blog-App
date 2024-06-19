import { useRef } from "react";

import Card from "../Ui/Card";
import classes from "./NewPostForm.module.css";

const NewPostForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const bodyInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredBody = bodyInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      body: enteredBody,
    };

    props.onAddPost(postData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.field}>
          <label htmlFor="title">Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={`mt-3 ${classes.field}`}>
          <label htmlFor="image">Post Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={`mt-3 ${classes.field}`}>
          <label htmlFor="body">Post Body</label>
          <textarea id="body" required rows="5" ref={bodyInputRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Post</button>
        </div>
      </form>
    </Card>
  );
};

export default NewPostForm;
