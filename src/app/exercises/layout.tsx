import Link from "next/link";

export default function ExercisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
      <Link href="/" style={{ fontSize: 14, color: "var(--muted)" }}>
        &larr; Back to exercises
      </Link>
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
}
