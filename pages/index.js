import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
export default function Home({ exploreData , gigsData , partiesData}) {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>NILI</title>
        <link rel="icon" href="/NILI.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore near by 🚀</h1>
          <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
{exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
          </div>
          
        </section>
        <section>
          
          <h2 className="text-4xl font-semibold py-8">Cool Parties 💃</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
{partiesData?.map((item) => (
            <MediumCard img={item.img} title={ item.title} key={item.img} />
          ))}
          </div>
          
        </section>
        <section>
          
          <h2 className="text-4xl font-semibold py-8">Hot Chillouts 💦⚡</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
{gigsData?.map((item) => (
            <MediumCard img={item.img} title={ item.title} key={item.img} />
          ))}
          </div>
          
        </section>
        <LargeCard img="/LargeCard2.jpg"
          title="The Greatest Gigs👻"
          description="Curated by NILI"
          buttonText="Dive In 💦"
        />
      </main>
        <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/hello").then(
    (res) => res.json()
  );
  const gigsData = await fetch("http://localhost:3000/api/exploregigs").then((res) => res.json());
   const partiesData = await fetch("http://localhost:3000/api/exploreParties").then((res) => res.json());
  return {
    props: {
      exploreData,
      gigsData,
      partiesData,
    },
  };
}
