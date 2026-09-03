import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import BooleanField from '../fields/BooleanField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const GalleryForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/gallery.json', 'Update Gallery via admin panel');

  if (loading || !data) return <FormShell title="Gallery" loading={loading} error={error} />;

  return (
    <FormShell title="Gallery" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <ListField
        label="Gallery Images"
        items={data.gallery}
        onChange={(items) => setData({ ...data, gallery: items })}
        newItem={() => ({ image: '', title: '', videoLink: '', floating: false })}
        itemLabel={(item) => item.title || item.image}
        itemImage={(item) => item.image}
        view="grid"
        renderItem={(item, update) => (
          <>
            <ImageField label="Image" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="gallery" />
            <TextField label="Title (optional caption)" value={item.title} onChange={(v) => update({ ...item, title: v })} />
            <TextField label="Video Link (optional)" value={item.videoLink} onChange={(v) => update({ ...item, videoLink: v })} />
            <BooleanField label="Floating animation" value={item.floating} onChange={(v) => update({ ...item, floating: v })} />
          </>
        )}
      />
    </FormShell>
  );
};

export default GalleryForm;
