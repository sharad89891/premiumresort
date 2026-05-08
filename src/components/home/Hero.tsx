import styles from './Hero.module.css';
import { Reveal } from '@/components/common/Reveal';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.videoBackground}
      >
        <source src="/homepagevideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <Reveal delay={0.2}>
          <h1 className={styles.title}>The Art of <span>Refined Living</span></h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className={styles.description}>
            Experience a symphony of natural beauty and unparalleled elegance at Lumina Azure, where every moment is curated for the extraordinary.
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Reserve Your Journey</button>
            <button className={styles.secondaryBtn}>Explore the Film</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
