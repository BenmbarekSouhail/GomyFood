import React, { useContext, useEffect, useState } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';


const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
        if (response.data.success) {
          navigate('/orders');
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [success, orderId, url, navigate]);

  return (
    <div className="verify">
      {loading ? (
        <div className="spinner"></div>
      ) : null}
    </div>
  );
};

export default Verify;