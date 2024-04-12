import PrivacyHeader from "./privacy-header/privacy-header";
import PrivacyList from "./privacy-list/privacy-list";
import PrivacyText from "./privacy-text/privacy-text";

import layout from "../../layout.module.css";
import styles from "./privacy.module.css";

function Privacy() {
  return (
    <section
      className={`${layout.section} ${layout.section_dark}`}
      id="privacy-policy"
    >
      <div className={`${layout.wrapper} ${styles.privacy}`}>
        <h2
          className={`${layout.text_color_peperment} ${layout.text_uppercased}`}
        >
          /Privacy Policy
        </h2>
        <div className={styles.privacy__text_box}>
          <PrivacyText
            textBefore="This Privacy Policy explains how this website (hereinafter referred to as the «Site»), located at  "
            link="https://aleksandr-chuchev.netlify.app"
            linkHref="/"
            textAfter=", collects, uses, and safeguards the information you provide to us, including your name, email address, and phone number when you submit a message using the Site’s contact form."
          />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="What Information We Collect" />
          <PrivacyText textBefore="The Site’s contact form collects the following types of information:" />
          <PrivacyList
            list={["Name", "Email adress", "Phone number"]}
          ></PrivacyList>
          <PrivacyText
            textBefore="The provided data is transmitted using the EmailJS library. You can review the privacy policy of this service by following this link: "
            link="https://www.emailjs.com/legal/privacy-policy/"
            linkHref="https://www.emailjs.com/legal/privacy-policy/"
          />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="How We Use Your Information" />
          <PrivacyText textBefore="We use the collected information to process your inquiries submitted through the contact form and provide you with the requested information." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Methods of Information Collection" />
          <PrivacyText textBefore="We collect information that you provide to us through the Site’s contact form, including your name, email address, and phone number." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Data Retention Period" />
          <PrivacyText textBefore="We will retain your information only for as long as necessary to achieve the purposes for which it was collected." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Data Security" />
          <PrivacyText textBefore="We take measures to secure your information. We protect data through technical and organizational measures to prevent unauthorized access, loss, or disclosure." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Sharing Information with Third Parties" />
          <PrivacyText textBefore="We do not disclose your information to third parties without your consent." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Rights" />
          <PrivacyText textBefore="You have the following rights:" />
          <PrivacyList
            list={[
              "Access to your information: You have the right to request access to your personal information.",
              "Correction of inaccuracies: If your information is incomplete or inaccurate, you can request corrections.",
              "Data deletion: You can request the deletion of the data you have submitted.",
            ]}
          ></PrivacyList>
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Changes to the Privacy Policy" />
          <PrivacyText textBefore="We reserve the right to make changes to our Privacy Policy. Any changes will be posted on this page." />
        </div>
        <div className={styles.privacy__text_box}>
          <PrivacyHeader text="Consent" />
          <PrivacyText textBefore="By using the Site’s contact form, you consent to the collection and use of information in accordance with this Privacy Policy." />
          <PrivacyText
            textBefore="If you have any questions or need additional information about our Privacy Policy, please contact us at the following email address: "
            link="loginamnet@gmail.com"
            linkHref="mailto:loginamnet@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}

export default Privacy;
