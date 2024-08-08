import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CreatorCard from "./Creators/CreatorCard";

function TopCreators() {
  return (
    <div>
      <div className="flex my-10 justify-between">
        <h2 className="text-3xl font-bold">Top Creators</h2>
        <h2 className="flex gap-2 items-center text-2xl font-bold text-red-700">
          See All <FaArrowRight />
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <CreatorCard
          name="Alex Hales"
          channel="BBC"
          imgUrl="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CreatorCard
          name="Alex Hales"
          channel="BBC"
          imgUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CreatorCard
          name="Alex Hales"
          channel="BBC"
          imgUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CreatorCard
          name="Alex Hales"
          channel="BBC"
          imgUrl="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default TopCreators;
