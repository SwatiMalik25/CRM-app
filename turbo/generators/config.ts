import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package creation", {
    description:
      "Create a new package in the monorepo with a vanilla package.json and tsconfig file",
      prompts: [
        {
          type: 'input',
          name: 'name',
          message:
            'What is the name of the package? (You can skip the `@repo/` prefix)',
        },
      ],
      actions: [
        (answers) => {
          if (
            'name' in answers &&
            typeof answers.name === 'string' &&
            answers.name.startsWith('@repo/')
          ) {
            answers.name = answers.name.replace('@repo/', '');
          }
          return 'Config sanitized';
        },
        {
          type: 'add',
          path: 'packages/{{ name }}/package.json',
          templateFile: 'templates/package.json.hbs',
        },
        {
          type: 'add',
          path: 'packages/{{ name }}/tsconfig.json',
          templateFile: 'templates/tsconfig.json.hbs',
        },
      ],
  });
}
