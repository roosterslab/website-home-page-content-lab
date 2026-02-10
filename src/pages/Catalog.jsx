import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homePageVariations, categories } from '../data/homePageVariations';
import { Hexagon, Star } from 'lucide-react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVariations = selectedCategory === 'All'
    ? homePageVariations
    : homePageVariations.filter(v => v.category === selectedCategory);

  const recommendedVariations = homePageVariations.filter(v => v.recommended);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Hexagon className="w-8 h-8 text-neutral-900 fill-neutral-900/10" strokeWidth={1.5} />
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Home Page Content Lab</h1>
                <p className="text-sm text-neutral-500">Monoatom Labs • Content Variations Testing</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              {homePageVariations.length} Variations Available
            </div>
          </div>
        </div>
      </header>

      {/* Recommended Section */}
      {selectedCategory === 'All' && recommendedVariations.length > 0 && (
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <h2 className="text-xl font-bold">Recommended Variations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedVariations.map((variation) => (
                <Link
                  key={variation.id}
                  to={`/variation/${variation.id}`}
                  className="group bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <variation.icon className="w-8 h-8 text-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {variation.name}
                  </h3>
                  <p className="text-sm text-neutral-300 mb-4">
                    {variation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {variation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white/10 px-2 py-1 rounded-full text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Variations Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {selectedCategory === 'All' ? 'All Variations' : selectedCategory}
            <span className="text-neutral-400 font-normal ml-3">
              ({filteredVariations.length})
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVariations.map((variation) => (
              <Link
                key={variation.id}
                to={`/variation/${variation.id}`}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <variation.icon className="w-8 h-8 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                  {variation.recommended && (
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  )}
                </div>

                <div className="mb-3">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    {variation.category}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {variation.name}
                  </h3>
                </div>

                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {variation.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {variation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded-full text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-neutral-500">
          <p>Monoatom Labs - Home Page Content Lab</p>
          <p className="mt-2">Built with React + Vite + Tailwind CSS + Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
