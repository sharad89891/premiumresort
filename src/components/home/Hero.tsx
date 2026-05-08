import Link from 'next/link';
import { Reveal } from '@/components/common/Reveal';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.videoBackground}
        poster="/images/gallery/night_resort.png"
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
            <Link href="/contact" className={styles.primaryBtn}>
              Reserve Your Journey
            </Link>
            <Link href="/gallery" className={styles.secondaryBtn}>
              Explore the Film
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
