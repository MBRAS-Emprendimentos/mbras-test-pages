import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'path/to/store'; // Importe o caminho correto para o seu arquivo de store

describe('App', () => {
    it('renders without crashing', () => {
        render(<Provider store={store}>{/* Seu componente App aqui */}</Provider>);
    });
});
