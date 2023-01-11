import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import classes from './Profile.module.css';

function Profile() {
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
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
                src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>Leonte Ionut</h4>
              <span className={classes.profileInfoDesc}>Hello my friends!</span>
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
