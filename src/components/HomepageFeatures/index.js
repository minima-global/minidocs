import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About',
    link: 'docs/about/welcome',
    icon: 'icons/minima_symbol.svg',
    description: (
      <>
        Learn about the purpose and values of Minima and what our vision is
      </>
    ),
  },
  {
    title: 'Learn',
    link: 'docs/learn/networkoverview',
    icon: 'icons/learn_icon.svg',
    description: (
      <>
        A deep dive into the Minima protocol and its architecture
      </>
    ),
  },
  {
    title: 'Run a Node',
    link: 'docs/runanode/get_started',
    icon: 'icons/run_icon.svg',
    description: (
      <>
        Install and run a validating and constructing Minima node on your device
      </>
    ),
  },
  {
    title: 'Build',
    link: 'docs/buildonminima/startaprivatenode',
    icon: 'icons/build_icon.svg',
    description: (
      <>
        Develop decentralized applications and create smart contracts on Minima
      </>
              // Old tokenomics copy - Find out how a fixed supply of 1 billion Minima coins have been distributed
    ),
  },
  {
    title: 'Presale',
    link: 'docs/about/presale',
    icon: 'icons/ambassador_icon.svg',
    description: (
      <>
        Purchase wMinima at a discount ahead of Exchange listing!
      </>
    ),
  },
  {
    title: 'Mainnet',
    link: 'docs/about/mainnetstatus',
    icon: 'icons/mainnet_icon.svg',
    description: (
      <>
        Check the latest updates as we transition from Testnet to Mainnet
      </>
    ),
  },
];

// Remove SVG on deploy

function Feature({icon, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a className="navbar__link" href={link}>
        <div className="card">
            <img src={icon} className="card__icon" width="32px" height="32px"></img>
            <div className={clsx('card__header', styles.card__header__min)}>
              <p>{title}</p>
            </div>
            <div className="card__body">
              <p>{description}</p>
            </div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
