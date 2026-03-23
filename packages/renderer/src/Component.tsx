import type { ComponentSchema } from '@low-code/core';

import { useContext, useEffect, useMemo, useState } from 'react';
import * as cs from '@low-code/components';
import { PageContext, mc } from './App';

interface ComponentProps {
  schema: ComponentSchema;
}

function Component({ schema }: ComponentProps) {
  const context = useContext(PageContext);

  const state = context.$v;

  const Tag = cs[schema.type as keyof typeof cs];

  function renderChildren() {
    return schema.children?.map((child) => <Component key={child.id} schema={child} />);
  }

  const props = useMemo(() => {
    const o = {};
    for (const [key, value] of Object.entries(schema.props || {})) {
      if (typeof value === 'function') {
        o[key] = value(context);
      } else {
        o[key] = value;
      }
    }
    return o;
  }, [state.count, schema.props]);

  console.log(schema.props, props);

  const rerender = useState({})[1];

  useEffect(() => {
    context.$registerListener('count', () => rerender({}));
  }, []);

  const events = {
    onClick: () => mc.invoke('increment', context),
  };

  return (
    <Tag {...props} {...events}>
      {renderChildren()}
    </Tag>
  );
}

export default Component;
