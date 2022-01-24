const curveHeading = () => {
  const curvedHeadings = document.querySelectorAll('.js-curved-heading');

  if (curvedHeadings) {
    curvedHeadings.forEach(text => {
      console.log(text)
      const circleType = new CircleType(text);
      circleType.radius(1500);
    })
  }
}

window.onload = () => {
  curveHeading();
}