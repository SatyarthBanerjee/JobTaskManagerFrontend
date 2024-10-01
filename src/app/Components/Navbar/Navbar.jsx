import React, { useContext, useState } from 'react';
import style from './navbar.module.css';
import Image from 'next/image';
import { AuthContext } from '@/app/ContextAPIs/authcontext';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Tasks'); // Default active tab
  const {logout} = useContext(AuthContext)
  // Function to handle tab click and update active tab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={style.navbar}>
      <div className={style.pfp}>
        <Image src="/Assets/Profile.png" width={80} height={80} alt="Profile" />
      </div>
      <div className={style.navigations}>
        <ul>
          <li
            onClick={() => handleTabClick('Search')}
            className={activeTab === 'Search' ? style.active : ''}
          >
          </li>
          <li
            onClick={() => handleTabClick('Tasks')}
            className={activeTab === 'Tasks' ? style.active : ''}
          >
            Tasks
          </li>
          <li
            onClick={() => handleTabClick('Meetings')}
            className={activeTab === 'Meetings' ? style.active : ''}
          >
            Meetings
          </li>
          <li
            onClick={() => handleTabClick('Upcoming')}
            className={activeTab === 'Upcoming' ? style.active : ''}
          >
            Upcoming
          </li>
          <li
            onClick={() => handleTabClick('Completed')}
            className={activeTab === 'Completed' ? style.active : ''}
          >
            Completed
          </li>
        </ul>
      </div>
      <h5 onClick={logout}>Logout</h5>
    </div>
  );
};

export default Navbar;
