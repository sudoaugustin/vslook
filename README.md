# `VSLook`

![What vslook does](https://raw.githubusercontent.com/sudoaugustin/vslook/main/.github/media/overview.gif)

## 📗 Get started

- Install from [marketplace](https://marketplace.visualstudio.com/items?itemName=sudoaugustin.vslook).
- Choose **VSLook** from Color Theme.
- Open Command Palette `Ctrl+Shift+P`. Search for **VSLook: Edit** and press `Enter`.

_For styling guide, [click here](https://github.com/sudoaugustin/vslook/blob/main/.github/docs/styling.md)._

</br>

### 🚚 Export theme

- Open Command Palette `Ctrl+Shift+P`. Search for **VSLook: Export** and press `Enter`.
- Theme will be saved in `$HOME/vslook-theme.json`.

</br>

### 🖨 Clone theme

- Open Command Palette `Ctrl+Shift+P`. Search for **VSLook: Clone** and press `Enter`.
- Choose the theme you want to clone.
- VSLook will copy all the styles from the selected theme.

⚠️Notes:

- This action is not reversible.
- Changing syntax colors with VSLook won't work correctly after cloning a theme.

</br>

### 🎨 Color palettes

VSLook comes with `Tailwind` & `Material` color palettes.

To change palette

- Go to Settings `Ctrl+,`.
- Search for **VSLook Palette Type**.
- Choose the palette you want to use.

</br>

### 🌈 Color variables

Create color variables from **Color Picker**. It will merge with color palettes.

![Add color variable](https://raw.githubusercontent.com/sudoaugustin/vslook/main/.github/media/add-color.gif)

To group your color variables, use a `/` in their names.

![Add color variable](https://raw.githubusercontent.com/sudoaugustin/vslook/main/.github/media/group-color.gif)

If you wanna set bulk amount of colors, open `setting.json` and paste something like this.

```json
"vslook.palette.colors": {
  "base":{
    "primary":"#111e6c",
    "secondary":"#b0dfe5"
  },
  "pink": {
    "100": "#ef4444",
    "200": "#ec4899",
    ...
  },
},
```
