'use client';

import styles from './page.module.css';
import { Reveal } from '@/components/common/Reveal';

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <span className={styles.topSubtitle}>PERSONALIZED ASSISTANCE</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1>Let Us <span>Host You</span></h1>
          </Reveal>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.formSide}>
              <Reveal>
                <span className={styles.sectionSubtitle}>DIRECT INQUIRY</span>
                <h2>Start a <span>Conversation</span></h2>
                <p>Our dedicated island hosts are available 24/7 to assist with your journey planning.</p>
              </Reveal>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputRow}>
                  <div className={styles.field}>
                    <label>FULL NAME</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className={styles.field}>
                    <label>EMAIL ADDRESS</label>
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>INQUIRY TYPE</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select Department</option>
                    <option value="reservations">Reservations & Stays</option>
                    <option value="events">Weddings & Private Events</option>
                    <option value="concierge">Island Concierge Services</option>
                    <option value="careers">Careers & Press</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>YOUR MESSAGE</label>
                  <textarea placeholder="How may we assist you?" rows={5} required></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>SEND INQUIRY <span>→</span></button>
              </form>
            </div>

            <div className={styles.infoSide}>
              <div className={styles.infoCards}>
                <Reveal delay={0.2}>
                  <div className={styles.infoCard}>
                    <span className={styles.cardLabel}>RESERVATIONS</span>
                    <h3>stay@luminaazure.com</h3>
                    <p>+960 123 4567</p>
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className={styles.infoCard}>
                    <span className={styles.cardLabel}>EVENTS & GROUPS</span>
                    <h3>events@luminaazure.com</h3>
                    <p>+960 123 8888</p>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className={styles.infoCard}>
                    <span className={styles.cardLabel}>LOCATION</span>
                    <p>South Ari Atoll, Republic of Maldives</p>
                    <span className={styles.coords}>3.4842° N, 72.9348° E</span>
                  </div>
                </Reveal>
              </div>
              
              <div className={styles.transferInfo}>
                <Reveal delay={0.5}>
                  <h4>Seaplane Transfers</h4>
                  <p>Lumina Azure is a scenic 25-minute seaplane flight from Velana International Airport. Our airport concierge team will be waiting to assist you upon arrival at the VIP lounge.</p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <Reveal>
              <span className={styles.sectionSubtitle}>GUEST ASSISTANCE</span>
              <h2>Essential <span>Information</span></h2>
            </Reveal>
          </div>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Arrival Experience</h4>
              <p>Complimentary VIP lounge access and airport assistance for all guests.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Dress Code</h4>
              <p>Island Chic. We encourage barefoot luxury throughout our resort venues.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Check-in / Out</h4>
              <p>Check-in: 14:00 | Check-out: 12:00. Late check-out available on request.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
