import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
export default function YoaLogo() {
  return (
    <SvgIcon style={{ fontSize: "5em", border: "1px solid black", borderRadius: "100%" }}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12.5"
          cy="12.5"
          r="12"
          fill="#D9D9D9"
          stroke="#36765B"
        />
        <line
          x1="12.9719"
          y1="0.876497"
          x2="20.2636"
          y2="21.7098"
          stroke="#36765B"
        />
        <line
          x1="4.73641"
          y1="21.7098"
          x2="12.0281"
          y2="0.876492"
          stroke="#36765B"
        />
        <path
          d="M12.5 23.9583V14.5833"
          stroke="#36765B"
        />
        <line
          x1="7.29166"
          y1="14.0833"
          x2="17.7083"
          y2="14.0833"
          stroke="#36765B"
        />
        <path
          d="M12.5 14.5833L5.72917 3.12499"
          stroke="#36765B"
        />
        <path
          d="M12.5 14.5833L19.3523 2.84538"
          stroke="#36765B"
        />
      </svg>
    </SvgIcon>
  );
}
