const { registerBlockType } = wp.blocks
const { RichText, InspectorControls, ColorPalette } = wp.editor
const { PanelBody } = wp.components

registerBlockType("bdac/bdac-blocks", {
  // built-in attributes
  title: "Call to Action",
  description: "Block to generate a custom Call to Action",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2"
    },
    titleColour: {
      type: "string",
      default: "black"
    },
    body: {
      type: "string",
      source: "html",
      selector: "p"
    },
    bodyColour: {
      type: "string",
      default: "black"
    }
  },

  // built-in functions
  edit({ attributes, setAttributes }) {
    const { title, body, titleColour, bodyColour } = attributes
    // Custom functions
    const onChangeTitle = newTitle => {
      setAttributes({ title: newTitle })
    }

    const onChangeBody = newBody => {
      setAttributes({ body: newBody })
    }

    const onTitleColourChange = newColour => {
      setAttributes({ titleColour: newColour })
    }

    const onBodyColourChange = newColour => {
      setAttributes({ bodyColour: newColour })
    }

    // NPX
    return [
      <InspectorControls style={{ marginBottom: "40px" }}>
        <PanelBody title={"Title Colour"}>
          <p>
            <strong>Select a title colour</strong>
          </p>
          <ColorPalette value={titleColour} onChange={onTitleColourChange} />
        </PanelBody>
        <PanelBody title={"Body Colour"}>
          <p>
            <strong>Select a body colour</strong>
          </p>
          <ColorPalette value={bodyColour} onChange={onBodyColourChange} />
        </PanelBody>
      </InspectorControls>,
      <section className="cta">
        <RichText key="editable" tagName="h2" placeholder="Your CTA Title" value={title} onChange={onChangeTitle} style={{ color: titleColour }} />
        <RichText key="editable" tagName="p" placeholder="Your Body" value={body} onChange={onChangeBody} style={{ color: bodyColour }} />
      </section>
    ]
  },

  save({ attributes }) {
    const { title, body, titleColour, bodyColour } = attributes
    return (
      <section className="cta">
        <h2 style={{ color: titleColour }}>{title}</h2>
        <RichText.Content tagName="p" value={body} style={{ color: bodyColour }} />
      </section>
    )
  }
})
