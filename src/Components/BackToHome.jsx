import { Link } from "react-router-dom";

const BackToHomeButton = ({ label = "Back to Home", className = "" }) => {
  return (
    <Link 
      to="/" 
      className={`btn-arcade btn-arcade-secondary !px-4 !py-2.5 !text-[0.62rem] ${className}`}
    >
      {label}
    </Link>
  );
};

export default BackToHomeButton;
