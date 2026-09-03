import React from 'react';
import FormShell from '../FormShell';
import TextField from '../fields/TextField';
import ImageField from '../fields/ImageField';
import ListField from '../fields/ListField';
import { useJsonFile } from '../useJsonFile';

const AmbassadorsForm = () => {
  const { data, setData, loading, saving, error, success, save } =
    useJsonFile('src/data/ambassadors.json', 'Update Ambassadors via admin panel');

  if (loading || !data) return <FormShell title="Ambassadors" loading={loading} error={error} />;

  return (
    <FormShell title="Ambassadors" loading={loading} saving={saving} error={error} success={success} onSave={save}>
      <ListField
        label="Ambassadors"
        items={data.ambassadors}
        onChange={(items) => setData({ ...data, ambassadors: items })}
        newItem={() => ({ image: '', name: '', instagram: '' })}
        itemLabel={(item) => item.name}
        renderItem={(item, update) => (
          <>
            <ImageField label="Photo" value={item.image} onChange={(v) => update({ ...item, image: v })} folder="ambassadors" />
            <TextField label="Name" value={item.name} onChange={(v) => update({ ...item, name: v })} />
            <TextField label="Instagram Link" value={item.instagram} onChange={(v) => update({ ...item, instagram: v })} />
          </>
        )}
      />
    </FormShell>
  );
};

export default AmbassadorsForm;
