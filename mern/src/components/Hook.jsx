import React from 'react';
import { Link } from 'react-router-dom';

const Hook = () => {
  return (
    <div>
      <Link to="/state">
        <h1 className="nav-link">STATE</h1>
      </Link>
      <Link to="/ref">
        <h1 className="nav-link">REF</h1>
      </Link>
    </div>
  );
};

export default Hook;