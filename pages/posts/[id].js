import Layout from "../../components/layout";
import { findPostById, getAllPostIds } from "../../api/post";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  // console.log('getStaticPaths', paths)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const response = await findPostById(params.id)
  const postData = response.data
  // console.log('getStaticProps: ',postData)

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
    </Layout>
  );
}
