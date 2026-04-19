"use client";
import Input from "../atoms/Input"
import Button from "../atoms/Button"
import Label from "../atoms/Label"

type Event = {
  id: number;
  title: string;
  description: string | null;
  date: Date;
  location: string;
}

type Props = {
  action: (data: FormData) => Promise<void>;
  event?: Event;
  submitLabel?: string;
};

export default function EventForm({ action, event, submitLabel = "Enregistrer" }: Props) {
  const defaultDate = event
    ? new Date(event.date).toISOString().split("T")[0]
    : "";

  return (
    <form action={action} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {event && <input type="hidden" name="eventId" value={event.id} />}

      <div>
        <Label>Title *</Label>
        <Input name="title" placeholder="Nom de l'événement" defaultValue={event?.title} required />
      </div>
      <div>
        <Label>Description</Label>
        <textarea
          name="description"
          placeholder="Décrivez l'événement..."
          defaultValue={event?.description ?? ""}
          style={{
            width: "100%", padding: "10px 14px",
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "8px", color: "var(--text)", fontSize: "14px",
            fontFamily: "var(--font-body)", outline: "none",
            resize: "vertical", minHeight: "100px",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "var(--accent)";
            e.target.style.boxShadow = "0 0 0 3px var(--accent-glow)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "var(--border)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <Label>Date *</Label>
          <Input name="date" type="date" defaultValue={defaultDate} required />
        </div>

        <div>
          <Label>Lieu *</Label>
          <Input name="location" placeholder="Paris, salle Pleyel..." defaultValue={event?.location} required />
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", paddingTop: "8px" }}>
        <Button type="submit" variant="primary">{submitLabel}</Button>
      </div>
    </form>
  );
}