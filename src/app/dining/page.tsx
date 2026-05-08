import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

const venues = [
  {
    id: 1,
    name: 'Azure Terrace',
    subtitle: 'MODERN MEDITERRANEAN',
    description: 'An open-air culinary theater overlooking the lagoon. Azure Terrace celebrates the vibrant flavors of the Mediterranean with a tropical twist. Freshly caught seafood is prepared in our signature wood-fired oven.',
    image: '/images/dining_terrace.png',
    signature: 'Grilled Octopus with Saffron Risotto',
    hours: '19:00 - 22:30'
  },
  {
    id: 2,
    name: 'The Reef Grill',
    subtitle: 'PRIME CUTS & OCEAN BOUNTY',
    description: 'Our beachfront grill offers a rustic yet refined dining experience. Savor dry-aged Wagyu beef and giant Maldivian lobsters grilled to perfection over coconut charcoal.',
    image: '/images/reef_grill.png',
    signature: 'Tomahawk Steak with Truffle Bone Marrow',
    hours: '18:30 - 23:00'
  },
  {
    id: 3,
    name: 'Moonlight Deck',
    subtitle: 'COCKTAILS & STARGAZING',
    description: 'The islands premier cocktail lounge. Suspended over the water, it is the perfect spot for pre-dinner aperitifs or late-night stargazing with bespoke infusions.',
    image: '/images/moonlight_deck.png',
    signature: 'Indigo Infusion Gin & Botanical Tonic',
    hours: '17:00 - 01:00'
  }
];

export default function Dining() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>A GASTRONOMIC JOURNEY</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Culinary <span>Masterpieces</span></h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <div className={styles.venueGrid}>
            {venues.map((venue, index) => (
              <div key={venue.id} className={styles.venueCard}>
                <div className={styles.venueImage}>
                  <Image src={venue.image} alt={venue.name} fill style={{ objectFit: 'cover' }} priority={index === 0} />
                </div>
                <div className={styles.venueContent}>
                  <Reveal delay={0.2}>
                    <span className={styles.venueSubtitle}>{venue.subtitle}</span>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <h3>{venue.name}</h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p className={styles.description}>{venue.description}</p>
                  </Reveal>
                  <Reveal delay={0.5}>
                    <div className={styles.signatureBox}>
                      <label>SIGNATURE DISH</label>
                      <p>{venue.signature}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.6}>
                    <div className={styles.meta}>
                      <span className={styles.hours}>DAILY: {venue.hours}</span>
                      <Link href="/reservations" className={styles.reserveBtn}>
                        RESERVE
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>CRAFT & PASSION</span>
                <h2>Our Culinary <span>Philosophy</span></h2>
              </Reveal>
              <div className={styles.philosophyItems}>
                <div className={styles.philosophyItem}>
                  <div className={styles.philIcon}>01</div>
                  <h3>Ocean to Table</h3>
                  <p>90% of our seafood is sourced within 50 miles of the resort, supporting local artisanal fishermen.</p>
                </div>
                <div className={styles.philosophyItem}>
                  <div className={styles.philIcon}>02</div>
                  <h3>Organic Gardens</h3>
                  <p>Our onsite hydroponic garden provides fresh herbs, microgreens, and seasonal vegetables daily.</p>
                </div>
                <div className={styles.philosophyItem}>
                  <div className={styles.philIcon}>03</div>
                  <h3>Zero-Waste Goal</h3>
                  <p>We implement advanced composting and waste-reduction techniques across all our kitchens.</p>
                </div>
              </div>
            </div>
            <div className={styles.philosophyImage}>
              <Image src="/images/chef_philosophy.png" alt="Chef Philosophy" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calendar}>
        <div className="container">
          <div className={styles.calendarFlex}>
            <div className={styles.calendarImage}>
              <Image src="/images/culinary_events.png" alt="Culinary Events" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.calendarContent}>
              <Reveal>
                <div className={styles.calendarHeader}>
                  <span className={styles.sectionSubtitle}>WEEKLY HIGHLIGHTS</span>
                  <h2>Culinary <span>Events</span></h2>
                </div>
              </Reveal>
              <div className={styles.calendarGrid}>
                <div className={styles.eventCard}>
                  <span className={styles.eventDay}>MONDAY</span>
                  <h4>Maldivian Heritage Night</h4>
                  <p>Authentic island flavors with traditional Bodu Beru performances under the palms.</p>
                </div>
                <div className={styles.eventCard}>
                  <span className={styles.eventDay}>WEDNESDAY</span>
                  <h4>Seafood Extravaganza</h4>
                  <p>The freshest catch of the day, prepared to your liking at our beachfront grill.</p>
                </div>
                <div className={styles.eventCard}>
                  <span className={styles.eventDay}>FRIDAY</span>
                  <h4>Asian Fusion Journey</h4>
                  <p>A curated tasting menu exploring the vibrant spices and textures of Southeast Asia.</p>
                </div>
                <div className={styles.eventCard}>
                  <span className={styles.eventDay}>SUNDAY</span>
                  <h4>Azure Sunset Roast</h4>
                  <p>Premium cuts and classic sides served with panoramic views of the Indian Ocean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.wineCellar}>
        <div className="container">
          <div className={styles.wineGrid}>
            <div className={styles.wineImage}>
              <Image src="/images/wine_cellar.png" alt="Wine Cellar" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.wineContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>THE COLLECTION</span>
                <h2>The Azure <span>Cellar</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Home to over 400 labels from the worlds most prestigious vineyards. Our Head Sommelier hosts daily tasting sessions exploring rare vintages and unique terroirs.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className={styles.wineStats}>
                  <div className={styles.wStat}>
                    <strong>400+</strong>
                    <span>Vintages</span>
                  </div>
                  <div className={styles.wStat}>
                    <strong>12</strong>
                    <span>Countries</span>
                  </div>
                  <div className={styles.wStat}>
                    <strong>Rare</strong>
                    <span>Collections</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.destination}>
        <div className="container">
          <div className={styles.destContent}>
            <Reveal>
              <span className={styles.sectionSubtitle}>PRIVATE DINING</span>
              <h2>Beyond the <span>Restaurant</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p>Experience the ultimate in romance with our destination dining experiences. From a private sandbank breakfast to a starlit dinner on your villa deck, we create moments that last a lifetime.</p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link href="/contact" className={styles.primaryBtn}>Enquire Now</Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
