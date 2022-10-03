import Posts from "../../components/blogg";
import client from "../../utils/client";

const Event = ({ data }) => <Posts data={data} />;
const getServerSideProps = async (context) => {
  const res = await client.fetch(`
  {
  "post": *[_type == "event"  && slug.current == "${context.query.event}"]{
    _id,
    author,
    eventType,
    body,
    "imageUrl": mainImage.asset->url,
    publishedAt, 
    "slug": slug.current,
    "prev": *[_type == "event" && (dateTime(publishedAt) < dateTime(^.publishedAt)) ]{"slug":slug.current}|order(publishedAt desc)[0],
    "next": *[_type == "event" && (dateTime(publishedAt) > dateTime(^.publishedAt)) ]{"slug":slug.current}|order(publishedAt asc)[0],
  }[0],
}
`);
  return {
    props: {
      data: res.post,
    },
  };
};

export { getServerSideProps };
export default Event;
