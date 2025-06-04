
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';

interface SectionItem {
  id: string;
  text: string;
}

interface DynamicSectionProps {
  title: string;
  items: SectionItem[];
  setItems: (items: SectionItem[]) => void;
  placeholder: string;
  maxCount: number;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({
  title,
  items,
  setItems,
  placeholder,
  maxCount
}) => {
  const addNewItem = () => {
    if (items.length < maxCount) {
      const newItem: SectionItem = {
        id: Date.now().toString(),
        text: ''
      };
      setItems([...items, newItem]);
    }
  };

  const updateItem = (id: string, text: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text } : item
    ));
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
      <div className="tab-content-spacing space-y-6">
        <div className="flex flex-row items-center justify-between">
          <label className="text-lg font-medium">{title} ({items.length}/{maxCount})</label>
          <div
              className={`flex gap-2 items-center text-primary-500 font-medium text-sm cursor-pointer hover:opacity-70 ${items.length >= maxCount ? 'opacity-70 pointer-events-none':''}`}
              onClick={addNewItem}
          >
            <Plus className="w-4 h-4 mr-1"/>
            Add new
          </div>
        </div>
        <div>
          <div className="space-y-6">
            {items.map((item, index) => (
                <div key={item.id} className="space-y-1.5">
                  <div
                      className="text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <Input
                        value={item.text}
                        onChange={(e) => updateItem(item.id, e.target.value)}
                        placeholder={placeholder}
                        charLimit={120}
                        className="w-full"
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default DynamicSection;
