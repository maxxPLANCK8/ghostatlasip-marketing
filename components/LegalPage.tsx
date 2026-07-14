import ReactMarkdown from "react-markdown";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

type LegalPageProps = {
  content: string;
};

export default function LegalPage({ content }: LegalPageProps) {
  return (
    <div className="page legal-page">
      <Nav />
      <main className="legal-main">
        <a className="legal-back" href="/">
          <span aria-hidden="true">←</span> Back to home
        </a>
        <article className="legal-document">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
