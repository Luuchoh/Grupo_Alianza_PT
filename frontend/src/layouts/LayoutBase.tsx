
const LayoutBase = (props: any) => {

  const { children } = props;

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <header className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-md">
          <a href="#" className="h-8 w-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" alt="Empresa Logo" />
          </a>
          <nav className="flex gap-4">
            <a href="#" className="text-white hover:underline">Inicio</a>
            <a href="#" className="text-white hover:underline">Agregar</a>
          </nav>
      </header>

      <main className="flex-1 flex justify-center items-center w-[75vw] max-w-[960px] p-4">
        {children}
      </main>
    </div>
  );
};

export default LayoutBase;