import { prisma } from "@/src/lib/prisma";
import { deleteEvent } from "../../events.actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function DeleteEventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = await params;
  const event = await prisma.event.findUnique({ where: { id: Number(eventId) } });
  if (!event) notFound();

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto", padding: "48px 24px" }}>
      <div style={{
        background: "var(--surface)", border: "1px solid rgba(239,68,68,0.3)",
        borderRadius: "16px", padding: "40px 32px", textAlign: "center",
      }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🗑️</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "24px", marginBottom: "8px" }}>
          Supprimer cet événement ?
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "8px" }}>
          <strong style={{ color: "var(--text)" }}>{event.title}</strong>
        </p>
        <p style={{ fontSize: "13px", color: "var(--text-faint)", marginBottom: "32px" }}>
          Cette action est irréversible.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link href="/admin/events" style={{
            padding: "10px 20px", background: "var(--surface-2)",
            border: "1px solid var(--border)", borderRadius: "8px",
            color: "var(--text)", fontSize: "14px", textDecoration: "none",
          }}>
            Annuler
          </Link>
          <form action={deleteEvent}>
            <input type="hidden" name="eventId" value={event.id} />
            <button type="submit" style={{
              padding: "10px 20px", background: "var(--danger)",
              border: "none", borderRadius: "8px",
              color: "#fff", fontSize: "14px", cursor: "pointer", fontFamily: "var(--font-body)",
            }}>
              Supprimer définitivement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}