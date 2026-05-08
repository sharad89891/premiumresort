import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

const accommodations = [
  {
    id: 1,
    name: 'Azure Overwater Villa',
    subtitle: 'THE ULTIMATE LAGOON EXPERIENCE',
    description: 'Suspended over the crystalline turquoise lagoon, our overwater villas offer an unparalleled connection to the ocean. These architectural masterpieces blend seamless indoor-outdoor living with floor-to-ceiling glass walls that disappear to merge your sanctuary with the horizon.',
    image: '/images/villa.png',
    size: '150 sqm / 1,614 sqft',
    view: 'Uninterrupted Ocean View',
    occupancy: '2 Adults & 1 Child',
    price: 'FROM $1,200',
    amenities: ['Private Infinity Pool', '24/7 Island Host Service', 'Outdoor Rain Shower', 'Glass Floor Panel'],
    features: [
      'Direct lagoon access from sun deck',
      'Custom-made net hammocks over the water',
      'Signature Lumina bedding and pillow menu',
      'Advanced smart-home climate control'
    ]
  },
  {
    id: 2,
    name: 'Beachfront Royal Penthouse',
    subtitle: 'UNRIVALED PANORAMIC VIEWS',
    description: 'Perched on the highest point of the island, the Royal Penthouse offers 360-degree views of the horizon. This multi-level residence features sprawling living spaces, a private rooftop observatory, and dedicated living quarters for staff, ensuring absolute privacy.',
    image: '/images/penthouse.png',
    size: '450 sqm / 4,843 sqft',
    view: '360° Island & Ocean Panorama',
    occupancy: '4 Adults',
    price: 'FROM $3,500',
    amenities: ['Rooftop Sky Terrace', 'Private In-Villa Cinema', 'Personal Chef & Butler', 'Wine Cellar'],
    features: [
      'Private rooftop infinity pool',
      'Master bedroom with retractable glass roof',
      'Professional-grade kitchen with private chef',
      'En-suite spa treatment room'
    ]
  },
  {
    id: 3,
    name: 'Lumina Grand Suite',
    subtitle: 'CONTEMPORARY ISLAND ELEGANCE',
    description: 'A masterpiece of sustainable architecture, the Grand Suite blends indoor luxury with a massive outdoor living area. Tucked away in a private cove, this suite is designed for those seeking deep connection with nature without compromising on modern sophistication.',
    image: '/images/suite.png',
    size: '180 sqm / 1,937 sqft',
    view: 'Tropical Garden & Beach Cove',
    occupancy: '2 Adults',
    price: 'FROM $950',
    amenities: ['Tropical Garden View', 'Private Plunge Pool', 'Oversized Daybeds', 'Bespoke Bathing Rituals'],
    features: [
      'Organic architectural design elements',
      'Private pathway to secluded beach',
      'Open-air garden bathroom with soaking tub',
      'Locally sourced artisan furniture pieces'
    ]
  }
];

export default function Accommodations() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>COLLECTION OF SANCTUARIES</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Exquisite <span>Accommodations</span></h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          {accommodations.map((room, index) => (
            <div key={room.id} className={styles.roomRow}>
              {/* Left Column: Core Info */}
              <div className={styles.infoCol}>
                <Reveal>
                  <span className={styles.roomSubtitle}>{room.subtitle}</span>
                  <h2 className={styles.roomName}>{room.name}</h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className={styles.roomDescription}>{room.description}</p>
                </Reveal>
                <div className={styles.roomStats}>
                  <div className={styles.statItem}>
                    <label>View</label>
                    <p>{room.view}</p>
                  </div>
                  <div className={styles.statItem}>
                    <label>Floor Area</label>
                    <p>{room.size}</p>
                  </div>
                </div>
              </div>

              {/* Middle Column: Smaller Elegant Photo */}
              <div className={styles.imageCol}>
                <div className={styles.smallImageWrapper}>
                  <Image src={room.image} alt={room.name} fill style={{ objectFit: 'cover' }} priority={index === 0} />
                </div>
              </div>

              {/* Right Column: Amenities & Actions */}
              <div className={styles.featureCol}>
                <div className={styles.featureBlock}>
                  <label className={styles.colLabel}>Signature Features</label>
                  <ul className={styles.featureList}>
                    {room.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div className={styles.actionBlock}>
                  <span className={styles.priceTag}>{room.price} <span>/ NIGHT</span></span>
                  <Link href={`/booking?room=${room.id}`} className={styles.exploreLink}>
                    Reserve This Sanctuary
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.hostService}>
        <div className="container">
          <div className={styles.hostGrid}>
            <div className={styles.hostContent}>
              <Reveal>
                <span className={styles.sectionSubtitle}>PERSONALIZED ATTENTION</span>
                <h2>The <span>Island Host</span> Service</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Every sanctuary at Lumina Azure comes with the dedicated service of a private Island Host. Available 24/7, they are your single point of contact for anything you might need—from unpacking your luggage to arranging a surprise starlit dinner.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <ul className={styles.hostFeatures}>
                  <li>Bespoke itinerary planning</li>
                  <li>In-villa dining coordination</li>
                  <li>Packing & unpacking services</li>
                  <li>Personalized pillow and scent menus</li>
                </ul>
              </Reveal>
            </div>
            <div className={styles.hostImage}>
              <Image src="/images/island_host.png" alt="Island Host Service" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comforts}>
        <div className="container">
          <div className={styles.comfortsHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>LUMINA SIGNATURES</span>
              <h2>Unrivaled <span>Comforts</span></h2>
            </Reveal>
          </div>
          <div className={styles.comfortsGridContainer}>
            <div className={styles.comfortsImage}>
              <Image src="/images/room_comforts.png" alt="Signature Comforts" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.comfortsGrid}>
              <div className={styles.comfortItem}>
                <h3>Smart Sanctuary</h3>
                <p>Intuitive iPad-controlled systems for lighting, climate, and entertainment, allowing you to set the mood effortlessly.</p>
              </div>
              <div className={styles.comfortItem}>
                <h3>Artisan Bathing</h3>
                <p>Bespoke bath amenities created exclusively for Lumina Azure, featuring local botanicals and ocean minerals.</p>
              </div>
              <div className={styles.comfortItem}>
                <h3>Restorative Sleep</h3>
                <p>Hypoallergenic 1000-thread-count Egyptian cotton linens and a curated menu of nine different pillow types.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.inclusions}>
        <div className="container">
          <Reveal>
            <div className={styles.inclusionsHeader}>
              <h2>Standard <span>Inclusions</span></h2>
              <p>Every stay at Lumina Azure is complemented by our signature services designed to make your experience effortless.</p>
            </div>
          </Reveal>
          <div className={styles.inclusionsGrid}>
            <div className={styles.inclusion}>
              <h3>Curated Breakfast</h3>
              <p>Daily international buffet and a la carte selection at Azure Terrace.</p>
            </div>
            <div className={styles.inclusion}>
              <h3>Water Sports</h3>
              <p>Complimentary use of non-motorized water sports equipment.</p>
            </div>
            <div className={styles.inclusion}>
              <h3>Wellness Access</h3>
              <p>Unlimited access to the fitness center, steam room, and hydrotherapy pool.</p>
            </div>
            <div className={styles.inclusion}>
              <h3>Island Bicycles</h3>
              <p>Personalized bicycles for every guest to explore the island pathways.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
