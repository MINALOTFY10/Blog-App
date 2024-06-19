const getImage = (imgId) => {
    const images = [
      "/PostImg1.png",
      "/PostImg2.png",
      "/PostImg3.png",
      "/PostImg4.png",
      "/PostImg5.png"
    ];
  
    return images[imgId % 5];
  };

  export default getImage;