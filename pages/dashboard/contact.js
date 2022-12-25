import {button, content, header} from '../../styles/font';

import Button from '../components/Button';
import buttonStyles from '../../styles/Button.module.scss';
import contentList from '../assets/contents.json';
import handler from '../api/form';
import styles from '../../styles/Contact.module.scss';
import {useRef} from 'react';

const Contact = () => {
  const form = useRef ();

  const sendEmail = e => {
    e.preventDefault ();
    handler (form.current);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeftPart}>
        <h2 style={header.style} className={styles.contactTitle}>
          {contentList.contact.mainHeading}
        </h2>
        <div className={styles.contactSubheading}>
          <p style={content.style} className={styles.contactContent}>
            {contentList.contact.description}
          </p>
        </div>
        <div className={styles.contactForm}>
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className={styles.half}>
                <input
                  type="text"
                  name="name"
                  placeholder={contentList.contact.form.namePlaceholder}
                  required
                />
              </li>
              <li className={styles.half}>
                <input
                  type="email"
                  name="email"
                  placeholder={contentList.contact.form.emailPlaceholder}
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder={contentList.contact.form.titlePlaceholder}
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder={contentList.contact.form.messPlaceholder}
                  name="message"
                  required
                />
              </li>
              <li>
                <Button>
                  <input
                    type="submit"
                    className={buttonStyles.flatButtonContent}
                    value="CONTACT"
                  />
                </Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className={styles.contactRightPart} />
    </div>
  );
};
export default Contact;
