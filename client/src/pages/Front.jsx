import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Front = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/manjeet");
  };

  return (
    <section className="h-screen bg-black text-white flex justify-center items-center">
      <div>
        <h1>hello from front</h1>
        <button onClick={handleClick}>explore</button>
      </div>
    </section>
  );
};
