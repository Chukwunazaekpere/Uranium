import React from "react";
import PropTypes from "prop-types";


const SimpleButton = ({changeLink, backgroundColor, textColor, buttonText}) => {
    return(
            <button style={{
                backgroundColor,
                color: textColor,
                fontSize: 12,
                height: 35,
                borderRadius: 12,
                padding: 5,
                cursor: 'pointer',
                fontWeight: 'bold'
            }} onClick={() => changeLink()}>
                {buttonText}
            </button>
    )
}

SimpleButton.propTypes = {
    changeLink: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}


export default SimpleButton;