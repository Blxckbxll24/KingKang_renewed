interface Log {
  id: string | number;
  createdAt: string;
  message: string;
}

interface LogsTableProps {
  logs: Log[];
}

export default function LogsTable({ logs }: LogsTableProps) {
  if (!logs || !Array.isArray(logs)) return null;

  
  const sortedLogs = [...logs].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  
  const lastSevenLogs = sortedLogs.slice(0, 7);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Actividad reciente</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {lastSevenLogs.map((log) => (
          <li key={log.id}>
            <strong>{new Date(log.createdAt).toLocaleString()}:</strong> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
