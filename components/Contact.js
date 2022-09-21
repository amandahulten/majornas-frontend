const Contact = () => {
  return (
    <div className="bg-temp-ey p-4 mt-3">
      <h2 className="text-xl mb-3">Kontaktuppgifter</h2>
      <p>Allmänna vägen 22</p>
      <p className="mb-2">414 60 Göteborg</p>
      <p className="flex items-center gap-2">
        <MailIcon />
        info@majornasbocker.se
      </p>
      <p className="flex items-center gap-2">
        <PhoneIcon />
        076-341 40 00
      </p>
    </div>
  );
};

export default Contact;
