/**
 * Converts string to jsx
 *
 * @param {string} string
 * @returns {JSX.Element[]}
 */

const stringToHtml = (string) => {
  if ((string === undefined) | (string === null)) return;
  return string.split("\n").map((x, i) => (
    <p key={i}>
      {x}
      <br />
    </p>
  ));
};

export default stringToHtml;
