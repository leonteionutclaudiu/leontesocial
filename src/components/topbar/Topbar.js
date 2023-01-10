import classes from './Topbar.module.css';
import { Chat, Home, Logout, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AddFriends from '../addFriends/AddFriends';
import NotificationBar from '../notificationBar/NotificationBar';

function Topbar() {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <span>
          <Link to="/home" className={classes.logo}>
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
              <Home />
            </Link>
          </span>
          <span>
            <Link to="/" className={classes.topbarLink}>
              <Logout />
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
        <img className={classes.topbarImg} src="/assets/person/1.jpeg" alt="" />
      </Link>
    </div>
  );
}

export default Topbar;
