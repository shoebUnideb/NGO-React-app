import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import TextAreaField from '../fields/TextAreaField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const HomeForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/home.json', 'Update Home page via admin panel');

  if (loading || !data) return <FormShell title="Home Page" loading={loading} />;

  const set = (path, value) => setData((prev) => {
    const next = structuredClone(prev);
    let obj = next;
    for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
    obj[path[path.length - 1]] = value;
    return next;
  });

  return (
    <FormShell title="Home Page" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <section className="admin-section">
        <h2>Hero</h2>
        <ImageField label="Background GIF/Image" value={data.hero.backgroundGif} onChange={(v) => set(['hero', 'backgroundGif'], v)} folder="home" />
        <TextField label="Title" value={data.hero.title} onChange={(v) => set(['hero', 'title'], v)} />
        <TextAreaField label="Subtitle" value={data.hero.subtitle} onChange={(v) => set(['hero', 'subtitle'], v)} rows={2} />
        <TextField label="Primary Button Text" value={data.hero.primaryButtonText} onChange={(v) => set(['hero', 'primaryButtonText'], v)} />
        <TextField label="Primary Button Link" value={data.hero.primaryButtonLink} onChange={(v) => set(['hero', 'primaryButtonLink'], v)} />
        <TextField label="Secondary Button Text" value={data.hero.secondaryButtonText} onChange={(v) => set(['hero', 'secondaryButtonText'], v)} />
        <TextField label="Secondary Button Link" value={data.hero.secondaryButtonLink} onChange={(v) => set(['hero', 'secondaryButtonLink'], v)} />
      </section>

      <section className="admin-section">
        <h2>Focus Areas</h2>
        <TextField label="Section Title" value={data.focusTitle} onChange={(v) => set(['focusTitle'], v)} />
        <ListField
          label="Focus Areas"
          items={data.focusAreas}
          onChange={(v) => set(['focusAreas'], v)}
          newItem={() => ({ icon: 'fas fa-star', animation: 'pulse', title: '' })}
          itemLabel={(item) => item.title}
          renderItem={(item, update) => (
            <>
              <TextField label="Icon (Font Awesome class, e.g. fas fa-lightbulb)" value={item.icon} onChange={(v) => update({ ...item, icon: v })} />
              <TextField label="Animation (pulse, rotate, or bounce)" value={item.animation} onChange={(v) => update({ ...item, animation: v })} />
              <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
            </>
          )}
        />
      </section>

      <section className="admin-section">
        <h2>About Preview</h2>
        <TextField label="Section Title" value={data.aboutPreview.title} onChange={(v) => set(['aboutPreview', 'title'], v)} />
        <TextField label="Mission Title" value={data.aboutPreview.missionTitle} onChange={(v) => set(['aboutPreview', 'missionTitle'], v)} />
        <TextAreaField label="Mission Text" value={data.aboutPreview.missionText} onChange={(v) => set(['aboutPreview', 'missionText'], v)} />
        <TextField label="Vision Title" value={data.aboutPreview.visionTitle} onChange={(v) => set(['aboutPreview', 'visionTitle'], v)} />
        <TextAreaField label="Vision Text" value={data.aboutPreview.visionText} onChange={(v) => set(['aboutPreview', 'visionText'], v)} />
        <TextField label="Diversity Title" value={data.aboutPreview.diversityTitle} onChange={(v) => set(['aboutPreview', 'diversityTitle'], v)} />
        <TextAreaField label="Diversity Intro" value={data.aboutPreview.diversityIntro} onChange={(v) => set(['aboutPreview', 'diversityIntro'], v)} rows={2} />
        <ListField
          label="Diversity Points"
          items={data.aboutPreview.diversityPoints}
          onChange={(v) => set(['aboutPreview', 'diversityPoints'], v)}
          newItem={() => ''}
          itemLabel={(item, i) => item || `Point ${i + 1}`}
          renderItem={(item, update) => <TextField label="Point" value={item} onChange={update} />}
        />
        <TextField label="Button Text" value={data.aboutPreview.ctaText} onChange={(v) => set(['aboutPreview', 'ctaText'], v)} />
        <TextField label="Button Link" value={data.aboutPreview.ctaLink} onChange={(v) => set(['aboutPreview', 'ctaLink'], v)} />
      </section>

      <section className="admin-section">
        <h2>Podcast Preview Section</h2>
        <TextField label="Title" value={data.podcastPreview.title} onChange={(v) => set(['podcastPreview', 'title'], v)} />
        <TextField label="'View More' Text" value={data.podcastPreview.viewMoreText} onChange={(v) => set(['podcastPreview', 'viewMoreText'], v)} />
        <TextField label="'View More' Link" value={data.podcastPreview.viewMoreLink} onChange={(v) => set(['podcastPreview', 'viewMoreLink'], v)} />
        <p className="admin-hint">Shows the first 3 podcasts from the Podcasts page automatically.</p>
      </section>

      <section className="admin-section">
        <h2>Gallery Preview Section</h2>
        <TextField label="Title" value={data.galleryPreview.title} onChange={(v) => set(['galleryPreview', 'title'], v)} />
        <TextField label="'View More' Text" value={data.galleryPreview.viewMoreText} onChange={(v) => set(['galleryPreview', 'viewMoreText'], v)} />
        <TextField label="'View More' Link" value={data.galleryPreview.viewMoreLink} onChange={(v) => set(['galleryPreview', 'viewMoreLink'], v)} />
        <p className="admin-hint">Shows the first 3 images from the Gallery page automatically.</p>
      </section>

      <section className="admin-section">
        <h2>Testimonials</h2>
        <TextField label="Section Title" value={data.testimonials.title} onChange={(v) => set(['testimonials', 'title'], v)} />
        <ListField
          label="Testimonials"
          items={data.testimonials.items}
          onChange={(v) => set(['testimonials', 'items'], v)}
          newItem={() => ({ quote: '', author: '' })}
          itemLabel={(item) => item.author}
          renderItem={(item, update) => (
            <>
              <TextAreaField label="Quote" value={item.quote} onChange={(v) => update({ ...item, quote: v })} />
              <TextField label="Author Name" value={item.author} onChange={(v) => update({ ...item, author: v })} />
            </>
          )}
        />
        <TextField label="Button Text" value={data.testimonials.ctaText} onChange={(v) => set(['testimonials', 'ctaText'], v)} />
        <TextField label="Button Link" value={data.testimonials.ctaLink} onChange={(v) => set(['testimonials', 'ctaLink'], v)} />
      </section>
    </FormShell>
  );
};

export default HomeForm;
