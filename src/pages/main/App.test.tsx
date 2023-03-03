import React from 'react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { render } from '@testing-library/react';
import { screen } from '../../tests/test-utils'

describe('App', () => {
    it('should render correctly', () => {
        render(<App/>);
        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeDefined();
        expect(screen.getByAltText(/react logo/i)).toBeDefined();
    })
})