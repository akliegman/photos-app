import { Helmet as ReactHelmet } from "react-helmet";

interface HelmetProps {
  title?: string;
  children?: React.ReactNode;
}
export const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
  let pageTitle = "PhotosApp";
  if (title) {
    pageTitle = `${title} | ${pageTitle}`;
  }

  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      {children}
    </ReactHelmet>
  );
};
