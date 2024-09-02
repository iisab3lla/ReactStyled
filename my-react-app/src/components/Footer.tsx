import styled from "styled-components";

export function Footer() {
  return (
    <FooterStyle>
      <div>
        About &bull; Contact &bull; Terms of Use &bull; Privacy Policy
        <p>@ Isabella Peroli 2024. All Rights Reserved</p>
      </div>
      <div>
        <img src="../src/assets/github.png" alt="github icon" />
        <img src="../src/assets/linkedin.png" alt="linkedin icon" />
        <img src="../src/assets/whatsapp.png" alt="whatsapp icon" />
      </div>
    </FooterStyle>
  );
}

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10rem;
  color: #6c4392;

  div {
    font-weight: 600;
    font-size: 14px;
    p {
      color: #000;
      font-weight: normal;
      font-size: 12px;
    }
    img {
      width: 30px;
      height: auto;
      margin: 10px;
    }
  }
`;
