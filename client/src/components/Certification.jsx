import { useEffect, useState } from "react";
import { certifications } from "../assets/api/data";
import { createPortal } from "react-dom";

export const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleClick = (id) => {
    const cert = certifications.find((c) => c.id === id);
    setSelectedCert(cert);
  };

  const closeModal = () => setSelectedCert(null);

  return (
    <>
      <div className="flex flex-wrap gap-4 lg:px-22 lg:pt-10 pt-5">
        {certifications.map(({ id, image, title, issuer, description }) => (
          <div
            key={id}
            className="w-96 rounded-xl md:rounded-2xl overflow-hidden bg-black text-white border border-neutral-500"
          >
            {/* Image */}
            <div
              className="
                relative w-96 h-48 border-b overflow-hidden
                bg-center bg-cover group cursor-pointer
              "
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleClick(id)}
            >
              <div
                className="
                  absolute inset-0 bg-black/0
                  transition-colors duration-500
                  group-hover:bg-black/70
                "
              />

              <h1
                className="
                  pointer-events-none
                  absolute left-1/2 top-0
                  -translate-x-1/2 translate-y-4
                  text-white font-bold text-2xl tracking-wide
                  opacity-0
                  transition-all duration-500 ease-out
                  group-hover:top-1/2
                  group-hover:-translate-y-1/2
                  group-hover:opacity-100
                "
              >
                Certification
              </h1>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{title}</h3>
              {/* <p className="text-sm text-neutral-400 leading-relaxed">
                {description}
              </p> */}
              <span className="text-sm uppercase tracking-wider font-semibold text-neutral-500">
               <span className="font-bold">-</span> Issued by {issuer}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert &&
        createPortal(
          <div
            className="
        fixed inset-0 z-50
        bg-black/60
        backdrop-blur-md
        flex items-center justify-center
      "
            onClick={closeModal}
          >
            <div
              className="
          bg-black/90
          rounded-2xl p-4
          max-w-3xl w-full
          shadow-2xl
          animate-scaleIn
        "
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-xl"
              />
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
};
