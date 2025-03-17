import { NavLink } from "react-router";

/**
 * Componente que envuelve el contenido principal de la pagina
 * 
 * @param { any } props - propiedades del componente
 * @param { React.FC } props.children - componente principal 
 * @returns componente 
 */

const LayoutBase = (props: any) => {
  const { children } = props;

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <header className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-md fixed top-0 z-10">
        <NavLink to="/" className="h-8 w-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png" alt="Empresa Logo" />
        </NavLink>
        <nav className="flex gap-4">
          <NavLink to="/" className="text-white hover:underline">Inicio</NavLink>
          <NavLink to="/create-product" className="text-white hover:underline">Agregar</NavLink>
        </nav>
      </header>

      <main className="flex-1 flex justify-center items-center w-[75vw] max-w-[960px] p-4 mt-16">
        {children}
      </main>
    </div>
  );
};

export default LayoutBase;