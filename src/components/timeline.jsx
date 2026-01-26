// Timeline.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/carousel'
import '../style.css'
import { Award, Calendar, Trophy, Target, MapPin } from 'lucide-react';
import img1 from '../img/GHC_images/img_1.jpg'
import img2 from '../img/GHC_images/img_2.jpg'
import img3 from '../img/GHC_images/img_3.jpg'
import img4 from '../img/GHC_images/img_4.jpg'
import img5 from '../img/GHC_images/img_5.jpg'
import img6 from '../img/GHC_images/img_6.jpg'
import img7 from '../img/GHC_images/img_7.jpg'
import img8 from '../img/GHC_images/img_8.jpg'
import img9 from '../img/GHC_images/img_9.jpeg'
import React from 'react';
import {useTheme} from '../context/ThemeContext'

const OPTIONS = { loop: true };

const timelineData = [
  {
    title: "Global Hyperloop Competition",
    period: "Awards • 2025",
    location: "IIT Madras, India",
    status: "Winner",
    category: "Competition",
    description: "The Global Hyperloop Competition (GHC) is a prestigious, student-led international engineering challenge hosted by IIT Madras, India, focused on advancing research and innovation in Hyperloop technology.",
    achievement: "We emerged as the overall winners of the competition.",
    items: [
      "1st place-Best POD demonstration",
      "1st place-Best Mechanical Design",
      
    ],
    images: [img3, img2, img1, img4],
    badgeClass: "bg-success",
    icon: Trophy,
    color: "success"
  },
  {
    title: "European Hyperloop Week",
    period: "Qualified • 2025",
    location: "Europe",
    status: "Qualified",
    category: "Competition",
    description: "European Hyperloop Week (EHW) is the largest annual student‑led Hyperloop competition and innovation conference in the world, focused on advancing Hyperloop technology.",
    achievement: "We cleared all the technical and the video rounds.",
    items: [
      "Successfully cleared technical evaluation rounds",
      "Passed comprehensive video presentation review",
      "Selected among top international teams",
      "Qualified for final competition phase"
    ],
    images: [img8, img5, img6],
    badgeClass: "bg-primary",
    icon: Award,
    color: "primary"
  },
  {
    title: "Research Publication",
    period: "Published • 2024",
    location: "International Journal",
    status: "Published",
    category: "Research",
    description: "Our groundbreaking research on magnetic levitation systems was accepted and published in a prestigious international engineering journal.",
    achievement: "First undergraduate team to publish in this journal.",
    items: [
      "Peer-reviewed research paper published",
      "Cited by leading researchers in the field",
      "Featured in university research highlights",
      "Contributed to global Hyperloop knowledge base"
    ],
    images: [img7, img9],
    badgeClass: "bg-info",
    icon: Target,
    color: "info"
  }
];

