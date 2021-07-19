const { registerBlockType } = wp.blocks

registerBlockType("bdac/bdac-blocks", {
  // built-in attributes
  title: "Call to Action",
  description: "Block to generate a custom Call to Action",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {
    author: {
      type: "string"
    }
  },

  // built-in functions
  edit({ attributes, setAttributes }) {
    // Custom functions
    const updateAuthor = e => {
      setAttributes({ author: e.target.value })
    }

    // NPX
    return <input type="text" value={attributes.author} onChange={updateAuthor} />
  },

  save({ attributes }) {
    return <p>Author name: {attributes.author}</p>
  }
})
