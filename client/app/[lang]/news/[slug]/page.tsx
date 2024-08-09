import React from "react";
import type { Metadata } from "next";

import NewsByCategory from "@/components/NewsByCategory";
import Breadcrumb from "@/components/Breadcrumb";
import { capitalizeWords } from "@/utils/capitalize";
import NewsProvider from "@/components/News/NewsProvider";
import ReadTime from "@/components/News/ReadTime";
import MiniNewsCard from "@/components/News/MiniNewsCard";
import { fetchTranslation } from "@/utils/translation";
import NewsDetail from "@/components/News/NewsDetail";

interface PageProps {
  params: {
    slug: string;
    lang: string;
  };
}

// Function to dynamically generate metadata
export function generateMetadata({ params }: PageProps): Metadata {
  const slug = capitalizeWords(params.slug);
  const baseTitle = "Sri Buzz | Sri Lankan Leading News Provider";
  const title = `${slug} News | ${baseTitle}`;
  const description = "Stay updated with the latest news from Sri Lanka.";
  const keywords = `${slug.toLowerCase()}, sri lanka news, sri buzz, breaking news`;
  const url = `https://sribuzz.com/${params.lang}/${params.slug}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Sri Buzz",
      images: [
        {
          url: `https://sribuzz.com/og-images/${params.slug}.jpg`,
          width: 800,
          height: 600,
          alt: `${slug} News`,
        },
      ],
      locale: params.lang === "si" ? "si_LK" : "en_LK",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://sribuzz.com/og-images/${params.slug}.jpg`],
    },
  };
}

const Page = ({ params }: PageProps) => {
  const { slug, lang } = params;

  const crumbs = [
    {
      label: "Home",
      href: "#",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "News", href: "#" },
    { label: slug, href: "#" },
  ];

  return (
    <div className="">
      <Breadcrumb crumbs={crumbs} />
      <div className="grid gird-cols-1 lg:grid-cols-4 my-10 gap-6">
        <div className="card col-span-3">
          <NewsDetail
            targetLanguage={lang}
            imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            provider="BBC News"
            title="He Deserves a lot more Verstappen Backs Alonso"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
            readTime="5 min read"
            category="Movies"
            timeAgo="12 Minutes Ago"
          />
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Latest News</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-4">
            <MiniNewsCard
              targetLanguage={lang}
              imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              provider="BBC News"
              title="He Deserves a lot more Verstappen Backs Alonso"
              readTime="5 min read"
              category="Movies"
              timeAgo="12 Minutes Ago"
            />

            <MiniNewsCard
              targetLanguage={lang}
              imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              provider="BBC News"
              title="He Deserves a lot more Verstappen Backs Alonso"
              readTime="5 min read"
              category="Movies"
              timeAgo="12 Minutes Ago"
            />

            <MiniNewsCard
              targetLanguage={lang}
              imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              provider="BBC News"
              title="He Deserves a lot more Verstappen Backs Alonso"
              readTime="5 min read"
              category="Movies"
              timeAgo="12 Minutes Ago"
            />

            <MiniNewsCard
              targetLanguage={lang}
              imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              provider="BBC News"
              title="He Deserves a lot more Verstappen Backs Alonso"
              readTime="5 min read"
              category="Movies"
              timeAgo="12 Minutes Ago"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
