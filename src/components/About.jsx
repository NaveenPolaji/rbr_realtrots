import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO & Founder",
      bio: "With over 20 years in real estate, John leads our vision for luxury properties.",
      image: "https://source.unsplash.com/random/200x200?person1"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Senior Agent",
      bio: "Specializing in high-end residential properties across the West Coast.",
      image: "https://source.unsplash.com/random/200x200?person2"
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Commercial Specialist",
      bio: "Expert in commercial real estate investments and development projects.",
      image: "https://source.unsplash.com/random/200x200?person3"
    }
  ];

  return (
    <div className="page-container about-page">
      <section className="about-hero">
        <h2>About RBR_REALTROTS</h2>
        <p>Your Trusted Partner in Luxury Real Estate</p>
      </section>

      <section className="company-overview">
        <h3>Our Story</h3>
        <p>
          Founded in 2010, RBR_REALTROTS has grown to become one of the most 
          respected names in luxury real estate. With over $5 billion in 
          closed transactions, we specialize in high-end residential and 
          commercial properties across the globe.
        </p>
      </section>

      <section className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p className="position">{member.position}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements">
        <h3>Our Achievements</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <h4>12+</h4>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h4>$5B+</h4>
            <p>In Closed Transactions</p>
          </div>
          <div className="stat-item">
            <h4>500+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>International Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;