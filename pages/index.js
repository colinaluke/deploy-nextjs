import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle }</title>
          </Head>
          <section className={utilStyles.headingMd}>
              <p>Hello, I am Luke Abram Colina. A fourth year BSCS student.</p>
              <p>
                  (This is a sample website - you'll be building a site like this on {' '} <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
              </p>
          </section>
          <form action="/api/users/newUser" method="POST">
              <input type="text" placeholder="Enter name" name="name"/>
              <input type="text" placeholder="Enter age" name="age"/>
              <input type="text" placeholder="Enter gender" name="gender"/>
            <button type="submit"> Submit </button>
          </form>
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