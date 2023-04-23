import tw from "tailwind-styled-components";

export const Header = tw.header`
  fixed left-1/2 -translate-x-1/2 top-3 max-w-4xl w-full px-5 z-20 mt-4
`;

export const Container = tw.div`
  flex items-center justify-between backdrop-blur-sm bg-opacity-50 bg-white border p-3 rounded-lg
`;

export const IconsContainer = tw.div`
  flex gap-3 p-2
`;

export const Icon = tw.div`
  text-gray-500 hover:text-black pointer text-lg px-1 transition duration-200 ease-in-out
`;
