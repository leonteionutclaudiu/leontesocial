import classes from './Rightbar.module.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className={classes.birthdayContainer}>
          <img
            className={classes.birthdayImg}
            src="/assets/gift.png"
            alt="birthday img"
          />
          <span className={classes.birthdayText}>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map((u) => {
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
            <span className={classes.rightbarInfoKey}>Country:</span>
            <span className={classes.rightbarInfoValue}>Romania</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>Bucharest</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Braila</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Email:</span>
            <span className={classes.rightbarInfoValue}>
              leonteionut98@yahoo.com
            </span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Website:</span>
            <a
              href="https://leonte-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className={classes.rightbarInfoValue}
            >
              My-Portfolio
            </a>
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
