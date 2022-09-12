import Arrow from "../svgs/Arrow";
import Date from "../svgs/Date";

const EventLink = () => {
  const date = "27/10";
  const author = "JK Rowling";
  return (
    <a
      href="/bokklubb"
      className="flex  justify-between items-center h-[74px] lg:h-[84px] py-2 px-4  bg-temp-ey"
    >
      <div>
        <div className="flex gap-3 mb-2">
          <Date />
          <p>{date}</p>
        </div>
        <p>Författarkväll: {author}</p>
      </div>
      <div>
        <Arrow />
      </div>
    </a>
  );
};

export default EventLink;
