

var avatar = "./pics/default.png";

// var iron_man =
// var nodes = {};
// nodes["IronMan"] = {name: "Tony Stark - Iron Man", icon: "./pics/IronMan.jpeg"};


var nodes = {

    // The movies:

    // Phase 1:
    "IronMan_Movie": {name: "Iron Man", icon: "./pics/movies/Iron_Man.jpeg", universe: "mcu" },
    "Hulk_Movie": { name: "The Incredible Hulk", icon: "./pics/movies/TheIncredibleHulk.jpeg", universe: "mcu" },
    "IronMan2_Movie": {name: "Iron Man 2", icon: "./pics/movies/Iron_Man_2.jpeg", universe: "mcu" },
    "Thor_Movie": { name: "Thor", icon: "./pics/movies/Thor.jpeg", universe: "mcu" },
    "CaptainAmerica_Movie": { name: "Captain America: The First Avenger", icon: "./pics/movies/CaptainAmerica.jpeg", universe: "mcu" },
    "Avengers_Movie": { name: "The Avengers", icon: "./pics/movies/Avengers.jpeg", universe: "mcu" },

    // Phase 2:
    "IronMan3_Movie": {name: "Iron Man 3", icon: "./pics/movies/Iron_Man_3.jpeg", universe: "mcu" },
    "Thor2_Movie": { name: "Thor: The Dark World", icon: "./pics/movies/Thor_2.jpeg", universe: "mcu" },
    "CaptainAmerica2_Movie": { name: "Captain America: The Winter Soldier", icon: "./pics/movies/Captain_America_2.jpeg", universe: "mcu" },
    "Guardians_ot_Galaxy_Movie": { name: "Guardians of the Galaxy", icon: "./pics/movies/Guardians_ot_Galaxy.jpeg", universe: "mcu" },
    "Avengers2_Movie": { name: "Avengers: Age of Ultron", icon: "./pics/movies/Avengers_2.jpeg", universe: "mcu" },
    "AntMan_Movie": { name: "Ant-Man", icon: "./pics/movies/AntMan.png", universe: "mcu" },

    // Phase 3:
    "CaptainAmerica3_Movie": { name: "Captain America: Civil War", icon: "./pics/movies/Captain_America_3.jpeg", universe: "mcu" },
    "DoctorStrange_Movie": { name: "Doctor Strange", icon: "./pics/movies/DoctorStrange.jpeg", universe: "mcu" },
    "Guardians_ot_Galaxy2_Movie": { name: "Guardians of the Galaxy Vol. 2", icon: "./pics/movies/Guardians_ot_Galaxy_2.jpeg", universe: "mcu" },
    "SpiderMan_Movie": { name: "Spider-Man: Homecoming", icon: "./pics/movies/Spider_Man.jpeg", universe: "mcu" },
    "Thor3_Movie": { name: "Thor: Ragnarok", icon: "./pics/movies/Thor_3.jpeg", universe: "mcu" },
    "BlackPanther_Movie": { name: "Black Panther", icon: "./pics/movies/Black_Panther.jpeg", universe: "mcu" },
    "Avengers3_Movie": { name: "Avengers: Infinity War", icon: "./pics/movies/Avengers_3.jpeg", universe: "mcu" },
    "AntMan2_Movie": { name: "Ant-Man and the Wasp", icon: "./pics/movies/AntMan_2.jpeg", universe: "mcu" },
    "CaptainMarvel_Movie": { name: "Captain Marvel", icon: "./pics/movies/CaptainMarvel.jpeg", universe: "mcu" },
    "Avengers4_Movie": { name: "Avengers: Endgame", icon: "./pics/movies/Avengers_4.jpeg", universe: "mcu" },
    "SpiderMan2_Movie": { name: "Spider-Man: Far From Home", icon: "./pics/movies/Spider_Man_2.jpeg", universe: "mcu" },

    // Phase 4:
    "WandaVision_Series": { name: "WandaVision", icon: "./pics/series/WandaVision.jpg", universe: "mcu" },
    "FalconWinterSoldier_Series": { name: "The Falcon & The Winter Soldier", icon: "./pics/series/Falcon_and_the_Winter_Soldier.jpeg", universe: "mcu" },
    "Loki_Series": { name: "Loki", icon: "./pics/series/Loki.jpeg", universe: "mcu" },
    "BlackWidow_Movie": { name: "Black Widow", icon: "./pics/movies/Black_Widow.png", universe: "mcu" },
    // "WhatIf_Series": { name: "What if...", icon: "./pics/series/what_if/What_If_S1.jpeg", universe: "mcu" },
    "Shang_Chi_Movie": { name: "Shang-Chi & the Legend of the Ten Rings", icon: "./pics/movies/Shang-Chi_movie.jpeg", universe: "mcu" },
    "Eternals_Movie": { name: "Eternals", icon: "./pics/movies/Eternals.jpeg", universe: "mcu" },
    "Hawkeye_Series": { name: "Hawkeye", icon: "./pics/series/hawkeye.jpeg", universe: "mcu" },
    "Spider_Man_3_Movie": { name: "Spider-Man: No Way Home", icon: "./pics/movies/Spider_Man_3.jpeg", universe: "mcu" },

    "WhatIf_Series_S1E1": { name: "What if Captain Cater was the First Avenger? - S1E1", icon: "./pics/series/what_if/What_If_S1E1.png", universe: "whatif" },
    "WhatIf_Series_S1E2": { name: "What if T'Challa became a Star-Lord? - S1E2", icon: "./pics/series/what_if/What_If_S1E2.png", universe: "whatif" },
    "WhatIf_Series_S1E3": { name: "What if the world lost its Mightiest Heroes? - S1E3", icon: "./pics/series/what_if/What_If_S1E3.png", universe: "whatif" },
    "WhatIf_Series_S1E4": { name: "What if Doctor Strange lost hist heart instead of his hands? - S1E4", icon: "./pics/series/what_if/What_If_S1E4.jpeg", universe: "whatif" },
    "WhatIf_Series_S1E5": { name: "What if Zombies? - S1E5", icon: "./pics/series/what_if/What_If_S1E5.png", universe: "whatif" },
    "WhatIf_Series_S1E6": { name: "What if Killmonger rescued Tony Stark? - S1E6", icon: "./pics/series/what_if/What_If_S1E6.jpeg", universe: "whatif" },
    "WhatIf_Series_S1E7": { name: "What if Thor were an only child? - S1E7", icon: "./pics/series/what_if/What_If_S1E7.png", universe: "whatif" },
    "WhatIf_Series_S1E8": { name: "What if Ultron won? - S1E8", icon: "./pics/series/what_if/What_If_S1E8.jpeg", universe: "whatif" },
    "WhatIf_Series_S1E9": { name: "What if The Watcher broak his oath? - S1E9", icon: "./pics/series/what_if/What_If_S1E9.png", universe: "whatif" },


    // Unreleased:
    "DoctorStrange_2_Movie": { name: "Doctor Strange in the Multiverse of Madness", icon: "./pics/movies/DoctorStrange_2.jpeg", universe: "mcu" },
    "Thor_4_Movie": { name: "Thor: Love & Thunder", icon: "./pics/movies/Thor_4.jpeg", universe: "mcu" },
    "Moonknight_Series": { name: "Moon Knight", icon: "./pics/series/moonknight.jpeg", universe: "mcu" },
    "SheHulk_Series": { name: "She-Hulk", icon: "./pics/series/she-hulk.jpeg", universe: "mcu" },
    "SecretInvasion_Series": { name: "Secret Invasion", icon: "./pics/series/secret_invasion.jpeg", universe: "mcu" },
    "MsMarvel_Series": { name: "Ms. Marvel", icon: "./pics/series/msmarvel.jpeg", universe: "mcu" },

    "IamGroot_Series": { name: "I am Groot", icon: "./pics/series/IamGroot.jpeg", universe: "mcu" },
    "Ironheart_Series": { name: "Ironheart", icon: "./pics/series/ironheart.jpeg", universe: "mcu" },
    "ArmorWars_Series": { name: "Armor Wars", icon: "./pics/series/Armor_Wars.jpeg", universe: "mcu" },

    "Agatha_Series": { name: "Agatha, House of Harkness", icon: "./pics/series/agatha.jpeg", universe: "mcu" },
    "Echo_Series": { name: "Echo", icon: "./pics/series/echo.jpeg", universe: "mcu" },
    "Marvel_Zombies_Series": { name: "Marvel Zombies", icon: "./pics/series/marvel_zombies.jpeg", universe: "mcu" },
    "WhatIf2_Series": { name: "What if... S2", icon: "./pics/series/whatif_S2.jpeg", universe: "mcu" },

    "BlackPanther_2_Movie": { name: "Black Panther: Wakanda Forever", icon: "./pics/movies/Black_Panther_2.jpeg", universe: "mcu" },
    "AntMan_3_Movie": { name: "Ant-Man & The Wasp: Quantumania", icon: "./pics/movies/AntMan_3.jpeg", universe: "mcu" },
    "The_Marvels_Movie": { name: "The Marvels", icon: "./pics/movies/The_Marvels.jpeg", universe: "mcu" },
    // "_Movie": { name: "", icon: "./pics/movies/", universe: "mcu" },
    // "_Movie": { name: "", icon: "./pics/movies/", universe: "mcu" },
    // "_Movie": { name: "", icon: "./pics/movies/", universe: "mcu" },

    // Iron Man characters:
    "IronMan": {name: "Tony Stark - Iron Man", icon: "./pics/iron_man/IronMan.jpeg", universe: "mcu" },
    "WarMachine": {name: "James Rhodes - War Machine", icon: "./pics/iron_man/WarMachine.jpeg", universe: "mcu" },
    "IronMonger": {name: "Obadiah Stane - Iron Monger", icon: "./pics/iron_man/IronMonger.jpeg", universe: "mcu" },
    "PepperPotts": {name: "Pepper Potts", icon: "./pics/iron_man/PepperPotts.jpeg", universe: "mcu" },
    "PhilCoulson": {name: "Agent Phil Coulson", icon: "./pics/shield/PhilCoulson.jpeg", universe: "mcu" },
    "JARVIS": {name: "J.A.R.V.I.S.", icon: "./pics/iron_man/JARVIS.png", universe: "mcu" },
    "HappyHogan": {name: "Happy Hogan", icon: "./pics/iron_man/HappyHogan.jpeg", universe: "mcu" },
    "HowardStark": {name: "Howard Stark", icon: "./pics/iron_man/HowardStark.png", universe: "mcu" },
    "NickFury": {name: "Nick Fury", icon: "./pics/shield/NickFury.jpeg", universe: "mcu" },
    "BlackWidow": {name: "Natasha Romanoff - Black Widow", icon: "./pics/black_widow/BlackWidow.jpeg", universe: "mcu" },
    "JustinHammer": {name: "Justin Hammer", icon: "./pics/iron_man/JustinHammer.jpeg", universe: "mcu" },
    "Whiplash": {name: "Ivan Vanko/Whiplash", icon: "./pics/iron_man/Whiplash.png", universe: "mcu" },
    "AntonVanko": {name: "Anton Vanko", icon: "./pics/iron_man/AntonVanko.png", universe: "mcu" },
    "AldrichKillian": {name: "Aldrich Killian", icon: "./pics/iron_man/AldrichKillian.jpeg", universe: "mcu" },
    "TrevorSlattery": {name: "Trevor Slattery", icon: "./pics/iron_man/TrevorSlattery.jpeg", universe: "mcu" },

    // Hulk Characters
    "Hulk": {name: "Bruce Banner - Hulk", icon: "./pics/hulk/Hulk.jpeg", universe: "mcu" },
    "ThaddeusRoss": {name: "Thaddeus Ross", icon: "./pics/hulk/ThaddeusRoss.png", universe: "mcu" },
    "Abomination": {name: "Blonsky - Abomination", icon: "./pics/hulk/Abomination.jpeg", universe: "mcu" },

    // Thor Characters
    "Thor": {name: "Thor", icon: "./pics/thor/Thor.jpeg", universe: "mcu" },
    "JaneFoster": {name: "Jane Foster", icon: "./pics/thor/JaneFoster.jpeg", universe: "mcu" },
    "Loki": {name: "Loki", icon: "./pics/thor/Loki.jpeg", universe: "mcu" },
    "Odin": {name: "Odin", icon: "./pics/thor/Odin.jpeg", universe: "mcu" },
    "ErikSelvig": {name: "Erik Selvig", icon: "./pics/thor/ErikSelvig.jpeg", universe: "mcu" },
    "DarcyLewis": {name: "Darcy Lewis", icon: "./pics/thor/DarcyLewis.jpeg", universe: "mcu" },
    "Heimdall": {name: "Heimdall", icon: "./pics/thor/Heimdall.jpeg", universe: "mcu" },
    "Volstagg": {name: "Volstagg", icon: "./pics/thor/Volstagg.jpeg", universe: "mcu" },
    "Hogun": {name: "Hogun", icon: "./pics/thor/Hogun.jpeg", universe: "mcu" },
    "Fandral": {name: "Fandral", icon: "./pics/thor/Fandral.jpeg", universe: "mcu" },
    "Sif": {name: "Sif", icon: "./pics/thor/Sif.jpeg", universe: "mcu" },
    "Frigga": {name: "Frigga", icon: "./pics/thor/Frigga.png", universe: "mcu" },
    "Laufey": {name: "Laufey", icon: "./pics/thor/Laufey.jpeg", universe: "mcu" },
    "JasperSitwell": {name: "Jasper Sitwell", icon: "./pics/captain_america/JasperSitwell.jpeg", universe: "mcu" },
    "Hawkeye": {name: "Clint Barton - Hawkeye", icon: "./pics/hawkeye/Hawkeye.jpeg", universe: "mcu" },
    "Malekith": {name: "Malekith", icon: "./pics/thor/Malekith.jpeg", universe: "mcu" },

    // Captain America Characters
    "CaptainAmerica": {name: "Steve Rogers - Captain America", icon: "./pics/captain_america/CaptainAmerica.jpeg", universe: "mcu" },
    "PeggyCarter": {name: "Peggy Carter", icon: "./pics/captain_america/PeggyCarter.jpeg", universe: "mcu" },
    "WinterSoldier": {name: "Bucky Barnes - Winter Soldier", icon: "./pics/captain_america/WinterSoldier.png", universe: "mcu" },
    "ChesterPhillips": {name: "Chester Phillips", icon: "./pics/captain_america/ChesterPhillips.png", universe: "mcu" },
    "RedSkull": {name: "Red Skull", icon: "./pics/captain_america/RedSkull.png", universe: "mcu" },
    "AbrahamErskine": {name: "Abraham Erskine", icon: "./pics/captain_america/AbrahamErskine.png", universe: "mcu" },
    "ArnimZola": {name: "Arnim Zola", icon: "./pics/captain_america/ArnimZola.png", universe: "mcu" },
    "DumDumDugan": {name: "Dum Dum Dugan", icon: "./pics/captain_america/DumDumDugan.png", universe: "mcu" },

    "MariaHill": {name: "Maria Hill", icon: "./pics/shield/MariaHill.jpeg", universe: "mcu" },

    "AlexanderPierce": {name: "Alexander Pierce", icon: "./pics/captain_america/AlexanderPierce.png", universe: "mcu" },
    "Falcon": {name: "Sam Wilson - Falcon", icon: "./pics/captain_america/Falcon.png", universe: "mcu" },
    "Crossbones": {name: "Brock Rumlow - Crossbones", icon: "./pics/captain_america/Crossbones.jpeg", universe: "mcu" },
    "SharonCarter": {name: "Sharon Carter", icon: "./pics/falcon_winter/Sharon_Carter.png", universe: "mcu" },
    "JackRollins": {name: "Jack Rollins", icon: "./pics/captain_america/JackRollins.png", universe: "mcu" },
    "Hawley": {name: "Hawley", icon: "./pics/captain_america/Hawley.png", universe: "mcu" },
    "Stern": {name: "Stern", icon: "./pics/iron_man/Stern.png", universe: "mcu" },
    "GeorgesBatroc": {name: "Georges Batroc", icon: "./pics/captain_america/GeorgesBatroc.jpeg", universe: "mcu" },
    "WolfgangVonStrucker": {name: "Wolfgang von Strucker", icon: "./pics/captain_america/WolfgangVonStrucker.jpeg", universe: "mcu" },
    "Zemo": {name: "Helmut Zemo", icon: "./pics/falcon_winter/Baron_Zemo.png", universe: "mcu" },
    "MariaStarke": {name: "MariaStarke", icon: "./pics/iron_man/MariaStarke.png", universe: "mcu" },
    "EverettRoss": {name: "Everett Ross", icon: "./pics/captain_america/EverettRoss.jpeg", universe: "mcu" },
    "Quicksilver": {name: "Pietro Maximoff - Quicksilver", icon: "./pics/Quicksilver.jpeg", universe: "mcu" },
    "ScarletWitch": {name: "Wanda Maximoff - Scarlet Witch", icon: "./pics/ScarletWitch.jpeg", universe: "mcu" },


    "TheOther": {name: "The Other", icon: "./pics/thor/TheOther.jpeg", universe: "mcu" },
    "Thanos": {name: "Thanos", icon: "./pics/guardians_ot_galaxy/Thanos.png", universe: "mcu" },

    // Guardians of the Galaxy characters
    "StarLord": {name: "Peter Quill - Star-Lord", icon: "./pics/guardians_ot_galaxy/StarLord.jpeg", universe: "mcu" },
    "Gamora": {name: "Gamora", icon: "./pics/guardians_ot_galaxy/Gamora.jpeg", universe: "mcu" },
    "Drax": {name: "Drax, the Destroyer", icon: "./pics/guardians_ot_galaxy/Drax.jpeg", universe: "mcu" },
    "Groot": {name: "Groot", icon: "./pics/guardians_ot_galaxy/Groot.jpeg", universe: "mcu" },
    "RocketRaccoon": {name: "Rocket Raccoon", icon: "./pics/guardians_ot_galaxy/RocketRacoon.jpeg", universe: "mcu" },
    "TivanTheCollector": {name: "Tivan, the Collector", icon: "./pics/guardians_ot_galaxy/TivanTheCollector.jpeg", universe: "mcu" },
    "Carina": {name: "Carina", icon: "./pics/guardians_ot_galaxy/Carina.png", universe: "mcu" },
    "RonanTheAccuser": {name: "Ronan, the Accuser", icon: "./pics/guardians_ot_galaxy/RonanTheAccuser.jpeg", universe: "mcu" },
    "YonduUdonta": {name: "Yondu Udonta", icon: "./pics/guardians_ot_galaxy/YonduUdonta.png", universe: "mcu" },
    "Nebula": {name: "Nebula", icon: "./pics/guardians_ot_galaxy/Nebula.jpeg", universe: "mcu" },
    "KorathThePursuer": {name: "Korath the Pursuer", icon: "./pics/guardians_ot_galaxy/KorathThePursuer.jpeg", universe: "mcu" },
    "MeredithQuill": {name: "Meredith Quill", icon: "./pics/guardians_ot_galaxy/MeredithQuill.png", universe: "mcu" },
    "KraglinObfonteri": {name: "Kraglin Obfonteri", icon: "./pics/guardians_ot_galaxy/KraglinObfonteri.jpeg", universe: "mcu" },
    "MrQuill": {name: "Peter Quill's Grandfather", icon: "./pics/guardians_ot_galaxy/MrQuill.png", universe: "mcu" },
    "Vorker": {name: "Vorker", icon: "./pics/guardians_ot_galaxy/Vorker.jpeg", universe: "mcu" },
    "HowardTheDuck": {name: "Howard the Duck", icon: "./pics/guardians_ot_galaxy/HowardTheDuck.png", universe: "mcu" },

    "LauraBarton": {name: "Laura Barton", icon: "./pics/hawkeye/LauraBarton.png", universe: "mcu" },
    "Ultron": {name: "Ultron", icon: "./pics/Ultron.jpeg", universe: "mcu" },
    "UlyssesKlaue": {name: "Ulysses Klaue", icon: "./pics/black_panther/UlyssesKlaue.jpeg", universe: "mcu" },
    "CooperBarton": {name: "Cooper Barton", icon: "./pics/hawkeye/CooperBarton.png", universe: "mcu" },
    "LilaBarton": {name: "Lila Barton", icon: "./pics/hawkeye/LilaBarton.jpeg", universe: "mcu" },
    "CameronKlein": {name: "Cameron Klein", icon: "./pics/captain_america/CameronKlein.png", universe: "mcu" },
    "FRIDAY": {name: "F.R.I.D.A.Y.", icon: "./pics/iron_man/FRIDAY.png", universe: "mcu" },
    "NathanielBarton": {name: "Nathaniel Barton", icon: "./pics/hawkeye/NathanielBarton.png", universe: "mcu" },
    "Vision": {name: "Vision", icon: "./pics/Vision.jpeg", universe: "mcu" },

    "AntMan": {name: "Scott Lang - Ant-Man", icon: "./pics/ant_man/AntMan.jpeg", universe: "mcu" },
    "HankPym": {name: "Doctor Hank Pym", icon: "./pics/ant_man/HankPym.jpeg", universe: "mcu" },
    "TheWasp": {name: "Hope van Dyne, The Wasp", icon: "./pics/ant_man/TheWasp.jpeg", universe: "mcu" },
    "YellowJacket": {name: "Darren Cross - Yellow Jacket", icon: "./pics/ant_man/YellowJacket.jpeg", universe: "mcu" },
    "JimPaxton": {name: "Jim Paxton", icon: "./pics/ant_man/JimPaxton.png", universe: "mcu" },
    "Luis": {name: "Luis", icon: "./pics/ant_man/Luis.jpeg", universe: "mcu" },
    "Dave": {name: "Dave", icon: "./pics/ant_man/Dave.jpeg", universe: "mcu" },
    "MaggieLang": {name: "Maggie Lang", icon: "./pics/ant_man/MaggieLang.png", universe: "mcu" },
    "CassieLang": {name: "Cassie Lang", icon: "./pics/ant_man/CassieLang.png", universe: "mcu" },
    "Kurt": {name: "Kurt", icon: "./pics/ant_man/Kurt.jpeg", universe: "mcu" },
    "JanetVanDyne": {name: "Janet van Dyne/Wasp", icon: "./pics/ant_man/JanetVanDyne.jpeg", universe: "mcu" },

    // Doctor Strange Characters
    "DoctorStrange": {name: "Stephen Strange - Doctor Strange", icon: "./pics/doctor_strange/DoctorStrange.jpeg", universe: "mcu" },
    "Dormammu": {name: "Dormammu", icon: "./pics/doctor_strange/Dormammu.png", universe: "mcu" },
    "KarlMordo": {name: "Karl Mordo", icon: "./pics/doctor_strange/KarlMordo.jpeg", universe: "mcu" },
    "ChristinePalmer": {name: "Christine Palmer", icon: "./pics/doctor_strange/ChristinePalmer.png", universe: "mcu" },
    "Wong": {name: "Wong", icon: "./pics/doctor_strange/Wong.jpeg", universe: "mcu" },
    "Kaecilius": {name: "Kaecilius", icon: "./pics/doctor_strange/Kaecilius.png", universe: "mcu" },
    "AncientOne": {name: "Ancient One", icon: "./pics/doctor_strange/AncientOne.png", universe: "mcu" },

    // Guardians of the Galaxy 2
    "Mantis": {name: "Mantis", icon: "./pics/guardians_ot_galaxy/Mantis.jpeg", universe: "mcu" },
    "Ego": {name: "Ego", icon: "./pics/guardians_ot_galaxy/Ego.png", universe: "mcu" },
    "Ayesha": {name: "Ayesha", icon: "./pics/guardians_ot_galaxy/Ayesha.png", universe: "mcu" },
    "Zylak": {name: "Zylak", icon: "./pics/guardians_ot_galaxy/Zylak.png", universe: "mcu" },
    "Taserface": {name: "Taserface", icon: "./pics/guardians_ot_galaxy/Taserface.jpg", universe: "mcu" },
    "Gef": {name: "Gef", icon: "./pics/guardians_ot_galaxy/Gef.png", universe: "mcu" },
    "Tullk": {name: "Tullk", icon: "./pics/guardians_ot_galaxy/Tullk.png", universe: "mcu" },
    "Retch": {name: "Retch", icon: "./pics/guardians_ot_galaxy/Retch.png", universe: "mcu" },
    "StakarOgord": {name: "Stakar Ogord", icon: "./pics/guardians_ot_galaxy/StakarOgord.jpeg", universe: "mcu" },
    "Charlie27": {name: "Charlie-27", icon: "./pics/guardians_ot_galaxy/Charlie27.jpeg", universe: "mcu" },
    "AletaOgord": {name: "Aleta Ogord", icon: "./pics/guardians_ot_galaxy/AletaOgord.jpeg", universe: "mcu" },
    "Martinex": {name: "Martinex", icon: "./pics/guardians_ot_galaxy/Martinex.jpeg", universe: "mcu" },
    "Krugarr": {name: "Krugarr", icon: "./pics/guardians_ot_galaxy/Krugarr.jpeg", universe: "mcu" },
    "Grandmaster": {name: "Grandmaster", icon: "./pics/thor/Grandmaster.jpeg", universe: "mcu" },

    // Thor Ragnarok
    "Executioner": {name: "Skurge - Executioner", icon: "./pics/thor/Executioner.png", universe: "mcu" },
    "Topaz": {name: "Topaz", icon: "./pics/thor/Topaz.jpeg", universe: "mcu" },
    "Hela": {name: "Hela", icon: "./pics/thor/Hela.jpeg", universe: "mcu" },
    "Korg": {name: "Korg", icon: "./pics/thor/Korg.jpeg", universe: "mcu" },
    "Miek": {name: "Miek", icon: "./pics/thor/Miek.png", universe: "mcu" },
    "Surtur": {name: "Surtur", icon: "./pics/thor/Surtur.png", universe: "mcu" },
    "Valkyrie": {name: "Valkyrie", icon: "./pics/thor/Valkyrie.jpeg", universe: "mcu" },


    // Spider-Man characters
    "SpiderMan": {name: "Peter Parker - Spider-Man", icon: "./pics/spiderman/SpiderMan.jpeg", universe: "mcu" },

    "BradDavis": {name: "Brad Davis", icon: "./pics/spiderman/Brad_Davis.png", universe: "mcu" },
    "MayParker": {name: "May Parker", icon: "./pics/spiderman/MayParker.png", universe: "mcu" },
    "Vulture": {name: "Adrian Toomes - Vulture", icon: "./pics/spiderman/Vulture.jpeg", universe: "mcu" },
    "MichelleJones": {name: "Michelle Jones", icon: "./pics/spiderman/MichelleJones.jpeg", universe: "mcu" },
    "Prowler": {name: "Aaron Davis - Prowler", icon: "./pics/spiderman/Prowler.png", universe: "mcu" },
    "RogerHarrington": {name: "Roger Harrington", icon: "./pics/spiderman/RogerHarrington.png", universe: "mcu" },
    "Tinkerer": {name: "Phineas Mason - Tinkerer", icon: "./pics/spiderman/Tinkerer.jpeg", universe: "mcu" },
    "NedLeeds": {name: "Ned Leeds", icon: "./pics/spiderman/NedLeeds.jpeg", universe: "mcu" },
    "LizToomes": {name: "Liz Toomes", icon: "./pics/spiderman/LizToomes.png", universe: "mcu" },
    "FlashThompson": {name: "Flash Thompson", icon: "./pics/spiderman/FlashThompson.png", universe: "mcu" },
    "Shocker": {name: "Herman Schultz - Shocker", icon: "./pics/spiderman/Shocker.jpeg", universe: "mcu" },
    "CindyMoon": {name: "Cindy Moon", icon: "./pics/spiderman/CindyMoon.png", universe: "mcu" },
    "AndreWilson": {name: "Andre Wilson", icon: "./pics/spiderman/AndreWilson.png", universe: "mcu" },
    "BettyBrant": {name: "Betty Brant", icon: "./pics/spiderman/BettyBrant.png", universe: "mcu" },
    "CharlesMurphy": {name: "Charles Murphy", icon: "./pics/spiderman/CharlesMurphy.png", universe: "mcu" },
    "Delmar": {name: "Delmar", icon: "./pics/spiderman/Delmar.png", universe: "mcu" },
    "JasonIonello": {name: "Jason Ionello", icon: "./pics/spiderman/JasonIonello.png", universe: "mcu" },
    "SallyAvrill": {name: "Sally Avrill", icon: "./pics/spiderman/SallyAvrill.png", universe: "mcu" },
    "TinyMcKeever": {name: "Tiny McKeever", icon: "./pics/spiderman/TinyMcKeever.png", universe: "mcu" },
    "Mysterio": {name: "Quentin Beck - Mysterio", icon: "./pics/spiderman/Mysterio.png", universe: "mcu" },
    "BradDavis": {name: "Brad Davis", icon: "./pics/spiderman/Brad_Davis.png", universe: "mcu" },
    "JuliusDell": {name: "Julius Dell", icon: "./pics/spiderman/Julius_Dell.png", universe: "mcu" },
    "PatKiernan": { source: "Pat Kiernan", icon: "./pics/spiderman/Patkiernan.jpeg", universe: "mcu" },
    "JJonahJameson": { source: "J. Jonah Jameson", icon: "./pics/spiderman/J._Jonah_Jameson.png", universe: "mcu" },
    "WilliamGinterRiva": { source: "William Ginter Riva", icon: "./pics/spiderman/William_Ginter_Riva.png", universe: "mcu" },
    "Seamstress": { source: "Seamstress", icon: "./pics/spiderman/Seamstress.png", universe: "mcu" },
    "Soren": { source: "Soren", icon: "./pics/spiderman/Soren.png", universe: "mcu" },





    "BlackPanther": {name: "T'Challa - Black Panther", icon: "./pics/black_panther/BlackPanther.jpeg", universe: "mcu" },
    "Killmonger": {name: "N'Jadaka - Erik Stevens - Killmonger", icon: "./pics/black_panther/Killmonger.jpeg", universe: "mcu" },
    "Nakia": {name: "Nakia", icon: "./pics/black_panther/Nakia.jpeg", universe: "mcu" },
    "Okoye": {name: "Okoye", icon: "./pics/black_panther/Okoye.jpeg", universe: "mcu" },
    "WKabi": {name: "W'Kabi", icon: "./pics/black_panther/WKabi.jpeg", universe: "mcu" },
    "Shuri": {name: "Shuri", icon: "./pics/black_panther/Shuri.jpeg", universe: "mcu" },
    "MBaku": {name: "M'Baku", icon: "./pics/black_panther/MBaku.jpeg", universe: "mcu" },
    "Ramonda": {name: "Ramonda", icon: "./pics/black_panther/Ramonda.jpeg", universe: "mcu" },
    "Zuri": {name: "Zuri", icon: "./pics/black_panther/Zuri.jpeg", universe: "mcu" },
    "NJobu": {name: "N'Jobu", icon: "./pics/black_panther/NJobu.png", universe: "mcu" },
    "Ayo": {name: "Ayo", icon: "./pics/falcon_winter/Ayo.jpeg", universe: "mcu" },
    "TChaka": {name: "T'Chaka", icon: "./pics/black_panther/TChaka.png", universe: "mcu" },
    "Yama": {name: "Yama", icon: "./pics/black_panther/Yama.png", universe: "mcu" },
    "Nomble": {name: "Nomble", icon: "./pics/black_panther/Nomble.png", universe: "mcu" },


    "Eitri": {name: "Eitri", icon: "./pics/avengers/Eitri.png", universe: "mcu" },
    "EbonyMaw": {name: "Ebony Maw", icon: "./pics/avengers/EbonyMaw.jpeg", universe: "mcu" },
    "ProximaMidnight": {name: "Proxima Midnight", icon: "./pics/avengers/ProximaMidnight.jpeg", universe: "mcu" },
    "CorvusGlaive": {name: "Corvus Glaive", icon: "./pics/avengers/CorvusGlaive.png", universe: "mcu" },
    "CullObsidian": {name: "Cull Obsidian", icon: "./pics/avengers/CullObsidian.jpg", universe: "mcu" },
    // "": {name: "", icon: "./pics/avengers/.png", universe: "mcu" },


    "BillFoster": {name: "Bill Foster", icon: "./pics/ant_man/BillFoster.png", universe: "mcu" },
    "Ghost": {name: "Ava Starr - Ghost", icon: "./pics/ant_man/Ghost.jpg", universe: "mcu" },
    "JimmyWoo": {name: "Agent Jimmy Woo", icon: "./pics/ant_man/JimmyWoo.jpeg", universe: "mcu" },
    "SonnyBurch": {name: "Sonny Burch", icon: "./pics/ant_man/SonnyBurch.jpeg", universe: "mcu" },


    "CaptainMarvel": {name: "Carol Danvers - Captain Marvel", icon: "./pics/captain_marvel/CaptainMarvel.jpeg", universe: "mcu" },
    "Talos": {name: "Talos / Director Keller", icon: "./pics/captain_marvel/Talos.jpeg", universe: "mcu" },
    "MariaRambeau": {name: "Maria Rambeau", icon: "./pics/captain_marvel/MariaRambeau.jpeg", universe: "mcu" },
    "MonicaRambeau": {name: "Monica Rambeau", icon: "./pics/captain_marvel/MonicaRambeau.jpeg", universe: "mcu" },
    "AttLass": {name: "Att-Lass", icon: "./pics/captain_marvel/AttLass.jpeg", universe: "mcu" },
    "YonRogg": {name: "Yon-Rogg", icon: "./pics/captain_marvel/YonRogg.jpeg", universe: "mcu" },
    "MarVell": {name: "Mar-Vell", icon: "./pics/captain_marvel/MarVell.jpeg", universe: "mcu" },
    "SupremeIntelligence": {name: "Supreme Intelligence", icon: "./pics/captain_marvel/SupremeIntelligence.png", universe: "mcu" },
    "MinnErva": {name: "Minn-Erva", icon: "./pics/captain_marvel/MinnErva.jpeg", universe: "mcu" },
    "BronChar": {name: "Bron-Char", icon: "./pics/captain_marvel/BronChar.jpeg", universe: "mcu" },
    "Soren": {name: "Soren", icon: "./pics/captain_marvel/Soren.png", universe: "mcu" },
    "Goose": {name: "Goose", icon: "./pics/captain_marvel/Goose.jpeg", universe: "mcu" },

    "MorganStark": {name: "MorganStark", icon: "./pics/avengers/MorganStark.png", universe: "mcu" },
    "EdwinJarvis": {name: "Edwin Jarvis", icon: "./pics/avengers/EdwinJarvis.png", universe: "mcu" },


    // WandaVision
    "Agnes": {name: "Agatha Harkness \/ Agnes", icon: "./pics/wandavision/Agatha_Harkness.jpeg", universe: "mcu" },
    "TylerHayward": {name: "Tyler Hayward", icon: "./pics/wandavision/Tyler_Hayward.png", universe: "mcu" },


    // Falcon & The Winter Soldier
    "US_Agent": {name: "John Walker - U.S. Agent", icon: "./pics/falcon_winter/US_Agent.jpeg", universe: "mcu" },
    "Karli": {name: "Karli Morgenthau", icon: "./pics/falcon_winter/Karli.jpeg", universe: "mcu" },
    "Joaquin_Torres": {name: "Joaquin Torres", icon: "./pics/falcon_winter/Joaquin_Torres.png", universe: "mcu" },
    "Battlestar": {name: "Lemar Hoskins - Battlestar", icon: "./pics/falcon_winter/Battlestar.png", universe: "mcu" },
    "Isaiah_Bradley": {name: "Isaiah Bradley", icon: "./pics/falcon_winter/Isaiah_Bradley.png", universe: "mcu" },

    // Loki
    "Mobius": {name: "Mobius", icon: "./pics/loki/Mobius_M._Mobius.png", universe: "mcu" },
    "PresidentLoki": {name: "President Loki", icon: "./pics/loki/President_Loki.jpeg", universe: "mcu" },
    "SylvieLaufeydottir": {name: "Sylvie Laufeydottir", icon: "./pics/loki/Sylvie.png", universe: "mcu" },
    "RavonnaRenslayer": {name: "Ravonna Renslayer", icon: "./pics/loki/Judge_Renslayer.png", universe: "mcu" },
    "HunterB-15": {name: "Hunter B-15", icon: "./pics/loki/Hunter_B15.png", universe: "mcu" },
    "HunterK-5E": {name: "Casey - Hunter K-5E", icon: "./pics/loki/Casey.png", universe: "mcu" },
    "HunterC-20": {name: "Hunter C-20", icon: "./pics/loki/Hunter_C-20.jpeg", universe: "mcu" },
    "KidLoki": {name: "Kid Loki", icon: "./pics/loki/Kid_Loki.jpeg", universe: "mcu" },
    "BoastfulLoki": {name: "Boastful Loki", icon: "./pics/loki/Boastful_Loki.jpeg", universe: "mcu" },
    "MissMinutes": {name: "Miss Minutes", icon: "./pics/loki/Miss_Minutes.png", universe: "mcu" },
    "ClassicLoki": {name: "ClassicLoki", icon: "./pics/loki/Classic_Loki.jpeg", universe: "mcu" },
    "HunterD-90": {name: "HunterD-90", icon: "./pics/loki/Hunter_D-90.png", universe: "mcu" },
    "Kang": {name: "Kang", icon: "./pics/loki/Kang.jpeg", universe: "mcu" },


    // Black Widow
    "YelenaBelova": {name: "Yelena Belova", icon: "./pics/black_widow/YelenaBelova.jpeg", universe: "mcu" },
    "MelinaVostokoff": {name: "Melina Vostokoff", icon: "./pics/black_widow/MelinaVostokoff.jpeg", universe: "mcu" },
    "RedGuardian": {name: "Alexei Shostakov - Red Guardian", icon: "./pics/black_widow/RedGuardian.jpeg", universe: "mcu" },
    "Dreykov": {name: "Dreykov", icon: "./pics/black_widow/Dreykov.png", universe: "mcu" },
    "Rick_Mason": {name: "Rick Mason", icon: "./pics/black_widow/Rick_Mason.jpeg", universe: "mcu" },
    "Task_Master": {name: "Task Master", icon: "./pics/black_widow/Task_Master.jpeg", universe: "mcu" },
    // "Lerato": {name: "Lerato", icon: "./pics/black_widow/Lerato.png", universe: "mcu" },
    // "Oksana": {name: "Oksana", icon: "./pics/black_widow/Oksana.png", universe: "mcu" },
    "Val": {name: "Contessa Valentina Allegra de Fontaine", icon: "./pics/black_widow/Val.png", universe: "mcu" },



    // What If
    //     Starring Cast
    "Watcher": {name: "Uatu, The Watcher", icon: "./pics/series/what_if/Uatu_the_Watcher.png", universe: "whatif" },
    "Captain_Carter": {name: "Peggy Carter - Captain Carter", icon: "./pics/series/what_if/Captain_Carter.jpeg", universe: "whatif" },
    "Bucky_Barns_WI": {name: "Bucky_Barns", icon: "./pics/series/what_if/Bucky_Barnes_WI.png", universe: "whatif" },
    "Hydra_Stomper": {name: "Steve Rogers - Hydra Stomper", icon: "./pics/series/what_if/HYDRA_Stomper.jpeg", universe: "whatif" },
    "TChalla_Starlord": {name: "T'Challa - Star-Lord", icon: "./pics/series/what_if/TChalla_Star-Lord.png", universe: "whatif" },
    "Thanos_WI": {name: "Thanos", icon: "./pics/series/what_if/Thanos_WI.png", universe: "whatif" },
    "Yondu_Udonta_WI": {name: "Yondu Udonta", icon: "./pics/series/what_if/Yondu_Udonta_WI.png", universe: "whatif" },
    "Zola_WI": {name: "Arnim Zola", icon: "./pics/series/what_if/Zola_WI.png", universe: "whatif" },
    "Thanos_WI": {name: "Thanos", icon: "./pics/series/what_if/Thanos_WI.png", universe: "whatif" },
    "Zombie_Thanos": {name: "Zombie Thanos", icon: "./pics/series/what_if/Zombie_Thanos.png", universe: "whatif" },
    "Strange_Supreme": {name: "Strange Supreme", icon: "./pics/doctor_strange/Strange_Supreme.png", universe: "whatif" },
    "Zombie_Wanda": {name: "Zombie Wanda", icon: "./pics/doctor_strange/Zombie_Wanda.png", universe: "whatif" },
    "Zombie_Strange": {name: "Zombie Strange", icon: "./pics/doctor_strange/Zombie_Strange.png", universe: "whatif" },
    "Killmonger_WI": {name: "Killmonger", icon: "./pics/series/what_if/Killmonger_WI.png", universe: "whatif" },
    "Party_Thor": {name: "Party_Thor", icon: "./pics/series/what_if/Party_Thor.png", universe: "whatif" },
    "UltraVision": {name: "UltraVision", icon: "./pics/series/what_if/UltraVision.png", universe: "whatif" },
    "Hawkeye_WI": {name: "Hawkeye", icon: "./pics/series/what_if/Hawkeye_WI.png", universe: "whatif" },
    "Captain_Marvel_WI": {name: "Captain Marvel", icon: "./pics/series/what_if/Captain_Marvel_WI.png", universe: "whatif" },
    "Black_Widow_WI": {name: "Apocalyptic Black Widow", icon: "./pics/series/what_if/Black_Widow_WI.png", universe: "whatif" },
    "Gamora_WI": {name: "Gamora", icon: "./pics/series/what_if/Gamora_WI.png", universe: "whatif" },


    // Shang-Chi
    "ShangChi": {name: "Shang-Chi - Shaun", icon: "./pics/shang_chi/Shang-Chi.jpeg", universe: "mcu" },
    "KatyChen": {name: "Katy Chen", icon: "./pics/shang_chi/Katy.jpeg", universe: "mcu" },
    "Xialing": {name: "Xialing", icon: "./pics/shang_chi/Xialing.jpeg", universe: "mcu" },
    "YingLi": {name: "Ying Li", icon: "./pics/shang_chi/Jiang_Li.jpeg", universe: "mcu" },
    "RazorFist": {name: "Razor Fist", icon: "./pics/shang_chi/Razor_Fist.jpeg", universe: "mcu" },
    "YingNan": {name: "Ying Nan", icon: "./pics/shang_chi/Jiang_Nan.jpeg", universe: "mcu" },
    "Mandarin": {name: "Wenwu - Mandarin", icon: "./pics/shang_chi/Wenwu.jpeg", universe: "mcu" },
    "JonJon": {name: "Jon Jon", icon: "./pics/shang_chi/Jon_Jon.png", universe: "mcu" },
    "DeathDealer": {name: "Death Dealer", icon: "./pics/shang_chi/Death_Dealer.jpeg", universe: "mcu" },


    // Eternals
    "Sersi": {name: "Sersi", icon: "./pics/eternals/Sersi.jpeg", universe: "mcu" },
    "Ikaris": {name: "Ikaris", icon: "./pics/eternals/Ikaris.jpeg", universe: "mcu" },
    "Kingo": {name: "Kingo", icon: "./pics/eternals/Kingo.jpeg", universe: "mcu" },
    "Sprite": {name: "Sprite", icon: "./pics/eternals/Sprite.jpeg", universe: "mcu" },
    "Phastos": {name: "Phastos", icon: "./pics/eternals/Phastos.jpeg", universe: "mcu" },
    "Makkari": {name: "Makkari", icon: "./pics/eternals/Makkari.jpeg", universe: "mcu" },
    "Druig": {name: "Druig", icon: "./pics/eternals/Druig.jpeg", universe: "mcu" },
    "Gilgamesh": {name: "Gilgamesh", icon: "./pics/eternals/Gilgamesh.jpeg", universe: "mcu" },
    "Black_Knight": {name: "Dane Whitman - Black Knight", icon: "./pics/eternals/Black_Knight.png", universe: "mcu" },
    "Ajak": {name: "Ajak", icon: "./pics/eternals/Ajak.jpeg", universe: "mcu" },
    "Thena": {name: "Thena", icon: "./pics/eternals/Thena.jpeg", universe: "mcu" },
    "Karun": {name: "Karun", icon: "./pics/eternals/Karun.png", universe: "mcu" },
    "General_Kro": {name: "General Kro", icon: "./pics/eternals/Kro.png", universe: "mcu" },

    // Spider-Man 3: No way home

    // Hawkeye
    "Kate_Bishop": {name: "Kate Bishop", icon: "./pics/hawkeye/KateBishop.jpeg", universe: "mcu" },
    "Eleanor_Bishop": {name: "Eleanor Bishop", icon: "./pics/hawkeye/Eleanor_Bishop.png", universe: "mcu" },
    "Derek_Bishop": {name: "Derek Bishop", icon: "./pics/hawkeye/Derek_Bishop.png", universe: "mcu" },
    "Echo": {name: "Maya Lopez - Echo", icon: "./pics/hawkeye/Echo.jpeg", universe: "mcu" },
    "Jack_Duquesne": {name: "Jack Duquesne", icon: "./pics/hawkeye/Jack_Duquesne.jpeg", universe: "mcu" },
    "Armand_Duquesne": {name: "Armand Duquesne III", icon: "./pics/hawkeye/Armand_Duquesne.png", universe: "mcu" },
    "Kazi": {name: "Kazimierz Kazimierczak - Clown", icon: "./pics/hawkeye/Clown.jpeg", universe: "mcu" },
    "Ivan_Banionis": {name: "Ivan Banionis", icon: "./pics/hawkeye/Ivan_Banionis.png", universe: "mcu" },
    "Tomas": {name: "Tomas", icon: "./pics/hawkeye/Tomas.png", universe: "mcu" },
    "William_Lopez": {name: "William Lopez", icon: "./pics/hawkeye/William_Lopez.png", universe: "mcu" },
    "Enrique": {name: "Enrique", icon: "./pics/hawkeye/Enrique.png", universe: "mcu" },
    "Grills": {name: "Grills", icon: "./pics/hawkeye/Grills.png", universe: "mcu" },
    "Kingpin": {name: "Wilson Fisk - Kingpin", icon: "./pics/hawkeye/Kingpin.jpeg", universe: "netflix" },


    // Moon Knight
    "Moon_Knight": {name: "Marc Spector - Moon Knight", icon: "./pics/moon_knight/Moon_Knight.png", universe: "mcu" },
    "Khonshu": { name: "Khonshu", icon: "./pics/moon_knight/khonshu.png", universe: "mcu" },
    "Layla": { name: "Layla El-Faouly - Scarlet Scarab", icon: "./pics/moon_knight/Layla_El_Faouly.jpeg", universe: "mcu" },
    "Arthur_Harrow": {name: "Arthur Harrow", icon: "./pics/moon_knight/Arthur_Harrow.png", universe: "mcu" },
    "Tawaret": {name: "Tawaret", icon: "./pics/moon_knight/Tawaret.png", universe: "mcu" },
    "Donna": {name: "Donna", icon: "./pics/moon_knight/Donna.png", universe: "mcu" },
    "Anthon_Mogart": { name: "Anthon Mogart", icon: "./pics/moon_knight/Midnight_Man.jpeg", universe: "mcu" },


    // Doctor Strange and the Multiverse of Madness
    "America_Chavez": { name: "America Chavez", icon: "./pics/doctor_strange/America_Chavez.png", universe: "mcu" },
    "Gargantos": { name: "Gargantos", icon: "./pics/doctor_strange/Gargantos.png", universe: "mcu" },
    "Hamir": { name: "Hamir", icon: "./pics/doctor_strange/Hamir.png", universe: "mcu" },
    "Rintrah": { name: "Rintrah", icon: "./pics/doctor_strange/Rintrah.png", universe: "mcu" },
    "BaronMordo": { name: "Baron Mordo", icon: "./pics/doctor_strange/baron_mordo.png", universe: "mcu" },
    "Defender_Strange": { name: "Defender Strange", icon: "./pics/doctor_strange/Defender_Strange.png", universe: "mcu" },
    "Strange_Supreme": { name: "Strange Supreme", icon: "./pics/doctor_strange/Strange_Supreme.png", universe: "mcu" },
    "Professor_X": { name: "Professor X", icon: "./pics/doctor_strange/Professor_X.png", universe: "fox" },
    "Reed_Richards": { name: "Reed Richards - Mister Fantastic", icon: "./pics/doctor_strange/Reed_Richards.png", universe: "" },
    "Black_Bolt": { name: "Blackagar Boltagon - Black Bolt", icon: "./pics/doctor_strange/black_bolt.png", universe: "" },
    "Captain_Marvel_Rambeau": { name: "Maria Rambeau - Captain Marvel", icon: "./pics/doctor_strange/Maria_Rambeau_Captain_Marvel.png", universe: "" },


    // Ms Marvel
    "Ms_Marvel": {name: "Kamala Khan - Ms. Marvel", icon: "./pics/msmarvel/Kamala.jpeg", universe: "mcu" },

    // Secret Invasion
    // "Ms_Marvel": {name: "Kamala Khan - Ms. Marvel", icon: "./pics/msmarvel/Kamala.jpeg", universe: "mcu" },

    // She-Hulk
    "She_Hulk": {name: "Jennifer Walters - She-Hulk", icon: "./pics/shehulk/shehulk.png", universe: "mcu" },


    // Agatha, House of Harkness




    // Netflix

    // Daredevil
    "Daredevil_Series": {name: "Daredevil", icon: "./pics/netflix/series/Daredevil.png", universe: "netflix" },
    "Daredevil": {name: "Matt Murdock - Daredevil", icon: "./pics/netflix/daredevil/Daredevil.jpeg", universe: "netflix" },
    "Punisher": {name: "Frank Castle - Punisher", icon: "./pics/netflix/daredevil/Punisher.jpeg", universe: "netflix" },
    "Claire_Temple": {name: "Claire Temple", icon: "./pics/netflix/daredevil/Claire_Temple.png", universe: "netflix" },
    "Karen_Page": {name: "Karen Page", icon: "./pics/netflix/daredevil/Karen_Page.png", universe: "netflix" },

    // Jessica Jones
    "Jessica_Jones_Series": {name: "Jessica Jones", icon: "./pics/netflix/series/Jessica_Jones.png", universe: "netflix" },
    "Jessica_Jones": {name: "Jessica Jones", icon: "./pics/netflix/jessica_jones/Jessica_Jones.png", universe: "netflix" },
    "Kilgrave": {name: "Kilgrave", icon: "./pics/netflix/jessica_jones/Kilgrave.jpeg", universe: "netflix" },
    "Malcolm_Ducasse": {name: "Malcolm Ducasse", icon: "./pics/netflix/jessica_jones/Malcolm_Ducasse.jpeg", universe: "netflix" },


    "Luke_Cage_Series": {name: "Luke Cage", icon: "./pics/netflix/series/Luke_Cage.jpeg", universe: "netflix" },
    "Luke_Cage": {name: "Luke Cage", icon: "./pics/netflix/luke_cage/Luke_cage.png", universe: "netflix" },
    "Cottonmouth": {name: "Cottonmouth", icon: "./pics/netflix/luke_cage/Cottonmouth.jpeg", universe: "netflix" },
    "Misty_Knight": {name: "Misty Knight", icon: "./pics/netflix/luke_cage/Misty_knight.png", universe: "netflix" },
    "Shades": {name: "Shades", icon: "./pics/netflix/luke_cage/Shades.png", universe: "netflix" },
    "Black_Mariah": {name: "Black Mariah", icon: "./pics/netflix/luke_cage/Black_Mariah.png", universe: "netflix" },

    "Iron_Fist_Series": {name: "Danny Rand - Iron Fist", icon: "./pics/netflix/series/Iron_Fist.jpeg", universe: "netflix" },
    "Iron_Fist": {name: "Danny Rand - Iron Fist", icon: "./pics/netflix/iron_fist/Iron_Fist.jpeg", universe: "netflix" },
    "Colleen_Wing": {name: "Colleen Wing", icon: "./pics/netflix/iron_fist/Colleen_Wing.jpeg", universe: "netflix" },

    "Punisher_Series": {name: "Punisher", icon: "./pics/netflix/series/Punisher.png", universe: "netflix" },
    "Defenders_Series": {name: "Defenders", icon: "./pics/netflix/series/Defenders.jpeg", universe: "netflix" },


    // Sam Raimi Spider-verse

    "Spider-Man_2002": {name: "Spider-Man (2002)", icon: "./pics/raimi/Spider-Man_2002.jpeg", universe: "raimi" },
    "Spider-Man_2_2004": {name: "Spider-Man 2 (2004)", icon: "./pics/raimi/Spider-Man_2_2004.jpeg", universe: "raimi" },
    "Spider-Man_3_2007": {name: "Spider-Man 3 (2007)", icon: "./pics/raimi/Spider-Man_3_2007.jpeg", universe: "raimi" },
    "Spider-Man_Tobey": {name: "Spider-Man (Tobey)", icon: "./pics/raimi/Spider-Man_Tobey.png", universe: "raimi" },
    "Doctor_Octopus": {name: "Otto Octavius - Doctor Octopus", icon: "./pics/raimi/Doctor_Octopus.png", universe: "raimi" },
    "Green_Goblin": {name: "Norman Osborn/Green Goblin", icon: "./pics/raimi/Green_Goblin.jpeg", universe: "raimi" },
    "Sandman": {name: "Flint Marko - Sandman", icon: "./pics/raimi/Sandman.jpeg", universe: "raimi" },

    // Marv Webb Spider-Verse
    "Amazing_Spider-Man_2012": {name: "The Amazing Spider-Man (2012)", icon: "./pics/webb/The_Amazing_Spider-Man.jpeg", universe: "webb" },
    "Amazing_Spider-Man_2_2014": {name: "The Amazing Spider-Man 2 (2014)", icon: "./pics/webb/The_Amazing_Spiderman_2.jpeg", universe: "webb" },
    "Spider-Man_Andrew": {name: "Spider-Man (Andrew)", icon: "./pics/webb/Spider-Man_Andrew.png", universe: "webb" },
    "Electro": {name: "Max Dillon - Electro", icon: "./pics/webb/Electro.jpeg", universe: "webb" },
    "Lizard": {name: "Dr. Curt Connors - Lizard", icon: "./pics/webb/Lizard.png", universe: "webb" },


    // Fox X-Men Universe
    "XMen": { name: "X-Men", icon: "./pics/fox/movies/XMen.jpeg", universe: "fox" },
    "X2": { name: "X2: X-Men United", icon: "./pics/fox/movies/X2.jpeg", universe: "fox" },
    "XMen3_Last_Stand": { name: "X-Men: Last Stand", icon: "./pics/fox/movies/XMen_Last_Stand.jpeg", universe: "fox" },
    "XMen_Wolverine": { name: "X-Men: Wolverine", icon: "./pics/fox/movies/XMen_Wolverine.jpeg", universe: "fox" },
    "The_Wolverine": { name: "The Wolverine", icon: "./pics/fox/movies/The_Wolverine.jpeg", universe: "fox" },
    "Logan": { name: "Logan", icon: "./pics/fox/movies/Logan.jpeg", universe: "fox" },
    "XMen_First_Class": { name: "X-Men: First Class", icon: "./pics/fox/movies/XMen_First_Class.jpeg", universe: "fox" },
    "XMen_Days_of_Future_Past": { name: "X-Men: Days of Future Past", icon: "./pics/fox/movies/XMen_Days_of_Future_Past.jpeg", universe: "fox" },
    "XMen_Apocalypse": { name: "X-Men: Apocalypse", icon: "./pics/fox/movies/XMen_Apocalypse.jpeg", universe: "fox" },
    "XMen_Dark_Phoenix": { name: "X-Men: Dark Phoenix", icon: "./pics/fox/movies/XMen_Dark_Phoenix.png", universe: "fox" },
    "Deadpool": { name: "Deadpool", icon: "./pics/fox/movies/Deadpool.png", universe: "fox" },
    "Deadpool_2": { name: "Deadpool 2", icon: "./pics/fox/movies/Deadpool_2.jpeg", universe: "fox" },
    "The_New_Mutants": { name: "The New Mutants", icon: "./pics/fox/movies/The_New_Mutants.jpeg", universe: "fox" },

    "Wolverine": { name: "Logan - Wolverine", icon: "./pics/fox/wolverine.jpeg", universe: "fox" },
    "Young_Prof_X": { name: "Young Professor X", icon: "./pics/fox/Young_Prof_X.jpeg", universe: "fox" },
    "Magneto": { name: "Magneto", icon: "./pics/fox/magneto.jpg", universe: "fox" },
    "Jean_Grey_Famke_Janssen": { name: "Jean Grey - Phoenix", icon: "./pics/fox/jean_grey.jpg", universe: "fox" },
    "Jean_Grey_Sophie_Turner": { name: "Jean Grey - Dark Phoenix", icon: "./pics/fox/DarkPhoenix.jpeg", universe: "fox" },
    "Cyclops_James_Marsden": { name: "Scott Summers - Cyclops", icon: "./pics/fox/cyclops_James_Marsden.jpeg", universe: "fox" },
    "Cyclops_TimPocock": { name: "Scott Summers - Cyclops", icon: "./pics/fox/cyclops_Tim_Pocock.jpeg", universe: "fox" },
    "Cyclops_Tye_Sheridan": { name: "Scott Summers - Cyclops", icon: "./pics/fox/cyclops_tye_sheridan.jpeg", universe: "fox" },
    "Storm": { name: "Ororo Munroe - Storm", icon: "./pics/fox/storm.png", universe: "fox" },
    "Rogue": { name: "Marie - Rogue", icon: "./pics/fox/rogue.png", universe: "fox" },
    "Sabretooth_Tyler_Mane": { name: "Victor Creed - Sabretooth", icon: "./pics/fox/sabretooth_tyler_mane.jpeg", universe: "fox" },
    "Sabretooth_Liev_Schreiber": { name: "Victor Creed - Sabretooth", icon: "./pics/fox/sabretooth_liev_schreiber.jpeg", universe: "fox" },
    "Toad_Ray_Park": { name: "Toad", icon: "./pics/fox/Toad_Ray_Park.jpeg", universe: "fox" },
    "Toad_Evan_Jonigkeit": { name: "Toad", icon: "./pics/fox/toad_evan_jonigkeit.jpg", universe: "fox" },
    "Mystique_Rebecca_Romijn_Stamos": { name: "Raven Darkholme - Mystique", icon: "./pics/fox/Mystique_Rebecca_Romijn_Stamos.jpeg", universe: "fox" },
    "Mystique_Jennifer_Lawrence": { name: "Raven Darkholme - Mystique", icon: "./pics/fox/mystique_jennifer_lawrence.png", universe: "fox" },

};


