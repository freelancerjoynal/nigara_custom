import Link from "next/link";

type CTALinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function CTALink({
  href,
  children,
  variant = "primary",
  className = "",
}: CTALinkProps) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`.trim()}>
      {children}
      <span aria-hidden="true" className="btn__arrow">
        →
      </span>
    </Link>
  );
}
