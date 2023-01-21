import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import classes from './Profile.module.css';

import MediaQuery from 'react-responsive';
import SidebarBurgerMenu from '../../components/sidebarBurgerMenu/SidebarBurgerMenu';

function Profile() {
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <MediaQuery maxWidth={600}>
          <SidebarBurgerMenu />
        </MediaQuery>
        <MediaQuery minWidth={601}>
          <Sidebar />
        </MediaQuery>
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className={classes.profileUserImg}
                src="https://iili.io/HcGSW22.jpg"
                alt="profile img"
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>Leonte Ionut</h4>
              <span className={classes.profileInfoDesc}>Hello 🙂!</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
