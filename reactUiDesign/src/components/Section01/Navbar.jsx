import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <a href="#"><h6>Podcasta</h6></a>
            <div className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Episodes</a>
                <a href="#">Trending</a>
                <a href="#">Resources</a>
                <a href="#">Pricing</a>
            </div>
            <div className={styles.btn}>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
