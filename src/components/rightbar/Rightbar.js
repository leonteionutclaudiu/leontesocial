import classes from './Rightbar.module.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={classes.birthdayContainer}>
          <img className={classes.birthdayImg} src="/assets/gift.png" alt="" />
          <span className={classes.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {/* u.id=1 is for current user ;
              Show only even id's friends as online */}
          {Users.filter((u) => u.id !== 1 && u.id % 2 === 0).map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
        <div className={classes.adContainer}>
          <h4 className={classes.adText}>Sponsored</h4>
          <img
            className={classes.rightbarAd}
            src="https://www.europafm.ro/wp-content/uploads/2021/09/vizual-concurs-eMAG.png"
            alt="Ad img"
          />
          <img
            className={classes.rightbarAd}
            src="https://i.ytimg.com/vi/-Ii2kFWhRlc/maxresdefault.jpg"
            alt="Ad img"
          />
          <img
            className={classes.rightbarAd}
            src="https://media.kaufland.com/images/PPIM/AP_Alphacontent/AP_Alphacontent_1010/rum/52/57/Asset_3455257.png"
            alt="Ad img"
          />
          <img
            className={classes.rightbarAd}
            src="https://i.kym-cdn.com/photos/images/original/000/326/428/033.jpg"
            alt="Ad img"
          />
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className={classes.rightbarTitle}>User Information </h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>NewYork</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Madrid</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/1.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/2.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/3.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/4.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/5.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              className={classes.rightbarFollowingImg}
              src="assets/person/6.jpeg"
              alt=""
            />
            <span className={classes.rightbarFollowingName}></span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
