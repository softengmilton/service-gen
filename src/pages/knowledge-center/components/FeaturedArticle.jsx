import React from 'react';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl overflow-hidden shadow-elevated mb-12">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Content */}
        <div className="p-8 lg:p-12 text-white">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-accent/20 text-accent-200 text-sm font-medium rounded-full">
              Featured Article
            </span>
            <span className="text-primary-300 text-sm">
              {article.readTime} min read
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-primary-200 text-lg mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-white">{article.author.name}</p>
                <p className="text-primary-300 text-sm">{article.author.role}</p>
              </div>
            </div>
            <div className="text-primary-300 text-sm">
              {article.publishDate}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-primary-100 text-sm rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Button
            variant="secondary"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-white text-primary hover:bg-primary-50"
          >
            Read Full Article
          </Button>
        </div>
        
        {/* Image */}
        <div className="relative lg:h-auto h-64">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent lg:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;