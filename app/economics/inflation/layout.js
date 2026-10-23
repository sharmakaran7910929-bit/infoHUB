import RelatedTopics from "../../../components/ContinueReading";


export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
       {/* Related topics */}
                                                      <RelatedTopics 
                                                      title='Explore More About Inflation'
                                                      links={[
                                                       {
                                                        href:'/economics/inflation/what-is-inflation',
                                                        label:'What is Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/types-of-inflation',
                                                        label:'Types of Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/consumer-price-index',
                                                        label:'Consumer Price Index'
                                                       }
                                                      ]}
                                                           />
             
    </div>
  );
}
