import styled from 'styled-components';
import StatusButton from '../StatusButton';
import InvoiceButtons from './InvoiceButtons';

const Header = ({ status }) => {
  return (
    <Wrapper>
      <div className='left'>
        <p>Status</p>
        <StatusButton status={status} />
      </div>
      <div className='right'>
        <InvoiceButtons />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: var(--main-bcg);
  padding: 24px;
  border-radius: 8px;
  margin-top: 2rem;

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    display: none;
  }

  @media (min-width: 768px) {
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      justify-content: inherit;
      gap: 1rem;
    }

    .right {
      display: block;
    }
  }
`;
export default Header;
