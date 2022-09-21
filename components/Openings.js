const Openings = () => {
  return (
    <div className="bg-temp-päron p-4 mb-4 md:h-48">
      <h2 className="text-xl mb-3">Öppettider</h2>
      <div className="flex gap-8 md:hidden">
        <div>
          <p>Tisdag - Fredag</p>
          <p>Lördag</p>
          <p>Söndag - Måndag</p>
        </div>
        <div className="font-bold">
          <p>11:00 - 18:00</p>
          <p>11:00 - 15:00</p>
          <p>Stängt</p>
        </div>
      </div>
      <div className="hidden md:flex gap-8">
        <div>
          <p>Måndag</p>
          <p>Tis - Fre</p>
          <p>Lördag</p>
          <p>Söndag</p>
        </div>
        <div className="font-bold">
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
