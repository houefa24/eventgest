"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/event", label: "Événements" },
    { href: "/admin/events", label: "Admin" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav style={{
            position: "sticky", top: 0, zIndex: 50,
            height: "64px", display: "flex", alignItems: "center",
            justifyContent: "space-between", padding: "0 32px",
            background: "rgba(15,14,23,0.85)", backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
        }}>
            <Link href="/" style={{
                fontFamily: "var(--font-display)", fontSize: "22px",
                color: "var(--text)", textDecoration: "none",
            }}>
                Event<span style={{ color: "var(--accent)" }}>Gest</span>
            </Link>
            <div style={{ display: "flex", gap: "4px" }}>
                {links.map((link) => {
                    const isActive = pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                        <Link key={link.href} href={link.href} style={{
                            padding: "8px 16px", borderRadius: "8px", fontSize: "14px",
                            fontWeight: 500, textDecoration: "none",
                            color: isActive ? "var(--accent-2)" : "var(--text-muted)",
                            background: isActive ? "var(--accent-glow)" : "transparent",
                            border: `1px solid ${isActive ? "var(--border-hover)" : "transparent"}`,
                            transition: "all 0.15s ease",
                        }}>{link.label}</Link>
                    );
                })}
            </div>
        </nav>
    );
}