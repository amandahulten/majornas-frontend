import Image from "next/image";
import Link from "next/link";
import Arrow from "../components/svgs/Arrow";
import Back from "../components/svgs/Back";

const Posts = () => {
  return (
    <div className="relative flex flex-col content-center pt-4">
      <div className="relative w-full h-screen">
        <Image src="/bok.png" layout="fill" objectFit="cover"></Image>
      </div>
      <div className="pt-4">
        <h2 className=" uppercase font-['Courier-prime'] text-5xl">
          Jag ser allt du gör
        </h2>
        <h4 className="text-2xl	pt-4">27/10/2022</h4>
        <p className="text-lg w-2/3	pt-4 pb-8">
          Vårt boktips denna veckan är “Jag ser allt du gör” av Annika Norlin.
          På vägen mellan Jokkmokk och Kåbdalis, i skuggan av den största sorgen
          man kan bära, börjar en sång växa fram. Inget märkvärdigt, fem strofer
          bara, men kvinnan som sjunger dem känner hur stegen går lättare för
          varje rad. Hon går söderut. <br />
          <br />I sin skönlitterära debut skriver Annika Norlin om en samling
          människor i rörelse, på skav mot tillvaron. Det är noveller om begär
          och bekräftelse, om kultfilmen Aliens vid Piteälven, om att spela i
          det ganska hopplösa bandet Personligt Varumärke och om att gå rakt in
          i natten med sikte mot Glommersträsk. <br /> <br /> Om man måste lyfta
          fram en enda av Annika Norlins många storheter så är det hennes
          förmåga att med exakthet sätta ord på vardagliga känslor och
          funderingar. I novellerna i debutboken visar hon det lika tydligt som
          i sin musik." - Annah Björk, Bäst just nu i Svenska Dagbladet
        </p>

        <div className="flex underline font-['Courier-prime'] gap-4 pb-8 cursor-pointer">
          <div className="flex items-center text-center gap-2">
            <Image
              src="/logo-insta-dark.svg"
              alt="instagram-logo"
              height="30"
              width="30"
              fill="#000"
            />
            <p>Dela</p>
          </div>
          <div className="flex items-center text-center  gap-2">
            <Image
              src="/logo-fb-dark.svg"
              alt="facebook-logo"
              height="30"
              width="30"
            />
            <p>Dela</p>
          </div>
          <div className="flex items-center text-center  gap-2">
            <Image src="/copy.svg" alt="copy-logo" height="30" width="30" />
            <p>Kopiera länk</p>
          </div>
        </div>
        <div className="flex font-bold gap-4 w-2/3 pb-12">
          <div className="flex justify-center items-center gap-3 h-16 w-1/2 lg:w-full bg-temp-ey text-black-coffee">
            <Back color="#322A2E" />
            <Link href="/">
              <a className="text-lg underline font-['Courier-prime']">
                Tidigare
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 h-16  w-1/2 lg:w-full bg-tumbleweed text-black-coffee">
            <Link href="/">
              <a className="text-lg underline font-['Courier-prime']">Nästa</a>
            </Link>
            <Arrow color="#322A2E" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
