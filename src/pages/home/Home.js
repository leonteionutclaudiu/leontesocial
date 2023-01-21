import classes from './Home.module.css';

import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import MediaQuery from 'react-responsive';
import SidebarBurgerMenu from '../../components/sidebarBurgerMenu/SidebarBurgerMenu';

function Home() {
  return (
    <>
      <Topbar />
      <div className={classes.homeContainer}>
        <MediaQuery maxWidth={600}>
          <SidebarBurgerMenu />
        </MediaQuery>
        <MediaQuery minWidth={601}>
          <Sidebar />
        </MediaQuery>

        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
