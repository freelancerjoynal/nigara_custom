import { whatsappChatUrl } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppChat() {
  return (
    <a
      className="whatsapp-chat"
      href={whatsappChatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-chat__label" aria-hidden="true">
        <span className="whatsapp-chat__label-small">Need help?</span>
        <span className="whatsapp-chat__label-main">Chat with us</span>
      </span>
      <span className="whatsapp-chat__icon" aria-hidden="true">
        <WhatsAppIcon />
      </span>
    </a>
  );
}
