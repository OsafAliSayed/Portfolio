import Link from 'next/link';
import Icons from '@/components/ui/icons';

const Navbar = (props) => {
  const activeLabel = props.activeLabel || "Writing";
  const navItems = [
    { icon: Icons.Home, label: "Home", href: "/" },
    { icon: Icons.Pen, label: "Writing", href: "/blog" },
    { icon: Icons.Code, label: "Snippets", href: "/snippets" },
    // { icon: Icons.Grid3X3, label: "Projects", href: "/projects" },
    { icon: Icons.OpenSource, label: "Open Source", href: "/open-source" },
    { icon: Icons.Star, label: "Reviews", href: "/reviews" },
    // { icon: Icons.GraduationCap, label: "Education", href: "/education" },
    // { icon: Icons.Briefcase, label: "Work", href: "/#work" }
  ];

  return (
    <div className="fixed top-6 left-0 sm:left-[-10rem] right-0 z-50">
      <div className="max-w-2xl w-full mx-auto px-6">
        <nav className="inline-flex items-center gap-1 justify-start bg-[rgb(12,12,12)] border border-white/10 hover:border-white/20 px-2 py-2 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeLabel === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 text-base rounded-2xl font-medium leading-none transition-all duration-300
                  ${isActive
                    ? "bg-white/5 text-secondary border border-white/10"
                    : "text-neutral-400 border border-transparent hover:bg-white/5 hover:text-white hover:border-white/10"
                  }`}
              >
                <Icon className="h-4 w-4 sm:hidden" aria-hidden />
                <span className="hidden sm:block">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;