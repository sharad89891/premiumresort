'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Logo from '../common/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Dining', path: '/dining' },
    { name: 'Wellness', path: '/wellness' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <Logo light={false} />
        </Link>
        
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className={pathname === item.path ? styles.activeLink : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className={styles.mobileOnly}>
            <Link href="/booking" className={styles.bookBtn} onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </li>
        </ul>

        <Link href="/booking" className={`${styles.bookBtn} ${styles.desktopOnly}`}>
          Book Now
        </Link>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
