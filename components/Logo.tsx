// The Gurukul's emblem (256 × 216, transparent background).
export function Logo({ className = "h-11 w-auto", alt = "" }: { className?: string; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/logo.png" alt={alt} width={256} height={216} className={className} />
  );
}
