import type { LcRuntimePage } from './types';

import PageRenderer from './core/PageRenderer';

export default function App({ runtime }: { runtime: LcRuntimePage }) {
  return <PageRenderer runtime={runtime} />;
}
