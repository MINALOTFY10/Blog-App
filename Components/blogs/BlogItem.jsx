import Link from "next/link";
import Card from "../Ui/Card";
import Button from "../Ui/Button";
import classes from "./BlogItem.module.css";
import getImage from "@/utils/getImage";

const BlogItem = (props) => {
  const imgSrc = props.image ? props.image : getImage(props.id);
  
  return (
    <li className={classes.blog__item}>
      <Link href={`./${props.id}`} className={classes.link}>
        <Card>
          <div className={classes.blog__image}>
            <img
              src={imgSrc}
              alt={props.title}
            />
          </div>
          <Button>Technology</Button>
          <div className={classes.blog__content}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default BlogItem;
