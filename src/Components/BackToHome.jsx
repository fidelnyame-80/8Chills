import { Link } from "react-router-dom";

const BackToHomeButton = ({ label = "Back to Home", className = "" }) => {
  return (
    <Link 
      to="/" 
      className={`inline-block px-4 py-2 bg-black text-white rounded ${className}`}
    >
      {label}
    </Link>
  );
};

export default BackToHomeButton;
