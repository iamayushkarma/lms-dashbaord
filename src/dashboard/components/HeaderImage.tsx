import React from "react";
import headerImage from "../../assets/header-image.png";

function HeaderImage() {
  return (
    <section className="w-full overflow-hidden rounded-xl">
      <img
        src={headerImage}
        alt="EduVerse learning platform"
        className="block h-auto w-full"
      />
    </section>
  );
}

export default HeaderImage;
