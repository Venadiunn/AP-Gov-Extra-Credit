const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full text-center mt-8">
      <div className="text-gray-500 text-sm mt-4">Educational Simulation © {year} • For classroom use</div>
    </footer>
  );
};

export default Footer;
