import Link from "next/link";
import { FiCoffee } from "react-icons/fi";

function Footer({ language }: { language: "en" | "es" }) {
  return (
    <footer>
      <Link
        href="https://github.com/davidfcopozo/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          {language === "en"
            ? "Built by David Francisco with"
            : "Desarrollado por David Francisco con"}{" "}
          {<FiCoffee />}.
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
