import React, { useState } from 'react';
import TextField from './TextField';
import TextAreaField from './TextAreaField';
import ImageField from './ImageField';
import ListField from './ListField';

const BLOCK_DEFAULTS = {
  text: { type: 'text', heading: '', body: '' },
  gallery: { type: 'gallery', heading: '', images: [] },
  cta: { type: 'cta', heading: '', text: '', buttonText: '', buttonLink: '' },
};

const BLOCK_LABELS = {
  text: 'Text',
  gallery: 'Image Gallery',
  cta: 'Call to Action',
};

const blockSummary = (block) => {
  if (block.heading) return block.heading;
  if (block.type === 'gallery') return `${block.images.length} image(s)`;
  if (block.type === 'cta') return block.buttonText || block.text;
  return block.body;
};

const BlockField = ({ label, blocks = [], onChange, folder }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAddMenu, setShowAddMenu] = useState(false);

  const updateAt = (index, updated) => {
    const next = blocks.slice();
    next[index] = updated;
    onChange(next);
  };

  const removeAt = (index) => {
    onChange(blocks.filter((_, i) => i !== index));
    if (openIndex === index) setOpenIndex(null);
  };

  const moveBy = (index, delta) => {
    const target = index + delta;
    if (target < 0 || target >= blocks.length) return;
    const next = blocks.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
    setOpenIndex(target);
  };

  const addBlock = (type) => {
    onChange([...blocks, { ...BLOCK_DEFAULTS[type] }]);
    setOpenIndex(blocks.length);
    setShowAddMenu(false);
  };

  return (
    <div className="admin-field admin-field-list">
      <div className="admin-list-header">
        <span className="admin-field-label">{label} ({blocks.length})</span>
        <div className="admin-add-menu-wrap">
          <button type="button" className="admin-add-button" onClick={() => setShowAddMenu((v) => !v)}>
            + Add Block
          </button>
          {showAddMenu && (
            <div className="admin-add-menu">
              {Object.keys(BLOCK_DEFAULTS).map((type) => (
                <button key={type} type="button" onClick={() => addBlock(type)}>
                  {BLOCK_LABELS[type]}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="admin-list-items">
        {blocks.map((block, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="admin-list-item" key={index}>
              <div className="admin-list-item-bar" onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span className={`admin-list-item-chevron ${isOpen ? 'open' : ''}`}>›</span>
                <span className="admin-block-type-badge">{BLOCK_LABELS[block.type]}</span>
                <span className="admin-list-item-title">{blockSummary(block)}</span>
                <span className="admin-list-item-actions" onClick={(e) => e.stopPropagation()}>
                  <button type="button" onClick={() => moveBy(index, -1)} disabled={index === 0} title="Move up">↑</button>
                  <button type="button" onClick={() => moveBy(index, 1)} disabled={index === blocks.length - 1} title="Move down">↓</button>
                  <button type="button" onClick={() => removeAt(index)} className="admin-remove-button" title="Remove">×</button>
                </span>
              </div>
              {isOpen && (
                <div className="admin-list-item-body">
                  <TextField label="Heading (optional)" value={block.heading} onChange={(v) => updateAt(index, { ...block, heading: v })} />

                  {block.type === 'text' && (
                    <TextAreaField label="Body" value={block.body} onChange={(v) => updateAt(index, { ...block, body: v })} rows={5} />
                  )}

                  {block.type === 'gallery' && (
                    <ListField
                      label="Images"
                      items={block.images}
                      onChange={(images) => updateAt(index, { ...block, images })}
                      newItem={() => ''}
                      itemLabel={(img, i) => img.split('/').pop() || `Image ${i + 1}`}
                      renderItem={(img, update) => (
                        <ImageField label="Image" value={img} onChange={update} folder={folder} />
                      )}
                    />
                  )}

                  {block.type === 'cta' && (
                    <>
                      <TextAreaField label="Text" value={block.text} onChange={(v) => updateAt(index, { ...block, text: v })} rows={2} />
                      <TextField label="Button Text" value={block.buttonText} onChange={(v) => updateAt(index, { ...block, buttonText: v })} />
                      <TextField label="Button Link" value={block.buttonLink} onChange={(v) => updateAt(index, { ...block, buttonLink: v })} />
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {blocks.length === 0 && <p className="admin-list-empty">No blocks yet — add one above.</p>}
      </div>
    </div>
  );
};

export default BlockField;
