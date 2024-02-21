document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const numberOfCubes = 100;
  let animationFinished = false;

  // Function to handle redirection to acceuil.html
  function redirectToAcceuil() {
    if (!animationFinished) {
      setTimeout(redirectToAcceuil, 500); // Retry after a small delay
      return;
    }
    window.location.href = "acceuil.html"; // Redirect to acceuil.html
  }

  // Function to handle animation end event
  function handleAnimationEnd() {
    animationFinished = true;
  }

  // Add event listener for animation end to each cube
  container.addEventListener("animationend", handleAnimationEnd);

  // Create cubes with explosion animation
  for (let i = 0; i < numberOfCubes; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cube.style.left = `${Math.random() * 100}vw`;
    cube.style.top = `${Math.random() * 100}vh`;
    cube.style.animationDuration = `${Math.random() * 2 + 1}s`;
    container.appendChild(cube);
  }

  // Delay the redirection to ensure animation has time to complete
  setTimeout(redirectToAcceuil, 3000); // Adjust the delay time as needed
});
