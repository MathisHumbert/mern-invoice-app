import styled from 'styled-components';
import { ClientInputs, SenderInputs, ItemInputs, NewBtn, EditBtn } from '.';

const InvoiceForm = ({ type }) => {
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <SenderInputs />
      <ClientInputs />
      <ItemInputs />
      {type === 'new' ? <NewBtn /> : <EditBtn />}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding-top: 33px;

  .single-input {
    padding-top: 24px;
  }

  h4 {
    color: var(--purple-color);
  }
`;
export default InvoiceForm;
