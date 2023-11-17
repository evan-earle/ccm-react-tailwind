import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigSkate1,
  bigSkate2,
  bigSkate3,
  customer1,
  customer2,
  skate4,
  skate5,
  skate6,
  skate7,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const skates = [
  {
    thumbnail: bigSkate1,
    bigSkate: bigSkate1,
  },
  {
    thumbnail: bigSkate2,
    bigSkate: bigSkate2,
  },
  {
    thumbnail: bigSkate3,
    bigSkate: bigSkate3,
  },
];

export const statistics = [
  { value: "50+", label: "Countries" },
  { value: "500+", label: "Shops" },
  { value: "15m+", label: "Customers" },
];

export const products = [
  {
    imgURL: skate4,
    name: "CCM JetSpeed Control Senior (2023)",
    price: "$649.99",
    rating: "(4.5)",
  },
  {
    imgURL: skate5,
    name: "CCM Tacks AS-V Pro Senior (2022)",
    price: "$1,299.99",
    rating: "(4)",
  },
  {
    imgURL: skate6,
    name: "CCM Ribcor Platinum Senior (2021)",
    price: "$449.99",
    rating: "(5)",
  },
  {
    imgURL: skate7,
    name: "CCM JetSpeed Shock Senior (2021)",
    price: "$209.99",
    rating: "(4.5)",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ryan Browning",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of my skates exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Laura MacKenzie",
    rating: 5,
    feedback:
      "My skates not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Jetspeed", link: "/" },
      { name: "Ribcor", link: "/" },
      { name: "Tacks", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@ccm.com", link: "mailto:customer@ccm.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
