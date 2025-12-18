export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black dark:border-white">
      <div className="max-w-6xl mx-auto text-center text-black dark:text-white">
        <p>© {new Date().getFullYear()} Suyog Pipliwal. All rights reserved.</p>
        <div className="mt-4 flex gap-6 justify-center">
          <a href="mailto:suyogpiplwal@gmail.com" className="hover:opacity-70 transition-opacity">
            Email
          </a>
          <a href="https://github.com/suyog-pipliwaal" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            GitHub
          </a>
          <a href="https://linkedin.com/in/suyogpipliwal" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
