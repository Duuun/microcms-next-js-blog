import { client } from "../../libs/client";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import DateFormatter from "../../components/date-formatter";

export default function BlogId({ blog }) {
  return (
    <Layout>
      <Container>
        <main>
          <h1 className="text-2xl md:text-3xl">{blog.title}</h1>
          <p className="text-xs md:text-xs text-center">
            <DateFormatter dateString={blog.publishedAt} />
          </p>
          <Image src={blog.thumbnail["url"]} width="300" height="200" alt="" />
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </main>
      </Container>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
