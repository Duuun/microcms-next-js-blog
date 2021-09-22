import Link from "next/link";
import Image from "next/image";

export default function BlogComponent({
  blogId,
  title,
  imageUrl,
  publishedAt,
}) {
  return (
    <div key={blogId} className="w-full rounded overflow-hidden">
      <Link href={`/blog/${blogId}`}>
        <a>
          <div className="mb-12">
            <Image src={imageUrl} width="150" height="100" alt="" />
            <a>{title}</a>
            <p>{publishedAt}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
