import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArticleCard = ({ article, variant = 'default' }) => {
  const isLarge = variant === 'large';
  
  return (
    <div className={`bg-white rounded-xl shadow-soft border border-border overflow-hidden hover:shadow-elevated transition-all duration-300 group ${
      isLarge ? 'lg:col-span-2' : ''
    }`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            article.category === 'Tutorial' ? 'bg-success/20 text-success-600' :
            article.category === 'Case Study' ? 'bg-accent/20 text-accent-600' :
            article.category === 'Guide'? 'bg-warning/20 text-warning-600' : 'bg-primary/20 text-primary-600'
          }`}>
            {article.category}
          </span>
        </div>
        {article.isPremium && (
          <div className="absolute top-4 right-4">
            <div className="bg-warning text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
              <Icon name="Crown" size={12} />
              Premium
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-text-muted">
          <span>{article.publishDate}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Icon name="Eye" size={14} />
            <span>{article.views}</span>
          </div>
        </div>

        <h3 className={`font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 ${
          isLarge ? 'text-xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-muted text-xs rounded-lg"
            >
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="px-2 py-1 bg-surface text-text-muted text-xs rounded-lg">
              +{article.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Author & Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-text-primary">{article.author.name}</p>
              <p className="text-xs text-text-muted">{article.author.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-text-muted hover:text-accent transition-colors duration-200">
              <Icon name="Bookmark" size={16} />
            </button>
            <button className="p-2 text-text-muted hover:text-accent transition-colors duration-200">
              <Icon name="Share2" size={16} />
            </button>
            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className="text-accent hover:bg-accent/10"
            >
              Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;