/** @type {import('tailwindcss').Config} */

const COLORS = {
	background: {
	  light: {
		neutral: {
		  neutral: '#FFFFFF',
		  two: '#F6F6F7',
		  three: '#EEF0F1',
		  four: '#CCD1D5',
		  five: '#1F242F',
		  transparent: '#161B2629',
		},
		primary: {
		  primary: '#F1F3FF',
		  two: '#E6EBFF',
		  three: '#CFD8FF',
		  four: '#A9B7FF',
		  transparent: '#F1F3FF7A',
		  tooltip: '#434EFF',
		  texttooltip: '#303136',
		},
		progress: {
		  cricitcal: '#27151D',
		  high: '#271914',
		  medium: '#271914',
		  low: '#171B32',
		},
	  },
	  dark: {
		neutral: {
		  neutral: '#090D16',
		  two: '#0E131C',
		  three: '#161B26',
		  four: '#20215E',
		  five: '#1F242F',
		  transparent: '#161B2629',
		},
		primary: {
		  primary: '#010443',
		  two: '#141574',
		  three: '#2527A7',
		  four: '#3032BB',
		  transparent: '#0104437A',
		  tooltip: '#434EFF',
		  texttooltip: '#060818',
		},
		progress: {
		  cricitcal: '#27151D',
		  high: '#271914',
		  medium: '#271914',
		  low: '#171B32',
		},
	  },
	  accent: {
		accent: '#FFFAEB',
		two: '#FEF1C7',
	  },
	  error: {
		error: '#FFF0F1',
		two: '#FFE2E5',
	  },
	  status: {
		red: '#ff575733',
		orange: '#FF740A1F',
		yellow: '#FBC02D1F',
		green: '#2FD8971F',
	  },
	  badge: {
		danger: '#FF740A1F',
		warning: '#FBC02D1F',
		error: '#FF57571F',
		primary: '#7988FF1F',
		success: '#2FD8971F',
	  },
	  grey: {
		default: '#7D858F',
	  },
	},
	text: {
	  light: {
		primary: '#303136',
		secondary: '#797F89',
		disabled: '#DFE4E6',
		inverse: {
		  primary: '#F1F3FF',
		  secondary: '#CCD1D5',
		  disabled: '#636770',
		},
		button: {
		  primary: {
			disabled: '#7988FF',
		  },
		  outline: {
			default: '#434EFF',
			active: '#0B0BF6',
			hover: '#1D1EFF',
			disabled: '#CFD8FF',
		  },
		  destructive: { default: '#FF697E', hover: '#FF264A' },
		},
		navigation: {
		  default: '#797F89',
		  selected: '#434EFF',
		},
		red: {
		  default: '#FF264A',
		  active: '#C80836',
		  red: '#FF5757',
		},
		yellow: {
		  defualt: '#FFC620',
		},
		green: {
		  defualt: '#00D16C',
		},
		indigo: {
		  default: '#7988FF',
		},
		badge: {
		  danger: '#FF740A',
		  warning: '#F59C0B',
		  error: '#FF5757',
		  primary: '#7988FF',
		  success: '#2FD897',
		},
	  },
	  dark: {
		primary: '#F1F3FF',
		secondary: '#B6BCC3',
		blue: '#7988FF',
		error: '#FF697E',
		disabled: '#636770',
		inverse: {
		  primary: '#303136',
		  secondary: '#797F89',
		  disabled: '#DFE4E6',
		},
		button: {
		  primary: {
			disabled: '#7988FF',
		  },
		  outline: {
			default: '#7988FF',
			active: '#A9B7FF',
			hover: '#434EFF',
			disabled: '#0A09A9',
		  },
  
		  destructive: { default: '#FF697E', hover: '#FF264A' },
		},
		navigation: {
		  default: '#CFD8FF',
		  selected: '#7988FF',
		},
		red: {
		  default: '#FF697E',
		  active: '#FF264A',
		},
		yellow: {
		  defualt: '#FFC620',
		},
		green: {
		  defualt: '#00D16C',
		},
		indigo: {
		  default: '#7988FF',
		},
		badge: {
		  danger: '#FF740A',
		  warning: '#F59C0B',
		  error: '#FF5757',
		  primary: '#7988FF',
		  success: '#2FD897',
		},
	  },
	},
	card: {
	  primary: '#FFFFFF',
	  hover: '#F6F6F7',
	},
	fields: {
	  primary: '#FFFFFF',
	  hover: '#F6F6F7',
	},
	button: {
	  primary: {
		default: '#434EFF',
		hover: '#1D1EFF',
		active: '#0B0BF6',
		disabled: {
		  light: '#E6EBFF',
		  dark: '#02066F',
		},
	  },
	},
	status: {
	  green: '#2FD897',
	  yellow: '#FBB724',
	  red: '#FF697E',
	  blue: '#7988FF',
	  grey: '#B6BCC3',
	  orange: '#E27A1E',
	  indigo: '#7988FF',
	  criticalYellow: '#F59C0B',
	},
	neutral: {
	  black: '#000000',
	  white: '#F1F3FF',
	},
	icon: {
	  light: {
		neutral: {
		  neutral: '#8D939E',
		  active: '#303136',
		  disabled: '#DFE4E6',
		  activeInverse: '#F6F6F7',
		  hover: '#F1F3FF',
		},
		primary: {
		  primary: '#434EFF',
		  active: '#1D1EFF',
		  disabled: '#E6EBFF',
		},
		error: {
		  error: '#FF264A',
		  active: '#C80836',
		  disabled: '#FFE2E5',
		},
	  },
	  dark: {
		neutral: {
		  neutral: '#797F89',
		  active: '#DFE4E6',
		  disabled: '#53575C',
		  activeInverse: '#303136',
		  hover: '#F1F3FF',
		},
		primary: {
		  primary: '#7988FF',
		  active: '#434EFF',
		  disabled: '#E6EBFF',
		},
		error: {
		  error: '#FF697E',
		  active: '#FF264A',
		  disabled: '#FFE2E5',
		},
	  },
	  accent: {
		accent: '#FBB724',
		active: '#D96F06',
		disabled: '#FEF1C7',
	  },
	},
	stroke: {
	  light: {
		neutral: {
		  neutral: '#DFE4E6',
		  two: '#B6BCC3',
		  three: '#B6BCC3',
		  light: '#EEF0F1',
		},
	  },
	  dark: {
		neutral: {
		  neutral: '#1F242F',
		  two: '#636770',
		  three: '#313640',
		  light: '#161B26',
		},
	  },
	  primary: {
		primary: '#CFD8FF',
		two: {
		  light: '#7988FF',
		  dark: '#434EFF',
		},
	  },
	  accent: {
		accent: '#FDE28A',
		two: '#FBB724',
	  },
	  error: {
		error: '#FFCAD1',
		two: '#FF697E',
	  },
	  badge: {
		danger: '#FF740A1F',
		warning: '#FBC02D1F',
		error: '#FF57571F',
		primary: '#7988FF1F',
		success: '#2FD8971F',
	  },
	  button: {
		outline: {
		  default: '#434EFF',
		  hover: '#1D1EFF',
		  active: '#0B0BF6',
		  disabled: {
			light: '#CFD8FF',
			dark: '#20215E',
		  },
		  red: {
			default: '#FF697E',
			hover: '#FF264A',
			active: {
			  light: '#C80836',
			  dark: '#FF9FAA',
			},
			disabled: {
			  light: '#FFE2E5',
			  dark: '#8F0C33',
			},
		  },
		  neutral: {
			default: '#161B26',
			hover: '#1F242F',
		  },
		},
	  },
	  tooltip: {
		arrow: '#313630',
	  },
	},
	chart: {
	  red: '#FF5757',
	  yellow: '#FBC02D',
	  green: '#2FD897',
	  dark: '#0E131C',
	},
	input: {
	  background: {
		primary: '#313640',
	  },
	  stroke: {
		primary: '#313640',
	  },
	},
  };
  
  export default {
	darkMode: ['class'],
	// important: true,
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
	  extend: {
		keyframes: {
		  dotAnimation: {
			'0%, 20%': { content: "''" },
			'40%': { content: "'.'" },
			'60%': { content: "'..'" },
			'80%, 100%': { content: "'...'" },
		  },
		  shimmer: {
			'0%': { transform: 'translateX(-100%)' },
			'100%': { transform: 'translateX(100%)' },
		  },
		},
		animation: {
		  dots: 'dotAnimation 2s infinite steps(3)',
		  shimmer: 'shimmer 2s infinite',
		},
		fontFamily: {
		  inter: ['Inter'],
		  mono: ['Space Mono', 'monospace'],
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  // backgroud
		  'background-light-neutral-neutral':
			COLORS.background.light.neutral.neutral,
		  'background-light-neutral-two': COLORS.background.light.neutral.two,
		  'background-light-neutral-three': COLORS.background.light.neutral.three,
		  'background-light-neutral-four': COLORS.background.light.neutral.four,
		  'background-light-primary-primary':
			COLORS.background.light.primary.primary,
		  'background-light-primary-two': COLORS.background.light.primary.two,
		  'background-light-primary-three': COLORS.background.light.primary.three,
		  'background-light-primary-four': COLORS.background.light.primary.four,
		  'background-light-primary-transparent':
			COLORS.background.light.primary.transparent,
		  'background-dark-neutral-neutral':
			COLORS.background.dark.neutral.neutral,
		  'background-dark-neutral-two': COLORS.background.dark.neutral.two,
		  'background-dark-neutral-three': COLORS.background.dark.neutral.three,
		  'background-dark-neutral-four': COLORS.background.dark.neutral.four,
		  'background-dark-neutral-five': COLORS.background.dark.neutral.five,
		  'background-light-neutral-five': COLORS.background.light.neutral.five,
		  'background-light-primary-tooltip-sidebar':
			COLORS.background.light.primary.tooltip,
		  'background-light-primary-tooltip-content':
			COLORS.background.light.primary.texttooltip,
		  'background-dark-primary-primary':
			COLORS.background.dark.primary.primary,
		  'background-dark-primary-tooltip-content':
			COLORS.background.dark.primary.texttooltip,
		  'background-dark-primary-two': COLORS.background.dark.primary.two,
		  'background-dark-primary-three': COLORS.background.dark.primary.three,
		  'background-dark-primary-four': COLORS.background.dark.primary.four,
		  'background-dark-primary-transparent':
			COLORS.background.dark.primary.transparent,
		  'background-light-neutral-transparent':
			COLORS.background.light.neutral.transparent,
		  'background-dark-neutral-transparent':
			COLORS.background.dark.neutral.transparent,
  
		  'background-dark-primary-tooltip-sidebar':
			COLORS.background.dark.primary.tooltip,
		  'background-accent-accent': COLORS.background.accent.accent,
		  'background-accent-two': COLORS.background.accent.two,
		  'background-error-error': COLORS.background.error.error,
		  'background-error-two': COLORS.background.error.two,
		  'background-stroke-light-neutral-two': COLORS.stroke.light.neutral.two,
		  'background-stroke-dark-neutral-two': COLORS.stroke.dark.neutral.two,
		  'background-status-red': COLORS.background.status.red,
		  'background-status-orange': COLORS.background.status.orange,
		  'background-status-yellow': COLORS.background.status.yellow,
		  'background-status-green': COLORS.background.status.green,
		  'background-badge-warning': COLORS.background.badge.warning,
		  'background-badge-error': COLORS.background.badge.error,
		  'background-badge-primary': COLORS.background.badge.primary,
		  'background-badge-danger': COLORS.background.badge.danger,
		  'background-badge-success': COLORS.background.badge.success,
		  'background-grey-default': COLORS.background.grey.default,
  
		  // progress bar backgrounds
		  'background-light-progress-critical':
			COLORS.background.light.progress.cricitcal,
		  'background-light-progress-high': COLORS.background.light.progress.high,
		  'background-light-progress-medium':
			COLORS.background.light.progress.medium,
		  'background-light-progress-low': COLORS.background.light.progress.low,
		  'background-dark-progress-critical':
			COLORS.background.dark.progress.cricitcal,
		  'background-dark-progress-high': COLORS.background.dark.progress.high,
		  'background-dark-progress-medium':
			COLORS.background.dark.progress.medium,
		  'background-dark-progress-low': COLORS.background.dark.progress.low,
  
		  // text
		  'text-light-primary': COLORS.text.light.primary,
		  'text-light-secondary': COLORS.text.light.secondary,
		  'text-light-disabled': COLORS.text.light.disabled,
		  'text-light-inverse-primary': COLORS.text.light.inverse.primary,
		  'text-light-inverse-secondary': COLORS.text.light.inverse.secondary,
		  'text-light-inverse-disabled': COLORS.text.light.inverse.disabled,
		  'text-light-button-primary-disabled':
			COLORS.text.light.button.primary.disabled,
		  'text-light-button-outline-default':
			COLORS.text.light.button.outline.default,
		  'text-light-button-outline-active':
			COLORS.text.light.button.outline.active,
		  'text-light-button-outline-hover':
			COLORS.text.light.button.outline.hover,
		  'text-light-button-outline-disabled':
			COLORS.text.light.button.outline.disabled,
		  'text-light-navigation-default': COLORS.text.light.navigation.default,
		  'text-light-navigation-selected': COLORS.text.light.navigation.selected,
		  'text-light-red-default': COLORS.text.light.red.default,
		  'text-light-red-active': COLORS.text.light.red.active,
		  'text-light-button-destructive-default':
			COLORS.text.light.button.destructive.default,
		  'text-light-button-destructive-default-hover':
			COLORS.text.light.button.destructive.hover,
		  'text-dark-blue': COLORS.text.dark.blue,
		  'text-dark-error': COLORS.text.dark.error,
		  'text-dark-primary': COLORS.text.dark.primary,
		  'text-dark-secondary': COLORS.text.dark.secondary,
		  'text-dark-disabled': COLORS.text.dark.disabled,
		  'text-dark-inverse-primary': COLORS.text.dark.inverse.primary,
		  'text-dark-inverse-secondary': COLORS.text.dark.inverse.secondary,
		  'text-dark-inverse-disabled': COLORS.text.dark.inverse.disabled,
		  'text-dark-button-primary-disabled':
			COLORS.text.dark.button.primary.disabled,
		  'text-dark-button-outline-default':
			COLORS.text.dark.button.outline.default,
		  'text-dark-button-outline-active':
			COLORS.text.dark.button.outline.active,
		  'text-dark-button-outline-hover': COLORS.text.dark.button.outline.hover,
		  'text-dark-button-outline-disabled':
			COLORS.text.dark.button.outline.disabled,
		  'text-dark-navigation-default': COLORS.text.dark.navigation.default,
		  'text-dark-navigation-selected': COLORS.text.dark.navigation.selected,
		  'text-dark-red-default': COLORS.text.dark.red.default,
		  'text-dark-red-active': COLORS.text.dark.red.active,
		  'text-neutral-white': COLORS.neutral.white,
		  'text-neutral-black': COLORS.neutral.black,
		  'text-stroke-dark-neutral-three': COLORS.stroke.dark.neutral.three,
		  'text-stroke-light-neutral-three': COLORS.stroke.light.neutral.three,
		  'text-txt-green': COLORS.text.light.green.default,
		  'text-light-yellow': COLORS.text.light.yellow.default,
		  'text-status-red': COLORS.text.light.red.red,
		  'text-badge-warning': COLORS.text.dark.badge.warning,
		  'text-badge-error': COLORS.text.dark.badge.error,
		  'text-badge-primary': COLORS.text.dark.badge.primary,
		  'text-badge-danger': COLORS.text.dark.badge.danger,
		  'text-badge-success': COLORS.text.dark.badge.success,
  
		  // card
		  'card-primary': COLORS.card.primary,
		  'card-hover': COLORS.card.hover,
  
		  // fields
		  'input-fields-primary': COLORS.fields.primary,
		  'input-fields-hover': COLORS.fields.hover,
		  'input-fields-background': COLORS.input.background.primary,
		  'input-fields-stroke-dark-primary': COLORS.input.stroke.primary,
  
		  // button
		  'button-primary-default': COLORS.button.primary.default,
		  'button-primary-hover': COLORS.button.primary.hover,
		  'button-primary-active': COLORS.button.primary.active,
		  'button-primary-disabled-light': COLORS.button.primary.disabled.light,
		  'button-primary-disabled-dark': COLORS.button.primary.disabled.dark,
  
		  'primary-disabled-light': COLORS.button.primary.disabled.light,
		  // status
		  'status-green': COLORS.status.green,
		  'status-yellow': COLORS.status.yellow,
		  'status-red': COLORS.status.red,
		  'status-orange': COLORS.status.orange,
		  'status-indigo': COLORS.status.indigo,
		  'status-blue': COLORS.status.blue,
		  'status-grey': COLORS.status.grey,
		  'status-gray': COLORS.status.gray,
		  'status-criticalYellow': COLORS.status.criticalYellow,
		  // neutral
		  'neutral-black': COLORS.neutral.black,
		  'neutral-white': COLORS.neutral.white,
  
		  // icon
		  'icon-light-neutral-neutral': COLORS.icon.light.neutral.neutral,
		  'icon-light-neutral-hover': COLORS.icon.light.neutral.hover,
		  'icon-light-neutral-active': COLORS.icon.light.neutral.active,
		  'icon-light-neutral-disabled': COLORS.icon.light.neutral.disabled,
		  'icon-light-neutral-activeInverse':
			COLORS.icon.light.neutral.activeInverse,
		  'icon-light-primary-primary': COLORS.icon.light.primary.primary,
		  'icon-light-primary-active': COLORS.icon.light.primary.active,
		  'icon-light-primary-disabled': COLORS.icon.light.primary.disabled,
		  'icon-light-error-error': COLORS.icon.light.error.error,
		  'icon-light-error-active': COLORS.icon.light.error.active,
		  'icon-light-error-disabled': COLORS.icon.light.error.disabled,
		  'icon-dark-neutral-neutral': COLORS.icon.dark.neutral.neutral,
		  'icon-dark-neutral-hover': COLORS.icon.dark.neutral.hover,
		  'icon-dark-neutral-active': COLORS.icon.dark.neutral.active,
		  'icon-dark-neutral-disabled': COLORS.icon.dark.neutral.disabled,
		  'icon-dark-neutral-activeInverse':
			COLORS.icon.dark.neutral.activeInverse,
		  'icon-dark-primary-primary': COLORS.icon.dark.primary.primary,
		  'icon-dark-primary-active': COLORS.icon.dark.primary.active,
		  'icon-dark-primary-disabled': COLORS.icon.dark.primary.disabled,
		  'icon-dark-error-error': COLORS.icon.dark.error.error,
		  'icon-dark-error-active': COLORS.icon.dark.error.active,
		  'icon-dark-error-disabled': COLORS.icon.dark.error.disabled,
		  'icon-accent-accent': COLORS.icon.accent.accent,
		  'icon-accent-active': COLORS.icon.accent.active,
		  'icon-accent-disabled': COLORS.icon.accent.disabled,
  
		  // stroke
		  'border-light-neutral-neutral': COLORS.stroke.light.neutral.neutral,
		  'border-light-neutral-two': COLORS.stroke.light.neutral.two,
		  'border-light-neutral-three': COLORS.stroke.light.neutral.three,
		  'border-light-neutral-light': COLORS.stroke.light.neutral.light,
		  'border-dark-neutral-neutral': COLORS.stroke.dark.neutral.neutral,
		  'border-dark-neutral-two': COLORS.stroke.dark.neutral.two,
		  'border-dark-neutral-three': COLORS.stroke.dark.neutral.three,
		  'border-dark-neutral-dark': COLORS.stroke.dark.neutral.light,
		  'border-primary-primary': COLORS.stroke.primary.primary,
		  'border-primary-two-light': COLORS.stroke.primary.two.light,
		  'border-primary-two-dark': COLORS.stroke.primary.two.dark,
		  'border-accent-accent': COLORS.stroke.accent.accent,
		  'border-accent-two': COLORS.stroke.accent.two,
		  'border-error-error': COLORS.stroke.error.error,
		  'border-error-two': COLORS.stroke.error.two,
		  'border-button-outline-default': COLORS.stroke.button.outline.default,
		  'border-button-outline-hover': COLORS.stroke.button.outline.hover,
		  'border-button-outline-active': COLORS.stroke.button.outline.active,
		  'border-button-outline-disabled-light':
			COLORS.stroke.button.outline.disabled.light,
		  'border-button-outline-disabled-dark':
			COLORS.stroke.button.outline.disabled.dark,
		  'border-button-red-default': COLORS.stroke.button.outline.red.default,
		  'border-button-red-hover': COLORS.stroke.button.outline.red.hover,
		  'border-button-red-active-light':
			COLORS.stroke.button.outline.red.active.light,
		  'border-button-red-active-dark':
			COLORS.stroke.button.outline.red.active.dark,
		  'border-button-red-disabled-light':
			COLORS.stroke.button.outline.red.disabled.light,
		  'border-button-red-disabled-dark':
			COLORS.stroke.button.outline.red.disabled.dark,
		  'border-button-neutral-dark-default':
			COLORS.stroke.button.outline.neutral.default,
		  'border-button-neutral-hover-dark':
			COLORS.stroke.button.outline.neutral.hover,
		  'border-badge-danger': COLORS.stroke.badge.danger,
		  'border-badge-primary': COLORS.stroke.badge.primary,
		  'border-badge-error': COLORS.stroke.badge.error,
		  'border-badge-warning': COLORS.stroke.badge.warning,
		  'border-badge-success': COLORS.stroke.badge.success,
		  // icon
		  'stroke-primary-two-light': COLORS.stroke.primary.two.light,
		  'stroke-primary-two-dark': COLORS.stroke.primary.two.dark,
		  'stroke-neutral-two-light': COLORS.stroke.light.neutral.two,
		  'stroke-neutral-two-dark': COLORS.stroke.dark.neutral.two,
		  'stroke-light-neutral-active': COLORS.icon.light.neutral.active,
		  'stroke-light-neutral-inactive': COLORS.icon.light.neutral.neutral,
		  'stroke-light-neutral-light': COLORS.stroke.light.neutral.light,
		  'stroke-light-neutral-three': COLORS.stroke.light.neutral.three,
		  'stroke-dark-neutral-active': COLORS.icon.dark.neutral.active,
		  'stroke-dark-neutral-inactive': COLORS.icon.dark.neutral.neutral,
		  'stroke-dark-neutral-three': COLORS.stroke.dark.neutral.three,
		  'stroke-dark-neutral-neutral': COLORS.stroke.dark.neutral.neutral,
		  'stroke-dark-neutral-light': COLORS.stroke.dark.neutral.light,
		  'stroke-tooltip-arrow': COLORS.stroke.tooltip.arrow,
		  'stroke-tooltip-content': COLORS.background.dark.primary.texttooltip,
		  'stroke-green': COLORS.status.green,
		  'stroke-yellow': COLORS.status.yellow,
		  'stroke-red': COLORS.status.red,
		  'stroke-blue': COLORS.status.blue,
  
		  // chart styles
		  'stroke-chart-red': COLORS.chart.red,
		  'stroke-chart-yellow': COLORS.chart.yellow,
		  'stroke-chart-green': COLORS.chart.green,
		  'stroke-chart-dark': COLORS.chart.dark,
		  'fill-chart-red': COLORS.chart.red,
		  'fill-chart-yellow': COLORS.chart.yellow,
		  'fill-chart-green': COLORS.chart.green,
		  'fill-chart-dark': COLORS.chart.dark,
		  'text-chart-red': COLORS.chart.red,
		  'text-chart-yellow': COLORS.chart.yellow,
		  'text-chart-green': COLORS.chart.green,
		  'text-chart-dark': COLORS.chart.dark,
		  'grid-lines': COLORS.chart.dark,
		  'tooltip-text-red': COLORS.chart.red,
		  'tooltip-text-yellow': COLORS.chart.yellow,
		  'tooltip-text-green': COLORS.chart.green,
		  'tooltip-text-dark': COLORS.chart.dark, 
		  'chart-red': COLORS.chart.red,
		  'chart-yellow': COLORS.chart.yellow,
		  'chart-green': COLORS.chart.green,
		  'chart-dark': COLORS.chart.dark,
		  'txt-red': COLORS.chart.red,
		  'txt-yellow': COLORS.chart.yellow,
		  'txt-green': COLORS.chart.green,
		  'txt-dark': COLORS.chart.dark,
		  'background-chart-red': COLORS.chart.red,
		  'background-chart-yellow': COLORS.chart.yellow,
		  'background-chart-green': COLORS.chart.green,
		  'background-chart-dark': COLORS.chart.dark,
  
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))',
		  },
		},
		fontSize: {
		  heading1: ['48px', { lineHeight: '56px' }, { letterSpacing: '-0.5px' }],
		  heading2: ['40px', { lineHeight: '48px' }, { letterSpacing: '-0.5px' }],
		  heading3: ['32px', { lineHeight: '36px' }, { letterSpacing: '-0.5px' }],
		  heading4: ['24px', { lineHeight: '28px' }, { letterSpacing: '-0.5px' }],
		  heading5: ['20px', { lineHeight: '24px' }, { letterSpacing: '-0.5px' }],
		  body: ['16px', { lineHeight: '20px' }, { letterSpacing: '0px' }],
		  'body-small': [
			'14px',
			{ lineHeight: '16px' },
			{ letterSpacing: '0px' },
		  ],
		  label: ['12px', { lineHeight: '14px' }, { letterSpacing: '0px' }],
		  'extra-small': [
			'10px',
			{ lineHeight: '12px' },
			{ letterSpacing: '0px' },
		  ],
		},
		boxShadow: {
		  'risk-card': '0px 24px 48px 0px #0000007A',
		  btn: '0px 12px 24px 0px #0000007A',
		  'status-green': '0 0 8px 0px #2FD897',
		},
		// Custom tooltip classes
		// backgroundImage: {
		//   'tooltip': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
		// },
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };