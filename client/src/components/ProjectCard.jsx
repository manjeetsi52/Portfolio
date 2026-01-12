export const ProjectCard = ({
  index,
  title,
  description,
  image,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="relative group min-h-[50vh] md:h-screen border border-neutral-800 overflow-hidden md:contain">
      
      {/* Background */}
      <div
        className="
          absolute inset-0
          bg-contain
          md:bg-cover bg-center bg-no-repeat
          bg-fixed
          lg:opacity-60
          opacity-100
          group-hover:opacity-40
          transition-opacity duration-300
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/70 md:bg-neutral-900/60" />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12 text-white font-poppins">

        {/* Index (mobile visible, desktop absolute) */}
        <h1 className="
          md:absolute md:top-6 md:left-8
          text-5xl sm:text-6xl md:text-[10rem]
          font-extrabold
          text-white/80
          md:text-white
          group-hover:text-fuchsia-500
          transition-all
        ">
          {index}
        </h1>

        {/* Content Block */}
        <div className="
          md:col-start-2
          flex flex-col justify-end
          gap-4
          md:gap-6
          md:pb-10
          md:group-hover:scale-105
          transition-transform
        ">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold ">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                className="px-4 py-2 text-sm md:text-base border md:bg-transparent bg-fuchsia-500 md:border-fuchsia-500 md:text-fuchsia-500 text-white rounded-xl hover:bg-fuchsia-500 md:hover:text-white transition"
              >
                Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                className="px-4 py-2 text-sm md:text-base border md:bg-transparent bg-fuchsia-500 md:border-fuchsia-500 md:text-fuchsia-500 text-white rounded-xl hover:bg-fuchsia-500 md:hover:text-white transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
