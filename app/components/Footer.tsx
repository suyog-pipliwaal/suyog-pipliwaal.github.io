export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-black dark:border-white">
      <div className="max-w-6xl mx-auto text-center text-black dark:text-white">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} Suyog Pipliwal. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap gap-4 sm:gap-6 justify-center">
          <a href="mailto:suyogpiplwal@gmail.com" className="hover:opacity-70 transition-opacity text-sm sm:text-base">
            Email
          </a>
          <a href="https://github.com/suyog-pipliwaal" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-sm sm:text-base">
            GitHub
          </a>
          <a href="https://linkedin.com/in/suyogpipliwal" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-sm sm:text-base">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
