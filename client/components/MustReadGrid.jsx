import React from "react";
import NewsCard from "./News/NewsCard";
import NewsInbox from "./News/NewsInbox";
import MiniNewsCard from "./News/MiniNewsCard";

function MustReadGrid() {
  return (
    <section className="my-16">
      <div className="flex my-5 justify-between">
        <h2 className="text-3xl font-bold">Must Read</h2>
        <h2 className="text-2xl font-bold text-red-700">See all </h2>
      </div>

      <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-2 lg:col-span-1">
          <NewsCard
            imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            provider="BBC News"
            title="He Deserves a lot more Verstappen Backs Alonso"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor! Quaerat rem fuga quidem quia fugit iure voluptate ipsam deleniti, vero reiciendis exercitationem dolorem consequuntur corporis dolor deserunt voluptatibus eos."
            readTime="5 min read"
            category="Movies"
            timeAgo="12 Minutes Ago"
          />
        </div>
        <div className="col-span-2 min-h-96">
          <NewsInbox />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div className="grid gird-cols-1 gap-6">
            <MiniNewsCard
              imageSrc="https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              provider="BBC News"
              title="He Deserves a lot more Verstappen Backs Alonso"
              readTime="5 min read"
              category="Movies"
              timeAgo="12 Minutes Ago"
            />
            <MiniNewsCard
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
    </section>
  );
}

export default MustReadGrid;
