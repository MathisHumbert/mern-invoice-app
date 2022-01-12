import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleClientInfo,
  handleGeneralInfo,
} from '../../redux/actions/formActions';
import DateInput from './DateInput';
import TermInput from './TermInput';
import { Input } from '..';

const ClientInputs = () => {
  const dispatch = useDispatch();
  const { clientAddress, clientName, clientEmail, description } = useSelector(
    (state) => state.formReducer
  );
  const handleClientChange = (e) => {
    dispatch(handleClientInfo(e.target.name, e.target.value));
  };
  const handleGeneralChange = (e) => {
    dispatch(handleGeneralInfo(e.target.name, e.target.value));
  };

  return (
    <Wrapper>
      <h4>Bill To</h4>
      {/* Name */}
      <Input
        labelText={`Client's Name`}
        type='text'
        name='clientName'
        value={clientName}
        handleChange={handleGeneralChange}
      />
      {/* Email */}
      <Input
        labelText={`Client's Email`}
        type='text'
        name='clientEmail'
        value={clientEmail}
        handleChange={handleGeneralChange}
      />
      {/* Street Address */}
      <Input
        labelText='Street Address'
        type='text'
        name='street'
        value={clientAddress.street}
        handleChange={handleClientChange}
      />
      {/* 3 inputs */}
      <div className='input-container'>
        {/* City */}
        <Input
          labelText='City'
          type='text'
          name='city'
          value={clientAddress.city}
          handleChange={handleClientChange}
        />
        {/* Post Code */}
        <Input
          labelText='Post Code'
          type='text'
          name='postCode'
          value={clientAddress.postCode}
          handleChange={handleClientChange}
        />
        {/* Country */}
        <Input
          labelText='Country'
          type='text'
          name='country'
          value={clientAddress.country}
          handleChange={handleClientChange}
        />
      </div>
      {/* 2 inputs */}
      <div className='input-two-container'>
        {/* Date */}
        <div className='single-input'>
          <label htmlFor='date'>Invoice Date</label>
          <DateInput />
        </div>
        {/* Terms */}
        <div className='single-input'>
          <label>Payement Terms</label>
          <TermInput />
        </div>
      </div>
      {/* Description */}
      <Input
        labelText='Project Description'
        type='text'
        name='description'
        value={description}
        handleChange={handleGeneralChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;

  .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;

    .single-input:last-child {
      grid-column: 1 / 3;
    }
  }

  .input-two-container {
    margin-top: 16px;
  }

  #date {
    cursor: pointer;
  }
`;
export default ClientInputs;
