import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  // Prevent the default action when clicking on the "Environments" link
  const handleDropdownClick = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <span className="fire-symbol">🔥</span>
            <span className="logo-text">Survival Guide Hub</span>
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav>
          <div className="nav-container">
            <ul className="nav-links">
              <li><Link to="/gettingstarted">Getting Started</Link></li>
              <li><Link to="/planning">Planning</Link></li>
              <li className="dropdown">
                <Link to="#" className="dropdown-btn" onClick={handleDropdownClick}>
                  Environments <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/temperate-env">Temperate Environment</Link></li>
                  <li><Link to="/tropical-env">Tropical Environment</Link></li>
                  <li><Link to="/mountain-env">Mountain Environment</Link></li>
                  <li><Link to="/desert-env">Desert Environment</Link></li>
                  <li><Link to="/cold-env">Cold Environment</Link></li>
                  <li><Link to="/marine-env">Marine Environment</Link></li>
                </ul>
              </li>
              <li><Link to="/survival-tips">Survival Tips</Link></li>
              <li><Link to="/survival-kit">Survival Kit</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
