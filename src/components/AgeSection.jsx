import React from "react";
import { ArrowRight } from "lucide-react";

const ages = [
  {
    title: "0 – 2 Years",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600",
    className: "age-one",
  },
  {
    title: "3 – 5 Years",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
    className: "age-two",
  },
  {
    title: "6 – 9 Years",
    image:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600",    
    className: "age-three",
  },
  {
    title: "10 – 14 Years",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600",
    className: "age-four",
  },
];

function AgeSection() {
  return (
    <section className="section age-section">
      <h2>Shop by Age</h2>

      <div className="age-grid">
        {ages.map((age, index) => (
          <div className={`age-card ${age.className}`} key={index}>
            <div className="age-content">
              <h3>{age.title}</h3>
              <p>
                Explore Now <ArrowRight size={16} />
              </p>
            </div>

            <div className="age-image">
              <img src={age.image} alt={age.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AgeSection;
