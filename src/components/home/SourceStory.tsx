import CTALink from "@/components/global/CTALink";
import MotionVideo from "@/components/global/MotionVideo";
import SectionHeading from "@/components/global/SectionHeading";

const sourceNotes = [
  {
    number: "01",
    title: "A natural starting point",
    text: "Every bottle begins with water, and the place it comes from is part of the impression you make.",
  },
  {
    number: "02",
    title: "A refreshing detail",
    text: "Cold, clear water with your label turns a simple gesture into a memorable brand moment.",
  },
  {
    number: "03",
    title: "Made for your table",
    text: "From meeting rooms to wedding receptions, the bottle feels right at home wherever you serve it.",
  },
];

export default function SourceStory() {
  return (
    <section className="section section--source" id="source">
      <div className="shell source-layout">
        <div className="source-video">
          <MotionVideo
            lazy
            className="source-video__media"
            label="Niagara waterfall flowing in motion"
          />
          <span className="source-video__badge" aria-hidden="true">
            ❄ The Niagara flow
          </span>
        </div>

        <div className="source-copy">
          <SectionHeading
            eyebrow="Behind every bottle"
            title={
              <>
                The source is part of <span className="text-gold">the story.</span>
              </>
            }
            description="A label can make water look like yours. The feeling behind it makes people remember it."
          />
          <ul className="source-notes">
            {sourceNotes.map((note) => (
              <li key={note.number}>
                <span className="source-notes__num">{note.number}</span>
                <div>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <CTALink href="/about" className="source-cta">
            Learn about Niagara
          </CTALink>
        </div>
      </div>
    </section>
  );
}
