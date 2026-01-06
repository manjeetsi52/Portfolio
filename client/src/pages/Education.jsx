import Cap from "../assets/svgs/Cap.svg";
import { Study } from "../ui/Study";

export const Education = () => {
  return (
    <section className="h-fit contain text-white font-poppins">
      <div className="grid grid-cols-2 w-full">
        <img src={Cap} alt="cap" className="size-150 ml-15" />
        <div className=" flex flex-col justify-center gap-4 items-center">
          <h1 className="text-6xl font-bold tracking-wide mt-[-2rem]">
            Education
          </h1>
          <div>
            <p className="text-2xl inline pr-2 tracking-wide">
              Basic
              <button className="text-2xl capitalize anchor">
                <a href="#qualification" className="px-2">
                  Qualifications
                </a>
              </button>
              and
            </p>
            <button className="text-2xl capitalize anchor">
              <a href="#certification">certifications</a>
            </button>
          </div>
        </div>
      </div>

      <div
        id="qualification"
        className=" h-screen flex flex-col items-center justify-center gap-5 p-10 contain "
      >
        <Study
          img={"/gec.webp"}
          institution="Government Engineering College, Bharatpur"
          course="B.Tech in Computer Science & Engineering"
          year="2022 – 2026"
          points={[
            "Maintaining a 9.13 CGPA with consistent academic excellence",
            "Recipient of Academic Excellence Certification",
            "Studied core subjects including DSA, DBMS, OS, and CN",
            "Actively learning DSA and MERN stack development",
          ]}
        />
        <Study
          img={"/cbse.png"}
          institution="Senior Secondary Education"
          course="Class XII"
          year="2021 – 2022"
          points={[
            "Scored 96.20% in board examinations",
            "Strong foundation in Mathematics and analytical thinking",
          ]}
        />
        <Study
          img={"/cbse.png"}
          institution="Secondary Education"
          course="Class X"
          year="2019 – 2020"
          points={[
            "Scored 90.40% with consistent academic performance",
            "Appeared for NTSE, scoring 85/100 in Reasoning, reflecting strong logical and analytical aptitude",
            "Built strong fundamentals in science and mathematics",
          ]}
        />
      </div>
    </section>
  );
};
