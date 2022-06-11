import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Language Learning Documeting',
    //Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Blogs documenting the happenings and progress of language learning,
        including Finnish, French, Vietnamese etc. Fun stuff translated into a variety of
        languages!
      </>
    ),
  },
  {
    title: 'Tips and Resources',
    //Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Some potentially useful resources, methods and tips coming from
        personal experience learning the listed languages and all languages
        in general!
      </>
    ),
  },
  {
    title: 'Linguistic Observations and Fun Facts',
    //Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Interesting linguistic facts about languages coming from an aspiring
        Linguistics student, ranging from phonetics, idioms, dark humour to
        NLP models built on the features of the languages...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
