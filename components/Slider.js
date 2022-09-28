import headshot from "../assets/headshot.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarIcon from "../assets/icons/CalendarIcon";

const Slider = ({ events }) => {
  const images = [...events].map((x) => {
    return { ...x, time: setDate(x.publishedAt) };
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
    <div className="grid grid-cols-3">
      <div className="aspect-video relative w-full">
        <Image src={images[active].imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-2">
        {images.map((x, i) => (
          <div
            key={i}
            data-id={i}
            onMouseEnter={() => mouseIn(i)}
            onMouseLeave={mouseOut}
            className={`w-full p-2 text-left ${
              active !== i ? "bg-temp-ey" : "bg-tumbleweed"
            }`}
          >
            <div className="flex gap-2">
              <CalendarIcon className="w-2 aspect-square" />
              <time dateTime={x.time}>{x.time}</time>
            </div>
            {x.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
