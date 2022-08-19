import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = React.memo(
  () => (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.png`}
            alt="logo"
          />
        </Link>

        <h1>Hyve Mobile ReactJS Coding Task</h1>

        <div />
      </div>
    </header>
  ),
);
