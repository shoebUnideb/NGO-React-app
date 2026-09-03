import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import BooleanField from '../fields/BooleanField';
import ListField from '../fields/ListField';
import BlockField from '../fields/BlockField';
import { useMultiJsonFile } from '../useMultiJsonFile';

const generateSlug = (existingSlugs) => {
  let slug;
  do {
    slug = Math.random().toString(36).slice(2, 8);
  } while (existingSlugs.includes(slug));
  return slug;
};

const ProjectsForm = () => {
  const { files, loading, saving, error, success, setData, save } = useMultiJsonFile([
    { key: 'projectPages', path: 'src/data/projectPages.json' },
    { key: 'projects', path: 'src/data/projects.json' },
  ]);

  if (loading || !files.projects) return <FormShell title="Projects" loading={loading} error={error} />;

  const projects = files.projects.data.projects;
  const pages = files.projectPages.data.pages;

  const setProjects = (updater) => setData('projects', (prev) => ({
    ...prev,
    projects: typeof updater === 'function' ? updater(prev.projects) : updater,
  }));
  const setPages = (updater) => setData('projectPages', (prev) => ({
    ...prev,
    pages: typeof updater === 'function' ? updater(prev.pages) : updater,
  }));

  const handleSave = () => save({
    projectPages: 'Update project pages via admin panel',
    projects: 'Update Projects via admin panel',
  });

  const createPageFor = (project, update) => {
    const slug = generateSlug(pages.map((p) => p.slug));
    setPages((prev) => [{ slug, title: project.title, heroImage: '', blocks: [] }, ...prev]);
    update({ ...project, pageSlug: slug });
  };

  const removePageLink = (project, update) => {
    update({ ...project, pageSlug: '' });
  };

  const updatePage = (slug, updater) => {
    setPages((prev) => prev.map((p) => (p.slug === slug ? updater(p) : p)));
  };

  return (
    <FormShell title="Projects" loading={loading} saving={saving} error={error} success={success} onSave={handleSave}>
      <ListField
        label="Projects"
        items={projects}
        onChange={setProjects}
        newItem={() => ({ title: '', image: '', tags: [], link: '', pageSlug: '', featured: false })}
        itemLabel={(item) => item.title}
        itemImage={(item) => item.image}
        view="grid"
        renderItem={(item, update) => {
          const linkedPage = pages.find((p) => p.slug === item.pageSlug);
          return (
            <>
              <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
              <ImageField label="Image" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="projects" />

              {!linkedPage ? (
                <>
                  <TextField
                    label="Link (external URL, e.g. Instagram) — or create a page below instead"
                    value={item.link}
                    onChange={(v) => update({ ...item, link: v })}
                  />
                  <button
                    type="button"
                    className="admin-add-button"
                    onClick={() => createPageFor(item, update)}
                  >
                    + Create a Project Page for this
                  </button>
                </>
              ) : (
                <div className="admin-embedded-page">
                  <div className="admin-embedded-page-header">
                    <span>
                      This project has its own page at
                      {' '}<code>/projects/{linkedPage.slug}</code>
                    </span>
                    <button type="button" className="admin-remove-button-text" onClick={() => removePageLink(item, update)}>
                      Remove Page Link
                    </button>
                  </div>
                  <ImageField
                    label="Hero Image"
                    value={linkedPage.heroImage}
                    onChange={(v) => updatePage(linkedPage.slug, (p) => ({ ...p, heroImage: v }))}
                    folder={`projectPages/${linkedPage.slug}`}
                  />
                  <BlockField
                    label="Page Content"
                    blocks={linkedPage.blocks}
                    onChange={(blocks) => updatePage(linkedPage.slug, (p) => ({ ...p, blocks }))}
                    folder={`projectPages/${linkedPage.slug}`}
                  />
                </div>
              )}

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
          );
        }}
      />
    </FormShell>
  );
};

export default ProjectsForm;
