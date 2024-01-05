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
    title: 'User Guides',
    link: 'docs/userguides/',
    icon: 'icons/ambassador_icon.svg',
    description: (
      <>
        Guidance for using and managing your Minima node
      </>
    ),
  },
  {
    title: 'Learn',
    link: 'docs/learn/ataglance',
    icon: 'icons/learn_icon.svg',
    description: (
      <>
        A deep dive into the Minima protocol and its architecture
      </>
    ),
  },
  {
    title: 'Build',
    link: 'docs/buildonminima/buildintro',
    icon: 'icons/build_icon.svg',
    description: (
      <>
        Develop decentralized applications and create smart contracts on Minima
      </>
              // Old tokenomics copy - Find out how a fixed supply of 1 billion Minima coins have been distributed
    ),
  },
  // {
  //   title: 'Ambassadors',
  //   link: 'docs/earnrewards/ambassador',
  //   icon: 'icons/ambassador_icon.svg',
  //   description: (
  //     <>
  //       Become a Minima Ambassador!
  //     </>
  //   ),
  // },
  {
    title: 'Tokenomics',
    link: 'docs/about/tokendistribution',
    icon: 'icons/mainnet_icon.svg',
    description: (
      <>
        Understand Minima's token allocation and distribution schedule
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
