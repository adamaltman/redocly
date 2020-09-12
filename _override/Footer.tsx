import * as React from "react";
import styled from "styled-components";

import { Flex, Link } from "@redocly/ui";
import { sinchTheme } from "../branding";
const DarkLogo = require("../images/logo-dark.svg");

type RedoclyColumn = {
  group: string;
  items: {
    link: string;
    label: string;
  }[];
};

const Footer: React.FC<{
  footer: { columns: RedoclyColumn[]; copyrightText: string };
}> = ({ footer: { columns, copyrightText } }) => {
  return (
    <FooterWrapper>
      <FooterCenter>
        <CompanyInfoWrapper>
          <img src={DarkLogo} height="80px" />
          <div className="info-container">
            <div><b>Sinch AB</b></div>
            <div>Lindhagensgatan 74</div>
            <div>112 18 Stockholm</div>
            <div>Sweden</div>
          </div>
        </CompanyInfoWrapper>
        <FooterItems>
          {columns.map((col, index) => {
            return (
              <li key={index}>
                <span className="footer-group-header">{col.group}</span>
                <ChildFooterItems>
                  {col.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.link}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ChildFooterItems>
              </li>
            );
          })}
        </FooterItems>
      </FooterCenter>
    </FooterWrapper>
  );
};

const FooterCenter = styled.div`
  display: flex;
  flex-direction: row;
`;

const CompanyInfoWrapper = styled.div`
  margin-right: 100px;
  .info-container {
    margin-top: 10px;
    margin-left: 5px;
    font-size: 16px;
    color: ${sinchTheme.colors.secondary};
  }
`;

const FooterWrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  background: ${sinchTheme.colors.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChildFooterItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`
const FooterItems = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${sinchTheme.colors.secondary};
  justify-content: start;

  .footer-group-header {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & li {
    list-style: none;
    margin-right: 50px;
    & a {
      font-size: 16px;
      font-weight: light;
      text-decoration: none;
      color: ${sinchTheme.colors.secondary};
      display: block;
      margin-bottom: 5px;
    }
  }
`;

export default Footer;
