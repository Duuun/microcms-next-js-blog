import Container from "./container";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <div className="flex justify-between items-center py-12 md:py-20 font-display tracking-wide">
        <h1 className="text-2xl md:text-3xl">
          <Link href="/">
            <a className="hover:no-underline">dmuraka.me</a>
          </Link>
        </h1>
        <div className="text-sm leading-none">
          <Link href="/blog">
            <a className="leading-none">blog</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
