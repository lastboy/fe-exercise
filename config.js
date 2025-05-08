export const structure = () => ({
  _type: "Container",
  classes: ["container"],
  items: [
    {
      _type: "Header",
      text: "Welcome to the App",
      classes: ["header"],
    },
    {
      _type: "Container",
      classes: ["content"],
      items: [
        {
          _type: "Input",
          placeholder: "Username",
          name: "username",
        },
        {
          _type: "Input",
          placeholder: "Password",
          name: "password",
          type: "password",
        },
        {
          _type: "Button",
          label: "Login",
          classes: ["btn-login"],
        },
      ],
    },
    {
      _type: "Divider",
    },
    {
      _type: "Container",
      props: { classes: ["content"] },
      items: [
        {
          _type: "List",
          options: ["Profile", "Settings", "Logout"],
        },
        {
          _type: "Container",
          props: { classes: ["content"] },
          items: [
            {
              _type: "label",
              text: "My label 1"
            },
            {
              _type: "label",
              text: "My label 2"
            },
            {
              _type: "label",
              text: "My label 3"
            },
          ],
        },
      ],
    },
  ],
});