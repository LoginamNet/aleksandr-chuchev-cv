import { Metadata } from "next";

import Privacy from "../components/privacy/privacy";
import CVContacts from "../components/cv-contacts/cv-contacts";

export const metadata: Metadata = {
  title: "Aleksandr Chuchev | Privacy Policy",
  description:
    "This Privacy Policy explains how this website collects, uses, and safeguards the information you provide to us, including your name, email address, and phone number when you submit a message using the Site’s contact form.",
  openGraph: {
    title: "Aleksandr Chuchev | Privacy Policy",
    description:
      "This Privacy Policy explains how this website collects, uses, and safeguards the information you provide to us, including your name, email address, and phone number when you submit a message using the Site’s contact form.",
    url: "https://aleksandr-chuchev.netlify.app/privacy-policy",
    // images: [
    //   {
    //     url: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     secureUrl: "https://i.postimg.cc/CM29rWxd/HelloBG.webp",
    //     width: 1450,
    //     height: 710,
    //     alt: "Превью для сайта https://aleksandr-chuchev.netlify.app",
    //   },
    // ],
  },
};

function PrivacyPolicy() {
  return (
    <>
      <Privacy />
      <CVContacts />
    </>
  );
}

export default PrivacyPolicy;
