const curveHeading = () => {
  const curvedHeadings = document.querySelectorAll('.js-curved-heading');

  if (curvedHeadings) {
    curvedHeadings.forEach(text => {
      const circleType = new CircleType(text);
      circleType.radius(1600);
    })
  }
}

window.onload = () => {
  curveHeading();
}