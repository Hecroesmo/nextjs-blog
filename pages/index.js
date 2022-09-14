import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { findAllPosts } from '../api/post';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Link from 'next/link';

export async function getServerSideProps(context) {
  
  const response = await findAllPosts()
  // const allPostData = response.json
  // console.log(response.data)
  const allPostData = response.data


  return {
    props: {
      allPostData
    }
  }
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi!, i am a Java/Flutter Programmer, now i am learning nextjs!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}


