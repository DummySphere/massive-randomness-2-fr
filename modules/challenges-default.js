ModManager.modules.push(function(){

    return [
        {

            id:"challenges-default",
            needs:[ "md2-hellscape" ],
            provides:[ "challenges-default" ],
            label:{
                EN:"MD2 challenges default configurations"
            },
            content:[
                {
                    type:"challenges",
                    data:[
                        {
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Abissale",
                                            EN:"Abyssal Armor",
                                            FR:"Armure Abyssale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa:</span> +{symbol.blueDie}",
                                            EN:"Enemies have <span class='phase'>Defense:</span> +{symbol.blueDie}",
                                            FR:"Les Ennemis ont <span class='phase'>D&eacute;fense:</span> +{symbol.blueDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Forza Abissale",
                                            EN:"Abyssal Strength",
                                            FR:"Force Abyssale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Gregari ed i Comandanti hanno +1 Salute.",
                                            EN:"Minions and Leaders do have +1 Health.",
                                            FR:"Les S&eacute;ides et les Chefs ont +1 de Sant&eacute;."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Patto del Sangue",
                                            EN:"Blood Pact",
                                            FR:"Le Pacte du Sang"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +{symbol.fang}",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span> {symbol.mana}: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ],
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache",
                                            EN:"Demon Daggers",
                                            FR:"Dague D&eacute;moniaque"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.yellowDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.yellowDie}",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span>: +{symbol.yellowDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Artigli Glaciali",
                                            EN:"Glacial Claws",
                                            FR:"Griffes Glaciales"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.frostToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.frostToken} (once per round)",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span> {symbol.mana}: +{symbol.frostToken} (une fois par round)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Odio",
                                            EN:"Hatred",
                                            FR:"Haine"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Rilancia tutti i risultati vuoti su {symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: Reroll all blank results on {symbol.blackDie}",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span> {symbol.mana}: Relancez tous les r&eacute;sultats blancs sur {symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Furia Infernale",
                                            EN:"Hell's Fury",
                                            FR:"Fureur Infernale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeRanged} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeRanged} in addition to its type.",
                                            FR:"Les armes des Ennemis comptent comme {symbol.rangeRanged} en plus de leur type."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"L'Ira dell'Inferno",
                                            EN:"Hell's Wrath",
                                            FR:"Col&agrave;re Infernale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le armi nemiche contano come {symbol.rangeMagic} in aggiunta al loro tipo.",
                                            EN:"Enemy weapons count as {symbol.rangeMagic} in addition to its type.",
                                            FR:"Les armes des Ennemis comptent comme {symbol.rangeMagic} en plus de leur type."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Infernali",
                                            EN:"Inferno Blades",
                                            FR:"Lames de l'Enfer"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: +{symbol.fireToken} (una volta per round)",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: +{symbol.fireToken} (once per round)",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span> {symbol.mana}: +{symbol.fireToken} (une fois par round)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa",
                                            EN:"Poisonous Mixture",
                                            FR:"Mixture V&eacute;n&eacute;neuse"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span> {symbol.mana}: +1{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span> {symbol.mana}: +1{symbol.fang}",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span> {symbol.mana}: +1{symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:1,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Nessun Perdono",
                                            EN:"No Forgiveness",
                                            FR:"Sans Merci"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Non utilizzare alcun gettone Latore di Vita. Se un Eroe viene messo KO, la Missione termina con la sconfitta.",
                                            EN:"Do not use any Lifebringer tokens. If one Hero is KO'd, the Mission ends in defeat.",
                                            FR:"N'utilisez pas les pions Porteur de Vie. Si un H&eacute;ros est KO, la Qu&ecirc;te se termine imm&eacute;diatement sur une d&eacute;faite."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante",
                                            EN:"Debilitating Weakness",
                                            FR:"Faiblesse Paralisante"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}.",
                                            FR:"Quand ils attaquent des Ennemis, les H&eacute;ros lancent 1 {symbol.yellowDie} de moins."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Lame Demoniache",
                                            EN:"Demon Blades",
                                            FR:"Lames D&eacute;moniaques"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +1{symbol.sword}",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +1{symbol.sword}",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span>: +1{symbol.sword}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Spade Demoniache",
                                            EN:"Demon Swords",
                                            FR:"Ep&eacute;es D&eacute;moniaques"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1{symbol.blackDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1{symbol.blackDie}",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span>: +1{symbol.blackDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Vento Infernale",
                                            EN:"Hellish Wind",
                                            FR:"Vent Infernal"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco sposta l'eroe difensore di 1 Zona verso questo Nemico.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending hero 1 Zone toward this Enemy.",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span> {symbol.mana}: Apr&egrave;s cette attaque, d&eacute;placez le H&eacute;ros d&eacute;fenseur de 1 Zone vers cet Ennemi."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Pervasiva",
                                            EN:"Pervasive Weakness",
                                            FR:"Faiblesse Invasive"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando attaccano i Nemici, gli Eroi tirano 1 {symbol.yellowDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.yellowDie}.",
                                            FR:"Quand ils attaquent des Ennemis, les H&eacute;ros lancent 1 {symbol.yellowDie} de moins."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Mistura Velenosa 2",
                                            EN:"Poisonous Mixture 2",
                                            FR:"Mixture V&eacute;n&eacute;neuse 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +1 {symbol.scratch}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +1{symbol.scratch}",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span>: +1{symbol.scratch}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Velocit&agrave; Innaturale",
                                            EN:"Unnatural Speed",
                                            FR:"Vitesse Surnaturelle"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando si attivano, I Nemici hanno +1 Movimento.",
                                            EN:"When activating, Enemies have +1 Move action.",
                                            FR:"Quand ils s'activent, les Ennemis ont +1 action de D&eacute;placement."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:2,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Ben Equipaggiati",
                                            EN:"Well Equipped",
                                            FR:"Bien Equipp&eacute;s"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Le Orde sono generate sempre con un oggetto di livello superiore, se possibile.",
                                            EN:"Mobs always Spawn with an item from a higher tier, if possible.",
                                            FR:"Les Bandes apparaissent toujours avec un objet de niveau sup&eacute;rieur, si possible."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Burrasca Abissale",
                                            EN:"Abyssal Gale",
                                            FR:"Temp&ecirc;te Abyssale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span> {symbol.mana}: Dopo questo attacco, sposta l'Eroe difensore di 1 Zona verso la Zona di Partenza degli Eroi.",
                                            EN:"Enemies have <span class='phase'>Attack</span> {symbol.mana}: After this attack, move the defending Hero 1 Zone toward the Hero starting space.",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span> {symbol.mana}: Apr&egrave;s cette attaque, d&eacute;placez le H&eacute;ros d&eacute;fenseur de 1 Zone vers la Zone de D&eacute;part des H&eacute;ros."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Patto del Sangue 2",
                                            EN:"Blood Pact 2",
                                            FR:"Le Pacte du Sang 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.fang}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.fang}",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span>: +{symbol.fang}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Debolezza Debilitante 2",
                                            EN:"Debilitating Weakness 2",
                                            FR:"Faiblesse Paralisante 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando i gli Eroi attaccano i Nemici tirano 1 {symbol.orangeDie} in meno.",
                                            EN:"When attacking Enemies, Heroes roll 1 less {symbol.orangeDie}.",
                                            FR:"Quand ils attaquent des Ennemis, les H&eacute;ros lancent 1 {symbol.orangeDie} de moins."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Daghe Demoniache 2",
                                            EN:"Demon Daggers 2",
                                            FR:"Dague D&eacute;moniaque 2"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: +{symbol.orangeDie}",
                                            EN:"Enemies have <span class='phase'>Combat</span>: +{symbol.orangeDie}",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span>: +{symbol.orangeDie}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Assorbimento Energetico",
                                            EN:"Energy Drain",
                                            FR:"Drain d'Energie"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: L'Eroe attaccante perde 1 {symbol.mana}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: Attacking Hero loses 1 {symbol.mana}",
                                            FR:"Les Ennemis ont <span class='phase'>D&eacute;fense</span>: le H&eacute;ros attaquant perd 1 {symbol.mana}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Armatura Infernale",
                                            EN:"Hellish Armor",
                                            FR:"Armure Infernale"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Difesa</span>: +{symbol.shield}",
                                            EN:"Enemies have <span class='phase'>Defense</span>: +{symbol.shield}",
                                            FR:"Les Ennemis ont <span class='phase'>D&eacute;fense:</span> +{symbol.shield}"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Evocazione delle Ombre",
                                            EN:"Shadow Summons",
                                            FR:"Invocations de l'Ombre"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Attacco</span>: +{symbol.purpleDie} ({symbol.face}: Aggiungi 1 Gregario a questa Orda / Questo Mostro Errante si cura di 5)",
                                            EN:"Enemies have <span class='phase'>Attack</span>: +{symbol.purpleDie} ({symbol.face}: Add 1 Minion to this Mob / This Roaming Monster Heals 5)",
                                            FR:"Les Ennemis ont <span class='phase'>Attaque</span>: +{symbol.purpleDie} ({symbol.face}: Ajoutez 1 S&eacute;ide &agrave; cette Bande / Ce Monstre Errant se soigne de 5)"
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Scivolata",
                                            EN:"Slink",
                                            FR:"Fuyant"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"I Nemici hanno <span class='phase'>Combattimento</span>: Dopo il combattimento muovi questo Nemico di 1 Zona pi&ugrave; lontano dall'Eroe attaccante o difensore, se possibile (una volta per tiro).",
                                            EN:"Enemies have <span class='phase'>Combat</span>: After combat, move this Enemy 1 Zone away from the attacking or defending Hero, if possible (once per roll).",
                                            FR:"Les Ennemis ont <span class='phase'>Combat</span>: Apr&egrave;s un combat, d&eacute;placez cet Ennemi de 1 Zone pour s'&eacute;loigner du H&eacute;ros attaquant ou d&eacute;fenseur, si possible (une fois par Combat)."
                                        }
                                    ]
                                }
                            ]
                        },{
                            intensity:3,
                            tags:[ "default" ],
                            rules:[
                                {
                                    name:[
                                        {
                                            IT:"Crescita Bloccata",
                                            EN:"Stopped Growth",
                                            FR:"Croissance Stopp&eacute;e"
                                        }
                                    ],
                                    explanation:[
                                        {
                                            IT:"Quando sali di livello, non ottieni il beneficio +1 Salute massima o +1 Mana massimo. A meno che un'abilit&agrave; non indichi diversamente, la salute massima e il mana degli eroi sono i loro valori iniziali.",
                                            EN:"When leveling up, do not gain the +1 Max Health or +1 Max Mana benefit. Unless a skill states otherwise, Heroes' Max Health and Mana are their starting values.",
                                            FR:"Lorsqu'un H&eacute;ros gagne un niveau, il n'augmente pas sa valeur maximale de Sant&eacute; ni de Mana. A moins qu'une comp&eacute;tence ne pr&eacute;cise autrement, les maximums de Sant&eacute; et de Mana des H&eacute;ros ont toujours leurs valeurs de d&eacute;part."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});
