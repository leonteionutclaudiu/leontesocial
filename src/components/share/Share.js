import classes from './Share.module.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

function Share() {
  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            className={classes.shareProfileImg}
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            className={classes.shareInput}
            placeholder="What's in your mind Ionut?"
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or Video</span>
            </div>
            <div className={classes.shareOption}>
              <Label htmlColor="blue" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tag</span>
            </div>
            <div className={classes.shareOption}>
              <Room htmlColor="green" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <EmojiEmotions
                htmlColor="goldenrod"
                className={classes.shareIcon}
              />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={classes.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
