import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  toggleDeletion,
  openEditSidebar,
} from '../../redux/actions/toggleActions';
import { updateInvoice } from '../../redux/actions/dataActions';
import { setItem } from '../../redux/actions/formActions';

const InvoiceButtons = () => {
  const dispatch = useDispatch();
  const { single_invoice } = useSelector((state) => state.dataReducer);

  return (
    <Wrapper>
      {single_invoice.status !== 'paid' && (
        <button
          className='main-btn primary'
          onClick={() => {
            dispatch(openEditSidebar());
            dispatch(setItem(single_invoice));
          }}
        >
          Edit
        </button>
      )}
      <button
        className='main-btn red'
        onClick={() => dispatch(toggleDeletion())}
      >
        Delete
      </button>
      {single_invoice.status === 'pending' && (
        <button
          className='main-btn purple'
          onClick={() =>
            dispatch(updateInvoice(single_invoice._id, { status: 'paid' }))
          }
        >
          Mark as Paid
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export default InvoiceButtons;
