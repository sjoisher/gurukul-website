import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("gu");

export default function Page() {
  return <HomePage lang="gu" />;
}
