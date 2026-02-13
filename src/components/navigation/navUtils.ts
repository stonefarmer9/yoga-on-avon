export type navConfig = {
  path: string;
  name: string;
};
export const pages: navConfig[] = [
  { path: "/", name: "Home" },
  { path: "/classes", name: "Classes" },
  { path: "/book-a-class/yogaNidra", name: "Book a class" },
  { path: "/yoga-nidra", name: "Yoga Nidra" },
  { path: "/private-classes", name: "Private Classes" },
];
