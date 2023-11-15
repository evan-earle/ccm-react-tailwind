import Button from "../components/Button";
import { pro } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={pro}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-700">Skate </span>
          <span className="text-red-700"></span> Like the Pros
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience hockey skates that offer a comfortable, game-ready feel and
          an unparalleled range of motion for optimal speed and performance on
          the ice.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lightweight and comfort to provide more energy transfer for faster
          strides giving you the edge over your opponents.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
