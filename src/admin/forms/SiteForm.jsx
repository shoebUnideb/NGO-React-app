import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import { useJsonFile } from '../useJsonFile';

const SiteForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/site.json', 'Update site-wide content via admin panel');

  if (loading || !data) return <FormShell title="Site-wide (Navbar & Footer)" loading={loading} error={error} />;

  const set = (path, value) => setData((prev) => {
    const next = structuredClone(prev);
    let obj = next;
    for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
    obj[path[path.length - 1]] = value;
    return next;
  });

  return (
    <FormShell title="Site-wide (Navbar & Footer)" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <section className="admin-section">
        <h2>Logo</h2>
        <TextField label="Logo Text (typewriter effect)" value={data.logoText} onChange={(v) => set(['logoText'], v)} />
        <ImageField label="Logo Image" value={data.logoImage} onChange={(v) => set(['logoImage'], v)} folder="site" />
      </section>

      <section className="admin-section">
        <h2>Footer</h2>
        <TextField label="Organization Name" value={data.footerOrgName} onChange={(v) => set(['footerOrgName'], v)} />
        <TextField label="Tagline" value={data.footerTagline} onChange={(v) => set(['footerTagline'], v)} />
        <TextField label="'Connect With Us' Title" value={data.footerConnectTitle} onChange={(v) => set(['footerConnectTitle'], v)} />
      </section>

      <section className="admin-section">
        <h2>Social Links</h2>
        <TextField label="Facebook" value={data.socialLinks.facebook} onChange={(v) => set(['socialLinks', 'facebook'], v)} />
        <TextField label="Twitter" value={data.socialLinks.twitter} onChange={(v) => set(['socialLinks', 'twitter'], v)} />
        <TextField label="Instagram" value={data.socialLinks.instagram} onChange={(v) => set(['socialLinks', 'instagram'], v)} />
        <TextField label="LinkedIn" value={data.socialLinks.linkedin} onChange={(v) => set(['socialLinks', 'linkedin'], v)} />
        <TextField label="YouTube" value={data.socialLinks.youtube} onChange={(v) => set(['socialLinks', 'youtube'], v)} />
        <TextField label="Spotify" value={data.socialLinks.spotify} onChange={(v) => set(['socialLinks', 'spotify'], v)} />
      </section>
    </FormShell>
  );
};

export default SiteForm;
