import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <p>I am currently a student studying in a <a href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree" target="_blank" rel="noreferrer">double degree</a> program in Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University.</p>
          <p>I&apos;m also looking for summer 2023 internships. Please reach out with any opportunities! </p>
          <p> Previously, I was a forward deployed SWE intern at <a href="https://perpetua.io/" target="_blank" rel="noreferrer">Perpetua</a>. Before that, a data engineer and research analyst at <a href="https://www.theblock.co/" target="_blank" rel="noreferrer">The Block Crypto</a> and a SWE at a unicorn called <a href="https://www.ada.cx/" target="_blank" rel="noreferrer">Ada</a>.</p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><mark>Projects</mark></h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>Project
            <br />
            <small className={utilStyles.lightText}>
              Oct. 2022
            </small>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}><mark>Blog</mark></h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
