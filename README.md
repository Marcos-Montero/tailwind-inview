# Tailwind InView 🌟

Tailwind InView is a powerful utility that integrates seamlessly with Tailwind CSS, enabling you to apply styles conditionally when an element is in the viewport. Simply prefix your style classes with `inview:` to activate them only when the element becomes visible on the screen.

## Features ✨

- **Easy Integration**: Works out of the box with Tailwind CSS.
- **Performance**: Uses Intersection Observer API for optimal performance.
- **Flexibility**: Apply any Tailwind CSS class conditionally on element's visibility.

## Installation 🚀

Install the package using npm:

```bash
npm i tailwind-inview
```

## Usage 🛠️

To get started, add the plugin in your project's `tailwind.config.js/ts`

```ts
import inviewPlugin from 'tailwind-inview';

// ...
plugins: [..., inviewPlugin]
//...

```

Then import the `InviewSensor` from the `tailwind-inview` package and use it within your React components.

```tsx
import React, { useEffect } from "react";
import { InviewSensor } from "tailwind-inview";

const Component = () => {
  useEffect(inViewSensor, []);

  return (
    <h1 className="inview:animate-bounce repeat-1">Animated On Scroll Text</h1>
  );
};

export default Component;
```

## Support 💖

If you're having trouble with Tailwind InView, please post a question to the issues tracker and someone will be happy to assist you.

## License 📄

Tailwind InView is open-source software licensed under the MIT License.

---

Happy coding! 💻
