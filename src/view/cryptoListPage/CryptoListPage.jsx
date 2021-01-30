//import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';
import RGL, { WidthProvider } from "react-grid-layout";
import {getGridConfiguration} from '../configuration/gridConfiguration'
import CardanoCard from '../cards/CardanoCard'
import '../../css/GeneralGrid.scss'
const ReactGridLayout = WidthProvider(RGL);
export default function CryptoListPage() {
    
    const gridComponents = [{i: 'cardano', dom: <div>cardano</div>}]
    const gridConfiguration = getGridConfiguration('cryptoListPage')

    return <ReactGridLayout  className="layout" 
                        layout={gridConfiguration.layout} 
                        //breakpoints={gridConfiguration.breakpoints}
                        cols={gridConfiguration.cols}
                        onLayoutChange={gridConfiguration.onLayoutChange}
                        rowHeight={gridConfiguration.rowHeight}
                        >
                        
    {
        gridComponents.map((component) => {
            return <div key={component.i} >
                  
                        {component.dom}
                    
                </div>} )
    }
    </ReactGridLayout>
}