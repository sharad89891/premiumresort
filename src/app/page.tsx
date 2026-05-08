'use client';
import Hero from "@/components/home/Hero";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/common/Reveal";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />

      {/* The Rhythm of the Island - NEW & CREATIVE */}
      <section className={styles.rhythm}>
        <div className="container">
          <div className={styles.rhythmHeader}>
            <Reveal>
              <span className={styles.subtitle}>A DAY IN PARADISE</span>
              <h2>The Island <span>Rhythm</span></h2>
            </Reveal>
          </div>
          <div className={styles.rhythmGrid}>
            <div className={styles.rhythmItem}>
              <div className={styles.rTime}>06:30</div>
              <div className={styles.rContent}>
                <h4>Sunrise Meditation</h4>
                <p>Salute the sun on our overwater deck as the island wakes.</p>
              </div>
            </div>
            <div className={styles.rhythmItem}>
              <div className={styles.rTime}>13:00</div>
              <div className={styles.rContent}>
                <h4>Ocean Discovery</h4>
                <p>Guided snorkeling through our house reef with our marine biologist.</p>
              </div>
            </div>
            <div className={styles.rhythmItem}>
              <div className={styles.rTime}>18:30</div>
              <div className={styles.rContent}>
                <h4>Sunset Libations</h4>
                <p>Artisan cocktails and live jazz at the Moonlight Deck.</p>
              </div>
            </div>
            <div className={styles.rhythmItem}>
              <div className={styles.rTime}>21:00</div>
              <div className={styles.rContent}>
                <h4>Celestial Dining</h4>
                <p>Private beach dinner under the Milky Way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Island Curators - ASYMMETRICAL */}
      <section className={styles.curators}>
        <div className="container">
          <div className={styles.curatorGrid}>
            <div className={styles.curatorImage}>
              <div className={styles.mainImg}>
                <Image src="/images/island_host.png" alt="Your Butler" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.subImg}>
                <Image src="/images/chef_philosophy.png" alt="Private Chef" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.curatorText}>
              <Reveal>
                <span className={styles.subtitle}>PERSONALIZED LUXURY</span>
                <h2>Our <span>Curators</span></h2>
                <p>From our dedicated Island Hosts to our master chefs, our team is here to curate every second of your journey. No request is too large, no detail too small.</p>
                <ul className={styles.curatorList}>
                  <li>24/7 Dedicated Island Butler Service</li>
                  <li>In-Villa Personalized Fine Dining</li>
                  <li>Bespoke Itinerary Planning</li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Master Collection - COMPACT GRID */}
      <section className={styles.masterCollection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Reveal>
              <span className={styles.subtitle}>ULTIMATE SANCTUARIES</span>
              <h2>The Master <span>Collection</span></h2>
            </Reveal>
          </div>
          <div className={styles.masterGrid}>
            <Link href="/accommodations" className={styles.masterCard}>
              <div className={styles.mImg}>
                <Image src="/images/penthouse.png" alt="The Azure Penthouse" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.mInfo}>
                <h3>Azure Penthouse</h3>
                <span>Three Bedroom Luxury</span>
              </div>
            </Link>
            <Link href="/accommodations" className={styles.masterCard}>
              <div className={styles.mImg}>
                <Image src="/images/villa.png" alt="Overwater Villa" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.mInfo}>
                <h3>Ocean Residences</h3>
                <span>Private Pool & Deck</span>
              </div>
            </Link>
            <Link href="/accommodations" className={styles.masterCard}>
              <div className={styles.mImg}>
                <Image src="/images/suite.png" alt="Beachfront Suite" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.mInfo}>
                <h3>Beachfront Suites</h3>
                <span>Garden & Sea Views</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Section - COMPACT */}
      <section className={styles.sustainability}>
        <div className="container">
          <div className={styles.sustGrid}>
            <div className={styles.sustContent}>
              <Reveal>
                <span className={styles.subtitle}>AN ECO-SANCTUARY</span>
                <h2>The Beauty of <span>Belonging</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Lumina Azure is a masterpiece of sustainable architecture, designed to breathe with the ocean and honor our island home.</p>
              </Reveal>
              <div className={styles.sustStats}>
                <div className={styles.sustStat}>
                  <strong>100%</strong>
                  <span>Solar Powered</span>
                </div>
                <div className={styles.sustStat}>
                  <strong>Zero</strong>
                  <span>Plastic Waste</span>
                </div>
              </div>
            </div>
            <div className={styles.sustImage}>
              <Image src="/images/resort_beauty.png" alt="Resort Beauty" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Preview - NEW COMPACT */}
      <section className={styles.experiencePreview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Reveal>
              <span className={styles.subtitle}>ISLAND ADVENTURES</span>
              <h2>Curated <span>Experiences</span></h2>
            </Reveal>
          </div>
          <div className={styles.expGrid}>
            <div className={styles.expCard}>
              <div className={styles.expImg}>
                <Image src="/images/sandbank.png" alt="Sandbank" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Private Sandbank</h4>
            </div>
            <div className={styles.expCard}>
              <div className={styles.expImg}>
                <Image src="/images/whale_shark.png" alt="Whale Shark" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Whale Shark Safari</h4>
            </div>
            <div className={styles.expCard}>
              <div className={styles.expImg}>
                <Image src="/images/starlight_cinema.png" alt="Cinema" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Starlight Cinema</h4>
            </div>
            <div className={styles.expCard}>
              <div className={styles.expImg}>
                <Image src="/images/dining.png" alt="Dining" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Destination Dining</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Feature - COMPACT */}
      <section className={styles.wellnessFeature}>
        <div className="container">
          <div className={styles.wellnessGrid}>
            <div className={styles.wellImage}>
              <Image src="/images/wellness_feature.png" alt="Wellness Sanctuary" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.wellContent}>
              <Reveal>
                <span className={styles.subtitle}>INNER PEACE</span>
                <h2>The <span>Wellness</span> Sanctuary</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Surrender to the healing powers of the ocean. Bespoke rituals using pure island botanicals and ancient coastal traditions.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <Link href="/wellness" className={styles.luxuryLink}>Enter the Sanctuary</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - REFINED */}
      <section className={styles.awards}>
        <div className="container">
          <div className={styles.awardsFlex}>
            <div className={styles.award}>
              <span>2024</span>
              <p>Condé Nast Traveler Gold List</p>
            </div>
            <div className={styles.award}>
              <span>2023</span>
              <p>World Travel Awards: Best Island Resort</p>
            </div>
            <div className={styles.award}>
              <span>2023</span>
              <p>Forbes Travel Guide: Five-Star Rating</p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
