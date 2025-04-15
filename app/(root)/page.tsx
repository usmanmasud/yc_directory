import SearchForm from "@/components/SearchForm";
import SearchFormReset from "@/components/SearchFormReset";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: "33",
      author: { _id: 1, name: "usman masud" },
      _id: 1,
      description: "this is a desctip",
      category: "education",
      title: "Test tittle",
      image: "https://usmanmasud.vercel.app/brainwavw.png",
    },
  ];

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">NO startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
