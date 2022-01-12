import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import userImage from '../assets/image-avatar.jpg';
import { logoutUser } from '../redux/actions/userActions';

const UserImage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  return (
    <Wrapper>
      <div>
        <h3>{user}</h3>
        <button type='button' onClick={() => dispatch(logoutUser())}>
          logout
        </button>
      </div>
      <img src={userImage} alt='user-img' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  h3 {
    text-align: center;
    color: var(--navbar-color);
    text-transform: capitalize;
  }

  button {
    background: transparent;
    font-weight: 600;
    color: var(--navbar-color);
    cursor: pointer;

    &:hover {
      color: #dfe3fa;
    }
  }

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
export default UserImage;
