export default function AuthForm({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {children}
    </form>
  );
}
