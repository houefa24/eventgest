"use server";

import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";

export async function createEvent(data: FormData) {
    const title = String(data.get("title"));
    const description = String(data.get("description") || "");
    const location = String(data.get("location"));
    const date = new Date(String(data.get("date")));

    await prisma.event.create({
        data: {
            title, description, location, date
        },
    });
    redirect("/admin/events");
}

export async function updateEvent(data: FormData) {
    const id = Number(data.get("eventId"));
    const title = String(data.get("title"));       // ← bug corrigé (était "name")
    const description = String(data.get("description") || "");
    const location = String(data.get("location"));
    const date = new Date(String(data.get("date")));

    await prisma.event.update({
        where: { id },
        data: {
            title, description, location, date
        },
    });
    redirect("/admin/events");
}

export async function deleteEvent(data: FormData) {
    const id = Number(data.get("eventId"));
    await prisma.event.delete({ where: { id } });
    redirect("/admin/events");
}
