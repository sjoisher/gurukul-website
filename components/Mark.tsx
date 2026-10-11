// Havan flame over a kund: the Gurukul's daily sandhya and havan.
export function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#7B4A12" />
      <path d="M24 9c-2 4-6 6.5-6 12a6 6 0 0 0 12 0c0-5.5-4-8-6-12z" fill="#F8E5CC" />
      <path d="M24 17c-1 2-3 3.2-3 6a3 3 0 0 0 6 0c0-2.8-2-4-3-6z" fill="#D9822B" />
      <path d="M12 31c3 3.5 7.2 5 12 5s9-1.5 12-5" fill="none" stroke="#F8E5CC" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M16 36.5h16" stroke="#D9822B" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
