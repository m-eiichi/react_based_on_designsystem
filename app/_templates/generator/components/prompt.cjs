module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "select component category",
        choices: ["ui_elements", "ui_parts", "features", "templates", "pages"],
      },
      {
        type: "input",
        name: "component_name",
        message: "input component name",
        validate: (input) => input !== "",
      },
      // 階層を指定する場合は入力
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
      {
        type: "confirm",
        name: "require_styles",
        message: "need styles file？",
      },
      {
        type: "confirm",
        name: "require_props",
        message: "need props file？",
      },
      {
        type: "confirm",
        name: "require_storybook",
        message: "need storybook file？",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir } = answers;
      const path = `src/components/${category}/${
        dir ? `${dir}/` : ``
      }${component_name}`;
      return { ...answers, path };
    });
  },
};
