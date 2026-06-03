// Books — all 6 authored books, from VITA 23.docx (verified).
// Ordered by year descending.
//
// coverUrl:    "/images/books/<filename>" — site degrades gracefully when image is missing.
// publisherUrl: link to the publisher's book page (Cambridge Core, Routledge, etc.)
// pdfUrl:       link to a verified open-access PDF (OAPEN, ERIC, local /public/books/, etc.)
// pdfPreview:   true when pdfUrl is publisher front-matter/preview rather than full text.

export const books = [
  {
    id: "bk2",
    year: 2021,
    title: "Discourse analysis beyond the speech event (2nd ed.)",
    publisher: "Routledge",
    coauthors: "Stanton Wortham & Angela Reyes",
    coverUrl: "/images/books/discourse_analysis.jpg",
    publisherUrl: null,
    pdfUrl: "/books/discourse-analysis.pdf",
  },
  {
    id: "bk1",
    year: 2020,
    title: "Migration narratives: Diverging stories in schools, churches, and civic institutions",
    publisher: "Bloomsbury",
    coauthors: "Stanton Wortham, Briana Nichols, Katherine Clonan-Roy & Catherine Rhodes",
    coverUrl: "/images/books/migration_narrative.jpg",
    publisherUrl: "https://books.google.com/books/about/Migration_Narratives.html?id=VFn5DwAAQBAJ",
    pdfUrl: "/books/migration.pdf",
  },
  {
    id: "bk3",
    year: 2009,
    title: "Bullish on uncertainty: How organizational cultures transform participants",
    publisher: "Cambridge University Press",
    coauthors: "Alexandra Michel & Stanton Wortham",
    coverUrl: "/images/books/bullish.jpg",
    publisherUrl: null,
    pdfUrl: "/articles/bullish-on-uncertainty-front-matter.pdf",
    pdfPreview: true,
  },
  {
    id: "bk4",
    year: 2006,
    title: "Learning identity: The joint emergence of social identification and academic learning",
    publisher: "Cambridge University Press",
    coauthors: null,
    coverUrl: "/images/books/learning.jpg",
    publisherUrl: "https://www.cambridge.org/core/books/learning-identity/98B12AB9C943FBE397D4950270A1E4D8",
    pdfUrl: "/articles/learning-identity-front-matter.pdf",
    pdfPreview: true,
  },
  {
    id: "bk5",
    year: 2001,
    title: "Narratives in action: A strategy for research and analysis",
    publisher: "Teachers College Press",
    coauthors: null,
    coverUrl: "/images/books/narratives.jpg",
    publisherUrl: null,
    pdfUrl: null,
  },
  {
    id: "bk6",
    year: 1994,
    title: "Acting out participant examples in the classroom",
    publisher: "John Benjamins",
    coauthors: null,
    coverUrl: "/images/books/acting.jpg",
    publisherUrl: null,
    pdfUrl: null,
  },
];
