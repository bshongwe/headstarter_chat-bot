import Button from "./Button"; // Adjust import as necessary

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-orange-500 font-bold text-xl">
            Bunny-Ai
          </a>
        </div>
        <div className="flex space-x-4">
          <Button variant="default">Home</Button>
          <Button variant="outline">About</Button>
          <Button variant="secondary">Contact</Button>
          <Button variant="link">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
