import RelatedTopics from "../../../components/ContinueReading";


export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
       {/* Related topics */}
                                                      <RelatedTopics 
                                                      title='Explore More About Fiscal Policy'
                                                      links={[
                                                       {
                                                        href:'/economics/fiscal-policy/what-is-fiscal-policy',
                                                        label:'What is Fiscal Policy'
                                                       },
                                                       {
                                                        href:'/economics/fiscal-policy/tools-of-fiscal-policy',
                                                        label:'Tools of Fiscal Policy'
                                                       },
                                                       {
                                                        href:'/economics/fiscal-policy/expansionary-fiscal-policy',
                                                        label:'Expansionary Fiscal Policy'
                                                       },
                                                        {
                                                        href:'/economics/fiscal-policy/contractionary-fiscal-policy',
                                                        label:'Contractionary Fiscal Policy'
                                                       },
                                                                                                            ]}
                                                           />
             
    </div>
  );
}
