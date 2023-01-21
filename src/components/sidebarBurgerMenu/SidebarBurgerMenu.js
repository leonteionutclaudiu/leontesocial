import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';
import { MenuOpen } from '@mui/icons-material';

import classes from './SidebarBurgerMenu.module.css';

function SidebarBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.menu}>
      <div
        className={`${classes.burgerMenu}  ${isOpen && classes.burgerOpen}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuOpen />
      </div>
      {isOpen && (
        <div className={classes.sidebar}>
          <Sidebar />
        </div>
      )}
    </div>
  );
}

export default SidebarBurgerMenu;
