import React, { useState } from 'react';

/**
 * Generic add/remove/reorder editor for an array field.
 * - `items`: the array (of strings or objects)
 * - `onChange`: called with the new array
 * - `newItem`: factory for a fresh item when "Add" is clicked
 * - `renderItem(item, updateItem)`: renders the fields for one item
 * - `itemLabel(item, index)`: short label shown on the collapsed row
 */
const ListField = ({ label, items = [], onChange, newItem, renderItem, itemLabel }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const updateAt = (index, updated) => {
    const next = items.slice();
    next[index] = updated;
    onChange(next);
  };

  const removeAt = (index) => {
    onChange(items.filter((_, i) => i !== index));
    if (openIndex === index) setOpenIndex(null);
  };

  const moveBy = (index, delta) => {
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
    setOpenIndex(target);
  };

  const addItem = () => {
    onChange([...items, newItem()]);
    setOpenIndex(items.length);
  };

  return (
    <div className="admin-field admin-field-list">
      <div className="admin-list-header">
        <span className="admin-field-label">{label} ({items.length})</span>
        <button type="button" className="admin-add-button" onClick={addItem}>+ Add</button>
      </div>

      <div className="admin-list-items">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="admin-list-item" key={index}>
              <div className="admin-list-item-bar" onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span className={`admin-list-item-chevron ${isOpen ? 'open' : ''}`}>›</span>
                <span className="admin-list-item-title">{itemLabel(item, index) || `Item ${index + 1}`}</span>
                <span className="admin-list-item-actions" onClick={(e) => e.stopPropagation()}>
                  <button type="button" onClick={() => moveBy(index, -1)} disabled={index === 0} title="Move up">↑</button>
                  <button type="button" onClick={() => moveBy(index, 1)} disabled={index === items.length - 1} title="Move down">↓</button>
                  <button type="button" onClick={() => removeAt(index)} className="admin-remove-button" title="Remove">×</button>
                </span>
              </div>
              {isOpen && (
                <div className="admin-list-item-body">
                  {renderItem(item, (updated) => updateAt(index, updated))}
                </div>
              )}
            </div>
          );
        })}
        {items.length === 0 && <p className="admin-list-empty">No items yet.</p>}
      </div>
    </div>
  );
};

export default ListField;
