export default function HealthPage() {
  const payload = {
    service: 'operatoros-web',
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-white">Health</h1>
      <p className="text-sm text-slate-400">Static shell status for deploy probes and operators.</p>
      <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/80 p-4 text-sm text-emerald-400">
        {JSON.stringify(payload, null, 2)}
      </pre>
    </div>
  );
}
