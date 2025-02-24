import React from 'react';
import defaultProfile from './assets/defaultProfile.png';

const Navbar = ({ user = "Guest" }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={styles.navbar}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#" className="d-flex align-items-center text-decoration-none">
          <img 
            src={defaultProfile}
            alt="Profile" 
            style={styles.profileImage} 
          />
          <div style={styles.nameContainer}>
            {user !== 'Guest' ? (
              <>
                <span style={styles.welcomeText}>Welcome,</span>
                <span style={styles.userName}>{user}</span>
              </>
            ) : (
              <>
                <span style={styles.welcomeText}>Click to</span>
                <span style={styles.userName}>Login</span>
              </>
            )}
          </div>
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '0',
  },
  profileImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    clipPath: 'circle(38% at 50% 50%)',
    marginRight: '10px',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#fff',
  },
  userName: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
  },
};

export default Navbar;