
var avatar = "./pics/default.png";

// var iron_man =
// var nodes = {};
// nodes["IronMan"] = {name: "Tony Stark - Iron Man", icon: "./pics/IronMan.jpeg"};


var nodes = {

    // The movies:

    // Phase 1:
    "IronMan_Movie": {name: "Iron Man", icon: "./pics/movies/Iron_Man.jpeg"},
    "Hulk_Movie": { name: "The Incredible Hulk", icon: "./pics/movies/TheIncredibleHulk.jpeg"},
    "IronMan2_Movie": {name: "Iron Man 2", icon: "./pics/movies/Iron_Man_2.jpeg"},
    "Thor_Movie": { name: "Thor", icon: "./pics/movies/Thor.jpeg"},
    "CaptainAmerica_Movie": { name: "Captain America: The First Avenger", icon: "./pics/movies/CaptainAmerica.jpeg"},
    "Avengers_Movie": { name: "The Avengers", icon: "./pics/movies/Avengers.jpeg"},

    // Phase 2:
    "IronMan3_Movie": {name: "Iron Man 3", icon: "./pics/movies/Iron_Man_3.jpeg"},
    "Thor2_Movie": { name: "Thor: The Dark World", icon: "./pics/movies/Thor_2.jpeg"},
    "CaptainAmerica2_Movie": { name: "Captain America: The Winter Soldier", icon: "./pics/movies/Captain_America_2.jpeg"},
    "Guardians_ot_Galaxy_Movie": { name: "Guardians of the Galaxy", icon: "./pics/movies/Guardians_ot_Galaxy.jpeg"},
    "Avengers2_Movie": { name: "Avengers: Age of Ultron", icon: "./pics/movies/Avengers_2.jpeg"},
    "AntMan_Movie": { name: "Ant-Man", icon: "./pics/movies/AntMan.png"},

    // Phase 3:
    "CaptainAmerica3_Movie": { name: "Captain America: Civil War", icon: "./pics/movies/Captain_America_3.jpeg"},
    "DoctorStrange_Movie": { name: "Doctor Strange", icon: "./pics/movies/DoctorStrange.jpeg"},
    "Guardians_ot_Galaxy2_Movie": { name: "Guardians of the Galaxy Vol. 2", icon: "./pics/movies/Guardians_ot_Galaxy_2.jpeg"},
    "SpiderMan_Movie": { name: "Spider-Man: Homecoming", icon: "./pics/movies/Spider_Man.jpeg"},
    "Thor3_Movie": { name: "Thor: Ragnarok", icon: "./pics/movies/Thor_3.jpeg"},
    "BlackPanther_Movie": { name: "Black Panther", icon: "./pics/movies/Black_Panther.jpeg"},
    "Avengers3_Movie": { name: "Avengers: Infinity War", icon: "./pics/movies/Avengers_3.jpeg"},
    "AntMan2_Movie": { name: "Ant-Man and the Wasp", icon: "./pics/movies/AntMan_2.jpeg"},
    "CaptainMarvel_Movie": { name: "Captain Marvel", icon: "./pics/movies/CaptainMarvel.jpeg"},
    "Avengers4_Movie": { name: "Avengers: Endgame", icon: "./pics/movies/Avengers_4.jpeg"},
    "SpiderMan2_Movie": { name: "Spider-Man: Far From Home", icon: "./pics/movies/Spider_Man_2.jpeg"},

    // Phase 4:
    "WandaVision_Series": { name: "WandaVision", icon: "./pics/series/WandaVision.jpg"},
    "FalconWinterSoldier_Series": { name: "The Falcon & The Winter Soldier", icon: "./pics/series/Falcon_and_the_Winter_Soldier.jpeg"},
    "Loki_Series": { name: "Loki", icon: "./pics/series/Loki.jpeg"},
    "BlackWidow_Movie": { name: "Black Widow", icon: "./pics/movies/Black_Widow.png"},
    "WhatIf_Series": { name: "What if...", icon: "./pics/series/whatif_S1.jpeg"},
    "Shang_Chi_Movie": { name: "Shang-Chi & the Legend of the Ten Rings", icon: "./pics/movies/Shang-Chi_movie.jpeg"},
    "Eternals_Movie": { name: "Eternals", icon: "./pics/movies/Eternals.jpeg"},

    // Unreleased:
    "Hawkeye_Series": { name: "Hawkeye", icon: "./pics/series/hawkeye.jpeg"},
    "Spider_Man_3_Movie": { name: "Spider-Man: No Way Home", icon: "./pics/movies/Spider_Man_3.jpeg"},
    "DoctorStrange_2_Movie": { name: "Doctor Strange in the Multiverse of Madness", icon: "./pics/movies/DoctorStrange_2.jpeg"},
    "Thor_4_Movie": { name: "Thor: Love & Thunder", icon: "./pics/movies/Thor_4.jpeg"},
    "Moonknight_Series": { name: "Moon Knight", icon: "./pics/series/moonknight.jpeg"},
    "SheHulk_Series": { name: "She-Hulk", icon: "./pics/series/she-hulk.jpeg"},
    "SecretInvasion_Series": { name: "Secret Invasion", icon: "./pics/series/secret_invasion.jpeg"},
    "MsMarvel_Series": { name: "Ms. Marvel", icon: "./pics/series/msmarvel.jpeg"},

    "IamGroot_Series": { name: "I am Groot", icon: "./pics/series/IamGroot.jpeg"},
    "Ironheart_Series": { name: "Ironheart", icon: "./pics/series/ironheart.jpeg"},
    "ArmorWars_Series": { name: "Armor Wars", icon: "./pics/series/Armor_Wars.jpeg"},

    "Agatha_Series": { name: "Agatha, House of Harkness", icon: "./pics/series/agatha.jpeg"},
    "Echo_Series": { name: "Echo", icon: "./pics/series/echo.jpeg"},
    "Marvel_Zombies_Series": { name: "Marvel Zombies", icon: "./pics/series/marvel_zombies.jpeg"},
    "WhatIf2_Series": { name: "What if... S2", icon: "./pics/series/whatif_S2.jpeg"},

    "BlackPanther_2_Movie": { name: "Black Panther: Wakanda Forever", icon: "./pics/movies/Black_Panther_2.jpeg"},
    "AntMan_3_Movie": { name: "Ant-Man & The Wasp: Quantumania", icon: "./pics/movies/AntMan_3.jpeg"},
    "The_Marvels_Movie": { name: "The Marvels", icon: "./pics/movies/The_Marvels.jpeg"},
    // "_Movie": { name: "", icon: "./pics/movies/"},
    // "_Movie": { name: "", icon: "./pics/movies/"},
    // "_Movie": { name: "", icon: "./pics/movies/"},

    // Iron Man characters:
    "IronMan": {name: "Tony Stark - Iron Man", icon: "./pics/iron_man/IronMan.jpeg"},
    "WarMachine": {name: "James Rhodes - War Machine", icon: "./pics/iron_man/WarMachine.jpeg"},
    "IronMonger": {name: "Obadiah Stane - Iron Monger", icon: "./pics/iron_man/IronMonger.jpeg"},
    "PepperPotts": {name: "Pepper Potts", icon: "./pics/iron_man/PepperPotts.jpeg"},
    "PhilCoulson": {name: "Agent Phil Coulson", icon: "./pics/shield/PhilCoulson.jpeg"},
    "JARVIS": {name: "J.A.R.V.I.S.", icon: "./pics/iron_man/JARVIS.png"},
    "HappyHogan": {name: "Happy Hogan", icon: "./pics/iron_man/HappyHogan.jpeg"},
    "HowardStark": {name: "Howard Stark", icon: "./pics/iron_man/HowardStark.png"},
    "NickFury": {name: "Nick Fury", icon: "./pics/shield/NickFury.jpeg"},
    "BlackWidow": {name: "Natasha Romanoff - Black Widow", icon: "./pics/black_widow/BlackWidow.jpeg"},
    "JustinHammer": {name: "Justin Hammer", icon: "./pics/iron_man/JustinHammer.jpeg"},
    "Whiplash": {name: "Ivan Vanko/Whiplash", icon: "./pics/iron_man/Whiplash.png"},
    "AntonVanko": {name: "Anton Vanko", icon: "./pics/iron_man/AntonVanko.png"},
    "AldrichKillian": {name: "Aldrich Killian", icon: "./pics/iron_man/AldrichKillian.jpeg"},
    "TrevorSlattery": {name: "Trevor Slattery", icon: "./pics/iron_man/TrevorSlattery.jpeg"},

    // Hulk Characters
    "Hulk": {name: "Bruce Banner - Hulk", icon: "./pics/hulk/Hulk.jpeg"},
    "ThaddeusRoss": {name: "Thaddeus Ross", icon: "./pics/hulk/ThaddeusRoss.png"},
    "Abomination": {name: "Blonsky - Abomination", icon: "./pics/hulk/Abomination.jpeg"},

    // Thor Characters
    "Thor": {name: "Thor", icon: "./pics/thor/Thor.jpeg"},
    "JaneFoster": {name: "Jane Foster", icon: "./pics/thor/JaneFoster.jpeg"},
    "Loki": {name: "Loki", icon: "./pics/thor/Loki.jpeg"},
    "Odin": {name: "Odin", icon: "./pics/thor/Odin.jpeg"},
    "ErikSelvig": {name: "Erik Selvig", icon: "./pics/thor/ErikSelvig.jpeg"},
    "DarcyLewis": {name: "Darcy Lewis", icon: "./pics/thor/DarcyLewis.jpeg"},
    "Heimdall": {name: "Heimdall", icon: "./pics/thor/Heimdall.jpeg"},
    "Volstagg": {name: "Volstagg", icon: "./pics/thor/Volstagg.jpeg"},
    "Hogun": {name: "Hogun", icon: "./pics/thor/Hogun.jpeg"},
    "Fandral": {name: "Fandral", icon: "./pics/thor/Fandral.jpeg"},
    "Sif": {name: "Sif", icon: "./pics/thor/Sif.jpeg"},
    "Frigga": {name: "Frigga", icon: "./pics/thor/Frigga.png"},
    "Laufey": {name: "Laufey", icon: "./pics/thor/Laufey.jpeg"},
    "JasperSitwell": {name: "Jasper Sitwell", icon: "./pics/captain_america/JasperSitwell.jpeg"},
    "Hawkeye": {name: "Clint Barton - Hawkeye", icon: "./pics/hawkeye/Hawkeye.jpeg"},
    "Malekith": {name: "Malekith", icon: "./pics/thor/Malekith.jpeg"},

    // Captain America Characters
    "CaptainAmerica": {name: "Steve Rogers - Captain America", icon: "./pics/captain_america/CaptainAmerica.jpeg"},
    "PeggyCarter": {name: "Peggy Carter", icon: "./pics/captain_america/PeggyCarter.jpeg"},
    "WinterSoldier": {name: "Bucky Barnes - Winter Soldier", icon: "./pics/captain_america/WinterSoldier.png"},
    "ChesterPhillips": {name: "Chester Phillips", icon: "./pics/captain_america/ChesterPhillips.png"},
    "RedSkull": {name: "Red Skull", icon: "./pics/captain_america/RedSkull.png"},
    "AbrahamErskine": {name: "Abraham Erskine", icon: "./pics/captain_america/AbrahamErskine.png"},
    "ArnimZola": {name: "Arnim Zola", icon: "./pics/captain_america/ArnimZola.png"},
    "DumDumDugan": {name: "Dum Dum Dugan", icon: "./pics/captain_america/DumDumDugan.png"},

    "MariaHill": {name: "Maria Hill", icon: "./pics/shield/MariaHill.jpeg"},

    "AlexanderPierce": {name: "Alexander Pierce", icon: "./pics/captain_america/AlexanderPierce.png"},
    "Falcon": {name: "Sam Wilson - Falcon", icon: "./pics/captain_america/Falcon.png"},
    "Crossbones": {name: "Brock Rumlow - Crossbones", icon: "./pics/captain_america/Crossbones.jpeg"},
    "SharonCarter": {name: "Sharon Carter", icon: "./pics/falcon_winter/Sharon_Carter.png"},
    "JackRollins": {name: "Jack Rollins", icon: "./pics/captain_america/JackRollins.png"},
    "Hawley": {name: "Hawley", icon: "./pics/captain_america/Hawley.png"},
    "Stern": {name: "Stern", icon: "./pics/iron_man/Stern.png"},
    "GeorgesBatroc": {name: "Georges Batroc", icon: "./pics/captain_america/GeorgesBatroc.jpeg"},
    "WolfgangVonStrucker": {name: "Wolfgang von Strucker", icon: "./pics/captain_america/WolfgangVonStrucker.jpeg"},
    "Zemo": {name: "Helmut Zemo", icon: "./pics/falcon_winter/Baron_Zemo.png"},
    "MariaStarke": {name: "MariaStarke", icon: "./pics/iron_man/MariaStarke.png"},
    "EverettRoss": {name: "Everett Ross", icon: "./pics/captain_america/EverettRoss.jpeg"},
    "Quicksilver": {name: "Pietro Maximoff - Quicksilver", icon: "./pics/Quicksilver.jpeg"},
    "ScarletWitch": {name: "Wanda Maximoff - Scarlet Witch", icon: "./pics/ScarletWitch.jpeg"},


    "TheOther": {name: "The Other", icon: "./pics/thor/TheOther.jpeg"},
    "Thanos": {name: "Thanos", icon: "./pics/guardians_ot_galaxy/Thanos.png"},

    // Guardians of the Galaxy characters
    "TivanTheCollector": {name: "Tivan, the Collector", icon: "./pics/guardians_ot_galaxy/TivanTheCollector.jpeg"},
    "Carina": {name: "Carina", icon: "./pics/guardians_ot_galaxy/Carina.png"},


    "StarLord": {name: "Peter Quill - Star-Lord", icon: "./pics/guardians_ot_galaxy/StarLord.jpeg"},
    "Gamora": {name: "Gamora", icon: "./pics/guardians_ot_galaxy/Gamora.jpeg"},
    "Drax": {name: "Drax, the Destroyer", icon: "./pics/guardians_ot_galaxy/Drax.jpeg"},
    "Groot": {name: "Groot", icon: "./pics/guardians_ot_galaxy/Groot.jpeg"},
    "RocketRaccoon": {name: "Rocket Raccoon", icon: "./pics/guardians_ot_galaxy/RocketRacoon.jpeg"},
    "RonanTheAccuser": {name: "Ronan, the Accuser", icon: "./pics/guardians_ot_galaxy/RonanTheAccuser.jpeg"},
    "YonduUdonta": {name: "Yondu Udonta", icon: "./pics/guardians_ot_galaxy/YonduUdonta.png"},
    "Nebula": {name: "Nebula", icon: "./pics/guardians_ot_galaxy/Nebula.jpeg"},
    "KorathThePursuer": {name: "Korath the Pursuer", icon: "./pics/guardians_ot_galaxy/KorathThePursuer.jpeg"},
    "MeredithQuill": {name: "Meredith Quill", icon: "./pics/guardians_ot_galaxy/MeredithQuill.png"},
    "KraglinObfonteri": {name: "Kraglin Obfonteri", icon: "./pics/guardians_ot_galaxy/KraglinObfonteri.jpeg"},
    "MrQuill": {name: "Peter Quill's Grandfather", icon: "./pics/guardians_ot_galaxy/MrQuill.png"},
    "Vorker": {name: "Vorker", icon: "./pics/guardians_ot_galaxy/Vorker.jpeg"},
    "HowardTheDuck": {name: "Howard the Duck", icon: "./pics/guardians_ot_galaxy/HowardTheDuck.png"},

    "LauraBarton": {name: "Laura Barton", icon: "./pics/hawkeye/LauraBarton.png"},
    "Ultron": {name: "Ultron", icon: "./pics/Ultron.jpeg"},
    "UlyssesKlaue": {name: "Ulysses Klaue", icon: "./pics/black_panther/UlyssesKlaue.jpeg"},
    "CooperBarton": {name: "Cooper Barton", icon: "./pics/hawkeye/CooperBarton.png"},
    "LilaBarton": {name: "Lila Barton", icon: "./pics/hawkeye/LilaBarton.jpeg"},
    "CameronKlein": {name: "Cameron Klein", icon: "./pics/captain_america/CameronKlein.png"},
    "FRIDAY": {name: "F.R.I.D.A.Y.", icon: "./pics/iron_man/FRIDAY.png"},
    "NathanielBarton": {name: "Nathaniel Barton", icon: "./pics/hawkeye/NathanielBarton.png"},
    "Vision": {name: "Vision", icon: "./pics/Vision.jpeg"},

    "AntMan": {name: "Scott Lang - Ant-Man", icon: "./pics/ant_man/AntMan.jpeg"},
    "HankPym": {name: "Doctor Hank Pym", icon: "./pics/ant_man/HankPym.jpeg"},
    "TheWasp": {name: "Hope van Dyne, The Wasp", icon: "./pics/ant_man/TheWasp.jpeg"},
    "YellowJacket": {name: "Darren Cross - Yellow Jacket", icon: "./pics/ant_man/YellowJacket.jpeg"},
    "JimPaxton": {name: "Jim Paxton", icon: "./pics/ant_man/JimPaxton.png"},
    "Luis": {name: "Luis", icon: "./pics/ant_man/Luis.jpeg"},
    "Dave": {name: "Dave", icon: "./pics/ant_man/Dave.jpeg"},
    "MaggieLang": {name: "Maggie Lang", icon: "./pics/ant_man/MaggieLang.png"},
    "CassieLang": {name: "Cassie Lang", icon: "./pics/ant_man/CassieLang.png"},
    "Kurt": {name: "Kurt", icon: "./pics/ant_man/Kurt.jpeg"},
    "JanetVanDyne": {name: "Janet van Dyne/Wasp", icon: "./pics/ant_man/JanetVanDyne.jpeg"},

    "DoctorStrange": {name: "Stephen Strange - Doctor Strange", icon: "./pics/doctor_strange/DoctorStrange.jpeg"},
    "Dormammu": {name: "Dormammu", icon: "./pics/doctor_strange/Dormammu.png"},
    "KarlMordo": {name: "Karl Mordo", icon: "./pics/doctor_strange/KarlMordo.png"},
    "ChristinePalmer": {name: "Christine Palmer", icon: "./pics/doctor_strange/ChristinePalmer.png"},
    "Wong": {name: "Wong", icon: "./pics/doctor_strange/Wong.jpeg"},
    "Kaecilius": {name: "Kaecilius", icon: "./pics/doctor_strange/Kaecilius.png"},
    "AncientOne": {name: "Ancient One", icon: "./pics/doctor_strange/AncientOne.png"},

    "Mantis": {name: "Mantis", icon: "./pics/guardians_ot_galaxy/Mantis.jpeg"},
    "Ego": {name: "Ego", icon: "./pics/guardians_ot_galaxy/Ego.png"},
    "Ayesha": {name: "Ayesha", icon: "./pics/guardians_ot_galaxy/Ayesha.png"},
    "Zylak": {name: "Zylak", icon: "./pics/guardians_ot_galaxy/Zylak.png"},
    "Taserface": {name: "Taserface", icon: "./pics/guardians_ot_galaxy/Taserface.jpg"},
    "Gef": {name: "Gef", icon: "./pics/guardians_ot_galaxy/Gef.png"},
    "Tullk": {name: "Tullk", icon: "./pics/guardians_ot_galaxy/Tullk.png"},
    "Retch": {name: "Retch", icon: "./pics/guardians_ot_galaxy/Retch.png"},
    "StakarOgord": {name: "Stakar Ogord", icon: "./pics/guardians_ot_galaxy/StakarOgord.jpeg"},
    "Charlie27": {name: "Charlie-27", icon: "./pics/guardians_ot_galaxy/Charlie27.jpeg"},
    "AletaOgord": {name: "Aleta Ogord", icon: "./pics/guardians_ot_galaxy/AletaOgord.jpeg"},
    "Martinex": {name: "Martinex", icon: "./pics/guardians_ot_galaxy/Martinex.jpeg"},
    "Krugarr": {name: "Krugarr", icon: "./pics/guardians_ot_galaxy/Krugarr.jpeg"},
    "Grandmaster": {name: "Grandmaster", icon: "./pics/thor/Grandmaster.jpeg"},

    "Executioner": {name: "Skurge - Executioner", icon: "./pics/thor/Executioner.png"},
    "Topaz": {name: "Topaz", icon: "./pics/thor/Topaz.jpeg"},
    "Hela": {name: "Hela", icon: "./pics/thor/Hela.jpeg"},
    "Korg": {name: "Korg", icon: "./pics/thor/Korg.jpeg"},
    "Miek": {name: "Miek", icon: "./pics/thor/Miek.png"},
    "Surtur": {name: "Surtur", icon: "./pics/thor/Surtur.png"},
    "Valkyrie": {name: "Valkyrie", icon: "./pics/thor/Valkyrie.jpeg"},


    // Spider-Man characters
    "SpiderMan": {name: "Peter Parker - Spider-Man", icon: "./pics/spiderman/SpiderMan.jpeg"},

    "BradDavis": {name: "Brad Davis", icon: "./pics/spiderman/Brad_Davis.png"},
    "MayParker": {name: "May Parker", icon: "./pics/spiderman/MayParker.png"},
    "Vulture": {name: "Adrian Toomes - Vulture", icon: "./pics/spiderman/Vulture.jpeg"},
    "MichelleJones": {name: "Michelle Jones", icon: "./pics/spiderman/MichelleJones.jpeg"},
    "Prowler": {name: "Aaron Davis - Prowler", icon: "./pics/spiderman/Prowler.png"},
    "RogerHarrington": {name: "Roger Harrington", icon: "./pics/spiderman/RogerHarrington.png"},
    "Tinkerer": {name: "Phineas Mason - Tinkerer", icon: "./pics/spiderman/Tinkerer.jpeg"},
    "NedLeeds": {name: "Ned Leeds", icon: "./pics/spiderman/NedLeeds.jpeg"},
    "LizToomes": {name: "Liz Toomes", icon: "./pics/spiderman/LizToomes.png"},
    "FlashThompson": {name: "Flash Thompson", icon: "./pics/spiderman/FlashThompson.png"},
    "Shocker": {name: "Herman Schultz - Shocker", icon: "./pics/spiderman/Shocker.jpeg"},
    "CindyMoon": {name: "Cindy Moon", icon: "./pics/spiderman/CindyMoon.png"},
    "AndreWilson": {name: "Andre Wilson", icon: "./pics/spiderman/AndreWilson.png"},
    "BettyBrant": {name: "Betty Brant", icon: "./pics/spiderman/BettyBrant.png"},
    "CharlesMurphy": {name: "Charles Murphy", icon: "./pics/spiderman/CharlesMurphy.png"},
    "Delmar": {name: "Delmar", icon: "./pics/spiderman/Delmar.png"},
    "JasonIonello": {name: "Jason Ionello", icon: "./pics/spiderman/JasonIonello.png"},
    "SallyAvrill": {name: "Sally Avrill", icon: "./pics/spiderman/SallyAvrill.png"},
    "TinyMcKeever": {name: "Tiny McKeever", icon: "./pics/spiderman/TinyMcKeever.png"},
    "Mysterio": {name: "Quentin Beck - Mysterio", icon: "./pics/spiderman/Mysterio.png"},
    "BradDavis": {name: "Brad Davis", icon: "./pics/spiderman/Brad_Davis.png"},
    "JuliusDell": {name: "Julius Dell", icon: "./pics/spiderman/Julius_Dell.png"},
    "PatKiernan": {source: "Pat Kiernan", icon: "./pics/spiderman/Patkiernan.jpeg"},
    "JJonahJameson": {source: "J. Jonah Jameson", icon: "./pics/spiderman/J._Jonah_Jameson.png"},
    "WilliamGinterRiva": {source: "William Ginter Riva", icon: "./pics/spiderman/William_Ginter_Riva.png"},
    "Seamstress": {source: "Seamstress", icon: "./pics/spiderman/Seamstress.png"},
    "Soren": {source: "Soren", icon: "./pics/spiderman/Soren.png"},





    "BlackPanther": {name: "T'Challa - Black Panther", icon: "./pics/black_panther/BlackPanther.jpeg"},
    "Killmonger": {name: "N'Jadaka - Erik Stevens - Killmonger", icon: "./pics/black_panther/Killmonger.jpeg"},
    "Nakia": {name: "Nakia", icon: "./pics/black_panther/Nakia.jpeg"},
    "Okoye": {name: "Okoye", icon: "./pics/black_panther/Okoye.jpeg"},
    "WKabi": {name: "W'Kabi", icon: "./pics/black_panther/WKabi.jpeg"},
    "Shuri": {name: "Shuri", icon: "./pics/black_panther/Shuri.jpeg"},
    "MBaku": {name: "M'Baku", icon: "./pics/black_panther/MBaku.jpeg"},
    "Ramonda": {name: "Ramonda", icon: "./pics/black_panther/Ramonda.jpeg"},
    "Zuri": {name: "Zuri", icon: "./pics/black_panther/Zuri.jpeg"},
    "NJobu": {name: "N'Jobu", icon: "./pics/black_panther/NJobu.png"},
    "Ayo": {name: "Ayo", icon: "./pics/falcon_winter/Ayo.jpeg"},
    "TChaka": {name: "T'Chaka", icon: "./pics/black_panther/TChaka.png"},
    "Yama": {name: "Yama", icon: "./pics/black_panther/Yama.png"},
    "Nomble": {name: "Nomble", icon: "./pics/black_panther/Nomble.png"},


    "Eitri": {name: "Eitri", icon: "./pics/avengers/Eitri.png"},
    "EbonyMaw": {name: "Ebony Maw", icon: "./pics/avengers/EbonyMaw.jpeg"},
    "ProximaMidnight": {name: "Proxima Midnight", icon: "./pics/avengers/ProximaMidnight.jpeg"},
    "CorvusGlaive": {name: "Corvus Glaive", icon: "./pics/avengers/CorvusGlaive.png"},
    "CullObsidian": {name: "Cull Obsidian", icon: "./pics/avengers/CullObsidian.jpg"},
    // "": {name: "", icon: "./pics/avengers/.png"},


    "BillFoster": {name: "Bill Foster", icon: "./pics/ant_man/BillFoster.png"},
    "Ghost": {name: "Ava Starr - Ghost", icon: "./pics/ant_man/Ghost.jpg"},
    "JimmyWoo": {name: "Agent Jimmy Woo", icon: "./pics/ant_man/JimmyWoo.jpeg"},
    "SonnyBurch": {name: "Sonny Burch", icon: "./pics/ant_man/SonnyBurch.jpeg"},


    "CaptainMarvel": {name: "Carol Danvers - Captain Marvel", icon: "./pics/captain_marvel/CaptainMarvel.jpeg"},
    "Talos": {name: "Talos / Director Keller", icon: "./pics/captain_marvel/Talos.jpeg"},
    "MariaRambeau": {name: "Maria Rambeau", icon: "./pics/captain_marvel/MariaRambeau.jpeg"},
    "MonicaRambeau": {name: "Monica Rambeau", icon: "./pics/captain_marvel/MonicaRambeau.jpeg"},
    "AttLass": {name: "Att-Lass", icon: "./pics/captain_marvel/AttLass.jpeg"},
    "YonRogg": {name: "Yon-Rogg", icon: "./pics/captain_marvel/YonRogg.jpeg"},
    "MarVell": {name: "Mar-Vell", icon: "./pics/captain_marvel/MarVell.jpeg"},
    "SupremeIntelligence": {name: "Supreme Intelligence", icon: "./pics/captain_marvel/SupremeIntelligence.png"},
    "MinnErva": {name: "Minn-Erva", icon: "./pics/captain_marvel/MinnErva.jpeg"},
    "BronChar": {name: "Bron-Char", icon: "./pics/captain_marvel/BronChar.jpeg"},
    "Soren": {name: "Soren", icon: "./pics/captain_marvel/Soren.png"},
    "Goose": {name: "Goose", icon: "./pics/captain_marvel/Goose.jpeg"},

    "MorganStark": {name: "MorganStark", icon: "./pics/avengers/MorganStark.png"},
    "EdwinJarvis": {name: "Edwin Jarvis", icon: "./pics/avengers/EdwinJarvis.png"},


    // WandaVision
    "Agnes": {name: "Agatha Harkness \/ Agnes", icon: "./pics/wandavision/Agatha_Harkness.jpeg"},
    "TylerHayward": {name: "Tyler Hayward", icon: "./pics/wandavision/Tyler_Hayward.png"},


    // Falcon & The Winter Soldier
    "US_Agent": {name: "John Walker - U.S. Agent", icon: "./pics/falcon_winter/US_Agent.jpeg"},
    "Karli": {name: "Karli Morgenthau", icon: "./pics/falcon_winter/Karli.jpeg"},
    "Joaquin_Torres": {name: "Joaquin Torres", icon: "./pics/falcon_winter/Joaquin_Torres.png"},
    "Battlestar": {name: "Lemar Hoskins - Battlestar", icon: "./pics/falcon_winter/Battlestar.png"},
    "Isaiah_Bradley": {name: "Isaiah Bradley", icon: "./pics/falcon_winter/Isaiah_Bradley.png"},

    // Loki
    "Mobius": {name: "Mobius", icon: "./pics/loki/Mobius_M._Mobius.png"},
    "PresidentLoki": {name: "President Loki", icon: "./pics/loki/President_Loki.jpeg"},
    "SylvieLaufeydottir": {name: "Sylvie Laufeydottir", icon: "./pics/loki/Sylvie.png"},
    "RavonnaRenslayer": {name: "Ravonna Renslayer", icon: "./pics/loki/Judge_Renslayer.png"},
    "HunterB-15": {name: "Hunter B-15", icon: "./pics/loki/Hunter_B15.png"},
    "HunterK-5E": {name: "Casey - Hunter K-5E", icon: "./pics/loki/Casey.png"},
    "HunterC-20": {name: "Hunter C-20", icon: "./pics/loki/Hunter_C-20.jpeg"},
    "KidLoki": {name: "Kid Loki", icon: "./pics/loki/Kid_Loki.jpeg"},
    "BoastfulLoki": {name: "Boastful Loki", icon: "./pics/loki/Boastful_Loki.jpeg"},
    "MissMinutes": {name: "Miss Minutes", icon: "./pics/loki/Miss_Minutes.png"},
    "ClassicLoki": {name: "ClassicLoki", icon: "./pics/loki/Classic_Loki.jpeg"},
    "HunterD-90": {name: "HunterD-90", icon: "./pics/loki/Hunter_D-90.png"},
    "Kang": {name: "Kang", icon: "./pics/loki/Kang.jpeg"},


    // Black Widow
    "YelenaBelova": {name: "Yelena Belova", icon: "./pics/black_widow/YelenaBelova.jpeg"},
    "MelinaVostokoff": {name: "Melina Vostokoff", icon: "./pics/black_widow/MelinaVostokoff.jpeg"},
    "RedGuardian": {name: "Alexei Shostakov - Red Guardian", icon: "./pics/black_widow/RedGuardian.jpeg"},
    "Dreykov": {name: "Dreykov", icon: "./pics/black_widow/Dreykov.png"},
    "Rick_Mason": {name: "Rick Mason", icon: "./pics/black_widow/Rick_Mason.jpeg"},
    "Task_Master": {name: "Task Master", icon: "./pics/black_widow/Task_Master.jpeg"},
    // "Lerato": {name: "Lerato", icon: "./pics/black_widow/Lerato.png"},
    // "Oksana": {name: "Oksana", icon: "./pics/black_widow/Oksana.png"},
    "Val": {name: "Contessa Valentina Allegra de Fontaine", icon: "./pics/black_widow/Val.png"},


    // Shang-Chi
    "ShangChi": {name: "Shang-Chi - Shaun", icon: "./pics/shang_chi/Shang-Chi.jpeg"},
    "KatyChen": {name: "Katy Chen", icon: "./pics/shang_chi/Katy.jpeg"},
    "Xialing": {name: "Xialing", icon: "./pics/shang_chi/Xialing.jpeg"},
    "YingLi": {name: "Ying Li", icon: "./pics/shang_chi/Jiang_Li.jpeg"},
    "RazorFist": {name: "Razor Fist", icon: "./pics/shang_chi/Razor_Fist.jpeg"},
    "YingNan": {name: "Ying Nan", icon: "./pics/shang_chi/Jiang_Nan.jpeg"},
    "Mandarin": {name: "Wenwu - Mandarin", icon: "./pics/shang_chi/Wenwu.jpeg"},
    "JonJon": {name: "Jon Jon", icon: "./pics/shang_chi/Jon_Jon.png"},
    "DeathDealer": {name: "Death Dealer", icon: "./pics/shang_chi/Death_Dealer.jpeg"},


    // Eternals
    "Sersi": {name: "Sersi", icon: "./pics/eternals/Sersi.jpeg"},
    "Ikaris": {name: "Ikaris", icon: "./pics/eternals/Ikaris.jpeg"},
    "Kingo": {name: "Kingo", icon: "./pics/eternals/Kingo.jpeg"},
    "Sprite": {name: "Sprite", icon: "./pics/eternals/Sprite.jpeg"},
    "Phastos": {name: "Phastos", icon: "./pics/eternals/Phastos.jpeg"},
    "Makkari": {name: "Makkari", icon: "./pics/eternals/Makkari.jpeg"},
    "Druig": {name: "Druig", icon: "./pics/eternals/Druig.jpeg"},
    "Gilgamesh": {name: "Gilgamesh", icon: "./pics/eternals/Gilgamesh.jpeg"},
    "Black_Knight": {name: "Dane Whitman - Black Knight", icon: "./pics/eternals/Black_Knight.png"},
    "Ajak": {name: "Ajak", icon: "./pics/eternals/Ajak.jpeg"},
    "Thena": {name: "Thena", icon: "./pics/eternals/Thena.jpeg"},
    "Karun": {name: "Karun", icon: "./pics/eternals/Karun.png"},
    "General_Kro": {name: "General Kro", icon: "./pics/eternals/Kro.png"},


    // Spider-Man 3: No way home
    "Doctor_Octopus": {source: "Otto Octavius - Doctor Octopus", icon: "./pics/spiderman/Doctor_Octopus.png"},
    "Green_Goblin": {source: "Norman Osborn/Green Goblin", icon: "./pics/spiderman/Green_Goblin.jpeg"},
    "Sandman": {source: "Flint Marko - Sandman", icon: "./pics/spiderman/Sandman.jpeg"},
    "Electro": {source: "Max Dillon - Electro", icon: "./pics/spiderman/Electro.jpeg"},

    // Hawkeye
    "Kate_Bishop": {source: "Kate Bishop", icon: "./pics/hawkeye/KateBishop.jpeg"},
    "Eleanor_Bishop": {source: "Eleanor Bishop", icon: "./pics/hawkeye/Eleanor_Bishop.png"},
    "Echo": {source: "Maya Lopez - Echo", icon: "./pics/hawkeye/Echo.png"},

    // She-Hulk
    "She_Hulk": {source: "Jennifer Walters - She-Hulk", icon: "./pics/shehulk/shehulk.png"},


    // Ms Marvel
    "Ms_Marvel": {source: "Kamala Khan - Ms. Marvel", icon: "./pics/msmarvel/Kamala.jpeg"},

    // Agatha, House of Harkness


    // Moon Knight
    "Moon_Knight": {source: "Marc Spector - Moon Knight", icon: "./pics/moonknight/Marc_Spector.jpeg"},


    // What If
    //     Starring Cast
    "Watcher": {source: "Uatu, The Watcher", icon: "./pics/whatif/Uatu_the_Watcher.png"},
    "Captain_Carter": {source: "Peggy Carter - Captain Carter", icon: "./pics/whatif/Captain_Carter.jpeg"},


};


