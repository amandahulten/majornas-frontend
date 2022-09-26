import Image from "next/image";
import Instagram from "../components/Instagram";
import { images } from "../next.config";

export const About = (feed) => {
  console.log(feed.feed.data);
  const images = feed.feed.data;
  return (
    <div>
      <title>Majornas böcker & kaffe</title>
      <link rel="icon" href="/favicon.ico" />
      <h1 className="text-3xl font-h1 mb-4">OM OSS</h1>
      <Image
        src="/about-book.png"
        width="343"
        layout="responsive"
        height="226"
        alt="books"
      ></Image>
      <div className="w-full bg-temp-päron p-4">
        <p>Oberoende bokhandel med med härligt kaffehäng!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="bg-temp-ey">ALLTID NYBAKAT</div>
      <div className="bg-tumbleweed">Hitta hit</div>
      <div className="bg-black-coffee">Eva Wadman</div>
      <Image
        src="/about-eva.png"
        layout="responsive"
        width="343"
        height="402"
        alt="author"
      ></Image>

      <Instagram></Instagram>
      <div>
        {images &&
          images.map((image) => (
            <div key={image.id}>
              <img src={image.media_url} alt={image.caption} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();
  console.log(feed);

  return {
    props: {
      feed,
    },
  };
};
