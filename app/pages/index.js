import dynamic from "next/dynamic";

const PageComponent = dynamic(
  () =>
    import("@/clients/editor").then(
      (lib) => lib.default
    ),
  { ssr: false }
);

const Index = () => {
  return <PageComponent />;
};

export default Index;
