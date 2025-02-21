const API_URL = "http://127.0.0.1:5000"; 



export async function login(email: string, password: string, otpCode?: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo_electronico: email,
        password: password,
        otp_code: otpCode, 
      }),
    });

    if (!response.ok) {
      throw new Error("Error en el inicio de sesión");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token); // Guarda el JWT en localstorage
    return data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}


export async function register(
  nombre: string,
  apellido: string,
  correo_electronico: string,
  numero_telefonico: string,
  password: string
) {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        correo_electronico,
        numero_telefonico,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error en la respuesta:", errorData);
      throw new Error(errorData.error || "Error desconocido en la API");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
}
 // Asegúrate de que Flask corre en este puerto

export async function googleLogin(googleToken: string) {
  try {
    const response = await fetch(`${API_URL}/auth/google-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: googleToken, // Enviamos el token de Google al backend
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error en la respuesta:", errorData);
      throw new Error(errorData.error || "Error desconocido en la API");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
}

