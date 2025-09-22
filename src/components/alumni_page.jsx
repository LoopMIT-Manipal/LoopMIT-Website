// src/components/AlumniSection.jsx
import React from "react";
import AlumniMember from "./alumni_member";
import Animation1 from "./animation";
import { Linkedin } from "lucide-react";

// Using URL imports for images with spaces in filenames
import Sougata from '../img/alumni_pics/SOUGATA_MAJI.jpg';
import Aashish_Kumar from '../img/alumni_pics/Aashish_Kumar.jpg';
import Sahil_Sinha from '../img/alumni_pics/Sahil_Sinha.jpg';
import Shlok from '../img/alumni_pics/_Shlok_Singh_Alhuwalia.jpg';
import Preyaan from '../img/alumni_pics/_Preyaan_Gupta.jpg';
import Amrit from '../img/alumni_pics/_Amrit R.jpg';
import Jash from '../img/alumni_pics/_Jash_Shah.jpg';
import Nikhil from '../img/alumni_pics/Nikhil_Gupta.jpg';
import HimaNandhan from '../img/alumni_pics/_HimaNandhan Alla.jpg';
import Karan from '../img/alumni_pics/Karan_Kapoor.jpeg';
import Rahul from '../img/alumni_pics/Rahul Sethia.jpg';
import Pugazhendhi from '../img/alumni_pics/Pugazhendhi Priyan.jpeg';
import Swetank from '../img/alumni_pics/_Swetank_Awasthi.jpg';
import Abhishek from '../img/alumni_pics/_Abhishek Prakash.jpg';
import Tejas from '../img/alumni_pics/Tejas Gajjala.jpg';

class AlumniSection extends React.Component {
  render() {
    const founderAlumni = [
      { id: 1, image: Jash, name: "Jash Shah", role: "Founder, Team Lead", bio: "Keep building!", academicYear: "2019-20", linkedin: "https://www.linkedin.com/in/jash-shah-2b790146" },
      { id: 2, image: Aashish_Kumar, name: "Aashish Kumar", role: "Co-founder, Levitation Head", bio: "Any idea can snowball into something much bigger than you ever imagined", academicYear: "2019-20", linkedin: "https://www.linkedin.com/in/aashish-kumar-703915174" },
      { id: 3, image: Preyaan, name: "Preyaan Gupta", role: "Co-founder / Technical Head", bio: "Surreal to see the size of the community. Super proud of the members who have taken this project forward.", academicYear: "2019-20", linkedin: "https://www.linkedin.com/in/preyaangupta/" },
      { id: 4, image: Swetank, name: "Swetank Awasthi", role: "Co-founder and Structures Head", bio: "LoopMIT began as a bold idea—to bring futuristic transport closer to reality through student-led innovation.", academicYear: "2019-20", linkedin: "https://www.linkedin.com/in/swetank-awasthi-b7a17624a" },
      { id: 5, image: Karan, name: "Karan Kapoor", role: "Co-founder, Vehicle Dynamics Lead", bio: "I believe this is one of the most exciting emerging technologies to work on. The skills developed are highly transferable.", academicYear: "2019-21", linkedin: "https://www.linkedin.com/in/karan-kapoor-25b3ab145" },
    ];

    const secondGenAlumni = [
      { id: 6, image: Nikhil, name: "Nikhil Gupta", role: "Electronics Subsystem Head", bio: "Keep forging ahead. I'm glad small setbacks never deterred the team and you guys did amazing!", academicYear: "2020-21", linkedin: "https://www.linkedin.com/in/nikhil-gupta2/" },
     { id: 9, image: Tejas, name: "Tejas Gajjala", role: "Propulsion Head", bio: "Your hands-on engineering, teamwork, and deep research are the real wins. Keep learning, keep building, keep loopin'.", academicYear: "2020-21", linkedin: "https://www.linkedin.com/in/tejas-gajjala/" },
    ];

    const thirdGenAlumni = [
      { id: 10, image: Abhishek, name: "Abhishek Prakash", role: "Technical Head", bio: "You guys are doing absolutely amazing! Keep up the good work. Make sure you guide the juniors very well.", academicYear: "2021-22", linkedin: "https://www.linkedin.com/in/abhishek-prakash-99744b199" },
      { id: 11, image: Pugazhendhi, name: "Pugazhendhi Priyan", role: "Mechanical Head", bio: "To the heart and brilliance of LoopMIT, our collective pursuit of the extraordinary defines us. #keeploopin", academicYear: "2022-23", linkedin: "https://www.linkedin.com/in/pugazhendhipriyan" },
    { id: 15, image: Amrit, name: "Amrit R", role: "Team Leader", bio: "I'm so happy to see the team has finally started actively participating in competitions and excelling in them.", academicYear: "2022-23", linkedin: "https://www.linkedin.com/in/amrit-r-h1410" },
     ];

    const recentAlumni = [
      { id: 12, image: Sougata, name: "Sougata Maji", role: "Technical Head", bio: "It has been a great honour to serve this team. I'm incredibly proud of my juniors who have carried forward the legacy with consistency and dedication, helping us win our first prize.", academicYear: "2023-24", linkedin: "https://www.linkedin.com/in/sougata-maji-15171a239" },
      { id: 13, image: Sahil_Sinha, name: "Sahil Sinha", role: "Electrical Head", bio: "We're the future.... Believe in yourself", academicYear: "2023-24", linkedin: "https://www.linkedin.com/in/sahil-sinha-75b140236/" },
      { id: 14, image: Shlok, name: "Shlok Singh Ahluwalia", role: "Team Manager", bio: "WORK.", academicYear: "2023-24", linkedin: "https://www.linkedin.com/in/shlok-singh-ahluwalia-a1b56b225/" },
      { id: 7, image: HimaNandhan, name: "HimaNandhan Alla", role: "Mechanical Head", bio: "Mahendra janatics", academicYear: "2023-24", linkedin: "https://www.linkedin.com/in/himanandhan-alla-b7a17624a" },
      { id: 8, image: Rahul, name: "Rahul Sethia", role: "Levitation and Propulsion Head", bio: "Being a part of this incredible journey has been one of the most rewarding experiences of my college life.", academicYear: "2023-24", linkedin: "https://www.linkedin.com/in/rahul-sethia-b7a17624a" },
      ];

    const sections = [
      { title: "Meet Our Alumni", type: "header" },
      { title: "2019-20", members: founderAlumni, anim: "left" },
      { title: "2020-21", members: secondGenAlumni, anim: "right" },
      { title: "2021-23", members: thirdGenAlumni, anim: "left" },
      { title: "2023-24", members: recentAlumni, anim: "right" },
    ];

    return (
      <section id="alumni" className="portfolio-mf py-4">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="title-a">MEET OUR ALUMNI</h2>
              <p className="subtitle-a">
                The visionary minds who built the foundation of LoopMIT and continue to inspire future generations.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>

          {sections
            .filter((sec) => sec.type !== "header")
            .map((section, idx) => (
              <React.Fragment key={idx}>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <h4 className="h4">{section.title}</h4>
                  </div>
                </div>
                <hr className="my-3" />
                <Animation1 direction={section.anim} delay={0.2}>
                  <div className="row justify-content-center mb-5">
                    {section.members.map((member) => (
                      <AlumniMember key={member.id} {...member} />
                    ))}
                  </div>
                </Animation1>
              </React.Fragment>
            ))}
        </div>
      </section>
    );
  }
}

export default AlumniSection;