import React from "react";
import { categories } from "../categoriesData";
import {
  Baby,
  User as UserIcon,
  Sparkles,
  Footprints,
  Puzzle,
  Droplet,
  Bed,
  Backpack,
  Gift,
  Sun,
  Cake,
  Heart as HeartIcon,
} from "lucide-react";

const iconMap = {
  Baby,
  User: UserIcon,
  Sparkles,
  Footprints,
  Puzzle,
  Droplet,
  Bed,
  Backpack,
  Gift,
  Sun,
  Cake,
  Heart: HeartIcon,
};

function Categories() {
  const getCategoryIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={18} /> : null;
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>Shop by Category</h2>

        <div className="slider-buttons">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <div className="category-image">
              <img src={category.image} alt={category.name} />
              <span className="category-badge">{getCategoryIcon(category.icon)}</span>
            </div>
            <p>{category.name}</p>
            <div className="category-subcategories">
              {category.subcategories.slice(0, 2).map((sub, i) => (
                <span key={i}>{sub}</span>
              ))}
              {category.subcategories.length > 2 && <span>+{category.subcategories.length - 2}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
