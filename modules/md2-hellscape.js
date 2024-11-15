ModManager.modules.push(function(){

    return [
            {

            id:"md2-hellscape",
            needs:[ ],
            provides:[ "md2-hellscape" ],
            label:{
                EN:"MD2: Hellscape box content"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        boxMd2CoreBox:{
                            EN:"from MD2: Hellscape",
                            IT:"da MD2: Hellscape",
                            FR:"de MD2: Hellscape"
                        }
                    }
                },{
                    type:"symbols",
                    data:{
                        yellowDie:{
                            EN:"<span class='symbol dice yellow'>Y</span>",
                            IT:"<span class='symbol dice yellow'>G</span>",
                            FR:"<span class='symbol dice yellow'>J</span>"
                        },
                        orangeDie:{
                            EN:"<span class='symbol dice orange'>O</span>",
                            IT:"<span class='symbol dice orange'>A</span>",
                            FR:"<span class='symbol dice orange'>O</span>"
                        },
                        blueDie:{
                            EN:"<span class='symbol dice blue'>BL</span>",
                            IT:"<span class='symbol dice blue'>B</span>",
                            FR:"<span class='symbol dice blue'>B</span>"
                        },
                        blackDie:{
                            EN:"<span class='symbol dice black'>BK</span>",
                            IT:"<span class='symbol dice black'>N</span>",
                            FR:"<span class='symbol dice black'>N</span>"
                        },
                        purpleDie:{
                            EN:"<span class='symbol dice purple'>P</span>",
                            IT:"<span class='symbol dice purple'>V</span>",
                            FR:"<span class='symbol dice purple'>V</span>"
                        },
                        greenDie:{
                            EN:"<span class='symbol dice green'>G</span>",
                            IT:"<span class='symbol dice green'>V</span>"
                        },
                        redDie:{
                            EN:"<span class='symbol dice red'>R</span>",
                            IT:"<span class='symbol dice red'>R</span>"
                        },
                        sword:{
                            EN:"<span class='symbol icon sword'></span>"
                        },
                        shield:{
                            EN:"<span class='symbol icon shield'></span>"
                        },
                        scratch:{
                            EN:"<span class='symbol icon scratch'></span>"
                        },
                        fang:{
                            EN:"<span class='symbol icon fang'></span>"
                        },
                        mana:{
                            EN:"<span class='symbol icon mana'></span>"
                        },
                        face:{
                            EN:"<span class='symbol icon face'></span>"
                        },
                        rangeRanged:{
                            EN:"<span class='symbol icon rangeRanged'></span>"
                        },
                        rangeMelee:{
                            EN:"<span class='symbol icon rangeMelee'></span>"
                        },
                        rangeMagic:{
                            EN:"<span class='symbol icon rangeMagic'></span>"
                        },
                        corruptionToken:{
                            EN:"<span class='symbol token corruption'></span>"
                        },
                        timeToken:{
                            EN:"<span class='symbol token time'></span>"
                        },
                        mobToken:{
                            EN:"<span class='symbol token mob'></span>"
                        },
                        frostToken:{
                            EN:"<span class='symbol token frost'></span>"
                        },
                        fireToken:{
                            EN:"<span class='symbol token fire'></span>"
                        }
                    }
                },{
                    type:"tokensMetadata",
                    data:{
                        bridge:{
                            className:{
                                map:"token largeSquared bridge"
                            },
                            label:{
                                IT:[ "Ponte", "Ponti" ],
                                EN:[ "Bridge", "Bridges"],
                                FR:[ "Pont", "Ponts"]
                            }
                        },
                        regularPortal:{
                            className:{
                                map:"token largeRound regularPortal"
                            },
                            label:{
                                IT:[ "Segnalino Portale dei Mostri Erranti", "Segnalini Portale dei Mostri Erranti" ],
                                EN:[ "Roaming Monster Portal Token", "Roaming Monster Portal Tokens" ],
                                FR:[ "Pion Portail de Monstre Errant", "Pions Portail de Monstre Errant" ]
                            }
                        },
                        portal3:{
                            className:{
                                map:"token largeRound portal3"
                            },
                            aggregateTo:"greenPortal",
                            label:{
                                IT:[ "Segnalino Portale 3+", "Segnalini Portale 3+" ],
                                EN:[ "Portal Token 3+", "Portal Tokens 3+" ],
                                FR:[ "Pion Portail 3+", "Pions Portail 3+" ]
                            }
                        },
                        portal5:{
                            className:{
                                map:"token largeRound portal5"
                            },
                            aggregateTo:"greenPortal",
                            label:{
                                IT:[ "Segnalino Portale 5+", "Segnalini Portale 5+" ],
                                EN:[ "Portal Token 5+", "Portal Tokens 5+" ],
                                FR:[ "Pion Portail 5+", "Pions Portail 5+" ]
                            }
                        },
                        door:{
                            className:{
                                map:"token door"
                            },
                            splitFlippedTo:"openDoor",
                            label:{
                                IT:[ "Segnalino Porta Chiusa", "Segnalini Porta Chiusa" ],
                                EN:[ "Closed Door", "Closed Doors" ],
                                FR:[ "Porte ferm&eacute;e", "Portes ferm&eacute;es" ]
                            }
                        },
                        openDoor:{
                            className:{
                                map:"token flipped door"
                            },
                            label:{
                                IT:[ "Segnalino Porta Aperta", "Segnalini Porta Aperta" ],
                                EN:[ "Open Door", "Open Doors" ],
                                FR:[ "Porte ouverte", "Portes ouvertes" ]
                            }
                        },
                        objective:{
                            groupWhen:2,
                            className:{
                                map:"token largeRound objective"
                            },
                            splitFlippedTo:"objectiveFlipped",
                            label:{
                                IT:[ "Segnalino Obiettivo con il Lato Colorato a Faccia in Su", "Segnalini Obiettivo con il Lato Colorato a Faccia in Su" ],
                                EN:[ "Color-Side-Up Objective Token", "Color-Side-Up Objective Tokens" ],
                                FR:[ "Pion Objectif face color&eacute;e visible", "Pions Objectif face color&eacute;e visible" ]
                            }
                        },
                        mob:{
                            className:{
                                map:"token smallRound mob"
                            },
                            label:{
                                IT:[ "Segnalino Generazione", "Segnalini Generazione" ],
                                EN:[ "Spawn Token", "Spawn Tokens" ],
                                FR:[ "Pion G&eacute;n&eacute;ration d’Ennemi", "Pions G&eacute;n&eacute;ration d’Ennemi" ]
                            }
                        },
                        loot:{
                            className:{
                                map:"token smallRound loot"
                            },
                            type:"variableAmount",
                            label:{
                                IT:[ "Segnalino Bottino", "Segnalini Bottino" ],
                                EN:[ "Loot Token", "Loot Tokens" ],
                                FR:[ "Pion Butin", "Pions Butin" ]
                            }
                        },
                        bearTrap:{
                            className:{
                                map:"token largeRound bearTrap"
                            },
                            label:{
                                IT:[ "Segnalino Tagliola", "Segnalini Tagliola" ],
                                EN:[ "Bear Trap Token", "Bear Trap Tokens" ],
                                FR:[ "Pion Pi&egrave;ge &agrave; Ours", "Pions Pi&egrave;ge &agrave; Ours" ]
                            }
                        },
                        spikeTrap:{
                            className:{
                                map:"token largeOutlined spikeTrap"
                            },
                            label:{
                                IT:[ "Segnalino Trappola con Spuntoni", "Segnalini Trappola con Spuntoni" ],
                                EN:[ "Spike Trap Token", "Spike Trap Tokens" ],
                                FR:[ "Pion Pi&egrave;ge &agrave; Pieux", "Pions Pi&egrave;ge &agrave; Pieux" ]
                            }
                        },
                        forge:{
                            className:{
                                map:"token outlined forge"
                            },
                            label:{
                                IT:[ "Segnalino Forgia", "Segnalini Forgia" ],
                                EN:[ "Forge Token", "Forge Tokens" ],
                                FR:[ "Pion Forge", "Pions Forge" ]
                            }
                        },
                        pillar:{
                            className:{
                                map:"token largeSquared pillar"
                            },
                            label:{
                                IT:[ "Segnalino Colonna", "Segnalini Colonna" ],
                                EN:[ "Pillar Token", "Pillar Tokens" ],
                                FR:[ "Pion Pilier", "Pions Pilier" ]
                            }
                        },
                        regularChest:{
                            className:{
                                map:"token regularChest"
                            },
                            label:{
                                IT:[ "Segnalino Forziere Regolare", "Segnalini Forziere Regolare" ],
                                EN:[ "Regular Chest Token", "Regular Chest Tokens" ],
                                FR:[ "Pion Coffre Standard", "Pions Coffre Standard" ]
                            }
                        },
                        greaterChest:{
                            className:{
                                map:"token greaterChest"
                            },
                            label:{
                                IT:[ "Segnalino Forziere Superiore", "Segnalini Forziere Superiore" ],
                                EN:[ "Greater Chest Token", "Greater Chest Tokens" ],
                                FR:[ "Pion Grand Coffre", "Pions Grand Coffre" ]
                            }
                        },
                        fountain:{
                            className:{
                                map:"token tall fountain"
                            },
                            label:{
                                IT:[ "Segnalino Fontana", "Segnalini Fontana" ],
                                EN:[ "Fountain Token", "Fountain Tokens" ],
                                FR:[ "Pion Fontaine", "Pions Fontaine" ]
                            }
                        },
                        corruption:{
                            groupWhen:3,
                            className:{
                                map:"token smallRound corruption"
                            },
                            label:{
                                IT:[ "Segnalino Corruzione", "Segnalini Corruzione" ],
                                EN:[ "Corruption Token", "Corruption Tokens" ],
                                FR:[ "Pion Corruption", "Pions Corruption" ]
                            }
                        },
                        time:{
                            groupWhen:3,
                            className:{
                                map:"token smallRound time"
                            },
                            label:{
                                IT:[ "Segnalino Tempo", "Segnalini Tempo" ],
                                EN:[ "Time Token", "Time Tokens" ],
                                FR:[ "Pion Temps", "Pions Temps" ]
                            }
                        },
                        frost:{
                            className:{
                                map:"token smallRound frost"
                            },
                            label:{
                                IT:[ "Segnalino Gelo", "Segnalini Gelo" ],
                                EN:[ "Frost Token", "Frost Tokens" ],
                                FR:[ "Pion Givre", "Pions Givre" ]
                            }
                        },
                        fire:{
                            className:{
                                map:"token smallRound fire"
                            },
                            label:{
                                IT:[ "Segnalino Fuoco", "Segnalini Fuoco" ],
                                EN:[ "Fire Token", "Fire Tokens" ],
                                FR:[ "Pion Feu", "Pions Feu" ]
                            }
                        },
                
                        // Virtual tokens

                        greenPortal:{
                            className:{
                                map:"token largeRound greenPortal"
                            },
                            type:"upTo",
                            label:{
                                IT:[ "Segnalino Portale", "Segnalini Portale" ],
                                EN:[ "Portal Token", "Portal Tokens" ],
                                FR:[ "Pion Portail Standard", "Pions Portail Standard" ]
                            }
                        },
                        objectiveFlipped:{
                            className:{
                                map:"token largeRound objective flipped"
                            },
                            label:{
                                IT:[ "Segnalino Obiettivo Grigio", "Segnalini Obiettivo Grigio" ],
                                EN:[ "Gray Objective Token", "Gray Objective Tokens" ],
                                FR:[ "Pion Objectif Gris", "Pions Objectif Gris" ]
                            }
                        },
                        startPoint:{
                            className:{
                                map:"token largeRound startPoint"
                            },
                            label:{
                                IT:[ "Zona di Partenza degli Eroi", "Zone di Partenza degli Eroi" ],
                                EN:[ "Hero Starting Zone", "Hero Starting Zones" ],
                                FR:[ "Zone de d&eacute;part des H&eacute;ros", "Zones de d&eacute;part des H&eacute;ros" ]
                            }
                        },
                        startMob:{
                            className:{
                                map:"token smallRound startMob"
                            },
                            label:{
                                IT:[ "Orda di Partenza", "Orde di Partenza" ],
                                EN:[ "Starting Mob Zone", "Starting Mob Zones" ],
                                FR:[ "Zone de Bande initiale", "Zones de Bande initiale" ]
                            }
                        },
                        startRoaming:{
                            className:{
                                map:"token largeRound startRoaming"
                            },
                            label:{
                                IT:[ "Mostro Errante di Partenza", "Mostri Erranti di Partenza" ],
                                EN:[ "Starting Roaming Monster Zone", "Starting Roaming Monster Zones" ],
                                FR:[ "Zone de Monstre Errant initial", "Zones de Monstre Errant initial" ]
                            }
                        }
                    }
                },{
                    type:"tokensAvailable",
                    data:{
                        frost:12,
                        fire:12,
                        corruption:12,
                        time:12,
                        bridge:2,
                        regularPortal:1,
                        portal3:1,
                        portal5:1,
                        door:15,
                        objective:5,
                        mob:15,
                        loot:28,
                        bearTrap:4,
                        spikeTrap:6,
                        forge:4,
                        pillar:6,
                        regularChest:15,
                        greaterChest:4,
                        fountain:4,
                
                        // Virtual tokens
                        greenPortal:3,
                        openDoor:15,
                        startMob:10,
                        startRoaming:10,
                        startPoint:10
                    }
                },{
                    type:"tiles",
                    data:[
                        {
                            id:"A1",
                            label:"[A]1",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A1A",
                                    label:"[A]1A",
                                    skins:[ "light" ],
                                    tags: [ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "light" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], walls:[ true, false, false, false ] }, { type:[ "dark" ], walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A1B",
                                    label:"[A]1B",
                                    skins:[ "red" ],
                                    tags: [ "any", "roomSize1", "roomSize1+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount3", "roomsCount1+", "roomsCount2+", "roomsCount3+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], walls:[ true, false, true, false ] }, { type:[ "dark" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A2",
                            label:"[A]2",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A2A",
                                    label:"[A]2A",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize1", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "light" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ true, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A2B",
                                    label:"[A]2B",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, true, false, false ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "light" ], walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, false, false, false ] }, { type:[ "light" ], walls:[ true, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A3",
                            label:"[A]3",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A3A",
                                    label:"[A]3A",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], walls:[ false, false, true, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A3B",
                                    label:"[A]3B",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], walls:[ false, true, false, false ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], walls:[ false, true, false, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, true, false ] } ],
                                            [ { type:[ "light" ], walls:[ false, false, false, false ] }, { type:[ "dark" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A4",
                            label:"[A]4",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A4A",
                                    label:"[A]4A",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize2", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, false, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true,  walls:[ false, true, true, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A4B",
                                    label:"[A]4B",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides2", "openSides1+", "openSides2+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, true ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, false, true ]}, { type:[ "light" ], walls:[ false, true, false, true ] }, { type:[ "dark" ], isRoom:true,  walls:[ false, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ false, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A5",
                            label:"[A]5",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A5A",
                                    label:"[A]5A",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize6", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "roomSize6+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, false, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ false, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ false, true, true, false] } ],
                                            [ { type:[ "light" ], walls:[ true, false, false, false ] }, { type:[ "light" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A5B",
                                    label:"[A]5B",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize2", "roomSize1+", "roomSize2+", "openSides4", "openSides1+", "openSides2+", "openSides3+", "openSides4+", "roomsCount2", "roomsCount1+", "roomsCount2+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, true, false, true ] }, { type:[ "dark" ], walls:[ false, false, false, true ]}, { type:[ "dark" ], walls:[ false, false, true, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ]}, { type:[ "dark" ], walls:[ false, true, false, true ] }, { type:[ "light" ], isRoom:true,  walls:[ true, true, false, true ] } ],
                                            [ { type:[ "light" ], isRoom:false, walls:[ true, false, false, false ] }, { type:[ "light" ], walls:[ false, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A6",
                            label:"[A]6",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A6A",
                                    label:"[A]6A",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize5", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "roomSize5+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:true, walls:[ true, false, false, true ] }, { type:[ "light" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "dark" ], isRoom:true, walls:[ true, true, false, false ] } ],
                                            [ { type:[ "dark" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "light" ], isRoom:false, walls:[ true, true, false, true ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true] } ],
                                            [ { type:[ "dark" ], walls:[ true, false, false, false ] }, { type:[ "dark" ], walls:[ false, false, false, false ]}, { type:[ "light" ], walls:[ true, false, false, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A6B",
                                    label:"[A]6B",
                                    skins:[ "light" ],
                                    tags:[ "any", "roomSize3", "roomSize1+", "roomSize2+", "roomSize3+", "openSides1", "openSides1+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, true, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "dark" ], walls:[ true, true, false, true ] }, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ] } ],
                                            [ { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true ] }, { type:[ "light" ], walls:[ false, true, false, true ]}, { type:[ "blocking" ], isBlocking:true, walls:[ true, true, true, true] } ],
                                        ]
                                    ]
                                }
                            ]
                        },{
                            id:"A7",
                            label:"[A]7",
                            from:"boxMd2CoreBox",
                            sides:[
                                /*
                                {
                                    id:"A7A",
                                    label:"[A]7A",
                                    skins:[ "light" ],
                                    angles:[
                                        [
                                            [ { type:[ "dark" ], isRoom:false, walls:[ false, false, false, false ] }, { type:[ "light" ], walls:[ false, false, true, false ]}, { type:[ "dark" ], walls:[ false, false, false, false ] } ],
                                            [ { type:[ "light" ], walls:[ false, true, false, false ] }, { isBlocking:true, walls:[ true, true, true, true ]}, { type:[ "light" ], walls:[ false, false, false, true] } ],
                                            [ { type:[ "light" ], walls:[ false, false, false, false ] }, { type:[ "dark" ], walls:[ true, false, false, false ]}, { type:[ "light" ], walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                },
                                */
                                {
                                    id:"A7B",
                                    label:"[A]7B",
                                    skins:[ "red" ],
                                    tags:[ "any", "roomSize4", "roomSize1+", "roomSize2+", "roomSize3+", "roomSize4+", "openSides3", "openSides1+", "openSides2+", "openSides3+", "roomsCount1", "roomsCount1+" ],
                                    angles:[
                                        [
                                            [ { type:[ "light" ], isRoom:true, walls:[ true, false, true, true ] }, { type:[ "dark" ], isRoom:true, walls:[ true, false, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ true, true, true, false ] } ],
                                            [ { type:[ "dark" ], walls:[ true, true, false, false ]}, { type:[ "light" ], isRoom:true, walls:[ false, true, true, true ] }, { type:[ "dark" ], walls:[ true, false, false, true ] } ],
                                            [ { type:[ "light" ], walls:[ false, false, false, false ] }, { type:[ "dark" ], walls:[ true, false, false, false ]}, { type:[ "dark" ], walls:[ false, false, false, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                        /*,{
                            id:"A8",
                            label:"A8",
                            from:"boxMd2CoreBox",
                            sides:[
                                {
                                    id:"A8A",
                                    label:"[A]8A",
                                    skins:[ "red" ],
                                    angles:[
                                        [
                                            [ { isRoom:true, type:[ "light" ], walls:[ true, false, false, true ] }, { isRoom:true, type:[ "dark" ], walls:[ true, false, false, false ]}, { isRoom:true, type:[ "light" ], walls:[ true, true, false, false ] } ],
                                            [ { isRoom:true, type:[ "dark" ], walls:[ false, false, false, true ] }, { isRoom:true, type:[ "light" ], walls:[ false, false, false, false ]}, { isRoom:true, type:[ "dark" ], walls:[ false, true, false, false] } ],
                                            [ { isRoom:true, type:[ "light" ], walls:[ false, false, true, true ] }, { isRoom:true, type:[ "dark" ], walls:[ false, false, true, false ]}, { isRoom:true, type:[ "light" ], walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                },{
                                    id:"A8B",
                                    label:"[A]8B",
                                    skins:[ "light" ],
                                    angles:[
                                        [
                                            [ { isRoom:true, type:[ "light" ], walls:[ true, false, false, true ] }, { isRoom:true, type:[ "dark" ], walls:[ true, false, false, false ]}, { isRoom:true, type:[ "light" ], walls:[ true, true, false, false ] } ],
                                            [ { isRoom:true, type:[ "dark" ], walls:[ false, false, false, true ] }, { isRoom:true, type:[ "light" ], walls:[ false, false, false, false ]}, { isRoom:true, type:[ "dark" ], walls:[ false, true, false, false] } ],
                                            [ { isRoom:true, type:[ "light" ], walls:[ false, false, true, true ] }, { isRoom:true, type:[ "dark" ], walls:[ false, false, true, false ]}, { isRoom:true, type:[ "light" ], walls:[ false, true, true, false ] } ],
                                        ]
                                    ]
                                }
                            ]
                        }
                        */
                    ]
                }
            ]
        },{
            id:"md2-hellscape-bridges-twoexits",
            needs:[ ],
            provides:[ "bridge-default-twoexits" ],
            label:{
                EN:"MD2: Hellscape bridge (two exits)"
            },
            content:[
                {
                    type:"bridge",
                    data:{
                        id:"bridge",
                        isTwoExits:true,
                        sides:[
                            {
                                id:"Bridge",
                                isBridge:true,
                                angles:[
                                    [
                                        [ { type:[ "dark" ], isWalled:true, isBridge:true, walls:[ true, false, true, false ] } ]
                                    ],
                                    [
                                        [ { type:[ "dark" ], isWalled:true, isBridge:true, walls:[ false, true, false, true ] } ]
                                    ]
                                ]
                            }
                        ]
                    },
                }
            ]
        },{
            id:"md2-hellscape-bridges-fourexits",
            needs:[ ],
            provides:[ "bridge-default-fourexits" ],
            label:{
                EN:"MD2: Hellscape bridge (four exits)"
            },
            content:[
                {
                    type:"bridge",
                    data:{
                        id:"bridge",
                        sides:[
                            {
                                id:"Bridge",
                                isBridge:true,
                                angles:[
                                    [
                                        [ { type:[ "dark" ], isWalled:true, isBridge:true, walls:[ false, false, false, false ] } ]
                                    ]
                                ]
                            }
                        ]
                    },
                }
            ]
        }
    ]

});