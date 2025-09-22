// src/components/AlumniMember.jsx
import React from "react";
import { Linkedin } from "lucide-react";

const AlumniMember = ({ image, name, role, bio, academicYear, linkedin }) => {
  return (
    
   <div className="col-lg-2 col-md-4 col-sm-4 col-6" style={{ marginBottom: "80px" }}>
    
      <div className="work-box">
        <div className="work-img">
          <img 
            src={image}
            alt={name} 
            className="img-fluid"
            style={{ 
              width: "100%", 
              height: "200px", // Fixed height for consistency
              objectFit: "cover", 
              objectPosition: "center" 
            }} 
          />
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-12">
              <h2 className="w-title">{name}</h2>
              <div className="w-more role-container">
                <span className="w-ctegory">{role}</span>
              </div>
              <div className="w-more year-container">
                <span className="w-ctegory">{academicYear}</span>
              </div>
              <div className="w-more year-container bio">
                <span className="w-ctegory">{bio}</span>
              </div>
              <div className="linkedin-container">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="me-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniMember;

 /*<div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={name} style={{height: '250px', objectFit: 'cover'}} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-primary bg-white">{role}</h6>
          <span className="badge bg-tertiary mb-2">{academicYear}</span>
          <p className="card-text flex-grow-1">{bio}</p>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="me-2" />
          </a>
        </div>
      </div>
    </div>*/