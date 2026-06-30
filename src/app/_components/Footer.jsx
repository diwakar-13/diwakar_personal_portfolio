import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      {/* 
        flex-col: Mobile par pehle column banega taaki copyright aur links alag lines me aayein.
        sm:flex-row: Tablet/Laptop par automatic side-by-side row ban jayega.
        text-center sm:text-left: Mobile par center, bade screen par proper spacing align rahega.
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-32 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <span className="text-sm md:text-base font-medium text-center sm:text-left">
          &copy; {currentYear} Diwakar Pandey. All Rights Reserved.
        </span>

        {/* Links container - Mobile par wrap ho sake aur hamesha gaps barabar rahein */}
        <div className="flex items-center justify-center flex-wrap gap-4 text-sm md:text-base font-medium">
          <Link
            href="https://github.com/yourusername" // Bhai apna github username change kar lena yahan
            target="_blank"
            className="hover:underline transition-all"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername" // Bhai apna linkedin username change kar lena yahan
            target="_blank"
            className="hover:underline transition-all"
          >
            LinkedIn
          </Link>

          <Link
            href="mailto:diwakarpandey410@gmail.com"
            className="hover:underline transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;