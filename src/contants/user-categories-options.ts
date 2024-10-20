import { authScreenNames } from "@src/navigation/naviagtion-names";

export interface Option {
  id: string;
  title: string;
  description: string;
  NavigateTo: string;
}

export const userCategoriesOptions: Option[] = [
  {
    id: "1",
    title: "Individual",
    NavigateTo: authScreenNames.INDIVIDUAL_CATEGORIES,
    description:
      "Register as an individual and supply your personal details inclusive of your NIN and image capture.",
  },
  {
    id: "2",
    title: "Corporate",
    NavigateTo: "corporate-categories",
    description:
      "Register as a corporate entity and provide business information including your registration details.",
  },
];
