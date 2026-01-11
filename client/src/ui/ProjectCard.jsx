export const ProjectCard = ({
  index,
  title,
  description,
  image,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="relative group h-screen border border-neutral-800 overflow-hidden contain">
      {/* Fixed Background */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          bg-fixed
          opacity-60
          group-hover:opacity-40
          transition-opacity duration-300
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-900/60" />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-2 p-10 text-white group-hover:text-fuchsia-500 font-poppins">

        <div className="col-start-2  flex flex-col justify-end gap-3 group-hover:scale-105 transition-all ">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-neutral-300 leading-relaxed">{description}</p>

          <div className="flex gap-4 pt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                className="px-4 py-2 border border-fuchsia-500 text-fuchsia-500 rounded-2xl hover:bg-fuchsia-500 hover:text-white transition"
              >
                Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                className="px-4 py-2 border border-fuchsia-500 text-fuchsia-500 rounded-2xl hover:bg-fuchsia-500 hover:text-white transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        <h1 className="absolute top-6 left-8 text-[10rem] font-extrabold text-white group-hover:text-fuchsia-500 group-hover:scale-105 transition-all " data-text={index}>
          {index}
        </h1>
      </div>
    </div>
  );
};
