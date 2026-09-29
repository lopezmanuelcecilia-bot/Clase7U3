import fs from 'fs';

const planetasIniciales = [
  { nombre: "Tierra", tipo: "Rocoso", distancia: "1 UA" },
  { nombre: "Marte", tipo: "Rocoso", distancia: "1.52 UA" },
  { nombre: "Júpiter", tipo: "Gaseoso", distancia: "5.2 UA" }
];

function inicializarDatos() {
  if (!fs.existsSync('planetas.json')) {
    fs.writeFileSync('planetas.json', JSON.stringify(planetasIniciales, null, 2));
  }
}

function listarPlanetas() {
  const datos = fs.readFileSync('planetas.json', 'utf-8');
  const planetas = JSON.parse(datos);
  console.log("\n🛸 --- PLANETAS REGISTRADOS --- 🛸");
  planetas.forEach(p => {
    console.log(`🪐 Nombre: ${p.nombre} | Tipo: ${p.tipo} | Distancia: ${p.distancia}`);
  });
}

function agregarPlaneta(nombre, tipo, distancia) {
  const datos = fs.readFileSync('planetas.json', 'utf-8');
  const planetas = JSON.parse(datos);
  planetas.push({ nombre, tipo, distancia });
  fs.writeFileSync('planetas.json', JSON.stringify(planetas, null, 2));
  console.log(`\n🚀 ¡Planeta "${nombre}" registrado con éxito!`);
}

inicializarDatos();
agregarPlaneta("Kepler-22b", "Exoplaneta", "635 años luz");
listarPlanetas();
