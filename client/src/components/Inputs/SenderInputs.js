import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { handleSenderInfo } from '../../redux/actions/formActions';
import { Input } from '..';

const SenderInputs = () => {
  const dispatch = useDispatch();
  const { senderAddress } = useSelector((state) => state.formReducer);
  const handleSenderChange = (e) => {
    dispatch(handleSenderInfo(e.target.name, e.target.value));
  };

  return (
    <Wrapper>
      <h4>Bill From</h4>
      {/* Street Address */}
      <Input
        labelText='Street Address'
        type='text'
        name='street'
        value={senderAddress.street}
        handleChange={handleSenderChange}
      />

      {/* 3 inputs */}
      <div className='input-container'>
        {/* City */}
        <Input
          labelText='City'
          type='text'
          name='city'
          value={senderAddress.city}
          handleChange={handleSenderChange}
        />
        {/* Post Code */}
        <Input
          labelText='Post Code'
          type='text'
          name='postCode'
          value={senderAddress.postCode}
          handleChange={handleSenderChange}
        />
        {/* Country */}
        <Input
          labelText='Country'
          type='text'
          name='country'
          value={senderAddress.country}
          handleChange={handleSenderChange}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }
`;
export default SenderInputs;
