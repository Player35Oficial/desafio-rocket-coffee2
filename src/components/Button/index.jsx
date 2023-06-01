export default function Button({ id, text }) {
  return (
    <button id={id}>
      <span>{text}</span>
    </button>
  );
}
