import {
  MainPage,
  ProductsPage,
  TermsOfSale,
  News,
  ContactUs,
} from "../components/Page";

export const tabsData = [
  {
    name: "صفحه اصلی",
    index: 0,
    component: <MainPage pageTitle={"صفحه اصلی"} />,
  },
  {
    name: "محصولات",
    index: 1,
    component: <ProductsPage pageTitle={"محصولات"} />,
  },
  {
    name: "شرایط فروش",
    index: 2,
    component: <TermsOfSale pageTitle={"شرایط فروش"} />,
  },
  {
    name: "اخبار خودرو",
    index: 3,
    component: <News pageTitle={"اخبار خودرو"} />,
  },
  {
    name: "تماس با ما",
    index: 4,
    component: <ContactUs pageTitle={"تماس با ما"} />,
  },
];
