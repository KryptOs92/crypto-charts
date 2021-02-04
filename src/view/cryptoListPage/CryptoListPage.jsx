import {Responsive, WidthProvider } from 'react-grid-layout';
import {getGridConfiguration} from '../configuration/gridConfiguration'
import CardanoCard from '../cards/cardano/CardanoCard'
import '../../css/GeneralGrid.scss'
const ResponsiveGridLayout = WidthProvider(Responsive);
export default function CryptoListPage() {
    
    const gridComponents = [{i: "cardano", dom: <CardanoCard />}]
    const gridConfiguration = getGridConfiguration("cryptoListPage")
    const renderGridElements = (gridComponents) => {
        let elements = []
        gridComponents.map((component) => {
            elements.push(<div key={component.i} >
                {component.dom}
            </div>)
        })
        return elements
    }
    return <ResponsiveGridLayout   
                        className="layout" 
                        layouts={gridConfiguration.layouts}
                        breakpoints={gridConfiguration.breakPoints}
                        cols={gridConfiguration.cols}
                        onLayoutChange={gridConfiguration.onLayoutChange}
                        rowHeight={gridConfiguration.rowHeight}
            >
                        
    {
        renderGridElements(gridComponents)
    }
    </ResponsiveGridLayout>
}