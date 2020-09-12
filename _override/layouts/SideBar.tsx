import * as React from "react";
import {
  SidebarLayout as OriginalSidebarLayout,
  SidebarProps,
} from "@redocly/ui";

import styled, { createGlobalStyle } from "styled-components";

export default function (props: SidebarProps<any>) {
  return (
    <SidebarWrapper color="blue">
      <OriginalSidebarLayout {...props}>
        {props.children} {/* page markdown contents in props.children */}
      </OriginalSidebarLayout>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.medium}) {
    width: 100%;
  }
`;

/* const sideBarTriggerIcon = require("../../images/sidebar.svg"); */
const SidebarTrigger = styled.span`
  background-color: red !important;
  width: 55px;
  user-select: none;
  height: 55px;
  bottom: 44px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  border-radius: 50%;

  transform: ${(a) => (a.opened ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.75s;

  :after {
    content: "";
    display: inline-block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    /* background: url(${sideBarTriggerIcon}); */
  }

  @media only screen and (min-width: ${({ theme: a }) =>
      a.breakpoints.medium}) {
    display: none;
    transform: rotate(180deg);
  }
`;
const Sidebar = styled.aside`
  opacity: ${(a) => (a.opened ? "1" : "0")};
  pointer-events: ${(a) => (a.opened ? "auto" : "none")};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: ${(a) => a.theme.sidebar.backgroundColor};
  font-size: 150px !important;
  font-family: ${(a) => a.theme.typography.fontFamily};
  color: ${(a) => a.theme.colors.text.primary};
  top: ${({ navBarHeight: a }) => a}px;
  height: calc(100vh - ${({ navBarHeight: a }) => a}px);
  overflow-y: auto;

  width: 100%;

  padding-top: 20px;

  & > * {
    transform: ${(a) => (a.opened ? "translate(0, 0)" : "translate(0, 40px)")};
    transition: ${(a) =>
      a.animate ? "transform 0.65s ease, opacity 0.25s ease;" : "none"};
  }

  @media screen and (min-width: ${({ theme: a }) => a.breakpoints.medium}) {
    position: sticky;
    font-size: 0.875em;
    pointer-events: auto;
    display: block !important;
    opacity: 1;
    flex-shrink: 0;
    width: ${({ theme: a }) => a.sidebar.width};
    & > * {
      transform: none;
    }
  }

  @media only screen and (min-width: ${({ theme: a }) => a.breakpoints.large}) {
    font-size: 1em;
    transform: none;
  }
`;
