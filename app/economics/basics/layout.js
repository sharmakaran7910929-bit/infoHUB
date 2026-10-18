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
                                                       href:'/economics/basics/what-is-economics',
                                                       label:'What is Economics'
                                                      },
                                                      {
                                                       href:'/economics/basics/scarcity-in-economics',
                                                       label:'Scarcity in Economics'
                                                      },
                                                      {
                                                       href:'/economics/basics/opportunity-cost',
                                                       label:'Opportunity Cost'
                                                      },
                                                      {
                                                       href:'/economics/basics/price-elasticity-of-demand',
                                                       label:'Price Elasticity of Demand'
                                                      },
                                                      {
                                                       href:'/economics/basics/mixed-economy',
                                                       label:'Mixed Economy'
                                                      },
                                                      {
                                                       href:'/economics/basics/microeconomics-vs-macroeconomics',
                                                       label:'Micro VS Macro Economics'
                                                      },
                                                      {
                                                       href:'/economics/basics/market-equilibrium',
                                                       label:'Market Equilibrium'
                                                      },
                                                      {
                                                       href:'/economics/basics/marginal-cost',
                                                       label:'Marginal Cost'
                                                      },
                                                      {
                                                       href:'/economics/basics/law-of-supply',
                                                       label:'Law of Supply'
                                                      },
                                                      {
                                                       href:'/economics/basics/law-of-marginal-utility',
                                                       label:'Marginal Utility'
                                                      },
                                                      {
                                                       href:'/economics/basics/law-of-diminishing-marginal-utility',
                                                       label:'Diminishing Marginal Utility'
                                                      },
                                                      {
                                                       href:'/economics/basics/law-of-demand',
                                                       label:'Law of Demand'
                                                      },
                                                      {
                                                       href:'/economics/basics/factors-of-production',
                                                       label:'Production Factors'
                                                      }
                                                             ]} />
             
    </div>
  );
}
