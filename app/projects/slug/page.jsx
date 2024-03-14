import React from "react";

const page = ({ params: { slug } }) => {
  return (
    <div className="text-3xl text-white">
      Showing the blog post for the slug <strong>{slug}</strong>
    </div>
  );
};

export default page;
