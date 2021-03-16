import React from "react";
import Button from "elements/Button";
import propTypes from "prop-types";

export default function iconText(props) {
   const className = [props.className];
   return (
      <Button
         className={`brand-text-icon ${className.join(" ")}`}
         href=""
         type="link"
      >
         Stay<span className="text-gray-900">cation.</span>
      </Button>
   );
}
iconText.propTypes = {
   className: propTypes.string,
};
