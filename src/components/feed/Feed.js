import classes from './Feed.module.css';
import { useState } from 'react';
import { Posts } from '../../dummyData';
import Post from '../../components/post/Post';
// import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';

function Feed() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState(Posts);

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

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <div className={classes.share}>
          <div className={classes.shareTop}>
            <img
              className={classes.shareProfileImg}
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="User img"
            />
            <input
              className={classes.shareInput}
              text="text"
              placeholder="What's in your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button className={classes.shareButton} onClick={() => addPost()}>
              Share
            </button>
          </div>
          <hr className={classes.shareHr} />
          {/* <div className={classes.shareBottom}>
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
            
          </div> */}
          <ul className={classes.postList}>
            {posts.reverse().map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feed;
