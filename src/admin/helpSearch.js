import topics from './helpContent';

const STOPWORDS = new Set([
  'how', 'do', 'does', 'did', 'i', 'the', 'a', 'an', 'to', 'for', 'is', 'are',
  'my', 'on', 'in', 'of', 'and', 'with', 'it', 'this', 'that', 'can', 'you',
  'what', 'where', 'when', 'why', 'me', 'please', 'about', 'up',
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

function topicHaystack(topic) {
  return [topic.title, ...(topic.keywords || []), ...(topic.steps || []), topic.impact]
    .join(' ')
    .toLowerCase()
    .split(/\W+/)
    .filter(Boolean);
}

function scoreTopic(tokens, topic, activeSection) {
  const haystackWords = topicHaystack(topic);
  let score = 0;
  tokens.forEach((t) => {
    if (haystackWords.some((w) => w === t || w.startsWith(t) || t.startsWith(w))) score += 1;
  });
  if (score > 0 && topic.section === activeSection) score += 1.5;
  return score;
}

/** Returns matching topics sorted best-first, for a free-text question. */
export function searchHelp(query, activeSection) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  return topics
    .map((topic) => ({ topic, score: scoreTopic(tokens, topic, activeSection) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

/** A short, page-relevant list of topics to show as quick-reply chips. */
export function suggestionsFor(activeSection) {
  const inSection = topics.filter((t) => t.section === activeSection).slice(0, 3);
  const essentials = topics.filter((t) => t.id === 'save-publish' || t.id === 'upload-image');
  return [...inSection, ...essentials];
}
