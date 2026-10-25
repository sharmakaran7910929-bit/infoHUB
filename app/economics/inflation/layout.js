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
                                                       },
                                                        {
                                                        href:'/economics/inflation/wholesale-price-index-india',
                                                        label:'Wholesale Price Index of India'
                                                       },
                                                       {
                                                        href:'/economics/inflation/cpi-vs-wpi',
                                                        label:'CPI vs WPI'
                                                       },
                                                        {
                                                        href:'/economics/inflation/demand-pull-inflation',
                                                        label:'Demand Pull Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/cost-push-inflation',
                                                        label:'Cost Push Inflation'
                                                       },
                                                        {
                                                        href:'/economics/inflation/effects-of-inflation',
                                                        label:'Effects of Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/core-vs-headline-inflation',
                                                        label:'Core Vs Headline Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/hyperinflation',
                                                        label:'HyperInflation'
                                                       },{
                                                        href:'/economics/inflation/inflation-rate-formula',
                                                        label:'Inflation Rate Formula'
                                                       },{
                                                        href:'/economics/inflation/inflation-vs-deflation',
                                                        label:'Inflation Vs Deflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/purchasing-power-and-inflation',
                                                        label:'Purchasing Power and Inflation'
                                                       },
                                                       {
                                                        href:'/economics/inflation/stagflation',
                                                        label:'Stagflation'
                                                       }
                                                      ]}
                                                           />
             
    </div>
  );
}
