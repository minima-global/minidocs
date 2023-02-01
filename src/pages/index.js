import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to the {siteConfig.themeConfig.navbar.title}</h1>
        <h2>Learn all you need to know about Minima</h2>
      </div>
    </header>
  );
}

// {siteConfig.title}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Docs | ${siteConfig.title}`}
      description="Learn about the most decentralized P2P blockchain network running on mobile and IoT devices. Understand the protocol and discover how to get involved.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
