"use client";
type Variant = "primary" | "secondary" | "danger" | "ghost";
type Props = {
  children: React.ReactNode;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const styles: Record<Variant, React.CSSProperties> = {
  primary: { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" },
  secondary: { background: "var(--surface-2)", color: "var(--text)", border: "1px solid var(--border)" },
  danger: { background: "var(--danger-muted)", color: "var(--danger)", border: "1px solid rgba(239,68,68,0.3)" },
  ghost: { background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border)" },
};

export default function Button({ children, variant = "primary", type = "button", onClick }: Props) {
  return (
    <button type={type} onClick={onClick} style={{
      ...styles[variant],
      padding: "10px 20px", borderRadius: "8px",
      fontSize: "14px", fontWeight: 500,
      fontFamily: "var(--font-body)", cursor: "pointer",
      transition: "all 0.15s ease",
    }}>
      {children}
    </button>
  );
}