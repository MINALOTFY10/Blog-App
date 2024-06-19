"use client";

import React, { useState, useEffect } from "react";
import NewPostForm from "@/Components/blogs/NewPostForm";
import CheckMarkCircle from "@/Components/Ui/CheckMarkCircle";

const NewPostPage = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    if (!isSubmited) {
      return;
    }
  }, [isSubmited]);

  const addPostHandler = (enteredPostData) => {
    setIsSubmited(true);
  };

  return !isSubmited ? (
    <NewPostForm onAddPost={addPostHandler} />
  ) : (
    <CheckMarkCircle />
  );
};

export default NewPostPage;
