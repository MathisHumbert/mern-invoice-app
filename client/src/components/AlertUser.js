import { useSelector } from 'react-redux';

const AlertUser = () => {
  const { alertText, alertType } = useSelector((state) => state.userReducer);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default AlertUser;
