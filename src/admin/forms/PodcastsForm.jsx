import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const PodcastsForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/podcasts.json', 'Update Podcasts via admin panel');

  if (loading || !data) return <FormShell title="Podcasts" loading={loading} />;

  return (
    <FormShell title="Podcasts" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <ListField
        label="Podcasts"
        items={data.podcasts}
        onChange={(items) => setData({ ...data, podcasts: items })}
        newItem={() => ({ thumbnail: '', title: '', youtubeLink: '' })}
        itemLabel={(item) => item.title}
        renderItem={(item, update) => (
          <>
            <ImageField label="Thumbnail" value={item.thumbnail} onChange={(v) => update({ ...item, thumbnail: v })} folder="podcast" />
            <TextField label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
            <TextField label="YouTube Link" value={item.youtubeLink} onChange={(v) => update({ ...item, youtubeLink: v })} />
          </>
        )}
      />
    </FormShell>
  );
};

export default PodcastsForm;
