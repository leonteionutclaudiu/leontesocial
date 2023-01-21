import classes from './Post.module.css';
import { DeleteForever } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';
import Comments from '../comments/Comments';

function Post(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [text, setText] = useState('people like it');

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);

    if (!isLiked) {
      setText('people like it (you like it)');
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
                src="https://iili.io/HcGSW22.jpg"
                alt="Profile img"
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
            <span onClick={props.onDelete}>
              <DeleteForever />
            </span>
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
                classes.likeIcon && isLiked
                  ? classes.bigLike
                  : classes.smallLike
              }
              src="assets/like.png"
              alt="like icon"
              onClick={likeHandler}
            />

            <p className={classes.postLikeCounter}>
              <strong>{like}</strong> {text}
            </p>
          </div>
          <div className={classes.postBottomRight}>
            <span className={classes.postCommentText}>
              <Comments post={props.post} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
