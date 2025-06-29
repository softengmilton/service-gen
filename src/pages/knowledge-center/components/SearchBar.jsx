import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch, onFilterChange, activeFilters = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    'All', 'Frontend', 'Backend', 'DevOps', 'Mobile', 'AI/ML', 'Blockchain', 'Security'
  ];

  const contentTypes = [
    'Articles', 'Tutorials', 'Case Studies', 'Tools', 'Templates', 'Videos'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterToggle = (filter, type) => {
    onFilterChange(filter, type);
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-border p-6 mb-8">
      {/* Search Input */}
      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"
          />
          <Input
            type="search"
            placeholder="Search articles, tutorials, guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border-border focus:border-accent"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          iconName="Search"
          className="px-6"
        >
          Search
        </Button>
        <Button
          type="button"
          variant="outline"
          iconName="Filter"
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 ${showFilters ? 'bg-accent/10 border-accent text-accent' : ''}`}
        >
          Filters
        </Button>
      </form>

      {/* Filters */}
      {showFilters && (
        <div className="border-t border-border pt-6 space-y-4">
          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterToggle(category, 'category')}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
                    activeFilters.includes(category)
                      ? 'bg-accent text-white border-accent' :'bg-surface border-border text-text-secondary hover:border-accent hover:text-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Content Types */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Content Type</h4>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterToggle(type, 'type')}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
                    activeFilters.includes(type)
                      ? 'bg-accent text-white border-accent' :'bg-surface border-border text-text-secondary hover:border-accent hover:text-accent'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;