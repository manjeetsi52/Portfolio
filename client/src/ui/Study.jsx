export const Study = ({ img, institution, year, course, points = [] }) => {
  return (
    <div className="flex gap-5 justify-center tracking-wide  w-full  ">
      {/* Left: Image  */}
      <div className="flex items-center overflow-hidden">
        <img
          src={img}
          alt={institution}
          className="size-30 object-contain border rounded-full"
        />
      </div>

      {/* Right: Content */}
      <div className="space-y-3 border border-neutral-700 w-[50rem] rounded-2xl overflow-hidden shadow-[0_0_1rem_rgba(255,255,255,0.12)]">
        <div className="bg-neutral-900 p-2">
          <h3 className="text-2xl font-semibold pb-1">{institution}</h3>
          <p className="text-lg text-neutral-400 font-semibold">
            {course} • {year}
          </p>
        </div>

        <ul className="space-y-2 text-neutral-300 p-2">
          {points.map((point, index) => (
            <li key={index} className="flex gap-2 pl-2 text-sm">
              <span>⚡</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
