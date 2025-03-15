import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Cover>{displayedValue}</Cover>
      <Icon
        id="chevron-down"
        size="0.45rem"
        strokeWidth={5}
        style={{
          display: "inline-block",
          strokeWidth: 1.5,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  border-radius: 3px;
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;

  & > span,
  svg {
    color: ${COLORS.gray700};
  }

  &:hover {
    & > span,
    svg {
      color: ${COLORS.black};
    }
  }
`;

const Cover = styled.span`
  display: inline-block;
  position: relative;
  bottom: 2px;
  left: 2px;

  /* remove cursor focus so that we can click on the select*/
  pointer-events: none;

  margin-right: 3px;
`;

const StyledSelect = styled.select`
  position: absolute;

  /* make the select invisible */
  background-color: transparent;
  color: transparent;

  appearance: none;
  border: none;

  width: 100%;
  height: 100%;
  }
`;

export default Select;
