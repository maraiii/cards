const Card = ({ title, copy, index }) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="card-img">
          <img src={`/card-${index + 1}.jpg`} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const cards = [
    {
      title: "Brand Foundation",
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interation.",
    },
    {
      title: "Brand Foundation",
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interation.",
    },
    {
      title: "Brand Foundation",
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interation.",
    },
    {
      title: "Brand Foundation",
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interation.",
    },
  ];

  return (
    <div className="app">
      <section className="hero">
        <img src="/card-1.jpg" alt="cloud" />
      </section>
      <section className="intro">
        <h1>
          Creating standout brands for startups that bring joy and leave lasting
          impressions.
        </h1>
      </section>
      <section className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
      <section className="outro">
        <h1>Let&apos;s build a brand that leaves a mark.</h1>
      </section>
    </div>
  );
}
