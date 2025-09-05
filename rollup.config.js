import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/components.js',
  output: {
    sourcemap: false,
    format: 'es',
    name: 'components',
    file: 'dist/assets/components.js',
  },
  plugins: [
    nodeResolve()
  ]
}
