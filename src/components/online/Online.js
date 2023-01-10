import classes from './Online.module.css';

function Online(props) {
  return (
    <div>
      <li className={classes.rightbarFriend}>
        <div className={classes.rightbarProfileImgContainer}>
          <img
            className={classes.rightbarProfileImg}
            src={props.user.profilePicture}
            alt="User img"
          />
          <span className={classes.rightbarOnline}></span>
        </div>
        <span className={classes.rightbarUsername}>
          {' '}
          {props.user.username}{' '}
        </span>
      </li>
    </div>
  );
}

export default Online;
