import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  activeFilters, 
  onFilterChange, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      options: ['All', 'E-commerce', 'FinTech', 'Healthcare', 'SaaS', 'Education', 'Real Estate']
    },
    {
      key: 'technology',
      label: 'Technology',
      options: ['All', 'React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker']
    },
    {
      key: 'projectType',
      label: 'Project Type',
      options: ['All', 'Web Application', 'Mobile App', 'API Development', 'DevOps', 'Consulting']
    },
    {
      key: 'companySize',
      label: 'Company Size',
      options: ['All', 'Startup', 'SMB', 'Enterprise']
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'impact', label: 'Highest Impact' },
    { value: 'complexity', label: 'Most Complex' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-soft p-6 mb-8">
      {/* Search and View Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" 
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-surface rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' ?'bg-white text-accent shadow-sm' :'text-text-muted hover:text-primary'
              }`}
            >
              <Icon name="Grid3X3" size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors duration-200 ${
                viewMode === 'list' ?'bg-white text-accent shadow-sm' :'text-text-muted hover:text-primary'
              }`}
            >
              <Icon name="List" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="space-y-4">
        {filterCategories.map((category) => (
          <div key={category.key}>
            <h4 className="text-sm font-medium text-primary mb-2">{category.label}</h4>
            <div className="flex flex-wrap gap-2">
              {category.options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onFilterChange(category.key, option)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilters[category.key] === option
                      ? 'bg-accent text-white shadow-sm'
                      : 'bg-surface text-text-secondary hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active Filters Summary */}
      {Object.values(activeFilters).some(filter => filter !== 'All') && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">Active filters:</span>
              <div className="flex flex-wrap gap-1">
                {Object.entries(activeFilters).map(([key, value]) => 
                  value !== 'All' && (
                    <span
                      key={key}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                    >
                      {value}
                    </span>
                  )
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={() => onFilterChange('reset')}
              className="text-text-muted hover:text-primary"
            >
              Clear All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;