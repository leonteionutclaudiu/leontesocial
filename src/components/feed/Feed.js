import classes from './Feed.module.css';
import { useState } from 'react';
import { Posts } from '../../dummyData';
import Post from '../../components/post/Post';
import { Alert } from 'react-bootstrap';

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
  }

  function handleDelete(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
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
              src="https://iili.io/HcGSW22.jpg"
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
              return (
                <Post
                  key={post.id}
                  post={post}
                  onDelete={() => handleDelete(post.id)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feed;
