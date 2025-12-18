import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-black dark:border-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-black dark:text-white hover:opacity-70 transition-opacity">
            Suyog Pipliwal
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/education" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Education
            </Link>
            <Link href="/experience" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Experience
            </Link>
            <Link href="/projects" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Projects
            </Link>
            <Link href="/cv" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              CV
            </Link>
            <Link href="/publications" className="text-black dark:text-white hover:opacity-70 transition-opacity">
              Publications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
