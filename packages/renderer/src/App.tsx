import type { LcContext } from './types';

import { createContext } from 'react';
import StateCore from './modules/state-core';
import MethodCore from './modules/method-core';
import schema from './schema.example.json';
import Component from './Component';
import { prepare } from './prepare';

prepare(schema);

const sc = new StateCore(schema.state);
const mc = new MethodCore();

schema.methods.forEach((m) => mc.register(m));

const PageContext = createContext<LcContext>({
  $v: sc.getState(),
  $m: mc.getMethods(),
});

const context = {
  $v: sc.getState(),
  $m: mc.getMethods(),
  $setState: (key: string, value: any) => sc.setState(key, value),
  $registerListener: (key: string, listener: Function) => sc.registerListener(key, listener),
};

function App() {
  return (
    <PageContext.Provider value={context}>
      {schema.children.map((child) => (
        <Component key={child.id} schema={child} />
      ))}
    </PageContext.Provider>
  );
}

export default App;

export { PageContext, mc };
