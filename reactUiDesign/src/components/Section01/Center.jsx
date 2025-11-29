
// import styles from "./Center.module.css';
import styles from "./Center.module.css";
import Cards from './cards';

const Center = () => {
  const podcastData = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
      top: {
        title: "Happier With Robbert?",
        episodes: "204 Episodes",
        playIcon: "fa-solid fa-location-arrow"
      },
      bottom: ["Self Help", "Wellness", "Life"]
    },

    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
      top: {
        title: "Mindset Upgrade Daily",
        episodes: "150 Episodes",
        playIcon: "fa-solid fa-location-arrow"
      },
      bottom: ["Mindset", "Motivation", "Growth"]
    },

    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
      top: {
        title: "The Calm Living Podcast",
        episodes: "89 Episodes",
        playIcon: "fa-solid fa-location-arrow"
      },
      bottom: ["Wellness", "Relaxation", "Mental Health"]
    },

    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
      top: {
        title: "Life Design With Emma",
        episodes: "120 Episodes",
        playIcon: "fa-solid fa-location-arrow"
      },
      bottom: ["Lifestyle", "Creativity", "Self Help"]
    }
  ];


  return (
    <>
      <h1>We Bring The Good <br />Product To Life</h1>
      <p>Podcasta Provides The Right Tools To Introduce <br />Your Podcast To The World </p>
      <button>Start Free Trail</button>
      <div>
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
        <img src="#" alt="" />
        <span>Join Over <b>+5K</b> Creator</span>
      </div>

      <div id={styles.cardContainer}>
        <Cards />
      </div>
    </>
  )
}

export default Center
