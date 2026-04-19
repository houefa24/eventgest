import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import EventList from "./component/organisms/EventList";

export default async function Home() {
  const upcomingEvents = await prisma.event.findMany({
    where: { date: { gte: new Date() } },
    orderBy: { date: "asc" },
    take: 3,
  });

  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: "100px 24px 80px",
        textAlign: "center",
        background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(42px, 6vw, 72px)",
          lineHeight: 1.1,
          marginBottom: "20px",
          letterSpacing: "-0.02em",
        }}>
          Gérez vos événements<br />
          <em style={{ color: "var(--accent-2)", fontStyle: "italic" }}>sans effort.</em>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 40px" }}>
          Créez, modifiez et suivez tous vos événements depuis une interface centralisée.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link href="/event" style={{
            padding: "12px 28px", background: "var(--accent)", color: "#fff",
            borderRadius: "10px", textDecoration: "none", fontSize: "15px", fontWeight: 500,
          }}>
            Voir les événements
          </Link>
          <Link href="/admin/events/add" style={{
            padding: "12px 28px", background: "var(--surface-2)", color: "var(--text)",
            border: "1px solid var(--border)", borderRadius: "10px",
            textDecoration: "none", fontSize: "15px",
          }}>
            Créer un événement
          </Link>
        </div>
      </section>

      {/* Prochains événements */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "28px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}>Prochains événements</h2>
          <Link href="/event" style={{ fontSize: "13px", color: "var(--accent-2)", textDecoration: "none" }}>
            Voir tout →
          </Link>
        </div>
        <EventList events={upcomingEvents} />
      </section>
    </div>
  );
}