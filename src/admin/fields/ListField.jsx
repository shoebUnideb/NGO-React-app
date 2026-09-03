import React, { useEffect, useState } from 'react';

/**
 * Generic add/remove/reorder editor for an array field.
 * - `items`: the array (of strings or objects)
 * - `onChange`: called with the new array
 * - `newItem`: factory for a fresh item when "Add" is clicked
 * - `renderItem(item, updateItem)`: renders the fields for one item
 * - `itemLabel(item, index)`: short label shown on the collapsed row / card
 * - `itemImage(item, index)`: optional, returns an image URL for the grid card thumbnail
 * - `view`: 'list' (default, inline accordion rows) or 'grid' (thumbnail cards + popup editor)
 */
const ListField = ({ label, items = [], onChange, newItem, renderItem, itemLabel, itemImage, view = 'list' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (view !== 'grid' || openIndex === null) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [view, openIndex]);

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
    onChange([newItem(), ...items]);
    setOpenIndex(0);
  };

  if (view === 'grid') {
    const openItem = openIndex !== null ? items[openIndex] : null;

    return (
      <div className="admin-field admin-field-list">
        <div className="admin-list-header">
          <span className="admin-field-label">{label} ({items.length})</span>
          <button type="button" className="admin-add-button" onClick={addItem}>+ Add</button>
        </div>

        <div className="admin-list-grid">
          {items.map((item, index) => (
            <div className="admin-list-grid-card" key={index} onClick={() => setOpenIndex(index)}>
              {itemImage && itemImage(item, index) ? (
                <img src={itemImage(item, index)} alt="" className="admin-list-grid-thumb" />
              ) : (
                <div className="admin-list-grid-thumb admin-list-grid-thumb-empty">No image</div>
              )}
              <div className="admin-list-grid-body">
                <span className="admin-list-grid-title">{itemLabel(item, index) || `Item ${index + 1}`}</span>
              </div>
              <span
                className="admin-list-grid-remove"
                title="Remove"
                onClick={(e) => { e.stopPropagation(); removeAt(index); }}
              >
                ×
              </span>
            </div>
          ))}
          {items.length === 0 && <p className="admin-list-empty">No items yet.</p>}
        </div>

        {openItem && (
          <div className="admin-modal-overlay" onClick={() => setOpenIndex(null)}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <div className="admin-modal-header">
                <span className="admin-modal-title">{itemLabel(openItem, openIndex) || `Item ${openIndex + 1}`}</span>
                <span className="admin-list-item-actions">
                  <button type="button" onClick={() => moveBy(openIndex, -1)} disabled={openIndex === 0} title="Move up">↑</button>
                  <button type="button" onClick={() => moveBy(openIndex, 1)} disabled={openIndex === items.length - 1} title="Move down">↓</button>
                  <button type="button" onClick={() => removeAt(openIndex)} className="admin-remove-button" title="Remove">×</button>
                  <button type="button" className="admin-modal-close" onClick={() => setOpenIndex(null)} title="Close">✕</button>
                </span>
              </div>
              <div className="admin-modal-body">
                {renderItem(openItem, (updated) => updateAt(openIndex, updated))}
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-primary-button" onClick={() => setOpenIndex(null)}>Done</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

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
