import React, { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import classes from './Comments.module.css';

function Comments(props) {
  const [show, setShow] = useState(false);

  const [data, setData] = useState([]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setComments(data.slice(0, props.post.comment));
  };

  return (
    <div>
      <div className={classes.commentBtn} onClick={handleShow}>
        {props.post.comment} comments
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={classes.commentsTitle}>
          <Modal.Title>
            {' '}
            {props.post.comment} comments on this post:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className={classes.ulComments}>
            {comments.map((d, index) => {
              return (
                <li key={index} className={classes.comment}>
                  <strong>{d.email} : </strong>
                  {d.body}
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Comments;
