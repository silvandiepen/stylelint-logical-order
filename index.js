const special = [
	'composes',
	'content'
];
const position = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'z-index',
];
const boxmodel = [
  'display',
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'flex-flow',
  'flex-direction',
  'flex-wrap',
  'justify-content',
  'align-content',
  'align-items',
  'align-self',
  'order',
  'float',
  'clear',
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
	'max-height',
	'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'gap',
];
const border = [
  'border',
  'border-width',
  'border-style',
  'border-color',
  'border-top',
  'border-top-width',
  'border-top-style',
  'border-top-color',
  'border-right',
  'border-right-width',
  'border-right-style',
  'border-right-color',
  'border-bottom',
  'border-bottom-width',
  'border-bottom-style',
  'border-bottom-color',
  'border-left',
  'border-left-width',
  'border-left-style',
  'border-left-color',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'border-collapse',
  'border-spacing',
  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
	'outline-offset'
];
	
const sizing = [
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
	'padding-left',
];	
const box = [
  'box-shadow',
  'box-decoration-break',
];	
const typography = [
  'color',
  'font',
  'font-weight',
  'font-size',
  'font-family',
  'font-style',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  'font-smooth',
  'line-height',
  'direction',
  'letter-spacing',
  'white-space',
  'text-align',
  'text-align-last',
  'text-transform',
  'text-decoration',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-indent',
  'text-justify',
  'text-outline',
  'text-wrap',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-orientation',
  'text-shadow',
  'vertical-align',
  'word-wrap',
  'word-break',
  'word-spacing',
  'overflow-wrap',
  'tab-size',
  'hyphens',
	'unicode-bidi'	
];
const contentlayout = [
  'columns',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'src',
];
const visual = [
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image',
  'table-layout',
  'empty-cells',
  'caption-side',
];	
const background = [
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-size',
  'background-clip',
  'background-origin',
  'background-attachment',
  'background-blend-mode',
];	
const transform = [
  'transform',
  'transform-origin',
	'transform-style',
	
	
];	const visibility = [
  'overflow',
  'overflow-x',
  'overflow-y',
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'visibility',
  'cursor',
  'opacity',
  'filter',
  'backdrop-filter',
  'appearance',
  'clip',
  'clip-path',
];
const animation = [
  'transition',
  'transition-delay',
  'transition-timing-function',
  'transition-duration',
  'transition-property',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'will-change',
];
const misc = [
  'counter-reset',
  'counter-increment',
  'resize',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left',
  'pointer-events',
  'quotes',
  'touch-action',
  'zoom',
];
const svg = [
  'fill',
  'fill-rule',
  'clip-rule',
  'stroke',
];
const logical = [
  ...special,
  ...position,
  ...boxmodel,
  ...border,
  ...box,
  ...typography,
  ...contentlayout,
  ...visual,
  ...background,
  ...transform,
  ...animation,
  ...misc,
  ...svg,
];

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'composes',
        ],
      },
    ],
    'order/properties-order': logical,
  },
};
