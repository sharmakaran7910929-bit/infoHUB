
import RelatedTopics from "../../../components/ContinueReading";

export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Related Topics */}
     <RelatedTopics
  title="Explore More About Unemployment"
  links={[
    {
      href: "/economics/unemployment/what-is-unemployment",
      label: "What Is Unemployment",
    },
    {
      href: "/economics/unemployment/types-of-unemployment",
      label: "Types of Unemployment",
    },
    {
      href: "/economics/unemployment/causes-of-unemployment",
      label: "Causes of Unemployment",
    },
    {
      href: "/economics/unemployment/unemployment-rate",
      label: "Unemployment Rate",
    },
    {
      href: "/economics/unemployment/labour-force-participation-rate",
      label: "Labour Force Participation Rate",
    },
    {
      href: "/economics/unemployment/effects-of-unemployment",
      label: "Effects of Unemployment",
    },
    {
      href: "/economics/unemployment/frictional-unemployment",
      label: "Frictional Unemployment",
    },
    {
      href: "/economics/unemployment/structural-unemployment",
      label: "Structural Unemployment",
    },
    {
      href: "/economics/unemployment/cyclical-unemployment",
      label: "Cyclical Unemployment",
    },
    {
      href: "/economics/unemployment/seasonal-unemployment",
      label: "Seasonal Unemployment",
    },
  ]}
/>
    </div>
  );
}
