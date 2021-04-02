function ContentTitleSecondaryComponent({ content }) {
  const {
    text,
    color,
    fontFamily,
    fontSize,
  } = content;
  return (
    <div>
      <h2
       style={{ color, fontSize, fontFamily }}
      >
        { text }
      </h2>
    </div>
  );
}

export default ContentTitleSecondaryComponent;
