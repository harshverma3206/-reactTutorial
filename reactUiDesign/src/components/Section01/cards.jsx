import React from 'react'
import styles from "./cards.module.css";

const Cards = () => {
    return (

        <div id={styles.card}>
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <div className="top">
                <h6>Happier With Robbert?</h6>
                <p>204 Episodes</p>
                <button>Play<a href="#"><i class="fa-solid fa-location-arrow"></i></a></button>
            </div>
            <div className="bottom">
                <button>Self Help</button>
                <button>Wellness</button>
                <button>Life</button>
            </div>
        </div>

    )
}

export default Cards
