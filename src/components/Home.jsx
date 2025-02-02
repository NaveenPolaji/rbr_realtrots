import React from 'react';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      price: "$2,500,000",
      location: "Malibu, CA",
      beds: 5,
      baths: 6,
      sqft: 4500,
      image: "https://source.unsplash.com/random/800x600?villa1"
    },
    {
      id: 2,
      title: "Modern Downtown Penthouse",
      price: "$1,850,000",
      location: "New York, NY",
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      image: "https://source.unsplash.com/random/800x600?penthouse"
    },
    {
      id: 3,
      title: "Ranch Style Estate",
      price: "$3,200,000",
      location: "Austin, TX",
      beds: 4,
      baths: 4,
      sqft: 5200,
      image: "https://source.unsplash.com/random/800x600?ranch"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      price: "$950,000",
      location: "Aspen, CO",
      beds: 3,
      baths: 2,
      sqft: 2200,
      image: "https://source.unsplash.com/random/800x600?mountain"
    }
  ];

  return (
    <div className="page-container">
      <section className="hero">
        <h2>Premium Real Estate Solutions</h2>
        <p>Luxury Homes & Prime Land Investments</p>
      </section>

      <section className="featured-properties">
        <h3>Featured Listings</h3>
        <div className="property-grid">
          {featuredProperties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} />
              <div className="property-details">
                <h4>{property.title}</h4>
                <p className="price">{property.price}</p>
                <p className="location">{property.location}</p>
                <div className="property-stats">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sq.ft.</span>
                </div>
                <button className="view-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;