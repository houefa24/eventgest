"use client";
type Props = {
  children: React.ReactNode
}

export default function Label({ children }: Props) {
  return (
    <label className="text-lg font-semibold">
      {children}
    </label>
  )
}