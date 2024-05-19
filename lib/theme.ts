import { ThemeVars } from '@mysten/dapp-kit';

export const customTheme: ThemeVars = {
  blurs: {
    modalOverlay: 'blur(0)',
  },
  backgroundColors: {
    primaryButton: 'bg-white-500',
    primaryButtonHover: 'bg-blue-600',
    outlineButtonHover: 'bg-blue-700',
    modalOverlay: 'rgba(0, 0, 0, 0.5)', // Custom overlay color
    modalPrimary: 'white',
    modalSecondary: '#f7f8f8',
    iconButton: 'transparent',
    iconButtonHover: '#f0f1f2',
    dropdownMenu: '#ffffff',
    dropdownMenuSeparator: '#f3f6f8',
    walletItemSelected: 'white',
    walletItemHover: '#3c4242',
  },
  borderColors: {
    outlineButton: '#e4e4e7',
  },
  colors: {
    primaryButton: 'text-white',
    outlineButton: 'text-black',
    iconButton: 'text-black',
    body: '#182435',
    bodyMuted: '#767a81',
    bodyDanger: '#ff794b',
  },
  radii: {
    small: '6px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
  },
  shadows: {
    primaryButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    walletItemSelected: '0px 2px 6px rgba(0, 0, 0, 0.05)',
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '600',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
  },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: 'normal',
    lineHeight: '1.3',
    letterSpacing: '1',
  },
};
