"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

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
    {
      title: "Brand Foundation",
      copy: "The heart of your company's story. It shapes your vision, values, and voice, ensuring a clear and powerful impact in every interation.",
    },
  ];

  const container = useRef();
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top+=100",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top top+=100",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: container }
  );

  const textRef = useRef();

  useEffect(() => {
    const words = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.7,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  const sentence = [
    { text: "Think.", color: "aquamarine" },
    { text: "Observe.", color: "antiquewhite" },
    { text: "Be.", color: "cornflowerblue" },
  ];

  return (
    <ReactLenis root>
      <div className="app" ref={container}>
        <section className="hero">
          <h1 ref={textRef}>
            {sentence.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word.color,
                  marginRight: index < sentence.length - 1 ? "8px" : "0px",
                }}
              >
                {word.text}
              </span>
            ))}
          </h1>
        </section>
        <section className="intro">
          <h1>
            Creating standout brands for startups that bring joy and leave
            lasting impressions.
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
    </ReactLenis>
  );
}
