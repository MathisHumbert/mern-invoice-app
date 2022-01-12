import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllInvoices } from '../../redux/actions/dataActions';
import NoInvoices from './NoInvoices';
import SingleInvoice from './SingleInvoice';

const AllInvoices = () => {
  const dispatch = useDispatch();
  const { invoices, isLoading, isError, reset } = useSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    dispatch(getAllInvoices());
    // eslint-disable-next-line
  }, [reset]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  if (invoices.length === 0) {
    return <NoInvoices />;
  }

  return (
    <Wrapper>
      {invoices.map((item) => {
        return <SingleInvoice key={item._id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;
export default AllInvoices;
