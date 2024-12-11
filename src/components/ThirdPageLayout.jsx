import { ThirdData } from "../data";
import "../css/ThirdPageLayout.css";

const ContextField = () => {
  const { header, content, button, version } = ThirdData;

  return (
    <section className="background flex flex-col justify-center items-center px-8 py-16 z-0">
      <div className="content-field_three flex flex-col lg:flex-row justify-center items-center text-left">
        <h2 className="text-2 text-white mb-6 ">{header}</h2>
        <p className="text-4 text-white mb-6 ">{content}</p>
        <button className="d-button bg-Purple-600 hover:bg-Purple-hover text-5 text-white mt-6 ">
          {button}
          <span className="text-Purple-300">{version}</span>
        </button>
      </div>
    </section>
  );
};

export default function ThirdPageLayout() {
  return (
    <>
      <section className="flex flex-col  justify-center items-center">
        <img src="./mobile/number2.png" alt="number2" className="z-10" />
        <ContextField />
      </section>
      <aside>
        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://www.frontendmentor.io/profile/Benson0721">Mpass</a>.
        </p>
      </aside>
    </>
  );
}
