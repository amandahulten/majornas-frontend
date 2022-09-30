import Posts from "../components/blogg";
import client from "../utils/client";

const Event = ({ data }) => <Posts data={data} />;
const getServerSideProps = async (context) => {
  const res = await client.fetch(`

  *[_type == "boktips"]{
    _id,
    author,
    body,
    "imageUrl": mainImage.asset->url,
    publishedAt,
  }[0]

`);

  return {
    props: {
      data: res,
    },
  };
};

export { getServerSideProps };
export default Event;
