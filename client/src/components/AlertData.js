import { useSelector } from 'react-redux';

const AlertData = () => {
  const { alertText, alertType } = useSelector((state) => state.dataReducer);

  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default AlertData;
