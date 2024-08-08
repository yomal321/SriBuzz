import React from "react";

function CreatorCard({ name, imgUrl, channel }) {
  return (
    <div className="flex gap-3 items-center">
      <img
        src={imgUrl}
        alt=""
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-red-700">{channel}</p>
      </div>
    </div>
  );
}

export default CreatorCard;
