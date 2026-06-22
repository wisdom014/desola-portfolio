function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-red-900 text-white">
      <span className="text-xl font-bold">Desola Adejumo</span>
      <ul className="flex items-center space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
