import React from "react";
import styles from "./index.module.css";

const Privacy: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy for Fitting Room</h1>
      <p className={styles.effectiveDate}>
        <span className={styles.boldText}>Effective Date: </span>June 17th, 2025
      </p>
      <p className={styles.blurb}>
        At “Fitting Room”™, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy describes how
        we collect, use, disclose, and safeguard your information when you use
        our application (“App”). Please read this policy carefully to understand
        our practices regarding your information and how we will treat it.
      </p>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p className={styles.smallText}>
          When you use Fitting Room, we may collect or process the following
          categories of information:
        </p>
        <h4 className={styles.sectionSubHeader}>1.1 Uploaded Photos</h4>
        <ul className={styles.list}>
          <li>
            You provide photographs of yourself for the sole purpose of enabling
            our virtual try-on functionality.
          </li>
          <li>
            These photos are processed temporarily and{" "}
            <span className={styles.boldText}>
              are never stored permanently
            </span>{" "}
            on our servers or databases.
          </li>
        </ul>
        <h4 className={styles.sectionSubHeader}>
          1.2 Device and Usage Information
        </h4>
        <ul className={styles.list}>
          <li>
            We collect technical data related to your device and use of the App
            such as device type, operating system, app usage logs, and
            performance metrics.
          </li>
          <li className={styles.boldText}>
            We do NOT collect or store your IP address, GPS location, or any
            other directly identifying location data.
          </li>
        </ul>
        <h4 className={styles.sectionSubHeader}>
          1.3 Optional Personal Information
        </h4>
        <ul className={styles.list}>
          <li>
            If you voluntarily provide additional personal information (such as
            your email address for account registration or support), we process
            it as described below.
          </li>
        </ul>
      </div>

      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p className={styles.smallText}>
          We use your information solely for the following purposes:
        </p>
        <ul className={styles.list}>
          <li>To provide and improve the virtual try-on experience.</li>
          <li>
            To maintain and enhance the App functionality and performance.
          </li>
          <li>To respond to use inquiries and provide customer support.</li>
          <li>To comply with applicable legal requirements.</li>
        </ul>
      </div>

      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>
          3. Handling of Uploaded Photos and Image Data
        </h2>
        <h4 className={styles.sectionSubHeader}>
          3.1 Temporary Storage and Processing
        </h4>
        <ul className={styles.list}>
          <li>
            Uploaded photos are transmitted securely to our servers and stored
            temporarily in encrypted, access-controlled memory or storage
            environments.
          </li>
          <li>
            These images are processed{" "}
            <span className={styles.boldText}>only</span> for generating virtual
            try-on previews in real-time during your session.
          </li>
        </ul>
        <h4 className={styles.sectionSubHeader}>
          3.2 Automatic and Manual Detection
        </h4>
        <ul className={styles.list}>
          <li>
            Uploaded photos are automatically and permanetly deleted{" "}
            <span className={styles.boldText}>
              immediately after your session ends
            </span>
            , or within [specify time frame, e.g., 30 minutes] of upload.
          </li>
          <li>
            Users may alos delete their photos manually at any time via the app
            interface, which triggers immediate destruction of the photo data.
          </li>
          <li>
            We implement strict technical measures to ensure that deleted images
            are irrecoverable, including secure overwriting of stored data.
          </li>
        </ul>
        <h4 className={styles.sectionSubHeader}>
          3.3 No Permanent Storage or Secondary Use
        </h4>
        <ul className={styles.list}>
          <li>
            We do no retian or store any uploaded images beyond the processing
            window.
          </li>
          <li>
            Your photos are never used for AI training, advertising, profiling,
            or shared with any third parties.
          </li>
        </ul>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>
          4. Technical and Organizational Security Measures
        </h2>
        <ul className={styles.list}>
          <li>
            We apply industry-standard encryption for data transmission and
            storage.
          </li>
          <li>
            Access to temporary image data is strictly limited to authorized
            systems and personnel.
          </li>
          <li>
            Automated background processes ensure routine and timely deletion of
            all temporary image data.
          </li>
          <li>
            Regular security audits and monitoring help protect against
            aunaurhtorized access, alteration, or disclosure.
          </li>
        </ul>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>5. Data Retention Policy</h2>
        <ul className={styles.list}>
          <li>
            Aside from temporary image data as described, we retain
            non-identifiable technical and usage data to improve the App.
          </li>
          <li>
            Personal data voluntarily provided (such as email) is retined only
            as long as necessary for user support or legal compliance.
          </li>
          <li>
            Users may request deletion of their personal data at any time.
          </li>
        </ul>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>6. User Rights and Controls</h2>
        <p className={styles.smallText}>
          Depending on your jurisdiction, you may have the following rights
          regarding your personal data:
        </p>
        <ul className={styles.list}>
          <li>
            The right to access, correct, or delete your personal information.
          </li>
          <li>
            The right to withdraw consent to data processing where applicable.
          </li>
          <li>
            The right to lodge a complaint with a data protection authority.
          </li>
          <li>
            The right to request portability of your data in a machine-readable
            format.
          </li>
        </ul>
        <p>
          To exercise these rights or for any data privacy inquiries, please
          contact us at:
        </p>
        <p className={styles.boldText}>[Insert Contact Email]</p>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>
          7. Sharing and Disclosure of Data
        </h2>
        <ul className={styles.list}>
          <li>
            We do not sell, rent, or trade your personal information or photos.
          </li>
          <li>We do not share uploaded images with third parties.</li>
          <li>
            We may disclose information if required by law or to protect legal
            rights.
          </li>
        </ul>
      </div>
      <div className={styles.sections}>
        <h2 className={styles.sectionTitle}>8. Children's Privacy</h2>
        <p>
          Our app is not intended for use by individuals under the age of 13 (or
          the applicable minimum age in your jurisdiction). We do not knowingly
          collect personal data from children.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
