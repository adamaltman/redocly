import * as React from "react";
import styled from "styled-components";
export const SinchButton = styled.a`
  display: inline-block;
  padding: ${(a) => (a.small ? "0.8em" : "0.8em 0.8em")};
  text-align: center;
  font-weight: ${(a) =>
    a.small
      ? a.theme.typography.fontWeightRegular
      : a.theme.typography.fontWeightBold};
  border-radius: 5px;
  box-shadow: ${(a) =>
    a.small ? "none" : "0px 0px 5px 0px rgba(35,35,35,0.34)"};
  text-decoration: none;
  transition: all 0.1s ease;

  cursor: pointer;

  &&::after {
    content: none;
  }

  & + & {
    margin-left: 0.625em;
  }

  :hover {
    box-shadow: ${(a) =>
      a.small ? "none" : "0px 0px 20px 0px rgba(35,35,35,0.34)"};
    border-color: ${({ theme: a }) => a.colors.border.dark};
  }
  :active {
    color: black;
    background-color: ${({ theme: a }) => a.colors.primary.cta} !important;
    border-color: black;
  }

  color: black;

  background-color: ${({ theme: a }) => a.colors.primary.cta} !important;
  border: ${(a) => (a.small ? "1px" : "2px")} solid;
  border-color: transparent;
  min-width: ${(a) => (a.large ? "264px" : "180px")};
  @media only screen and (max-width: ${({ theme: a }) =>
      a.breakpoints.medium}) {
    min-width: auto;
  }
`;
