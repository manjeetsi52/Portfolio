import { useRouteError, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-white/90">404</h1>

        {/* Message */}
        <p className="text-white/60 leading-relaxed">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for does not exist."}
        </p>

        {/* Action */}
        <button
          onClick={() => navigate("/")}
          className="
            mt-6 px-6 py-3 rounded-2xl
            border border-white/30
            text-white
            transition-all duration-300
            hover:bg-white hover:text-black
          "
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
