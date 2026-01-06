export const LogoMark = () => {
  return (
    <svg
      viewBox="0 0 90 71"
      width="40"
      height="28"
      xmlns="http://www.w3.org/2000/svg"
      className="block "
    >
      {/* Block */}
      <rect x="6" y="10" width="35" height="52" fill="black" />

      {/* Arrow */}
      <path
        d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z"
        fill="aliceblue"
      />

      {/* Blinking dash */}
      <rect
        x="45"
        y="44"
        width="29"
        height="8"
        fill="black"
        className="blink"
      />
    </svg>
  );
};


