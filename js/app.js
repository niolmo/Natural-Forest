document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg; 
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.001}deg;`
  });
});

// Обратные кавычки (`) + Центрирование по центру окна браузера
// Object.assign - передать что- внащем случаи стили в переменную
