import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

const experiences = [
  {
    id: 1,
    name: 'Whale Shark Safari',
    subtitle: 'PRIVATE MARINE EXPEDITION',
    category: 'Marine Adventure',
    description: 'Embark on a private yacht journey to the South Ari Atoll, a world-renowned sanctuary for whale sharks. Led by our resident marine biologist, encounter these gentle giants in their natural habitat.',
    image: '/images/whale_shark.png',
    duration: '6 HOURS',
    price: 'FROM $450'
  },
  {
    id: 2,
    name: 'Sandbank Escape',
    subtitle: 'THE ULTIMATE SECLUSION',
    category: 'Romantic',
    description: 'A deserted sandbank, a gourmet picnic, and absolute silence. Bask in the serenity of your own private island paradise, complete with personalized service and crystal clear snorkeling.',
    image: '/images/sandbank.png',
    duration: '4 HOURS',
    price: 'FROM $850'
  },
  {
    id: 3,
    name: 'Starlight Cinema',
    subtitle: 'MOVIES UNDER THE SKY',
    category: 'Leisure',
    description: 'A massive screen on the beach, plush daybeds, and the sound of the waves. Enjoy a private screening of your favorite film under the Maldivian stars with artisanal snacks.',
    image: '/images/starlight_cinema.png',
    duration: '3 HOURS',
    price: 'FROM $300'
  },
  {
    id: 4,
    name: 'Sunset Traditional Fishing',
    subtitle: 'MALDIVIAN HERITAGE',
    category: 'Culture',
    description: 'Master the ancient art of hand-line fishing on a traditional Dhoni. Watch the horizon turn gold as you wait for the catch of the day, which our chefs can prepare for your dinner.',
    image: '/images/moonlight_deck.png',
    duration: '2 HOURS',
    price: 'FROM $150'
  },
  {
    id: 5,
    name: 'Coral Regeneration',
    subtitle: 'GIVING BACK TO THE OCEAN',
    category: 'Sustainability',
    description: 'Join our biologist in preserving the reef. Transplant your own coral frame and receive bi-annual updates on its growth, contributing to the island\'s delicate ecosystem.',
    image: '/images/resort_beauty.png',
    duration: '1 HOUR',
    price: 'FROM $250'
  },
  {
    id: 6,
    name: 'Glass-Bottom Kayaking',
    subtitle: 'A WINDOW TO THE REEF',
    category: 'Adventure',
    description: 'Glide over the vibrant house reef without getting wet. Our clear-bottom kayaks offer a perfect view of the turtles and stingrays that frequent the Lumina Azure lagoon.',
    image: '/images/spa.png',
    duration: '2 HOURS',
    price: 'FROM $80'
  }
];

const categories = [
  { name: 'Marine Life', icon: '🌊', count: '12+ Activities' },
  { name: 'Island Culture', icon: '🛖', count: '5 Experiences' },
  { name: 'Wellness', icon: '🧘', count: '8 Rituals' },
  { name: 'Adventure', icon: '🚤', count: '10+ Trips' }
];

const weeklyActivities = [
  { day: 'MON', event: 'Night Snorkel Safari', time: '19:30' },
  { day: 'TUE', event: 'Traditional Cooking Class', time: '11:00' },
  { day: 'WED', event: 'Yoga at Sunset', time: '17:45' },
  { day: 'THU', event: 'Deep Sea Fishing', time: '06:00' },
  { day: 'FRI', event: 'Island Hopping Tour', time: '09:00' },
  { day: 'SAT', event: 'Starlight Cinema Night', time: '20:30' },
  { day: 'SUN', event: 'Coral Planting Workshop', time: '10:30' }
];

