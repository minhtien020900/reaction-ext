import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";
import { viteStaticCopy } from 'vite-plugin-static-copy'

function generateManifest() {
  const manifest = readJsonFile("src/manifest.json");
  const pkg = readJsonFile("package.json");
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webExtension({
      manifest: generateManifest,
      watchFilePaths: ["package.json", "manifest.json"],
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/inject-intercept-notify.js',
          dest: 'src/intercept-notify'
        },
        // {
        //   src: 'src/rm-intercept-notify.js',
        //   dest: 'src/intercept-notify'
        // },
      ]
    })
  ],
  build:{
    rollupOptions:{
      // input:{
      //   'src/notifyhook':'src/inject-intercept-notify.js'
      // },


    },
    commonjsOptions:{exclude:'src/plugin/*.js'
    }
  },

});
