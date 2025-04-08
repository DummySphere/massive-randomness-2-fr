ModManager.modules.push(function(){

    return [
        {

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default" ],
            label:{
                EN:"MD2 quest generator default data"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        objectives:{
                            IT:"Obiettivi della missione",
                            EN:"Quest objectives",
                            FR:"Objectifs de la Qu&ecirc;te"
                        },
                        specialRules:{
                            IT:"Regole speciali",
                            EN:"Quest special rules",
                            FR:"R&egrave;gles sp&eacute;ciales de la Qu&ecirc;te"
                        },
                        challenges:{
                            IT:"Sfide",
                            EN:"Challenges",
                            FR:"Challenges"
                        },
                        challengesExplanation:{
                            IT:"Se sei in cerca di pericolo e gloria puoi affrontare questa avventura seguendo una o pi&ugrave; di queste regole aggiuntive:",
                            EN:"If you are seeking danger and glory you can tackle this adventure by following one or more of these additional rules:",
                            FR:"Si vous recherchez le danger et la gloire, vous pouvez affronter cette qu&ecirc;te en appliquant une ou plusieurs de ces r&egrave;gles additionnelles :"
                        },
                        requiredTiles:{
                            IT:"Tessere richieste",
                            EN:"Tiles needed",
                            FR:"Dalles requises"
                        },
                        upTo:{
                            IT:"Fino a",
                            EN:"Up to",
                            FR:"Jusqu'&agrave;"
                        },
                        lootRatio:{
                            IT:"I segnalini Bottino vanno collocati in base al numero di Eroi:",
                            EN:"Loot tokens are placed according to the number of Heroes:",
                            FR:"Les pions Butin sont plac&eacute;s en fonction du nombre de H&eacute;ros :"
                        },
                        questHeader:{
                            IT:"Avventura One-Shot:",
                            EN:"One-Shot Quest:",
                            FR:"Qu&ecirc;te one-shot :"
                        },
                        questFooter:{
                            IT:"Massive Randomness 2 &dash; Avventura One-Shot",
                            EN:"Massive Randomness 2 &dash; One Shot Quest",
                            FR:"Massive Randomness 2 &dash; Qu&ecirc;te one-shot"
                        },
                        showHiddenText:{
                            IT:"Mostra testo nascosto",
                            EN:"Show hidden text",
                            FR:"Afficher le texte cach&eacute;"
                        },
                        massiveDarkness1:{
                            EN:"from Massive Darkness 1",
                            IT:"da Massive Darkness 1",
                            FR:"de Massive Darkness 1"
                        }
                    }
                },{
                    type:"specialRules",
                    data:{
                        noLydian:[
                            {
                                priority:10,
                                type:"rule",
                                name:{
                                    IT:"Sonno di Lyidan",
                                    EN:"Lyidan's Sleep",
                                    FR:"Le Sommeil de Lyidan"
                                },
                                explanation:{
                                    IT:"Rimuovere le carte di Lyidan da tutti i mazzi dei Mostri Erranti.",
                                    EN:"Remove Lyidan cards from all Roaming Monster decks.",
                                    FR:"Retirez les cartes de Lyidan de tous les paquets de Monstres Errants."
                                }
                            }
                        ]
                    }
                }
            ]
        },{

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default", "quest-default-zombicide" ],
            label:{
                EN:"MD2 quest generator default data (Zombicide rules)"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        zombicideTiles:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Cross-over con Zombicide",
                                    EN:"Zombicide Cross-over",
                                    FR:"Cross-over avec Zombicide"
                                },
                                explanation:{
                                    IT:"Le tessere di Zombicide (indicate con <b>[Z]</b>) sono da considerarsi divise in 3&times;3 Zone come le tessere di Massive Darkness. Gli edifici sono da equivalenti alle Camere di Massive Darkness 2 ed i muri sui bordi di una tessera o tra una Zona di edificio ed una Zona di strada sono da considerarsi sempre chiusi, a meno che non vi sia un segnalino Porta. Le tessere di Zombicide sono ambientate all'esterno, per cui le Zone di strada sono considerate Zone di Luce e le Zone degli edifici sono considerate Zone d'Ombra.",
                                    EN:"The Zombicide tiles (indicated with <b>[Z]</b>) are to be considered split into 3&times;3 Zones like the Massive Darkness tiles. The buildings are equivalent to Massive Darkness 2 Chambers and the walls on tile borders or between a building Zone and a street Zone are always considered closed unless there is a door token. Zombicide tiles are set outdoors, so the street Zones are considered Light Zones and the building Zones are considered Shadow Zones.",
                                    FR:"Les dalles Zombicide (indiqu&eacute;es par <b>[Z]</b>) doivent &ecirc;tre consid&eacute;r&eacute;es divis&eacute;es en 3&times;3 Zones comme les dalles de Massive Darkness. Les b&acirc;timents sont &eacute;quivalents aux Salles de Massive Darkness 2 et les murs au bord des dalles ou entre une Zone de b&acirc;timent et une Zone de rue sont toujours consid&eacute;r&eacute;s comme ferm&eacute;s &agrave; moins qu'il y ait un pion Porte. Les dalles Zombicide se passent en ext&eacute;rieur, donc les Zones de rues sont consid&eacute;r&eacute;es comme des Zones Lumineuses et les Zones de b&acirc;timents sont consid&eacute;r&eacute;es comme des Zones d'Ombre."
                                }
                            }
                        ],
                        zombicideHedges:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Le Siepi",
                                    EN:"The Hedges",
                                    FR:"Les Haies"
                                },
                                explanation:{
                                    IT:"Le siepi stampate sulle tessere possono essere attraversate normalmente ma interrompono le Linee di Vista di Eroi e Nemici.",
                                    EN:"Hedges printed on tiles can be crossed normally but interrupt Lines of Sight of Heroes and Enemies.",
                                    FR:"Les haies imprim&eacute;es sur les dalles peuvent &ecirc;tre travers&eacute;es normalement mais bloquent la Ligne de Vue des H&eacute;ros et des Ennemis."
                                }
                            }
                        ],
                        zombicideWater:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Le Zone Allagate",
                                    EN:"The Waterholes",
                                    FR:"Les Zones Innond&eacute;es"
                                },
                                explanation:{
                                    IT:"Nemici ed Eroi si muovono regolarmente attraverso le Zone Allagate ma devono spendere 1 PM in pi&ugrave; per uscire da una Zona Allagata attraverso un cornicione.",
                                    EN:"Enemies and Heroes move through Waterholes regularly but must spend 1 extra MP to leave a Waterhole through a Ledge.",
                                    FR:"Les Ennemis et les H&eacute;ros se d&eacute;placent normalement dans les Zones Innond&eacute;es mais doivent d&eacute;penser 1 PM suppl&eacute;mentaire pour quitter une Zones Innond&eacute;e par un rebord."
                                }
                            }
                        ],
                        zombicideSolidWalls:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"I Bastioni",
                                    EN:"The Ramparts",
                                    FR:"Les Remparts"
                                },
                                explanation:{
                                    IT:"Le tessere delle torri contengono sia Zone degli edifici che Zone di strada, delimitate dai bastioni:<ul>"+
                                        "<li>I bastioni non possono essere attraversati, ma non bloccano le Linee di Vista.</li>"+
                                        "<li>&Egrave; possibile tirare attraverso i bastioni.</li>"+
                                        "<li>Un Eroe o un Nemico nella Zona di una torre pu&ograve; vedere al di sopra di un edificio, fino alle Zone oltre di esso. Analogamente, qualsiasi Eroe o Nemico in una di quelle Zone possiede Linea di Vista fino all'Eroe o al Nemico sulla torre.</li>"+
                                        "<li>Un Eroe pu&ograve; tirare dalla Zona di una torre al di sopra di una Zona di un edificio. La Zona dell'edificio attraversata dal tiro conta ai fini di determinare la gittata dell'arma o dell'incantesimo, ma non &egrave; raggiunta da una Linea di Vista.</li>"+
                                        "<li>Non &egrave; possibile tracciare Linee di Vista tra le Zone delle torri delimitate dai bastioni e le zone degli edifici adiacenti a esse, nemmeno se c'&egrave; una porta aperta.</li>"+
                                        "</ul>",
                                    EN:"Tower tiles feature both building and street Zones, bordered by ramparts:<ul>"+
                                        "<li>Ramparts can't be crossed but don't block Lines of Sight</li>"+
                                        "<li>Ramparts can be shot through.</li>"+
                                        "<li>A Hero or Enemy in a tower Zone can see over a building to Zones beyond it. Likewise, any Hero or Enemy in one of these Zones has a Line of Sight to the Hero or Enemy on the tower.</li>"+
                                        "<li>A Hero can shoot from a tower Zone, over a building Zone. The building Zone that is shot through counts towards the weapon or spell's Range, but there is no Line of Sight to it.</li>"+
                                        "<li>Lines of Sight can't be drawn between tower Zones bordered with ramparts and building Zones next to them, even with an open door.</li>"+
                                        "</ul>",
                                    FR:"Les dalles de Tours ont &agrave; la fois des Zones de B&acirc;timents et de rues, entour&eacute;es par des Remparts:<ul>"+
                                        "<li>Les Remparts ne peuvent pas &ecirc;tre travers&eacute;s mais ne bloquent pas la Ligne de Vue</li>"+
                                        "<li>Il est possible de tirer &agrave; travers les Remparts.</li>"+
                                        "<li>Un H&eacute;ros ou Ennemi dans une Zone de Tour peut voir par-dessus un B&acirc;timent dans les Zones derri&egrave;res. De m&ecirc;mem, un H&eacute;ros ou un Ennemi dans une de ces Zones a une Ligne de Vue sur un H&eacute;ros ou un Ennemi sur la Tour.</li>"+
                                        "<li>Un H&eacute;ros peut tirer depuis une Zone de Tour, par-dessus une Zone de B&acirc;timent. La Zone de B&acirc;timent &agrave; travers laquelle passe un tir compte dans la port&eacute;e de l'arme ou du sort, mais il n'y a pas de Ligne de Vue vers celle-ci.</li>"+
                                        "<li>Il n'y a pas de Ligne de Vue entre des Zones de Tour entour&eacute;es de Remparts et les Zones de B&acirc;timent qui les bordent, y compris s'il y a une porte ouverte.</li>"+
                                        "</ul>"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]

});