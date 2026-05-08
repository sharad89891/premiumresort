'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

const galleryItems = [
  { id: 1, category: 'LIFESTYLE', image: '/images/gallery/floating_breakfast.png', title: 'Floating Breakfast' },
  { id: 2, category: 'NATURE', image: '/images/gallery/underwater.png', title: 'Marine Life' },
  { id: 3, category: 'ARCHITECTURE', image: '/images/gallery/night_resort.png', title: 'Resort at Night' },
  { id: 4, category: 'LIFESTYLE', image: '/images/gallery/seaplane.png', title: 'Island Arrival' },
  { id: 5, category: 'ARCHITECTURE', image: '/images/gallery/hammock.png', title: 'Ocean Hammock' },
  { id: 6, category: 'LIFESTYLE', image: '/images/gallery/bonfire.png', title: 'Beach Bonfire' },
  { id: 7, category: 'ARCHITECTURE', image: '/images/gallery/library.png', title: 'The Library' },
  { id: 8, category: 'LIFESTYLE', image: '/images/gallery/infinity_pool.png', title: 'Infinity Sunset' },
  { id: 9, category: 'NATURE', image: '/images/resort_beauty.png', title: 'Aerial View' }
];

const categories = ['ALL', 'ARCHITECTURE', 'LIFESTYLE', 'NATURE'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredItems = activeFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>VISUAL JOURNEY</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Island <span>Masterpieces</span></h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={activeFilter === cat ? styles.activeFilter : styles.filterBtn}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredItems.map((item, index) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <span className={styles.itemCat}>{item.category}</span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.instagram}>
        <div className="container">
          <Reveal>
            <div className={styles.instaContent}>
              <span className={styles.sectionSubtitle}>#LUMINAAZURE</span>
              <h2>Share Your <span>Moments</span></h2>
              <p>Tag us in your stories for a chance to be featured in our permanent collection.</p>
              <button className={styles.primaryBtn}>Follow Our Journey</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
