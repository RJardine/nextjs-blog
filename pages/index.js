import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={utilStyles.headingMd}>
            <p>
                Hi I'm Rodney. I am aspiring to be a software engineer. <br /> <b style={{padding:"200px"}}>Watch
                this Space!</b>
            </p>
            <p>
                This is the dope project me and my buddy Faisal have decided to delve
                in <a href="https://civati.io">Civati.io</a>. We are going to be using NEXT.js
            </p>
            <p>
                This is blog template was made from the Next.Js tutorial of creating a very simple blog app.
                Here’s an example of the final result: <a href="https://next-learn-starter.now.sh">https://next-learn-starter.now.sh</a> (source)
            </p>
        </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
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
