import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleInvoice } from '../redux/actions/dataActions';
import {
  DeleteAside,
  Footer,
  GoHome,
  Header,
  Invoice,
  SidebarEdit,
} from '../components/InvoicePage';

const InvoicePage = () => {
  const dispatch = useDispatch();
  const { single_invoice, isLoading, isError } = useSelector(
    (state) => state.dataReducer
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleInvoice(id));
    // eslint-disable-next-line
  }, []);

  if (isLoading || single_invoice.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Wrapper>
      <div className='container'>
        <GoHome />
        <Header status={single_invoice.status} />
        <Invoice />
        <Footer />
        <DeleteAside />
        <SidebarEdit id={id} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 48px);
  min-height: calc(100vh - 72px);
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 150px;
  position: relative;

  @media (min-width: 768px) {
    width: calc(100% - 96px);
    padding-top: 48px;
    min-height: inherit;
    height: 100%;
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding-left: 103px;
    display: grid;
    justify-items: center;

    .container {
      width: 100%;
      max-width: 1220px;
    }
  }
`;
export default InvoicePage;
