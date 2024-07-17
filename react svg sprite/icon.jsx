function Icon({ id, ...props }) {
  return (
    <svg {...props}>
      <use href={`/images/icons.svg#${id}`} />
    </svg>
  );
}

export default Icon;

