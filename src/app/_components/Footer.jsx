import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-dark dark:border-light">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between lg:flex-col lg:gap-4">
        <span>
          © {currentYear} Diwakar Pandey. All Rights Reserved.
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:diwakarpandey410@gmail.com"
            className="hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;