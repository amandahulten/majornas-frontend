import Head from "next/head";
import Books from "../assets/icons/Books";
import PreviewCard from "../components/PreviewCard";
import Slider from "../components/Slider";
import client from "../utils/client";

const Home = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Aktuellt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid gap-6 p-2 max-w-screen-xl mx-auto pb-12">
        <h1>AKTUELLT</h1>
        <div className="grid md:grid-cols-3 gap-2">
          {data.comingEvents.map((event) => (
            <PreviewCard event={event} key={event._id} />
          ))}
        </div>
        <h2 className="text-black-coffee font-bold text-4xl">Kommande event</h2>
        <Slider events={data.comingEventsSlider} />
        <div className="grid md:grid-cols-2 text-black-coffee">
          <article className="flex flex-col gap-2">
            <h2 className="font-bold text-4xl">
              Välkommen in på våra Författarkvällar
            </h2>
            <p className="font-bold">Vi uppskattar alltid finbesök!</p>
            <p>
              Välkommen på författarkvällar! Det anordnas kontinuerligt
              författarkvällar på Majornas böcker & kaffe då du kan höra
              författare berätta om och läsa ur aktuella böcker. Kvällarna
              brukar vara mycket uppskattade!
            </p>
            <p>Nedan ser du bilder från tidigare författarbesök.</p>
          </article>
          <Books className="aspect-square w-1/2 mx-auto hidden md:block" />
        </div>
        <h2 className="font-bold text-4xl text-black-coffee">
          Tidigare författarbesök
        </h2>
        <div className="grid md:grid-cols-3 gap-2">
          {data.pastEvents.map((event) => (
            <PreviewCard event={event} key={event._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await client.fetch(`
  {
  "comingEventsSlider": *[_type == "event" && publishedAt > now()]{
    _id,
    author,
    eventType,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "slug": slug.current
  }|order(dateTime(publishedAt) asc)[0..4],
  "comingEvents": *[_type == "event"  && publishedAt > now()]{
    _id,
    author,
    eventType,
    body,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "slug": slug.current
  }|order(publishedAt asc)[0..2],
  "pastEvents" : *[_type == "event" && publishedAt < now()]{
    _id,
    author,
    eventType,
    body,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "slug": slug.current
  }|order(publishedAt desc)[0..2]
}
`);
  return {
    props: {
      data: {
        comingEvents: res.comingEvents,
        comingEventsSlider: res.comingEventsSlider,
        pastEvents: res.pastEvents,
      },
    },
  };
};

export default Home;
