/**
 * Componente que muestra una pantalla de carga
 * 
 * @returns componente 
 */

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading