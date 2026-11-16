import { whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CARLUKZ on WhatsApp"
      className="animate-pulse-ring fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-foreground shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
