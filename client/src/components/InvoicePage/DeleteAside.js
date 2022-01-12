import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { toggleDeletion } from '../../redux/actions/toggleActions';
import { deleteInvoice } from '../../redux/actions/dataActions';

const DeleteAside = () => {
  const dispatch = useDispatch();
  const { isDeletionOpen } = useSelector((state) => state.toggleReducer);
  const { single_invoice } = useSelector((state) => state.dataReducer);

  return (
    <Wrapper className={isDeletionOpen ? 'open' : null}>
      <div className='deletion'>
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className='buttons'>
          <button
            className='main-btn primary'
            onClick={() => dispatch(toggleDeletion())}
          >
            Cancel
          </button>
          <Link to='/'>
            <button
              className='main-btn red'
              onClick={() => {
                dispatch(deleteInvoice(single_invoice._id));
                dispatch(toggleDeletion());
              }}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  transition: var(--long-transition);

  &.open {
    z-index: 5;
    opacity: 1;
  }

  .deletion {
    background: var(--main-bcg);
    padding: 32px;
    border-radius: 8px;
    max-width: 380px;

    p {
      margin-top: 18px;
      margin-bottom: 24px;
      line-height: 22px;
    }
  }

  .buttons {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .deletion {
      padding: 48px;
      max-width: 428px;
    }
  }
`;

export default DeleteAside;
