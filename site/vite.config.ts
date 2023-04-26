import { defineConfig, loadEnv } from 'vite'
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";
import * as dotenv from 'dotenv';


// https://github.com/n8sabes/qwik-env-vars-demystified
export const logEnvVars = (header: string, objLabel?: string, obj?: any, dotenvResult?: any) => {
  console.warn(`\n\n###\n### ENVIRONMENT VARS [vite.config.ts] -- ${header}\n###`);

  obj && console.warn(`${objLabel} = `, obj);
  // console.warn(`process.env = `, process.env);
  console.warn(`process.env['VITE_PRODUCT_NAME'] = `, process.env['VITE_PRODUCT_NAME']);
  console.warn(`process.env.SECRET_KEY = `, process.env['SECRET_KEY']);
}

//
// SETUP ENVRIONMENT VARIABLES
//
const envDir = process?.cwd();   // "~/secrets/qwik-env-vars-demystified".replace(/^~\//g, os.homedir() + "/");
const envFile = ".env"; // `.env.${process?.env.NODE_ENV}`;

//
// Log environment variables at startup state
//
// logEnvVars("Global Scope");

//
// loadEnv() ONLY LOADS variables with "VITE_" prefix
//
const loadEnvResult: any = loadEnv(process?.env.NODE_ENV!, envDir);
// logEnvVars("loadEnv() contains only VITE_ vars, NO SECRETS", "loadEnvResult", loadEnvResult);

//
// Merge environment variables with process?.env
//
// Object.assign(process.env, loadEnvResult);  // process.env = { ...process?.env, ...loadEnvResult };
// logEnvVars("merged loadEnv() with process.env");

//
// dotenv.config() loads all variables from the .env file, including secrets
//
const dotenvResult: any = dotenv.config({ path: `${envDir}/${envFile}` });
// logEnvVars("dotenv.config() loads everything, INCLUDING SECRETS!", "dotenvResult", dotenvResult);


export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    test: {},
  };
});
