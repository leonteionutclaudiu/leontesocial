import classes from './Topbar.module.css';
import { Diversity2, Home, Logout } from '@mui/icons-material';
import AddFriends from '../addFriends/AddFriends';
import NotificationBar from '../notificationBar/NotificationBar';
import Searchbar from '../searchbar/Searchbar';

import { useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate();
  function loadingHandler() {
    navigate('/loading');

    setTimeout(() => {
      navigate('/');
    }, 1000);
  }

  function loadingHandlerProfile() {
    navigate('/loading');

    setTimeout(() => {
      navigate('/profile');
    }, 200);
  }

  function loadingHandlerHome() {
    navigate('/loading');

    setTimeout(() => {
      navigate('/home');
    }, 200);
  }

  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <span className={classes.logo} onClick={loadingHandlerHome}>
          <Diversity2 className={classes.logoIcon} />
          LeonteSocial
        </span>
      </div>
      <div className={classes.topbarCenter}>
        <Searchbar />
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <span className={classes.topbarLink} onClick={loadingHandlerHome}>
            <Home className={classes.homeIcon} />
          </span>
          <span>
            <Logout className={classes.logoutIcon} onClick={loadingHandler} />
          </span>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <AddFriends />
          </div>

          <div className={classes.topbarIconItem}>
            <NotificationBar />
          </div>
        </div>
      </div>
      {/* <Link to="/profile"> */}
      <img
        className={classes.topbarImg}
        src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
        alt="profile img"
        onClick={loadingHandlerProfile}
      />
      {/* </Link> */}
    </div>
  );
}

export default Topbar;
