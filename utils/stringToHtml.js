/**
 * Converts string to jsx
 * 
 * @param {string} string 
 * @returns {JSX.Element[]}
 */

const stringToHtml = (string) => {
  return string.split("\n").map((x) => (
    <p>
      {x}
      <br />
    </p>
  ));
};

export default stringToHtml;
