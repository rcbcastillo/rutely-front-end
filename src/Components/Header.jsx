import Navigation from "./Navigation";

export const Header = ({ title }) => {
  return (
    <div className="header">
      <header>
        <h2>N C N</h2>
        <Navigation />
        <div className="hero">
          <h1> {title}</h1>
        </div>
      </header>
    </div>
  );
};
