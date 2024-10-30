/// <reference types="vite/client" />

declare global {
  interface Links {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  }
  interface User {
    username: string;
    email: string;
  }
  interface Package {
    name: string;
    scope: string;
    version: string;
    description: string;
    keywords: string[];
    date: string;
    links: Links;
    publisher: User;
    maintainers: User[];
  }
}

export {};
