
import React,{ useState } from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const [Trailer, setTrailer] = useState(false);
  if (Trailer === false) {
    return (
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={() => {setTrailer(true)}}
            type={type}
          >
            {children}
          </button>
    );
  } else {
  return (
    <iframe width="960" height="540" src="https://www.youtube.com/embed/4d34-HPjVl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    );
  }
};