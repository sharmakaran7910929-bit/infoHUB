import RelatedTopics from "../../../components/ContinueReading";


export default function BasicsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </div>
       {/* Related topics */}
                                                      <RelatedTopics 
                                                      title='Explore More About Economics'
                                                      links={[
                                                       {
                                                       href:'/economics/gdp-and-economic-growth/what-is-gdp',
                                                       label:'What is GDP'
                                                      },
                                                      {
                                                       href:'/economics/gdp-and-economic-growth/gdp-of-india',
                                                       label:'GDP of India'
                                                      },
                                                      {
                                                       href:'/economics/gdp-and-economic-growth/gdp-per-capita',
                                                       label:'GDP Per Capita'
                                                      },
                                                      {
                                                       href:'/economics/gdp-and-economic-growth/gdp-vs-gnp',
                                                       label:'GDP Vs GNP'
                                                      },
                                                        {
                                                       href:'/economics/gdp-and-economic-growth/real-vs-nominal-gdp',
                                                       label:'Real Vs Nominal GDP'
                                                      },
                                                      {
                                                       href:'/economics/gdp-and-economic-growth/economic-growth',
                                                       label:'Economic Growth'
                                                      },
                                                      {
                                                       href:'/economics/gdp-and-economic-growth/business-cycle',
                                                       label:'Business Cycle'
                                                      },
                                                             ]} />
             
    </div>
  );
}
