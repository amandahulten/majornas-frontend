import Posts from "../../components/blogg";
import client from "../../utils/client";

const Event = ({ data }) => <Posts data={data} />;
const getServerSideProps = async (context) => {
  const res = await client.fetch(`

  *[_type == "event"  && slug.current == "${context.query.event}"]{
    _id,
    author,
    eventType,
    body,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "slug": slug.current
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
