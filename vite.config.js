import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-1/" : "/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        menu: path.resolve(__dirname, "src/menu.html"),
        blog: path.resolve(__dirname, "src/blog.html"),
        about: path.resolve(__dirname, "src/about.html"),
        pages: path.resolve(__dirname, "src/pages.html"),
        productDetails: path.resolve(__dirname, "src/product-details.html"),
        productDetailReview: path.resolve(
          __dirname,
          "src/product-detail-review.html"
        ),
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
