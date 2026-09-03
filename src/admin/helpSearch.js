import topics from './helpContent';

/** Topics relevant to the currently open admin page, split from general ones. */
export function topicsFor(activeSection) {
  const pageTopics = topics.filter((t) => t.section === activeSection);
  const generalTopics = topics.filter((t) => t.section === 'general');
  return { pageTopics, generalTopics };
}