export default function Timeline() {
  return (
    <div className="container-fluid bg-light py-5" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '4rem' }}>
        {/* Enhanced Header */}
        <div className="text-center mb-5 pb-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
            <Trophy size={40} className="text-primary" />
          </div>
          <h2 className="display-4 fw-bold text-dark mb-3">Our Journey of Excellence</h2>
          <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Milestones that define our journey towards revolutionizing transportation technology
          </p>
          <div className="mx-auto bg-primary" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
        </div>

        {/* Enhanced Timeline */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative">
              {/* Timeline Line */}
              <div className="position-absolute start-0 top-0 bottom-0 d-none d-md-block" style={{
                left: '2rem',
                width: '4px',
                background: 'linear-gradient(180deg, #0d6efd 0%, #198754 50%, #0dcaf0 100%)',
                borderRadius: '2px',
                zIndex: 1
              }}></div>

              {/* Timeline Items */}
              <div className="d-grid gap-5">
                {timelineData.map((entry, idx) => {
                  const IconComponent = entry.icon;
                  return (
                    <div key={idx} className="position-relative">
                      {/* Timeline Dot */}
                      <div className="position-absolute d-none d-md-flex align-items-center justify-content-center bg-white border-3 rounded-circle" style={{
                        left: '1rem',
                        top: '2rem',
                        width: '4rem',
                        height: '4rem',
                        zIndex: 2,
                        borderColor: entry.color === 'success' ? '#198754' : entry.color === 'primary' ? '#0d6efd' : '#0dcaf0'
                      }}>
                        <IconComponent size={20} className={`text-${entry.color}`} />
                      </div>

                      {/* Content Card */}
                      <div className="ms-0 ms-md-5 ps-0 ps-md-4">
                        <div className="card border-0 shadow-lg hover-lift" style={{ 
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                        }}>
                          <div className="card-body p-4 p-md-5">
                            {/* Header Row */}
                            <div className="row align-items-start mb-4">
                              <div className="col-md-8">
                                <div className="d-flex align-items-center mb-2">
                                  <span className={`badge ${entry.badgeClass} px-3 py-2 me-3 fs-6`}>
                                    {entry.status}
                                  </span>
                                  <span className="badge bg-light text-dark px-3 py-2">
                                    {entry.category}
                                  </span>
                                </div>
                                <h3 className="card-title fw-bold mb-2" style={{ fontSize: '1.75rem' }}>
                                  {entry.title}
                                </h3>
                                <div className="d-flex align-items-center text-muted mb-3">
                                  <Calendar size={16} className="me-2" />
                                  <span className="me-4">{entry.period}</span>
                                  <MapPin size={16} className="me-2" />
                                  <span>{entry.location}</span>
                                </div>
                              </div>
                              <div className="col-md-4 text-md-end">
                                <div className={`d-inline-flex align-items-center justify-content-center bg-${entry.color} bg-opacity-10 rounded-3 p-3`}>
                                  <IconComponent size={32} className={`text-${entry.color}`} />
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                              <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                {entry.description}
                              </p>
                              <div className={`alert alert-${entry.color} alert-dismissible fade show border-0`} style={{ 
                                background: `linear-gradient(135deg, var(--bs-${entry.color}) 0%, var(--bs-${entry.color}) 100%)`,
                                opacity: 0.1
                              }}>
                                <div className={`text-${entry.color} fw-semibold`}>
                                  <Award size={18} className="me-2" />
                                  {entry.achievement}
                                </div>
                              </div>
                            </div>

                            {/* Carousel */}
                            {entry.images && entry.images.length > 0 && (
                              <div className="mb-4">
                                <div className="rounded-3 overflow-hidden shadow-sm">
                                  <Carousel slides={entry.images} options={OPTIONS} />
                                </div>
                              </div>
                            )}

                            {/* Achievement List */}
                            <div className="row">
                              <div className="col-12">
                                <h5 className="fw-bold mb-3 text-dark">Key Achievements:</h5>
                                <div className="row g-3">
                                  {entry.items.map((item, i) => (
                                    <div key={i} className="col-md-6">
                                      <div className="d-flex align-items-start">
                                        <div className={`bg-${entry.color} rounded-circle me-3 mt-1`} style={{
                                          width: '8px',
                                          height: '8px',
                                          flexShrink: 0
                                        }}></div>
                                        <span className="text-dark" style={{ fontSize: '0.95rem' }}>{item}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div className="card bg-dark text-white border-0 shadow-lg">
              <div className="card-body py-5">
                <div className="row text-center g-4">
                  <div className="col-md-3 col-6">
                    <div className="display-4 fw-bold text-warning mb-2">3</div>
                    <div className="text-light">Major Competitions</div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="display-4 fw-bold text-success mb-2">1</div>
                    <div className="text-light">Championship Won</div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="display-4 fw-bold text-info mb-2">2</div>
                    <div className="text-light">Qualifications</div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="display-4 fw-bold text-primary mb-2">15+</div>
                    <div className="text-light">Awards & Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
        }
        
        .timeline-item:nth-child(even) .card {
          animation: slideInRight 0.6s ease-out;
        }
        
        .timeline-item:nth-child(odd) .card {
          animation: slideInLeft 0.6s ease-out;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .card {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
}