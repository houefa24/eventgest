import EventForm from "@/src/app/component/organisms/EventForm";
import { createEvent } from "../events.actions";
import Link from "next/link";

export default function AddEventPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "48px 24px" }}>
      <Link href="/admin/events" style={{ fontSize: "13px", color: "var(--text-faint)", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
        ← Retour
      </Link>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "28px", marginBottom: "32px" }}>
        Nouvel événement
      </h1>
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "16px", padding: "32px" }}>
        <EventForm action={createEvent} submitLabel="Créer l'événement" />
      </div>
    </div>
  );
}