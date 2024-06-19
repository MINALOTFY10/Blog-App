import "./CheckMarkCircle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const CheckMarkCircle = () => {
  return (
    <>
      <Card>
        <div className="circle success-circle">
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        </div>
        <h1 className="success-header">Success</h1>
        <p className="success-text">
          Wooah, the post has been successfully added.
        </p>
      </Card>
    </>
  );
};

export default CheckMarkCircle;
