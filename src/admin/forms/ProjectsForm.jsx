import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import BooleanField from '../fields/BooleanField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const ProjectsForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/projects.json', 'Update Projects via admin panel');

  if (loading || !data) return <FormShell title="Projects" loading={loading} />;

  return (
    <FormShell title="Projects" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <ListField
        label="Projects"
        items={data.projects}
        onChange={(items) => setData({ ...data, projects: items })}
        newItem={() => ({ title: '', image: '', tags: [], link: '', featured: false })}
        itemLabel={(item) => item.title}
        renderItem={(item, update) => (
          <>
            <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
            <ImageField label="Image" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="projects" />
            <TextField
              label="Link (internal path like /visegrad, or a full URL)"
              value={item.link}
              onChange={(v) => update({ ...item, link: v })}
            />
            <ListField
              label="Tags (location, date, etc.)"
              items={item.tags}
              onChange={(tags) => update({ ...item, tags })}
              newItem={() => ''}
              itemLabel={(tag, i) => tag || `Tag ${i + 1}`}
              renderItem={(tag, updateTag) => (
                <TextField label="Tag" value={tag} onChange={updateTag} />
              )}
            />
            <BooleanField
              label="Featured (shows as the highlighted project at the top of the page)"
              value={item.featured}
              onChange={(v) => update({ ...item, featured: v })}
            />
          </>
        )}
      />
    </FormShell>
  );
};

export default ProjectsForm;
