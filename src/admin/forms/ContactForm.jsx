import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import TextAreaField from '../fields/TextAreaField';
import { useJsonFile } from '../useJsonFile';

const ContactForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/contact.json', 'Update Contact page via admin panel');

  if (loading || !data) return <FormShell title="Contact Page" loading={loading} />;

  const set = (path, value) => setData((prev) => {
    const next = structuredClone(prev);
    let obj = next;
    for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
    obj[path[path.length - 1]] = value;
    return next;
  });

  return (
    <FormShell title="Contact Page" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <section className="admin-section">
        <h2>Hero</h2>
        <TextField label="Title" value={data.hero.title} onChange={(v) => set(['hero', 'title'], v)} />
        <TextAreaField label="Subtitle" value={data.hero.subtitle} onChange={(v) => set(['hero', 'subtitle'], v)} />
      </section>

      <section className="admin-section">
        <h2>Form & Success Message</h2>
        <TextField label="Form Section Title" value={data.formTitle} onChange={(v) => set(['formTitle'], v)} />
        <TextField label="Success Message Title" value={data.successTitle} onChange={(v) => set(['successTitle'], v)} />
        <TextAreaField label="Success Message Text" value={data.successText} onChange={(v) => set(['successText'], v)} />
      </section>

      <section className="admin-section">
        <h2>Contact Info</h2>
        <TextField label="Section Title" value={data.infoTitle} onChange={(v) => set(['infoTitle'], v)} />
        <TextAreaField label="Address" value={data.address} onChange={(v) => set(['address'], v)} rows={2} />
        <TextField label="Phone" value={data.phone} onChange={(v) => set(['phone'], v)} />
        <TextField label="Email" value={data.email} onChange={(v) => set(['email'], v)} />
      </section>
    </FormShell>
  );
};

export default ContactForm;
