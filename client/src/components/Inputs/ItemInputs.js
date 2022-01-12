import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleItemInfo,
  createNewItem,
  deleteItem,
} from '../../redux/actions/formActions';
import { Input, AlertData } from '..';

const ItemInput = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.formReducer);
  const { showAlert } = useSelector((state) => state.dataReducer);

  const handleItemChange = (e, id) => {
    dispatch(handleItemInfo(e.target.name, e.target.value, id));
  };

  return (
    <Wrapper>
      <h2>Item List</h2>
      {items.map((item, index) => {
        const { id, name, price, quantity, total } = item;
        return (
          <div
            className={
              index === 0 ? 'first input-container' : 'input-container'
            }
            key={id}
          >
            {/* Name */}
            <Input
              labelText='Item Name'
              type='text'
              name='name'
              value={name}
              id={id}
              handleChange={handleItemChange}
            />
            {/* Quantity */}
            <Input
              labelText='Qty.'
              type='number'
              name='quantity'
              value={quantity}
              id={id}
              handleChange={handleItemChange}
            />
            {/* Price */}
            <Input
              labelText='Price'
              type='number'
              name='price'
              value={price}
              id={id}
              handleChange={handleItemChange}
            />
            {/* Total */}
            <div className='single-input total'>
              <p>Total</p>
              <p>{total}</p>
            </div>

            <div className='delete-item-container'>
              <button type='button' onClick={() => dispatch(deleteItem(id))}>
                <FaTrash className='icon' />
              </button>
            </div>
          </div>
        );
      })}
      <button
        type='button'
        className='main-btn primary'
        onClick={() => dispatch(createNewItem())}
      >
        + Add New Item
      </button>

      {showAlert && <AlertData />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 66px;
  position: relative;

  h2 {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: #777f98;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    column-gap: 1rem;
    padding-top: 24px;

    .single-input:first-child {
      grid-column: 1 / 5;
    }

    &.first {
      padding-top: 0;
    }
  }

  .delete-item-container {
    position: relative;

    .icon {
      cursor: pointer;
      position: absolute;
      bottom: 16px;
      right: 7px;
      color: #888eb0;
      font-size: 15px;

      &:hover {
        color: var(--red-color);
      }
    }
  }

  .total {
    padding-top: 24px;

    p:last-child {
      padding-top: 32.5px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .main-btn {
    margin-top: 48px;
    padding: 0;
    width: 100%;
  }
`;
export default ItemInput;
