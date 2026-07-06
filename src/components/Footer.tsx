import { MailIcon } from "./Icons";
import Logo from "./Logo";
import {
  EMAIL,
  LEGAL_NAME,
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
} from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 border-t-4 border-blue">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo variant="light" />
          <a href={`tel:${PHONE_PRIMARY}`} className="text-gray-300 hover:text-blue font-medium transition-colors mt-2">
            {PHONE_PRIMARY_DISPLAY}
          </a>
          <a href={`tel:${PHONE_SECONDARY}`} className="text-gray-300 hover:text-blue font-medium transition-colors">
            {PHONE_SECONDARY_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-gray-300 hover:text-blue font-medium transition-colors flex items-center gap-1.5"
          >
            <MailIcon className="w-4 h-4" />
            {EMAIL}
          </a>
        </div>

        <div className="text-center md:text-right max-w-xs md:max-w-md text-gray-400 text-xs leading-relaxed">
          <p className="mb-2 text-gray-300">{LEGAL_NAME}</p>
          <p className="mb-2">
            Results may vary depending on headlight condition, oxidation severity, damage, and prior restoration
            attempts.
          </p>
          <p>&copy; {new Date().getFullYear()} HeadlightMD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
