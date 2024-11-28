export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}