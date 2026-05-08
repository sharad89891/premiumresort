import Image from 'next/image';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

const treatments = [
  {
    id: 1,
    category: 'MASSAGE THERAPY',
    name: 'Deep Sea Synchrony',
    duration: '90 MIN',
    price: '$280',
    description: 'A rhythmic, full-body massage that mimics the ebb and flow of the ocean. Using warm sea stones and organic marine oils.',
    image: '/images/spa_ritual.png'
  },
  {
    id: 2,
    category: 'SKIN RITUALS',
    name: 'Luminous Pearl Facial',
    duration: '75 MIN',
    price: '$220',
    description: 'Harnessing the power of crushed pearls and marine collagen to illuminate and hydrate the complexion.',
    image: '/images/wellness_feature.png'
  },
  {
    id: 3,
    category: 'HOLISTIC HEALING',
    name: 'Sound Wave Meditation',
    duration: '60 MIN',
    price: '$180',
    description: 'A sonic journey using Tibetan singing bowls to align energy centers and induce profound stillness.',
    image: '/images/sandbank.png'
  },
  {
    id: 4,
    category: 'BODY RITUALS',
    name: 'Ocean Mineral Scrub',
    duration: '60 MIN',
    price: '$195',
    description: 'Detoxifying sea salts and mineral-rich algae to exfoliate and revitalize the skin.',
    image: '/images/resort_beauty.png'
  },
  {
    id: 5,
    category: 'AYURVEDA',
    name: 'Abhyanga Massage',
    duration: '90 MIN',
    price: '$260',
    description: 'Traditional herbal oil massage designed to balance the Doshas and promote longevity.',
    image: '/images/starlight_cinema.png'
  },
  {
    id: 6,
    category: 'HYDROTHERAPY',
    name: 'Coastal Bathing Ritual',
    duration: '45 MIN',
    price: '$120',
    description: 'A private bath infusion of ocean minerals and local botanicals overlooking the lagoon.',
    image: '/images/moonlight_deck.png'
  }
];

const programs = [
  { 
    title: 'Detox & Recharge', 
    duration: '3 DAYS', 
    focus: 'Cleansing rituals, juice therapy, and lymphatic drainage.' 
  },
  { 
    title: 'Emotional Balance', 
    duration: '5 DAYS', 
    focus: 'Meditation, sound healing, and personalized yoga sessions.' 
  },
  { 
    title: 'Coastal Longevity', 
    duration: '7 DAYS', 
    focus: 'A comprehensive journey of diet, exercise, and cellular repair.' 
  }
];

export default function Wellness() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>A SANCTUARY FOR THE SOUL</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>The Art of <span>Well-Being</span></h1>
          </Reveal>
        </div>
      </section>

      {/* Wellness Philosophy - Side by Side */}
      <section className={styles.philosophy}>
        <div className="container">
          <div className={styles.philGrid}>
            <div className={styles.philContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>ZEN PHILOSOPHY</span>
                <h2>Harmony & <span>Balance</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>At Lumina Azure, wellness is not a destination, but a harmonious journey of the self. We blend ancient Eastern wisdom with modern marine science to create a holistic experience that transcends the physical realm.</p>
              </Reveal>
              <div className={styles.philStats}>
                <div className={styles.pStat}>
                  <strong>Organic</strong>
                  <span>Ingredients</span>
                </div>
                <div className={styles.pStat}>
                  <strong>Holistic</strong>
                  <span>Approaches</span>
                </div>
              </div>
            </div>
            <div className={styles.philImage}>
              <Image src="/images/spa_ritual.png" alt="Spa Philosophy" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid - COMPACT */}
      <section className={styles.treatments}>
        <div className="container">
          <div className={styles.treatmentsHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>SIGNATURE RITUALS</span>
              <h2>Bespoke <span>Treatments</span></h2>
            </Reveal>
          </div>

          <div className={styles.treatmentGrid}>
            {treatments.map((item, index) => (
              <div key={item.id} className={styles.treatmentCard}>
                <div className={styles.tImage}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                  <span className={styles.priceTag}>{item.price}</span>
                </div>
                <div className={styles.tContent}>
                  <span className={styles.tCategory}>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className={styles.tFooter}>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs - NEW */}
      <section className={styles.retreats}>
        <div className="container">
          <div className={styles.retreatsHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>DEEP TRANSFORMATION</span>
              <h2>Wellness <span>Retreats</span></h2>
            </Reveal>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((prog, i) => (
              <div key={i} className={styles.progCard}>
                <span className={styles.progDuration}>{prog.duration}</span>
                <h3>{prog.title}</h3>
                <p>{prog.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Botanicals - NEW */}
      <section className={styles.botanicals}>
        <div className="container">
          <div className={styles.botGrid}>
            <div className={styles.botImage}>
              <Image src="/images/wellness_feature.png" alt="Marine Botanicals" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.botContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>PURE SOURCE</span>
                <h2>Marine <span>Botanicals</span></h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Our rituals are powered by the ocean. We use sustainably sourced seaweeds, ocean minerals, and coastal herbs to deliver nutrients directly to your cells, ensuring a deep and lasting glow.</p>
              </Reveal>
              <ul className={styles.botList}>
                <li>Cold-pressed seaweed extracts</li>
                <li>Himalayan ocean salts</li>
                <li>Artisan-distilled coastal lavender</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.facilities}>
        <div className="container">
          <div className={styles.facilitiesHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>MODERN SANCTUARY</span>
              <h2>The <span>Facility</span></h2>
            </Reveal>
          </div>
          <div className={styles.facilitiesGrid}>
            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>
                <Image src="/images/spa_ritual.png" alt="Hydrotherapy" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.fContent}>
                <h3>Hydrotherapy Circuit</h3>
                <p>A sequence of hot and cold experiences to boost immunity.</p>
              </div>
            </div>
            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>
                <Image src="/images/sandbank.png" alt="Zen Garden" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.fContent}>
                <h3>Zen Garden</h3>
                <p>A silent space for reflection and post-treatment relaxation.</p>
              </div>
            </div>
            <div className={styles.facilityCard}>
              <div className={styles.facilityImage}>
                <Image src="/images/resort_beauty.png" alt="Ocean View Gym" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.fContent}>
                <h3>Ocean-View Gym</h3>
                <p>State-of-the-art equipment with panoramic horizon views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
