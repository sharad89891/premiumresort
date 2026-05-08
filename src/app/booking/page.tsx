'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

export default function Booking() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>RESERVE YOUR PARADISE</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Book Your <span>Stay</span></h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.bookingContainer}>
        <div className="container">
          <div className={styles.bookingGrid}>
            {/* Booking Form Side */}
            <div className={styles.formSide}>
              <Reveal>
                <div className={styles.formHeader}>
                  <span className={styles.sectionSubtitle}>AVAILABILITY</span>
                  <h2>Select Your <span>Dates</span></h2>
                </div>
              </Reveal>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputRow}>
                  <div className={styles.field}>
                    <label>CHECK-IN</label>
                    <input type="date" required />
                  </div>
                  <div className={styles.field}>
                    <label>CHECK-OUT</label>
                    <input type="date" required />
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.field}>
                    <label>GUESTS</label>
                    <select required>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>ACCOMMODATION TYPE</label>
                    <select required>
                      <option value="villa">Overwater Villa</option>
                      <option value="suite">Beachfront Suite</option>
                      <option value="penthouse">The Azure Penthouse</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label>SPECIAL REQUIREMENTS</label>
                  <textarea placeholder="e.g. Anniversary, dietary requirements, seaplane arrival time..." rows={4}></textarea>
                </div>

                <button type="submit" className={styles.bookSubmit}>CHECK AVAILABILITY <span>→</span></button>
              </form>
            </div>

            {/* Benefits Side */}
            <div className={styles.benefitsSide}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitImage}>
                  <Image src="/images/luxury_bed_detail.png" alt="Direct Booking Perks" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.benefitContent}>
                  <h3>Direct Booking Perks</h3>
                  <ul className={styles.perksList}>
                    <li>Best Rate Guarantee</li>
                    <li>Complimentary Seaplane Lounge Access</li>
                    <li>Early Check-in / Late Check-out</li>
                    <li>15% Spa Discount on your first ritual</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories Preview - NEW */}
      <section className={styles.roomPreview}>
        <div className="container">
          <div className={styles.previewHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>CURATED STAYS</span>
              <h2>Our <span>Sanctuaries</span></h2>
            </Reveal>
          </div>
          <div className={styles.roomGrid}>
            <div className={styles.roomCard}>
              <div className={styles.roomImg}>
                <Image src="/images/villa.png" alt="Overwater Villa" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Overwater Villa</h4>
              <p>Starting from $1,200 / Night</p>
            </div>
            <div className={styles.roomCard}>
              <div className={styles.roomImg}>
                <Image src="/images/suite.png" alt="Beachfront Suite" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Beachfront Suite</h4>
              <p>Starting from $1,500 / Night</p>
            </div>
            <div className={styles.roomCard}>
              <div className={styles.roomImg}>
                <Image src="/images/penthouse.png" alt="Azure Penthouse" fill style={{ objectFit: 'cover' }} />
              </div>
              <h4>Azure Penthouse</h4>
              <p>Starting from $3,500 / Night</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Policies */}
      <section className={styles.policies}>
        <div className="container">
          <div className={styles.policyGrid}>
            <div className={styles.policyItem}>
              <span className={styles.policyIcon}>✓</span>
              <h4>Secure Payment</h4>
              <p>Your details are protected by 256-bit encryption.</p>
            </div>
            <div className={styles.policyItem}>
              <span className={styles.policyIcon}>✓</span>
              <h4>Flexible Cancellation</h4>
              <p>Free cancellation up to 14 days before arrival.</p>
            </div>
            <div className={styles.policyItem}>
              <span className={styles.policyIcon}>✓</span>
              <h4>No Hidden Fees</h4>
              <p>All taxes and service charges included in the final price.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
