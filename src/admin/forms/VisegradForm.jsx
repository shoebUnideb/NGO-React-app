import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import TextAreaField from '../fields/TextAreaField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const ImageListField = ({ label, items, onChange }) => (
  <ListField
    label={label}
    items={items}
    onChange={onChange}
    newItem={() => ''}
    itemLabel={(img, i) => img.split('/').pop() || `Image ${i + 1}`}
    renderItem={(img, update) => (
      <ImageField label="Image" value={img} onChange={update} folder="visegrad" />
    )}
  />
);

const VisegradForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/visegrad.json', 'Update Visegrad page via admin panel');

  if (loading || !data) return <FormShell title="Visegrad Event Page" loading={loading} error={error} />;

  const set = (key, value) => setData({ ...data, [key]: value });

  return (
    <FormShell title="Visegrad Event Page" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <section className="admin-section">
        <h2>Hero</h2>
        <ImageField label="Hero Image" value={data.heroImage} onChange={(v) => set('heroImage', v)} folder="visegrad" />
      </section>

      <section className="admin-section">
        <h2>About the Event</h2>
        <TextField label="Title" value={data.aboutTitle} onChange={(v) => set('aboutTitle', v)} />
        <TextAreaField label="Text" value={data.aboutText} onChange={(v) => set('aboutText', v)} />
      </section>

      <section className="admin-section">
        <h2>What We Did</h2>
        <TextField label="Title" value={data.whatWeDidTitle} onChange={(v) => set('whatWeDidTitle', v)} />
        <TextAreaField label="Text (paragraph 1)" value={data.whatWeDidText1} onChange={(v) => set('whatWeDidText1', v)} />
        <TextAreaField label="Text (paragraph 2)" value={data.whatWeDidText2} onChange={(v) => set('whatWeDidText2', v)} />
      </section>

      <section className="admin-section">
        <h2>Location & Date</h2>
        <TextField label="Title" value={data.locationTitle} onChange={(v) => set('locationTitle', v)} />
        <TextField label="Text" value={data.locationText} onChange={(v) => set('locationText', v)} />
      </section>

      <section className="admin-section">
        <h2>Our Message</h2>
        <TextField label="Title" value={data.messageTitle} onChange={(v) => set('messageTitle', v)} />
        <TextAreaField label="Message" value={data.messageText1} onChange={(v) => set('messageText1', v)} />
        <TextField label="Hashtags" value={data.messageText2} onChange={(v) => set('messageText2', v)} />
      </section>

      <section className="admin-section">
        <h2>Get Involved</h2>
        <TextField label="Title" value={data.getInvolvedTitle} onChange={(v) => set('getInvolvedTitle', v)} />
        <TextAreaField label="Text (before the link)" value={data.getInvolvedTextBeforeLink} onChange={(v) => set('getInvolvedTextBeforeLink', v)} />
        <TextField label="Link Text" value={data.getInvolvedLinkText} onChange={(v) => set('getInvolvedLinkText', v)} />
      </section>

      <section className="admin-section">
        <h2>Event Gallery</h2>
        <TextField label="Section Title" value={data.galleryTitle} onChange={(v) => set('galleryTitle', v)} />
        <TextField label="Google Drive Link (more photos)" value={data.driveLink} onChange={(v) => set('driveLink', v)} />
        <TextField label="Google Drive Button Text" value={data.driveButtonText} onChange={(v) => set('driveButtonText', v)} />
      </section>

      <section className="admin-section">
        <ImageListField label="Featured Images (right-side grid)" items={data.featuredImages} onChange={(v) => set('featuredImages', v)} />
      </section>
      <section className="admin-section">
        <ImageListField label="Event Gallery Images" items={data.galleryImages} onChange={(v) => set('galleryImages', v)} />
      </section>
      <section className="admin-section">
        <ImageListField label="Bottom Images (max 2 shown)" items={data.bottomImages} onChange={(v) => set('bottomImages', v)} />
      </section>
    </FormShell>
  );
};

export default VisegradForm;
