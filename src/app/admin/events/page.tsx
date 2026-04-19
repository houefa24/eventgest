import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { deleteEvent } from "./events.actions";

export default async function AdminEventsPage() {
    const events = await prisma.event.findMany({ orderBy: { date: "asc" } });

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontFamily: "var(--font-display)", fontSize: "32px", marginBottom: "4px" }}>
                        Gestion des événements
                    </h1>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                        {events.length} événement{events.length !== 1 ? "s" : ""}
                    </p>
                </div>
                <Link href="/admin/events/add" style={{
                    padding: "10px 20px", background: "var(--accent)", color: "#fff",
                    borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: 500,
                }}>
                    + Nouveau
                </Link>
            </div>

            {events.length === 0 ? (
                <p style={{ color: "var(--text-faint)", textAlign: "center", padding: "60px 0" }}>Aucun événement.</p>
            ) : (
                <div className="stagger" style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", borderRadius: "12px", overflow: "hidden" }}>
                    {events.map((event) => (
                        <div key={event.id} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "16px 20px", background: "var(--surface)", gap: "16px",
                        }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontWeight: 500, marginBottom: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {event.title}
                                </p>
                                <p style={{ fontSize: "12px", color: "var(--text-faint)" }}>
                                    {new Date(event.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                                    {" · "}{event.location}
                                </p>
                            </div>
                            <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                                <Link href={`/admin/events/update/${event.id}`} style={{
                                    padding: "6px 14px", background: "var(--surface-2)",
                                    border: "1px solid var(--border)", borderRadius: "6px",
                                    color: "var(--text-muted)", fontSize: "13px", textDecoration: "none",
                                }}>
                                    Modifier
                                </Link>
                                <Link href={`/admin/events/delete/${event.id}`} style={{
                                    padding: "6px 14px", background: "var(--danger-muted)",
                                    border: "1px solid rgba(239,68,68,0.3)", borderRadius: "6px",
                                    color: "var(--danger)", fontSize: "13px", textDecoration: "none",
                                }}>
                                    Supprimer
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}