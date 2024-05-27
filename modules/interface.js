ModManager.modules.push(function(){

    return [
        {

            id:"interface",
            needs:[ ],
            provides:[ "interface" ],
            label:{
                EN:"Massive Randomness 2 UI configuration"
            },
            content:[
                {
                    type:"interface",
                    data:{
                        settings:[
                            {
                                type:"includeExclude",
                                isMandatory:true,
                                title:{
                                    IT:"Materiali disponibili",
                                    EN:"Available components",
                                    FR:"Mat&eacute;riel disponible"
                                },
                                entries:[
                                    {
                                        code:"A",
                                        isMandatory:true,
                                        isDefault:true,
                                        label:{
                                            IT:"Massive Darkness 2: Hellscape",
                                            EN:"Massive Darkness 2: Hellscape",
                                            FR:"Massive Darkness 2 : Hellscape"
                                        },
                                        description:{
                                            IT:"La scatola base del gioco",
                                            EN:"The game core box",
                                            FR:"La bo&icirc;te de base du jeu"
                                        },
                                        tags:[ "md2-hellscape" ]
                                    },{
                                        code:"C",
                                        label:{
                                            IT:"Massive Darkness 2: Heavenfall",
                                            EN:"Massive Darkness 2: Heavenfall",
                                            FR:"Massive Darkness 2 : Heavenfall"
                                        },
                                        description:{
                                            IT:"4 tessere paradiso",
                                            EN:"4 heaven tiles",
                                            FR:"4 dalles de paradis"
                                        },
                                        tags:[ "md2-heavenfall" ]
                                    },{
                                        code:"G",
                                        label:{
                                            IT:"Massive Darkness 2: Rainbow Crossing",
                                            EN:"Massive Darkness 2: Rainbow Crossing"
                                        },
                                        description:{
                                            IT:"4 tessere arcobaleno",
                                            EN:"4 rainbow tiles"
                                        },
                                        tags:[ "md2-rainbowcrossing" ]
                                    },{
                                        code:"D",
                                        label:{
                                            IT:"Massive Darkness",
                                            EN:"Massive Darkness"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon",
                                            EN:"9 dungeon tiles"
                                        },
                                        tags:[ "md1-base" ]
                                    },{
                                        code:"B",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",
                                            FR:"Massive Darkness : Une Qu&ecirc;te de Cristal et de Lave"
                                        },
                                        description:{
                                            IT:"6 tessere cristalli/lava",
                                            EN:"6 crystal/lava tiles",
                                            FR:"6 dalles de cristal/lave"
                                        },
                                        tags:[ "md2-crystallava-cl" ]
                                    },{
                                        code:"b",
                                        label:{
                                            IT:"Massive Darkness: Una Missione di Lava &amp; Cristalli",
                                            EN:"Massive Darkness: A Quest of Crystal & Lava",
                                            FR:"Massive Darkness"
                                        },
                                        description:{
                                            IT:"9 tessere dungeon che replicano quelle di Massive Darkness 1",
                                            EN:"9 dungeon tiles replicating Massive Darkness 1 tiles",
                                            FR:"9 dalles de donjon identiques à celles de Massive Darkness 1"
                                        },
                                        tags:[ "md2-crystallava-up" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"E",
                                        label:{
                                            IT:"Zombicide: Black Plague",
                                            EN:"Zombicide: Black Plague"
                                        },
                                        description:{
                                            IT:"9 tessere esterne",
                                            EN:"9 outdoor tiles"
                                        },
                                        tags:[ "zc-blackplague" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"F",
                                        label:{
                                            IT:"Zombicide: Green Horde",
                                            EN:"Zombicide: Green Horde"
                                        },
                                        description:{
                                            IT:"9 tessere esterne/villaggio",
                                            EN:"9 outdoor/village tiles"
                                        },
                                        tags:[ "zc-greenhorde" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"f",
                                        label:{
                                            IT:"Zombicide: Friends and Foes",
                                            EN:"Zombicide: Friends and Foes"
                                        },
                                        description:{
                                            IT:"5 tessere esterne/villaggio",
                                            EN:"5 outdoor/village tiles"
                                        },
                                        tags:[ "zc-friendfoes" ]
                                    },{
                                        ifFlag:"zombicide",
                                        code:"e",
                                        label:{
                                            IT:"Zombicide: Wulfsburg",
                                            EN:"Zombicide: Wulfsburg"
                                        },
                                        description:{
                                            IT:"2 tessere torre",
                                            EN:"2 tower tiles"
                                        },
                                        tags:[ "zc-wulfsburg" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Grandezza delle mappa",
                                    EN:"Map size",
                                    FR:"Taille de la carte"
                                },
                                entries:[
                                    {
                                        code:"0",
                                        label:{
                                            IT:"Piccola",
                                            EN:"Small",
                                            FR:"Petite"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in meno rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 fewer tile than suggested.",
                                            FR:"Si possible, la carte de la qu&ecirc;te a 1 dalle de moins que sugg&eacute;r&eacute;."
                                        },
                                        tags:[ "maps-size-small" ]
                                    },{
                                        code:"1",
                                        isDefault:true,
                                        label:{
                                            IT:"Normale",
                                            EN:"Normal",
                                            FR:"Normale"
                                        },
                                        description:{
                                            IT:"La mappa dell'avventura ha il numero suggerito di tessere.",
                                            EN:"The adventure map has the suggested number of tiles.",
                                            FR:"La carte de la qu&ecirc;te a le nombre de dalles sugger&eacute;."
                                        },
                                        tags:[ "maps-size-normal" ]
                                    },{
                                        code:"2",
                                        label:{
                                            IT:"Grande",
                                            EN:"Large",
                                            FR:"Grande"
                                        },
                                        description:{
                                            IT:"Se possibile, la mappa dell'avventura ha 1 tessera in pi&ugrave; rispetto a quelle suggerite.",
                                            EN:"If possible, the quest map has 1 more tile than suggested.",
                                            FR:"Si possible, la carte de la qu&ecirc;te a 1 dalle de plus que sugg&eacute;r&eacute;."
                                        },
                                        tags:[ "maps-size-large" ]
                                    }
                                ]
                            },{
                                type:"includeSelected",
                                isSingleOption:true,
                                isMandatory:true,
                                title:{
                                    IT:"Stile della mappa",
                                    EN:"Map style",
                                    FR:"Style de la carte"
                                },
                                entries:[
                                    {
                                        code:"Z",
                                        isDefault:true,
                                        label:{
                                            IT:"Uniforme",
                                            EN:"Uniform",
                                            FR:"Uniforme"
                                        },
                                        description:{
                                            IT:"Tutte le tessere della mappa mostrano la stessa ambientazione.",
                                            EN:"All tiles on the map show the same setting.",
                                            FR:"Toutes les dalles de la carte ont le m&ecirc;me environnement."
                                        },
                                        tags:[ "maps-default-uniform" ]
                                    },{
                                        code:"z",
                                        label:{
                                            IT:"Interdimensionale",
                                            EN:"Interdimensional",
                                            FR:"Interdimensionnel"
                                        },
                                        description:{
                                            IT:"Le tessere sulla mappa possono mostrare ambientazioni diverse. Aumenta la variet&agrave; di struttura a scapito dell'estetica.",
                                            EN:"The map tiles can show different environments. Increase layout variety to the detriment of aesthetics.",
                                            FR:"Les dalles de la carte peuvent utiliser diff&eacute;rents environnements. Augmente la diversit&eacute; d'agencement au d&eacute;triment de l'esth&eacute;tique."
                                        },
                                        tags:[ "maps-default-notuniform" ]
                                    }
                                ]
                            },{
                                type:"includeExclude",
                                title:{
                                    IT:"Extra",
                                    EN:"Extras",
                                    FR:"Extras"
                                },
                                entries:[
                                    {
                                        code:"X",
                                        label:{
                                            IT:"Sfide",
                                            EN:"Challenges",
                                            FR:"Challenges"
                                        },
                                        description:{
                                            IT:"Aggiunge all'avventura delle sfide extra, che potrai decidere se accettare o meno.",
                                            EN:"It adds extra challenges to the adventure, you can decide whether to accept or not.",
                                            FR:"Ajoute des challenges suppl&eacute;mentaires &agrave; l'aventure, que vous pouvez d&eacute;cider d'accepter ou non.",
                                        },
                                        tags:[ "challenges-default" ]
                                    },{
                                        code:"Y",
                                        label:{
                                            IT:"Modalit&agrave; Esplorazione",
                                            EN:"Dungeon Crawling Mode",
                                            FR:"Mode Exploration"
                                        },
                                        description:{
                                            IT:"Il contenuto delle Camere &egrave; nascosto e viene mostrato quando vengono rivelate.",
                                            EN:"The content of the Chambers is hidden and is shown when they are revealed.",
                                            FR:"Le contenu de chaque Salle est cach&eacute; et devient visible au moment o&ugrave; elle est r&eacute;v&eacute;l&eacute;e."
                                        },
                                        tags:[ "gamemode-dungeoncrawling" ]
                                    },{
                                        code:"W",
                                        label:{
                                            IT:"Escludi avventure non tradotte",
                                            EN:"Exclude untranslated quests",
                                            FR:"Exclure les qu&#xEA;tes non traduites"

                                        },
                                        description:{
                                            IT:"Non vengono generate le avventure non disponibili nella lingua selezionata.",
                                            EN:"Adventures not available in the selected language are not generated.",
                                            FR:"Les aventures non disponibles dans la langue s&#xE9;lectionn&#xE9;e ne sont pas g&#xE9;n&#xE9;r&#xE9;es."
                                        },
                                        languageExcludeTags:{
                                            IT:[ "untranslated-it" ],
                                            EN:[ "untranslated-en" ],
                                            FR:[ "untranslated-fr" ]
                                        }
                                    },{
                                        ifFlag:"zombicide",
                                        isFlag:"zombicideRules",
                                        label:{
                                            IT:"Nascondi regole per Zombicide",
                                            EN:"Hide Zombicide rules"

                                        },
                                        description:{
                                            IT:"Le regole comuni per giocare con le tessere di Zombicide non vengono aggiunte all'avventura.",
                                            EN:"The common rules for playing with Zombicide tiles are not added to the adventure."
                                        },
                                        excludeTags:[ "quest-default-zombicide" ]
                                    },{
                                        ifNotFlag:"zombicide",
                                        isButton:true,
                                        isFlagButton:"zombicide",
                                        label:{
                                            IT:"Usa",
                                            EN:"Use"
                                        },
                                        description:{
                                            IT:"Prova ad usare alcuni componenti della serie Zombicide.",
                                            EN:"Try using some components from the Zombicide series."
                                        },
                                        message:{
                                            IT:"<p>Alcuni capitoli della serie <i>Fantasy Zombicide</i> usano tessere dalla dimensione e struttura simile a quelle usate da Massive Darkness 2. Queste includono nuove ambientazioni, spazi aperti e nuovi ostacoli ma possono risultare troppo facili o difficili da affrontare con le regole di Massive Darkness 2.</p><p>Se disponi di questi materiali e ti senti <i>molto coraggioso</i>, Massive Randomness 2 pu&ograve; usarle per generare le avventure.</p><p>Vuoi provarci?</p>",
                                            EN:"<p>Some chapters in the <i>Fantasy Zombicide</i> series use tiles with a similar size and structure to those used in Massive Darkness 2. These include new environments, open spaces, and new obstacles but may be too easy or difficult to deal with the Massive Darkness 2 rules.</p><p>If you have these materials and are feeling <i>very brave</i>, Massive Randomness 2 can use them to generate adventures.</p><p>Do you want to try it?</p>"
                                        },
                                        buttons:{
                                            yes:{
                                                IT:"Si",
                                                EN:"Yes"
                                            },
                                            no:{
                                                IT:"No",
                                                EN:"No"
                                            }
                                        }
                                    },{
                                        isButton:true,
                                        isInstallerButton:true,
                                        label:{
                                            IT:"Installa",
                                            EN:"Install",
                                            FR:"Installer"
                                        },
                                        description:{
                                            IT:"Permette di usare Massive Randomness 2 offline.",
                                            EN:"Allows you to use Massive Randomness 2 offline.",
                                            FR:"Permet d'utiliser Massive Randomness 2 en mode d&eacute;connect&eacute;."
                                        }
                                    },{
                                        isHidden:true,
                                        isCounterTrigger:true,
                                        tags:[ "quests-mr-ending" ]
                                    }
                                ]
                            }
                        ],
                        supportedLanguages:{
                            EN:"English",
                            IT:"Italiano",
                            FR:"Fran&ccedil;ais"
                        },
                        labels:{                            
                            toolName:{
                                IT:"Massive Randomness 2",
                                EN:"Massive Randomness 2",
                                FR:"Massive Randomness 2"
                            },
                            toolDescription:{
                                IT:"Un generatore casuale di avventure one-shot per Massive Darkness 2",
                                EN:"A Massive Darkness 2 one-shot quest random generator",
                                FR:"Un g&eacute;n&eacute;rateur de qu&ecirc;te one-shot al&eacute;atoire pour Massive Darkness 2"
                            },
                            footer:{
                                IT:"Meglio su Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sorgenti su <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                EN:"Best on Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sources at <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>",
                                FR:"Optimis&eacute; pour Firefox/Chrome - {toolName} - {toolVersion} - &copy; 2024 by KesieV - Sources sur <a target=_blank href='{sourcesAtFull}'>{sourcesAtShort}</a>"
                            },
                            notice:{
                                EN:"Massive Darkness, Zombicide, and all related properties are owned by CMON Global Limited",
                                IT:"Massive Darkness, Zombicide e tutte le relative propriet&agrave; sono marchi registrati CMON Global Limited",
                                FR:"Massive Darkness, Zombicide et tous les produits associ&eacute;s sont des marques d&eacute;pos&eacute;es de CMON Global Limited"
                            },
                            wait:{
                                IT:"Sto preparando l'avventura...",
                                EN:"Please wait...",
                                FR:"Merci de patienter..."
                            },
                            tooltipNewQuest:{
                                IT:"Genera una nuova avventura",
                                EN:"Generate a new quest",
                                FR:"G&eacute;n&eacute;rer une nouvelle qu&ecirc;te"
                            },
                            tooltipSettings:{
                                IT:"Impostazioni",
                                EN:"Settings",
                                FR:"Options"
                            },
                            languageUnavailable:{
                                IT:"Questa avventura non &egrave; disponibile in italiano. Puoi escludere le avventure non tradotte dalle opzioni.",
                                EN:"This adventure is not available in English. You can exclude untranslated adventures from the options.",
                                FR:"Cette aventure n&#x27;est pas disponible en fran&#xE7;ais. Vous pouvez exclure les aventures non traduites des options."
                            },
                            questUnavailable:{
                                IT:"Spiacente. Questa avventura non &egrave; disponibile.",
                                EN:"Sorry. This adventure is not available.",
                                FR:"D&#xE9;sol&#xE9;. Cette aventure n&#x27;est pas disponible."
                            }
                        }
                    }
                }
            ]
        }
    ]

});
