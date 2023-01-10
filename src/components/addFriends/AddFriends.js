import { Person, PersonAdd, PersonOff } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import classes from './AddFriends.module.css';

function FollowList() {
  const [people, setPeople] = useState([]);
  const [following, setFollowing] = useState(new Set());
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, []);

  function handleFollow(id) {
    setFollowing(new Set(following.add(id)));

    console.log(people);
  }

  function handleUnfollow(id) {
    following.delete(id);
    setFollowing(new Set(following));
  }

  return (
    <div className={classes.followList}>
      {showList ? (
        <button
          className={classes.hideListButton}
          onClick={() => setShowList(false)}
        >
          Hide List
        </button>
      ) : (
        <button
          className={classes.showListButton}
          onClick={() => setShowList(true)}
        >
          <Person />
        </button>
      )}
      {showList && (
        <ul className={classes.peopleList}>
          {people.map((person) => (
            <li key={person.id.value} className={classes.person}>
              <img
                className={classes.thumbnail}
                src={person.picture.thumbnail}
                alt={person.name.first}
              />
              <div className={classes.peopleInfo}>
                <span
                  className={classes.name}
                >{`${person.name.first} ${person.name.last}`}</span>
                <span className={classes.peopleCountry}>
                  {person.location.country}
                </span>
              </div>
              {following.has(person.id.value) ? (
                <button
                  className={classes.unfollowButton}
                  onClick={() => handleUnfollow(person.id.value)}
                >
                  <PersonOff htmlColor="#C42021" />
                </button>
              ) : (
                <button
                  className={classes.followButton}
                  onClick={() => handleFollow(person.id.value)}
                >
                  <PersonAdd />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FollowList;
