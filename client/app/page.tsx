import Image from "next/image";
import type { Metadata } from "next";
import MainBanner from "@/components/MainBanner";
import MainNews from "@/components/MainNews";
import LatestNews from "@/components/LatestNews";
import MustReadGrid from "@/components/MustReadGrid";
import EditorsPick from "@/components/EditorsPick";
import NewsCategory from "@/components/NewsCategory";
import TopCreators from "@/components/TopCreators";

export const metadata: Metadata = {
  title: "Home - Sri Buzz | Sri Lankan Leading News Provider",
  description: " Sri Lankan Leading News Provider",
};
export default function Home() {
  return (
    <div>
      <MainBanner />
      <MainNews />
      <LatestNews />
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
