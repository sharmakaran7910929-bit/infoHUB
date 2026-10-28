import RelatedTopics from "../../../components/ContinueReading";


export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
       {/* Related topics */}
                                                     <RelatedTopics
  title="Explore More About Budget Deficit"
  links={[
    {
      href: "/economics/budget-deficit",
      label: "What Is Budget Deficit?",
    },
    {
      href: "/economics/budget-deficit/fiscal-deficit",
      label: "What Is Fiscal Deficit?",
    },
    {
      href: "/economics/budget-deficit/revenue-deficit",
      label: "What Is Revenue Deficit?",
    },
    {
      href: "/economics/budget-deficit/primary-deficit",
      label: "What Is Primary Deficit?",
    },
    {
      href: "/economics/budget-deficit/budget-deficit-vs-fiscal-deficit",
      label: "Budget Deficit vs Fiscal Deficit",
    },
    {
      href: "/economics/budget-deficit/fiscal-deficit-vs-revenue-deficit",
      label: "Fiscal Deficit vs Revenue Deficit",
    },
  ]}
/>
             
    </div>
  );
}
