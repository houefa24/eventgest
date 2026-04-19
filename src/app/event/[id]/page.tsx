import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function DetailEventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const event = await prisma.event.findUnique({ where: { id: Number(id) } });
    if (!event) notFound();

    const upcoming = new Date(event.date) >= new Date();

    return (
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 24px" }}>
            <Link href="/event" style={{ fontSize: "13px", color: "var(--text-faint)", textDecoration: "none", display: "inline-block", marginBottom: "32px" }}>
                ← Tous les événements
            </Link>

            <div style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "20px", overflow: "hidden",
            }}>
                {/* Header coloré */}
                <div style={{
                    padding: "40px 40px 32px",
                    borderBottom: "1px solid var(--border)",
                    background: upcoming
                        ? "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, transparent 60%)"
                        : "linear-gradient(135deg, rgba(92,90,126,0.1) 0%, transparent 60%)",
                }}>
                    <span style={{
                        display: "inline-block", padding: "4px 12px",
                        background: upcoming ? "var(--accent-glow)" : "var(--surface-2)",
                        border: `1px solid ${upcoming ? "var(--border-hover)" : "var(--border)"}`,
                        borderRadius: "20px", fontSize: "12px",
                        color: upcoming ? "var(--accent-2)" : "var(--text-faint)",
                        marginBottom: "16px",
                    }}>
                        {upcoming ? "À venir" : "Événement passé"}
                    </span>
                    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 1.2 }}>
                        {event.title}
                    </h1>
                </div>

                <div style={{ padding: "32px 40px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
                        <div style={{ background: "var(--bg-2)", borderRadius: "10px", padding: "16px" }}>
                            <p style={{ fontSize: "11px", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Date</p>
                            <p style={{ fontSize: "16px", fontWeight: 500 }}>
                                {new Date(event.date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                            </p>
                        </div>
                        <div style={{ background: "var(--bg-2)", borderRadius: "10px", padding: "16px" }}>
                            <p style={{ fontSize: "11px", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>Lieu</p>
                            <p style={{ fontSize: "16px", fontWeight: 500 }}>{event.location}</p>
                        </div>
                    </div>

                    {event.description && (
                        <div>
                            <p style={{ fontSize: "11px", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Description</p>
                            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "15px" }}>{event.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}