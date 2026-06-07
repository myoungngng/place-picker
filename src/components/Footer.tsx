import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <p>소프트웨어설계 기말 프로젝트 -  B2024000257 명수연</p>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  padding: 12px 10px;
  background: #fffef4;
  border-top: 2px solid #111;
  color: #111;
  font-size: 13px;
  text-align: center;
`;