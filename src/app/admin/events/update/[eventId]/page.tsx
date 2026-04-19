import { prisma } from "@/src/lib/prisma";
import EventForm from "@/src/app/component/organisms/EventForm";
import { updateEvent } from "../../events.actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function UpdateEventPage({ params }: { params: Promise<{ eventId: string }> }) {
    const { eventId } = await params;
    const event = await prisma.event.findUnique({ where: { id: Number(eventId) } });
    if (!event) notFound();

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 24px" }}>
            <Link href="/admin/events" style={{ fontSize: "13px", color: "var(--text-faint)", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
                ← Retour
            </Link>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", marginBottom: "32px" }}>
                Modifier l'événement
            </h1>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
                <EventForm action={updateEvent} event={event} submitLabel="Enregistrer les modifications" />
            </div>
        </div>
    );
}