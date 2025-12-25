import Link from 'next/link';
import Icons from '@/components/icons';

const Navbar = () => {
  const navItems = [
    { icon: Icons.Home, label: "Home", href: "/" },
    { icon: Icons.Pen, label: "Writing", href: "/blog" },
    // { icon: Icons.Grid3X3, label: "Projects", href: "/projects" },
    { icon: Icons.OpenSource, label: "Open Source", href: "/open-source" },
    { icon: Icons.Star, label: "Reviews", href: "/reviews" },
    // { icon: Icons.GraduationCap, label: "Education", href: "/education" },
    // { icon: Icons.Briefcase, label: "Work", href: "/#work" }
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-2xl w-full mx-auto px-6">
        <nav className="inline-flex items-center gap-1 justify-start navbar-gradient backdrop-blur-md border border-neutral-800 px-2 py-2 rounded-full shadow-2xl shadow-black/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-between gap-2 px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-secondary hover:bg-white/10 transition-all duration-200 leading-none"
              >
                <Icon className="h-4 w-4 sm:hidden" aria-hidden />
                <div className="hidden sm:block">{item.label}</div>
              </Link>
            );
          })}

        </nav>
      </div>
    </div>
  );
};

export default Navbar;