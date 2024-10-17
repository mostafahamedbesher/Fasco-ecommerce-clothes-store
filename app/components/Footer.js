function Footer() {
  const curYear = new Date();
  return (
    <footer className="border-t-2 border-primary-2 py-6 text-center text-sm text-secondary max-sm-l:text-xs">
      Copy Rights &copy; {curYear.getFullYear()}. All Rights Reserved
    </footer>
  );
}

export default Footer;
