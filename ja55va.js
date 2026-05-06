// URL de tu Firebase Realtime Database
const FIREBASE_URL = "https://biometrico-viscarra-default-rtdb.firebaseio.com/accesos.json";

// Función para cargar accesos desde Firebase
async function cargarAccesos() {
  try {
    const response = await fetch(FIREBASE_URL);
    const data = await response.json();

    const tbody = document.querySelector("#accesosTable tbody");
    tbody.innerHTML = "";

    for (let key in data) {
      const acceso = data[key];
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${acceso.timestamp_local || "---"}</td>
        <td>${acceso.timestamp_iso || "---"}</td>
        <td>${acceso.estado || "---"}</td>
        <td>${acceso.usuario_id || "---"}</td>
        <td>${acceso.nombre || "---"}</td>
        <td>${acceso.ci || "---"}</td>
        <td>${acceso.correo || "---"}</td>
        <td>${acceso.telefono || "---"}</td>
        <td>${acceso.confianza || "---"}%</td>
        <td>${acceso.dispositivo || "---"}</td>
        <td>${acceso.ip_dispositivo || "---"}</td>
      `;

      tbody.appendChild(fila);
    }
  } catch (error) {
    console.error("Error cargando accesos:", error);
  }
}

// Cargar accesos al iniciar
cargarAccesos();

// Actualizar cada 10 segundos
setInterval(cargarAccesos, 10000);
