import styled from "styled-components";
import { Element } from "react-scroll";
import { books } from "../data/books";

// #region styled-components
const StyledSection = styled.section`
  background-color: var(--color-bg);
  padding-top: var(--space-9);
  padding-bottom: var(--space-9);
  padding-left: var(--space-5);
  padding-right: var(--space-5);

  .section-inner {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .section-kicker {
    margin-bottom: var(--space-4);
  }

  .section-heading {
    margin: 0 0 var(--space-7) 0;
  }

  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--space-7) var(--space-6);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .book-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .book-cover-wrap {
    width: 100%;
    aspect-ratio: 2/3;
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 150ms ease;
  }

  .book-item:hover .book-cover-wrap {
    box-shadow: var(--shadow-hover);
  }

  .book-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .book-cover-placeholder {
    padding: var(--space-4);
    text-align: center;
    color: var(--color-text-muted);
    font-family: var(--font-serif);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.45;
    font-style: italic;
  }

  .book-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .book-title {
    font-family: var(--font-serif);
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.40;
    color: var(--color-text-primary);
    margin: 0;
  }

  .book-publisher {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.50;
    color: var(--color-text-muted);
    letter-spacing: 0.01em;
    margin: 0;
  }

  .book-coauthors {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.50;
    color: var(--color-text-muted);
    margin: 0;
  }

  .book-link {
    font-family: var(--font-sans);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 100ms ease;
  }

  .book-link:hover {
    color: var(--color-accent-hover);
  }
`;
// #endregion

// #region component
const Books = () => {
  return (
    <Element name="Books" id="books">
      <StyledSection>
        <div className="section-inner">
          <p className="kicker section-kicker">Authored Works</p>
          <h2 className="section-heading">Books</h2>

          <ul className="books-grid" aria-label="Books by Stanton Wortham">
            {books.map((book) => (
              <li key={book.id} className="book-item">
                <div className="book-cover-wrap">
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={`Cover of ${book.title}`}
                      className="book-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "block";
                      }}
                    />
                  ) : null}
                  {/* Placeholder shown when coverUrl is null or image fails to load */}
                  <p
                    className="book-cover-placeholder"
                    style={{ display: book.coverUrl ? "none" : "block" }}
                  >
                    {book.title}
                  </p>
                </div>

                <div className="book-meta">
                  <p className="book-title">{book.title}</p>
                  <p className="book-publisher">
                    {book.publisher}, {book.year}
                  </p>
                  {book.coauthors && (
                    <p className="book-coauthors">{book.coauthors}</p>
                  )}
                  {book.publisherUrl && (
                    <a
                      href={book.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="book-link"
                    >
                      Publisher ↗
                    </a>
                  )}
                  {book.pdfUrl && (
                    <a
                      href={book.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="book-link"
                    >
                      Open Access PDF ↗
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Books;
