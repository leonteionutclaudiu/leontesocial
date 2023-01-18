import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { Search, WorkspacePremium } from '@mui/icons-material';

import classes from './Searchbar.module.css';

function Searchbar() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <span>
        You need a Premium account to be able to search for something.{' '}
      </span>
      <WorkspacePremium />
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <div className={classes.searchBar}>
        <Search className={classes.searchIcon} />
        <input className={classes.searchInput} placeholder="Search" disabled />
      </div>
    </OverlayTrigger>
  );
}

export default Searchbar;
