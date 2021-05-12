
import path from 'path';
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from "vite-plugin-babel-macros"


// https://vitejs.dev/config/
export default defineConfig({
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
