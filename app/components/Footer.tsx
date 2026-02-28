export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-8 pt-2">
      <div className="max-w-6xl mx-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 text-[var(--foreground)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm sm:text-base text-[var(--muted)]">
            © {new Date().getFullYear()} Suyog Pipliwal. Built with Next.js and tailored for AI portfolio storytelling.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-5 text-sm sm:text-base">
            <a href="mailto:suyogpiplwal@gmail.com" className="font-medium hover:text-[var(--primary)] transition-colors">
              Email
            </a>
            <a href="https://github.com/suyog-pipliwaal" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[var(--primary)] transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/suyogpipliwal" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[var(--primary)] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
