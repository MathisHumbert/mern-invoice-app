import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { termsData } from '../../utils/constants';
import { getFullDate, getUpdatedDate } from '../../utils/helpers';
import {
  handleDateInfo,
  handleTermInfo,
} from '../../redux/actions/formActions';

const TermInput = () => {
  const dispatch = useDispatch();
  const { createdAt, paymentTerms } = useSelector((state) => state.formReducer);

  const [activeTerm, setActiveTerm] = useState(paymentTerms);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleClick = (term) => {
    setActiveTerm(term);
    setIsAsideOpen(false);
    dispatch(handleTermInfo(term));
    dispatch(
      handleDateInfo(getUpdatedDate(getFullDate(createdAt), term), 'paymentDue')
    );
  };

  useEffect(() => {
    setActiveTerm(paymentTerms);
  }, [paymentTerms]);

  return (
    <Wrapper>
      <button
        type='button'
        onClick={() => setIsAsideOpen(!isAsideOpen)}
        className={isAsideOpen ? 'open' : null}
      >
        <h3>
          Next {activeTerm} Day{activeTerm > 1 ? 's' : ''}
        </h3>
        {isAsideOpen ? (
          <FaChevronUp className='icon' />
        ) : (
          <FaChevronDown className='icon' />
        )}
      </button>
      <aside
        className={isAsideOpen ? 'open' : null}
        onMouseLeave={() => setIsAsideOpen(false)}
      >
        {termsData.map((item, index) => {
          return (
            <div className='single-item' key={index}>
              <h3
                className={item.term === activeTerm ? 'active' : null}
                onClick={() => handleClick(item.term)}
              >
                {item.text}
              </h3>
            </div>
          );
        })}
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border: 1px solid var(--border-color);
    padding: 17px 20px 17px 20px;
    background: transparent;
    line-height: 0;
    max-height: 55px;
    border-radius: 4px;

    &.open {
      border: 1px solid var(--purple-color);
    }

    h3 {
      letter-spacing: -0.25px;
      font-weight: 400;
    }

    .icon {
      color: var(--purple-color);
    }
  }

  aside {
    width: 100%;
    position: absolute;
    bottom: -10px;
    transform: translateY(100%);
    background: var(--main-bcg);
    border-radius: 8px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s linear;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    z-index: 2;

    &.open {
      height: 228px;
    }

    .single-item {
      padding: 1rem 0 1rem 24px;
      border-bottom: 1px solid var(--border-color);
    }

    h3 {
      letter-spacing: -0.25px;
      font-weight: 400;
      transition: color 0.3s ease-in-out;
      cursor: pointer;

      &.active {
        color: var(--purple-color);
      }

      &:hover {
        color: var(--purple-color);
      }
    }
  }
`;
export default TermInput;
