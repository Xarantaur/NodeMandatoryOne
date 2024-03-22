import { readPage, renderPage } from "./templatingEngine.js";
//render pages:
const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage, {
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/homepage/homepage.css"/>`,
});

const thirddayclass = readPage("./public/pages/thirdclass/thirdclass.html");
export const thirddayclassPage = renderPage(thirddayclass, {
  tabTitle: "Third Day Class",
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/thirdclass/thirdclass.css"/>`,
});

const firstdayclass = readPage("./public/pages/firstclass/firstclass.html");
export const firstdayclassPage = renderPage(firstdayclass, {
  tabTitle: "First Day Class",
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/firstclass/firstclass.css"/>`,
});

const seconddayclass = readPage("./public/pages/secondclass/secondclass.html");
export const seconddayclassPage = renderPage(seconddayclass, {
  tabTitle: "Second Day class",
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/secondclass/secondclass.css"/>`,
});

const fourthdayclass = readPage("./public/pages/fourthclass/fourthclass.html");
export const fourthdayclassPage = renderPage(fourthdayclass, {
  tabTitle: "Fourth Day class",
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/fourthclass/fourthclass.css"/>`,
});

const fifthdayclass = readPage("./public/pages/fifthclass/fifthclass.html");
export const fifthdayclassPage = renderPage(fifthdayclass, {
  tabTitle: "Fifth Day class"
  
});

const sixthdayclass = readPage("./public/pages/sixthclass/sixthclass.html");
export const sixthdayclassPage = renderPage(sixthdayclass, {
  tabTitle: "Sixth Day class",
  CSSPlaceholder: `<link rel="stylesheet" href="/pages/fifthclass/sixthclass.css"/>`,
});
