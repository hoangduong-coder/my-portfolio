import Button from '/pages/components/widget/Button';
import Link from 'next/link';
import {button} from '/styles/font';
import buttonStyles from '/styles/Button.module.scss';

const Contact = () => {
  return (
    <div>
      <div>
        <Button>
          <Link
            className={buttonStyles.flatButtonContent}
            href="/dashboard/contact"
          >
            <p style={button.style}>
              CONTACT ME
            </p>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
