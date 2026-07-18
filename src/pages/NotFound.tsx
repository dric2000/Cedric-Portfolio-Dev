import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <h1 className="font-sora text-6xl text-primary">404</h1>
      <p className="font-mono text-xl mt-4">Page non trouvée</p>
      <Link
        to="/"
        className="mt-8 text-secondary hover:text-secondary-light transition-colors"
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
