const Openings = ({ className }) => {
  return (
    <div className={`text-black-coffee bg-temp-päron p-4 ${className}`}>
      <h2 className="text-xl md:text-2xl mb-3 font-semibold">Öppettider</h2>
      <div className="flex md:hidden justify-between">
        <div className="flex flex-col gap-2">
          <p>Tisdag - Fredag</p>
          <p>Lördag</p>
          <p>Söndag - Måndag</p>
        </div>
        <div className="lg:font-bold flex flex-col gap-2">
          <p>11:00 - 18:00</p>
          <p>11:00 - 15:00</p>
          <p>Stängt</p>
        </div>
      </div>
      <div className="hidden md:flex justify-between ">
        <div className="flex flex-col gap-2">
          <p>Måndag</p>
          <p>Tis - Fre</p>
          <p>Lördag</p>
          <p>Söndag</p>
        </div>
        <div className="lg:font-bold flex flex-col gap-2">
          <p>Stängt</p>
          <p>11:00 - 18:00</p>
          <p>11:00 - 15:00</p>
          <p>Stängt</p>
        </div>
      </div>
    </div>
  );
};

export default Openings;
