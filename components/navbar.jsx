import Icons from './icons';

const Navbar = () => {
  const navItems = [
    { icon: <Icons.Home />, label: "Home", href: "/" },
    { icon: <Icons.Pen />, label: "Writing", href: "/blog" },
    { icon: <Icons.Grid3X3 />, label: "Projects", href: "/projects" },
    { icon: <Icons.OpenSource />, label: "Open Source", href: "/opensource" },
    { icon: <Icons.Briefcase />, label: "Work", href: "#work" }
  ];

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <nav className="flex items-center gap-1 bg-neutral-900/80 backdrop-blur-md border border-white/10 px-2 py-2 rounded-full shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;