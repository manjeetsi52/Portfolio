import { educationData } from "../assets/api/data";
import Cap from "../assets/svgs/Cap.svg";
import { EducationDecoration } from "../components/ui/EducationDecoration";
import { Certification } from "../components/Certification";
import { Study } from "../components/Study";

export const Education = () => {
  return (
    <section className="h-fit contain text-white font-poppins relative">
      {/* intro */}
      <div className="grid grid-cols-1 w-full md:grid-cols-2">
        <img src={Cap} alt="cap" className=" animeImage  md:size-150 size-120 md:ml-15" />
        <div className=" flex flex-col justify-center gap-4 md:items-center">
          <h1 className=" font-bold tracking-wide mt-[-2rem] clipText md:text-6xl text-5xl">
            Education
          </h1>
          <div>
            <p className=" inline pr-2 tracking-wide font-semibold md:text-2xl text-xl ">
              Basic
              <button className=" md:text-2xl text-xl capitalize anchor">
                <a href="#qualification" className="px-2">
                  Qualifications
                </a>
              </button>
              and
            </p>
            <button className=" md:text-2xl text-xl capitalize anchor font-semibold">
              <a href="#certification">certifications</a>
            </button>
          </div>
        </div>
      </div>
      {/* images */}
      {/* Qualifications */}
      <div
        id="qualification"
        className=" h-fit flex flex-col items-center justify-center gap-5 pt-10 md:p-10 md:contain o "
      >
        <h1 className="text-4xl font-semibold text-shadow-[0_0_1rem_rgba(255,255,255,0.2)] text-white capitalize">
          Qualifications
        </h1>
        {educationData.map((item) => (
          <Study
            key={item.id}
            img={item.img}
            institution={item.institution}
            course={item.course}
            year={item.year}
            points={item.points}
          />
        ))}
      </div>

      {/* Certifications */}
      <div
        id="certification"
        className="h-fit bg-black mt-5 md:contain flex flex-col "
      >
        <h1 className="text-4xl font-semibold text-shadow-[0_0_1rem_rgba(255,255,255,0.2)] text-white capitalize text-center ">
          Certifications
        </h1>
        <Certification />
      </div>
      {/* decoration */}
      <EducationDecoration />
    </section>
  );
};
