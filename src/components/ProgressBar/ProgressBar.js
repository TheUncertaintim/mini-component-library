/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  var Base, Bar;
  switch (size) {
    case "small":
      Base = BackGroundS;
      Bar = LoadingBarS;
      break;
    case "medium":
      Base = BackGroundM;
      Bar = LoadingBarM;
      break;
    case "large":
      Base = BackGroundL;
      Bar = LoadingBarL;
      break;
    default:
      break;
  }

  // round the corner when the progress is approaching 100%
  let rightBorderRadius = value > 99 ? (4 * value) / 100 : 0;
  return (
    <Base>
      <Bar
        role="progressbar"
        aria-label="Progress bar"
        aria-valuenow={value}
        progress={value}
        rightBorderRadius={rightBorderRadius}
      />
      <VisuallyHidden>Progress: ${value}</VisuallyHidden>
    </Base>
  );
};

// Background
const BarBase = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;
const BackGroundS = styled(BarBase)`
  height: 8px;
`;
const BackGroundM = styled(BarBase)`
  height: 12px;
`;
const BackGroundL = styled(BarBase)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

// LoadingBar
const LoadingBarBase = styled.div`
  background-color: ${COLORS.primary};
  width: ${(prop) => prop.progress}%;
  border-radius: 4px;
  border-top-right-radius: ${(p) => p.rightBorderRadius}px;
  border-bottom-right-radius: ${(p) => p.rightBorderRadius}px;
`;
const LoadingBarS = styled(LoadingBarBase)`
  height: 8px;
`;
const LoadingBarM = styled(LoadingBarBase)`
  height: 12px;
`;
const LoadingBarL = styled(LoadingBarBase)`
  height: 16px;
`;

export default ProgressBar;
