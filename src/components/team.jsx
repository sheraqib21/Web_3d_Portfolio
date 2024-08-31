import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { linkedin } from "../assets"; // Import the LinkedIn icon from your assets
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Replace with the actual path to the default profile picture
import { aqib } from "../assets";
import { aqsa } from "../assets";
import { ayesha } from "../assets";

const teamMembers = [
  {
    name: "Aqib Sher",
    designation: "Full Stack Developer",
    image: aqib, // Use default image path
    linkedin_link: "https://www.linkedin.com/in/aqib-sher-5705aa307/",
  },
  {
    name: "Aqsa Malik",
    designation: "Project Manager",
    image: aqsa, // Use default image path
    linkedin_link: "https://www.linkedin.com/in/aqsa--malik/",
  },
  {
    name: "Ayesha Ijaz",
    designation: "Frontend Developer",
    image: ayesha, // Use default image path
    linkedin_link: "https://www.linkedin.com/in/ayesha-ejaz-59ba4a280/",
  },
];

const TeamMemberCard = ({ index, name, designation, image, linkedin_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full" // Increased width
      >
        <div className="relative w-120 h-[280px]"> {/* Keeping the container size */}
          <img
            src={image}
            alt={`${name}_profile`}
            className="w-50 h-50 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(linkedin_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkedin}
                alt="LinkedIn profile"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Adjusted the margin-top to move text downward */}
        <div className="mt-12"> {/* Increased margin-top from mt-5 to mt-12 */}
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{designation}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Team = () => {
  return (
    
    <>
    <section id="team" className="team-section"></section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Meet the Team</p>
        <h2 className={`${styles.sectionHeadText}`}>Our Team</h2>
      </motion.div>

      <div className="w-full flex justify-center"> {/* Centering the text section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Our team consists of experienced professionals dedicated to delivering high-quality projects. Get to know the people behind the success.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center"> {/* Centering the team members */}
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={`team-member-${index}`} index={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Team, "");
