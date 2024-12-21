
import { ThemeProvider, ThemeProviderProps } from 'next-themes';

interface ToasterComponentProps extends ThemeProviderProps {
    children: React.ReactNode;
}

export const exampleThemeProps: ThemeProviderProps = {
    forcedTheme: 'light',
    disableTransitionOnChange: true,
    enableSystem: true,
    storageKey: 'theme',
    themes: ['light', 'dark'],
    defaultTheme: 'light',
};

export const ThemeComponent: React.FC<ToasterComponentProps> = ({ children, ...exampleThemeProps }) => {
    return (
        <ThemeProvider {...exampleThemeProps}>
            {children}
        </ThemeProvider>
    );
};
