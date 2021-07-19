const { registerBlockType } = wp.blocks

registerBlockType("bdac/bdac-blocks", {
  // built-in attributes
  title: "Call to Action",
  description: "Block to generate a custom Call to Action",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {
    // author: {
    //   type: "string"
    // }
  },

  // Custom functions

  // built-in functions
  edit() {
    // NPX
    return `<p>Hello World!!!</p>`
  },

  save() {
    return `<p>Hello World!!!</p>`
  }
})
