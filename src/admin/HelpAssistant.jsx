import React, { useEffect, useRef, useState } from 'react';
import { searchHelp, suggestionsFor } from './helpSearch';

const TopicAnswer = ({ topic }) => (
  <div className="admin-help-answer">
    <p className="admin-help-answer-title">{topic.title}</p>
    <ol className="admin-help-answer-steps">
      {topic.steps.map((step, i) => <li key={i}>{step}</li>)}
    </ol>
    <p className="admin-help-answer-impact"><strong>Impact:</strong> {topic.impact}</p>
  </div>
);

const HelpAssistant = ({ activeSection, activeLabel }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: 'greet',
        role: 'bot',
        kind: 'text',
        text: "Hi! I'm the CYA Admin Assistant. Ask me how to do something on this site, or tap a suggestion below.",
      }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
      });
    }
  }, [messages, open]);

  const answerWithTopic = (topic, questionText) => {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: 'user', kind: 'text', text: questionText },
      { id: `b-${Date.now()}`, role: 'bot', kind: 'topic', topic },
    ]);
  };

  const askSuggestion = (topic) => answerWithTopic(topic, topic.title);

  const askFreeText = (question) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    const results = searchHelp(trimmed, activeSection);
    if (results.length > 0) {
      answerWithTopic(results[0].topic, trimmed);
    } else {
      setMessages((prev) => [
        ...prev,
        { id: `u-${Date.now()}`, role: 'user', kind: 'text', text: trimmed },
        {
          id: `b-${Date.now()}`,
          role: 'bot',
          kind: 'text',
          text: 'I don\'t have a specific answer for that yet. Try a suggestion below, or rephrase — e.g. "how do I add a project" or "how does save work".',
        },
      ]);
    }
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    askFreeText(input);
  };

  const suggestions = suggestionsFor(activeSection);

  return (
    <>
      <button
        type="button"
        className="admin-help-fab"
        onClick={() => setOpen((v) => !v)}
        title={open ? 'Close help' : 'Help'}
      >
        {open ? '✕' : '?'}
      </button>

      {open && (
        <div className="admin-help-panel">
          <div className="admin-help-panel-header">
            <span>Admin Help — {activeLabel}</span>
            <button type="button" className="admin-help-panel-close" onClick={() => setOpen(false)} title="Close">✕</button>
          </div>

          <div className="admin-help-messages" ref={listRef}>
            {messages.map((m) => (
              <div key={m.id} className={`admin-help-message admin-help-message-${m.role}`}>
                {m.kind === 'topic' ? <TopicAnswer topic={m.topic} /> : <p>{m.text}</p>}
              </div>
            ))}
          </div>

          {suggestions.length > 0 && (
            <div className="admin-help-suggestions">
              {suggestions.map((topic) => (
                <button
                  type="button"
                  key={topic.id}
                  className="admin-help-suggestion-chip"
                  onClick={() => askSuggestion(topic)}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          )}

          <form className="admin-help-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="admin-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
            />
            <button type="submit" className="admin-primary-button">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default HelpAssistant;
