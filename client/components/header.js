import React from 'react';
import Link from 'next/link';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sing In', link: '/auth/signin' },
    !currentUser && { label: 'Sing Up', link: '/auth/signup' },
    currentUser && { label: 'Sing Out', link: '/auth/signout' },
  ]
    .filter((linksConfig) => linksConfig)
    .map(({ label, link }) => (
      <li key={link} className="nav-item">
        <Link href={link} className="nav-link">
          {label}
        </Link>
      </li>
    ));
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        GitTix
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
