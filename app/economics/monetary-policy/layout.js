
import RelatedTopics from "../../../components/ContinueReading";

export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Related Topics */}
      <RelatedTopics
        title="Explore More About Monetary Policy"
        links={[
          {
            href: "/economics/monetary-policy/what-is-monetary-policy",
            label: "What Is Monetary Policy",
          },
          {
            href: "/economics/monetary-policy/monetary-policy-tools",
            label: "Monetary Policy Tools",
          },
          {
            href: "/economics/monetary-policy/expansionary-monetary-policy",
            label: "Expansionary Monetary Policy",
          },
          {
            href: "/economics/monetary-policy/contractionary-monetary-policy",
            label: "Contractionary Monetary Policy",
          },
          {
            href: "/economics/monetary-policy/rbi-and-monetary-policy",
            label: "RBI and Monetary Policy",
          },
          {
            href: "/economics/monetary-policy/what-is-repo-rate",
            label: "What Is Repo Rate",
          },
          {
            href: "/economics/monetary-policy/repo-rate-vs-reverse-repo-rate",
            label: "Repo Rate vs Reverse Repo Rate",
          },
        ]}
      />
    </div>
  );
}
