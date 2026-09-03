import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import BlockField from '../fields/BlockField';
import { useJsonFile } from '../useJsonFile';

const ProjectPagesForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/projectPages.json', 'Update project pages via admin panel');

  if (loading || !data) return <FormShell title="Project Pages" loading={loading} error={error} />;

  return (
    <FormShell title="Project Pages" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <p className="admin-hint">
        Each page here becomes a full page on the site at creativeyouthacademy.netlify.app/projects/&lt;slug&gt;.
        Link a Project card to one by setting its Link field (on the Projects page) to /projects/&lt;slug&gt;.
      </p>
      <ListField
        label="Pages"
        items={data.pages}
        onChange={(pages) => setData({ ...data, pages })}
        newItem={() => ({ slug: '', title: '', heroImage: '', blocks: [] })}
        itemLabel={(item) => item.title || item.slug}
        renderItem={(item, update) => (
          <>
            <TextField
              label="Slug (URL: /projects/this-slug — lowercase, hyphens, no spaces)"
              value={item.slug}
              onChange={(v) => update({ ...item, slug: v })}
            />
            <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
            <ImageField
              label="Hero Image"
              value={item.heroImage}
              onChange={(v) => update({ ...item, heroImage: v })}
              folder={`projectPages/${item.slug || 'untitled'}`}
            />
            <BlockField
              label="Page Content"
              blocks={item.blocks}
              onChange={(blocks) => update({ ...item, blocks })}
              folder={`projectPages/${item.slug || 'untitled'}`}
            />
          </>
        )}
      />
    </FormShell>
  );
};

export default ProjectPagesForm;
