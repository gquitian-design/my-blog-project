const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-5 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-2">
          &copy; {currentYear} My Blog Project. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;