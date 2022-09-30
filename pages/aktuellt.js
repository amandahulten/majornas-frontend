import Head from "next/head";
import Books from "../assets/icons/Books";
import PreviewCard from "../components/PreviewCard";
import Slider from "../components/Slider";
import client from "../utils/client";

const Home = ({ data }) => {
  return (
    <div className="grid gap-6 p-2 bg-whiteish max-w-screen-xl mx-auto">
      <Head>
        <title>Aktuellt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl lg:text-8xl font-bold font-courier-prime">
        Aktuellt
      </h1>
      <div className="grid md:grid-cols-3 gap-2">
        {data.comingEvents.map((event) => (
          <PreviewCard event={event} key={event._id} />
        ))}
      </div>
      <h2 className="font-bold text-4xl">Kommande event</h2>
      <Slider events={data.comingEventsSlider} />
      <div className="grid md:grid-cols-2">
        <article className="flex flex-col gap-2">
          <h2 className="font-bold text-4xl">
            Välkommen in på våra Författarkvällar
          </h2>
          <p className="font-bold">Vi uppskattar alltid finbesök!</p>
          <p>
            Här på Majornas Bokhandel & Kaffe vill vi alltid hitta tid för våra
            favoritförfattare och därmed bjuda över dem på en frågestund. Har du
            någon författare du skulle vilja se i butiken? Några frågor som inte
            du kan släppa? Maila till oss HÄR ifall du önskar se en särskild
            författare.
          </p>
          <p>Nedan ser du våra författare från tidigare besök.</p>
        </article>
        <Books className="aspect-square w-1/2 mx-auto hidden md:relative" />
      </div>
      <h2 className="font-bold text-4xl">Tidigare författarbesök</h2>
      <div className="grid md:grid-cols-3 gap-2">
        {data.pastEvents.map((event) => (
          <PreviewCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

const getStaticProps = async (context) => {
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

export { getStaticProps };
export default Home;
