import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Blog&apos;sBin
        </Link>
        <nav>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 px-4">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
