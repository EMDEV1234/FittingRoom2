import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import drezilyLogo from "./Logos/drezily.jpeg";
import metamaskLogo from "./Logos/MetaMask-Partnership-The-Giving-Block.webp";
import shopglazeLogo from "./Logos/shopglaze-removebg-preview.png";
import modelDLogo from "./Logos/MODELD.jpeg";
import biterefillLogo from "./Logos/Biterefill.png";
import huggingFaceLogo from "./Logos/Hugging_Face-removebg-preview.png";
import retrofitLogo from "./Logos/Retrofit.jpg";
import solCardLogo from "./Logos/Sol Card.png";
import theffwordLogo from "./Logos/theffword_logo.jpeg";

import additionalImage1 from "./above become a partner/unnamed (1).png";
import additionalImage2 from "./above become a partner/unnamed.jpg";

import instagramImage from "./Below become a partner/Instagram_icon.png";
import linkedinImage from "./Below become a partner/LinkedIn_icon.svg.webp";
import xImage from "./Below become a partner/X.jpg";

const Partners: React.FC = () => {
  const [visibleLogos, setVisibleLogos] = useState<boolean[]>(new Array(9).fill(false));
  
  const generateUUID = (): string =>
    Math.random().toString(36).substring(2, 10) + Date.now().toString(36);

  const handleGetInTouch = () => {
    window.location.href = 'mailto:info@fittingroom.com?subject=Partnership Inquiry&body=Hi, I am interested in becoming a partner with Fitting Room. Please provide more information about partnership opportunities.';
  };

  useEffect(() => {
    
    const timers: number[] = [];
    
    [0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9].forEach((delay, index) => {
      const timer = setTimeout(() => {
        setVisibleLogos(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, delay * 1000);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const partnerLogos = [
    {
      id: generateUUID(),
      image: metamaskLogo,
      name: "MetaMask",
      description: "MetaMask is the worlds leading self-custodial crypto wallet, empowering millions of users to access Web3 with full control of their digital identity, assets, and data. By bridging users to decentralized apps, NFTs, and DeFi platforms, MetaMask is building a secure, open, and user-first future for blockchain interaction."
    },
    {
      id: generateUUID(),
      image: biterefillLogo,
      name: "Biterefill",
      description: "Biterefill is a global crypto payments platform that lets users spend digital currency on everyday essentials like gift cards, phone top-ups, and bill payments. With support for Bitcoin, Ethereum, USDT, and more, Bitrefill bridges the gap between decentralized finance and real-world utility. Its mission is to make living on crypto easy, private, and accessible to anyone, anywhere."
    },
    {
      id: generateUUID(),
      image: solCardLogo,
      name: "Sol Card",
      description: "SolCard is a Web3-native payment solution that allows users to top up and spend SOL instantly through a digital or physical card. Seamlessly integrated with Apple Pay and real-world commerce, SolCard brings crypto utility to everyday shopping—online and offline. With a focus on simplicity, speed, and Solana-powered transactions, SolCard bridges the gap between decentralized finance and mainstream financial experiences."
    },
    {
      id: generateUUID(),
      image: retrofitLogo,
      name: "Retrofit",
      description: "Retrofit is a personalized vintage fashion discovery platform that scours the internet to deliver curated secondhand gems straight to your inbox. By simplifying the search process and focusing on aesthetic, occasion, and individual taste, Retrofit makes vintage shopping effortless and enjoyable. It's a modern solution for conscious consumers who want unique, sustainable style without the endless scrolling."
    },

    {
      id: generateUUID(),
      image: shopglazeLogo,
      name: "ShopGlaze",
      description: "Glaze is a fashion discovery and shopping platform that lets users text in their outfit inspiration and instantly receive curated product recommendations from top brands. With a single click, users can shop their favorite styles directly—turning fashion aesthetics into effortless, real-time shopping experiences."
    },
    {
      id: generateUUID(),
      image: modelDLogo,
      name: "ModelD",
      description: "ModelD is a mission-led platform dedicated to transforming modeling from an exclusive industry into an inclusive, community-first ecosystem. By providing a safe space for aspiring models, photographers, designers, and brands to connect, showcase their talent, and collaborate, MODELD empowers individuals of all backgrounds to break into fashion, build networks, and gain the recognition they deserve both online and through in-person events."
    },
    {
      id: generateUUID(),
      image: drezilyLogo,
      name: "Drezily",
      description: "Drezily is a next-gen fashion platform powered by Zily, an AI shopping assistant that helps users discover, compare, and purchase trending styles from across the web in seconds. By combining smart search, real-time recommendations, and deep personalization, Drezily turns the overwhelming world of online shopping into a curated, chat-first experience. With a focus on accessibility, ease, and style, Drezily is redefining how the modern consumer shops for fashion."
    },
    {
      id: generateUUID(),
      image: huggingFaceLogo,
      name: "Hugging Face",
      description: "Hugging Face is the leading open-source platform for building, sharing, and deploying machine learning models. With a strong focus on accessibility, collaboration, and ethical AI, Hugging Face empowers developers and researchers around the world to accelerate innovation in natural language processing, computer vision, and beyond. From hosting state-of-the-art models to pioneering tools like Transformers and Datasets, Hugging Face is shaping the future of responsible, community-driven AI."

    },

    
    {
      id: generateUUID(),
      image: theffwordLogo,
      name: "The F Word",
      description: "The F Word* is an AI-powered digital fashion platform built for designers, creators, and brands to accelerate every stage of the fashion lifecycle—from concept to 3D prototype, production pack, and marketing assets. With tools for AI fashion design, virtual try-on, and direct integration into marketplaces like Roblox, The F* Word enables creators to move 10x faster while maintaining full control over IP and creative direction. At its core, the platform empowers a new generation of fashion storytellers to design, showcase, and monetize digitally—with community, creativity, and real-world impact at the forefront."


    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Our Partners</h1>
      
      <div className={styles.introSection}>
        <p className={styles.introText}>
          Discover our network of trusted fashion partners and collaborators. 
          From innovative brands to cutting-edge retailers, we work together 
          to bring you the best virtual try-on experience.
        </p>
      </div>

      <div className={styles.partnersDisplay}>
        {partnerLogos.map((partner, index) => (
          <div 
            key={partner.id} 
            className={`${styles.partnerItem} ${visibleLogos[index] ? styles.fadeIn : styles.fadeOut}`}
          >
            <div className={styles.logoContainer}>
              <img 
                src={partner.image} 
                alt={partner.name}
                className={styles.floatingLogo}
              />
            </div>
            <div className={styles.partnerInfo}>
              <h3 className={styles.partnerTitle}>{partner.name}</h3>
              <p className={styles.partnerDescription}>{partner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.additionalImages}>
        <div className={styles.imageContainer}>
          <img 
            src={additionalImage1} 
            alt="Additional Partnership Content"
            className={styles.additionalImage}
          />
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={additionalImage2} 
            alt="Additional Partnership Content"
            className={styles.additionalImage}
          />
        </div>
      </div>

      <div className={styles.becomePartner}>
        <div className={styles.becomePartnerCard}>
          <h3 className={styles.becomePartnerTitle}>Become a Partner</h3>
          <p className={styles.becomePartnerText}>
            Join our growing network of fashion partners and revolutionize 
            the way customers experience your products.
          </p>
          <button 
            className={styles.contactButton}
            onClick={handleGetInTouch}
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div className={styles.socialImages}>
        <div className={styles.socialImageContainer}>
          <img 
            src={instagramImage} 
            alt="Instagram"
            className={`${styles.socialImage} ${styles.instagramImage}`}
          />
        </div>
        <div className={styles.socialImageContainer}>
          <img 
            src={linkedinImage} 
            alt="LinkedIn"
            className={styles.socialImage}
          />
        </div>
        <div className={styles.socialImageContainer}>
          <a 
            href="https://x.com/fittingroomAI" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={xImage} 
              alt="X (Twitter)"
              className={styles.socialImage}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;