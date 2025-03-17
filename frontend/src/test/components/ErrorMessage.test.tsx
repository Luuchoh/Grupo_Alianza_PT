import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ErrorMessage from "@components/ErrorMessage";

describe("Component ErrorMessage", () => {
  it('Renderiza correctamente con el titulo y la descripcion', () => {
    const testProps = {
      title: 'Error 404',
      description: 'Pagina no encontrada. La pagina solicitada no existe'
    };

    render(
    <MemoryRouter>
      <ErrorMessage {...testProps} />
    </MemoryRouter>
    );

    expect(screen.getByText(testProps.title)).toBeInTheDocument();
    expect(screen.getByText(testProps.description)).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(
      <MemoryRouter>
        <ErrorMessage
          title="Error"
          description="Something went wrong"
        />
      </MemoryRouter>
    );

    const image = screen.getByRole('img');
    console.log(image)
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('unsplash'));
  });

  it('has the correct link', () => {
    render(
      <MemoryRouter>
        <ErrorMessage
          title="Error"
          description="Something went wrong"
        />
      </MemoryRouter>
    );

    const link = screen.getByText('Ir al inicio');
    expect(link.closest('a')).toHaveAttribute('href', '/'); // Verifica href en el DOM
    expect(link).toHaveClass('bg-indigo-600');
  });
});