import { useLayoutEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { pastEvent, pastArtist, anchor, comedy } from "../../data/pastEvents";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import EventCard from "../eventCard/eventCard";
import styles from "./prevGoonj.module.scss";
import { events } from "@/data/events";
import EventTile from "../eventTile/eventTile";
import Link from "next/link";
import footerstyles from "@/styles/footer.module.scss";
gsap.registerPlugin(ScrollTrigger);
export default function PrevGoonj({ refer }: prevGoonjProp) {
  const ref = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
          // markers:true,
        },
      });
      tl.to("#scrollDown", { opacity: 0 }, 0);
      tl.to(bg.current, { backgroundColor: "rgba(0,0,0,.7)" }, 0);
      tl.to("#dancers", { opacity: 0 }, 0);
      tl.to("#dancers1", { opacity: 0 }, 0);
      tl.to("#dancers2", { opacity: 0 }, 0);
      tl.to("#tagLine", { opacity: 0 }, 0);
    }, [refer]);
    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, [refer, ref]);

  return (
    <>
      <div className={styles.container} ref={bg}>
        <div className={styles.first}>
          <p>
            Goonj is the annual Techno-Cultural fest of University Institute of
            Engineering and Technology (UIET) is going to be organised by the
            students of the University. The spirit of the fest is to promote the
            cultural as well as the technical alacrity among the students.
            Moreover, the motive is to spread a zeal among students relieving
            them from the stressful schedule of an engineering atmosphere.
          </p>
          <h2>Glimpse of Goonj</h2>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/48SC6qk2MDY?si=q-nmDroPd6Y1qPDI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          

          <h2>Events</h2>
          <div className={styles.pastEvents}>
            {events.slice(0, 6).map((event, index) => {
              return (
                <EventCard
                  {...event}
                  alt={event.alt.toUpperCase()}
                  key={index}
                />
              );
            })}
          </div>
          <Link href="/events" style={{ width: "250px" }}>
            {" "}
          </Link>
          {/* <p>
          *Most of the cash prizes have already been distributed by us. In case
          of any Pending prize money please contact Prof. Harbhinder Singh,
          Incharge, Spot purchase committee, Goonj 2023, Contact at 9316103516.
        </p> */}
          {/* <a href="/events" id={styles.MoreEvents}>
            <div>More Events</div>
          </a> */}
<div className={styles.loadingContainer}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
    </div>
    <h2>Past Performers</h2>

    <div className={styles.stars}>
            <div className="Star Night">
              <h2>Star Night</h2>
              <div className={styles.pastArtists}>
                {pastArtist.map((artist, index) => {
                  return <EventTile {...artist} key={index} />;
                })}
              </div>
            </div>
            <div className="Comedy Night">
            <h2>RJ</h2>
            <div className={styles.pastArtists}>
              {anchor.map((artist, index) => {
                return <EventTile {...artist} key={index} />;
              })}
            </div>
          </div>
          <div className="Comedy Night">
            <h2>Comedian</h2>
            <div className={styles.pastArtists}>
              {comedy.map((artist, index) => {
                return <EventTile {...artist} key={index} />;
              })}
            </div>
          </div>
          </div>
          <h2>Past Events</h2>
          <div className={styles.pastEvents2}>
            {pastEvent.map((event, index) => {
              return <EventTile {...event} key={index} />;
            })}
          </div>
        </div>
      </div>
      <div className={footerstyles.footer} style={{ background: "#000" }}>
        <div className={styles.line}></div>
        <p style={{ color: "white" }}> Designed and Developed by © Goonj&apos;25 Digital Operations</p>
      </div>
    </>
  );
}
