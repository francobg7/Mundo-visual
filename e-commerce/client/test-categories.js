// Script de prueba para verificar el filtrado de categorías
const products = [
  {
    id: 1,
    name: "Llavero Personalizado Empresarial",
    category: "articulos-promocionales",
  },
  {
    id: 2,
    name: "Taza Térmica Promocional",
    category: "articulos-promocionales",
  },
  {
    id: 3,
    name: "Bolso Ejecutivo Premium",
    category: "bolsos",
  },
  {
    id: 4,
    name: "Mochila Deportiva Multifunción",
    category: "bolsos",
  },
  {
    id: 5,
    name: "Kit Completo de Asado Premium",
    category: "kit-de-asado",
  },
  {
    id: 6,
    name: "Parrilla Portátil de Carbón",
    category: "kit-de-asado",
  },
  {
    id: 7,
    name: "Carpa Familiar 4 Personas",
    category: "camping",
  },
  {
    id: 8,
    name: "Saco de Dormir Térmico",
    category: "camping",
  },
  {
    id: 9,
    name: "Termo de Acero Inoxidable 1L",
    category: "termos",
  },
  {
    id: 10,
    name: "Termo Deportivo 500ml",
    category: "termos",
  },
  {
    id: 11,
    name: "Llavero Ejecutivo de Cuero",
    category: "llaveros-ejecutivos",
  },
  {
    id: 12,
    name: "Llavero Multifunción LED",
    category: "llaveros-ejecutivos",
  },
  {
    id: 13,
    name: "Árbol de Navidad Artificial 2m",
    category: "articulos-navidenos",
  },
  {
    id: 14,
    name: "Set de Decoración Navideña",
    category: "articulos-navidenos",
  },
  {
    id: 15,
    name: "Agenda Ejecutiva 2024",
    category: "block-de-notas",
  },
  {
    id: 16,
    name: "Block de Notas Profesional",
    category: "block-de-notas",
  },
];

// Función de filtrado
const filterProductsByCategory = (category) => {
  return category 
    ? products.filter(product => product.category === category)
    : products;
};

// Pruebas
console.log("=== PRUEBA DE FILTRADO DE CATEGORÍAS ===");

console.log("\n1. Todos los productos (sin filtro):");
console.log(filterProductsByCategory().length, "productos");

console.log("\n2. Artículos promocionales:");
const articulosPromocionales = filterProductsByCategory("articulos-promocionales");
console.log(articulosPromocionales.length, "productos");
articulosPromocionales.forEach(p => console.log(`- ${p.name}`));

console.log("\n3. Bolsos:");
const bolsos = filterProductsByCategory("bolsos");
console.log(bolsos.length, "productos");
bolsos.forEach(p => console.log(`- ${p.name}`));

console.log("\n4. Kit de asado:");
const kitAsado = filterProductsByCategory("kit-de-asado");
console.log(kitAsado.length, "productos");
kitAsado.forEach(p => console.log(`- ${p.name}`));

console.log("\n5. Camping:");
const camping = filterProductsByCategory("camping");
console.log(camping.length, "productos");
camping.forEach(p => console.log(`- ${p.name}`));

console.log("\n6. Termos:");
const termos = filterProductsByCategory("termos");
console.log(termos.length, "productos");
termos.forEach(p => console.log(`- ${p.name}`));

console.log("\n7. Llaveros ejecutivos:");
const llaveros = filterProductsByCategory("llaveros-ejecutivos");
console.log(llaveros.length, "productos");
llaveros.forEach(p => console.log(`- ${p.name}`));

console.log("\n8. Artículos navideños:");
const navidenos = filterProductsByCategory("articulos-navidenos");
console.log(navidenos.length, "productos");
navidenos.forEach(p => console.log(`- ${p.name}`));

console.log("\n9. Block de notas:");
const blockNotas = filterProductsByCategory("block-de-notas");
console.log(blockNotas.length, "productos");
blockNotas.forEach(p => console.log(`- ${p.name}`));

console.log("\n=== PRUEBA COMPLETADA ==="); 