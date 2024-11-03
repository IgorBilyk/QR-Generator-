import React from "react";

export default function Button({ title, styles,onPress}) {
  return (
    <div>
      <button className={`bg-gray-600 px-5 py-2 rounded-lg text-white hover:bg-[#1f2937]${styles}` }onClick={onPress}>
        {title}
      </button>
    </div>
  );
}
