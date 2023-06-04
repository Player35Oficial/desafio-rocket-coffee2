export default function Button({ id, text }) {
  const handleClick = () => {
    alert("Você pegou um Café! ☕");
  };

  return (
    <button id={id} onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
}
