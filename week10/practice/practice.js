document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('button[type="button"]');
  const resetButton = document.querySelector('button[type="reset"]');

  const savedBgColor = localStorage.getItem('bgColor');
  const savedFontColor = localStorage.getItem('fontColor');
  const savedFontSize = localStorage.getItem('fontSize');

  if (savedBgColor) document.body.style.backgroundColor = savedBgColor;
  if (savedFontColor) document.body.style.color = savedFontColor;
  if (savedFontSize) document.body.style.fontSize = savedFontSize;

  submitButton.addEventListener('click', () => {
    const form = document.getElementById('styleForm');
    const bgColor = form.bgColor.value;
    const fontColor = form.fontColor.value;
    const fontSize = form.fontSize.value;

    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('fontColor', fontColor);
    localStorage.setItem('fontSize', fontSize);

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = fontColor;
    document.body.style.fontSize = fontSize;
  });
  resetButton.addEventListener('click', () => {
    localStorage.clear()

    const form = document.getElementById('styleForm');
    const bgColor = form.bgColor.value;
    const fontColor = form.fontColor.value;
    const fontSize = form.fontSize.value;

    document.body.style.backgroundColor = bgColor
    document.body.style.color = fontColor
    document.body.style.fontSize = fontSize

  })
});
