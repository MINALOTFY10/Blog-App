import "./Button.css";

const Button = ({ children }) => {
  return <button className={`btn normal medium`}>{children}</button>;
};

export default Button;
