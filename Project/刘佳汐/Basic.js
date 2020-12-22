import React, { useCallback } from 'react';
import Captcha from 'react-captcha-code';

const Basic = () => {
  const handleClick = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);

  return <Captcha charNum={4} onChange={handleClick} />;
};

export default Basic;