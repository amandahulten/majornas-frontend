const stringToHtml = (string) => {
  return string.split("\n").map((x) => (
    <p>
      {x}
      <br />
    </p>
  ));
};

export default stringToHtml;
