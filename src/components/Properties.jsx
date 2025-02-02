import React from 'react';

const Properties = () => {
  const allProperties = [
    {
      id: 1,
      title: "Oceanfront Mansion",
      price: "$8,500,000",
      type: "Luxury Villa",
      location: "Miami, FL",
      beds: 7,
      baths: 8,
      sqft: 12000,
      image: "https://source.unsplash.com/random/800x600?mansion"
    },
    {
      id: 2,
      title: "Downtown Loft",
      price: "$1,200,000",
      type: "Apartment",
      location: "Chicago, IL",
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: "https://source.unsplash.com/random/800x600?loft"
    },
    {
      id: 3,
      title: "Country Estate",
      price: "$3,750,000",
      type: "Ranch",
      location: "Nashville, TN",
      beds: 5,
      baths: 4,
      sqft: 8500,
      image: "https://source.unsplash.com/random/800x600?ranch"
    },
    {
      id: 4,
      title: "Modern Townhouse",
      price: "$2,100,000",
      type: "Townhome",
      location: "San Francisco, CA",
      beds: 3,
      baths: 3.5,
      sqft: 3200,
      image: "https://source.unsplash.com/random/800x600?townhouse"
    },
    {
      id: 5,
      title: "Ski Chalet",
      price: "$4,500,000",
      type: "Mountain Home",
      location: "Aspen, CO",
      beds: 6,
      baths: 5,
      sqft: 9500,
      image: "https://source.unsplash.com/random/800x600?chalet"
    },
    {
      id: 6,
      title: "Urban Penthouse",
      price: "$6,800,000",
      type: "Penthouse",
      location: "New York, NY",
      beds: 4,
      baths: 4.5,
      sqft: 4800,
      image: "https://source.unsplash.com/random/800x600?penthouse"
    }
  ];

  return (
    <div className="page-container properties-page">
      <h2>Our Properties</h2>
      <div className="filters">
        <select>
          <option>All Types</option>
          <option>Luxury Villa</option>
          <option>Apartment</option>
          <option>Ranch</option>
          <option>Townhome</option>
          <option>Mountain Home</option>
          <option>Penthouse</option>
        </select>
        <input type="text" placeholder="Search by location..." />
      </div>

      <div className="property-grid">
        {allProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p className="price">{property.price}</p>
              <p className="type">{property.type}</p>
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
    </div>
  );
};

export default Properties;