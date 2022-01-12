import uniqid from 'uniqid';

import {
  getFullDate,
  getTodayDate,
  getTotalAmount,
  getUpdatedDate,
} from '../../utils/helpers';

import {
  CREATE_NEW_ITEM,
  DELETE_ITEM,
  HANDLE_CLIENT_INFO,
  HANDLE_DATE_INFO,
  HANDLE_GENERAL_INFO,
  HANDLE_ITEM_INFO,
  HANDLE_SENDER_INFO,
  HANDLE_TERM_INFO,
  RESET_ITEM,
  SET_ITEM,
} from '../actions/actions';

// updateStatus => pending / draft / paid
// send all the data

const initialState = {
  createdAt: getTodayDate(new Date()),
  paymentDue: getUpdatedDate(new Date(), 30),
  description: '',
  paymentTerms: 30,
  clientName: '',
  clientEmail: '',
  status: 'draft',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [
    {
      id: uniqid(),
      name: '',
      quantity: '',
      price: '',
      total: 0,
    },
  ],
  total: 0,
};

const formReducer = (state = initialState, { type, payload }) => {
  if (type === HANDLE_SENDER_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      senderAddress: { ...state.senderAddress, [name]: value },
    };
  }

  if (type === HANDLE_CLIENT_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      clientAddress: { ...state.clientAddress, [name]: value },
    };
  }

  if (type === HANDLE_GENERAL_INFO) {
    const { name, value } = payload;
    return {
      ...state,
      [name]: value,
    };
  }

  if (type === HANDLE_DATE_INFO) {
    if (payload.type === 'createdAt') {
      const paymentDue = getUpdatedDate(
        getFullDate(payload.date),
        state.paymentTerms
      );

      return {
        ...state,
        createdAt: payload.date,
        paymentDue,
      };
    } else {
      return { ...state, paymentDue: payload.date };
    }
  }

  if (type === HANDLE_TERM_INFO) {
    return { ...state, paymentTerms: payload };
  }

  if (type === HANDLE_ITEM_INFO) {
    const { name, value, id } = payload;
    const items = state.items.map((item) => {
      if (item.id === id) {
        item[name] = value;
        if (name === 'price') {
          item.total = (item.quantity * value).toFixed(2);
        }
        if (name === 'quantity') item.total = (item.price * value).toFixed(2);
      }
      return item;
    });
    const total = getTotalAmount(items);

    return { ...state, items, total };
  }

  if (type === CREATE_NEW_ITEM) {
    return {
      ...state,
      items: [
        ...state.items,
        {
          id: uniqid(),
          name: '',
          quantity: '',
          price: '',
          total: 0,
        },
      ],
    };
  }

  if (type === DELETE_ITEM) {
    const items = state.items.filter((item) => item.id !== payload);
    const total = getTotalAmount(items);
    return { ...state, items, total };
  }

  if (type === SET_ITEM) {
    return payload;
  }

  if (type === RESET_ITEM) {
    return initialState;
  }

  return state;
};

export default formReducer;
