import headshot from "../assets/headshot.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarIcon from "../assets/icons/CalendarIcon";
import RightArrowIcon from "../assets/icons/RightArrowIcon";
import Link from "next/link";

const Slider = ({ events }) => {
  const images = [...events].map((x) => {
    return {
      ...x,
      time: setDate(x.publishedAt),
      typ: setEventType(x.eventType),
    };
  });
  const delay = 3000;
  const [active, setActive] = useState(0);
  const timeoutRef = React.useRef(null);
  const [playing, setPlaying] = useState(true);

  function setDate(rawdate) {
    const date = new Date(rawdate);

    return date.toLocaleDateString("sv-SE", {
      day: "numeric",
      month: "numeric",
    });
  }

  function setEventType(eventType) {
    switch (eventType) {
      case "authorEvening":
        return "Författarkväll";
      case "bookcircle":
        return "Bokcirkel";
    }
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (playing) {
      timeoutRef.current = setTimeout(
        () =>
          setActive((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [active, playing]);

  const mouseIn = (index) => {
    setPlaying(false);
    setActive(index);
  };

  const mouseOut = () => {
    setPlaying(true);
    setActive((prev) => prev);
  };

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-5 gap-2">
      <div className="aspect-video md:aspect-square lg:aspect-video relative w-full md:row-span-5">
        <Image
          src={images[active].imageUrl}
          fill
          className="object-cover"
          alt={images[active].author}
        />
      </div>
      {images.map((x, i) => (
        <div
          key={i}
          data-id={i}
          onMouseEnter={() => mouseIn(i)}
          onMouseLeave={mouseOut}
          className={`w-full h-full px-2 py-2 md:py-0 flex justify-between items-center ${
            active !== i ? "bg-temp-ey" : "bg-tumbleweed"
          }`}
        >
          <div className="text-black-coffee text-xl">
            <div className="flex gap-2 font-bold">
              <CalendarIcon className="w-5 aspect-square" />
              <time dateTime={x.publishedAt}>{x.time}</time>
            </div>
            <p>
              {x.typ}: {x.author}
            </p>
          </div>
          <Link href={"/event/" + x.slug}>
            <RightArrowIcon className="w-8 flex-1 text-black-coffee" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Slider;
