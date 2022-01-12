import styled from 'styled-components';
import TopInfo from './TopInfo';
import BottomInfo from './BottomInfo';
import PriceInfo from './PriceInfo';

const Invoice = () => {
  return (
    <Wrapper>
      <TopInfo />
      <BottomInfo />
      <PriceInfo />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background: var(--main-bcg);
  padding: 24px;
  margin-top: 13px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 32px;
    height: fit-content;
  }
  @media (min-width: 768px) {
    padding: 48px;
    height: fit-content;
  }
`;
export default Invoice;
