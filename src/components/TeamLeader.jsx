// TeamLeader.jsx
import React from 'react';

const TeamLeader = ({ image, name, skills }) => {
  return (
    
      <div className="col-md-3" style={{ marginBottom: "30px" }}>
      <div className="work-box-leader">
        {/* Removed the anchor tag that triggered the lightbox */}
        <div className="work-img" style={{ height: "250px", overflow: "hidden" }}>
          <img 
            src={image} 
            alt={name} 
            className="img-fluid" 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              objectPosition: "center" 
            }} 
          />
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{name}</h2>
              <div className="w-more">
                <span className="w-ctegory">{skills}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                {/* Empty div maintained for layout consistency */}
              </div>
            </div>
          </div>
        </div>
        {/* Removed all the hidden gallery items that were used for lightbox */}
      </div>
    </div>
    
  );
};

export default TeamLeader;