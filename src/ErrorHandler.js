export default function ErrorHandler({ message }) {
  return (
    <p className="error">
      <span>😥</span>
      {message}
    </p>
  );
}
