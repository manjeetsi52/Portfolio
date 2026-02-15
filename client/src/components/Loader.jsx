export const Loader = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      <div className="loader"></div>
    </div>
  );
};
