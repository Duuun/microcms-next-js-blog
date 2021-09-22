import Link from "next/link";
import { client } from "../libs/client";
import Layout from "../components/layout";
import Container from "../components/container";
import BlogComponent from "../components/blog-component";

export default function Blog({ blog }) {
  return (
    <>
      <Layout>
        <Container>
          {blog.map((blog) => (
            <BlogComponent
              key={blog.id}
              blogId={blog.id}
              title={blog.title}
              imageUrl={blog.thumbnail["url"]}
              publishedAt={blog.publishedAt}
            />
          ))}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
