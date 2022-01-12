import styled from 'styled-components';
import InvoiceButtons from './InvoiceButtons';

const Footer = () => {
  return (
    <Wrapper>
      <InvoiceButtons />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: -24px;
  width: calc(100% + 48px);
  margin: 0 auto;

  background: var(--main-bcg);
  padding: 24px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export default Footer;
