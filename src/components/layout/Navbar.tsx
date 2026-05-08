'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Logo from '../common/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showSolid = isMobile || !isHome || scrolled || isOpen;
  const isLightLogo = isHome && !scrolled && !isOpen && !isMobile;

  const navItems = [
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Dining', path: '/dining' },
    { name: 'Wellness', path: '/wellness' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`${styles.navbar} ${showSolid ? styles.solid : ''} ${isOpen ? styles.menuOpen : ''} ${clickEffect ? styles.clicked : ''}`}
      style={{ 
        backgroundColor: (isMobile || showSolid) ? '#ffffff' : 'transparent',
        borderBottom: isMobile ? '1px solid rgba(15, 30, 64, 0.1)' : 'none'
      }}
    >
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <Logo light={isLightLogo} />
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
          onClick={() => {
            console.log("MOBILE MENU TOGGLE:", !isOpen);
            setIsOpen(!isOpen);
            setClickEffect(true);
            setTimeout(() => setClickEffect(false), 300);
          }}
          aria-label="Toggle menu"
          style={{ 
            display: isMobile ? 'flex' : 'none',
            padding: '10px',
            background: 'rgba(15, 30, 64, 0.05)',
            borderRadius: '5px'
          }}
        >
          <span style={{ backgroundColor: '#0f1e40', height: '2px', width: '25px', marginBottom: '5px' }}></span>
          <span style={{ backgroundColor: '#0f1e40', height: '2px', width: '25px', marginBottom: '5px' }}></span>
          <span style={{ backgroundColor: '#0f1e40', height: '2px', width: '25px' }}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
