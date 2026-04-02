const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const command = button.parentElement?.dataset.command || '';

    try {
      await navigator.clipboard.writeText(command);
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1400);
    } catch {
      button.textContent = 'Copy failed';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1600);
    }
  });
});
