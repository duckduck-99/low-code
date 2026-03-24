import type { LcRuntimePage } from '../types';

import React from 'react';
import { RuntimeContext } from './context';
import ComponentRenderer from './ComponentRenderer';

interface PageRendererProps {
  runtime: LcRuntimePage;
}

export default function PageRenderer({ runtime }: PageRendererProps) {
  const context = React.useMemo(() => ({ $v: { count: 1 } }), []);

  React.useEffect(() => {
    document.title = runtime.title;
  }, [runtime.title]);

  return (
    <RuntimeContext.Provider value={context}>
      <div id={runtime.id} className={runtime.className}>
        {runtime.children.map((node) => (
          <ComponentRenderer key={node.id} runtime={node} />
        ))}
      </div>
    </RuntimeContext.Provider>
  );
}
