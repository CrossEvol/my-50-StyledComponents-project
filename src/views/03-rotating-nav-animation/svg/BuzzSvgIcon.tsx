import React from "react";

const BuzzSvgIcon = ({ size = "32", fill = "#e6e6e6", ...other }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" {...other}>
      <path
        d="M864 716H160v-88h704v88zm0-160H160v-88h704v88zm0-160H160v-88h704v88z"
        fill={fill}
      />
    </svg>
  );
};
export default React.memo(BuzzSvgIcon);
