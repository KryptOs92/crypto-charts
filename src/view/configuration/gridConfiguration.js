export const getGridConfiguration = (page) =>{
    return{
        cols: getGridColumns(page),
        breakPoints: getGridBreackpoints(page),
        layouts: getGridLayouts(page),
        rowHeight: getRowHeight(page),
        onLayoutChange: () => {}
    }
}

function getGridColumns(page){
    switch (page){
        default:
            return {lg: 8, md: 8, sm: 6, xs: 4, xxs: 2}
    }
}

function getRowHeight(page){
    switch(page){
        default:
            return 100
    }
}

function getGridBreackpoints(page){
    switch (page){
        default:
            return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}
    }
}

function getGridLayouts(page){
    switch(page){
        case "cryptoListPage":
            return getCryptoListPageLayout()
        default:
            return []
    }
}

function getCryptoListPageLayout() {
    return {"lg":[{"i": "cardano", "x": 0, "y": 0, "w": 1, "h": 2,"static": false}],
        "md":[{"i": "cardano", "x": 0, "y": 0, "w": 1, "h": 2,"static": false}],
        "sm":[{"i": "cardano", "x": 0, "y": 0, "w": 1, "h": 2,"static": false}],
        "xs":[{"i": "cardano", "x": 0, "y": 0, "w": 1, "h": 2,"static": false}],
        "xxs":[{"i": "cardano", "x": 0, "y": 0, "w": 1, "h": 2,"static": false}]}
      ;
}