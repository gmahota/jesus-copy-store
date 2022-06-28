import { createSlice } from "@reduxjs/toolkit";
import {
  FiHelpCircle,
  FiShoppingCart,
  FiHome,
} from "react-icons/fi";

export type NavigationState = {
  title: string;
  url?: string | undefined;
  items: NavigationState[];
  icon?: React.ReactNode;
  badge?: {
    color: string;
    text: string | number;
  };
};

const initialState: NavigationState[] = [
  
  {
    title: "Docs",
    items: [
      {
        url: "/documentation",
        icon: <FiHelpCircle size={20} />,
        title: "Documentation",
        items: [],
      },
    ],
  },
  {
    title: "Intro",
    items: [
      {
        url: "/landing",
        icon: <FiHome size={20} />,
        title: "Home page",
        items: [],
      },
       {
        url: "/",
        icon: <FiShoppingCart size={20} />,
        title: "E-commerce",
        items: [
          {
            url: "/e-commerce",
            title: "Products",
            items: [],
          },
          {
            url: "/invoice",
            title: "Invoice",
            items: [],
          },
          {
            url: "/pricing-tables",
            title: "Pricing tables",
            items: [],
          },
        ],
      },
    ],
  },
];

// Define the initial state using that type

export const navigationSlice = createSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
