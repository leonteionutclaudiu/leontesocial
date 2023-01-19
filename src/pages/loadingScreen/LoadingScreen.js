import Spinner from 'react-bootstrap/Spinner';

import classes from './LoadingScreen.module.css';

function GrowExample() {
  return (
    <div className={classes.loading}>
      <Spinner className={classes.spinner} animation="grow" />
    </div>
  );
}

export default GrowExample;
