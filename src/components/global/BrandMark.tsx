import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  variant?: "header" | "footer";
};

export default function BrandMark({ variant = "header" }: BrandMarkProps) {
  if (variant === "footer") {
    return (
      <Link href="/" className="brand-mark brand-mark--footer" aria-label="Niagara Custom Water — home">
        <Image
          src="/pictures/logo-transparent.png"
          alt="Niagara Custom Water"
          width={880}
          height={1202}
          className="brand-mark__logo brand-mark__logo--footer"
          sizes="80px"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="brand-mark brand-mark--header" aria-label="Niagara Custom — home">
      <Image
        src="/pictures/logo-white.jpg"
        alt=""
        width={880}
        height={1202}
        className="brand-mark__logo"
        sizes="90px"
        priority
      />
      <span className="brand-mark__words" aria-hidden="true">
        <span className="brand-mark__name">Niagara</span>
        <span className="brand-mark__sub">Custom</span>
      </span>
    </Link>
  );
}
