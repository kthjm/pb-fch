const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')

const NAME = 'name'

rollup
  .rollup({
    input: 'src/index.js',
    plugins: [flow(), resolve({ jsnext: true }), commonjs(), babel()]
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `dist/${NAME}.cjs.js` })
    bundle.write({ format: 'es', file: `dist/${NAME}.es.js` })
  })
  .catch(err => console.error(err))
