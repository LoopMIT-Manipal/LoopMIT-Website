// src/components/AlumniMember.jsx
import React from "react";
import { Linkedin } from "lucide-react";

const AlumniMember = ({ image, name, role, bio, academicYear, linkedin }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
    </div>
  );
};

export default AlumniMember;