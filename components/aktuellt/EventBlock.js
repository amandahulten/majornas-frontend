import React from "react";
import EventLink from "./EventLink";

const EventBlock = () => {
  const [index, setIndex] = React.useState(0);
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 5000;

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="md:flex gap-1">
      <div className="my-0 mx-auto overflow-hidden md:w-[50%] lg:w-[60%]">
        <div
          className="whitespace-nowrap ease-in duration-1000"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="h-60 w-full inline-block"
              key={index}
              style={{ backgroundColor }}
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] lg:w-[40%] flex flex-col gap-1">
        <EventLink />
        <EventLink />
        <EventLink />
        <EventLink />
      </div>
    </div>
  );
};

export default EventBlock;
