import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StyleManager from './utils/style-manager';
import schemaProcessor from './utils/schema-processor';
import schema from './schema/index.json';
import App from './App.tsx';

export const styleManager = new StyleManager();
const runtime = schemaProcessor(schema);
styleManager.appendToHead();

console.log(runtime);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App runtime={runtime} />
  </StrictMode>
);
