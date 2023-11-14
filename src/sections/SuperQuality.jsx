import Button from "../components/Button";
import { skate8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-red-700">Super </span>
          <span className="text-red-700">Quality </span>Skates
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted skates
          are designed to elevate your game, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence will ensure your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={skate8}
          alt="skate8"
          width="570"
          height="522"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
