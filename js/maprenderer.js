MapRenderer=(function(){

    const
        CELLSIZE_X=122,
        CELLSIZE_Y=122,
        MINIMAP_CELLSIZE = 25;

    function createCellNode() {
        let
            node = document.createElement("div"),
            inner = document.createElement("div"),
            content = document.createElement("div"),
            background= document.createElement("div");
        node.className="cell";
        inner.className="inner";
        content.className="content";
        background.className="background";
        node.appendChild(inner);
        node.appendChild(content);
        node.appendChild(background);
        return {
            cell:node,
            inner:inner,
            content:content,
            background:background
        };
    }

    function createTileNode() {
        let
            node = document.createElement("div"),
            container = document.createElement("div");
        node.className = "tile";
        container.className = "container";
        node.appendChild(container);
        return {
            node:node,
            container:container
        };
    }

    function createBrNode() {
        let
            node = document.createElement("br");
        return node;
    }

    function renderSideColor(cell,side,className) {
        if (cell.doors[side] || cell.walls[side])
            return " "+className;
        else
            return "";
    }

    function renderTile(resources,into,tile) {
        let
            tileNode=createTileNode();
        into.appendChild(tileNode.node);
        tile.forEach(row=>{
            row.forEach(cell=>{
                let
                    cellNode = createCellNode();
                tileNode.container.appendChild(cellNode.cell);
                cell._node = cellNode.cell;

                if (cell.isRoom) {
                    cellNode.cell.className+=
                        " room"+
                        renderSideColor(cell,0,"topBorder")+
                        renderSideColor(cell,1,"rightBorder")+
                        renderSideColor(cell,2,"bottomBorder")+
                        renderSideColor(cell,3,"leftBorder");
                } else
                    cellNode.cell.className+=" corridor";

                if (cell.type)
                    cell.type.forEach(type=>{
                        cellNode.cell.className+=" "+type;
                    })

                cell.tokens.forEach(token=>{
                    let
                        tokenMetadata=resources.tokensMetadata[token.id],
                        className = tokenMetadata.className.map;
                    if (token.flipped)
                        className+=" flipped";
                    cellNode.content.innerHTML+="<span class=\""+className+"\"></span> ";
                });

                cell.doors.forEach((door,side)=>{
                    if (door) {
                        let
                            doorNode = document.createElement("div");
                        doorNode.className=resources.tokensMetadata.door.className.map+(door.className ? " "+door.className : "")+" side-"+side;
                        cellNode.cell.appendChild(doorNode);
                    }

                })

            });
            let
                brNode = createBrNode();
            tileNode.container.appendChild(brNode);

        });

        return tileNode;

    }


    return {
        render:(resources,result,mapNode,minimapInto)=>{

            if (result.map) {

                let
                    mapImageNode = document.createElement("div"),
                    minimapImageNode = document.createElement("div"),
                    mapWidth = 0,
                    mapHeight = 0,
                    minimapWidth = 0,
                    minimapHeight = 0;

                mapImageNode.className = "mapImage";
                minimapImageNode.className = "minimapImage";
                
                mapNode.appendChild(mapImageNode);
                minimapInto.appendChild(minimapImageNode);
        
                result.map.index.forEach(tile=>{
                    let
                        tileSide=tile.tile.sides[tile.side],
                        tileData=tileSide.angles[tile.angle],
                        tileNode=renderTile(resources,mapImageNode,tileData),
                        minimapNode=document.createElement("div"),
                        minimapNodeContent=document.createElement("div"),
                        atX=tile.at.x*CELLSIZE_X,
                        atY=tile.at.y*CELLSIZE_Y,
                        minimapAtX=tile.at.x*MINIMAP_CELLSIZE,
                        minimapAtY=tile.at.y*MINIMAP_CELLSIZE;
            
                    if (tileSide.label)
                        tileNode.node.title=tileSide.label;
                    tileNode.node.style.position="absolute";
                    tileNode.node.style.left=atX+"px";
                    tileNode.node.style.top=atY+"px";

                    minimapNode.appendChild(minimapNodeContent);
                    minimapNodeContent.className="minimapNodeContent";
                    minimapNode.className="minimapNode";
                    minimapNode.style.position="absolute";
                    minimapNode.style.width=(MINIMAP_CELLSIZE*tileData[0].length)+"px";
                    minimapNode.style.height=(MINIMAP_CELLSIZE*tileData.length)+"px";
                    minimapNode.style.left=minimapAtX+"px";
                    minimapNode.style.top=minimapAtY+"px";
                    minimapNodeContent.style.lineHeight=minimapNode.style.height;
                    
                    minimapImageNode.appendChild(minimapNode);

                    if (tile.tile.label)
                        minimapNodeContent.innerHTML=tileSide.label;
            
                    mapWidth=Math.max(mapWidth,atX+tileNode.node.offsetWidth);
                    mapHeight=Math.max(mapHeight,atY+tileNode.node.offsetHeight);

                    minimapWidth=Math.max(minimapWidth,minimapAtX+minimapNode.offsetWidth);
                    minimapHeight=Math.max(minimapHeight,minimapAtY+minimapNode.offsetHeight);
                });
        
                
                mapImageNode.style.width=mapWidth+"px";
                mapImageNode.style.height=mapHeight+"px";

                minimapImageNode.style.width=minimapWidth+"px";
                minimapImageNode.style.height=minimapHeight+"px";

                window.onbeforeprint = () => {
                    document.title = result.printTitlePrefix+" - "+result.printTitleSuffix;
                    mapNode.style.height = (mapHeight/2)+"px";
                    mapNode.scrollLeft=0;
                    mapNode.scrollTop=0;
                };

                window.onafterprint = () => {
                    document.title = result.printTitlePrefix;
                    mapNode.style.height = "auto";
                };

            }
    
        }
    }

})();        