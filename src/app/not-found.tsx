export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-green-400 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}