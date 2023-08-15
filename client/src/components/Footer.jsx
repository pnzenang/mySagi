import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <p className="copyright">
        copyright &copy; SAGI, An Active Solidarity-
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </Wrapper>
  );
};
export default Footer;
