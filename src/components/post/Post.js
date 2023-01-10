import classes from './Post.module.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [text, setText] = useState('people like it');
  const [isLoved, setIsLoved] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);

    if (!isLiked) {
      setText('people like it (you like it)');
    } else {
      setText('people like it');
    }
  };

  const loveHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    setIsLoved(!isLiked);

    if (!isLoved) {
      setText('people like it (you love it)');
    } else {
      setText('people like it');
    }
  };

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            {props.post.userId ? (
              <img
                className={classes.postProfileImg}
                src={
                  Users.filter((u) => u.id === props.post.userId)[0]
                    .profilePicture
                }
                alt="User img"
              />
            ) : (
              <img
                className={classes.postProfileImg}
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="Test img"
              />
            )}
            {props.post.userId ? (
              <span className={classes.postUsername}>
                {Users.filter((u) => u.id === props.post.userId)[0].username}
              </span>
            ) : (
              <span className={classes.postUsername}>Leonte Ionut</span>
            )}
            <span className={classes.postDate}>{props.post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVert />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{props.post?.desc}</span>
          {props.post.photo ? (
            <img
              className={classes.postImg}
              src={props.post.photo}
              alt="post img"
            />
          ) : (
            ''
          )}
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img
              className={
                classes.likeIcon && isLiked && !isLoved
                  ? classes.bigLike
                  : classes.smallLike
              }
              src="assets/like.png"
              alt="like icon"
              onClick={likeHandler}
            />
            <img
              className={
                classes.likeIcon && isLoved
                  ? classes.bigLike
                  : classes.smallLike
              }
              src="assets/heart.png"
              alt="heart icon"
              onClick={loveHandler}
            />
            <span className={classes.postLikeCounter}>
              {like} {text}
            </span>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>
              {props.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