export default function Experiences() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>UNFORGETTABLE MOMENTS</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Curated <span>Experiences</span></h1>
          </Reveal>
        </div>
      </section>

      {/* Marine Discovery Centre - NEW */}
      <section className={styles.marineDiscovery}>
        <div className="container">
          <div className={styles.marineGrid}>
            <div className={styles.marineContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>EXPLORE THE DEEP</span>
                <h2>Marine <span>Discovery</span> Centre</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Located at the heart of the resort, our Discovery Centre is a hub of marine education and conservation. Led by expert biologists, it offers guests a chance to learn about the 2,000+ species of fish and coral that inhabit the Lumina Azure reef.</p>
              </Reveal>
              <div className={styles.marineStats}>
                <div className={styles.mStat}>
                  <strong>200+</strong>
                  <span>Sea Turtle Rescues</span>
                </div>
                <div className={styles.mStat}>
                  <strong>10</strong>
                  <span>Resident Biologists</span>
                </div>
                <div className={styles.mStat}>
                  <strong>Daily</strong>
                  <span>Reef Presentations</span>
                </div>
              </div>
            </div>
            <div className={styles.marineImage}>
              <Image src="/images/whale_shark.png" alt="Marine Centre" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.catGrid}>
            {categories.map((cat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.catCard}>
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.count}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <div className={styles.expGrid}>
            {experiences.map((exp, index) => (
              <div key={exp.id} className={styles.expCard}>
                <div className={styles.expImage}>
                  <Image src={exp.image} alt={exp.name} fill style={{ objectFit: 'cover' }} priority={index < 3} />
                  <span className={styles.categoryBadge}>{exp.category}</span>
                </div>
                <div className={styles.expContent}>
                  <Reveal delay={0.2}>
                    <span className={styles.expSubtitle}>{exp.subtitle}</span>
                    <h3>{exp.name}</h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p>{exp.description}</p>
                  </Reveal>
                  <div className={styles.expFooter}>
                    <span className={styles.expPrice}>{exp.price}</span>
                    <span className={styles.expDuration}>{exp.duration}</span>
                  </div>
                  <Reveal delay={0.6}>
                    <Link href="/contact" className={styles.inquireLink}>
                      Inquire Details <span>→</span>
                    </Link>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section - NEW */}
      <section className={styles.equipment}>
        <div className="container">
          <div className={styles.equipFlex}>
            <div className={styles.equipInfo}>
              <Reveal>
                <span className={styles.sectionSubtitle}>ELITE GEAR</span>
                <h2>The <span>Tools</span> of Adventure</h2>
                <p>We provide only the finest equipment to ensure your safety and enjoyment. From high-definition underwater cameras to carbon-fiber paddleboards, our gear is as premium as the experience itself.</p>
              </Reveal>
            </div>
            <div className={styles.equipGrid}>
              <div className={styles.equipItem}>
                <h4>Scubapro Gear</h4>
                <p>Professional-grade diving equipment maintained to the highest standards.</p>
              </div>
              <div className={styles.equipItem}>
                <h4>Seabob F5 SR</h4>
                <p>The ultimate high-performance watercraft for effortless underwater movement.</p>
              </div>
              <div className={styles.equipItem}>
                <h4>GoPro Hero 12</h4>
                <p>Available for all excursions to capture your memories in 5.3K resolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Calendar */}
      <section className={styles.calendar}>
        <div className="container">
          <div className={styles.calendarHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>WEEKLY DISCOVERIES</span>
              <h2>Daily <span>Adventure</span> Guide</h2>
            </Reveal>
          </div>
          <div className={styles.calendarFlex}>
            {weeklyActivities.map((act, i) => (
              <div key={i} className={styles.calDay}>
                <span className={styles.dayName}>{act.day}</span>
                <div className={styles.dayEvent}>
                  <strong>{act.event}</strong>
                  <span>{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bespoke}>
        <div className="container">
          <Reveal>
            <div className={styles.bespokeHeader}>
              <span className={styles.sectionSubtitle}>BESPOKE SERVICE</span>
              <h2>Infinite <span>Possibilities</span></h2>
              <p>Your imagination is our only limit. Our concierge team is dedicated to crafting unique itineraries tailored to your deepest desires.</p>
              <Link href="/contact" className={styles.primaryBtn}>Design Your Journey</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
