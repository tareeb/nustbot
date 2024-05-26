import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// Create a Context
export const CsrfTokenContext = createContext();

export const CsrfTokenProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const storedCsrfToken = localStorage.getItem('csrfToken');
    if (storedCsrfToken) {
      setCsrfToken(storedCsrfToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('csrfToken');
    setCsrfToken('');
  };

  return (
    <CsrfTokenContext.Provider value={{ csrfToken, setCsrfToken , logout}}>
      {children}
    </CsrfTokenContext.Provider>
  );
};

CsrfTokenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

