import Link from "next/link";

export default function BrandMark() {
  return (
    <Link href="/" className="brand-mark" aria-label="Niagara Custom Water — home">
      <span className="brand-mark__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" role="presentation">
          <path
            d="M16 2.5c4.8 6.1 9.4 11.2 9.4 16.3A9.4 9.4 0 0 1 16 28.2a9.4 9.4 0 0 1-9.4-9.4C6.6 13.7 11.2 8.6 16 2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10.6 19.2c.6 3 2.8 5 5.8 5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-mark__words">
        <span className="brand-mark__name">NIAGARA</span>
        <span className="brand-mark__sub">CUSTOM WATER</span>
      </span>
    </Link>
  );
}
