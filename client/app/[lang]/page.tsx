import Image from "next/image";
import type { Metadata } from "next";
import MainBanner from "@/components/MainBanner";
import MainNews from "@/components/MainNews";
import LatestNews from "@/components/LatestNews";
import MustReadGrid from "@/components/MustReadGrid";
import EditorsPick from "@/components/EditorsPick";
import NewsCategory from "@/components/NewsCategory";
import TopCreators from "@/components/TopCreators";

interface PageProps {
  params: {
    lang: string;
  };
}

export const metadata: Metadata = {
  title: "Home - Sri Buzz | Sri Lankan Leading News Provider",
  description: " Sri Lankan Leading News Provider",
};
export default function Home({ params }: PageProps) {
  const { lang } = params;
  return (
    <div>
      <MainBanner
        targetLanguage={lang}
        welcomeText="Welcome to Sri Buzz"
        mainHeading="Understand User Flow"
        highlightText="Increase Conversion."
      />
      <MainNews
        targetLanguage={lang}
        imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        provider="BBC News"
        title="He Deserves a lot more Verstappen Backs Alonso"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
        readTime="5 min read"
        category="Movies"
        timeAgo="12 Minutes Ago"
      />
      <LatestNews targetLanguage={lang} />
      <MustReadGrid />
      <EditorsPick />
      <section className="my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-16 gap-6">
          <NewsCategory category="Sport News" />
          <NewsCategory category="Business News" />
        </div>
      </section>
      <TopCreators />
    </div>
  );
}
