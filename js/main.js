document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Obtener datos del formulario
      const formData = new FormData(form)
      const data = {}

      for (const [key, value] of formData.entries()) {
        if (data[key]) {
          // Si ya existe, convertir a array
          if (Array.isArray(data[key])) {
            data[key].push(value)
          } else {
            data[key] = [data[key], value]
          }
        } else {
          data[key] = value
        }
      }

      // Mostrar alert de confirmación
      alert("¡Formulario enviado correctamente! Gracias por registrarte en Aventuras entre letras.")

      // Opcional: limpiar el formulario después del envío
      form.reset()

      console.log("Datos del formulario:", data)
    })

    // Manejar el botón de limpiar
    const resetButton = form.querySelector('button[type="reset"]')
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        setTimeout(() => {
          alert("Formulario limpiado correctamente.")
        }, 100)
      })
    }
  }

  // Smooth scrolling para los enlaces de navegación
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})
