import { skills } from "../assets/api/data";
export const SkillIcons = () => {
  return (
    <section id="skills" className="h-fit w-full flex items-center justify-center">
      <div className="w-full h-fit p-10">
        {/* content */}
        <div className="flex flex-wrap gap-10 p-10 rounded-2xl  items-center">
          {skills.map((elem) => {
            const { id, img, name } = elem;

            return (
              <div
                key={id}
                title={name}
                className="
                  group
                  w-40 h-40
                  rounded-2xl
                  border border-neutral-800
                 bg-neutral-950
                  flex items-center justify-center
                  transition-all duration-300 ease-out
                hover:border-neutral-500
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
                "
              >
                <img
                  src={img}
                  alt={name}
                  className="
                    w-20
                    grayscale
                    transition-all duration-300
                    group-hover:grayscale-0
                    group-hover:-translate-y-2
                    group-hover:scale-105
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
