import { SecondData } from "../data";
import "../scss/SecondPart.scss";
import DesktopVideoCall from "../assets/images/desktop/image-woman-in-videocall.jpg";
import DesktopVideoChatting from "../assets/images/desktop/image-women-videochatting.jpg";
import DesktopTexting from "../assets/images/desktop/image-man-texting.jpg";
import DesktopMeeting from "../assets/images/desktop/image-men-in-meeting.jpg";
import number1 from "../assets/images/number1.png";



const GridImages = () => {
  return (
    <div className="photo-box grid grid-cols-2 my-16 md:grid-cols-4 gap-6 lg:gap-8">
      <figure className="photo-box__item">
        <img
          src={DesktopVideoCall}
          alt="woman-in-videocall"
        />
      </figure>
      <figure className="photo-box__item">
        <img
          src={DesktopVideoChatting}
          alt="women-videochatting"
        />
      </figure>
      <figure className="photo-box__item">
        <img src={DesktopTexting} alt="man-texting" />
      </figure>
      <figure className="photo-box__item">
        <img src={DesktopMeeting} alt="men-in-meeting" />
      </figure>
    </div>
  );
};

const ContextField = () => {
  const { header1, header2, content } = SecondData;

  return (
    <section className="content content--type2 flex flex-col justify-center items-center text-center">
      <h2 className="content__header3 text-Cyan-600 mb-4">{header2}</h2>
      <h3 className="content__header2 text-Slate-900 mb-8">{header1}</h3>
      <p className="content__paragraph text-Slate-600">{content}</p>
    </section>
  );
};
export default function SecondPart() {
  return (
    <section className="flex flex-col px-8 pt-14 pb-20  justify-center items-center overflow-auto">
      <figure>
        <img src={number1} alt="number1" />
      </figure>
      <GridImages />
      <ContextField />
    </section>
  );
}
