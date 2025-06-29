import React from 'react';
import Icon from '../../../components/AppIcon';


const CategorySection = ({ categories, onCategorySelect }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Explore by Category
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Dive deep into specific technologies and methodologies with our curated content collections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => onCategorySelect(category.name)}
            className="bg-white rounded-xl shadow-soft border border-border p-6 hover:shadow-elevated hover:border-accent/30 transition-all duration-300 cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
              category.color === 'blue' ? 'bg-accent/10 text-accent' :
              category.color === 'green' ? 'bg-success/10 text-success-600' :
              category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
              category.color === 'orange'? 'bg-warning/10 text-warning-600' : 'bg-primary/10 text-primary'
            }`}>
              <Icon name={category.icon} size={24} />
            </div>
            
            <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
              {category.name}
            </h3>
            
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-text-muted text-sm">
                {category.articleCount} articles
              </span>
              <Icon 
                name="ArrowRight" 
                size={16} 
                className="text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;