var links = [

    {source: "IronMan", target: "IronMan_Movie"},
    {source: "WarMachine", target: "IronMan_Movie"},
    {source: "IronMonger", target: "IronMan_Movie"},
    {source: "PepperPotts", target: "IronMan_Movie"},
    {source: "PhilCoulson", target: "IronMan_Movie"},
    {source: "JARVIS", target: "IronMan_Movie"},
    {source: "HappyHogan", target: "IronMan_Movie"},
    {source: "HowardStark", target: "IronMan_Movie"},
    {source: "NickFury", target: "IronMan_Movie"},
    {source: "WilliamGinterRiva", target: "IronMan_Movie"},

    {source: "IronMan", target: "IronMan2_Movie"},
    {source: "WarMachine", target: "IronMan2_Movie"},
    {source: "PepperPotts", target: "IronMan2_Movie"},
    {source: "PhilCoulson", target: "IronMan2_Movie"},
    {source: "JARVIS", target: "IronMan2_Movie"},
    {source: "HappyHogan", target: "IronMan2_Movie"},
    {source: "HowardStark", target: "IronMan2_Movie"},
    {source: "NickFury", target: "IronMan2_Movie"},
    {source: "BlackWidow", target: "IronMan2_Movie"},
    {source: "JustinHammer", target: "IronMan2_Movie"},
    {source: "Whiplash", target: "IronMan2_Movie"},
    {source: "AntonVanko", target: "IronMan2_Movie"},
    {source: "Stern", target: "IronMan2_Movie"},


    {source: "IronMan", target: "IronMan3_Movie"},
    {source: "PepperPotts", target: "IronMan3_Movie"},
    {source: "WarMachine", target: "IronMan3_Movie"},
    {source: "HappyHogan", target: "IronMan3_Movie"},
    {source: "JARVIS", target: "IronMan3_Movie"},
    {source: "AldrichKillian", target: "IronMan3_Movie"},
    {source: "TrevorSlattery", target: "IronMan3_Movie"},
    {source: "PatKiernan", target: "IronMan3_Movie"},

    {source: "IronMan", target: "Hulk_Movie"},
    {source: "Hulk", target: "Hulk_Movie"},
    {source: "Abomination", target: "Hulk_Movie"},
    {source: "ThaddeusRoss", target: "Hulk_Movie"},

    {source: "Thor", target: "Thor_Movie"},
    {source: "JaneFoster", target: "Thor_Movie"},
    {source: "Loki", target: "Thor_Movie"},
    {source: "Odin", target: "Thor_Movie"},
    {source: "ErikSelvig", target: "Thor_Movie"},
    {source: "DarcyLewis", target: "Thor_Movie"},
    {source: "Heimdall", target: "Thor_Movie"},
    {source: "Volstagg", target: "Thor_Movie"},
    {source: "Hogun", target: "Thor_Movie"},
    {source: "Fandral", target: "Thor_Movie"},
    {source: "Sif", target: "Thor_Movie"},
    {source: "Frigga", target: "Thor_Movie"},
    {source: "JasperSitwell", target: "Thor_Movie"},
    {source: "Hawkeye", target: "Thor_Movie"},
    {source: "Laufey", target: "Thor_Movie"},
    {source: "PhilCoulson", target: "Thor_Movie"},
    {source: "NickFury", target: "Thor_Movie"},

    {source: "NickFury", target: "CaptainAmerica_Movie"},
    {source: "HowardStark", target: "CaptainAmerica_Movie"},
    {source: "CaptainAmerica", target: "CaptainAmerica_Movie"},
    {source: "PeggyCarter", target: "CaptainAmerica_Movie"},
    {source: "WinterSoldier", target: "CaptainAmerica_Movie"},
    {source: "ChesterPhillips", target: "CaptainAmerica_Movie"},
    {source: "RedSkull", target: "CaptainAmerica_Movie"},
    {source: "AbrahamErskine", target: "CaptainAmerica_Movie"},
    {source: "ArnimZola", target: "CaptainAmerica_Movie"},
    {source: "DumDumDugan", target: "CaptainAmerica_Movie"},

    {source: "IronMan", target: "Avengers_Movie"},
    {source: "CaptainAmerica", target: "Avengers_Movie"},
    {source: "Hulk", target: "Avengers_Movie"},
    {source: "Thor", target: "Avengers_Movie"},
    {source: "BlackWidow", target: "Avengers_Movie"},
    {source: "Hawkeye", target: "Avengers_Movie"},
    {source: "Loki", target: "Avengers_Movie"},
    {source: "PhilCoulson", target: "Avengers_Movie"},
    {source: "MariaHill", target: "Avengers_Movie"},
    {source: "TheOther", target: "Avengers_Movie"},
    {source: "Thanos", target: "Avengers_Movie"},
    {source: "ErikSelvig", target: "Avengers_Movie"},
    {source: "NickFury", target: "Avengers_Movie"},
    {source: "PepperPotts", target: "Avengers_Movie"},
    {source: "JARVIS", target: "Avengers_Movie"},
    {source: "JasperSitwell", target: "Avengers_Movie"},
    {source: "Hawley", target: "Avengers_Movie"},
    {source: "PatKiernan", target: "Avengers_Movie"},

    {source: "Thor", target: "Thor2_Movie"},
    {source: "JaneFoster", target: "Thor2_Movie"},
    {source: "Loki", target: "Thor2_Movie"},
    {source: "Malekith", target: "Thor2_Movie"},
    {source: "Sif", target: "Thor2_Movie"},
    {source: "Fandral", target: "Thor2_Movie"},
    {source: "Volstagg", target: "Thor2_Movie"},
    {source: "Hogun", target: "Thor2_Movie"},
    {source: "Heimdall", target: "Thor2_Movie"},
    {source: "Frigga", target: "Thor2_Movie"},
    {source: "DarcyLewis", target: "Thor2_Movie"},
    {source: "ErikSelvig", target: "Thor2_Movie"},
    {source: "TivanTheCollector", target: "Thor2_Movie"},
    {source: "Carina", target: "Thor2_Movie"},

    {source: "CaptainAmerica", target: "CaptainAmerica2_Movie"},
    {source: "NickFury", target: "CaptainAmerica2_Movie"},
    {source: "BlackWidow", target: "CaptainAmerica2_Movie"},
    {source: "AlexanderPierce", target: "CaptainAmerica2_Movie"},
    {source: "WinterSoldier", target: "CaptainAmerica2_Movie"},
    {source: "Falcon", target: "CaptainAmerica2_Movie"},
    {source: "MariaHill", target: "CaptainAmerica2_Movie"},
    {source: "Crossbones", target: "CaptainAmerica2_Movie"},
    {source: "JasperSitwell", target: "CaptainAmerica2_Movie"},
    {source: "SharonCarter", target: "CaptainAmerica2_Movie"},
    {source: "PeggyCarter", target: "CaptainAmerica2_Movie"},
    {source: "ArnimZola", target: "CaptainAmerica2_Movie"},
    {source: "Hawley", target: "CaptainAmerica2_Movie"},
    {source: "JackRollins", target: "CaptainAmerica2_Movie"},
    {source: "Stern", target: "CaptainAmerica2_Movie"},
    {source: "GeorgesBatroc", target: "CaptainAmerica2_Movie"},
    {source: "WolfgangVonStrucker", target: "CaptainAmerica2_Movie"},
    {source: "Quicksilver", target: "CaptainAmerica2_Movie"},
    {source: "ScarletWitch", target: "CaptainAmerica2_Movie"},
    {source: "CameronKlein", target: "CaptainAmerica2_Movie"},

    {source: "StarLord", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Gamora", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Drax", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Groot", target: "Guardians_ot_Galaxy_Movie"},
    {source: "RocketRaccoon", target: "Guardians_ot_Galaxy_Movie"},
    {source: "RonanTheAccuser", target: "Guardians_ot_Galaxy_Movie"},
    {source: "YonduUdonta", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Nebula", target: "Guardians_ot_Galaxy_Movie"},
    {source: "KorathThePursuer", target: "Guardians_ot_Galaxy_Movie"},
    {source: "MeredithQuill", target: "Guardians_ot_Galaxy_Movie"},
    {source: "KraglinObfonteri", target: "Guardians_ot_Galaxy_Movie"},
    {source: "MrQuill", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Vorker", target: "Guardians_ot_Galaxy_Movie"},
    {source: "HowardTheDuck", target: "Guardians_ot_Galaxy_Movie"},
    {source: "TivanTheCollector", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Carina", target: "Guardians_ot_Galaxy_Movie"},
    {source: "TheOther", target: "Guardians_ot_Galaxy_Movie"},
    {source: "Thanos", target: "Guardians_ot_Galaxy_Movie"},


    {source: "IronMan", target: "Avengers2_Movie"},
    {source: "Thor", target: "Avengers2_Movie"},
    {source: "Hulk", target: "Avengers2_Movie"},
    {source: "CaptainAmerica", target: "Avengers2_Movie"},
    {source: "BlackWidow", target: "Avengers2_Movie"},
    {source: "Hawkeye", target: "Avengers2_Movie"},
    {source: "WarMachine", target: "Avengers2_Movie"},
    {source: "Quicksilver", target: "Avengers2_Movie"},
    {source: "ScarletWitch", target: "Avengers2_Movie"},
    {source: "JARVIS", target: "Avengers2_Movie"},
    {source: "MariaHill", target: "Avengers2_Movie"},
    {source: "Falcon", target: "Avengers2_Movie"},
    {source: "PeggyCarter", target: "Avengers2_Movie"},
    {source: "Heimdall", target: "Avengers2_Movie"},
    {source: "LauraBarton", target: "Avengers2_Movie"},
    {source: "ErikSelvig", target: "Avengers2_Movie"},
    {source: "WolfgangVonStrucker", target: "Avengers2_Movie"},
    {source: "Ultron", target: "Avengers2_Movie"},
    {source: "Vision", target: "Avengers2_Movie"},
    {source: "NickFury", target: "Avengers2_Movie"},
    {source: "UlyssesKlaue", target: "Avengers2_Movie"},
    {source: "CooperBarton", target: "Avengers2_Movie"},
    {source: "LilaBarton", target: "Avengers2_Movie"},
    {source: "CameronKlein", target: "Avengers2_Movie"},
    {source: "FRIDAY", target: "Avengers2_Movie"},
    {source: "NathanielBarton", target: "Avengers2_Movie"},
    {source: "Thanos", target: "Avengers2_Movie"},

    {source: "AntMan", target: "AntMan_Movie"},
    {source: "HankPym", target: "AntMan_Movie"},
    {source: "TheWasp", target: "AntMan_Movie"},
    {source: "YellowJacket", target: "AntMan_Movie"},
    {source: "JimPaxton", target: "AntMan_Movie"},
    {source: "Luis", target: "AntMan_Movie"},
    {source: "Dave", target: "AntMan_Movie"},
    {source: "MaggieLang", target: "AntMan_Movie"},
    {source: "CassieLang", target: "AntMan_Movie"},
    {source: "Kurt", target: "AntMan_Movie"},
    {source: "JanetVanDyne", target: "AntMan_Movie"},
    {source: "Falcon", target: "AntMan_Movie"},
    {source: "PeggyCarter", target: "AntMan_Movie"},
    {source: "HowardStark", target: "AntMan_Movie"},

    {source: "CaptainAmerica", target: "CaptainAmerica3_Movie"},
    {source: "IronMan", target: "CaptainAmerica3_Movie"},
    {source: "BlackWidow", target: "CaptainAmerica3_Movie"},
    {source: "WinterSoldier", target: "CaptainAmerica3_Movie"},
    {source: "Falcon", target: "CaptainAmerica3_Movie"},
    {source: "WarMachine", target: "CaptainAmerica3_Movie"},
    {source: "Hawkeye", target: "CaptainAmerica3_Movie"},
    {source: "BlackPanther", target: "CaptainAmerica3_Movie"},
    {source: "Vision", target: "CaptainAmerica3_Movie"},
    {source: "ScarletWitch", target: "CaptainAmerica3_Movie"},
    {source: "AntMan", target: "CaptainAmerica3_Movie"},
    {source: "SharonCarter", target: "CaptainAmerica3_Movie"},
    {source: "SpiderMan", target: "CaptainAmerica3_Movie"},
    {source: "Zemo", target: "CaptainAmerica3_Movie"},
    {source: "Crossbones", target: "CaptainAmerica3_Movie"},
    {source: "ThaddeusRoss", target: "CaptainAmerica3_Movie"},
    {source: "EverettRoss", target: "CaptainAmerica3_Movie"},
    {source: "MayParker", target: "CaptainAmerica3_Movie"},
    {source: "TChaka", target: "CaptainAmerica3_Movie"},
    {source: "HowardStark", target: "CaptainAmerica3_Movie"},
    {source: "MariaStarke", target: "CaptainAmerica3_Movie"},
    {source: "Ayo", target: "CaptainAmerica3_Movie"},


    {source: "DoctorStrange", target: "DoctorStrange_Movie"},
    {source: "Dormammu", target: "DoctorStrange_Movie"},
    {source: "KarlMordo", target: "DoctorStrange_Movie"},
    {source: "ChristinePalmer", target: "DoctorStrange_Movie"},
    {source: "Wong", target: "DoctorStrange_Movie"},
    {source: "Kaecilius", target: "DoctorStrange_Movie"},
    {source: "AncientOne", target: "DoctorStrange_Movie"},
    {source: "Thor", target: "DoctorStrange_Movie"},
    {source: "PatKiernan", target: "DoctorStrange_Movie"},


    {source: "StarLord", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Gamora", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Drax", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Groot", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "RocketRaccoon", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Mantis", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "YonduUdonta", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Nebula", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Ego", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Ayesha", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Zylak", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Taserface", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Gef", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Tullk", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Retch", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "StakarOgord", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Charlie27", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "AletaOgord", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Martinex", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "MeredithQuill", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "MrQuill", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "HowardTheDuck", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Vorker", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Grandmaster", target: "Guardians_ot_Galaxy2_Movie"},
    {source: "Krugarr", target: "Guardians_ot_Galaxy2_Movie"},


    {source: "Thor", target: "Thor3_Movie"},
    {source: "Loki", target: "Thor3_Movie"},
    {source: "Hulk", target: "Thor3_Movie"},
    {source: "Hela", target: "Thor3_Movie"},
    {source: "Valkyrie", target: "Thor3_Movie"},
    {source: "Heimdall", target: "Thor3_Movie"},
    {source: "Odin", target: "Thor3_Movie"},
    {source: "Executioner", target: "Thor3_Movie"},
    {source: "Grandmaster", target: "Thor3_Movie"},
    {source: "Volstagg", target: "Thor3_Movie"},
    {source: "Fandral", target: "Thor3_Movie"},
    {source: "Hogun", target: "Thor3_Movie"},
    {source: "Topaz", target: "Thor3_Movie"},
    {source: "DoctorStrange", target: "Thor3_Movie"},
    {source: "Miek", target: "Thor3_Movie"},
    {source: "Korg", target: "Thor3_Movie"},
    {source: "Surtur", target: "Thor3_Movie"},

    {source: "SpiderMan", target: "SpiderMan_Movie"},
    {source: "MayParker", target: "SpiderMan_Movie"},
    {source: "Vulture", target: "SpiderMan_Movie"},
    {source: "IronMan", target: "SpiderMan_Movie"},
    {source: "HappyHogan", target: "SpiderMan_Movie"},
    {source: "PepperPotts", target: "SpiderMan_Movie"},
    {source: "MichelleJones", target: "SpiderMan_Movie"},
    {source: "Prowler", target: "SpiderMan_Movie"},
    {source: "RogerHarrington", target: "SpiderMan_Movie"},
    {source: "RogerHarrington", target: "Hulk_Movie"},
    {source: "Tinkerer", target: "SpiderMan_Movie"},
    {source: "NedLeeds", target: "SpiderMan_Movie"},
    {source: "LizToomes", target: "SpiderMan_Movie"},
    {source: "FlashThompson", target: "SpiderMan_Movie"},
    {source: "Shocker", target: "SpiderMan_Movie"},
    {source: "CindyMoon", target: "SpiderMan_Movie"},
    {source: "AndreWilson", target: "SpiderMan_Movie"},
    {source: "BettyBrant", target: "SpiderMan_Movie"},
    {source: "CharlesMurphy", target: "SpiderMan_Movie"},
    {source: "Delmar", target: "SpiderMan_Movie"},
    {source: "JasonIonello", target: "SpiderMan_Movie"},
    {source: "SallyAvrill", target: "SpiderMan_Movie"},
    {source: "TinyMcKeever", target: "SpiderMan_Movie"},

    {source: "BlackPanther", target: "BlackPanther_Movie"},
    {source: "Killmonger", target: "BlackPanther_Movie"},
    {source: "Nakia", target: "BlackPanther_Movie"},
    {source: "Okoye", target: "BlackPanther_Movie"},
    {source: "EverettRoss", target: "BlackPanther_Movie"},
    {source: "WKabi", target: "BlackPanther_Movie"},
    {source: "Shuri", target: "BlackPanther_Movie"},
    {source: "MBaku", target: "BlackPanther_Movie"},
    {source: "Ramonda", target: "BlackPanther_Movie"},
    {source: "Zuri", target: "BlackPanther_Movie"},
    {source: "UlyssesKlaue", target: "BlackPanther_Movie"},
    {source: "NJobu", target: "BlackPanther_Movie"},
    {source: "Ayo", target: "BlackPanther_Movie"},
    {source: "TChaka", target: "BlackPanther_Movie"},
    {source: "Nomble", target: "BlackPanther_Movie"},
    {source: "Yama", target: "BlackPanther_Movie"},
    {source: "WinterSoldier", target: "BlackPanther_Movie"},

    {source: "IronMan", target: "Avengers3_Movie"},
    {source: "Thor", target: "Avengers3_Movie"},
    {source: "Hulk", target: "Avengers3_Movie"},
    {source: "CaptainAmerica", target: "Avengers3_Movie"},
    {source: "BlackWidow", target: "Avengers3_Movie"},
    {source: "WarMachine", target: "Avengers3_Movie"},
    {source: "DoctorStrange", target: "Avengers3_Movie"},
    {source: "SpiderMan", target: "Avengers3_Movie"},
    {source: "BlackPanther", target: "Avengers3_Movie"},
    {source: "Gamora", target: "Avengers3_Movie"},
    {source: "Nebula", target: "Avengers3_Movie"},
    {source: "Loki", target: "Avengers3_Movie"},
    {source: "Vision", target: "Avengers3_Movie"},
    {source: "ScarletWitch", target: "Avengers3_Movie"},
    {source: "Falcon", target: "Avengers3_Movie"},
    {source: "WinterSoldier", target: "Avengers3_Movie"},
    {source: "Heimdall", target: "Avengers3_Movie"},
    {source: "Okoye", target: "Avengers3_Movie"},
    {source: "Eitri", target: "Avengers3_Movie"},
    {source: "Wong", target: "Avengers3_Movie"},
    {source: "Mantis", target: "Avengers3_Movie"},
    {source: "Drax", target: "Avengers3_Movie"},
    {source: "Groot", target: "Avengers3_Movie"},
    {source: "RocketRaccoon", target: "Avengers3_Movie"},
    {source: "PepperPotts", target: "Avengers3_Movie"},
    {source: "TivanTheCollector", target: "Avengers3_Movie"},
    {source: "Thanos", target: "Avengers3_Movie"},
    {source: "StarLord", target: "Avengers3_Movie"},
    {source: "ThaddeusRoss", target: "Avengers3_Movie"},
    {source: "Shuri", target: "Avengers3_Movie"},
    {source: "CullObsidian", target: "Avengers3_Movie"},
    {source: "EbonyMaw", target: "Avengers3_Movie"},
    {source: "ProximaMidnight", target: "Avengers3_Movie"},
    {source: "CorvusGlaive", target: "Avengers3_Movie"},
    {source: "MBaku", target: "Avengers3_Movie"},
    {source: "Ayo", target: "Avengers3_Movie"},
    {source: "FRIDAY", target: "Avengers3_Movie"},
    {source: "NedLeeds", target: "Avengers3_Movie"},
    {source: "CindyMoon", target: "Avengers3_Movie"},
    {source: "SallyAvrill", target: "Avengers3_Movie"},
    {source: "TinyMcKeever", target: "Avengers3_Movie"},
    {source: "CharlesMurphy", target: "Avengers3_Movie"},
    {source: "RedSkull", target: "Avengers3_Movie"},
    {source: "Nomble", target: "Avengers3_Movie"},
    {source: "Yama", target: "Avengers3_Movie"},
    {source: "NickFury", target: "Avengers3_Movie"},
    {source: "MariaHill", target: "Avengers3_Movie"},
    {source: "HappyHogan", target: "Avengers3_Movie"},



    {source: "AntMan", target: "AntMan2_Movie"},
    {source: "HankPym", target: "AntMan2_Movie"},
    {source: "TheWasp", target: "AntMan2_Movie"},
    {source: "JimPaxton", target: "AntMan2_Movie"},
    {source: "Luis", target: "AntMan2_Movie"},
    {source: "Dave", target: "AntMan2_Movie"},
    {source: "MaggieLang", target: "AntMan2_Movie"},
    {source: "CassieLang", target: "AntMan2_Movie"},
    {source: "Kurt", target: "AntMan2_Movie"},
    {source: "JanetVanDyne", target: "AntMan2_Movie"},
    {source: "BillFoster", target: "AntMan2_Movie"},
    {source: "Ghost", target: "AntMan2_Movie"},
    {source: "JimmyWoo", target: "AntMan2_Movie"},
    {source: "SonnyBurch", target: "AntMan2_Movie"},

    {source: "KorathThePursuer", target: "CaptainMarvel_Movie"},
    {source: "RonanTheAccuser", target: "CaptainMarvel_Movie"},
    {source: "NickFury", target: "CaptainMarvel_Movie"},
    {source: "PhilCoulson", target: "CaptainMarvel_Movie"},
    {source: "CaptainMarvel", target: "CaptainMarvel_Movie"},
    {source: "Talos", target: "CaptainMarvel_Movie"},
    {source: "MariaRambeau", target: "CaptainMarvel_Movie"},
    {source: "MonicaRambeau", target: "CaptainMarvel_Movie"},
    {source: "AttLass", target: "CaptainMarvel_Movie"},
    {source: "YonRogg", target: "CaptainMarvel_Movie"},
    {source: "MarVell", target: "CaptainMarvel_Movie"},
    {source: "SupremeIntelligence", target: "CaptainMarvel_Movie"},
    {source: "MinnErva", target: "CaptainMarvel_Movie"},
    {source: "BronChar", target: "CaptainMarvel_Movie"},
    {source: "Soren", target: "CaptainMarvel_Movie"},
    {source: "Goose", target: "CaptainMarvel_Movie"},
    {source: "Soren", target: "CaptainMarvel_Movie"},

    {source: "IronMan", target: "Avengers4_Movie"},
    {source: "CaptainAmerica", target: "Avengers4_Movie"},
    {source: "Hulk", target: "Avengers4_Movie"},
    {source: "Thor", target: "Avengers4_Movie"},
    {source: "BlackWidow", target: "Avengers4_Movie"},
    {source: "Hawkeye", target: "Avengers4_Movie"},
    {source: "WarMachine", target: "Avengers4_Movie"},
    {source: "AntMan", target: "Avengers4_Movie"},
    {source: "DoctorStrange", target: "Avengers4_Movie"},
    {source: "BlackPanther", target: "Avengers4_Movie"},
    {source: "CaptainMarvel", target: "Avengers4_Movie"},
    {source: "SpiderMan", target: "Avengers4_Movie"},
    {source: "Nebula", target: "Avengers4_Movie"},
    {source: "Gamora", target: "Avengers4_Movie"},
    {source: "TheWasp", target: "Avengers4_Movie"},
    {source: "Valkyrie", target: "Avengers4_Movie"},
    {source: "Frigga", target: "Avengers4_Movie"},
    {source: "ScarletWitch", target: "Avengers4_Movie"},
    {source: "Falcon", target: "Avengers4_Movie"},
    {source: "WinterSoldier", target: "Avengers4_Movie"},
    {source: "Loki", target: "Avengers4_Movie"},
    {source: "Okoye", target: "Avengers4_Movie"},
    {source: "Wong", target: "Avengers4_Movie"},
    {source: "Mantis", target: "Avengers4_Movie"},
    {source: "Drax", target: "Avengers4_Movie"},
    {source: "Shuri", target: "Avengers4_Movie"},
    {source: "HowardStark", target: "Avengers4_Movie"},
    {source: "AncientOne", target: "Avengers4_Movie"},
    {source: "HappyHogan", target: "Avengers4_Movie"},
    {source: "PeggyCarter", target: "Avengers4_Movie"},
    {source: "JaneFoster", target: "Avengers4_Movie"},
    {source: "MayParker", target: "Avengers4_Movie"},
    {source: "Korg", target: "Avengers4_Movie"},
    {source: "Ramonda", target: "Avengers4_Movie"},
    {source: "HankPym", target: "Avengers4_Movie"},
    {source: "JanetVanDyne", target: "Avengers4_Movie"},
    {source: "ThaddeusRoss", target: "Avengers4_Movie"},
    {source: "MariaHill", target: "Avengers4_Movie"},
    {source: "RocketRaccoon", target: "Avengers4_Movie"},
    {source: "MBaku", target: "Avengers4_Movie"},
    {source: "LauraBarton", target: "Avengers4_Movie"},
    {source: "JasperSitwell", target: "Avengers4_Movie"},
    {source: "Crossbones", target: "Avengers4_Movie"},
    {source: "EbonyMaw", target: "Avengers4_Movie"},
    {source: "NedLeeds", target: "Avengers4_Movie"},
    {source: "Groot", target: "Avengers4_Movie"},
    {source: "PepperPotts", target: "Avengers4_Movie"},
    {source: "AlexanderPierce", target: "Avengers4_Movie"},
    {source: "Thanos", target: "Avengers4_Movie"},
    {source: "StarLord", target: "Avengers4_Movie"},
    {source: "NickFury", target: "Avengers4_Movie"},
    {source: "RedSkull", target: "Avengers4_Movie"},
    {source: "CassieLang", target: "Avengers4_Movie"},
    {source: "CorvusGlaive", target: "Avengers4_Movie"},
    {source: "FRIDAY", target: "Avengers4_Movie"},
    {source: "CooperBarton", target: "Avengers4_Movie"},
    {source: "LilaBarton", target: "Avengers4_Movie"},
    {source: "NathanielBarton", target: "Avengers4_Movie"},
    {source: "ProximaMidnight", target: "Avengers4_Movie"},
    {source: "JimmyWoo", target: "Avengers4_Movie"},
    {source: "Miek", target: "Avengers4_Movie"},
    {source: "EdwinJarvis", target: "Avengers4_Movie"},
    {source: "MorganStark", target: "Avengers4_Movie"},


    // TODO:
    // Spiderman Far From Home
    {source: "SpiderMan", target: "SpiderMan2_Movie"},
    {source: "AndreWilson", target: "SpiderMan2_Movie"},
    {source: "BettyBrant", target: "SpiderMan2_Movie"},
    {source: "CharlesMurphy", target: "SpiderMan2_Movie"},
    {source: "CindyMoon", target: "SpiderMan2_Movie"},
    {source: "Delmar", target: "SpiderMan2_Movie"},
    {source: "FlashThompson", target: "SpiderMan2_Movie"},
    {source: "HappyHogan", target: "SpiderMan2_Movie"},
    {source: "JasonIonello", target: "SpiderMan2_Movie"},
    {source: "LizToomes", target: "SpiderMan2_Movie"},
    {source: "MariaHill", target: "SpiderMan2_Movie"},
    {source: "MayParker", target: "SpiderMan2_Movie"},
    {source: "MichelleJones", target: "SpiderMan2_Movie"},
    {source: "Mysterio", target: "SpiderMan2_Movie"},
    {source: "NedLeeds", target: "SpiderMan2_Movie"},
    {source: "NickFury", target: "SpiderMan2_Movie"},
    {source: "RogerHarrington", target: "SpiderMan2_Movie"},
    {source: "SallyAvrill", target: "SpiderMan2_Movie"},
    {source: "Talos", target: "SpiderMan2_Movie"},
    {source: "TinyMcKeever", target: "SpiderMan2_Movie"},
    {source: "BradDavis", target: "SpiderMan2_Movie"},
    {source: "JuliusDell", target: "SpiderMan2_Movie"},
    {source: "PatKiernan", target: "SpiderMan2_Movie"},
    {source: "JJonahJameson", target: "SpiderMan2_Movie"},
    {source: "WilliamGinterRiva", target: "SpiderMan2_Movie"},
    {source: "Seamstress", target: "SpiderMan2_Movie"},
    {source: "Soren", target: "SpiderMan2_Movie"},


    // WandaVision
    {source: "Vision", target: "WandaVision_Series"},
    {source: "ScarletWitch", target: "WandaVision_Series"},
    {source: "JimmyWoo", target: "WandaVision_Series"},
    {source: "DarcyLewis", target: "WandaVision_Series"},
    {source: "Agnes", target: "WandaVision_Series"},
    {source: "TylerHayward", target: "WandaVision_Series"},
    {source: "MonicaRambeau", target: "WandaVision_Series"},

    // Falcon & The Winter Soldier
    {source: "Falcon", target: "FalconWinterSoldier_Series"},
    {source: "WinterSoldier", target: "FalconWinterSoldier_Series"},
    {source: "Val", target: "FalconWinterSoldier_Series"},
    {source: "US_Agent", target: "FalconWinterSoldier_Series"},
    {source: "Karli", target: "FalconWinterSoldier_Series"},
    {source: "Joaquin_Torres", target: "FalconWinterSoldier_Series"},
    {source: "Battlestar", target: "FalconWinterSoldier_Series"},
    {source: "Isaiah_Bradley", target: "FalconWinterSoldier_Series"},
    {source: "SharonCarter", target: "FalconWinterSoldier_Series"},
    {source: "Ayo", target: "FalconWinterSoldier_Series"},
    {source: "GeorgesBatroc", target: "FalconWinterSoldier_Series"},
    {source: "Zemo", target: "FalconWinterSoldier_Series"},
    {source: "WarMachine", target: "FalconWinterSoldier_Series"},


    // Loki
    {source: "Loki", target: "Loki_Series"},
    {source: "Mobius", target: "Loki_Series"},
    {source: "Sif", target: "Loki_Series"},
    {source: "PresidentLoki", target: "Loki_Series"},
    {source: "SylvieLaufeydottir", target: "Loki_Series"},
    {source: "RavonnaRenslayer", target: "Loki_Series"},
    {source: "HunterB-15", target: "Loki_Series"},
    {source: "HunterK-5E", target: "Loki_Series"},
    {source: "HunterC-20", target: "Loki_Series"},
    {source: "KidLoki", target: "Loki_Series"},
    {source: "BoastfulLoki", target: "Loki_Series"},
    {source: "MissMinutes", target: "Loki_Series"},
    {source: "ClassicLoki", target: "Loki_Series"},
    {source: "HunterD-90", target: "Loki_Series"},
    {source: "Kang", target: "Loki_Series"},
    {source: "BlackWidow", target: "BlackWidow_Movie"},


    // Black Widow
    {source: "YelenaBelova", target: "BlackWidow_Movie"},
    {source: "MelinaVostokoff", target: "BlackWidow_Movie"},
    {source: "RedGuardian", target: "BlackWidow_Movie"},
    {source: "Dreykov", target: "BlackWidow_Movie"},
    {source: "Rick_Mason", target: "BlackWidow_Movie"},
    {source: "Task_Master", target: "BlackWidow_Movie"},
    {source: "Val", target: "BlackWidow_Movie"},
    {source: "ThaddeusRoss", target: "BlackWidow_Movie"},
    {source: "ShangChi", target: "Shang_Chi_Movie"},


    // What if.....
    {source: "Watcher", target: "WhatIf_Series"},
    {source: "Captain_Carter", target: "WhatIf_Series"},

    {source: "Watcher", target: "WhatIf2_Series"},
    {source: "Captain_Carter", target: "WhatIf2_Series"},

    // Shang-Chi
// "Shang_Chi_Movie": { name: "Shang-Chi & the Legend of the Ten Rings", icon: "./pics/movies/Shang_Chi.jpeg"},
    {source: "KatyChen", target: "Shang_Chi_Movie"},
    {source: "Xialing", target: "Shang_Chi_Movie"},
    {source: "YingLi", target: "Shang_Chi_Movie"},
    {source: "RazorFist", target: "Shang_Chi_Movie"},
    {source: "YingNan", target: "Shang_Chi_Movie"},
    {source: "Mandarin", target: "Shang_Chi_Movie"},
    {source: "JonJon", target: "Shang_Chi_Movie"},
    {source: "DeathDealer", target: "Shang_Chi_Movie"},
    {source: "Wong", target: "Shang_Chi_Movie"},
    {source: "TrevorSlattery", target: "Shang_Chi_Movie"},
    {source: "Abomination", target: "Shang_Chi_Movie"},


    // Eternals
    {source: "Sersi", target: "Eternals_Movie"},
    {source: "Ikaris", target: "Eternals_Movie"},
    {source: "Kingo", target: "Eternals_Movie"},
    {source: "Sprite", target: "Eternals_Movie"},
    {source: "Phastos", target: "Eternals_Movie"},
    {source: "Makkari", target: "Eternals_Movie"},
    {source: "Druig", target: "Eternals_Movie"},
    {source: "Gilgamesh", target: "Eternals_Movie"},
    {source: "Black_Knight", target: "Eternals_Movie"},
    {source: "Ajak", target: "Eternals_Movie"},
    {source: "Thena", target: "Eternals_Movie"},
    {source: "Karun", target: "Eternals_Movie"},
    {source: "General_Kro", target: "Eternals_Movie"},

    // Hawkeye
    {source: "Hawkeye", target: "Hawkeye_Series"},
    {source: "Kate_Bishop", target: "Hawkeye_Series"},
    {source: "Eleanor_Bishop", target: "Hawkeye_Series"},
    {source: "Echo", target: "Hawkeye_Series"},
    {source: "YelenaBelova", target: "Hawkeye_Series"},
    {source: "LauraBarton", target: "Hawkeye_Series"},
    {source: "LilaBarton", target: "Hawkeye_Series"},
    {source: "CooperBarton", target: "Hawkeye_Series"},
    {source: "NathanielBarton", target: "Hawkeye_Series"},


// "DoctorStrange_2_Movie": { name: "Doctor Strange in the Multiverse of Madness", icon: "./pics/movies/DoctorStrange_2.jpeg"},
    {source: "DoctorStrange", target: "DoctorStrange_2_Movie"},
    {source: "ScarletWitch", target: "DoctorStrange_2_Movie"},
    {source: "Wong", target: "DoctorStrange_2_Movie"},
    {source: "ChristinePalmer", target: "DoctorStrange_2_Movie"},
    {source: "KarlMordo", target: "DoctorStrange_2_Movie"},
    {source: "AmericaChavez", target: "DoctorStrange_2_Movie"},
    {source: "Rintrah", target: "DoctorStrange_2_Movie"},
    {source: "Loki", target: "DoctorStrange_2_Movie"},
    {source: "SylvieLaufeydottir", target: "DoctorStrange_2_Movie"},
    {source: "Mobius", target: "DoctorStrange_2_Movie"},
    {source: "Clea", target: "DoctorStrange_2_Movie"},


// "BlackPanther_2_Movie": { name: "Black Panther: Wakanda Forever", icon: "./pics/movies/Black_Panther_2.jpeg"},
    {source: "Shuri", target: "BlackPanther_2_Movie"},


// "AntMan_3_Movie": { name: "Ant-Man & The Wasp: Quantumania", icon: "./pics/movies/AntMan_3.jpeg"},
    {source: "AntMan", target: "AntMan_3_Movie"},
    {source: "TheWasp", target: "AntMan_3_Movie"},
    {source: "HankPym", target: "AntMan_3_Movie"},
    {source: "JanetVanDyne", target: "AntMan_3_Movie"},
    {source: "CassieLang", target: "AntMan_3_Movie"},
    {source: "Luis", target: "AntMan_3_Movie"},
    {source: "YellowJacket", target: "AntMan_3_Movie"},
    {source: "JimPaxton", target: "AntMan_3_Movie"},
    {source: "Kang", target: "AntMan_3_Movie"},

// "Spider_Man_3_Movie": { name: "Spider-Man: No Way Home", icon: "./pics/movies/Spider_Man_3.png"},
    {source: "SpiderMan", target: "Spider_Man_3_Movie"},
    {source: "MichelleJones", target: "Spider_Man_3_Movie"},
    {source: "DoctorStrange", target: "Spider_Man_3_Movie"},
    {source: "HappyHogan", target: "Spider_Man_3_Movie"},
    {source: "NedLeeds", target: "Spider_Man_3_Movie"},
    {source: "MayParker", target: "Spider_Man_3_Movie"},
    {source: "FlashThompson", target: "Spider_Man_3_Movie"},
    {source: "BettyBrant", target: "Spider_Man_3_Movie"},
    {source: "AndreWilson", target: "Spider_Man_3_Movie"},
    {source: "RogerHarrington", target: "Spider_Man_3_Movie"},
    {source: "JJonahJameson", target: "Spider_Man_3_Movie"},
    {source: "JuliusDell", target: "Spider_Man_3_Movie"},
    {source: "Electro", target: "Spider_Man_3_Movie"},
    {source: "Doctor_Octopus", target: "Spider_Man_3_Movie"},
    {source: "Sandman", target: "Spider_Man_3_Movie"},
    {source: "Green_Goblin", target: "Spider_Man_3_Movie"},
    {source: "Wong", target: "Spider_Man_3_Movie"},

    // She-Hulk Series
    {source: "She_Hulk", target: "SheHulk_Series"},
    {source: "Hulk", target: "SheHulk_Series"},
    {source: "Abomination", target: "SheHulk_Series"},

    // Ms. Marvel
    {source: "Ms_Marvel", target: "MsMarvel_Series"},


// "The_Marvels_Movie": { name: "The Marvels", icon: "./pics/movies/The_Marvels.jpeg"},
    {source: "CaptainMarvel", target: "The_Marvels_Movie"},
    {source: "Ms_Marvel", target: "The_Marvels_Movie"},
    {source: "MonicaRambeau", target: "The_Marvels_Movie"},



// "Thor_4_Movie": { name: "Thor: Love & Thunder", icon: "./pics/movies/Thor_4.jpeg"},
    {source: "Thor", target: "Thor_4_Movie"},
    {source: "JaneFoster", target: "Thor_4_Movie"},
    {source: "Valkyrie", target: "Thor_4_Movie"},
    {source: "Sif", target: "Thor_4_Movie"},
    {source: "StarLord", target: "Thor_4_Movie"},
    {source: "Drax", target: "Thor_4_Movie"},
    {source: "Mantis", target: "Thor_4_Movie"},
    {source: "Nebula", target: "Thor_4_Movie"},
    {source: "KraglinObfonteri", target: "Thor_4_Movie"},
    {source: "RocketRaccoon", target: "Thor_4_Movie"},
    {source: "Groot", target: "Thor_4_Movie"},
    {source: "Korg", target: "Thor_4_Movie"},
    {source: "Grandmaster", target: "Thor_4_Movie"},
    {source: "Miek", target: "Thor_4_Movie"},
    // {source: "Gorr", target: "Thor_4_Movie"},
    // {source: "Zeus", target: "Thor_4_Movie"},


    // Agatha_Series
    {source: "Agnes", target: "Agatha_Series"},

    // Echo_Series
    {source: "Echo", target: "Echo_Series"},


    // Secret Invasion
    {source: "NickFury", target: "SecretInvasion_Series"},

    // Moonknight
    {source: "Moon_Knight", target: "Moonknight_Series"},

    // Armor Wars
    {source: "WarMachine", target: "ArmorWars_Series"},


    // I am Groot
    {source: "Groot", target: "IamGroot_Series"},

];



var width = 6500,
    height = 6500;

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

node.append("circle")
    .attr("r", 2)
;

node.append("image")
    .attr("xlink:href", function(d) { return d.icon; })
    .attr("x", "-24px")
    .attr("y", "-24px")
    .attr("width", "60px")
    .attr("height", "80px");

node.append("a")
    .attr("xlink:href", function(d) {return "http://somelink.com/link.php?id="})
    .append("circle")
    .attr("cx", 4 )
    .attr("cy", 55 )
    .attr("r", 1)
    .style("fill", "blue")
    .style("opacity", 0.5);

node.append("text")
    // .attr("x", "-40px")
    .attr("y", "60px")
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
        .attr("r", 8);
}
