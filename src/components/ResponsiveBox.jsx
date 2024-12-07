import { firstData } from "../data";

const ContextField = () => {
  const { header, content, button1, button2 } = firstData;

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center sm:w-4/5 md:w-3/5 text-center">
      <h1 className="text-2 px-9">{header}</h1>
      <p className="text-5">{content}</p>
      <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center">
        <button className="bg-Cyan-600 px-10 py-4 my-4 w-48 rounded-full text-5 text-white">
          {button1}
        </button>
        <button className="bg-Purple-600 px-10 py-4 w-48 rounded-full text-5 text-white">
          {button2}
        </button>
      </div>
    </section>
  );
};

export default function ResponsiveBox() {
  return (
    <div className="flex flex-col sm:flex-col items-center">
      <ContextField />
    </div>
  );
}
