#### 📦 Install

```
yarn add @one-piece-rick/react-test-preset -D
```

#### 🌟 Version

| React            | @one-piece-rick/react-test-preset |
| ---------------- | :-------------------------------: |
| >=17.0.0 <18.0.0 |               v1.x                |


#### add babel.config.js

```js
module.exports = require('@one-piece-rick/react-test-preset/babel.config');
```

#### add jest.config.ts

```ts
export { default } from '@one-piece-rick/react-test-preset/jest.config';
```

#### generator coverage badges

Add at least one of the below coverage hashes in your README file:

```md
![Statements](#statements#)
![Branches](#branches#)
![Functions](#functions#)
![Lines](#lines#)
```

Add this script in your package.json file:

```
"badges": "npx istanbul-badges-readme --coverageDir='./coverage'"
```

run

```
yarn badges
```

#### 🌰 Demo

> https://www.jestjs.cn/

> https://enzymejs.github.io/enzyme/

```tsx
import React from 'react';
import { shallow } from 'enzyme';
import JsonTree from './index';

describe('JsonTree components', () => {
  it('basic', () => {
    const wrapper = shallow(<JsonTree data={{ name: 'rick' }} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
```

<img src="https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/jpg/45.jpg" />
