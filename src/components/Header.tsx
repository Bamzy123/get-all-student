import academyLogo from "@/assets/academy-logo.jpeg";

const Header = () => {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <img 
            src={academyLogo} 
            alt="Grow With Guidance Academy" 
            className="h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
