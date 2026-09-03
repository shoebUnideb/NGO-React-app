import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import TextAreaField from '../fields/TextAreaField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const BulletList = ({ label, items, onChange }) => (
  <ListField
    label={label}
    items={items}
    onChange={onChange}
    newItem={() => ''}
    itemLabel={(item, i) => item || `Point ${i + 1}`}
    renderItem={(item, update) => <TextAreaField label="Text" value={item} onChange={update} rows={2} />}
  />
);

const AboutForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/about.json', 'Update About page via admin panel');

  if (loading || !data) return <FormShell title="About Page" loading={loading} />;

  const set = (path, value) => setData((prev) => {
    const next = structuredClone(prev);
    let obj = next;
    for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
    obj[path[path.length - 1]] = value;
    return next;
  });

  return (
    <FormShell title="About Page" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <section className="admin-section">
        <h2>Hero</h2>
        <TextField label="Title" value={data.hero.title} onChange={(v) => set(['hero', 'title'], v)} />
        <TextAreaField label="Subtitle" value={data.hero.subtitle} onChange={(v) => set(['hero', 'subtitle'], v)} />
      </section>

      <section className="admin-section">
        <h2>Mission</h2>
        <TextField label="Title" value={data.mission.title} onChange={(v) => set(['mission', 'title'], v)} />
        <TextAreaField label="Text" value={data.mission.text} onChange={(v) => set(['mission', 'text'], v)} rows={6} />
      </section>

      <section className="admin-section">
        <h2>Vision</h2>
        <TextField label="Title" value={data.vision.title} onChange={(v) => set(['vision', 'title'], v)} />
        <TextAreaField label="Text" value={data.vision.text} onChange={(v) => set(['vision', 'text'], v)} rows={4} />
      </section>

      <section className="admin-section">
        <h2>Impact</h2>
        <TextField label="Title" value={data.impact.title} onChange={(v) => set(['impact', 'title'], v)} />
        <TextAreaField label="Intro" value={data.impact.intro} onChange={(v) => set(['impact', 'intro'], v)} rows={2} />
        <BulletList label="Items" items={data.impact.items} onChange={(v) => set(['impact', 'items'], v)} />
      </section>

      <section className="admin-section">
        <h2>Achievements</h2>
        <TextField label="Title" value={data.achievements.title} onChange={(v) => set(['achievements', 'title'], v)} />
        <TextAreaField label="Intro" value={data.achievements.intro} onChange={(v) => set(['achievements', 'intro'], v)} rows={2} />
        <BulletList label="Items" items={data.achievements.items} onChange={(v) => set(['achievements', 'items'], v)} />
      </section>

      <section className="admin-section">
        <h2>Diversity & Team Strength</h2>
        <TextField label="Title" value={data.diversity.title} onChange={(v) => set(['diversity', 'title'], v)} />
        <TextAreaField label="Intro" value={data.diversity.intro} onChange={(v) => set(['diversity', 'intro'], v)} rows={2} />
        <BulletList label="Items" items={data.diversity.items} onChange={(v) => set(['diversity', 'items'], v)} />
      </section>

      <section className="admin-section">
        <h2>Team Highlights</h2>
        <TextAreaField label="Intro" value={data.highlights.intro} onChange={(v) => set(['highlights', 'intro'], v)} rows={2} />
        <BulletList label="Items" items={data.highlights.items} onChange={(v) => set(['highlights', 'items'], v)} />
      </section>

      <section className="admin-section">
        <h2>Partners</h2>
        <TextField label="Section Title" value={data.partnersTitle} onChange={(v) => set(['partnersTitle'], v)} />
        <ListField
          label="Partners"
          items={data.partners}
          onChange={(v) => set(['partners'], v)}
          newItem={() => ({ image: '', name: '', position: '', bio: '' })}
          itemLabel={(item) => item.name}
          renderItem={(item, update) => (
            <>
              <ImageField label="Image" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="about" />
              <TextField label="Name" value={item.name} onChange={(v) => update({ ...item, name: v })} />
              <TextField label="Position (optional)" value={item.position} onChange={(v) => update({ ...item, position: v })} />
              <TextAreaField label="Bio" value={item.bio} onChange={(v) => update({ ...item, bio: v })} rows={2} />
            </>
          )}
        />
      </section>

      <section className="admin-section">
        <h2>Tech Team</h2>
        <TextField label="Section Title" value={data.techTeamTitle} onChange={(v) => set(['techTeamTitle'], v)} />
        <ListField
          label="Tech Team"
          items={data.techTeam}
          onChange={(v) => set(['techTeam'], v)}
          newItem={() => ({ image: '', name: '', linkText: '', linkUrl: '' })}
          itemLabel={(item) => item.name}
          renderItem={(item, update) => (
            <>
              <ImageField label="Image" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="about" />
              <TextField label="Name" value={item.name} onChange={(v) => update({ ...item, name: v })} />
              <TextField label="Link Text" value={item.linkText} onChange={(v) => update({ ...item, linkText: v })} />
              <TextField label="Link URL" value={item.linkUrl} onChange={(v) => update({ ...item, linkUrl: v })} />
            </>
          )}
        />
      </section>
    </FormShell>
  );
};

export default AboutForm;
