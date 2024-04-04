import { error } from "node:console";
import fs from "node:fs";
import path from "path";

// interface Reader: any

let indicadoresTotal: string = path.join(
  "app",
  "(server)",
  "(analises)",
  "todasempresas",
  "indicadores.json"
);

export const reader = async () => {
  try {
    const data = await new Promise<string>((resolve, reject) => {
      fs.readFile(indicadoresTotal, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    return data;
  } catch (error) {
    throw error;
  }
};

function writeHandler(err: any) {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Data written to file successfully.");
  }
}

export async function writer(data: any) {
  try {
    await fs.writeFile(indicadoresTotal, data, "utf8", writeHandler);
    console.log("File written successfully.");
  } catch (err) {
    console.error("Error writing to file:", err);
    throw err;
  }
}
