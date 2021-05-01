
import path from 'path';
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from "vite-plugin-babel-macros"
import md5 from 'md5';


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: (name: string, file: string, css: string) => {
        const fileName = path.basename(file, ".module.scss");
        const hashed = md5(css);
        return `_${fileName}_${name}__${hashed.substring(0, 5)}`
      }
    }
  },
  plugins: [
    reactRefresh(),
    macrosPlugin()
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, 'src') }
    ],
  }
})
