import classes from './Topbar.module.css';
import { Chat, Diversity2, Home, Logout, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AddFriends from '../addFriends/AddFriends';
import NotificationBar from '../notificationBar/NotificationBar';

function Topbar() {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <span>
          <Link to="/home" className={`${classes.logo} `}>
            <Diversity2 className={classes.logoIcon} />
            LeonteSocial
          </Link>
        </span>
      </div>
      <div className={classes.topbarCenter}>
        <div className={classes.searchBar}>
          <Search className={classes.searchIcon} />
          <input className={classes.searchInput} placeholder="Search" />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarLinks}>
          <span>
            <Link to="/home" className={classes.topbarLink}>
              <Home className={classes.homeIcon} />
            </Link>
          </span>
          <span>
            <Link to="/" className={classes.topbarLink}>
              <Logout className={classes.logoutIcon} />
            </Link>
          </span>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <AddFriends />
          </div>
          <div className={classes.topbarIconItem}>
            <Chat />
            <span className={classes.topbarIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconItem}>
            <NotificationBar />
          </div>
        </div>
      </div>
      <Link to="/profile">
        <img
          className={classes.topbarImg}
          src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Topbar;
