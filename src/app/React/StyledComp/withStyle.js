import React from "react";
import styled from "styled-components";

export default (WrappedComponent, styles) => styled(WrappedComponent)`
  ${props => (styles ? styles : "")};
`;
