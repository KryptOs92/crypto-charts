 const GridComponentWrapper = ({gridKey= 0, children=[]}) => {
    console.log("TEST CHILD ",children)

    return <div key={gridKey}>
        {children}
    </div>
}

export default GridComponentWrapper