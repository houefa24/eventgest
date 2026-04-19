import { prisma } from "@/src/lib/prisma";
import EventList from "../component/organisms/EventList";

export default async function EventsPage() {
    const events = await prisma.event.findMany({ orderBy: { date: "asc" } });

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "36px", marginBottom: "8px" }}>
                Tous les événements
            </h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>
                {events.length} événement{events.length !== 1 ? "s" : ""} disponible{events.length !== 1 ? "s" : ""}
            </p>
            <EventList events={events} />
        </div>
    );
}