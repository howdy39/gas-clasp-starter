import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import license from 'rollup-plugin-license';
import packageJson from "./package.json" assert { type: "json" };


export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    cleanup({ comments: 'none', extensions: ['.ts'] }),
    license({
      banner: [
        `Name: ${packageJson.name}`,
        `Version: ${packageJson.version}`,
        `Description: ${packageJson.description}`,
        `@see ${packageJson.homepage}`
      ].join('\n'),
    }),
    typescript(),
  ],
  context: 'this',
};
