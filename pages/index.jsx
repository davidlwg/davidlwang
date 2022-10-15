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
        <p>I'm a forward deployed SWE intern at <a href="https://perpetua.io/" target="_blank">Perpetua</a>.</p>
        <p>I am also a student studying a double major in Computer Science at the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank">University of Waterloo</a> and Business Administration at <a href="https://www.wlu.ca/programs/business-and-economics/undergraduate/business-administration-bba/index.html" target="_blank">Wilfrid Laurier University</a>.</p>
        <p> Previously, I did internships as a research analyst at <a href="https://www.theblock.co/" target="_blank">The Block Crypto</a> and a SWE at a unicorn called <a href="https://www.ada.cx/" target="_blank">Ada</a>.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
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
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
      </section>
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
