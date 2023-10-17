## Guidelines

- When adding a component in this directory, make sure to specify at the top of the file where the component is being used. For example, if the component is being used in the `app.component.html` file, then add the following line at the top of the file:

```typescript
// src/app/app.component.html -> being used to display application the header
import { Component } from '@angular/core';
// rest of the imports...
```

- "Oh, but vscode can track it for us...". Yes, but sometimes developers use other editors like vim, emacs, sublime, etc. So it's better to be explicit about it. Other than that, developers are kinda lazy and can put any component anywhere. So it's better to be explicit about it.

## "But why?"

- This is to make it easier for other developers to find where the component is being used. This is especially useful when you have a large project with many components.

## "But what if I don't know where the component is being used?"

- If you don't know where the component is being used, then the code base is getting out of control lol. But to resolve that you can use the following command to find out:

```bash
grep -r "component-name" src/
```

- This command will search for the component name in all files in the `src/` directory. If you are using Windows, then you can use the following command:

```bash
findstr /s /i "component-name" src/
```
