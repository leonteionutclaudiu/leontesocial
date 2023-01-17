import classes from './Feed.module.css';
import { useState } from 'react';
import { Posts } from '../../dummyData';
import Post from '../../components/post/Post';
import { Alert } from 'react-bootstrap';

// import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

function Feed() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState(Posts);
  const [showShareAlert, setShowShareAlert] = useState(false);
  const [showShareError, setShowShareError] = useState(false);

  function addPost() {
    const post = {
      id: Math.random(),
      desc: newPost,
      like: 0,
      comment: 0,
      date: 'right now',
      username: 'Leonte Ionut',
    };

    setPosts((oldList) => [...oldList, post]);

    posts.reverse();

    setNewPost('');

    console.log(post);
    console.log(posts);
  }

  function shareHandler() {
    addPost();
    setShowShareAlert(true);
    setTimeout(() => {
      setShowShareAlert(false);
    }, 5000);
  }

  function shareErrorHandler() {
    setShowShareError(true);
    setTimeout(() => {
      setShowShareError(false);
    }, 5000);
  }

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <div className={classes.share}>
          <div className={classes.shareTop}>
            <img
              className={classes.shareProfileImg}
              src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"
              alt="User img"
            />
            <input
              className={classes.shareInput}
              text="text"
              placeholder="What's in your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              required
            />

            {newPost.length > 5 ? (
              <button className={classes.shareButton} onClick={shareHandler}>
                Share
              </button>
            ) : (
              <button
                className={classes.shareButton}
                onClick={shareErrorHandler}
              >
                Share
              </button>
            )}

            {/* <button className={classes.shareButton} onClick={shareHandler}>
              Share
            </button> */}
          </div>
          <hr className={classes.shareHr} />

          {showShareAlert ? (
            <Alert variant="success">You have successfully posted!</Alert>
          ) : (
            ''
          )}

          {showShareError ? (
            <Alert variant="danger">
              Please write at least 6 characters to be able to post!
            </Alert>
          ) : (
            ''
          )}
          <ul className={classes.postList}>
            {posts.reverse().map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </ul>
        </div>
      </div>

      <div className={classes.pushNotification}></div>
    </div>
  );
}

export default Feed;
