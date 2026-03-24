import type { LcRuntimeComponent } from '../types';

import React from 'react';
import registry from '../registry';
import { RuntimeContext, useRuntimeContext } from './context';

interface NodeRendererProps {
  runtime: LcRuntimeComponent;
}

export default function ComponentRenderer({ runtime }: NodeRendererProps) {
  const context = useRuntimeContext();

  const Component = registry.get(runtime.type) as any;

  const props = React.useMemo(() => {
    const props = {} as Record<string, any>;
    for (const prop of runtime.props) {
      if (prop.isExp) {
        props[prop.name] = prop.value(context);
      } else {
        props[prop.name] = prop.value;
      }
    }
    return props;
  }, [runtime.props, context]);

  return (
    Component && (
      <RuntimeContext.Provider value={context}>
        <Component id={runtime.id} className={runtime.className} {...props}>
          {runtime.children?.map((node) => (
            <ComponentRenderer key={node.id} runtime={node} />
          ))}
        </Component>
      </RuntimeContext.Provider>
    )
  );
}
