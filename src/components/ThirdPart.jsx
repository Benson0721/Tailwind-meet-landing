import { ThirdData } from "../data";
import "../assets/scss/ThirdPart.scss";
import number2 from "../assets/images/number2.png";

const ContextField = () => {
  const { header, content, button, version } = ThirdData;

  return (
    <section className="background flex flex-col justify-center items-center px-8 py-16 z-0">
      <div className="content content--type3 flex flex-col lg:flex-row justify-center items-center text-left">
        <h2 className="content__header2 text-white mb-6  lg:mb-0">{header}</h2>
        <p className="content__paragraph text-white mb-6 lg:mb-0">{content}</p>
        <button className="content__button content__button--lg bg-Purple-600 hover:bg-Purple-hover">
          {button}
          <span className="text-Purple-300">{version}</span>
        </button>
      </div>
    </section>
  );
};

export default function ThirdPart() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center">
        <img src={number2} alt="number2" className="z-10" />
        <ContextField />
      </section>
    </>
  );
}
