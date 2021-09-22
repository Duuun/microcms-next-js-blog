import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="py-3 sm:p-2 md:p-4 relative">
        <div className="h-3 md:h-6 bg-white w-full fixed top-0 z-30" />
        <div className="h-3 md:h-6 bg-white w-full fixed bottom-0 z-30" />
        <div className="bg-gray-100 dark:bg-gray-800">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
