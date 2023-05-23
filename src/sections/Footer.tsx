import Link from "next/link";
import { FiCoffee } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/davidfcopozo/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          Built by David Francisco with {<FiCoffee />}.
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
