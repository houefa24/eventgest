"use client";
type Props = {
  name: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
};

export default function Input({ name, placeholder, type = "text", defaultValue, required }: Props) {
  return (
    <input name={name} type={type} placeholder={placeholder}
      defaultValue={defaultValue} required={required}
      style={{
        width: "100%", padding: "10px 14px",
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "8px", color: "var(--text)",
        fontSize: "14px", fontFamily: "var(--font-body)", outline: "none",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease",
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
  );
}