import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Layout/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
          <a href="/" className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
