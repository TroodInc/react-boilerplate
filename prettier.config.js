export default {
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none',
  tailwindFunctions: ['clsx', 'cva'],
  importOrder: [
    '^app/(.*)$',
    '^pages/(.*)$',
    '^widgets/(.*)$',
    '^features/(.*)$',
    '^entities/(.*)$',
    '^shared/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
};
