import path from 'path'
import postcss from 'postcss'
import postcssJitProps from 'postcss-jit-props'
import OpenProps from 'open-props'
import postcssMixins from 'postcss-mixins'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import autoprefixer from 'autoprefixer'

let PLUGINS = [
  postcssMixins({
    mixinsDir: path.join(import.meta.dirname, 'mixins/'),
  }),
  postcssImport,
  postcssNested,
  (postcssJitProps as any)(OpenProps),
  autoprefixer,
]

let compiler = postcss(PLUGINS)

export { PLUGINS, compiler }
export default {
  PLUGINS,
  compiler,
}
