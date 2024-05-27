Tools=(function(){

    const
        DEBUG_QUEST = false,
        TESTQUESTS_ITERATIONS = 400,
        ALLOWED_ENTITIES={
            IT:[ "ograve", "agrave", "egrave", "eacute", "ugrave", "igrave", "deg", "amp", "Egrave" ],
            EN:[ "amp" ],
            FR:[ "agrave", "acirc", "eacute", "ecirc", "egrave", "euml", "icirc", "iuml", "ocirc", "oelig", "ucirc", "ugrave", "uuml", "ccedil" ]
        },
        ALLOWED_TAGS=[ "p", "/p", "ul", "/ul", "ol", "/ol", "li", "/li", "b", "/b", "i", "/i", "span class='phase'", "span class='displayonly'", "span class='printonly'", "span class='hiddentext'",  "/span", "br", "p class='credits'", "/a", /^a target=_blank href='[^']+'$/ ],
        ALLOWED_PLACEHOLDER_MODS=[ "capital" ],
        ALLOWED_CELLTYPES=[ "light", "dark", "crystal", "lava", "blocking", "water" ],
        ALLOWED_PLACEHOLDERS=[
            // Common tile labels
            "tileLabel.first", "tileLabel.second", "tileLabel.third", "tileLabel.fourth", "tileLabel.fifth", "tileLabel.center",
            // Investigation quest placeholders
            "who", "testimony.corruptionLord", "testimony.corruptionLordServant", "testimony.timeLord", "testimony.timeLordServant",
            "ending.corruptionLord", "ending.timeLord",
            // Ending
            "token.order1", "token.order2", "token.order3", "token.order4",
            "action.order1", "action.order2", "action.order3"
        ],
        WARNING_WORDS={
            EN:[ "wandering", "quest", "marker" ],
            IT:[ "quest", "xp", "avventura" ],
            FR:[ ]
        },
        QUEST_CONFIGS=[
            {
                id:"maps-size-small",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- MD2: Rainbow Crossing
            {
                id:"maps-size-small-rainbowcrossing",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-rainbowcrossing",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-rainbowcrossing",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-rainbowcrossing", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- MD2: Heavenfall
            {
                id:"maps-size-small-heavenfall",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-heavenfall",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-heavenfall",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "md2-heavenfall", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- ZC: Black Plague
            {
                id:"maps-size-small-zcblackplague",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-zcblackplague",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-zcblackplague",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-blackplague", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            },
            // --- ZC: Green horde
            {
                id:"maps-size-small-zcgreenhorde",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-small", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-normal-zcgreenhorde",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-normal", "maps-default-uniform", "challenges-default" ]
            },
            {
                id:"maps-size-large-zcgreenhorde",
                excludes:[],
                needs:[ "quests", "maps-default", "md2-hellscape", "zc-greenhorde", "maps-size-large", "maps-default-uniform", "challenges-default" ]
            }
        ];

    let
        decodeElement = document.createElement('div'),
        resourcesDump;
    
    function createNode(into,type,className) {
        let
            node = document.createElement(type);

        if (className) node.className=className;
        into.appendChild(node);

        return node;
    }

    function createTileTo(to) {
        let
            node = createNode(to,"div");
        
        node.style.cursor = "default";
        node.style.border="1px solid #000";
        node.style.display="inline-block";
        node.style.backgroundColor = "#fff";

        return node;
    }

    function addCellToTile(tile) {
        let
            node = createNode(tile,"div"),
            innerNode = createNode(node,"div");
        
        node.style.lineHeight = node.style.width = node.style.height = "20px";
        node.style.fontSize = "10px";
        node.style.textAlign = "center";
        node.style.display = "inline-block";
        node.style.position = "relative";

        innerNode.style.position="absolute";
        innerNode.style.left = innerNode.style.right = innerNode.style.top = innerNode.style.bottom = "1px";

        return innerNode;
    }

    function countRooms(tile,x,y,doneMap) {
        if ((tile[y] && tile[y][x]) && (!doneMap[y] || !doneMap[y][x]) && tile[y][x].isRoom) {
            let
                size=1;
            if (!doneMap[y]) doneMap[y]=[];
            doneMap[y][x]=true;
            size+=countRooms(tile,x,y-1,doneMap);
            size+=countRooms(tile,x+1,y,doneMap);
            size+=countRooms(tile,x,y+1,doneMap);
            size+=countRooms(tile,x-1,y,doneMap);
            return size;
        } else return 0;
    }

    function addTag(list,tag) {
        if (list.indexOf(tag) == -1)
            list.push(tag);
    }

    function addTagsSequence(list,tag,value) {
        addTag(list,tag+value);
        for (let i=1;i<=value;i++)
            addTag(list,tag+i+"+");
    }

    function createErrorsNode(into) {
        let
            node = createNode(into,"div");

        node.style.padding = node.style.margin = "5px";
        return node;
    }

    function dumpErrors(node,list) {
        if (list.length) {
            node.style.border = "2px solid #f00";
            node.style.backgroundColor = "#f99";
            node.innerHTML="<ul><li>"+list.join("</li><li>")+"</li></ul>";
        } else {
            node.style.border = "2px solid #0f0";
            node.style.backgroundColor = "#9f9";
            node.innerHTML="Everything looks OK."
        }
    }

    function dumpResources() {
        resourcesDump = ModManager.dump();
    }

    function getAllResourcesTypes(ids) {
        let
            out = {};
        dumpResources();

        resourcesDump.forEach(package=>{
            package.content.forEach(item=>{
                if (ids.indexOf(item.type) != -1) {
                    if (Array.isArray(item.data)) {
                        if (!out[item.type]) out[item.type]=[];
                        item.data.forEach(element=>{
                            let copy = JSON.parse(JSON.stringify(element));
                            copy._package = package.id;
                            copy._packageData = package;
                            out[item.type].push(copy);
                        })
                    } else {
                        if (!out[item.type]) out[item.type]={};
                        for (let k in item.data)
                            out[item.type][k]=item.data[k];
                    }
                    
                }
            })
        });

        return out;
    }

    function decodeEntities(str) {
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            decodeElement.innerHTML = str;
            str = decodeElement.textContent;
            decodeElement.textContent = '';
        }
        return str;
    }

    function addSentenceTokens(tokens,language,sentence) {
        if (!tokens[language]) tokens[language]={ warningCount:0, words:{} };
        decodeEntities(sentence)
            .toLowerCase()
            .replace(/<([^>]+)>/g," ")
            .replace(/{([^}]+)}/g," ")
            .replace(/[0-9]/g," ")
            .replace(/[&!?/.;,:\"()-+°]/g," ")
            .replace(/'s /g," ")
            .split(" ").forEach(m=>{
                if (m) {
                    if (!tokens[language].words[m]) {
                        let isWarning = WARNING_WORDS[language].indexOf(m) != -1;
                        if (isWarning) tokens[language].warningCount++;
                        tokens[language].words[m]={ isWarning:isWarning, entries:[] };
                    }
                    tokens[language].words[m].entries.push(sentence);
                }
            });
    }

    function checkLabel(errors,wordTokens,errorHeader,placeholders,set) {
        if (set.EN === undefined)
            errors.push(errorHeader,"EN language missing");
        for (let lang in set) {
            let
                okTag = "XXX",
                entry = set[lang];
            if (!Array.isArray(entry))
                entry = [entry];
            entry.forEach((argument,aid)=>{
                let
                    orgArgument = argument.replace(/<([^>]+)>/g,(m,m1)=>{
                        for (let i=0;i<ALLOWED_TAGS.length;i++) {
                            let allowedTag = ALLOWED_TAGS[i];
                            if (allowedTag instanceof RegExp) {
                                if (allowedTag.test(m1))
                                    return okTag;
                            } else if (allowedTag == m1)
                                return okTag;
                        }
                        errors.push(errorHeader+" L["+lang+"] O["+aid+"]: invalid tag &lt;"+m1+"&gt;");
                        return okTag;
                    }).replace(/{([^}]+)}/g,(m,m1)=>{
                        let
                            errorPHeader=errorHeader+" L["+lang+"] O["+aid+"]: ",
                            text = m1.split("@"),
                            parts = text[0].split(":");
                        if (!placeholders[parts[0]])
                            errors.push(errorPHeader+"unavailable placeholder "+parts[0]);
                        if (parts[1] && (ALLOWED_PLACEHOLDER_MODS.indexOf(parts[1]) == -1))
                            errors.push(errorPHeader+"invalid placeholder modifier '"+parts[1]+"'");
                        return okTag;
                    }).replace(/&([^;]+);/g,(m,m1)=>{
                        if (ALLOWED_ENTITIES[lang] && (ALLOWED_ENTITIES[lang].indexOf(m1) == -1))
                            errors.push(errorHeader+" L["+lang+"] O["+aid+"]: invalid entity for "+lang+": &amp;"+m1+";");
                        return okTag;
                    }),
                    checkArgument = orgArgument.replace(/([^0-9a-zA-Z() +/\-,.;:'!?"]+)/g,function(m,m1){
                        return "<span style='background-color:#000;color:#fff'>"+m1+"</span>";
                    });
                if (orgArgument != checkArgument)
                    errors.push(errorHeader+" L["+lang+"] O["+aid+"]: "+checkArgument);
                addSentenceTokens(wordTokens,lang,argument);
            })
        }
    }

    function questTesterAddToken(testResult,iteration,token,amount) {
        let
            id = token.id+(token.flipped ? "-flipped":"");
        if (!testResult.tokens[iteration]) testResult.tokens[iteration]={};
        if (!testResult.tokens[iteration][id]) testResult.tokens[iteration][id]=0;
        testResult.tokens[iteration][id] += amount === undefined ? 1 : amount;
        if (testResult.tokensIndex.indexOf(id) == -1) testResult.tokensIndex.push(id);
    }

    function questTesterAddCounter(testResult,iteration,id) {
        if (!testResult.counters[id]) testResult.counters[id]=0;
        testResult.counters[id]++;
    }

    function questTesterPreview(test,seed,into,from) {
        let
            backButton;
        into.innerHTML="";

        backButton = createNode(into,"input");
        backButton.type = "button";
        backButton.value = "<< Back";
        backButton.style.padding="10px";
        backButton.onclick=()=>{
            from.scrollIntoView();
        }
        createNode(into,"span").innerHTML = " - Seed: "+seed;
        Generator.generate(test.config,seed,{
            quest:test.quest
        },(resources,result)=>{
            QuestRenderer.render(resources,result,"EN",into);
            into.scrollIntoView();
        });
    }

    function runQuestTester(screen,tests,cb,results,test,testResult,iteration) {

        if (!results) results=[];
        if (!test)
            if (tests.length) {
                let logLine;

                test = tests.shift();
                logLine = tests.length+" test(s) left... (current: "+test.quest.by.EN+")";
                screen.innerHTML = logLine;
                console.log(logLine);
                iteration = 0;
                testResult = {
                    test:test,
                    seeds:[],
                    bridgeSeeds:[],
                    mergedRoomsSeeds:[],
                    counters:{},
                    tokensIndex:[],
                    tokens:[]
                };
            } else
                cb(results);

        if (test) {
            if (iteration == test.iterations) {
                results.push(testResult);
                runQuestTester(screen,tests,cb,results);
            } else {
                Generator.generate(test.config,0,{
                    quest:test.quest
                },(resources,result)=>{
                    questTesterAddCounter(testResult,iteration,result.map.placedTiles > result.quest.suggestedTilesCount ? "map-large" : result.map.placedTiles < result.quest.suggestedTilesCount ? "map-small" : "map-normal" )
                    if (result.map.hasBridge) {
                        testResult.bridgeSeeds.push(result.seed);
                        questTesterAddCounter(testResult,iteration,"hasBridge");
                    }
                    if (result.map.hasMergedRooms.length) {
                        testResult.mergedRoomsSeeds.push(result.seed);
                        questTesterAddCounter(testResult,iteration,"hasMergedRooms");
                    }
                    if (result.map.bridgeRemoved) questTesterAddCounter(testResult,iteration,"bridgeRemoved");
                    testResult.label = result.quest.by.EN;
                    testResult.roomsDefaults = result.mapConfig.roomsDefaults;
                    testResult.seeds.push(result.seed);
                    result.map.grid.forEach(row=>{
                        row.forEach(cell=>{
                            if (cell) {
                                cell.tokens.forEach(token=>{
                                    questTesterAddToken(testResult,iteration,token);
                                })
                            }
                        })
                    });
                    result.map.rooms.forEach(room=>{
                        if (room) {
                            let
                                mobs = 0;
                            room.cells.forEach(cell=>{
                                cell.tokens.forEach(token=>{
                                    if (token.id == "mob")
                                        mobs++;
                                })
                            });
                            questTesterAddToken(testResult,iteration,{ id:"ROOM-mobs-"+mobs });
                        }
                    });
                    questTesterAddToken(testResult,iteration,{ id:"ATTEMPTS" },result.attempt);
                    setTimeout(()=>{
                        runQuestTester(screen,tests,cb,results,test,testResult,iteration+1);
                    },1);
                });
            }
        }

    }

    function formatPercentage(value) {
        return (Math.floor(value*1000)/10)+"%";
    }

    function startQuestTester(testsSequence,resultsNode,previewNode,errors,cb) {
        runQuestTester(resultsNode,testsSequence,(results)=>{

            let
                resultsData = [];

            resultsNode.innerHTML="";

            results.forEach(result=>{

                let
                    resultRow = {
                        label:"["+result.test.config.id+"] "+result.label,
                        stats:"Sug.Tiles: "+result.test.quest.suggestedTilesCount+" | Risk:"+result.roomsDefaults.risk+" | Reward:"+result.roomsDefaults.reward,
                        counters:result.counters,
                        bridgeSeeds:result.bridgeSeeds,
                        mergedRoomsSeeds:result.mergedRoomsSeeds,
                        tokensResult:[]
                    };

                result.tokensIndex.sort();
                result.tokensIndex.forEach(token=>{
                    let
                        max, min,
                        minCount, maxCount,
                        minSeed, maxSeed,
                        notFound = 0,
                        count = 0,
                        critical = 0;
                        
                    result.tokens.forEach((test,id)=>{
                        let
                            amount = test[token];

                        if (!test[token]) {
                            amount = 0;
                            notFound++;
                        }

                        if ((max === undefined) || (amount > max)) {
                            maxSeed = result.seeds[id];
                            max = amount;
                            maxCount = 0;
                        }

                        if ((min === undefined) || (amount < min)) {
                            minSeed = result.seeds[id];
                            min = amount;
                            minCount = 0;
                        }

                        if (amount == max)
                            maxCount++;
                        if (amount == min)
                            minCount++;
                        count+=amount;
                    });

                    if (((token == "objective") || (token == "objective-flipped") || (token == "corruption") || (token == "time")) && (max != min))
                        critical = 20;
                    else if (notFound)
                        critical = 10;
                    else if (max - min > 3)
                        critical = 5;
                    else if (max == min)
                        critical = -1;

                    resultRow.tokensResult.push({
                        id:token,
                        test:result.test,
                        notFound:notFound,
                        notFoundPc:notFound ? notFound/result.tokens.length : 0,
                        critical:critical,
                        count:count,
                        avg:count/result.tokens.length,
                        max:max,
                        maxCount:maxCount,
                        maxCountPc:maxCount/result.tokens.length,
                        maxSeed:maxSeed,
                        min:min,
                        minCount:minCount,
                        minCountPc:minCount/result.tokens.length,
                        minSeed:minSeed
                    })
                });

                resultRow.tokensResult.sort((a,b)=>{
                    if (a.critical < b.critical) return 1;
                    else if (a.critical > b.critical) return -1;
                    else return 0;
                })

                resultsData.push(resultRow);
            });

            resultsData.forEach(resultRow=>{
                let
                    html="",
                    countersNode,
                    seedSelectorNode;
                
                createNode(resultsNode,"h3").innerHTML = resultRow.label;
                createNode(resultsNode,"span").innerHTML = resultRow.stats;

                countersNode = createNode(resultsNode,"div");
                countersNode.style.fontWeight = "bold";

                for (let k in resultRow.counters)
                    html+=k+":"+resultRow.counters[k]+" ("+formatPercentage(resultRow.counters[k]/TESTQUESTS_ITERATIONS)+") ";
                countersNode.innerHTML = html+" - ";

                seedSelectorNode =  createNode(countersNode,"select");
                createNode(seedSelectorNode,"option").innerHTML="---";


                resultRow.mergedRoomsSeeds.forEach(seed=>{
                    let
                        option = createNode(seedSelectorNode,"option");
                    option.value = seed;
                    option.innerHTML = "MERGED: "+seed
                });

                resultRow.bridgeSeeds.forEach(seed=>{
                    let
                        option = createNode(seedSelectorNode,"option");
                    option.value = seed;
                    option.innerHTML = "BRIDGE: "+seed
                });

                seedSelectorNode.onchange=()=>{
                    questTesterPreview(resultRow.tokensResult[0].test,seedSelectorNode.value,previewNode,seedSelectorNode);
                }

                resultRow.tokensResult.forEach(tokenResult=>{
                    let
                        rowNode = createNode(resultsNode,"div"),
                        avgStyle,
                        html,
                        button;

                    createNode(rowNode,"span").innerHTML = tokenResult.id+": ";

                    button = createNode(rowNode,"input");
                    button.type = "button";
                    button.value = tokenResult.min;
                    button.onclick = ()=>{
                        questTesterPreview(tokenResult.test,tokenResult.minSeed,previewNode,button);
                    }

                    createNode(rowNode,"span").innerHTML = formatPercentage(tokenResult.minCountPc)+" ";

                    createNode(rowNode,"span").innerHTML=" - ";

                    button = createNode(rowNode,"input");
                    button.type = "button";
                    button.value = tokenResult.max;
                    button.onclick = ()=>{
                        questTesterPreview(tokenResult.test,tokenResult.maxSeed,previewNode,button);
                    }

                    createNode(rowNode,"span").innerHTML = formatPercentage(tokenResult.maxCountPc)+" ";

                    if (tokenResult.avg <= 0.5)
                        avgStyle = "color:black";
                    else if (tokenResult.avg>=0.85)
                        avgStyle = "color:green;font-weight:bold";
                    else
                        avgStyle = "";

                    html=" Avg:<span style='"+avgStyle+"'>"+tokenResult.avg+"</span>"+(tokenResult.notFound?" (Not found:"+tokenResult.notFound+" - "+formatPercentage(tokenResult.notFoundPc)+")":"");

                    if (tokenResult.critical > 10) {
                        rowNode.style.color = "red";
                        rowNode.style.textDecoration = "underline";
                    } else if (tokenResult.critical > 0)
                        rowNode.style.color = "red";
                    else if (tokenResult.critical < 0)
                        rowNode.style.color = "green";
                    
                    createNode(rowNode,"span").innerHTML = html;
                })
            })
            cb();
        })
    }

    function addMapTag(tags,section,id,tag) {
        if (!tags[section]) tags[section]={};
        if (!tags[section][id]) tags[section][id]={};
        if (!tags[section][id][tag]) tags[section][id][tag]=0;
        tags[section][id][tag]++;
    }

    return {

        checkTiles:(into)=>{
            
            let
                errorsNode = createErrorsNode(into),
                errors = [],
                resources = getAllResourcesTypes([ "tiles" ]);

            resources.tiles.forEach(tile=>{
                let
                    errorHeader = "["+tile._package+"] "+tile.id+" from "+tile.from,
                    tileNode = createNode(into,"div"),
                    tileInfo = createNode(tileNode,"div");

                tileInfo.style.marginTop="30px";
                tileInfo.style.fontWeight="bold";
                tileInfo.innerHTML=errorHeader;
                    
                tile.sides.forEach(side=>{
                    let
                        errorHeaderSide = errorHeader+" side "+side.id,
                        sideContainerNode = createNode(tileNode,"div"),
                        sideInfo = createNode(sideContainerNode,"div"),
                        sideNode = createTileTo(sideContainerNode,"div"),
                        isOutdoor = side.skins.indexOf("outdoor") != -1,
                        hasHedges,
                        hasWater,
                        hasSolidWalls,
                        rows = side.angles[0].length,
                        cols = side.angles[0][0].length,
                        expectedTags = [ "any" ],
                        closedSides = [ 0, 0, 0, 0 ],
                        openSidesCount = 0,
                        roomsMap = [],
                        roomsCount = 0,
                        cellTypes = [],
                        allowedSkins = [],
                        deniedSkins = [],
                        deniedCells = [],
                        expectedSpecialRules = [],
                        cleanLabel = side.label.replace(/[\[\]]/g,"");
                    
                    sideContainerNode.style.marginLeft="30px";

                    side.angles[0].forEach((row,rowId)=>{

                        row.forEach((cell,colId)=>{
                            let
                                errorHeaderCell = errorHeaderSide + " Cell "+colId+","+rowId,
                                upperCell = side.angles[0][rowId-1] ? side.angles[0][rowId-1][colId] : 0,
                                lowerCell = side.angles[0][rowId+1] ? side.angles[0][rowId+1][colId] : 0,
                                rightCell = row[colId+1],
                                leftCell = row[colId-1],
                                label="",
                                title="",
                                cellNode = addCellToTile(sideNode);
                            
                            if (cell.type)
                                cell.type.forEach(type=>{
                                    if (type == "water") hasWater = true;
                                    if (cell.solidWalls)
                                        cell.solidWalls.forEach(wall=>{
                                            if (wall) hasSolidWalls = true;
                                        })
                                    label+=type.substr(0,2);
                                    title+=type+" ";
                                });

                            cellNode.innerHTML=label;
                            cellNode.title=title;
                            cellNode.style.backgroundColor=cell.isRoom ? "#f00" : cell.isBlocking ? "#ccc" : "#fff";

                            if ((rowId == 0) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[0]))) closedSides[0]++;
                            if ((colId == cols-1) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[1]))) closedSides[1]++;                            
                            if ((rowId == rows-1) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[2]))) closedSides[2]++;
                            if ((colId == 0) && (cell.isRoom || cell.isBlocking || (cell.isWalled && cell.walls[3]))) closedSides[3]++;

                            let
                                roomSize = countRooms(side.angles[0],colId,rowId,roomsMap);

                            if (roomSize) {
                                addTagsSequence(expectedTags,"roomSize",roomSize);
                                roomsCount++;
                            }

                            if (cell.hedges)
                                cell.hedges.forEach(hedge=>{
                                    if (hedge) hasHedges = true;
                                })

                            // --- Cell walls check
                            if (cell.walls[0]) {
                                if (!cell.isWalled && upperCell && !upperCell.walls[2])
                                    errors.push(errorHeaderCell+": mismatching wall on upper cell");
                                cellNode.style.borderTop=cell.solidWalls && cell.solidWalls[0] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[0]) {
                                cellNode.style.borderTop="1px solid #0F0";
                            }

                            if (cell.walls[1]) {
                                if (!cell.isWalled && rightCell && !rightCell.walls[3])
                                    errors.push(errorHeaderCell+": mismatching wall on right cell");
                                cellNode.style.borderRight=cell.solidWalls && cell.solidWalls[1] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[1]) {
                                cellNode.style.borderRight="1px solid #0F0";
                            }

                            if (cell.walls[2]) {
                                if (!cell.isWalled && lowerCell && !lowerCell.walls[0])
                                    errors.push(errorHeaderCell+": mismatching wall on lower cell");
                                cellNode.style.borderBottom=cell.solidWalls && cell.solidWalls[2] ? "2px solid #000" :  "1px solid #000";
                            } else if (cell.hedges && cell.hedges[2]) {
                                cellNode.style.borderBottom="1px solid #0F0";
                            }

                            if (cell.walls[3]) {
                                if (!cell.isWalled && leftCell && !leftCell.walls[1])
                                    errors.push(errorHeaderCell+": mismatching wall on left cell");
                                cellNode.style.borderLeft=cell.solidWalls && cell.solidWalls[3] ? "2px solid #000" : "1px solid #000";
                            } else if (cell.hedges && cell.hedges[3]) {
                                cellNode.style.borderLeft="1px solid #0F0";
                            }

                            if (cell.isRoom) {

                                if (!upperCell && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on room top");
                                if (!rightCell && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on room right");
                                if (!lowerCell && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on room bottom");
                                if (!leftCell && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on room left");

                                if (upperCell && !upperCell.isRoom && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on room top");
                                if (rightCell && !rightCell.isRoom && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on room right");
                                if (lowerCell && !lowerCell.isRoom && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on room bottom");
                                if (leftCell && !leftCell.isRoom && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on room left");

                                if (upperCell && upperCell.isRoom && cell.walls[0])
                                    errors.push(errorHeaderCell+": extra wall on room top");
                                if (rightCell && rightCell.isRoom && cell.walls[1])
                                    errors.push(errorHeaderCell+": extra wall on room right");
                                if (lowerCell && lowerCell.isRoom && cell.walls[2])
                                    errors.push(errorHeaderCell+": extra wall on room bottom");
                                if (leftCell && leftCell.isRoom && cell.walls[3])
                                    errors.push(errorHeaderCell+": extra wall on room left");

                            } else if (!cell.isBlocking) {
                                if (!cell.isWalled && !upperCell && cell.walls[0])
                                    errors.push(errorHeaderCell+": wrong wall on corridor top");
                                if (!cell.isWalled && !rightCell && cell.walls[1])
                                    errors.push(errorHeaderCell+": wrong wall on corridor right");
                                if (!cell.isWalled && !lowerCell && cell.walls[2])
                                    errors.push(errorHeaderCell+": wrong wall on corridor bottom");
                                if (!cell.isWalled && !leftCell && cell.walls[3])
                                    errors.push(errorHeaderCell+": wrong wall on corridor left");

                                if (!cell.isWalled && upperCell && (upperCell.isRoom || upperCell.isBlocking) && !cell.walls[0])
                                    errors.push(errorHeaderCell+": missing wall on corridor top");
                                if (!cell.isWalled && rightCell && (rightCell.isRoom || rightCell.isBlocking) && !cell.walls[1])
                                    errors.push(errorHeaderCell+": missing wall on corridor right");
                                if (!cell.isWalled && lowerCell && (lowerCell.isRoom || lowerCell.isBlocking) && !cell.walls[2])
                                    errors.push(errorHeaderCell+": missing wall on corridor bottom");
                                if (!cell.isWalled && leftCell && (leftCell.isRoom || leftCell.isBlocking) && !cell.walls[3])
                                    errors.push(errorHeaderCell+": missing wall on corridor left");

                                if (!cell.isWalled && upperCell && !(upperCell.isRoom || upperCell.isBlocking) && cell.walls[0])
                                    errors.push(errorHeaderCell+": extra wall on corridor top");
                                if (!cell.isWalled && rightCell && !(rightCell.isRoom || rightCell.isBlocking) && cell.walls[1])
                                    errors.push(errorHeaderCell+": extra wall on corridor right");
                                if (!cell.isWalled && lowerCell && !(lowerCell.isRoom || lowerCell.isBlocking) && cell.walls[2])
                                    errors.push(errorHeaderCell+": extra wall on corridor bottom");
                                if (!cell.isWalled && leftCell && !(leftCell.isRoom || leftCell.isBlocking) && cell.walls[3])
                                    errors.push(errorHeaderCell+": extra wall on corridor left");

                                if (cell.hedges) {

                                    if (cell.hedges[0] && upperCell && (!upperCell.hedges || !upperCell.hedges[2]))
                                        errors.push(errorHeaderCell+": hedges not matching on top");
                                    if (cell.hedges[1] && rightCell && (!rightCell.hedges || !rightCell.hedges[3]))
                                        errors.push(errorHeaderCell+": hedges not matching on right");
                                    if (cell.hedges[2] && lowerCell && (!lowerCell.hedges || !lowerCell.hedges[0]))
                                        errors.push(errorHeaderCell+": hedges not matching on bottom");
                                    if (cell.hedges[3] && leftCell && (!leftCell.hedges || !leftCell.hedges[1]))
                                        errors.push(errorHeaderCell+": hedges not matching on left");
                                }

                            } else {
                                if (!(cell.walls[0] && cell.walls[1] && cell.walls[2] && cell.walls[3]))
                                    errors.push(errorHeaderCell+": missing walls on a blocking cell");
                            }

                            // --- Cell type check
                            if (cell.type)
                                cell.type.forEach(type=>{
                                    if (ALLOWED_CELLTYPES.indexOf(type) == -1)
                                        errors.push(errorHeaderCell+": invalid cell type '"+type+"'");
                                    else if (cellTypes.indexOf(type) == -1)
                                        cellTypes.push(type);
                                });
                            else
                                errors.push(errorHeaderCell+": missing cell types");

                            // --- Cell outdoor check
                            if (isOutdoor)
                                if ((cell.type.indexOf("light")!= -1) && cell.isRoom)
                                    errors.push(errorHeaderCell+": outdoor light cell can't bee a room");
                                else if ((cell.type.indexOf("dark") != -1) && !cell.isRoom && !cell.isBlocking)
                                    errors.push(errorHeaderCell+": outdoor dark cell must be a room");
                                else if ((cell.type.indexOf("dark") == -1) && cell.isRoom)
                                    errors.push(errorHeaderCell+": outdoor room cell must be dark");
                                else if ((cell.type.indexOf("light") == -1) && (cell.type.indexOf("water") == -1) && !cell.isRoom && !cell.isBlocking)
                                    errors.push(errorHeaderCell+": outdoor street cell must be light or water");

                        });

                        createNode(sideNode,"br");
                    });

                    if (cellTypes.indexOf("lava") != -1) {
                        deniedCells.push("crystal");
                        deniedCells.push("light");
                        allowedSkins.push("lava");
                        deniedSkins.push("crystal");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        expectedSpecialRules.push("noLydian");
                    } else if (cellTypes.indexOf("crystal") != -1) {
                        deniedCells.push("lava");
                        deniedCells.push("light");
                        allowedSkins.push("crystal");
                        deniedSkins.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        expectedSpecialRules.push("noLydian");
                    } else if (hasHedges) {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        allowedSkins.push("outdoor");
                        allowedSkins.push("village");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                        expectedSpecialRules.push("noLydian");
                        expectedSpecialRules.push("zombicideHedges");
                        expectedSpecialRules.push("zombicideTiles");
                        if (hasWater) expectedSpecialRules.push("zombicideWater");
                        if (hasSolidWalls) expectedSpecialRules.push("zombicideSolidWalls");
                    } else if (isOutdoor) {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        deniedSkins.push("heaven");
                        deniedSkins.push("red");
                        deniedSkins.push("light");
                        allowedSkins.push("outdoor");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                        expectedSpecialRules.push("noLydian");
                        expectedSpecialRules.push("zombicideTiles");
                        if (hasWater) expectedSpecialRules.push("zombicideWater");
                        if (hasSolidWalls) expectedSpecialRules.push("zombicideSolidWalls");
                    } else {
                        deniedCells.push("crystal");
                        deniedCells.push("lava");
                        allowedSkins.push("rainbow");
                        allowedSkins.push("heaven");
                        allowedSkins.push("red");
                        allowedSkins.push("light");
                        deniedSkins.push("outdoor");
                        deniedSkins.push("lava");
                        deniedSkins.push("crystal");
                    }

                    if (closedSides[0] < cols)
                        openSidesCount++;

                    if (closedSides[1] < rows)
                        openSidesCount++;

                    if (closedSides[2] < cols)
                        openSidesCount++;

                    if (closedSides[3] < rows)
                        openSidesCount++;

                    addTagsSequence(expectedTags,"openSides",openSidesCount);
                    addTagsSequence(expectedTags,"roomsCount",roomsCount);

                    // --- Extra rules check

                    if (expectedSpecialRules.length)
                        if (side.specialRules) {
                            expectedSpecialRules.forEach(rule=>{
                                if (side.specialRules.indexOf(rule) == -1)
                                    errors.push(errorHeaderSide+": expected extra rule "+rule);
                            })
                            side.specialRules.forEach(rule=>{
                                if (expectedSpecialRules.indexOf(rule) == -1)
                                    errors.push(errorHeaderSide+": unexpected extra rule "+rule);
                            })
                        } else
                            errors.push(errorHeaderSide+": expected extra rules "+expectedSpecialRules.join(", "));

                    // --- Tags check

                    expectedTags.forEach(tag=>{
                        let
                            pos = side.tags.indexOf(tag);
                        if (pos == -1)
                            errors.push(errorHeaderSide+": tag '"+tag+"' is missing.");
                    });

                    side.tags.forEach(tag=>{
                        let
                            pos = expectedTags.indexOf(tag);
                        if (pos == -1)
                            errors.push(errorHeaderSide+": tag '"+tag+"' is extra.");
                    });

                    // --- Cell types check

                    deniedCells.forEach(type=>{
                        if (cellTypes.indexOf(type) != -1)
                            errors.push(errorHeaderSide+": cell type '"+type+"' not allowed in this tile.");
                    });

                    // --- Skin check

                    if (side.skins)
                        side.skins.forEach(skin=>{
                            if (allowedSkins.indexOf(skin) == -1)
                                errors.push(errorHeaderSide+": skin '"+skin+"' not allowed for this tile (Allowed: "+allowedSkins.join(", ")+")");

                            if (deniedSkins.indexOf(skin) != -1)
                                errors.push(errorHeaderSide+": skin '"+skin+"' denied for this tile (Allowed: "+allowedSkins.join(", ")+")");
                        });
                    else
                        errors.push(errorHeaderSide+": missing skin");

                    // --- ID check

                    if (side.id != cleanLabel)
                        errors.push(errorHeaderSide+": mismatching ID '"+side.id+"' with label '"+side.label+"'");

                    if ((tile.id.length != side.id.length-1) || (side.id.indexOf(tile.id) != 0))
                        errors.push(errorHeaderSide+": mismatching side ID '"+side.id+"' with tile ID '"+tile.id+"'");

                    if ((tile.label.length != side.label.length-1) || (side.label.indexOf(tile.label) != 0))
                        errors.push(errorHeaderSide+": mismatching side label '"+side.id+"' with tile label '"+tile.id+"'");

                    sideInfo.innerHTML=side.id+" <input style='width:900px' value='\""+expectedTags.join("\", \"")+"\"'>"

                })

            })

            dumpErrors(errorsNode,errors);
        },

        checkQuests:(into)=>{
            
            let
                html = "",
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                resources = getAllResourcesTypes([ "quests", "tokensAvailable", "symbols", "globalLabels", "challenges", "interface" ]),
                globalLabels = {},
                wordTokens = {},
                translations = {},
                translationExcludeOption;

            // Look for the untranslated exclusion option
            resources.interface.settings.forEach(option=>{
                option.entries.forEach(entry=>{
                    if (entry.languageExcludeTags)
                        translationExcludeOption = entry.languageExcludeTags;
                })
            })

            // Prepare global labels

            for (let k in resources.tokensAvailable)
                globalLabels["tokensCount."+k]=true;

            for (let k in resources.symbols)
                globalLabels["symbol."+k]=true;

            ALLOWED_PLACEHOLDERS.forEach(label=>{
                globalLabels[label]=true;
            });

            for (let k in resources.globalLabels)
                checkLabel(errors,wordTokens,"Global label "+k,globalLabels,resources.globalLabels[k]);

            // Check data

            resources.challenges.forEach((challenge,cid)=>{
                challenge.rules.forEach((rule,rid)=>{
                    let
                        errorRVHeader = "Challenge "+cid+" R"+(rid+1);

                    rule.name.forEach((set,sid)=>{
                        checkLabel(errors,wordTokens,errorRVHeader+" NAME"+(sid+1),globalLabels,set);
                    });

                    if (rule.summary)
                        rule.summary.forEach((set,sid)=>{
                            checkLabel(errors,wordTokens,errorRVHeader+" SUMMARY"+(sid+1),globalLabels,set);
                        });

                    if (rule.explanation)
                        rule.explanation.forEach((set,sid)=>{
                            checkLabel(errors,wordTokens,errorRVHeader+" EXPLAN"+(sid+1),globalLabels,set);
                        });

                })
            });

            resources.quests.forEach((quest,id)=>{

                let
                    errorHeader="["+quest._package+"] Quest "+(id+1);

                if (!translations[quest._package]) translations[quest._package] = { packageData:quest._packageData, translations:{} };
                for (let k in quest.by) {
                    if (!translations[quest._package].translations[k]) translations[quest._package].translations[k]=0;
                    translations[quest._package].translations[k]++;
                }    

                if (quest.by)
                    checkLabel(errors,wordTokens,errorHeader+" BY",0,quest.by);
                else
                    errors.push(errorHeader+" BY: Origin missing (by)");

                quest.versions.forEach((version,vid)=>{
                    let
                        errorVHeader = errorHeader+" V"+(vid+1);

                    version.labels.forEach((labelsVersion,lvid)=>{
                        let
                            errorLVId=errorVHeader+" LV"+(lvid+1);
                        
                        labelsVersion.forEach((set,sid)=>{
                            let
                                placeholders = {};
                            
                            for (let k in globalLabels)
                                placeholders[k]=true;

                            for (let k in set)
                                placeholders["label."+k]=true;

                            // Check this version labels

                            version.title.forEach((set,sid)=>{
                                checkLabel(errors,wordTokens,errorVHeader+" TITLE"+(sid+1),placeholders,set);
                            });
        
                            version.story.forEach((set,sid)=>{
                                checkLabel(errors,wordTokens,errorVHeader+" STORY"+(sid+1),placeholders,set);
                            });
        
                            if (version.objectivesHeader)
                                version.objectivesHeader.forEach((set,sid)=>{
                                    checkLabel(errors,wordTokens,errorVHeader+" OBJHEADER"+(sid+1),placeholders,set);
                                });

                            version.rules.forEach((rule,rid)=>{
                                rule.forEach((version,rvid)=>{
                                    let
                                        errorRVHeader = errorVHeader+" R"+(rid+1)+" V"+rvid;

                                    version.name.forEach((set,sid)=>{
                                        checkLabel(errors,wordTokens,errorRVHeader+" NAME"+(sid+1),placeholders,set);
                                    });

                                    if (version.summary)
                                        version.summary.forEach((set,sid)=>{
                                            checkLabel(errors,wordTokens,errorRVHeader+" SUMMARY"+(sid+1),placeholders,set);
                                        });

                                    if (version.explanation)
                                        version.explanation.forEach((set,sid)=>{
                                            checkLabel(errors,wordTokens,errorRVHeader+" EXPLAN"+(sid+1),placeholders,set);
                                        });

                                })
                            })

                            for (let label in set) {
                                set[label].forEach((option, oid)=>{
                                    checkLabel(errors,wordTokens,errorLVId+" S"+sid+" L["+label+"] O"+oid,placeholders,option);
                                })
                            }

                        });
                    });

                })
            });

            // Show stats

            html+="<h2>Translations</h2><ul>";
            for (let k in translations) {
                let total = translations[k].translations.EN;
                html+="<li><b>"+k+"</b><ul>";
                for (let l in resources.interface.supportedLanguages) {
                    let
                        count = translations[k].translations[l]||0,
                        prc = count/total;
                    if (prc > 1)
                        errors.push("Quest set "+k+": Invalid "+l+" percentage "+prc);
                    else if ((prc <1) && (translations[k].packageData.provides.indexOf(translationExcludeOption[l][0]) == -1))
                        errors.push("Quest set "+k+": missing provides tag "+translationExcludeOption[l][0]);
                    else if ((prc == 1) && (translations[k].packageData.provides.indexOf(translationExcludeOption[l][0]) != -1))
                        errors.push("Quest set "+k+": provides tag "+translationExcludeOption[l][0]+" not needed");
                    html+="<li>"+l+": "+formatPercentage(prc)+" ("+count+"/"+total+")</li>";
                }
                html+="</ul></li>";
            }
            html+="</ul>";

            let
                languageId = 0,
                entryId = 0;

            for (let k in wordTokens) {
                let
                    languageSetId = "language-"+languageId,
                    list = [];

                languageId++;
                    
                html+="<h2 style='cursor:pointer' onclick=\"document.getElementById('"+languageSetId+"').style.display=(document.getElementById('"+languageSetId+"').style.display == 'block' ? 'none' : 'block')\">"+k+(wordTokens[k].warningCount ? " <span style='color:red'>("+wordTokens[k].warningCount+")</span>" : "") + "</h2><ol id='"+languageSetId+"' style='display:none'>";
                for (let w in wordTokens[k].words)
                    list.push({ isWarning:wordTokens[k].words[w].isWarning, word:w, count:wordTokens[k].words[w].entries.length, entries:wordTokens[k].words[w].entries });
                list.sort((a,b)=>{
                    if (a.isWarning && !b.isWarning) return -1;
                    else if (!a.isWarning && b.isWarning) return 1;
                    else if (a.word < b.word) return -1;
                    else if (a.word > b.word) return 1;
                    else return 0;
                });
                list.forEach(word=>{
                    let
                        setId = "set-"+entryId;
                    entryId++;
                    html+="<li style='cursor:pointer"+(word.isWarning ? ";color:red" : "")+"' onclick=\"document.getElementById('"+setId+"').style.display=(document.getElementById('"+setId+"').style.display == 'block' ? 'none' : 'block')\">"+word.word+" ("+word.count+")<ul id='"+setId+"' style='display:none'>";
                    word.entries.forEach(entry=>{
                        html+="<li>"+entry+"</li>";
                    })
                    html+="</ul></li>";
                });
                html+="</ol>";
            }

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML=html;

        },

        testQuests:(into)=>{

            let
                errorsNode = createErrorsNode(into),
                buttonsNode = createNode(into,"div"),
                separatorNode = createNode(into,"hr"),
                resultsNode = createNode(into,"div"),
                previewNode = createNode(into,"div"),
                errors = [];

            QUEST_CONFIGS.forEach(config=>{
                let
                    button = createNode(buttonsNode,"input");
                button.type = "button";
                button.value=config.id;
                button.onclick=()=>{

                    let
                        testsSequence = [],
                        resources = ModManager.load(config);

                    errors = [];
                    buttonsNode.style.display = "none";
                    resultsNode.innerHTML = "";
                    previewNode.innerHTML = "";

                    resources.quests.forEach(quest=>{
                        if (!DEBUG_QUEST || quest._debug)
                            testsSequence.push({
                                config:config,
                                quest:quest,
                                iterations:TESTQUESTS_ITERATIONS
                            })
                    });
                    startQuestTester(testsSequence,resultsNode,previewNode,errors,()=>{
                        buttonsNode.style.display = "block";
                        dumpErrors(errorsNode,errors);
                    })

                }

                
            });

            
        },

        testMapConfigs:(into)=>{

            let
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                errors = [],
                mapConfigIndex = [],
                allMapConfigs = [];

            QUEST_CONFIGS.forEach(config=>{
                let
                    errorHeader=config.id+": ",
                    resources = ModManager.load(config),
                    mapConfigs = {};
                
                resources.mapConfigs.forEach(config=>{
                    let
                        id = config.attribute+"/"+config.value;

                    if (mapConfigs[id])
                        errors.push(errorHeader+"Duplicated id "+id);
                    else
                        mapConfigs[id]=true;

                    if (mapConfigIndex.indexOf(id) == -1)
                        mapConfigIndex.push(id);

                });

                allMapConfigs.push(mapConfigs);
            });

            mapConfigIndex.sort();

            QUEST_CONFIGS.forEach((config,id)=>{
                let
                    errorHeader=config.id+": ";

                mapConfigIndex.forEach(configId=>{
                    if (!allMapConfigs[id][configId])
                        errors.push(errorHeader+"Missing id "+configId);
                })
            });

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML="<ul><li>"+mapConfigIndex.join("</li><li>")+"</li></ul>";

        },

        mapElementsIndex:(into)=>{
            let
                html = "<div style='font-size:12px'>Notes:<ul style='margin:0'><li>Make sure that gameModes requiring a room ID are on structures with the matcing tile with at least 1 room (like adding the roomsCount1+ requirement)</li></ul></div>",
                tags = {},
                errors = [],
                errorsNode = createErrorsNode(into),
                resultsNode = createNode(into,"div"),
                resources = getAllResourcesTypes([ "mapConfigs" ]);

            resources.mapConfigs.forEach(mapConfig=>{
                let
                    id = mapConfig.attribute+"/"+mapConfig.value;
                switch (mapConfig.attribute) {
                    case "gameMode":{
                        // Rooms arrangement
                        if (mapConfig.config.roomsContent)
                            mapConfig.config.roomsContent.forEach(version=>{
                                version.forEach(room=>{
                                    if (room.atTileId)
                                        addMapTag(tags,"gameMode",id,"Requires room ID "+room.atTileId);
                                })
                            });
                        break;
                    }
                }
            });
            
            for (let k in tags) {
                html+="<h2>"+k+"</h2><ul>";
                for (let z in tags[k]) {
                    html+="<li>"+z+"<ul>";
                    for (let y in tags[k][z])
                        html+="<li>"+y+" ("+tags[k][z][y]+")</li>";
                    html+="</ul></li>";
                }
                html+="</ul>";
            }

            dumpErrors(errorsNode,errors);
            resultsNode.innerHTML=html;
        }

    }

})();        