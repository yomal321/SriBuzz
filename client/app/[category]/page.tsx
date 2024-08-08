import React from "react";
import type { Metadata } from "next";

import NewsByCategory from "@/components/NewsByCategory";
import Breadcrumb from "@/components/Breadcrumb";
import { capitalizeWords } from "@/utils/capitalize";

interface PageProps {
  params: {
    category: string;
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
  const { category } = params;

  return (
    <div>
      <Breadcrumb />
      <NewsByCategory category={category + " News"} />
    </div>
  );
};

export default Page;
