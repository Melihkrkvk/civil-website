import {
  IconBook,
  IconChartPie3,
  IconCheck,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";

export const welcomeData = [
  {
    title: "AKSJHDFJKLSHNDJFKHKJ",
    descp: "",
    image:
      "https://images.unsplash.com/photo-1463906033650-3288c7071a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdmlsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
  },
];

//Navbar Main Data
export const headerMenu = [
  {
    label: "Anasayfa",
    link: "/",
    isMega: false,
  },
  {
    label: "Hizmetlerimiz",
    link: "/#",
    isMega: true,
    megaMenuSettings: {
      title: "Hizmetlerimiz",
      viewAllTitle: "Tüm Hizmetler",
      viewAllLink: "/hizmetlerimiz",
      footerTitle: "Author Aplication",
      footerDescp: "Lets work together",
      footerButtonTitle: "Apply",
    },
    megaMenuLinks: [
      {
        icon: IconCheck,
        title: "Mimarlık",
        description: "This Pokémon’s cry is very loud and distracting",
      },
      {
        icon: IconCoin,
        title: "İnşaat",
        description: "The fluid of Smeargle’s tail secretions changes",
      },
      {
        icon: IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without",
      },
      {
        icon: IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its.",
      },
      {
        icon: IconChartPie3,
        title: "Analytics",
        description: "This Pokémon uses its flying ability to quickly chase",
      },
      {
        icon: IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews",
      },
    ],
  },
  {
    label: "Hakkımızda",
    link: "/#",
    isMega: false,
  },
  {
    label: "İletişim",
    link: "/#",
    isMega: false,
  },
];

export const mobileData = [
  {
    label: "Home",
    link: "/",
    isMega: false,
  },
  {
    label: "Hizmetlerimiz",
    link: "/#",
    isMega: true,
    megaMenuLinks: [
      {
        icon: IconCheck,
        title: "Open source",
        description: "This Pokémon’s cry is very loud and distracting",
      },
      {
        icon: IconCoin,
        title: "Free for everyone",
        description: "The fluid of Smeargle’s tail secretions changes",
      },
      {
        icon: IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without",
      },
      {
        icon: IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its.",
      },
      {
        icon: IconChartPie3,
        title: "Analytics",
        description: "This Pokémon uses its flying ability to quickly chase",
      },
      {
        icon: IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews",
      },
    ],
  },
  {
    label: "Hakkımızda",
    link: "/",
    isMega: false,
  },
  {
    label: "İletişim",
    link: "/",
    isMega: false,
  },
];
