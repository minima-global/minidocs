import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About',
    link: 'docs/about/welcome',
    description: (
      <>
        Learn about the purpose and values of Minima and what our vision is
      </>
    ),
  },
  {
    title: 'Learn',
    link: 'docs/learn/networkoverview',
    description: (
      <>
        A deep dive into the Minima protocol and its architecture
      </>
    ),
  },
  {
    title: 'Run a Node',
    link: 'docs/runanode/get_started_in_3_steps',
    description: (
      <>
        Install and run a validating and constructing Minima node on your device
      </>
    ),
  },
  {
    title: 'Build',
    link: 'docs/buildonminima/startaprivatenode',
    description: (
      <>
        Develop decentralized applications and create smart contracts on Minima
      </>
              // Old tokenomics copy - Find out how a fixed supply of 1 billion Minima coins have been distributed
    ),
  },
  {
    title: 'Earn Rewards',
    link: 'docs/earnrewards/minimaincentiveprogram',
    description: (
      <>
        Join the Minima Incentive Program
      </>
    ),
  },
  {
    title: 'Ambassador',
    link: 'docs/earnrewards/ambassador',
    description: (
      <>
        Become a Minima ambassador and earn additional Rewards
      </>
    ),
  },
];

// Remove SVG on deploy

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a class="navbar__link" href={link}>
        <div class="card">
            <div className={clsx('card__header', styles.card__header__min)}>
              <p>{title}</p>
            </div>
            <div class="card__body">
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
