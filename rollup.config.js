import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/playground.js',
  output: {
    sourcemap: false,
    format: 'es',
    name: 'playground',
    file: 'dist/assets/playground.js',
  },
  plugins: [
    nodeResolve()
  ]
}
