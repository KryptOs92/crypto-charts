import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';
import GridComponentWrapper from '../gridComponentWrapper/GridComponentWrapper'


export default function CryptoListPage() {
    const gridComponents = [{i: 'cardano', dom: <div>CARDANO</div>}]
    const layout = [
        {i: 'cardano', x: 0, y: 0, w: 1, h: 2, static: false}
      ];

    return <ResponsiveGridLayout  className="layout" 
                        layout={layout} 
                        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
    {
        gridComponents.map((component) => {
            return <div key={component.i} >{component.dom}</div>} )
    }
    </ResponsiveGridLayout>
}