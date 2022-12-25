import Button from '../components/Button';
import buttonStyles from '../../styles/Button.module.scss';
import {content} from '../../styles/font';
import contentList from '../assets/contents.json';
import handler from '../api/form';
import styles from '../../styles/Form.module.scss';
import {useRef} from 'react';

const Form = () => {
  const form = useRef ();

  const sendEmail = e => {
    e.preventDefault ();
    handler (form.current);
  };
  return (
    <div className={styles.contactForm}>
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className={styles.half}>
            <input
              type="text"
              name="name"
              placeholder={contentList.contact.form.namePlaceholder}
              style={content.style}
              required
            />
          </li>
          <li className={styles.half}>
            <input
              type="email"
              name="email"
              placeholder={contentList.contact.form.emailPlaceholder}
              style={content.style}
              required
            />
          </li>
          <li>
            <input
              type="text"
              name="subject"
              placeholder={contentList.contact.form.titlePlaceholder}
              style={content.style}
              required
            />
          </li>
          <li>
            <textarea
              placeholder={contentList.contact.form.messPlaceholder}
              style={content.style}
              name="message"
              required
            />
          </li>
          <li>
            <Button>
              <input
                type="submit"
                className={buttonStyles.flatButtonContent}
                value="SEND"
              />
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Form;
