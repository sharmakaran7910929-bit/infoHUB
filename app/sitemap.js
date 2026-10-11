
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "http://localhost:3000";
const APP_DIR = path.join(process.cwd(), "app");

function discoverPages(directory, route = "") {
  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  let routes = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Ignore private folders and Next.js route groups.
    if (
      entry.name.startsWith("_") ||
      entry.name.startsWith("(")
    ) {
      continue;
    }

    // Ignore parallel and intercepted route folders.
    if (
      entry.name.startsWith("@") ||
      entry.name.startsWith(".")
    ) {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    // Dynamic routes need a separate URL source.
    if (entry.name.startsWith("[")) {
      continue;
    }

    const childRoute = `${route}/${entry.name}`;

    routes = routes.concat(
      discoverPages(fullPath, childRoute)
    );
  }

  // Include this directory if it contains page.js.
  if (fs.existsSync(path.join(directory, "page.js"))) {
    routes.push(route || "/");
  }

  return routes;
}

export default function sitemap() {
  const routes = discoverPages(APP_DIR);

  return routes.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
