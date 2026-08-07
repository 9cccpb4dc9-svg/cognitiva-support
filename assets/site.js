document.querySelectorAll("[data-github-path]").forEach((link) => {
  const owner = window.location.hostname.split(".")[0];
  const repository = window.location.pathname.split("/").filter(Boolean)[0];
  if (!owner || !repository || !window.location.hostname.endsWith("github.io")) {
    link.hidden = true;
    return;
  }
  link.href = `https://github.com/${owner}/${repository}/${link.dataset.githubPath}`;
});
