import classes from './CloseFriend.module.css';

function CloseFriend(props) {
  return (
    <li className={classes.sidebarFriend}>
      <img
        className={classes.sidebarFriendImg}
        src={props.user.profilePicture}
        alt="Friend Img"
      />
      <span className={classes.sidebarFriendName}>{props.user.username}</span>
    </li>
  );
}

export default CloseFriend;
