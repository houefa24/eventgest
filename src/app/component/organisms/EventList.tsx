"use client";
import EventCard from "../molecules/EventCard"

type Event = {
  id: number
  title: string
  date: Date
  description: string | null
  location: string
}

export default function EventList({ events }: { events: Event[] }) {
  return (
    <div className="grid gap-4">

      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date} location={""} />
      ))}

    </div>
  )
}