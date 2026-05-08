import Link from 'next/link';
import styles from './Footer.module.css';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo light={true} className={styles.footerLogo} />
            <p className={styles.tagline}>Redefining luxury in the heart of paradise.</p>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h3>Explore</h3>
              <ul>
                <li><Link href="/accommodations">Accommodations</Link></li>
                <li><Link href="/dining">Dining</Link></li>
                <li><Link href="/wellness">Wellness</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Resort</h3>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Newsletter</h3>
              <p>Subscribe to receive exclusive offers and news.</p>
              <form className={styles.subscribe}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Lumina Azure Resort. All rights reserved.</p>
          <div className={styles.social}>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
