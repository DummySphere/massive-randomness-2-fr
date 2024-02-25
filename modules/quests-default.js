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
                        }
                    }
                }
            ]
        }
    ]

});