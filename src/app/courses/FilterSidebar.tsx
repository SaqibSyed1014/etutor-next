'use client';

import { useState } from "react";
import { FilterState } from "@/lib/@fake-db/courses/type.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { courseCategories } from "@/lib/@fake-db/courseCategories";
import { tools, ratings, courseLevels, durations } from "@/lib/@fake-db/courses/index.tsx";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange);

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories = [...filters.categories];
    if (checked) {
      newCategories.push(category.toLowerCase());
    } else {
      newCategories = newCategories.filter(c => c !== category.toLowerCase());
    }
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleToolChange = (tool: string, checked: boolean) => {
    let newTools = [...filters.tools];
    if (checked) {
      newTools.push(tool);
    } else {
      newTools = newTools.filter(t => t !== tool);
    }
    onFilterChange({ ...filters, tools: newTools });
  };

  const handleRatingChange = (rating: number, checked: boolean) => {
    let newRatings = [...filters.ratings];
    if (checked) {
      newRatings.push(rating);
    } else {
      newRatings = newRatings.filter(r => r !== rating);
    }
    onFilterChange({ ...filters, ratings: newRatings });
  };

  const handleLevelChange = (level: string, checked: boolean) => {
    let newLevels = [...filters.levels];
    if (checked) {
      newLevels.push(level);
    } else {
      newLevels = newLevels.filter(l => l !== level);
    }
    onFilterChange({ ...filters, levels: newLevels });
  };

  const handleDurationChange = (duration: string, checked: boolean) => {
    let newDurations = [...filters.duration];
    if (checked) {
      newDurations.push(duration);
    } else {
      newDurations = newDurations.filter(d => d !== duration);
    }
    onFilterChange({ ...filters, duration: newDurations });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  const handlePriceChangeCommitted = () => {
    onFilterChange({ ...filters, priceRange });
  };

  return (
    <div className="w-full pr-6">
      <Accordion type="multiple" defaultValue={["category", "tools", "rating", "level", "price", "duration"]} className="space-y-6">
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-semibold">CATEGORY</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {Object.entries(courseCategories).map(([key, category]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={`category-${key}`}
                        checked={filters.categories.includes(key.toLowerCase())}
                        onCheckedChange={(checked) => handleCategoryChange(key, checked === true)}
                      />
                        <label
                            htmlFor={`category-${key}`}
                            className={`!pb-0 ${filters.categories.includes(key.toLowerCase()) ? 'text-primary-500 font-medium' : 'text-gray-700'}`}
                        >
                          {category.title}
                        </label>
                    </div>

                    <span className={filters.categories.includes(key.toLowerCase()) ? 'text-gray-700 font-medium' : 'text-gray-500'}>{category.courses}</span>
                  </div>


                  // <div className="ml-3 text-sm">
                  //
                  //   {/*{category?.subCategories && (*/}
                  //   {/*  <div className="ml-6 mt-2">*/}
                  //   {/*    {category.subCategories.map(sub => (*/}
                  //   {/*      <div key={sub.id} className="flex items-center mt-1">*/}
                  //   {/*        <Checkbox*/}
                  //   {/*          id={`subcategory-${sub.id}`}*/}
                  //   {/*          onCheckedChange={() => {}}*/}
                  //   {/*        />*/}
                  //   {/*        <label htmlFor={`subcategory-${sub.id}`} className="ml-2 text-xs text-gray-700">*/}
                  //   {/*          {sub.title}*/}
                  //   {/*          <span className="text-gray-400 ml-2">{sub.count}</span>*/}
                  //   {/*        </label>*/}
                  //   {/*      </div>*/}
                  //   {/*    ))}*/}
                  //   {/*  </div>*/}
                  //   {/*)}*/}
                  // </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tools">
          <AccordionTrigger className="text-base font-semibold">TOOLS</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {tools.map(tool => (
                <div key={tool.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`tool-${tool.id}`}
                      checked={filters.tools.includes(tool.name)}
                      onCheckedChange={(checked) => handleToolChange(tool.name, checked === true)}
                    />
                    <label
                        htmlFor={`tool-${tool.id}`}
                        className={`!pb-0 ${filters.tools.includes(tool.name) ? 'text-primary-500 font-medium' : 'text-gray-700'}`}
                    >
                      {tool.name}
                    </label>
                  </div>

                  <span className={filters.tools.includes(tool.name) ? 'text-gray-700 font-medium' : 'text-gray-500'}>
                      {tool.count}
                    </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger className="text-base font-semibold">RATING</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {ratings.map(rating => (
                <div key={rating.value} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`rating-${rating.value}`}
                      checked={filters.ratings.includes(rating.value)}
                      onCheckedChange={(checked) => handleRatingChange(rating.value, checked === true)}
                    />
                    <label htmlFor={`rating-${rating.value}`} className="text-sm text-gray-700 flex items-center">
                      <div className="flex mr-1.5">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      </div>
                      <span className={`!pb-0 ${filters.ratings.includes(rating.value) ? 'text-primary-500 font-medium' : 'text-gray-700'}`}>
                        {rating.label}
                      </span>
                    </label>
                  </div>

                  <span className={filters.ratings.includes(rating.value) ? 'text-gray-700 font-medium' : 'text-gray-500'}>
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="level">
          <AccordionTrigger className="text-base font-semibold">COURSE LEVEL</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2.5">
              {courseLevels.map(level => (
                <div key={level.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`level-${level.id}`}
                      checked={filters.levels.includes(level.id)}
                      onCheckedChange={(checked) => handleLevelChange(level.id, checked === true)}
                  />
                    <label htmlFor={`level-${level.id}`} className={`!pb-0 ${filters.levels.includes(level.id) ? 'text-primary-500 font-medium' : 'text-gray-700'}`}>
                      {level.name}
                    </label>
                  </div>
                  <span className={filters.levels.includes(level.id) ? 'text-gray-700 font-medium' : 'text-gray-500'}>
                    {level.count}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-semibold">PRICE</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-6">
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={handlePriceChange}
                onValueCommit={handlePriceChangeCommitted}
              />
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                    $ <span className="text-gray-500">min:</span>
                  </span>
                  <input
                      value={priceRange[0]}
                      className="pl-[60px] w-full pb-3"
                      onChange={(e) => {
                        setPriceRange([Number(e.target.value), priceRange[1]])
                        handlePriceChangeCommitted()
                      }}
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                      $ <span className="text-gray-500">max:</span>
                    </span>
                  <input
                      value={priceRange[1]}
                      className="pl-[60px] w-full pb-3"
                      onChange={(e) => {
                        setPriceRange([priceRange[0], Number(e.target.value)])
                        handlePriceChangeCommitted()
                      }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="price-paid"/>
                    <label htmlFor="price-paid" className="text-sm text-gray-700 !pb-0">
                      Paid
                    </label>
                  </div>
                  <span className="text-gray-400">1,345</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id="price-free"/>
                    <label htmlFor="price-free" className="text-sm text-gray-700 !pb-0">
                      Free
                    </label>
                  </div>

                  <span className="text-gray-400">1,345</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="duration">
          <AccordionTrigger className="text-base font-semibold">DURATION</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {durations.map(duration => (
                <div key={duration.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`duration-${duration.id}`}
                      checked={filters.duration.includes(duration.id)}
                      onCheckedChange={(checked) => handleDurationChange(duration.id, checked === true)}
                    />
                    <label
                        htmlFor={`duration-${duration.id}`}
                        className={`!pb-0 ${filters.duration.includes(duration.id) ? 'text-primary-500 font-medium' : 'text-gray-700'}`}
                    >
                      {duration.name}
                    </label>
                  </div>
                  <span className={filters.duration.includes(duration.id) ? 'text-gray-700 font-medium' : 'text-gray-500'}>
                    {duration.count}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
