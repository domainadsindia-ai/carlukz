export const CONTACT = {
  phonePrimaryDisplay: "+91 9400 690081",
  phoneAltDisplay: "+91 80865 80081",
  tel: "tel:+918086580081",
  telWhatsapp: "tel:+919400690081",
  email: "princejohnson1979@gmail.com",
  website: "https://carlukzprince.com",
  websiteDisplay: "carlukzprince.com",
  address: "K. Gate 110006, Lakshmi Nagar 110092.",
  office: "Delhi, India",
  proprietor: "Prince Johnson",
  social: {
    instagram: "https://www.instagram.com/car_lukz/",
    facebook: "https://www.facebook.com/profile.php?id=61596180035597",
    threads: "https://www.threads.com/@car_lukz",
  },
};

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/car_lukz/",
    handle: "@car_lukz",
    label: "Follow CARLUKZ on Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61596180035597",
    handle: "CARLUKZ",
    label: "Follow CARLUKZ on Facebook",
  },
  {
    name: "Threads",
    url: "https://www.threads.com/@car_lukz",
    handle: "@car_lukz",
    label: "Follow CARLUKZ on Threads",
  },
] as const;

export const DEFAULT_MESSAGE =
  "Hello CARLUKZ, I would like to enquire about your luxury car spare parts and automotive services.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE, number = "919400690081") {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
