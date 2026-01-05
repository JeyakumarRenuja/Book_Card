import BookList from "./components/BookList";

function App() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "The book teaches practical ways to build good habits, break bad ones, and improve your life step by step."
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "The book teaches lessons about destiny, self-belief, and listening to your heart while pursuing your life’s purpose."
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      description: "It helps programmers learn best practices, improve code quality, and develop good coding habits for professional software development."
    }
  ];

  return (
    <div className="min-h-screen bg-cyan-950 p-6">
      <h1 className="text-5xl font-bold text-center mb-8 mt-10 text-zinc-100">Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
