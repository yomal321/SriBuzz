import React from "react";
import type { Metadata } from "next";

import NewsByCategory from "@/components/NewsByCategory";
import Breadcrumb from "@/components/Breadcrumb";
import { capitalizeWords } from "@/utils/capitalize";

interface PageProps {
  params: {
    category: string;
    lang: string;
  };
}

// Function to dynamically generate metadata
export function generateMetadata({ params }: PageProps): Metadata {
  const category = capitalizeWords(params.category);
  return {
    title: `${category} News | Sri Buzz | Sri Lankan Leading News Provider`,
    description: "Sri Lankan Leading News Provider",
  };
}

const Page = ({ params }: PageProps) => {
  const { category, lang } = params;

  const crumbs = [
    {
      label: "Home",
      href: "#",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "News", href: "#" },
    { label: category, href: "#" },
  ];

  return (
    <div>
      <Breadcrumb crumbs={crumbs} />
      <NewsByCategory category={category + " News"} lang={lang} />
    </div>
  );
};

export default Page;
