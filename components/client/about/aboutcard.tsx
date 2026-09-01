import React from "react";

interface IAboutProps {
  //   image?: Image;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const AboutCard = ({ name, description, icon }: IAboutProps) => {
  return (
    <main>
      <div
        className={`border  border-sky-300 w-full  p-6 flex flex-col gap-3 items-center rounded-md hover:-translate-y-1  transition-all duration-300 hover:scale-[1.05]  `}
      >
        <p className="text-blue-600 font-bold mb-1">{icon}</p>
        <p className="text-md font-bold text-black">{name}</p>
        <p className="line-clamp-2 font-serif text-xs text-black ">
          {description}
        </p>
      </div>
    </main>
  );
};

export default AboutCard;
