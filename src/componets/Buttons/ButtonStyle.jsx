import PropTypes from "prop-types";
import "./ButtonStyle.css";

const ButtonStyle = ({ link, text }) => {
  return (
    <button>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </span>
    </button>
  );
};

ButtonStyle.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ButtonStyle;
