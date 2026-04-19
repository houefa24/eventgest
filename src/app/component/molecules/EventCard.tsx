import Link from "next/link";

type Props = {
  id: number;
  title: string;
  date: Date;
  description?: string | null;
  location: string;
};

export default function EventCard({ id, title, date, description, location }: Props) {
  const upcoming = new Date(date) >= new Date();
  return (
    <Link href={`/event/${id}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "12px", padding: "20px 24px",
        cursor: "pointer", transition: "all 0.2s ease", position: "relative",
      }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "var(--border-hover)";
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = "0 8px 32px var(--accent-glow)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "var(--border)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, width: "3px", height: "100%",
          background: upcoming ? "var(--accent)" : "var(--text-faint)",
          borderRadius: "12px 0 0 12px",
        }} />
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", marginBottom: "6px" }}>{title}</h3>
        {description && <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "10px" }}>{description}</p>}
        <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "var(--text-faint)" }}>
          <span>📍 {location}</span>
          <span>📅 {new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
      </div>
    </Link>
  );
}