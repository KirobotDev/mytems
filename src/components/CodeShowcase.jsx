import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './CodeShowcase.css';

const codeLines = [
  { text: 'import openai', color: 'keyword' },
  { text: 'import time', color: 'keyword' },
  { text: 'import json', color: 'keyword' },
  { text: 'from datetime import datetime', color: 'keyword' },
  { text: '', color: '' },
  { text: 'API_KEY   = "sk-..."', color: 'string' },
  { text: 'MODEL     = "gpt-3.5-turbo"', color: 'string' },
  { text: 'ROUNDS    = 1000', color: 'number' },
  { text: 'DELAY     = 0.5', color: 'number' },
  { text: 'LOG_FILE  = "results.json"', color: 'string' },
  { text: '', color: '' },
  { text: 'client = openai.OpenAI(api_key=API_KEY)', color: 'default' },
  { text: '', color: '' },
  { text: 'PROMPT_SEQUENCE = [', color: 'default' },
  { text: '    "give me a number between 0 and 100",', color: 'string' },
  { text: '    "Again",', color: 'string' },
  { text: '    "Again",', color: 'string' },
  { text: '    "Again",', color: 'string' },
  { text: '    "Again",', color: 'string' },
  { text: ']', color: 'default' },
  { text: '', color: '' },
  { text: 'results = []', color: 'default' },
  { text: 'total = 0', color: 'number' },
  { text: '', color: '' },
  { text: 'print(f"[mytems study] Starting {ROUNDS} rounds")', color: 'function' },
  { text: '', color: '' },
  { text: 'for round_num in range(1, ROUNDS + 1):', color: 'keyword' },
  { text: '    messages = []', color: 'default' },
  { text: '    round_answers = []', color: 'default' },
  { text: '', color: '' },
  { text: '    for prompt in PROMPT_SEQUENCE:', color: 'keyword' },
  { text: '        messages.append({"role": "user", ...})', color: 'default' },
  { text: '        response = client.chat.completions.create(', color: 'function' },
  { text: '            model=MODEL,', color: 'default' },
  { text: '            messages=messages,', color: 'default' },
  { text: '            temperature=1,', color: 'number' },
  { text: '        )', color: 'default' },
  { text: '        answer = response.choices[0].message.content', color: 'default' },
  { text: '        total += 1', color: 'number' },
  { text: '', color: '' },
  { text: '    with open(LOG_FILE, "w") as f:', color: 'keyword' },
  { text: '        json.dump({"total": total, ...}, f)', color: 'function' },
];

const terminalOutput = [
  { text: '$ python mytems_study.py', type: 'command' },
  { text: '[mytems study] Starting 1000 rounds — model: gpt-3.5-turbo', type: 'info' },
  { text: '', type: '' },
  { text: "Round     1/1000 | answers: ['73', '42', '88', '56', '31']", type: 'output' },
  { text: "Round     2/1000 | answers: ['73', '42', '88', '91', '17']", type: 'output' },
  { text: "Round     3/1000 | answers: ['73', '42', '88', '64', '25']", type: 'output' },
  { text: "Round     4/1000 | answers: ['73', '42', '88', '39', '72']", type: 'output' },
  { text: "Round     5/1000 | answers: ['73', '42', '88', '15', '93']", type: 'output' },
  { text: '...', type: 'muted' },
  { text: "Round  1000/1000 | answers: ['73', '42', '88', '47', '68']", type: 'output' },
  { text: '', type: '' },
  { text: '✓ Complete: 5000 prompts sent, 960 rounds with 88 at position 3', type: 'success' },
  { text: '✓ Accuracy: 96.04% for predictable sequence (73 → 42 → 88)', type: 'success' },
];

export default function CodeShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="code" className="code-showcase section" aria-labelledby="code-title">
      <div className="bg-glow code-showcase__glow" aria-hidden="true" />

      <div className="container" ref={ref}>
        <motion.div
          className="code-showcase__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag" aria-hidden="true">Code</span>
          <h2 className="section-title" id="code-title">Le Code</h2>
          <p className="section-subtitle">
            Le script Python utilisé pour étudier la prédictibilité de ChatGPT
            à travers des milliers de rounds automatisés.
          </p>
        </motion.div>

        <div className="code-showcase__grid">
          <motion.div
            className="code-editor glass-card"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="region"
            aria-label="Éditeur de code Python"
          >
            <div className="code-editor__header">
              <div className="code-editor__dots" aria-hidden="true">
                <span className="code-editor__dot code-editor__dot--red" />
                <span className="code-editor__dot code-editor__dot--yellow" />
                <span className="code-editor__dot code-editor__dot--green" />
              </div>
              <span className="code-editor__filename">mytems_study.py</span>
              <div className="code-editor__spacer" />
            </div>
            <pre className="code-editor__body" tabIndex={0} aria-label="Code source Python">
              <code>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className="code-editor__line"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.02 }}
                  >
                    <span className="code-editor__line-number" aria-hidden="true">{i + 1}</span>
                    <span className={`code-editor__line-content code-editor__line--${line.color}`}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </motion.div>

          <motion.div
            className="terminal glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            role="region"
            aria-label="Sortie terminal"
          >
            <div className="code-editor__header">
              <div className="code-editor__dots" aria-hidden="true">
                <span className="code-editor__dot code-editor__dot--red" />
                <span className="code-editor__dot code-editor__dot--yellow" />
                <span className="code-editor__dot code-editor__dot--green" />
              </div>
              <span className="code-editor__filename">Terminal</span>
              <div className="code-editor__spacer" />
            </div>
            <div className="terminal__body" tabIndex={0} aria-label="Résultats de l'exécution du script">
              {terminalOutput.map((line, i) => (
                <motion.div
                  key={i}
                  className={`terminal__line terminal__line--${line.type}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
                >
                  {line.text}
                </motion.div>
              ))}
              <div className="terminal__cursor" aria-hidden="true">
                <span className="terminal__prompt">$</span>
                <span className="terminal__blink">_</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="code-showcase__results"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="code-showcase__results-title">Résultats visuels</h3>
          <div className="code-showcase__images">
            <figure className="code-showcase__image-card glass-card">
              <img src="/assets/algo1.png" alt="Capture d'écran ChatGPT montrant la séquence 73 puis 42 puis 88" loading="lazy" />
              <figcaption>Séquence : 73 → 42 → 88</figcaption>
            </figure>
            <figure className="code-showcase__image-card glass-card">
              <img src="/assets/algo2.png" alt="Capture d'écran confirmant la prédictibilité de ChatGPT avec la même séquence" loading="lazy" />
              <figcaption>Prédictibilité confirmée</figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
