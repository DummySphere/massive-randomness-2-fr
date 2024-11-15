ModManager.modules.push(function(){

    return [
            {

                id:"gamemodes",
                needs:[ ],
                provides:[ "gamemodes" ],
                label:{
                    EN:"Different ways you can play quests"
                },
                content:[
                    
                ]
            },
            {

            id:"gamemode-dungeoncrawling",
            needs:[ ],
            provides:[ "gamemode-dungeoncrawling" ],
            label:{
                EN:"Dungeon Crawling mode - hides the rooms token"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        dungeonCrawlingMode:[
                            {
                                priority:20,
                                type:"rule",
                                classNames:[ "displayOnly" ],
                                name:{
                                    IT:"Modalit&agrave; Esplorazione",
                                    EN:"Dungeon Crawling Mode",
                                    FR:"Mode Exploration"
                                },
                                explanation:{
                                    IT:"Quando una Camera viene rivelata, prima di pescare e risolvere una carta Porta, verificare sulla mappa a schermo se la Camera &egrave; colorata di verde. Se si, selezionarla e aggiungere i nuovi componenti mostrati.",
                                    EN:"When a Chamber is revealed, before drawing and resolving a Door card, check the on-screen map to see if the Chamber appears green-colored. If so, select it and add the new components shown.",
                                    FR:"Quand une Salle est r&eacute;v&eacute;l&eacute;e, avant de piocher et r&eacute;soudre une carte Porte, v&eacute;rifiez sur la carte &agrave; l'&eacute;cran si la Salle appara&icirc;t color&eacute;e en vert. Si c'est le cas, cliquez dessus et ajoutez les nouveaux &eacute;l&eacute;ments apparus."
                                }
                            }
                        ]
                    }
                },
                {
                    type:"gameMode",
                    data:{
                        specialRules:[ "dungeonCrawlingMode" ],
                        mapConfig:{
                            roomsHideTokens:true
                        }
                    }
                }
            ]
        }
    ]

});