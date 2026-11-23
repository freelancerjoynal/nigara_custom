type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell">
        <div className="page-hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__lead">{description}</p>
          {children}
        </div>
      </div>
      <div className="page-hero__rule" aria-hidden="true" />
    </section>
  );
}
