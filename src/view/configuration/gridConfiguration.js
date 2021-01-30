export const getGridConfiguration = (page) =>{
    return{
        cols: getGridColumns(page),
        breakPoints: getGridBreackpoints(page),
        layout: getGridLayout(page),
        rowHeight: getRowHeight(page),
        onLayoutChange: () => {}
    }
}

function getGridColumns(page){
    switch (page){
        default:
            return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}
    }
}

function getRowHeight(page){
    switch(page){
        case 'cryptoListPage':
            return 450
        default:
            return 150
    }
}

function getGridBreackpoints(page){
    switch (page){
        default:
            return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
    }
}

function getGridLayout(page){
    switch(page){
        case 'cryptoListPage':
            return getCryptoListPageLayout()
        default:
            return []
    }
}

function getCryptoListPageLayout(page) {
    return [
        {i: "cardano", x: 0, y: 0, w: 1, h: 1,static: false}
      ];
}