import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'
import Link from '@docusaurus/Link'

const FeatureList = [
  {
    title: 'SNT',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Sciences Numériques et Technologies en classe de seconde.</>,
    link: '/docs/snt/programme',
  },
  {
    title: 'NSI Premières',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: <>Spécialité NSI en classe de Première.</>,
    link: '/docs/snt/programme',
  },
  {
    title: 'NSI Terminales',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>Spécialité NSI en classe de Terminale.</>,
    link: '/docs/snt/programme',
  },
]

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
        <p></p>
      </div>
    </section>
  )
}
