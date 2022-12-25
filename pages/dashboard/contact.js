import { content, header } from "../../styles/font";

import Form from "../components/Form";
import Head from "next/head";
import NavBar from "../components/NavBar";
import contentList from "../assets/contents.json";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | {contentList.title}</title>
      </Head>
      <div>
        <NavBar />
        <div className="layout">
          <div className={styles.contactContainer}>
            <div className={styles.contactLeftPart}>
              <h2 style={header.style} className="subHeader">
                {contentList.contact.mainHeading}
              </h2>
              <div className={styles.contactSubheading}>
                <p style={content.style} className="subContent">
                  {contentList.contact.description}
                </p>
              </div>
            </div>
            <div className={styles.contactRightPart}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
