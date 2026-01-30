export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-4">Next.js Todo App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Fetching todos from a dummy API
        </p>
        <a
          href="/todos"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Todos
        </a>
      </main>
    </div>
  );
}
