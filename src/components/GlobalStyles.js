import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --border: 1px solid var(--bs-primary);
  --transition: all 0.3s linear;
  --nav-height: 55px;
  --min-footer-height: 11vh;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

main {
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
}

section {
  margin: 1rem 0;
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

a:hover {
  cursor: pointer;
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  margin: 0 1rem;
  color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

  &:hover {
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
  }
}

.page-item.active .page-link {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--bs-primary);
  }
}
`;

export default GlobalStyles;
