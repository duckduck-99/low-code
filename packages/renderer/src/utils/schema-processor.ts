import type { AnyObject } from '../types/common';
import type { LcSchemaPage, LcSchemaComponent } from '../types/schema';
import type {
  LcRuntimePage,
  LcRuntimeComponent,
  LcRuntimePropItem,
} from '../types/runtime';

import { styleManager } from '../main';
import { isExp, exp2fn } from './expression';

export default function processPage(schema: LcSchemaPage): LcRuntimePage {
  return {
    id: schema.id,
    title: schema.title,
    className: styleManager.insert(schema.style),
    children: (schema.children || []).map(processComponent),
  };
}

function processComponent(schema: LcSchemaComponent): LcRuntimeComponent {
  return {
    id: schema.id,
    type: schema.type,
    props: processProps(schema.props),
    className: styleManager.insert(schema.style),
    children: (schema.children || []).map(processComponent),
  };
}

function processProps(props: AnyObject): LcRuntimePropItem[] {
  const result: LcRuntimePropItem[] = [];
  if (!props) return result;

  for (const key in props) {
    const value = props[key];
    if (!isExp(value)) {
      result.push({ isExp: false, name: key, value });
    } else {
      result.push({ isExp: true, name: key, value: exp2fn(value) });
    }
  }
  return result;
}
