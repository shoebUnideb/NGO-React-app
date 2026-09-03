import React, { useEffect, useRef, useState } from 'react';
import { topicsFor } from './helpSearch';

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
  const listRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        id: 'greet',
        role: 'bot',
        kind: 'text',
        text: "Hi! I'm the CYA Admin Assistant. Tap a topic below to see how it works and what it affects on the live site.",
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

  const askSuggestion = (topic) => {
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: 'user', kind: 'text', text: topic.title },
      { id: `b-${Date.now()}`, role: 'bot', kind: 'topic', topic },
    ]);
  };

  const { pageTopics, generalTopics } = topicsFor(activeSection);

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

          <div className="admin-help-suggestions">
            {pageTopics.length > 0 && (
              <>
                <span className="admin-help-suggestions-label">On this page</span>
                <div className="admin-help-suggestions-row">
                  {pageTopics.map((topic) => (
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
              </>
            )}
            <span className="admin-help-suggestions-label">General help</span>
            <div className="admin-help-suggestions-row">
              {generalTopics.map((topic) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default HelpAssistant;
