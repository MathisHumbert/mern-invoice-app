import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AlertUser } from '../components';
import { Logo, Input } from '../components';
import { displayUserAlert, setupUser } from '../redux/actions/userActions';
import { setTheme } from '../utils/helpers';

const inititalState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { isLoading, showAlert, user } = useSelector(
    (state) => state.userReducer
  );
  const navigate = useNavigate();
  const [values, setValues] = useState(inititalState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      dispatch(displayUserAlert());
      return;
    }

    const formUser = { name, email, password };

    if (isMember) {
      dispatch(
        setupUser(formUser, 'login', 'Login Successful! Redirecting...')
      );
    } else {
      dispatch(setupUser(formUser, 'register', 'User Created! Redirecting...'));
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2500);
    }
  }, [user, navigate]);

  useEffect(() => {
    setTheme();
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <header>
          <div className='logo'>
            <Logo />
          </div>
          <h1>Invoice App</h1>
        </header>
        <h1 className='title'>{values.isMember ? 'Login' : 'Register'}</h1>
        {showAlert && <AlertUser />}
        {!values.isMember && (
          <Input
            labelText='Name'
            type='text'
            name='name'
            handleChange={handleChange}
            value={values.name}
          />
        )}
        <Input
          labelText='Email'
          type='email'
          name='email'
          handleChange={handleChange}
          value={values.email}
        />
        <Input
          labelText='Password'
          type='password'
          name='password'
          handleChange={handleChange}
          value={values.password}
        />
        <button
          type='submit'
          className='submit-btn main-btn purple'
          disabled={isLoading}
        >
          Submit
        </button>
        <h3>
          {values.isMember ? 'Not a member yet' : 'Already a member'} ?{' '}
          <button type='button' className='toggle-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </h3>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 24px;

  form {
    position: relative;
    width: 100%;
    background: var(--main-bcg);
    padding: 24px;
    border-radius: 8px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background: var(--purple-color);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  header {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-bottom: 2rem;
    align-self: center;
  }

  .single-input {
    margin-top: 24px;
  }

  .title {
    align-self: center;
    margin-bottom: 8px;
  }

  .submit-btn {
    margin-top: 2rem;
    padding: 26px 0;
    border-radius: 6px;
    text-transform: capitalize;
    line-height: 0;
    width: 100%;
  }

  .toggle-btn {
    font-size: 16px;
    letter-spacing: -0.8px;
    line-height: 24px;
    background: transparent;
    color: var(--purple-color);

    &:hover {
      color: var(--purple-hover-color);
    }
  }

  h3 {
    text-align: center;
    margin-top: 24px;
  }
`;

export default RegisterPage;
