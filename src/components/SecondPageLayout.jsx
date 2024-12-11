import { SecondData } from "../data";
import "../css/SecondPageLayout.css";
const GridImages = () => {
  return (
    <div className="photo-box grid grid-cols-2 my-16 md:grid-cols-4 gap-6 lg:gap-8">
      <figure className="photo-box__item">
        <img
          src="./desktop/image-woman-in-videocall.jpg"
          alt="woman-in-videocall"
        />
      </figure>
      <figure className="photo-box__item">
        <img
          src="./desktop/image-women-videochatting.jpg"
          alt="women-videochatting"
        />
      </figure>
      <figure className="photo-box__item">
        <img src="./desktop/image-man-texting.jpg" alt="man-texting" />
      </figure>
      <figure className="photo-box__item">
        <img src="./desktop/image-men-in-meeting.jpg" alt="men-in-meeting" />
      </figure>
    </div>
  );
};

const ContextField = () => {
  const { header1, header2, content } = SecondData;

  return (
    <section className="content content--type2 flex flex-col justify-center items-center text-center">
      <h3 className="content__header3 text-Cyan-600 mb-4">{header2}</h3>
      <h2 className="content__header2 text-Slate-900 mb-8">{header1}</h2>
      <p className="content__paragraph text-Slate-600">{content}</p>
    </section>
  );
};
export default function SecondPageLayout() {
  return (
    <section className="flex flex-col px-8 pt-14 pb-20  justify-center items-center overflow-auto">
      <figure>
        <img src="./mobile/number1.png" alt="" />
      </figure>
      <GridImages />
      <ContextField />
    </section>
  );
}
