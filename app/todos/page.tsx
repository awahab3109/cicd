interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function getTodos(): Promise<Todo[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/todos`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }
  
  return res.json();
}

export default async function TodosPage() {
  const todos = await getTodos();
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Todos</h1>
      <div className="grid gap-4 max-w-4xl">
        {todos.slice(0, 20).map((todo) => (
          <div
            key={todo.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="mt-1"
              />
              <div>
                <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.title}
                </h3>
                <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
