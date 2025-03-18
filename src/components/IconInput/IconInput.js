import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--fontSize": 14 / 16 + "rem",
    "--strokeThickness": 1 + "px",
    "--inputHeight": 24 + "px",
    "--iconSize": 16 + "px",
    iconThickness: 1,
  },
  large: {
    "--fontSize": 18 / 16 + "rem",
    "--strokeThickness": 2 + "px",
    "--inputHeight": 36 + "px",
    "--iconSize": 24 + "px",
    iconThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];
  return (
    <Wrapper style={style}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={style.iconSize}>
        <Icon
          id={icon}
          strokeWidth={style.iconThickness}
          size={style["--iconSize"]}
        />
      </IconWrapper>
      <Input placeholder={placeholder} style={{ ...style, width: width }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  width: fit-content;

  position: relative;
  color: ${COLORS.gray700};
  height: var(--inputHeight);

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right; 0;
  height: var(--iconSize);
  width: var(--iconSize);
  margin: auto;
`;

const Input = styled.input`
  width: var(--width);
  height: var(--inputHeight);
  padding-left: var(--inputHeight);
  border: none;
  border-bottom: var(--strokeThickness) solid ${COLORS.black};

  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
    border-radius: 1px;
  }
`;

export default IconInput;
