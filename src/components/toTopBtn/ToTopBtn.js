import { ArrowUpward } from '@mui/icons-material';
import React, { useCallback } from 'react';
import classes from './ToTopBtn.module.css';

const ToTopBtn = () => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button className={classes.scrollToTopButton} onClick={handleClick}>
      <ArrowUpward className={classes.icon} />
    </button>
  );
};

export default ToTopBtn;
