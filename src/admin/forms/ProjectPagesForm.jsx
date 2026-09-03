import React from 'react';
import { useJsonFile } from '../useJsonFile';

const ProjectPagesOverview = () => {
  const { data: pagesData, loading: pagesLoading, error: pagesError } = useJsonFile('src/data/projectPages.json', '');
  const { data: projectsData, loading: projectsLoading } = useJsonFile('src/data/projects.json', '');

  const loading = pagesLoading || projectsLoading;

  if (loading || !pagesData) {
    return (
      <div className="admin-form">
        <div className="admin-form-header"><h1>Project Pages</h1></div>
        {pagesError ? (
          <div className="admin-banner admin-banner-error">{pagesError}</div>
        ) : (
          <div className="admin-form-loading">Loading…</div>
        )}
      </div>
    );
  }

  const linkedProjectFor = (slug) => {
    if (!projectsData) return null;
    return projectsData.projects.find((p) => p.pageSlug === slug) || null;
  };

  return (
    <div className="admin-form">
      <div className="admin-form-header"><h1>Project Pages</h1></div>
      <p className="admin-hint">
        Read-only overview of every project page. To create or edit one, open the matching
        project in the Projects section and use "Create a Project Page for this".
      </p>

      <div className="admin-overview-grid">
        {pagesData.pages.map((page) => {
          const linkedProject = linkedProjectFor(page.slug);
          return (
            <div className="admin-overview-card" key={page.slug}>
              {page.heroImage ? (
                <img src={page.heroImage} alt="" className="admin-overview-thumb" />
              ) : (
                <div className="admin-overview-thumb admin-overview-thumb-empty">No image</div>
              )}
              <div className="admin-overview-body">
                <h3>{page.title || page.slug}</h3>
                <p className="admin-hint" style={{ margin: '4px 0' }}>
                  /projects/{page.slug} · {page.blocks.length} block(s)
                </p>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>
                  {linkedProject ? (
                    <>Linked from: <strong>{linkedProject.title}</strong></>
                  ) : (
                    <em>Not linked to any project</em>
                  )}
                </p>
              </div>
            </div>
          );
        })}
        {pagesData.pages.length === 0 && <p className="admin-list-empty">No project pages yet.</p>}
      </div>
    </div>
  );
};

export default ProjectPagesOverview;
