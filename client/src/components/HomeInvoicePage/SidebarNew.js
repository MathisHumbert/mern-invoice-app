import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import GoBack from './GoBack';
import InvoiceForm from '../Inputs/InvoiceForm';
import { closeNewSidebar } from '../../redux/actions/toggleActions';

const SidebarNew = () => {
  const dispatch = useDispatch();
  const { isNewSidebarOpen } = useSelector((state) => state.toggleReducer);

  return (
    <>
      <Wrapper className={isNewSidebarOpen ? 'open' : null}>
        <div className='container'>
          <header>
            <GoBack />
            <h1>New Invoice</h1>
          </header>
          <InvoiceForm type='new' />
        </div>
      </Wrapper>
      <div
        className={isNewSidebarOpen ? 'open rest-aside' : 'rest-aside'}
        onClick={() => dispatch(closeNewSidebar())}
      ></div>
    </>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 72px;
  left: 0;
  bottom: 0;
  width: 0;
  background: var(--sidebar-bcg);
  padding-top: 2rem;
  overflow: scroll;
  overflow-x: hidden;
  transition: var(--long-transition);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border-color);
    border-radius: 4px;
  }

  &.open {
    width: 100%;

    .container {
      opacity: 1;
    }
  }

  .container {
    padding: 0 24px;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }

  header {
    h1 {
      margin-top: 24px;
      letter-spacing: -0.5;
      line-height: 32px;
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    top: 80px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    max-width: 616px;

    &.open {
      width: 100%;

      .container {
        opacity: 1;
      }
    }

    .container {
      padding: 0 46px;
    }
  }

  @media (min-width: 1440px) {
    top: 0;
    left: 103px;
    max-width: 719px;
  }
`;

export default SidebarNew;
