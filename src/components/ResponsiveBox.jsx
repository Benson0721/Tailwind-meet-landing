import { FirstData } from "../data";
import { useEffect, useState } from "react";

const ContextField = () => {
  const { header, content, button1, button2, version } = FirstData;

  return (
    <section className="content content--type1 flex flex-col justify-center items-center text-center">
      <h1 className="content__header1 text-Slate-900 ">{header}</h1>
      <p className="content__paragraph  text-Slate-600 my-6">{content}</p>
      <div
        className="flex flex-col sm:flex-col md:flex-row justify-center items-center mt-4"
        aria-label="button-area"
      >
        <button className="content__button content__button--lg bg-Cyan-600 hover:bg-Cyan-hover">
          {button1}
          <span className="text-Cyan-300">{version}</span>
        </button>
        <button className="content__button content__button--sm bg-Purple-600 hover:bg-Purple-hover mt-4 md:mt-0 md:ml-4">
          {button2}
        </button>
      </div>
    </section>
  );
};

export default function ResponsiveBox() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleMediaChange = (mediaQuery) => {
      if (mediaQuery.matches) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    const mediaQuery1440 = window.matchMedia("(min-width: 1440px)");
    mediaQuery1440.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaQuery1440);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center pt-16 px-8 pb-8 w-full">
      {desktop ? (
        <>
          <figure className="w-full mr-24">
            <img
              src="./desktop/image-hero-left.png"
              alt="hero-left-image"
              className="w-full h-full"
            />
          </figure>
          <ContextField />
          <figure className="w-full ml-24">
            <img
              src="./desktop/image-hero-right.png"
              alt="hero-right-image"
              className="w-full h-full"
            />
          </figure>
        </>
      ) : (
        <>
          <figure className="flex flex-col justify-center items-center w-full my-12 md:my-18">
            <img
              src="./tablet/image-hero.png"
              alt="hero_image"
              className="hero"
            />
          </figure>
          <ContextField />
        </>
      )}
    </div>
  );
}