var links = [

    { source: "IronMan", target: "IronMan_Movie" },
    { source: "WarMachine", target: "IronMan_Movie" },
    { source: "IronMonger", target: "IronMan_Movie" },
    { source: "PepperPotts", target: "IronMan_Movie" },
    { source: "PhilCoulson", target: "IronMan_Movie" },
    { source: "JARVIS", target: "IronMan_Movie" },
    { source: "HappyHogan", target: "IronMan_Movie" },
    { source: "HowardStark", target: "IronMan_Movie" },
    { source: "NickFury", target: "IronMan_Movie" },
    { source: "WilliamGinterRiva", target: "IronMan_Movie" },

    { source: "IronMan", target: "IronMan2_Movie" },
    { source: "WarMachine", target: "IronMan2_Movie" },
    { source: "PepperPotts", target: "IronMan2_Movie" },
    { source: "PhilCoulson", target: "IronMan2_Movie" },
    { source: "JARVIS", target: "IronMan2_Movie" },
    { source: "HappyHogan", target: "IronMan2_Movie" },
    { source: "HowardStark", target: "IronMan2_Movie" },
    { source: "NickFury", target: "IronMan2_Movie" },
    { source: "BlackWidow", target: "IronMan2_Movie" },
    { source: "JustinHammer", target: "IronMan2_Movie" },
    { source: "Whiplash", target: "IronMan2_Movie" },
    { source: "AntonVanko", target: "IronMan2_Movie" },
    { source: "Stern", target: "IronMan2_Movie" },


    { source: "IronMan", target: "IronMan3_Movie" },
    { source: "PepperPotts", target: "IronMan3_Movie" },
    { source: "WarMachine", target: "IronMan3_Movie" },
    { source: "HappyHogan", target: "IronMan3_Movie" },
    { source: "JARVIS", target: "IronMan3_Movie" },
    { source: "AldrichKillian", target: "IronMan3_Movie" },
    { source: "TrevorSlattery", target: "IronMan3_Movie" },
    { source: "PatKiernan", target: "IronMan3_Movie" },

    { source: "IronMan", target: "Hulk_Movie" },
    { source: "Hulk", target: "Hulk_Movie" },
    { source: "Abomination", target: "Hulk_Movie" },
    { source: "ThaddeusRoss", target: "Hulk_Movie" },

    { source: "Thor", target: "Thor_Movie" },
    { source: "JaneFoster", target: "Thor_Movie" },
    { source: "Loki", target: "Thor_Movie" },
    { source: "Odin", target: "Thor_Movie" },
    { source: "ErikSelvig", target: "Thor_Movie" },
    { source: "DarcyLewis", target: "Thor_Movie" },
    { source: "Heimdall", target: "Thor_Movie" },
    { source: "Volstagg", target: "Thor_Movie" },
    { source: "Hogun", target: "Thor_Movie" },
    { source: "Fandral", target: "Thor_Movie" },
    { source: "Sif", target: "Thor_Movie" },
    { source: "Frigga", target: "Thor_Movie" },
    { source: "JasperSitwell", target: "Thor_Movie" },
    { source: "Hawkeye", target: "Thor_Movie" },
    { source: "Laufey", target: "Thor_Movie" },
    { source: "PhilCoulson", target: "Thor_Movie" },
    { source: "NickFury", target: "Thor_Movie" },

    { source: "NickFury", target: "CaptainAmerica_Movie" },
    { source: "HowardStark", target: "CaptainAmerica_Movie" },
    { source: "CaptainAmerica", target: "CaptainAmerica_Movie" },
    { source: "PeggyCarter", target: "CaptainAmerica_Movie" },
    { source: "WinterSoldier", target: "CaptainAmerica_Movie" },
    { source: "ChesterPhillips", target: "CaptainAmerica_Movie" },
    { source: "RedSkull", target: "CaptainAmerica_Movie" },
    { source: "AbrahamErskine", target: "CaptainAmerica_Movie" },
    { source: "ArnimZola", target: "CaptainAmerica_Movie" },
    { source: "DumDumDugan", target: "CaptainAmerica_Movie" },

    { source: "IronMan", target: "Avengers_Movie" },
    { source: "CaptainAmerica", target: "Avengers_Movie" },
    { source: "Hulk", target: "Avengers_Movie" },
    { source: "Thor", target: "Avengers_Movie" },
    { source: "BlackWidow", target: "Avengers_Movie" },
    { source: "Hawkeye", target: "Avengers_Movie" },
    { source: "Loki", target: "Avengers_Movie" },
    { source: "PhilCoulson", target: "Avengers_Movie" },
    { source: "MariaHill", target: "Avengers_Movie" },
    { source: "TheOther", target: "Avengers_Movie" },
    { source: "Thanos", target: "Avengers_Movie" },
    { source: "ErikSelvig", target: "Avengers_Movie" },
    { source: "NickFury", target: "Avengers_Movie" },
    { source: "PepperPotts", target: "Avengers_Movie" },
    { source: "JARVIS", target: "Avengers_Movie" },
    { source: "JasperSitwell", target: "Avengers_Movie" },
    { source: "Hawley", target: "Avengers_Movie" },
    { source: "PatKiernan", target: "Avengers_Movie" },

    { source: "Thor", target: "Thor2_Movie" },
    { source: "JaneFoster", target: "Thor2_Movie" },
    { source: "Loki", target: "Thor2_Movie" },
    { source: "Malekith", target: "Thor2_Movie" },
    { source: "Sif", target: "Thor2_Movie" },
    { source: "Fandral", target: "Thor2_Movie" },
    { source: "Volstagg", target: "Thor2_Movie" },
    { source: "Hogun", target: "Thor2_Movie" },
    { source: "Heimdall", target: "Thor2_Movie" },
    { source: "Frigga", target: "Thor2_Movie" },
    { source: "DarcyLewis", target: "Thor2_Movie" },
    { source: "ErikSelvig", target: "Thor2_Movie" },
    { source: "TivanTheCollector", target: "Thor2_Movie" },
    { source: "Carina", target: "Thor2_Movie" },

    { source: "CaptainAmerica", target: "CaptainAmerica2_Movie" },
    { source: "NickFury", target: "CaptainAmerica2_Movie" },
    { source: "BlackWidow", target: "CaptainAmerica2_Movie" },
    { source: "AlexanderPierce", target: "CaptainAmerica2_Movie" },
    { source: "WinterSoldier", target: "CaptainAmerica2_Movie" },
    { source: "Falcon", target: "CaptainAmerica2_Movie" },
    { source: "MariaHill", target: "CaptainAmerica2_Movie" },
    { source: "Crossbones", target: "CaptainAmerica2_Movie" },
    { source: "JasperSitwell", target: "CaptainAmerica2_Movie" },
    { source: "SharonCarter", target: "CaptainAmerica2_Movie" },
    { source: "PeggyCarter", target: "CaptainAmerica2_Movie" },
    { source: "ArnimZola", target: "CaptainAmerica2_Movie" },
    { source: "Hawley", target: "CaptainAmerica2_Movie" },
    { source: "JackRollins", target: "CaptainAmerica2_Movie" },
    { source: "Stern", target: "CaptainAmerica2_Movie" },
    { source: "GeorgesBatroc", target: "CaptainAmerica2_Movie" },
    { source: "WolfgangVonStrucker", target: "CaptainAmerica2_Movie" },
    { source: "Quicksilver", target: "CaptainAmerica2_Movie" },
    { source: "ScarletWitch", target: "CaptainAmerica2_Movie" },
    { source: "CameronKlein", target: "CaptainAmerica2_Movie" },

    { source: "StarLord", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Gamora", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Drax", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Groot", target: "Guardians_ot_Galaxy_Movie" },
    { source: "RocketRaccoon", target: "Guardians_ot_Galaxy_Movie" },
    { source: "RonanTheAccuser", target: "Guardians_ot_Galaxy_Movie" },
    { source: "YonduUdonta", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Nebula", target: "Guardians_ot_Galaxy_Movie" },
    { source: "KorathThePursuer", target: "Guardians_ot_Galaxy_Movie" },
    { source: "MeredithQuill", target: "Guardians_ot_Galaxy_Movie" },
    { source: "KraglinObfonteri", target: "Guardians_ot_Galaxy_Movie" },
    { source: "MrQuill", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Vorker", target: "Guardians_ot_Galaxy_Movie" },
    { source: "HowardTheDuck", target: "Guardians_ot_Galaxy_Movie" },
    { source: "TivanTheCollector", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Carina", target: "Guardians_ot_Galaxy_Movie" },
    { source: "TheOther", target: "Guardians_ot_Galaxy_Movie" },
    { source: "Thanos", target: "Guardians_ot_Galaxy_Movie" },


    { source: "IronMan", target: "Avengers2_Movie" },
    { source: "Thor", target: "Avengers2_Movie" },
    { source: "Hulk", target: "Avengers2_Movie" },
    { source: "CaptainAmerica", target: "Avengers2_Movie" },
    { source: "BlackWidow", target: "Avengers2_Movie" },
    { source: "Hawkeye", target: "Avengers2_Movie" },
    { source: "WarMachine", target: "Avengers2_Movie" },
    { source: "Quicksilver", target: "Avengers2_Movie" },
    { source: "ScarletWitch", target: "Avengers2_Movie" },
    { source: "JARVIS", target: "Avengers2_Movie" },
    { source: "MariaHill", target: "Avengers2_Movie" },
    { source: "Falcon", target: "Avengers2_Movie" },
    { source: "PeggyCarter", target: "Avengers2_Movie" },
    { source: "Heimdall", target: "Avengers2_Movie" },
    { source: "LauraBarton", target: "Avengers2_Movie" },
    { source: "ErikSelvig", target: "Avengers2_Movie" },
    { source: "WolfgangVonStrucker", target: "Avengers2_Movie" },
    { source: "Ultron", target: "Avengers2_Movie" },
    { source: "Vision", target: "Avengers2_Movie" },
    { source: "NickFury", target: "Avengers2_Movie" },
    { source: "UlyssesKlaue", target: "Avengers2_Movie" },
    { source: "CooperBarton", target: "Avengers2_Movie" },
    { source: "LilaBarton", target: "Avengers2_Movie" },
    { source: "CameronKlein", target: "Avengers2_Movie" },
    { source: "FRIDAY", target: "Avengers2_Movie" },
    { source: "NathanielBarton", target: "Avengers2_Movie" },
    { source: "Thanos", target: "Avengers2_Movie" },

    { source: "AntMan", target: "AntMan_Movie" },
    { source: "HankPym", target: "AntMan_Movie" },
    { source: "TheWasp", target: "AntMan_Movie" },
    { source: "YellowJacket", target: "AntMan_Movie" },
    { source: "JimPaxton", target: "AntMan_Movie" },
    { source: "Luis", target: "AntMan_Movie" },
    { source: "Dave", target: "AntMan_Movie" },
    { source: "MaggieLang", target: "AntMan_Movie" },
    { source: "CassieLang", target: "AntMan_Movie" },
    { source: "Kurt", target: "AntMan_Movie" },
    { source: "JanetVanDyne", target: "AntMan_Movie" },
    { source: "Falcon", target: "AntMan_Movie" },
    { source: "PeggyCarter", target: "AntMan_Movie" },
    { source: "HowardStark", target: "AntMan_Movie" },

    { source: "CaptainAmerica", target: "CaptainAmerica3_Movie" },
    { source: "IronMan", target: "CaptainAmerica3_Movie" },
    { source: "BlackWidow", target: "CaptainAmerica3_Movie" },
    { source: "WinterSoldier", target: "CaptainAmerica3_Movie" },
    { source: "Falcon", target: "CaptainAmerica3_Movie" },
    { source: "WarMachine", target: "CaptainAmerica3_Movie" },
    { source: "Hawkeye", target: "CaptainAmerica3_Movie" },
    { source: "BlackPanther", target: "CaptainAmerica3_Movie" },
    { source: "Vision", target: "CaptainAmerica3_Movie" },
    { source: "ScarletWitch", target: "CaptainAmerica3_Movie" },
    { source: "AntMan", target: "CaptainAmerica3_Movie" },
    { source: "SharonCarter", target: "CaptainAmerica3_Movie" },
    { source: "SpiderMan", target: "CaptainAmerica3_Movie" },
    { source: "Zemo", target: "CaptainAmerica3_Movie" },
    { source: "Crossbones", target: "CaptainAmerica3_Movie" },
    { source: "ThaddeusRoss", target: "CaptainAmerica3_Movie" },
    { source: "EverettRoss", target: "CaptainAmerica3_Movie" },
    { source: "MayParker", target: "CaptainAmerica3_Movie" },
    { source: "TChaka", target: "CaptainAmerica3_Movie" },
    { source: "HowardStark", target: "CaptainAmerica3_Movie" },
    { source: "MariaStarke", target: "CaptainAmerica3_Movie" },
    { source: "Ayo", target: "CaptainAmerica3_Movie" },


    { source: "DoctorStrange", target: "DoctorStrange_Movie" },
    { source: "Dormammu", target: "DoctorStrange_Movie" },
    { source: "KarlMordo", target: "DoctorStrange_Movie" },
    { source: "ChristinePalmer", target: "DoctorStrange_Movie" },
    { source: "Wong", target: "DoctorStrange_Movie" },
    { source: "Kaecilius", target: "DoctorStrange_Movie" },
    { source: "AncientOne", target: "DoctorStrange_Movie" },
    { source: "Thor", target: "DoctorStrange_Movie" },
    { source: "PatKiernan", target: "DoctorStrange_Movie" },
    { source: "Hamir", target: "DoctorStrange_Movie" },


    { source: "StarLord", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Gamora", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Drax", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Groot", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "RocketRaccoon", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Mantis", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "YonduUdonta", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Nebula", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Ego", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Ayesha", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Zylak", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Taserface", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Gef", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Tullk", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Retch", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "StakarOgord", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Charlie27", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "AletaOgord", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Martinex", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "MeredithQuill", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "MrQuill", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "HowardTheDuck", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Vorker", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Grandmaster", target: "Guardians_ot_Galaxy2_Movie" },
    { source: "Krugarr", target: "Guardians_ot_Galaxy2_Movie" },


    { source: "Thor", target: "Thor3_Movie" },
    { source: "Loki", target: "Thor3_Movie" },
    { source: "Hulk", target: "Thor3_Movie" },
    { source: "Hela", target: "Thor3_Movie" },
    { source: "Valkyrie", target: "Thor3_Movie" },
    { source: "Heimdall", target: "Thor3_Movie" },
    { source: "Odin", target: "Thor3_Movie" },
    { source: "Executioner", target: "Thor3_Movie" },
    { source: "Grandmaster", target: "Thor3_Movie" },
    { source: "Volstagg", target: "Thor3_Movie" },
    { source: "Fandral", target: "Thor3_Movie" },
    { source: "Hogun", target: "Thor3_Movie" },
    { source: "Topaz", target: "Thor3_Movie" },
    { source: "DoctorStrange", target: "Thor3_Movie" },
    { source: "Miek", target: "Thor3_Movie" },
    { source: "Korg", target: "Thor3_Movie" },
    { source: "Surtur", target: "Thor3_Movie" },

    { source: "SpiderMan", target: "SpiderMan_Movie" },
    { source: "MayParker", target: "SpiderMan_Movie" },
    { source: "Vulture", target: "SpiderMan_Movie" },
    { source: "IronMan", target: "SpiderMan_Movie" },
    { source: "HappyHogan", target: "SpiderMan_Movie" },
    { source: "PepperPotts", target: "SpiderMan_Movie" },
    { source: "MichelleJones", target: "SpiderMan_Movie" },
    { source: "Prowler", target: "SpiderMan_Movie" },
    { source: "RogerHarrington", target: "SpiderMan_Movie" },
    { source: "RogerHarrington", target: "Hulk_Movie" },
    { source: "Tinkerer", target: "SpiderMan_Movie" },
    { source: "NedLeeds", target: "SpiderMan_Movie" },
    { source: "LizToomes", target: "SpiderMan_Movie" },
    { source: "FlashThompson", target: "SpiderMan_Movie" },
    { source: "Shocker", target: "SpiderMan_Movie" },
    { source: "CindyMoon", target: "SpiderMan_Movie" },
    { source: "AndreWilson", target: "SpiderMan_Movie" },
    { source: "BettyBrant", target: "SpiderMan_Movie" },
    { source: "CharlesMurphy", target: "SpiderMan_Movie" },
    { source: "Delmar", target: "SpiderMan_Movie" },
    { source: "JasonIonello", target: "SpiderMan_Movie" },
    { source: "SallyAvrill", target: "SpiderMan_Movie" },
    { source: "TinyMcKeever", target: "SpiderMan_Movie" },

    { source: "BlackPanther", target: "BlackPanther_Movie" },
    { source: "Killmonger", target: "BlackPanther_Movie" },
    { source: "Nakia", target: "BlackPanther_Movie" },
    { source: "Okoye", target: "BlackPanther_Movie" },
    { source: "EverettRoss", target: "BlackPanther_Movie" },
    { source: "WKabi", target: "BlackPanther_Movie" },
    { source: "Shuri", target: "BlackPanther_Movie" },
    { source: "MBaku", target: "BlackPanther_Movie" },
    { source: "Ramonda", target: "BlackPanther_Movie" },
    { source: "Zuri", target: "BlackPanther_Movie" },
    { source: "UlyssesKlaue", target: "BlackPanther_Movie" },
    { source: "NJobu", target: "BlackPanther_Movie" },
    { source: "Ayo", target: "BlackPanther_Movie" },
    { source: "TChaka", target: "BlackPanther_Movie" },
    { source: "Nomble", target: "BlackPanther_Movie" },
    { source: "Yama", target: "BlackPanther_Movie" },
    { source: "WinterSoldier", target: "BlackPanther_Movie" },

    { source: "IronMan", target: "Avengers3_Movie" },
    { source: "Thor", target: "Avengers3_Movie" },
    { source: "Hulk", target: "Avengers3_Movie" },
    { source: "CaptainAmerica", target: "Avengers3_Movie" },
    { source: "BlackWidow", target: "Avengers3_Movie" },
    { source: "WarMachine", target: "Avengers3_Movie" },
    { source: "DoctorStrange", target: "Avengers3_Movie" },
    { source: "SpiderMan", target: "Avengers3_Movie" },
    { source: "BlackPanther", target: "Avengers3_Movie" },
    { source: "Gamora", target: "Avengers3_Movie" },
    { source: "Nebula", target: "Avengers3_Movie" },
    { source: "Loki", target: "Avengers3_Movie" },
    { source: "Vision", target: "Avengers3_Movie" },
    { source: "ScarletWitch", target: "Avengers3_Movie" },
    { source: "Falcon", target: "Avengers3_Movie" },
    { source: "WinterSoldier", target: "Avengers3_Movie" },
    { source: "Heimdall", target: "Avengers3_Movie" },
    { source: "Okoye", target: "Avengers3_Movie" },
    { source: "Eitri", target: "Avengers3_Movie" },
    { source: "Wong", target: "Avengers3_Movie" },
    { source: "Mantis", target: "Avengers3_Movie" },
    { source: "Drax", target: "Avengers3_Movie" },
    { source: "Groot", target: "Avengers3_Movie" },
    { source: "RocketRaccoon", target: "Avengers3_Movie" },
    { source: "PepperPotts", target: "Avengers3_Movie" },
    { source: "TivanTheCollector", target: "Avengers3_Movie" },
    { source: "Thanos", target: "Avengers3_Movie" },
    { source: "StarLord", target: "Avengers3_Movie" },
    { source: "ThaddeusRoss", target: "Avengers3_Movie" },
    { source: "Shuri", target: "Avengers3_Movie" },
    { source: "CullObsidian", target: "Avengers3_Movie" },
    { source: "EbonyMaw", target: "Avengers3_Movie" },
    { source: "ProximaMidnight", target: "Avengers3_Movie" },
    { source: "CorvusGlaive", target: "Avengers3_Movie" },
    { source: "MBaku", target: "Avengers3_Movie" },
    { source: "Ayo", target: "Avengers3_Movie" },
    { source: "FRIDAY", target: "Avengers3_Movie" },
    { source: "NedLeeds", target: "Avengers3_Movie" },
    { source: "CindyMoon", target: "Avengers3_Movie" },
    { source: "SallyAvrill", target: "Avengers3_Movie" },
    { source: "TinyMcKeever", target: "Avengers3_Movie" },
    { source: "CharlesMurphy", target: "Avengers3_Movie" },
    { source: "RedSkull", target: "Avengers3_Movie" },
    { source: "Nomble", target: "Avengers3_Movie" },
    { source: "Yama", target: "Avengers3_Movie" },
    { source: "NickFury", target: "Avengers3_Movie" },
    { source: "MariaHill", target: "Avengers3_Movie" },
    { source: "HappyHogan", target: "Avengers3_Movie" },



    { source: "AntMan", target: "AntMan2_Movie" },
    { source: "HankPym", target: "AntMan2_Movie" },
    { source: "TheWasp", target: "AntMan2_Movie" },
    { source: "JimPaxton", target: "AntMan2_Movie" },
    { source: "Luis", target: "AntMan2_Movie" },
    { source: "Dave", target: "AntMan2_Movie" },
    { source: "MaggieLang", target: "AntMan2_Movie" },
    { source: "CassieLang", target: "AntMan2_Movie" },
    { source: "Kurt", target: "AntMan2_Movie" },
    { source: "JanetVanDyne", target: "AntMan2_Movie" },
    { source: "BillFoster", target: "AntMan2_Movie" },
    { source: "Ghost", target: "AntMan2_Movie" },
    { source: "JimmyWoo", target: "AntMan2_Movie" },
    { source: "SonnyBurch", target: "AntMan2_Movie" },

    { source: "KorathThePursuer", target: "CaptainMarvel_Movie" },
    { source: "RonanTheAccuser", target: "CaptainMarvel_Movie" },
    { source: "NickFury", target: "CaptainMarvel_Movie" },
    { source: "PhilCoulson", target: "CaptainMarvel_Movie" },
    { source: "CaptainMarvel", target: "CaptainMarvel_Movie" },
    { source: "Talos", target: "CaptainMarvel_Movie" },
    { source: "MariaRambeau", target: "CaptainMarvel_Movie" },
    { source: "MonicaRambeau", target: "CaptainMarvel_Movie" },
    { source: "AttLass", target: "CaptainMarvel_Movie" },
    { source: "YonRogg", target: "CaptainMarvel_Movie" },
    { source: "MarVell", target: "CaptainMarvel_Movie" },
    { source: "SupremeIntelligence", target: "CaptainMarvel_Movie" },
    { source: "MinnErva", target: "CaptainMarvel_Movie" },
    { source: "BronChar", target: "CaptainMarvel_Movie" },
    { source: "Soren", target: "CaptainMarvel_Movie" },
    { source: "Goose", target: "CaptainMarvel_Movie" },
    { source: "Soren", target: "CaptainMarvel_Movie" },

    { source: "IronMan", target: "Avengers4_Movie" },
    { source: "CaptainAmerica", target: "Avengers4_Movie" },
    { source: "Hulk", target: "Avengers4_Movie" },
    { source: "Thor", target: "Avengers4_Movie" },
    { source: "BlackWidow", target: "Avengers4_Movie" },
    { source: "Hawkeye", target: "Avengers4_Movie" },
    { source: "WarMachine", target: "Avengers4_Movie" },
    { source: "AntMan", target: "Avengers4_Movie" },
    { source: "DoctorStrange", target: "Avengers4_Movie" },
    { source: "BlackPanther", target: "Avengers4_Movie" },
    { source: "CaptainMarvel", target: "Avengers4_Movie" },
    { source: "SpiderMan", target: "Avengers4_Movie" },
    { source: "Nebula", target: "Avengers4_Movie" },
    { source: "Gamora", target: "Avengers4_Movie" },
    { source: "TheWasp", target: "Avengers4_Movie" },
    { source: "Valkyrie", target: "Avengers4_Movie" },
    { source: "Frigga", target: "Avengers4_Movie" },
    { source: "ScarletWitch", target: "Avengers4_Movie" },
    { source: "Falcon", target: "Avengers4_Movie" },
    { source: "WinterSoldier", target: "Avengers4_Movie" },
    { source: "Loki", target: "Avengers4_Movie" },
    { source: "Okoye", target: "Avengers4_Movie" },
    { source: "Wong", target: "Avengers4_Movie" },
    { source: "Mantis", target: "Avengers4_Movie" },
    { source: "Drax", target: "Avengers4_Movie" },
    { source: "Shuri", target: "Avengers4_Movie" },
    { source: "HowardStark", target: "Avengers4_Movie" },
    { source: "AncientOne", target: "Avengers4_Movie" },
    { source: "HappyHogan", target: "Avengers4_Movie" },
    { source: "PeggyCarter", target: "Avengers4_Movie" },
    { source: "JaneFoster", target: "Avengers4_Movie" },
    { source: "MayParker", target: "Avengers4_Movie" },
    { source: "Korg", target: "Avengers4_Movie" },
    { source: "Ramonda", target: "Avengers4_Movie" },
    { source: "HankPym", target: "Avengers4_Movie" },
    { source: "JanetVanDyne", target: "Avengers4_Movie" },
    { source: "ThaddeusRoss", target: "Avengers4_Movie" },
    { source: "MariaHill", target: "Avengers4_Movie" },
    { source: "RocketRaccoon", target: "Avengers4_Movie" },
    { source: "MBaku", target: "Avengers4_Movie" },
    { source: "LauraBarton", target: "Avengers4_Movie" },
    { source: "JasperSitwell", target: "Avengers4_Movie" },
    { source: "Crossbones", target: "Avengers4_Movie" },
    { source: "EbonyMaw", target: "Avengers4_Movie" },
    { source: "NedLeeds", target: "Avengers4_Movie" },
    { source: "Groot", target: "Avengers4_Movie" },
    { source: "PepperPotts", target: "Avengers4_Movie" },
    { source: "AlexanderPierce", target: "Avengers4_Movie" },
    { source: "Thanos", target: "Avengers4_Movie" },
    { source: "StarLord", target: "Avengers4_Movie" },
    { source: "NickFury", target: "Avengers4_Movie" },
    { source: "RedSkull", target: "Avengers4_Movie" },
    { source: "CassieLang", target: "Avengers4_Movie" },
    { source: "CorvusGlaive", target: "Avengers4_Movie" },
    { source: "FRIDAY", target: "Avengers4_Movie" },
    { source: "CooperBarton", target: "Avengers4_Movie" },
    { source: "LilaBarton", target: "Avengers4_Movie" },
    { source: "NathanielBarton", target: "Avengers4_Movie" },
    { source: "ProximaMidnight", target: "Avengers4_Movie" },
    { source: "JimmyWoo", target: "Avengers4_Movie" },
    { source: "Miek", target: "Avengers4_Movie" },
    { source: "EdwinJarvis", target: "Avengers4_Movie" },
    { source: "MorganStark", target: "Avengers4_Movie" },


    // TODO:
    // Spiderman Far From Home
    { source: "SpiderMan", target: "SpiderMan2_Movie" },
    { source: "AndreWilson", target: "SpiderMan2_Movie" },
    { source: "BettyBrant", target: "SpiderMan2_Movie" },
    { source: "CharlesMurphy", target: "SpiderMan2_Movie" },
    { source: "CindyMoon", target: "SpiderMan2_Movie" },
    { source: "Delmar", target: "SpiderMan2_Movie" },
    { source: "FlashThompson", target: "SpiderMan2_Movie" },
    { source: "HappyHogan", target: "SpiderMan2_Movie" },
    { source: "JasonIonello", target: "SpiderMan2_Movie" },
    { source: "LizToomes", target: "SpiderMan2_Movie" },
    { source: "MariaHill", target: "SpiderMan2_Movie" },
    { source: "MayParker", target: "SpiderMan2_Movie" },
    { source: "MichelleJones", target: "SpiderMan2_Movie" },
    { source: "Mysterio", target: "SpiderMan2_Movie" },
    { source: "NedLeeds", target: "SpiderMan2_Movie" },
    { source: "NickFury", target: "SpiderMan2_Movie" },
    { source: "RogerHarrington", target: "SpiderMan2_Movie" },
    { source: "SallyAvrill", target: "SpiderMan2_Movie" },
    { source: "Talos", target: "SpiderMan2_Movie" },
    { source: "TinyMcKeever", target: "SpiderMan2_Movie" },
    { source: "BradDavis", target: "SpiderMan2_Movie" },
    { source: "JuliusDell", target: "SpiderMan2_Movie" },
    { source: "PatKiernan", target: "SpiderMan2_Movie" },
    { source: "JJonahJameson", target: "SpiderMan2_Movie" },
    { source: "WilliamGinterRiva", target: "SpiderMan2_Movie" },
    { source: "Seamstress", target: "SpiderMan2_Movie" },
    { source: "Soren", target: "SpiderMan2_Movie" },


    // WandaVision
    { source: "Vision", target: "WandaVision_Series" },
    { source: "ScarletWitch", target: "WandaVision_Series" },
    { source: "JimmyWoo", target: "WandaVision_Series" },
    { source: "DarcyLewis", target: "WandaVision_Series" },
    { source: "Agnes", target: "WandaVision_Series" },
    { source: "TylerHayward", target: "WandaVision_Series" },
    { source: "MonicaRambeau", target: "WandaVision_Series" },

    // Falcon & The Winter Soldier
    { source: "Falcon", target: "FalconWinterSoldier_Series" },
    { source: "WinterSoldier", target: "FalconWinterSoldier_Series" },
    { source: "Val", target: "FalconWinterSoldier_Series" },
    { source: "US_Agent", target: "FalconWinterSoldier_Series" },
    { source: "Karli", target: "FalconWinterSoldier_Series" },
    { source: "Joaquin_Torres", target: "FalconWinterSoldier_Series" },
    { source: "Battlestar", target: "FalconWinterSoldier_Series" },
    { source: "Isaiah_Bradley", target: "FalconWinterSoldier_Series" },
    { source: "SharonCarter", target: "FalconWinterSoldier_Series" },
    { source: "Ayo", target: "FalconWinterSoldier_Series" },
    { source: "GeorgesBatroc", target: "FalconWinterSoldier_Series" },
    { source: "Zemo", target: "FalconWinterSoldier_Series" },
    { source: "WarMachine", target: "FalconWinterSoldier_Series" },


    // Loki
    { source: "Loki", target: "Loki_Series" },
    { source: "Mobius", target: "Loki_Series" },
    { source: "Sif", target: "Loki_Series" },
    { source: "PresidentLoki", target: "Loki_Series" },
    { source: "SylvieLaufeydottir", target: "Loki_Series" },
    { source: "RavonnaRenslayer", target: "Loki_Series" },
    { source: "HunterB-15", target: "Loki_Series" },
    { source: "HunterK-5E", target: "Loki_Series" },
    { source: "HunterC-20", target: "Loki_Series" },
    { source: "KidLoki", target: "Loki_Series" },
    { source: "BoastfulLoki", target: "Loki_Series" },
    { source: "MissMinutes", target: "Loki_Series" },
    { source: "ClassicLoki", target: "Loki_Series" },
    { source: "HunterD-90", target: "Loki_Series" },
    { source: "Kang", target: "Loki_Series" },
    { source: "BlackWidow", target: "BlackWidow_Movie" },


    // Black Widow
    { source: "YelenaBelova", target: "BlackWidow_Movie" },
    { source: "MelinaVostokoff", target: "BlackWidow_Movie" },
    { source: "RedGuardian", target: "BlackWidow_Movie" },
    { source: "Dreykov", target: "BlackWidow_Movie" },
    { source: "Rick_Mason", target: "BlackWidow_Movie" },
    { source: "Task_Master", target: "BlackWidow_Movie" },
    { source: "Val", target: "BlackWidow_Movie" },
    { source: "ThaddeusRoss", target: "BlackWidow_Movie" },
    { source: "ShangChi", target: "Shang_Chi_Movie" },


    // What if.....

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E1" },
    { source: "Watcher", target: "WhatIf_Series_S1E1" },
    { source: "Captain_Carter", target: "WhatIf_Series_S1E1" },
    { source: "Bucky_Barns_WI", target: "WhatIf_Series_S1E1" },
    { source: "Zola_WI", target: "WhatIf_Series_S1E1" },
    { source: "Hydra_Stomper", target: "WhatIf_Series_S1E1" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E2" },
    { source: "Watcher", target: "WhatIf_Series_S1E2" },
    { source: "TChalla_Starlord", target: "WhatIf_Series_S1E2" },
    { source: "Yondu_Udonta_WI", target: "WhatIf_Series_S1E2" },
    { source: "Thanos_WI", target: "WhatIf_Series_S1E2" },
    { source: "Zola_WI", target: "WhatIf_Series_S1E2" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E3" },
    { source: "Watcher", target: "WhatIf_Series_S1E3" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E4" },
    { source: "Watcher", target: "WhatIf_Series_S1E4" },
    { source: "Strange_Supreme", target: "WhatIf_Series_S1E4" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E5" },
    { source: "Watcher", target: "WhatIf_Series_S1E5" },
    { source: "Zombie_Thanos", target: "WhatIf_Series_S1E5" },
    { source: "Zombie_Wanda", target: "WhatIf_Series_S1E5" },
    { source: "Zombie_Strange", target: "WhatIf_Series_S1E5" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E6" },
    { source: "Watcher", target: "WhatIf_Series_S1E6" },
    { source: "Killmonger_WI", target: "WhatIf_Series_S1E6" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E7" },
    { source: "Watcher", target: "WhatIf_Series_S1E7" },
    { source: "Party_Thor", target: "WhatIf_Series_S1E7" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E8" },
    { source: "Watcher", target: "WhatIf_Series_S1E8" },
    { source: "UltraVision", target: "WhatIf_Series_S1E8" },
    { source: "Zola_WI", target: "WhatIf_Series_S1E8" },
    { source: "Hawkeye_WI", target: "WhatIf_Series_S1E8" },
    { source: "Black_Widow_WI", target: "WhatIf_Series_S1E8" },
    { source: "Captain_Marvel_WI", target: "WhatIf_Series_S1E8" },
    { source: "Strange_Supreme", target: "WhatIf_Series_S1E8" },

    // { source: "WhatIf_Series", target: "WhatIf_Series_S1E9" },
    { source: "Watcher", target: "WhatIf_Series_S1E9" },
    { source: "UltraVision", target: "WhatIf_Series_S1E9" },
    { source: "Strange_Supreme", target: "WhatIf_Series_S1E9" },
    { source: "Black_Widow_WI", target: "WhatIf_Series_S1E9" },
    { source: "Zola_WI", target: "WhatIf_Series_S1E9" },
    { source: "Hydra_Stomper", target: "WhatIf_Series_S1E9" },
    { source: "Captain_Carter", target: "WhatIf_Series_S1E9" },
    { source: "TChalla_Starlord", target: "WhatIf_Series_S1E9" },
    { source: "Killmonger_WI", target: "WhatIf_Series_S1E9" },
    { source: "Gamora_WI", target: "WhatIf_Series_S1E9" },
    { source: "Zombie_Thanos", target: "WhatIf_Series_S1E9" },
    { source: "Zombie_Wanda", target: "WhatIf_Series_S1E9" },

    // { source: "Zombie_Strange", target: "WhatIf_Series" },
    // { source: "Zombie_Wanda", target: "WhatIf_Series" },

    { source: "Watcher", target: "WhatIf2_Series" },
    { source: "Captain_Carter", target: "WhatIf2_Series" },

    // Marvel Zombies
    { source: "Zombie_Strange", target: "Marvel_Zombies_Series" },
    { source: "Zombie_Wanda", target: "Marvel_Zombies_Series" },


    // Shang-Chi
    { source: "KatyChen", target: "Shang_Chi_Movie" },
    { source: "Xialing", target: "Shang_Chi_Movie" },
    { source: "YingLi", target: "Shang_Chi_Movie" },
    { source: "RazorFist", target: "Shang_Chi_Movie" },
    { source: "YingNan", target: "Shang_Chi_Movie" },
    { source: "Mandarin", target: "Shang_Chi_Movie" },
    { source: "JonJon", target: "Shang_Chi_Movie" },
    { source: "DeathDealer", target: "Shang_Chi_Movie" },
    { source: "Wong", target: "Shang_Chi_Movie" },
    { source: "TrevorSlattery", target: "Shang_Chi_Movie" },
    { source: "Abomination", target: "Shang_Chi_Movie" },


    // Eternals
    { source: "Sersi", target: "Eternals_Movie" },
    { source: "Ikaris", target: "Eternals_Movie" },
    { source: "Kingo", target: "Eternals_Movie" },
    { source: "Sprite", target: "Eternals_Movie" },
    { source: "Phastos", target: "Eternals_Movie" },
    { source: "Makkari", target: "Eternals_Movie" },
    { source: "Druig", target: "Eternals_Movie" },
    { source: "Gilgamesh", target: "Eternals_Movie" },
    { source: "Black_Knight", target: "Eternals_Movie" },
    { source: "Ajak", target: "Eternals_Movie" },
    { source: "Thena", target: "Eternals_Movie" },
    { source: "Karun", target: "Eternals_Movie" },
    { source: "General_Kro", target: "Eternals_Movie" },

    // Hawkeye
    { source: "Hawkeye", target: "Hawkeye_Series" },
    { source: "Kate_Bishop", target: "Hawkeye_Series" },
    { source: "Eleanor_Bishop", target: "Hawkeye_Series" },
    { source: "Echo", target: "Hawkeye_Series" },
    { source: "YelenaBelova", target: "Hawkeye_Series" },
    { source: "LauraBarton", target: "Hawkeye_Series" },
    { source: "LilaBarton", target: "Hawkeye_Series" },
    { source: "CooperBarton", target: "Hawkeye_Series" },
    { source: "NathanielBarton", target: "Hawkeye_Series" },
    { source: "Derek_Bishop", target: "Hawkeye_Series" },
    { source: "Jack_Duquesne", target: "Hawkeye_Series" },
    { source: "Armand_Duquesne", target: "Hawkeye_Series" },
    { source: "Kazi", target: "Hawkeye_Series" },
    { source: "Kingpin", target: "Hawkeye_Series" },
    { source: "Ivan_Banionis", target: "Hawkeye_Series" },
    { source: "Tomas", target: "Hawkeye_Series" },
    { source: "William_Lopez", target: "Hawkeye_Series" },
    { source: "Enrique", target: "Hawkeye_Series" },
    { source: "Grills", target: "Hawkeye_Series" },

// "Spider_Man_3_Movie": { name: "Spider-Man: No Way Home", icon: "./pics/movies/Spider_Man_3.png" },
    { source: "SpiderMan", target: "Spider_Man_3_Movie" },
    { source: "MichelleJones", target: "Spider_Man_3_Movie" },
    { source: "DoctorStrange", target: "Spider_Man_3_Movie" },
    { source: "HappyHogan", target: "Spider_Man_3_Movie" },
    { source: "NedLeeds", target: "Spider_Man_3_Movie" },
    { source: "MayParker", target: "Spider_Man_3_Movie" },
    { source: "FlashThompson", target: "Spider_Man_3_Movie" },
    { source: "BettyBrant", target: "Spider_Man_3_Movie" },
    { source: "AndreWilson", target: "Spider_Man_3_Movie" },
    { source: "RogerHarrington", target: "Spider_Man_3_Movie" },
    { source: "JJonahJameson", target: "Spider_Man_3_Movie" },
    { source: "JuliusDell", target: "Spider_Man_3_Movie" },
    { source: "Electro", target: "Spider_Man_3_Movie" },
    { source: "Doctor_Octopus", target: "Spider_Man_3_Movie" },
    { source: "Sandman", target: "Spider_Man_3_Movie" },
    { source: "Green_Goblin", target: "Spider_Man_3_Movie" },
    { source: "Lizard", target: "Spider_Man_3_Movie" },
    { source: "Wong", target: "Spider_Man_3_Movie" },
    { source: "Spider-Man_Andrew", target: "Spider_Man_3_Movie" },
    { source: "Spider-Man_Tobey", target: "Spider_Man_3_Movie" },
    { source: "Daredevil", target: "Spider_Man_3_Movie" },



    // Moon Knight
    { source: "Moon_Knight", target: "Moonknight_Series" },
    { source: "Donna", target: "Moonknight_Series" },
    { source: "Arthur_Harrow", target: "Moonknight_Series" },
    { source: "Layla", target: "Moonknight_Series" },
    { source: "Anthon_Mogart", target: "Moonknight_Series" },
    { source: "Khonshu", target: "Moonknight_Series" },
    { source: "Tawaret", target: "Moonknight_Series" },


    // "DoctorStrange 2 Movie":
    { source: "DoctorStrange", target: "DoctorStrange_2_Movie" },
    { source: "ScarletWitch", target: "DoctorStrange_2_Movie" },
    { source: "Wong", target: "DoctorStrange_2_Movie" },
    { source: "ChristinePalmer", target: "DoctorStrange_2_Movie" },
    { source: "BaronMordo", target: "DoctorStrange_2_Movie" },
    { source: "America_Chavez", target: "DoctorStrange_2_Movie" },
    { source: "Rintrah", target: "DoctorStrange_2_Movie" },
    { source: "Strange_Supreme", target: "DoctorStrange_2_Movie" },
    { source: "Defender_Strange", target: "DoctorStrange_2_Movie" },
    { source: "Professor_X", target: "DoctorStrange_2_Movie" },
    { source: "Captain_Carter", target: "DoctorStrange_2_Movie" },
    { source: "Reed_Richards", target: "DoctorStrange_2_Movie" },
    { source: "Black_Bolt", target: "DoctorStrange_2_Movie" },
    { source: "Captain_Marvel_Rambeau", target: "DoctorStrange_2_Movie" },
    { source: "Hamir", target: "DoctorStrange_2_Movie" },
    { source: "Gargantos", target: "DoctorStrange_2_Movie" },





    // Secret Invasion
    { source: "NickFury", target: "SecretInvasion_Series" },
    { source: "Talos", target: "SecretInvasion_Series" },
    { source: "Hawkeye", target: "SecretInvasion_Series" },
    { source: "Falcon", target: "SecretInvasion_Series" },



// "BlackPanther_2_Movie": { name: "Black Panther: Wakanda Forever", icon: "./pics/movies/Black_Panther_2.jpeg" },
    { source: "Shuri", target: "BlackPanther_2_Movie" },


// "AntMan_3_Movie": { name: "Ant-Man & The Wasp: Quantumania", icon: "./pics/movies/AntMan_3.jpeg" },
    { source: "AntMan", target: "AntMan_3_Movie" },
    { source: "TheWasp", target: "AntMan_3_Movie" },
    { source: "HankPym", target: "AntMan_3_Movie" },
    { source: "JanetVanDyne", target: "AntMan_3_Movie" },
    { source: "CassieLang", target: "AntMan_3_Movie" },
    { source: "Luis", target: "AntMan_3_Movie" },
    { source: "YellowJacket", target: "AntMan_3_Movie" },
    { source: "JimPaxton", target: "AntMan_3_Movie" },
    { source: "Kang", target: "AntMan_3_Movie" },


    // She-Hulk Series
    { source: "She_Hulk", target: "SheHulk_Series" },
    { source: "Hulk", target: "SheHulk_Series" },
    { source: "Abomination", target: "SheHulk_Series" },

    // Ms. Marvel
    { source: "Ms_Marvel", target: "MsMarvel_Series" },


// "The_Marvels_Movie": { name: "The Marvels", icon: "./pics/movies/The_Marvels.jpeg" },
    { source: "CaptainMarvel", target: "The_Marvels_Movie" },
    { source: "Ms_Marvel", target: "The_Marvels_Movie" },
    { source: "MonicaRambeau", target: "The_Marvels_Movie" },



// "Thor_4_Movie": { name: "Thor: Love & Thunder", icon: "./pics/movies/Thor_4.jpeg" },
    { source: "Thor", target: "Thor_4_Movie" },
    { source: "JaneFoster", target: "Thor_4_Movie" },
    { source: "Valkyrie", target: "Thor_4_Movie" },
    { source: "Sif", target: "Thor_4_Movie" },
    { source: "StarLord", target: "Thor_4_Movie" },
    { source: "Drax", target: "Thor_4_Movie" },
    { source: "Mantis", target: "Thor_4_Movie" },
    { source: "Nebula", target: "Thor_4_Movie" },
    { source: "KraglinObfonteri", target: "Thor_4_Movie" },
    { source: "RocketRaccoon", target: "Thor_4_Movie" },
    { source: "Groot", target: "Thor_4_Movie" },
    { source: "Korg", target: "Thor_4_Movie" },
    { source: "Grandmaster", target: "Thor_4_Movie" },
    { source: "Miek", target: "Thor_4_Movie" },
    // { source: "Gorr", target: "Thor_4_Movie" },
    // { source: "Zeus", target: "Thor_4_Movie" },


    // Agatha_Series
    { source: "Agnes", target: "Agatha_Series" },

    // Echo_Series
    { source: "Echo", target: "Echo_Series" },


    // Armor Wars
    { source: "WarMachine", target: "ArmorWars_Series" },


    // I am Groot
    { source: "Groot", target: "IamGroot_Series" },


    // Netflix
    // Daredevil
    { source: "Daredevil", target: "Daredevil_Series" },
    { source: "Karen_Page", target: "Daredevil_Series" },
    { source: "Punisher", target: "Daredevil_Series" },
    { source: "Kingpin", target: "Daredevil_Series" },
    { source: "Claire_Temple", target: "Daredevil_Series" },

    // Jessica Jones
    { source: "Jessica_Jones", target: "Jessica_Jones_Series" },
    { source: "Luke_Cage", target: "Jessica_Jones_Series" },
    { source: "Claire_Temple", target: "Jessica_Jones_Series" },
    { source: "Kilgrave", target: "Jessica_Jones_Series" },
    { source: "Malcolm_Ducasse", target: "Jessica_Jones_Series" },

    // Luke Cage
    { source: "Luke_Cage", target: "Luke_Cage_Series" },
    { source: "Claire_Temple", target: "Luke_Cage_Series" },
    { source: "Cottonmouth", target: "Luke_Cage_Series" },
    { source: "Misty_Knight", target: "Luke_Cage_Series" },
    { source: "Shades", target: "Luke_Cage_Series" },
    { source: "Black_Mariah", target: "Luke_Cage_Series" },
    { source: "Iron_Fist", target: "Luke_Cage_Series" },
    { source: "Colleen_Wing", target: "Luke_Cage_Series" },

    // Iron Fist
    { source: "Iron_Fist", target: "Iron_Fist_Series" },
    { source: "Claire_Temple", target: "Iron_Fist_Series" },
    { source: "Misty_Knight", target: "Iron_Fist_Series" },
    { source: "Colleen_Wing", target: "Iron_Fist_Series" },

    // Punisher
    { source: "Punisher", target: "Punisher_Series" },
    { source: "Karen_Page", target: "Punisher_Series" },

    // The Defenders
    { source: "Daredevil", target: "Defenders_Series" },
    { source: "Luke_Cage", target: "Defenders_Series" },
    { source: "Iron_Fist", target: "Defenders_Series" },
    { source: "Colleen_Wing", target: "Defenders_Series" },
    { source: "Karen_Page", target: "Defenders_Series" },
    { source: "Malcolm_Ducasse", target: "Defenders_Series" },
    { source: "Claire_Temple", target: "Defenders_Series" },
    { source: "Misty_Knight", target: "Defenders_Series" },


    { source: "Spider-Man_Tobey", target: "Spider-Man_2002" },
    { source: "Green_Goblin", target: "Spider-Man_2002" },

    { source: "Spider-Man_Tobey", target: "Spider-Man_2_2004" },
    { source: "Doctor_Octopus", target: "Spider-Man_2_2004" },

    { source: "Spider-Man_Tobey", target: "Spider-Man_3_2007" },
    { source: "Sandman", target: "Spider-Man_3_2007" },

    { source: "Spider-Man_Andrew", target: "Amazing_Spider-Man_2012" },
    { source: "Lizard", target: "Amazing_Spider-Man_2012" },

    { source: "Spider-Man_Andrew", target: "Amazing_Spider-Man_2_2014" },
    { source: "Electro", target: "Amazing_Spider-Man_2_2014" },


    // Fox X-Men



    // X-Men
    { source: "Wolverine", target: "XMen"},
    { source: "Professor_X", target: "XMen"},
    { source: "Magneto", target: "XMen"},
    { source: "Jean_Grey_Famke_Janssen", target: "XMen"},
    { source: "Cyclops_James_Marsden", target: "XMen"},
    { source: "Storm", target: "XMen"},
    { source: "Rogue", target: "XMen"},
    { source: "Sabretooth_Liev_Schreiber", target: "XMen"},
    { source: "Toad_Ray_Park", target: "XMen"},
    { source: "Mystique_Rebecca_Romijn_Stamos", target: "XMen"},

    // X-Men 2
    { source: "Wolverine", target: "X2"},
    { source: "Professor_X", target: "X2"},
    { source: "Magneto", target: "X2"},
    { source: "Jean_Grey_Famke_Janssen", target: "X2"},
    { source: "Cyclops_James_Marsden", target: "X2"},
    { source: "Storm", target: "X2"},
    { source: "Rogue", target: "X2"},
    { source: "Mystique_Rebecca_Romijn_Stamos", target: "X2"},

    // X-men Last stand
    { source: "Wolverine", target: "XMen3_Last_Stand"},
    { source: "Professor_X", target: "XMen3_Last_Stand"},
    { source: "Magneto", target: "XMen3_Last_Stand"},
    { source: "Jean_Grey_Famke_Janssen", target: "XMen3_Last_Stand"},
    { source: "Cyclops_James_Marsden", target: "XMen3_Last_Stand"},
    { source: "Storm", target: "XMen3_Last_Stand"},
    { source: "Rogue", target: "XMen3_Last_Stand"},
    { source: "Mystique_Rebecca_Romijn_Stamos", target: "XMen3_Last_Stand"},

    // X-Men First Class
    { source: "Wolverine", target: "XMen_First_Class"},
    { source: "Young_Prof_X", target: "XMen_First_Class"},
    { source: "Storm", target: "XMen_First_Class"},
    { source: "Mystique_Jennifer_Lawrence", target: "XMen_First_Class"},

    // X-Men Days of Future Past
    { source: "Wolverine", target: "XMen_Days_of_Future_Past"},
    { source: "Professor_X", target: "XMen_Days_of_Future_Past"},
    { source: "Young_Prof_X", target: "XMen_Days_of_Future_Past"},
    { source: "Magneto", target: "XMen_Days_of_Future_Past"},
    { source: "Jean_Grey_Famke_Janssen", target: "XMen_Days_of_Future_Past"},
    { source: "Storm", target: "XMen_Days_of_Future_Past"},
    { source: "Rogue", target: "XMen_Days_of_Future_Past"},
    { source: "Toad_Evan_Jonigkeit", target: "XMen_Days_of_Future_Past"},
    { source: "Mystique_Jennifer_Lawrence", target: "XMen_Days_of_Future_Past"},

    // X-Men Apocalypse
    { source: "Wolverine", target: "XMen_Apocalypse"},
    { source: "Young_Prof_X", target: "XMen_Apocalypse"},
    { source: "Jean_Grey_Sophie_Turner", target: "XMen_Apocalypse"},
    { source: "Cyclops_Tye_Sheridan", target: "XMen_Apocalypse"},
    { source: "Mystique_Jennifer_Lawrence", target: "XMen_Apocalypse"},

    // X-Men Dark Phoenix
    { source: "Wolverine", target: "XMen_Dark_Phoenix"},
    { source: "Young_Prof_X", target: "XMen_Dark_Phoenix"},
    { source: "Jean_Grey_Sophie_Turner", target: "XMen_Dark_Phoenix"},
    { source: "Cyclops_Tye_Sheridan", target: "XMen_Dark_Phoenix"},
    { source: "Mystique_Jennifer_Lawrence", target: "XMen_Dark_Phoenix"},

    // Wolverine
    { source: "Wolverine", target: "XMen_Wolverine"},
    { source: "Professor_X", target: "XMen_Wolverine"},
    { source: "Cyclops_TimPocock", target: "XMen_Wolverine"},
    { source: "Sabretooth_Tyler_Mane", target: "XMen_Wolverine"},

    // Wolverine 2
    { source: "Wolverine", target: "The_Wolverine"},
    { source: "Professor_X", target: "The_Wolverine"},
    { source: "Jean_Grey_Famke_Janssen", target: "The_Wolverine"},
    { source: "Storm", target: "The_Wolverine"},

    // Logan
    { source: "Wolverine", target: "Logan"},
    { source: "Professor_X", target: "Logan"},
    { source: "Storm", target: "Logan"},

    // Deadpool
    { source: "Wolverine", target: "Deadpool"},
    { source: "Wolverine", target: "Deadpool_2"},



];



var width = 7500,
    height = 7500;

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, icon: link.icon});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, icon: link.icon});
});


var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(180)
    // .charge(-300)
    // .charge(function(d, i) { return i==0 ? -10000 : -500; })
    .charge(function(d, i) {
        if (i == 0) return -10000;
        if (i < 23) return -5000;
        return -2500;
    })
    .on("tick", tick)
    .start();



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link")
    .data(force.links())
    .enter().append("line")
    .attr("class", "link");

var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("class", "node")
    .attr("text-align", "center")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .call(force.drag);

var rect = node.append("rect")
    .attr("r", 42)
    .attr("class", function(d) { return "container " + d.universe; })
;

node.append("image")
    .attr("xlink:href", function(d) { return d.icon; })
    .attr("class", function(d) { return d.universe; })
    .attr("border", "55px red");


node.append("text")
    .attr("x", "-20px")
    .attr("y", "40px")
    .attr("dy", ".35em")
    .attr("text-align", "center")
    .attr("width", "80px")
    .text(function(d) { return d.name; });

function tick() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function mouseover() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 16);
}

function mouseout() {
    d3.select(this).select("circle").transition()
        .duration(750)
        .attr("r", 42);
}
