import React from 'react';

interface ModalWarningInterface {
  handleConfirm: () => void;
  handleCancel: () => void;
  title?: string;
  message?: string;
}

/**
 * Componente que muestra un modal para advertir sobre una accion
 * 
 * @param { ModalWarningInterface } props - propiedades del componente
 * @param { Function } props.handleConfirm - Funcion que se ejecuta despues de confirmar la accion
 * @param { Function } props.handleCancel - funcion que cierra el modal
 * @param { string | undefined } props.title - titulo de la modal
 * @param { string | undefined } props.description - descripcion de la modal
 * @returns componente 
 */

const ModalWarning: React.FC<ModalWarningInterface> = (props) => {
  const {
    handleConfirm,
    handleCancel,
    title = "¿Estás seguro que quieres hacer eso?",
    message = "Hacer eso podría eliminarlo completamente, ¿estás 100% seguro?"
  } = props;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/25">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
        <h2 className="text-lg font-bold">{title}</h2>

        <p className="mt-2 text-sm text-gray-500">
          {message}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="rounded-sm bg-green-50 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleConfirm}
          >
            Sí, estoy seguro
          </button>

          <button
            type="button"
            className="rounded-sm bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleCancel}
          >
            No, me equivoqué
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWarning;