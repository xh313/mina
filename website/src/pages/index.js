import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">嗨, Moi, Salut, Chào, Hej, and... Hi</h1>
        <p className="hero__subtitle">Welcome to {siteConfig.tagline}</p>
        <p className="hero__subtitle">This site is currently under construction.<br>Check <a href='https://xh313.user.srcf.net/who-is-x/'>this page</a> out for now!</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description="Xuehuai's one-stop grocer's with some of her projects and fun stuff. She is a student at Pomona College interested in chemistry, physics and linguistics.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
