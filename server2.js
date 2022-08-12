const http = require("http");
const host = 'localhost';
const port = 8000;
const idList = {
    "1": {
        "botName": "UNIQUE_HIDEOUT",
        "humanName": "HideoutConstructionKit"
    },
    "2": {
        "botName": "T1_FARM_CARROT_SEED",
        "humanName": "CarrotSeeds"
    },
    "3": {
        "botName": "T2_FARM_BEAN_SEED",
        "humanName": "BeanSeeds"
    },
    "4": {
        "botName": "T3_FARM_WHEAT_SEED",
        "humanName": "WheatSeeds"
    },
    "5": {
        "botName": "T4_FARM_TURNIP_SEED",
        "humanName": "TurnipSeeds"
    },
    "6": {
        "botName": "T5_FARM_CABBAGE_SEED",
        "humanName": "CabbageSeeds"
    },
    "7": {
        "botName": "T6_FARM_POTATO_SEED",
        "humanName": "PotatoSeeds"
    },
    "8": {
        "botName": "T7_FARM_CORN_SEED",
        "humanName": "CornSeeds"
    },
    "9": {
        "botName": "T8_FARM_PUMPKIN_SEED",
        "humanName": "PumpkinSeeds"
    },
    "10": {
        "botName": "T2_FARM_AGARIC_SEED",
        "humanName": "ArcaneAgaricSeeds"
    },
    "11": {
        "botName": "T3_FARM_COMFREY_SEED",
        "humanName": "BrightleafComfreySeeds"
    },
    "12": {
        "botName": "T4_FARM_BURDOCK_SEED",
        "humanName": "CrenellatedBurdockSeeds"
    },
    "13": {
        "botName": "T5_FARM_TEASEL_SEED",
        "humanName": "DragonTeaselSeeds"
    },
    "14": {
        "botName": "T6_FARM_FOXGLOVE_SEED",
        "humanName": "ElusiveFoxgloveSeeds"
    },
    "15": {
        "botName": "T7_FARM_MULLEIN_SEED",
        "humanName": "FiretouchedMulleinSeeds"
    },
    "16": {
        "botName": "T8_FARM_YARROW_SEED",
        "humanName": "GhoulYarrowSeeds"
    },
    "17": {
        "botName": "T3_FARM_OX_BABY",
        "humanName": "Journeyman'sOxCalf"
    },
    "18": {
        "botName": "T4_FARM_OX_BABY",
        "humanName": "Adept'sOxCalf"
    },
    "19": {
        "botName": "T5_FARM_OX_BABY",
        "humanName": "Expert'sOxCalf"
    },
    "20": {
        "botName": "T6_FARM_OX_BABY",
        "humanName": "Master'sOxCalf"
    },
    "21": {
        "botName": "T7_FARM_OX_BABY",
        "humanName": "Grandmaster'sOxCalf"
    },
    "22": {
        "botName": "T8_FARM_OX_BABY",
        "humanName": "Elder'sOxCalf"
    },
    "23": {
        "botName": "T3_FARM_OX_GROWN",
        "humanName": "Journeyman'sOx"
    },
    "24": {
        "botName": "T4_FARM_OX_GROWN",
        "humanName": "Adept'sOx"
    },
    "25": {
        "botName": "T5_FARM_OX_GROWN",
        "humanName": "Expert'sOx"
    },
    "26": {
        "botName": "T6_FARM_OX_GROWN",
        "humanName": "Master'sOx"
    },
    "27": {
        "botName": "T7_FARM_OX_GROWN",
        "humanName": "Grandmaster'sOx"
    },
    "28": {
        "botName": "T8_FARM_OX_GROWN",
        "humanName": "Elder'sOx"
    },
    "29": {
        "botName": "T3_FARM_HORSE_BABY",
        "humanName": "Journeyman'sFoal"
    },
    "30": {
        "botName": "T4_FARM_HORSE_BABY",
        "humanName": "Adept'sFoal"
    },
    "31": {
        "botName": "T5_FARM_HORSE_BABY",
        "humanName": "Expert'sFoal"
    },
    "32": {
        "botName": "T6_FARM_HORSE_BABY",
        "humanName": "Master'sFoal"
    },
    "33": {
        "botName": "T7_FARM_HORSE_BABY",
        "humanName": "Grandmaster'sFoal"
    },
    "34": {
        "botName": "T8_FARM_HORSE_BABY",
        "humanName": "Elder'sFoal"
    },
    "35": {
        "botName": "T3_FARM_HORSE_GROWN",
        "humanName": "Journeyman'sHorse"
    },
    "36": {
        "botName": "T4_FARM_HORSE_GROWN",
        "humanName": "Adept'sHorse"
    },
    "37": {
        "botName": "T5_FARM_HORSE_GROWN",
        "humanName": "Expert'sHorse"
    },
    "38": {
        "botName": "T6_FARM_HORSE_GROWN",
        "humanName": "Master'sHorse"
    },
    "39": {
        "botName": "T7_FARM_HORSE_GROWN",
        "humanName": "Grandmaster'sHorse"
    },
    "40": {
        "botName": "T8_FARM_HORSE_GROWN",
        "humanName": "Elder'sHorse"
    },
    "41": {
        "botName": "T6_FARM_DIREWOLF_BABY",
        "humanName": "DirewolfPup"
    },
    "42": {
        "botName": "T7_FARM_DIREBOAR_BABY",
        "humanName": "DireboarPiglet"
    },
    "43": {
        "botName": "T8_FARM_DIREBEAR_BABY",
        "humanName": "DirebearCub"
    },
    "44": {
        "botName": "T7_FARM_SWAMPDRAGON_BABY",
        "humanName": "SwampDragonPup"
    },
    "45": {
        "botName": "T8_FARM_MAMMOTH_BABY",
        "humanName": "MammothCalf"
    },
    "46": {
        "botName": "T5_FARM_COUGAR_BABY",
        "humanName": "SwiftclawCub"
    },
    "47": {
        "botName": "T8_FARM_DIREWOLF_BABY",
        "humanName": "GhostwolfPup"
    },
    "48": {
        "botName": "T4_FARM_GIANTSTAG_BABY",
        "humanName": "Adept'sFawn"
    },
    "49": {
        "botName": "T6_FARM_GIANTSTAG_BABY",
        "humanName": "Master'sFawn"
    },
    "50": {
        "botName": "T6_FARM_GIANTSTAG_MOOSE_BABY",
        "humanName": "MooseCalf"
    },
    "51": {
        "botName": "T8_FARM_RABBIT_EASTER_BABY",
        "humanName": "VibrantSpringCottontailEgg"
    },
    "52": {
        "botName": "T8_FARM_RABBIT_EASTER_GROWN",
        "humanName": "TameSpringCottontail"
    },
    "53": {
        "botName": "T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY",
        "humanName": "BabyMoabird"
    },
    "54": {
        "botName": "T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY",
        "humanName": "WinterBearCub"
    },
    "55": {
        "botName": "T5_FARM_DIREBOAR_FW_LYMHURST_BABY",
        "humanName": "WildBoarlet"
    },
    "56": {
        "botName": "T5_FARM_RAM_FW_MARTLOCK_BABY",
        "humanName": "BighornRamLamb"
    },
    "57": {
        "botName": "T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY",
        "humanName": "BabySwampSalamander"
    },
    "58": {
        "botName": "T5_FARM_GREYWOLF_FW_CAERLEON_BABY",
        "humanName": "CaerleonGreywolfPup"
    },
    "59": {
        "botName": "T8_FARM_MOABIRD_FW_BRIDGEWATCH_BABY",
        "humanName": "BabyEliteTerrorbird"
    },
    "60": {
        "botName": "T8_FARM_DIREBEAR_FW_FORTSTERLING_BABY",
        "humanName": "EliteWinterBearCub"
    },
    "61": {
        "botName": "T8_FARM_DIREBOAR_FW_LYMHURST_BABY",
        "humanName": "EliteWildBoarlet"
    },
    "62": {
        "botName": "T8_FARM_RAM_FW_MARTLOCK_BABY",
        "humanName": "EliteBighornRamLamb"
    },
    "63": {
        "botName": "T8_FARM_SWAMPDRAGON_FW_THETFORD_BABY",
        "humanName": "BabyEliteSwampSalamander"
    },
    "64": {
        "botName": "T8_FARM_GREYWOLF_FW_CAERLEON_BABY",
        "humanName": "EliteGreywolfPup"
    },
    "65": {
        "botName": "T6_FARM_DIREWOLF_GROWN",
        "humanName": "TameDirewolf"
    },
    "66": {
        "botName": "T7_FARM_DIREBOAR_GROWN",
        "humanName": "TameDireboar"
    },
    "67": {
        "botName": "T8_FARM_DIREBEAR_GROWN",
        "humanName": "TameDirebear"
    },
    "68": {
        "botName": "T7_FARM_SWAMPDRAGON_GROWN",
        "humanName": "TameSwampDragon"
    },
    "69": {
        "botName": "T8_FARM_MAMMOTH_GROWN",
        "humanName": "TameMammoth"
    },
    "70": {
        "botName": "T5_FARM_COUGAR_GROWN",
        "humanName": "TameSwiftclaw"
    },
    "71": {
        "botName": "T8_FARM_DIREWOLF_GROWN",
        "humanName": "TameGhostwolf"
    },
    "72": {
        "botName": "T4_FARM_GIANTSTAG_GROWN",
        "humanName": "Adept'sTameGiantStag"
    },
    "73": {
        "botName": "T6_FARM_GIANTSTAG_GROWN",
        "humanName": "Master'sTameGiantStag"
    },
    "74": {
        "botName": "T6_FARM_GIANTSTAG_MOOSE_GROWN",
        "humanName": "TameMoose"
    },
    "75": {
        "botName": "T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN",
        "humanName": "TameMoabird"
    },
    "76": {
        "botName": "T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN",
        "humanName": "TameWinterBear"
    },
    "77": {
        "botName": "T5_FARM_DIREBOAR_FW_LYMHURST_GROWN",
        "humanName": "TameWildBoar"
    },
    "78": {
        "botName": "T5_FARM_RAM_FW_MARTLOCK_GROWN",
        "humanName": "TameBighornRam"
    },
    "79": {
        "botName": "T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN",
        "humanName": "TameSwampSalamander"
    },
    "80": {
        "botName": "T5_FARM_GREYWOLF_FW_CAERLEON_GROWN",
        "humanName": "TameGreywolf"
    },
    "81": {
        "botName": "T8_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN",
        "humanName": "TameEliteTerrorbird"
    },
    "82": {
        "botName": "T8_FARM_DIREBEAR_FW_FORTSTERLING_GROWN",
        "humanName": "TameEliteWinterBear"
    },
    "83": {
        "botName": "T8_FARM_DIREBOAR_FW_LYMHURST_GROWN",
        "humanName": "TameEliteWildBoar"
    },
    "84": {
        "botName": "T8_FARM_RAM_FW_MARTLOCK_GROWN",
        "humanName": "TameEliteBighornRam"
    },
    "85": {
        "botName": "T8_FARM_SWAMPDRAGON_FW_THETFORD_GROWN",
        "humanName": "TameEliteSwampSalamander"
    },
    "86": {
        "botName": "T8_FARM_GREYWOLF_FW_CAERLEON_GROWN",
        "humanName": "TameEliteGreywolf"
    },
    "87": {
        "botName": "T3_FARM_CHICKEN_BABY",
        "humanName": "BabyChickens"
    },
    "88": {
        "botName": "T4_FARM_GOAT_BABY",
        "humanName": "Kid"
    },
    "89": {
        "botName": "T5_FARM_GOOSE_BABY",
        "humanName": "Gosling"
    },
    "90": {
        "botName": "T6_FARM_SHEEP_BABY",
        "humanName": "Lamb"
    },
    "91": {
        "botName": "T7_FARM_PIG_BABY",
        "humanName": "Piglet"
    },
    "92": {
        "botName": "T8_FARM_COW_BABY",
        "humanName": "Calf"
    },
    "93": {
        "botName": "T3_FARM_CHICKEN_GROWN",
        "humanName": "Chicken"
    },
    "94": {
        "botName": "T4_FARM_GOAT_GROWN",
        "humanName": "Goat"
    },
    "95": {
        "botName": "T5_FARM_GOOSE_GROWN",
        "humanName": "Goose"
    },
    "96": {
        "botName": "T6_FARM_SHEEP_GROWN",
        "humanName": "Sheep"
    },
    "97": {
        "botName": "T7_FARM_PIG_GROWN",
        "humanName": "Pig"
    },
    "98": {
        "botName": "T8_FARM_COW_GROWN",
        "humanName": "Cow"
    },
    "99": {
        "botName": "T6_MOUNTUPGRADE_GIANTSTAG_XMAS",
        "humanName": "DecorativeStagBridle"
    },
    "100": {
        "botName": "UNIQUE_MOUNTUPGRADE_RAM_XMAS",
        "humanName": "DecorativeRamBridle"
    },
    "101": {
        "botName": "T5_MOUNTUPGRADE_HORSE_CURSE",
        "humanName": "NecromanticElixir"
    },
    "102": {
        "botName": "T8_MOUNTUPGRADE_HORSE_CURSE",
        "humanName": "SpectralMask"
    },
    "103": {
        "botName": "T8_MOUNTUPGRADE_COUGAR_KEEPER",
        "humanName": "SacredBoneMarrow"
    },
    "104": {
        "botName": "T5_MOUNTUPGRADE_HORSE_MORGANA",
        "humanName": "MorganaMareSaddle"
    },
    "105": {
        "botName": "T8_MOUNTUPGRADE_HORSE_MORGANA",
        "humanName": "InfernalHorseshoes"
    },
    "106": {
        "botName": "T1_CARROT",
        "humanName": "Carrots"
    },
    "107": {
        "botName": "T2_BEAN",
        "humanName": "Beans"
    },
    "108": {
        "botName": "T3_WHEAT",
        "humanName": "SheafofWheat"
    },
    "109": {
        "botName": "T4_TURNIP",
        "humanName": "Turnips"
    },
    "110": {
        "botName": "T5_CABBAGE",
        "humanName": "Cabbage"
    },
    "111": {
        "botName": "T6_POTATO",
        "humanName": "Potatoes"
    },
    "112": {
        "botName": "T7_CORN",
        "humanName": "BundleofCorn"
    },
    "113": {
        "botName": "T8_PUMPKIN",
        "humanName": "Pumpkin"
    },
    "114": {
        "botName": "T2_AGARIC",
        "humanName": "ArcaneAgaric"
    },
    "115": {
        "botName": "T3_COMFREY",
        "humanName": "BrightleafComfrey"
    },
    "116": {
        "botName": "T4_BURDOCK",
        "humanName": "CrenellatedBurdock"
    },
    "117": {
        "botName": "T5_TEASEL",
        "humanName": "DragonTeasel"
    },
    "118": {
        "botName": "T6_FOXGLOVE",
        "humanName": "ElusiveFoxglove"
    },
    "119": {
        "botName": "T7_MULLEIN",
        "humanName": "FiretouchedMullein"
    },
    "120": {
        "botName": "T8_YARROW",
        "humanName": "GhoulYarrow"
    },
    "121": {
        "botName": "T3_EGG",
        "humanName": "HenEggs"
    },
    "122": {
        "botName": "T4_MILK",
        "humanName": "Goat'sMilk"
    },
    "123": {
        "botName": "T5_EGG",
        "humanName": "GooseEggs"
    },
    "124": {
        "botName": "T6_MILK",
        "humanName": "Sheep'sMilk"
    },
    "125": {
        "botName": "T8_MILK",
        "humanName": "Cow'sMilk"
    },
    "126": {
        "botName": "T1_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "CommonRudd"
    },
    "127": {
        "botName": "T2_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "StripedCarp"
    },
    "128": {
        "botName": "T3_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "AlbionPerch"
    },
    "129": {
        "botName": "T4_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "BluescalePike"
    },
    "130": {
        "botName": "T5_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "SpottedTrout"
    },
    "131": {
        "botName": "T6_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "BrightscaleZander"
    },
    "132": {
        "botName": "T7_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "DanglemouthCatfish"
    },
    "133": {
        "botName": "T8_FISH_FRESHWATER_ALL_COMMON",
        "humanName": "RiverSturgeon"
    },
    "134": {
        "botName": "T1_FISH_SALTWATER_ALL_COMMON",
        "humanName": "CommonHerring"
    },
    "135": {
        "botName": "T2_FISH_SALTWATER_ALL_COMMON",
        "humanName": "StripedMackerel"
    },
    "136": {
        "botName": "T3_FISH_SALTWATER_ALL_COMMON",
        "humanName": "FlatshorePlaice"
    },
    "137": {
        "botName": "T4_FISH_SALTWATER_ALL_COMMON",
        "humanName": "BluescaleCod"
    },
    "138": {
        "botName": "T5_FISH_SALTWATER_ALL_COMMON",
        "humanName": "SpottedWolffish"
    },
    "139": {
        "botName": "T6_FISH_SALTWATER_ALL_COMMON",
        "humanName": "StrongfinSalmon"
    },
    "140": {
        "botName": "T7_FISH_SALTWATER_ALL_COMMON",
        "humanName": "BluefinTuna"
    },
    "141": {
        "botName": "T8_FISH_SALTWATER_ALL_COMMON",
        "humanName": "SteelscaleSwordfish"
    },
    "142": {
        "botName": "T3_FISH_FRESHWATER_FOREST_RARE",
        "humanName": "GreenriverEel"
    },
    "143": {
        "botName": "T5_FISH_FRESHWATER_FOREST_RARE",
        "humanName": "RedspringEel"
    },
    "144": {
        "botName": "T7_FISH_FRESHWATER_FOREST_RARE",
        "humanName": "DeadwaterEel"
    },
    "145": {
        "botName": "T3_FISH_FRESHWATER_MOUNTAIN_RARE",
        "humanName": "UplandColdeye"
    },
    "146": {
        "botName": "T5_FISH_FRESHWATER_MOUNTAIN_RARE",
        "humanName": "MountainBlindeye"
    },
    "147": {
        "botName": "T7_FISH_FRESHWATER_MOUNTAIN_RARE",
        "humanName": "FrostpeakDeadeye"
    },
    "148": {
        "botName": "T3_FISH_FRESHWATER_HIGHLANDS_RARE",
        "humanName": "StonestreamLurcher"
    },
    "149": {
        "botName": "T5_FISH_FRESHWATER_HIGHLANDS_RARE",
        "humanName": "RushwaterLurcher"
    },
    "150": {
        "botName": "T7_FISH_FRESHWATER_HIGHLANDS_RARE",
        "humanName": "ThunderfallLurcher"
    },
    "151": {
        "botName": "T3_FISH_FRESHWATER_STEPPE_RARE",
        "humanName": "LowriverCrab"
    },
    "152": {
        "botName": "T5_FISH_FRESHWATER_STEPPE_RARE",
        "humanName": "DrybrookCrab"
    },
    "153": {
        "botName": "T7_FISH_FRESHWATER_STEPPE_RARE",
        "humanName": "DustholeCrab"
    },
    "154": {
        "botName": "T3_FISH_FRESHWATER_SWAMP_RARE",
        "humanName": "GreenmoorClam"
    },
    "155": {
        "botName": "T5_FISH_FRESHWATER_SWAMP_RARE",
        "humanName": "MurkwaterClam"
    },
    "156": {
        "botName": "T7_FISH_FRESHWATER_SWAMP_RARE",
        "humanName": "BlackbogClam"
    },
    "157": {
        "botName": "T3_FISH_SALTWATER_ALL_RARE",
        "humanName": "ShallowshoreSquid"
    },
    "158": {
        "botName": "T5_FISH_SALTWATER_ALL_RARE",
        "humanName": "MidwaterOctopus"
    },
    "159": {
        "botName": "T7_FISH_SALTWATER_ALL_RARE",
        "humanName": "DeepwaterKraken"
    },
    "160": {
        "botName": "T3_FISH_FRESHWATER_AVALON_RARE",
        "humanName": "WhitefogSnapper"
    },
    "161": {
        "botName": "T5_FISH_FRESHWATER_AVALON_RARE",
        "humanName": "ClearhazeSnapper"
    },
    "162": {
        "botName": "T7_FISH_FRESHWATER_AVALON_RARE",
        "humanName": "PuremistSnapper"
    },
    "163": {
        "botName": "T1_SEAWEED",
        "humanName": "Seaweed"
    },
    "164": {
        "botName": "T8_FISH_SALTWATER_ALL_BOSS_SHARK",
        "humanName": "Shark"
    },
    "165": {
        "botName": "T1_FISHCHOPS",
        "humanName": "ChoppedFish"
    },
    "166": {
        "botName": "T1_FISHSAUCE_LEVEL1",
        "humanName": "BasicFishSauce"
    },
    "167": {
        "botName": "T1_FISHSAUCE_LEVEL2",
        "humanName": "FancyFishSauce"
    },
    "168": {
        "botName": "T1_FISHSAUCE_LEVEL3",
        "humanName": "SpecialFishSauce"
    },
    "169": {
        "botName": "TREASURE_KNOWLEDGE_RARITY1",
        "humanName": "CorruptedScroll"
    },
    "170": {
        "botName": "TREASURE_KNOWLEDGE_RARITY2",
        "humanName": "ThinBooklet"
    },
    "171": {
        "botName": "TREASURE_KNOWLEDGE_RARITY3",
        "humanName": "AncientTome"
    },
    "172": {
        "botName": "TREASURE_SILVERWARE_RARITY1",
        "humanName": "SilverCup"
    },
    "173": {
        "botName": "TREASURE_SILVERWARE_RARITY2",
        "humanName": "SilverMirror"
    },
    "174": {
        "botName": "TREASURE_SILVERWARE_RARITY3",
        "humanName": "SilverCandelabrum"
    },
    "175": {
        "botName": "TREASURE_DECORATIVE_RARITY1",
        "humanName": "SimpleStoneToy"
    },
    "176": {
        "botName": "TREASURE_DECORATIVE_RARITY2",
        "humanName": "StoneMask"
    },
    "177": {
        "botName": "TREASURE_DECORATIVE_RARITY3",
        "humanName": "StoneIdol"
    },
    "178": {
        "botName": "TREASURE_CEREMONIAL_RARITY1",
        "humanName": "OrnamentalScepter"
    },
    "179": {
        "botName": "TREASURE_CEREMONIAL_RARITY2",
        "humanName": "GlobusCruciger"
    },
    "180": {
        "botName": "TREASURE_CEREMONIAL_RARITY3",
        "humanName": "GoldenCrown"
    },
    "181": {
        "botName": "TREASURE_TRIBAL_RARITY1",
        "humanName": "FeatherTalisman"
    },
    "182": {
        "botName": "TREASURE_TRIBAL_RARITY2",
        "humanName": "Dreamcatcher"
    },
    "183": {
        "botName": "TREASURE_TRIBAL_RARITY3",
        "humanName": "HolyFetish"
    },
    "184": {
        "botName": "TREASURE_RITUAL_RARITY1",
        "humanName": "RitualCandles"
    },
    "185": {
        "botName": "TREASURE_RITUAL_RARITY2",
        "humanName": "BloodChalice"
    },
    "186": {
        "botName": "TREASURE_RITUAL_RARITY3",
        "humanName": "SacrificialDagger"
    },
    "187": {
        "botName": "TREASURE_AVALON_RARITY1",
        "humanName": "GoldenFrame"
    },
    "188": {
        "botName": "TREASURE_AVALON_RARITY2",
        "humanName": "GoldenGyroscope"
    },
    "189": {
        "botName": "TREASURE_AVALON_RARITY3",
        "humanName": "GoldenSextant"
    },
    "190": {
        "botName": "QUESTITEM_TUTORIAL_HERETIC_PLANS"
    },
    "191": {
        "botName": "QUESTITEM_TRANSFER_LETTER",
        "humanName": "LetterofTransfer"
    },
    "192": {
        "botName": "QUESTITEM_LIGHT_BLUEPRINTS",
        "humanName": "Delivery"
    },
    "193": {
        "botName": "QUESTITEM_LIGHT_MANUSCRIPTS",
        "humanName": "Delivery"
    },
    "194": {
        "botName": "QUESTITEM_LIGHT_SURVEYS",
        "humanName": "Delivery"
    },
    "195": {
        "botName": "QUESTITEM_HEAVY_MORTAR",
        "humanName": "Delivery"
    },
    "196": {
        "botName": "QUESTITEM_HEAVY_CRATE",
        "humanName": "Delivery"
    },
    "197": {
        "botName": "QUESTITEM_HEAVY_BARREL",
        "humanName": "Delivery"
    },
    "198": {
        "botName": "QUESTITEM_LIGHT_FUR",
        "humanName": "Delivery"
    },
    "199": {
        "botName": "QUESTITEM_LIGHT_THEPACKAGE",
        "humanName": "Delivery"
    },
    "200": {
        "botName": "QUESTITEM_LIGHT_PATROLROUTE",
        "humanName": "Delivery"
    },
    "201": {
        "botName": "QUESTITEM_HEAVY_MOONSHINE",
        "humanName": "Delivery"
    },
    "202": {
        "botName": "QUESTITEM_LIGHT_KITTENS",
        "humanName": "Delivery"
    },
    "203": {
        "botName": "QUESTITEM_LIGHT_BEES",
        "humanName": "Delivery"
    },
    "204": {
        "botName": "QUESTITEM_LIGHT_OLDCLOTHES",
        "humanName": "Delivery"
    },
    "205": {
        "botName": "QUESTITEM_HEAVY_FARMTOOLS",
        "humanName": "Delivery"
    },
    "206": {
        "botName": "QUESTITEM_HEAVY_MANURE",
        "humanName": "Delivery"
    },
    "207": {
        "botName": "QUESTITEM_LIGHT_ASSASSINATION",
        "humanName": "Delivery"
    },
    "208": {
        "botName": "QUESTITEM_LIGHT_CASUALTIES",
        "humanName": "Delivery"
    },
    "209": {
        "botName": "QUESTITEM_LIGHT_RINGS",
        "humanName": "Delivery"
    },
    "210": {
        "botName": "QUESTITEM_HEAVY_MEDICAL",
        "humanName": "Delivery"
    },
    "211": {
        "botName": "QUESTITEM_HEAVY_FIREBARREL",
        "humanName": "Delivery"
    },
    "212": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_LIGHT"
    },
    "213": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_MEDIUM"
    },
    "214": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_CAERLEON_HEAVY"
    },
    "215": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_SWAMP_LIGHT"
    },
    "216": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_SWAMP_MEDIUM"
    },
    "217": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_SWAMP_HEAVY"
    },
    "218": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_FOREST_LIGHT"
    },
    "219": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_FOREST_MEDIUM"
    },
    "220": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_FOREST_HEAVY"
    },
    "221": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_STEPPE_LIGHT"
    },
    "222": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_STEPPE_MEDIUM"
    },
    "223": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_STEPPE_HEAVY"
    },
    "224": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_LIGHT"
    },
    "225": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_MEDIUM"
    },
    "226": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_HIGHLAND_HEAVY"
    },
    "227": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_LIGHT"
    },
    "228": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_MEDIUM"
    },
    "229": {
        "botName": "QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_HEAVY"
    },
    "230": {
        "botName": "QUESTITEM_TOKEN_ARENA_UNRANKED",
        "humanName": "ArenaSigil"
    },
    "231": {
        "botName": "QUESTITEM_TOKEN_ARENA_CRYSTAL"
    },
    "232": {
        "botName": "QUESTITEM_TOKEN_AVALON",
        "humanName": "AvalonianEnergy"
    },
    "233": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_WINTER_EVENT"
    },
    "234": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "235": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "236": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "237": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "238": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "239": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "240": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "241": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "242": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "243": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "244": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "245": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "246": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "247": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "248": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "249": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "250": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "251": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_RECRUITMENT"
    },
    "252": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "253": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "254": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "255": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "256": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "257": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "258": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "259": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "260": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "261": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "262": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "263": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "264": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "265": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "266": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "267": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "268": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "269": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_FISHYBUSINESS"
    },
    "270": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "271": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "272": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "273": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "274": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "275": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "276": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "277": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "278": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "279": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "280": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "281": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "282": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "283": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "284": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "285": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "286": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "287": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_KEEPER_STONEWARS"
    },
    "288": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "289": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "290": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "291": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "292": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "293": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "294": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "295": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "296": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "297": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "298": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "299": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "300": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "301": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "302": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "303": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "304": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "305": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_LUMBERCAMP"
    },
    "306": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "307": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "308": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "309": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "310": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "311": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "312": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "313": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "314": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "315": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "316": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "317": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "318": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "319": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "320": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "321": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "322": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "323": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_SEWERSCRYPT"
    },
    "324": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "325": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "326": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "327": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "328": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "329": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "330": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "331": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "332": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "333": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "334": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "335": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "336": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "337": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "338": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "339": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "340": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "341": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_KEEPER_MUSHROOM"
    },
    "342": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "343": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "344": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "345": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "346": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "347": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "348": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "349": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "350": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "351": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "352": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "353": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "354": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "355": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "356": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "357": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "358": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "359": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_MORGANA_TRHEESISTERS"
    },
    "360": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "361": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "362": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "363": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "364": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "365": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "366": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "367": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "368": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "369": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "370": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "371": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "372": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "373": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "374": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "375": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "376": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "377": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_UNDEAD_ETERNALBATTLE"
    },
    "378": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "379": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "380": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "381": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "382": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "383": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "384": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "385": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "386": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "387": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "388": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "389": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "390": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "391": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "392": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "393": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "394": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "395": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_HERETIC_FISTFULOFSILVER"
    },
    "396": {
        "botName": "QUESTITEM_EXP_TOKEN_D1_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "397": {
        "botName": "QUESTITEM_EXP_TOKEN_D2_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "398": {
        "botName": "QUESTITEM_EXP_TOKEN_D3_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "399": {
        "botName": "QUESTITEM_EXP_TOKEN_D4_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "400": {
        "botName": "QUESTITEM_EXP_TOKEN_D5_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "401": {
        "botName": "QUESTITEM_EXP_TOKEN_D6_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "402": {
        "botName": "QUESTITEM_EXP_TOKEN_D7_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "403": {
        "botName": "QUESTITEM_EXP_TOKEN_D8_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "404": {
        "botName": "QUESTITEM_EXP_TOKEN_D9_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "405": {
        "botName": "QUESTITEM_EXP_TOKEN_D10_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "406": {
        "botName": "QUESTITEM_EXP_TOKEN_D11_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "407": {
        "botName": "QUESTITEM_EXP_TOKEN_D12_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "408": {
        "botName": "QUESTITEM_EXP_TOKEN_D13_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "409": {
        "botName": "QUESTITEM_EXP_TOKEN_D14_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "410": {
        "botName": "QUESTITEM_EXP_TOKEN_D15_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "411": {
        "botName": "QUESTITEM_EXP_TOKEN_D16_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "412": {
        "botName": "QUESTITEM_EXP_TOKEN_D17_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "413": {
        "botName": "QUESTITEM_EXP_TOKEN_D18_T6_EXP_HRD_MORGANA_TORTURER"
    },
    "414": {
        "botName": "QUESTITEM_TOKEN_ROYAL_HORSE",
        "humanName": "RoyalHorseToken"
    },
    "415": {
        "botName": "QUESTITEM_TOKEN_ROYAL_T4",
        "humanName": "Adept'sRoyalSigil"
    },
    "416": {
        "botName": "QUESTITEM_TOKEN_ROYAL_T5",
        "humanName": "Expert'sRoyalSigil"
    },
    "417": {
        "botName": "QUESTITEM_TOKEN_ROYAL_T6",
        "humanName": "Master'sRoyalSigil"
    },
    "418": {
        "botName": "QUESTITEM_TOKEN_ROYAL_T7",
        "humanName": "Grandmaster'sRoyalSigil"
    },
    "419": {
        "botName": "QUESTITEM_TOKEN_ROYAL_T8",
        "humanName": "Elder'sRoyalSigil"
    },
    "420": {
        "botName": "QUESTITEM_TOKEN_KEEPER",
        "humanName": "KeeperTotem"
    },
    "421": {
        "botName": "QUESTITEM_TOKEN_MORGANA",
        "humanName": "Morgana'sFavor"
    },
    "422": {
        "botName": "QUESTITEM_TOKEN_UNDEAD",
        "humanName": "UndeadKnucklebone"
    },
    "423": {
        "botName": "QUESTITEM_TOKEN_EVENT_HALLOWEEN_2017",
        "humanName": "PumpkinPip"
    },
    "424": {
        "botName": "QUESTITEM_TOKEN_EVENT_EASTER_2018",
        "humanName": "Fool'sGoldenEgg"
    },
    "425": {
        "botName": "QUESTITEM_TOKEN_ADC_FRAME",
        "humanName": "AdventurerToken"
    },
    "426": {
        "botName": "T4_SKILLBOOK_GATHER_FIBER",
        "humanName": "AdeptFiberHarvesterTome"
    },
    "427": {
        "botName": "T5_SKILLBOOK_GATHER_FIBER",
        "humanName": "ExpertFiberHarvesterTome"
    },
    "428": {
        "botName": "T6_SKILLBOOK_GATHER_FIBER",
        "humanName": "MasterFiberHarvesterTome"
    },
    "429": {
        "botName": "T7_SKILLBOOK_GATHER_FIBER",
        "humanName": "GrandmasterFiberHarvesterTome"
    },
    "430": {
        "botName": "T8_SKILLBOOK_GATHER_FIBER",
        "humanName": "ElderFiberHarvesterTome"
    },
    "431": {
        "botName": "T4_SKILLBOOK_GATHER_HIDE",
        "humanName": "AdeptAnimalSkinnerTome"
    },
    "432": {
        "botName": "T5_SKILLBOOK_GATHER_HIDE",
        "humanName": "ExpertAnimalSkinnerTome"
    },
    "433": {
        "botName": "T6_SKILLBOOK_GATHER_HIDE",
        "humanName": "MasterAnimalSkinnerTome"
    },
    "434": {
        "botName": "T7_SKILLBOOK_GATHER_HIDE",
        "humanName": "GrandmasterAnimalSkinnerTome"
    },
    "435": {
        "botName": "T8_SKILLBOOK_GATHER_HIDE",
        "humanName": "ElderAnimalSkinnerTome"
    },
    "436": {
        "botName": "T4_SKILLBOOK_GATHER_ORE",
        "humanName": "AdeptOreMinerTome"
    },
    "437": {
        "botName": "T5_SKILLBOOK_GATHER_ORE",
        "humanName": "ExpertOreMinerTome"
    },
    "438": {
        "botName": "T6_SKILLBOOK_GATHER_ORE",
        "humanName": "MasterOreMinerTome"
    },
    "439": {
        "botName": "T7_SKILLBOOK_GATHER_ORE",
        "humanName": "GrandmasterOreMinerTome"
    },
    "440": {
        "botName": "T8_SKILLBOOK_GATHER_ORE",
        "humanName": "ElderOreMinerTome"
    },
    "441": {
        "botName": "T4_SKILLBOOK_GATHER_ROCK",
        "humanName": "AdeptQuarrierTome"
    },
    "442": {
        "botName": "T5_SKILLBOOK_GATHER_ROCK",
        "humanName": "ExpertQuarrierTome"
    },
    "443": {
        "botName": "T6_SKILLBOOK_GATHER_ROCK",
        "humanName": "MasterQuarrierTome"
    },
    "444": {
        "botName": "T7_SKILLBOOK_GATHER_ROCK",
        "humanName": "GrandmasterQuarrierTome"
    },
    "445": {
        "botName": "T8_SKILLBOOK_GATHER_ROCK",
        "humanName": "ElderQuarrierTome"
    },
    "446": {
        "botName": "T4_SKILLBOOK_GATHER_WOOD",
        "humanName": "AdeptLumberjackTome"
    },
    "447": {
        "botName": "T5_SKILLBOOK_GATHER_WOOD",
        "humanName": "ExpertLumberjackTome"
    },
    "448": {
        "botName": "T6_SKILLBOOK_GATHER_WOOD",
        "humanName": "MasterLumberjackTome"
    },
    "449": {
        "botName": "T7_SKILLBOOK_GATHER_WOOD",
        "humanName": "GrandmasterLumberjackTome"
    },
    "450": {
        "botName": "T8_SKILLBOOK_GATHER_WOOD",
        "humanName": "ElderLumberjackTome"
    },
    "451": {
        "botName": "T4_SKILLBOOK_STANDARD",
        "humanName": "Adept'sTomeofInsight"
    },
    "452": {
        "botName": "T1_SKILLBOOK_NONTRADABLE",
        "humanName": "Beginner'sTomeofInsight"
    },
    "453": {
        "botName": "T2_SKILLBOOK_NONTRADABLE",
        "humanName": "Novice'sTomeofInsight"
    },
    "454": {
        "botName": "T3_SKILLBOOK_NONTRADABLE",
        "humanName": "Journeyman'sTomeofInsight"
    },
    "455": {
        "botName": "T4_SKILLBOOK_NONTRADABLE",
        "humanName": "Adept'sTomeofInsight"
    },
    "456": {
        "botName": "T5_SKILLBOOK_NONTRADABLE",
        "humanName": "Expert'sTomeofInsight"
    },
    "457": {
        "botName": "T6_SKILLBOOK_NONTRADABLE",
        "humanName": "Master'sTomeofInsight"
    },
    "458": {
        "botName": "T7_SKILLBOOK_NONTRADABLE",
        "humanName": "Grandmaster'sTomeofInsight"
    },
    "459": {
        "botName": "T8_SKILLBOOK_NONTRADABLE",
        "humanName": "Elder'sTomeofInsight"
    },
    "460": {
        "botName": "T3_PREMIUMITEM_3_NONTRADABLE",
        "humanName": "ThreeDaysofPremium"
    },
    "461": {
        "botName": "T1_SILVERBAG_NONTRADABLE",
        "humanName": "Beginner'sBagofSilver"
    },
    "462": {
        "botName": "T2_SILVERBAG_NONTRADABLE",
        "humanName": "Novice'sBagofSilver"
    },
    "463": {
        "botName": "T3_SILVERBAG_NONTRADABLE",
        "humanName": "Journeyman'sBagofSilver"
    },
    "464": {
        "botName": "T4_SILVERBAG_NONTRADABLE",
        "humanName": "Adept'sBagofSilver"
    },
    "465": {
        "botName": "T5_SILVERBAG_NONTRADABLE",
        "humanName": "Expert'sBagofSilver"
    },
    "466": {
        "botName": "T6_SILVERBAG_NONTRADABLE",
        "humanName": "Master'sBagofSilver"
    },
    "467": {
        "botName": "T7_SILVERBAG_NONTRADABLE",
        "humanName": "Grandmaster'sBagofSilver"
    },
    "468": {
        "botName": "T8_SILVERBAG_NONTRADABLE",
        "humanName": "Elder'sBagofSilver"
    },
    "469": {
        "botName": "T2_POTION_HEAL",
        "humanName": "MinorHealingPotion"
    },
    "470": {
        "botName": "T4_POTION_HEAL",
        "humanName": "HealingPotion"
    },
    "471": {
        "botName": "T4_POTION_HEAL@1",
        "humanName": "HealingPotion"
    },
    "472": {
        "botName": "T6_POTION_HEAL",
        "humanName": "MajorHealingPotion"
    },
    "473": {
        "botName": "T6_POTION_HEAL@1",
        "humanName": "MajorHealingPotion"
    },
    "474": {
        "botName": "T2_POTION_ENERGY",
        "humanName": "MinorEnergyPotion"
    },
    "475": {
        "botName": "T4_POTION_ENERGY",
        "humanName": "EnergyPotion"
    },
    "476": {
        "botName": "T4_POTION_ENERGY@1",
        "humanName": "EnergyPotion"
    },
    "477": {
        "botName": "T6_POTION_ENERGY",
        "humanName": "MajorEnergyPotion"
    },
    "478": {
        "botName": "T6_POTION_ENERGY@1",
        "humanName": "MajorEnergyPotion"
    },
    "479": {
        "botName": "T3_POTION_REVIVE",
        "humanName": "MinorGigantifyPotion"
    },
    "480": {
        "botName": "T5_POTION_REVIVE",
        "humanName": "GigantifyPotion"
    },
    "481": {
        "botName": "T5_POTION_REVIVE@1",
        "humanName": "GigantifyPotion"
    },
    "482": {
        "botName": "T7_POTION_REVIVE",
        "humanName": "MajorGigantifyPotion"
    },
    "483": {
        "botName": "T7_POTION_REVIVE@1",
        "humanName": "MajorGigantifyPotion"
    },
    "484": {
        "botName": "T3_POTION_STONESKIN",
        "humanName": "MinorResistancePotion"
    },
    "485": {
        "botName": "T5_POTION_STONESKIN",
        "humanName": "ResistancePotion"
    },
    "486": {
        "botName": "T5_POTION_STONESKIN@1",
        "humanName": "ResistancePotion"
    },
    "487": {
        "botName": "T7_POTION_STONESKIN",
        "humanName": "MajorResistancePotion"
    },
    "488": {
        "botName": "T7_POTION_STONESKIN@1",
        "humanName": "MajorResistancePotion"
    },
    "489": {
        "botName": "T3_POTION_SLOWFIELD",
        "humanName": "MinorStickyPotion"
    },
    "490": {
        "botName": "T5_POTION_SLOWFIELD",
        "humanName": "StickyPotion"
    },
    "491": {
        "botName": "T5_POTION_SLOWFIELD@1",
        "humanName": "StickyPotion"
    },
    "492": {
        "botName": "T7_POTION_SLOWFIELD",
        "humanName": "MajorStickyPotion"
    },
    "493": {
        "botName": "T7_POTION_SLOWFIELD@1",
        "humanName": "MajorStickyPotion"
    },
    "494": {
        "botName": "T4_POTION_COOLDOWN",
        "humanName": "MinorPoisonPotion"
    },
    "495": {
        "botName": "T4_POTION_COOLDOWN@1",
        "humanName": "MinorPoisonPotion"
    },
    "496": {
        "botName": "T6_POTION_COOLDOWN",
        "humanName": "PoisonPotion"
    },
    "497": {
        "botName": "T6_POTION_COOLDOWN@1",
        "humanName": "PoisonPotion"
    },
    "498": {
        "botName": "T8_POTION_COOLDOWN",
        "humanName": "MajorPoisonPotion"
    },
    "499": {
        "botName": "T8_POTION_COOLDOWN@1",
        "humanName": "MajorPoisonPotion"
    },
    "500": {
        "botName": "T8_POTION_CLEANSE",
        "humanName": "InvisibilityPotion"
    },
    "501": {
        "botName": "T8_POTION_CLEANSE@1",
        "humanName": "InvisibilityPotion"
    },
    "502": {
        "botName": "T1_WORM",
        "humanName": "Earthworm"
    },
    "503": {
        "botName": "T1_FISHINGBAIT",
        "humanName": "SimpleFishBait"
    },
    "504": {
        "botName": "T3_FISHINGBAIT",
        "humanName": "FancyFishBait"
    },
    "505": {
        "botName": "T5_FISHINGBAIT",
        "humanName": "SpecialFishBait"
    },
    "506": {
        "botName": "T1_MEAL_GRILLEDFISH",
        "humanName": "GrilledFish"
    },
    "507": {
        "botName": "T1_MEAL_SEAWEEDSALAD",
        "humanName": "SeaweedSalad"
    },
    "508": {
        "botName": "T1_MEAL_SOUP",
        "humanName": "CarrotSoup"
    },
    "509": {
        "botName": "T1_MEAL_SOUP@1",
        "humanName": "CarrotSoup"
    },
    "510": {
        "botName": "T1_MEAL_SOUP@2",
        "humanName": "CarrotSoup"
    },
    "511": {
        "botName": "T1_MEAL_SOUP@3",
        "humanName": "CarrotSoup"
    },
    "512": {
        "botName": "T3_MEAL_SOUP",
        "humanName": "WheatSoup"
    },
    "513": {
        "botName": "T3_MEAL_SOUP@1",
        "humanName": "WheatSoup"
    },
    "514": {
        "botName": "T3_MEAL_SOUP@2",
        "humanName": "WheatSoup"
    },
    "515": {
        "botName": "T3_MEAL_SOUP@3",
        "humanName": "WheatSoup"
    },
    "516": {
        "botName": "T5_MEAL_SOUP",
        "humanName": "CabbageSoup"
    },
    "517": {
        "botName": "T5_MEAL_SOUP@1",
        "humanName": "CabbageSoup"
    },
    "518": {
        "botName": "T5_MEAL_SOUP@2",
        "humanName": "CabbageSoup"
    },
    "519": {
        "botName": "T5_MEAL_SOUP@3",
        "humanName": "CabbageSoup"
    },
    "520": {
        "botName": "T1_MEAL_SOUP_FISH",
        "humanName": "GreenmoorClamSoup"
    },
    "521": {
        "botName": "T1_MEAL_SOUP_FISH@1",
        "humanName": "GreenmoorClamSoup"
    },
    "522": {
        "botName": "T1_MEAL_SOUP_FISH@2",
        "humanName": "GreenmoorClamSoup"
    },
    "523": {
        "botName": "T1_MEAL_SOUP_FISH@3",
        "humanName": "GreenmoorClamSoup"
    },
    "524": {
        "botName": "T3_MEAL_SOUP_FISH",
        "humanName": "MurkwaterClamSoup"
    },
    "525": {
        "botName": "T3_MEAL_SOUP_FISH@1",
        "humanName": "MurkwaterClamSoup"
    },
    "526": {
        "botName": "T3_MEAL_SOUP_FISH@2",
        "humanName": "MurkwaterClamSoup"
    },
    "527": {
        "botName": "T3_MEAL_SOUP_FISH@3",
        "humanName": "MurkwaterClamSoup"
    },
    "528": {
        "botName": "T5_MEAL_SOUP_FISH",
        "humanName": "BlackbogClamSoup"
    },
    "529": {
        "botName": "T5_MEAL_SOUP_FISH@1",
        "humanName": "BlackbogClamSoup"
    },
    "530": {
        "botName": "T5_MEAL_SOUP_FISH@2",
        "humanName": "BlackbogClamSoup"
    },
    "531": {
        "botName": "T5_MEAL_SOUP_FISH@3",
        "humanName": "BlackbogClamSoup"
    },
    "532": {
        "botName": "T2_MEAL_SALAD",
        "humanName": "BeanSalad"
    },
    "533": {
        "botName": "T2_MEAL_SALAD@1",
        "humanName": "BeanSalad"
    },
    "534": {
        "botName": "T2_MEAL_SALAD@2",
        "humanName": "BeanSalad"
    },
    "535": {
        "botName": "T2_MEAL_SALAD@3",
        "humanName": "BeanSalad"
    },
    "536": {
        "botName": "T4_MEAL_SALAD",
        "humanName": "TurnipSalad"
    },
    "537": {
        "botName": "T4_MEAL_SALAD@1",
        "humanName": "TurnipSalad"
    },
    "538": {
        "botName": "T4_MEAL_SALAD@2",
        "humanName": "TurnipSalad"
    },
    "539": {
        "botName": "T4_MEAL_SALAD@3",
        "humanName": "TurnipSalad"
    },
    "540": {
        "botName": "T6_MEAL_SALAD",
        "humanName": "PotatoSalad"
    },
    "541": {
        "botName": "T6_MEAL_SALAD@1",
        "humanName": "PotatoSalad"
    },
    "542": {
        "botName": "T6_MEAL_SALAD@2",
        "humanName": "PotatoSalad"
    },
    "543": {
        "botName": "T6_MEAL_SALAD@3",
        "humanName": "PotatoSalad"
    },
    "544": {
        "botName": "T2_MEAL_SALAD_FISH",
        "humanName": "ShallowshoreSquidSalad"
    },
    "545": {
        "botName": "T2_MEAL_SALAD_FISH@1",
        "humanName": "ShallowshoreSquidSalad"
    },
    "546": {
        "botName": "T2_MEAL_SALAD_FISH@2",
        "humanName": "ShallowshoreSquidSalad"
    },
    "547": {
        "botName": "T2_MEAL_SALAD_FISH@3",
        "humanName": "ShallowshoreSquidSalad"
    },
    "548": {
        "botName": "T4_MEAL_SALAD_FISH",
        "humanName": "MidwaterOctopusSalad"
    },
    "549": {
        "botName": "T4_MEAL_SALAD_FISH@1",
        "humanName": "MidwaterOctopusSalad"
    },
    "550": {
        "botName": "T4_MEAL_SALAD_FISH@2",
        "humanName": "MidwaterOctopusSalad"
    },
    "551": {
        "botName": "T4_MEAL_SALAD_FISH@3",
        "humanName": "MidwaterOctopusSalad"
    },
    "552": {
        "botName": "T6_MEAL_SALAD_FISH",
        "humanName": "DeepwaterKrakenSalad"
    },
    "553": {
        "botName": "T6_MEAL_SALAD_FISH@1",
        "humanName": "DeepwaterKrakenSalad"
    },
    "554": {
        "botName": "T6_MEAL_SALAD_FISH@2",
        "humanName": "DeepwaterKrakenSalad"
    },
    "555": {
        "botName": "T6_MEAL_SALAD_FISH@3",
        "humanName": "DeepwaterKrakenSalad"
    },
    "556": {
        "botName": "T3_MEAL_PIE",
        "humanName": "ChickenPie"
    },
    "557": {
        "botName": "T3_MEAL_PIE@1",
        "humanName": "ChickenPie"
    },
    "558": {
        "botName": "T3_MEAL_PIE@2",
        "humanName": "ChickenPie"
    },
    "559": {
        "botName": "T3_MEAL_PIE@3",
        "humanName": "ChickenPie"
    },
    "560": {
        "botName": "T5_MEAL_PIE",
        "humanName": "GoosePie"
    },
    "561": {
        "botName": "T5_MEAL_PIE@1",
        "humanName": "GoosePie"
    },
    "562": {
        "botName": "T5_MEAL_PIE@2",
        "humanName": "GoosePie"
    },
    "563": {
        "botName": "T5_MEAL_PIE@3",
        "humanName": "GoosePie"
    },
    "564": {
        "botName": "T7_MEAL_PIE",
        "humanName": "PorkPie"
    },
    "565": {
        "botName": "T7_MEAL_PIE@1",
        "humanName": "PorkPie"
    },
    "566": {
        "botName": "T7_MEAL_PIE@2",
        "humanName": "PorkPie"
    },
    "567": {
        "botName": "T7_MEAL_PIE@3",
        "humanName": "PorkPie"
    },
    "568": {
        "botName": "T3_MEAL_PIE_FISH",
        "humanName": "UplandColdeyePie"
    },
    "569": {
        "botName": "T3_MEAL_PIE_FISH@1",
        "humanName": "UplandColdeyePie"
    },
    "570": {
        "botName": "T3_MEAL_PIE_FISH@2",
        "humanName": "UplandColdeyePie"
    },
    "571": {
        "botName": "T3_MEAL_PIE_FISH@3",
        "humanName": "UplandColdeyePie"
    },
    "572": {
        "botName": "T5_MEAL_PIE_FISH",
        "humanName": "MountainBlindeyePie"
    },
    "573": {
        "botName": "T5_MEAL_PIE_FISH@1",
        "humanName": "MountainBlindeyePie"
    },
    "574": {
        "botName": "T5_MEAL_PIE_FISH@2",
        "humanName": "MountainBlindeyePie"
    },
    "575": {
        "botName": "T5_MEAL_PIE_FISH@3",
        "humanName": "MountainBlindeyePie"
    },
    "576": {
        "botName": "T7_MEAL_PIE_FISH",
        "humanName": "FrostpeakDeadeyePie"
    },
    "577": {
        "botName": "T7_MEAL_PIE_FISH@1",
        "humanName": "FrostpeakDeadeyePie"
    },
    "578": {
        "botName": "T7_MEAL_PIE_FISH@2",
        "humanName": "FrostpeakDeadeyePie"
    },
    "579": {
        "botName": "T7_MEAL_PIE_FISH@3",
        "humanName": "FrostpeakDeadeyePie"
    },
    "580": {
        "botName": "T3_MEAL_OMELETTE",
        "humanName": "ChickenOmelette"
    },
    "581": {
        "botName": "T3_MEAL_OMELETTE@1",
        "humanName": "ChickenOmelette"
    },
    "582": {
        "botName": "T3_MEAL_OMELETTE@2",
        "humanName": "ChickenOmelette"
    },
    "583": {
        "botName": "T3_MEAL_OMELETTE@3",
        "humanName": "ChickenOmelette"
    },
    "584": {
        "botName": "T5_MEAL_OMELETTE",
        "humanName": "GooseOmelette"
    },
    "585": {
        "botName": "T5_MEAL_OMELETTE@1",
        "humanName": "GooseOmelette"
    },
    "586": {
        "botName": "T5_MEAL_OMELETTE@2",
        "humanName": "GooseOmelette"
    },
    "587": {
        "botName": "T5_MEAL_OMELETTE@3",
        "humanName": "GooseOmelette"
    },
    "588": {
        "botName": "T7_MEAL_OMELETTE",
        "humanName": "PorkOmelette"
    },
    "589": {
        "botName": "T7_MEAL_OMELETTE@1",
        "humanName": "PorkOmelette"
    },
    "590": {
        "botName": "T7_MEAL_OMELETTE@2",
        "humanName": "PorkOmelette"
    },
    "591": {
        "botName": "T7_MEAL_OMELETTE@3",
        "humanName": "PorkOmelette"
    },
    "592": {
        "botName": "T3_MEAL_OMELETTE_FISH",
        "humanName": "LowriverCrabOmelette"
    },
    "593": {
        "botName": "T3_MEAL_OMELETTE_FISH@1",
        "humanName": "LowriverCrabOmelette"
    },
    "594": {
        "botName": "T3_MEAL_OMELETTE_FISH@2",
        "humanName": "LowriverCrabOmelette"
    },
    "595": {
        "botName": "T3_MEAL_OMELETTE_FISH@3",
        "humanName": "LowriverCrabOmelette"
    },
    "596": {
        "botName": "T5_MEAL_OMELETTE_FISH",
        "humanName": "DrybrookCrabOmelette"
    },
    "597": {
        "botName": "T5_MEAL_OMELETTE_FISH@1",
        "humanName": "DrybrookCrabOmelette"
    },
    "598": {
        "botName": "T5_MEAL_OMELETTE_FISH@2",
        "humanName": "DrybrookCrabOmelette"
    },
    "599": {
        "botName": "T5_MEAL_OMELETTE_FISH@3",
        "humanName": "DrybrookCrabOmelette"
    },
    "600": {
        "botName": "T7_MEAL_OMELETTE_FISH",
        "humanName": "DustholeCrabOmelette"
    },
    "601": {
        "botName": "T7_MEAL_OMELETTE_FISH@1",
        "humanName": "DustholeCrabOmelette"
    },
    "602": {
        "botName": "T7_MEAL_OMELETTE_FISH@2",
        "humanName": "DustholeCrabOmelette"
    },
    "603": {
        "botName": "T7_MEAL_OMELETTE_FISH@3",
        "humanName": "DustholeCrabOmelette"
    },
    "604": {
        "botName": "T3_MEAL_OMELETTE_AVALON",
        "humanName": "AvalonianChickenOmelette"
    },
    "605": {
        "botName": "T3_MEAL_OMELETTE_AVALON@1",
        "humanName": "AvalonianChickenOmelette"
    },
    "606": {
        "botName": "T3_MEAL_OMELETTE_AVALON@2",
        "humanName": "AvalonianChickenOmelette"
    },
    "607": {
        "botName": "T3_MEAL_OMELETTE_AVALON@3",
        "humanName": "AvalonianChickenOmelette"
    },
    "608": {
        "botName": "T5_MEAL_OMELETTE_AVALON",
        "humanName": "AvalonianGooseOmelette"
    },
    "609": {
        "botName": "T5_MEAL_OMELETTE_AVALON@1",
        "humanName": "AvalonianGooseOmelette"
    },
    "610": {
        "botName": "T5_MEAL_OMELETTE_AVALON@2",
        "humanName": "AvalonianGooseOmelette"
    },
    "611": {
        "botName": "T5_MEAL_OMELETTE_AVALON@3",
        "humanName": "AvalonianGooseOmelette"
    },
    "612": {
        "botName": "T7_MEAL_OMELETTE_AVALON",
        "humanName": "AvalonianPorkOmelette"
    },
    "613": {
        "botName": "T7_MEAL_OMELETTE_AVALON@1",
        "humanName": "AvalonianPorkOmelette"
    },
    "614": {
        "botName": "T7_MEAL_OMELETTE_AVALON@2",
        "humanName": "AvalonianPorkOmelette"
    },
    "615": {
        "botName": "T7_MEAL_OMELETTE_AVALON@3",
        "humanName": "AvalonianPorkOmelette"
    },
    "616": {
        "botName": "T4_MEAL_STEW",
        "humanName": "GoatStew"
    },
    "617": {
        "botName": "T4_MEAL_STEW@1",
        "humanName": "GoatStew"
    },
    "618": {
        "botName": "T4_MEAL_STEW@2",
        "humanName": "GoatStew"
    },
    "619": {
        "botName": "T4_MEAL_STEW@3",
        "humanName": "GoatStew"
    },
    "620": {
        "botName": "T6_MEAL_STEW",
        "humanName": "MuttonStew"
    },
    "621": {
        "botName": "T6_MEAL_STEW@1",
        "humanName": "MuttonStew"
    },
    "622": {
        "botName": "T6_MEAL_STEW@2",
        "humanName": "MuttonStew"
    },
    "623": {
        "botName": "T6_MEAL_STEW@3",
        "humanName": "MuttonStew"
    },
    "624": {
        "botName": "T8_MEAL_STEW",
        "humanName": "BeefStew"
    },
    "625": {
        "botName": "T8_MEAL_STEW@1",
        "humanName": "BeefStew"
    },
    "626": {
        "botName": "T8_MEAL_STEW@2",
        "humanName": "BeefStew"
    },
    "627": {
        "botName": "T8_MEAL_STEW@3",
        "humanName": "BeefStew"
    },
    "628": {
        "botName": "T4_MEAL_STEW_FISH",
        "humanName": "GreenriverEelStew"
    },
    "629": {
        "botName": "T4_MEAL_STEW_FISH@1",
        "humanName": "GreenriverEelStew"
    },
    "630": {
        "botName": "T4_MEAL_STEW_FISH@2",
        "humanName": "GreenriverEelStew"
    },
    "631": {
        "botName": "T4_MEAL_STEW_FISH@3",
        "humanName": "GreenriverEelStew"
    },
    "632": {
        "botName": "T6_MEAL_STEW_FISH",
        "humanName": "RedspringEelStew"
    },
    "633": {
        "botName": "T6_MEAL_STEW_FISH@1",
        "humanName": "RedspringEelStew"
    },
    "634": {
        "botName": "T6_MEAL_STEW_FISH@2",
        "humanName": "RedspringEelStew"
    },
    "635": {
        "botName": "T6_MEAL_STEW_FISH@3",
        "humanName": "RedspringEelStew"
    },
    "636": {
        "botName": "T8_MEAL_STEW_FISH",
        "humanName": "DeadwaterEelStew"
    },
    "637": {
        "botName": "T8_MEAL_STEW_FISH@1",
        "humanName": "DeadwaterEelStew"
    },
    "638": {
        "botName": "T8_MEAL_STEW_FISH@2",
        "humanName": "DeadwaterEelStew"
    },
    "639": {
        "botName": "T8_MEAL_STEW_FISH@3",
        "humanName": "DeadwaterEelStew"
    },
    "640": {
        "botName": "T4_MEAL_STEW_AVALON",
        "humanName": "AvalonianGoatStew"
    },
    "641": {
        "botName": "T4_MEAL_STEW_AVALON@1",
        "humanName": "AvalonianGoatStew"
    },
    "642": {
        "botName": "T4_MEAL_STEW_AVALON@2",
        "humanName": "AvalonianGoatStew"
    },
    "643": {
        "botName": "T4_MEAL_STEW_AVALON@3",
        "humanName": "AvalonianGoatStew"
    },
    "644": {
        "botName": "T6_MEAL_STEW_AVALON",
        "humanName": "AvalonianMuttonStew"
    },
    "645": {
        "botName": "T6_MEAL_STEW_AVALON@1",
        "humanName": "AvalonianMuttonStew"
    },
    "646": {
        "botName": "T6_MEAL_STEW_AVALON@2",
        "humanName": "AvalonianMuttonStew"
    },
    "647": {
        "botName": "T6_MEAL_STEW_AVALON@3",
        "humanName": "AvalonianMuttonStew"
    },
    "648": {
        "botName": "T8_MEAL_STEW_AVALON",
        "humanName": "AvalonianBeefStew"
    },
    "649": {
        "botName": "T8_MEAL_STEW_AVALON@1",
        "humanName": "AvalonianBeefStew"
    },
    "650": {
        "botName": "T8_MEAL_STEW_AVALON@2",
        "humanName": "AvalonianBeefStew"
    },
    "651": {
        "botName": "T8_MEAL_STEW_AVALON@3",
        "humanName": "AvalonianBeefStew"
    },
    "652": {
        "botName": "T4_MEAL_SANDWICH",
        "humanName": "GoatSandwich"
    },
    "653": {
        "botName": "T4_MEAL_SANDWICH@1",
        "humanName": "GoatSandwich"
    },
    "654": {
        "botName": "T4_MEAL_SANDWICH@2",
        "humanName": "GoatSandwich"
    },
    "655": {
        "botName": "T4_MEAL_SANDWICH@3",
        "humanName": "GoatSandwich"
    },
    "656": {
        "botName": "T6_MEAL_SANDWICH",
        "humanName": "MuttonSandwich"
    },
    "657": {
        "botName": "T6_MEAL_SANDWICH@1",
        "humanName": "MuttonSandwich"
    },
    "658": {
        "botName": "T6_MEAL_SANDWICH@2",
        "humanName": "MuttonSandwich"
    },
    "659": {
        "botName": "T6_MEAL_SANDWICH@3",
        "humanName": "MuttonSandwich"
    },
    "660": {
        "botName": "T8_MEAL_SANDWICH",
        "humanName": "BeefSandwich"
    },
    "661": {
        "botName": "T8_MEAL_SANDWICH@1",
        "humanName": "BeefSandwich"
    },
    "662": {
        "botName": "T8_MEAL_SANDWICH@2",
        "humanName": "BeefSandwich"
    },
    "663": {
        "botName": "T8_MEAL_SANDWICH@3",
        "humanName": "BeefSandwich"
    },
    "664": {
        "botName": "T4_MEAL_SANDWICH_FISH",
        "humanName": "StonestreamLurcherSandwich"
    },
    "665": {
        "botName": "T4_MEAL_SANDWICH_FISH@1",
        "humanName": "StonestreamLurcherSandwich"
    },
    "666": {
        "botName": "T4_MEAL_SANDWICH_FISH@2",
        "humanName": "StonestreamLurcherSandwich"
    },
    "667": {
        "botName": "T4_MEAL_SANDWICH_FISH@3",
        "humanName": "StonestreamLurcherSandwich"
    },
    "668": {
        "botName": "T6_MEAL_SANDWICH_FISH",
        "humanName": "RushwaterLurcherSandwich"
    },
    "669": {
        "botName": "T6_MEAL_SANDWICH_FISH@1",
        "humanName": "RushwaterLurcherSandwich"
    },
    "670": {
        "botName": "T6_MEAL_SANDWICH_FISH@2",
        "humanName": "RushwaterLurcherSandwich"
    },
    "671": {
        "botName": "T6_MEAL_SANDWICH_FISH@3",
        "humanName": "RushwaterLurcherSandwich"
    },
    "672": {
        "botName": "T8_MEAL_SANDWICH_FISH",
        "humanName": "ThunderfallLurcherSandwich"
    },
    "673": {
        "botName": "T8_MEAL_SANDWICH_FISH@1",
        "humanName": "ThunderfallLurcherSandwich"
    },
    "674": {
        "botName": "T8_MEAL_SANDWICH_FISH@2",
        "humanName": "ThunderfallLurcherSandwich"
    },
    "675": {
        "botName": "T8_MEAL_SANDWICH_FISH@3",
        "humanName": "ThunderfallLurcherSandwich"
    },
    "676": {
        "botName": "T4_MEAL_SANDWICH_AVALON",
        "humanName": "AvalonianGoatSandwich"
    },
    "677": {
        "botName": "T4_MEAL_SANDWICH_AVALON@1",
        "humanName": "AvalonianGoatSandwich"
    },
    "678": {
        "botName": "T4_MEAL_SANDWICH_AVALON@2",
        "humanName": "AvalonianGoatSandwich"
    },
    "679": {
        "botName": "T4_MEAL_SANDWICH_AVALON@3",
        "humanName": "AvalonianGoatSandwich"
    },
    "680": {
        "botName": "T6_MEAL_SANDWICH_AVALON",
        "humanName": "AvalonianMuttonSandwich"
    },
    "681": {
        "botName": "T6_MEAL_SANDWICH_AVALON@1",
        "humanName": "AvalonianMuttonSandwich"
    },
    "682": {
        "botName": "T6_MEAL_SANDWICH_AVALON@2",
        "humanName": "AvalonianMuttonSandwich"
    },
    "683": {
        "botName": "T6_MEAL_SANDWICH_AVALON@3",
        "humanName": "AvalonianMuttonSandwich"
    },
    "684": {
        "botName": "T8_MEAL_SANDWICH_AVALON",
        "humanName": "AvalonianBeefSandwich"
    },
    "685": {
        "botName": "T8_MEAL_SANDWICH_AVALON@1",
        "humanName": "AvalonianBeefSandwich"
    },
    "686": {
        "botName": "T8_MEAL_SANDWICH_AVALON@2",
        "humanName": "AvalonianBeefSandwich"
    },
    "687": {
        "botName": "T8_MEAL_SANDWICH_AVALON@3",
        "humanName": "AvalonianBeefSandwich"
    },
    "688": {
        "botName": "T3_MEAL_ROAST",
        "humanName": "RoastChicken"
    },
    "689": {
        "botName": "T3_MEAL_ROAST@1",
        "humanName": "RoastChicken"
    },
    "690": {
        "botName": "T3_MEAL_ROAST@2",
        "humanName": "RoastChicken"
    },
    "691": {
        "botName": "T3_MEAL_ROAST@3",
        "humanName": "RoastChicken"
    },
    "692": {
        "botName": "T5_MEAL_ROAST",
        "humanName": "RoastGoose"
    },
    "693": {
        "botName": "T5_MEAL_ROAST@1",
        "humanName": "RoastGoose"
    },
    "694": {
        "botName": "T5_MEAL_ROAST@2",
        "humanName": "RoastGoose"
    },
    "695": {
        "botName": "T5_MEAL_ROAST@3",
        "humanName": "RoastGoose"
    },
    "696": {
        "botName": "T7_MEAL_ROAST",
        "humanName": "RoastPork"
    },
    "697": {
        "botName": "T7_MEAL_ROAST@1",
        "humanName": "RoastPork"
    },
    "698": {
        "botName": "T7_MEAL_ROAST@2",
        "humanName": "RoastPork"
    },
    "699": {
        "botName": "T7_MEAL_ROAST@3",
        "humanName": "RoastPork"
    },
    "700": {
        "botName": "T3_MEAL_ROAST_FISH",
        "humanName": "RoastedWhitefogSnapper"
    },
    "701": {
        "botName": "T3_MEAL_ROAST_FISH@1",
        "humanName": "RoastedWhitefogSnapper"
    },
    "702": {
        "botName": "T3_MEAL_ROAST_FISH@2",
        "humanName": "RoastedWhitefogSnapper"
    },
    "703": {
        "botName": "T3_MEAL_ROAST_FISH@3",
        "humanName": "RoastedWhitefogSnapper"
    },
    "704": {
        "botName": "T5_MEAL_ROAST_FISH",
        "humanName": "RoastedClearhazeSnapper"
    },
    "705": {
        "botName": "T5_MEAL_ROAST_FISH@1",
        "humanName": "RoastedClearhazeSnapper"
    },
    "706": {
        "botName": "T5_MEAL_ROAST_FISH@2",
        "humanName": "RoastedClearhazeSnapper"
    },
    "707": {
        "botName": "T5_MEAL_ROAST_FISH@3",
        "humanName": "RoastedClearhazeSnapper"
    },
    "708": {
        "botName": "T7_MEAL_ROAST_FISH",
        "humanName": "RoastedPuremistSnapper"
    },
    "709": {
        "botName": "T7_MEAL_ROAST_FISH@1",
        "humanName": "RoastedPuremistSnapper"
    },
    "710": {
        "botName": "T7_MEAL_ROAST_FISH@2",
        "humanName": "RoastedPuremistSnapper"
    },
    "711": {
        "botName": "T7_MEAL_ROAST_FISH@3",
        "humanName": "RoastedPuremistSnapper"
    },
    "712": {
        "botName": "T3_MEAT",
        "humanName": "RawChicken"
    },
    "713": {
        "botName": "T4_MEAT",
        "humanName": "RawGoat"
    },
    "714": {
        "botName": "T5_MEAT",
        "humanName": "RawGoose"
    },
    "715": {
        "botName": "T6_MEAT",
        "humanName": "RawMutton"
    },
    "716": {
        "botName": "T7_MEAT",
        "humanName": "RawPork"
    },
    "717": {
        "botName": "T8_MEAT",
        "humanName": "RawBeef"
    },
    "718": {
        "botName": "T4_BUTTER",
        "humanName": "Goat'sButter"
    },
    "719": {
        "botName": "T6_BUTTER",
        "humanName": "Sheep'sButter"
    },
    "720": {
        "botName": "T8_BUTTER",
        "humanName": "Cow'sButter"
    },
    "721": {
        "botName": "T6_ALCOHOL",
        "humanName": "PotatoSchnapps"
    },
    "722": {
        "botName": "T7_ALCOHOL",
        "humanName": "CornHooch"
    },
    "723": {
        "botName": "T8_ALCOHOL",
        "humanName": "PumpkinMoonshine"
    },
    "724": {
        "botName": "T4_BREAD",
        "humanName": "Bread"
    },
    "725": {
        "botName": "T3_FLOUR",
        "humanName": "Flour"
    },
    "726": {
        "botName": "T1_WOOD",
        "humanName": "RoughLogs"
    },
    "727": {
        "botName": "T2_WOOD",
        "humanName": "BirchLogs"
    },
    "728": {
        "botName": "T3_WOOD",
        "humanName": "ChestnutLogs"
    },
    "729": {
        "botName": "T4_WOOD",
        "humanName": "PineLogs"
    },
    "730": {
        "botName": "T5_WOOD",
        "humanName": "CedarLogs"
    },
    "731": {
        "botName": "T6_WOOD",
        "humanName": "BloodoakLogs"
    },
    "732": {
        "botName": "T7_WOOD",
        "humanName": "AshenbarkLogs"
    },
    "733": {
        "botName": "T8_WOOD",
        "humanName": "WhitewoodLogs"
    },
    "734": {
        "botName": "T4_WOOD_LEVEL1@1",
        "humanName": "UncommonPineLogs"
    },
    "735": {
        "botName": "T5_WOOD_LEVEL1@1",
        "humanName": "UncommonCedarLogs"
    },
    "736": {
        "botName": "T6_WOOD_LEVEL1@1",
        "humanName": "UncommonBloodoakLogs"
    },
    "737": {
        "botName": "T7_WOOD_LEVEL1@1",
        "humanName": "UncommonAshenbarkLogs"
    },
    "738": {
        "botName": "T8_WOOD_LEVEL1@1",
        "humanName": "UncommonWhitewoodLogs"
    },
    "739": {
        "botName": "T4_WOOD_LEVEL2@2",
        "humanName": "RarePineLogs"
    },
    "740": {
        "botName": "T5_WOOD_LEVEL2@2",
        "humanName": "RareCedarLogs"
    },
    "741": {
        "botName": "T6_WOOD_LEVEL2@2",
        "humanName": "RareBloodoakLogs"
    },
    "742": {
        "botName": "T7_WOOD_LEVEL2@2",
        "humanName": "RareAshenbarkLogs"
    },
    "743": {
        "botName": "T8_WOOD_LEVEL2@2",
        "humanName": "RareWhitewoodLogs"
    },
    "744": {
        "botName": "T4_WOOD_LEVEL3@3",
        "humanName": "ExceptionalPineLogs"
    },
    "745": {
        "botName": "T5_WOOD_LEVEL3@3",
        "humanName": "ExceptionalCedarLogs"
    },
    "746": {
        "botName": "T6_WOOD_LEVEL3@3",
        "humanName": "ExceptionalBloodoakLogs"
    },
    "747": {
        "botName": "T7_WOOD_LEVEL3@3",
        "humanName": "ExceptionalAshenbarkLogs"
    },
    "748": {
        "botName": "T8_WOOD_LEVEL3@3",
        "humanName": "ExceptionalWhitewoodLogs"
    },
    "749": {
        "botName": "T1_ROCK",
        "humanName": "RoughStone"
    },
    "750": {
        "botName": "T2_ROCK",
        "humanName": "Limestone"
    },
    "751": {
        "botName": "T3_ROCK",
        "humanName": "Sandstone"
    },
    "752": {
        "botName": "T4_ROCK",
        "humanName": "Travertine"
    },
    "753": {
        "botName": "T5_ROCK",
        "humanName": "Granite"
    },
    "754": {
        "botName": "T6_ROCK",
        "humanName": "Slate"
    },
    "755": {
        "botName": "T7_ROCK",
        "humanName": "Basalt"
    },
    "756": {
        "botName": "T8_ROCK",
        "humanName": "Marble"
    },
    "757": {
        "botName": "T4_ROCK_LEVEL1@1",
        "humanName": "UncommonTravertine"
    },
    "758": {
        "botName": "T5_ROCK_LEVEL1@1",
        "humanName": "UncommonGranite"
    },
    "759": {
        "botName": "T6_ROCK_LEVEL1@1",
        "humanName": "UncommonSlate"
    },
    "760": {
        "botName": "T7_ROCK_LEVEL1@1",
        "humanName": "UncommonBasalt"
    },
    "761": {
        "botName": "T8_ROCK_LEVEL1@1",
        "humanName": "UncommonMarble"
    },
    "762": {
        "botName": "T4_ROCK_LEVEL2@2",
        "humanName": "RareTravertine"
    },
    "763": {
        "botName": "T5_ROCK_LEVEL2@2",
        "humanName": "RareGranite"
    },
    "764": {
        "botName": "T6_ROCK_LEVEL2@2",
        "humanName": "RareSlate"
    },
    "765": {
        "botName": "T7_ROCK_LEVEL2@2",
        "humanName": "RareBasalt"
    },
    "766": {
        "botName": "T8_ROCK_LEVEL2@2",
        "humanName": "RareMarble"
    },
    "767": {
        "botName": "T4_ROCK_LEVEL3@3",
        "humanName": "ExceptionalTravertine"
    },
    "768": {
        "botName": "T5_ROCK_LEVEL3@3",
        "humanName": "ExceptionalGranite"
    },
    "769": {
        "botName": "T6_ROCK_LEVEL3@3",
        "humanName": "ExceptionalSlate"
    },
    "770": {
        "botName": "T7_ROCK_LEVEL3@3",
        "humanName": "ExceptionalBasalt"
    },
    "771": {
        "botName": "T8_ROCK_LEVEL3@3",
        "humanName": "ExceptionalMarble"
    },
    "772": {
        "botName": "T2_ORE",
        "humanName": "CopperOre"
    },
    "773": {
        "botName": "T3_ORE",
        "humanName": "TinOre"
    },
    "774": {
        "botName": "T4_ORE",
        "humanName": "IronOre"
    },
    "775": {
        "botName": "T5_ORE",
        "humanName": "TitaniumOre"
    },
    "776": {
        "botName": "T6_ORE",
        "humanName": "RuniteOre"
    },
    "777": {
        "botName": "T7_ORE",
        "humanName": "MeteoriteOre"
    },
    "778": {
        "botName": "T8_ORE",
        "humanName": "AdamantiumOre"
    },
    "779": {
        "botName": "T4_ORE_LEVEL1@1",
        "humanName": "UncommonIronOre"
    },
    "780": {
        "botName": "T5_ORE_LEVEL1@1",
        "humanName": "UncommonTitaniumOre"
    },
    "781": {
        "botName": "T6_ORE_LEVEL1@1",
        "humanName": "UncommonRuniteOre"
    },
    "782": {
        "botName": "T7_ORE_LEVEL1@1",
        "humanName": "UncommonMeteoriteOre"
    },
    "783": {
        "botName": "T8_ORE_LEVEL1@1",
        "humanName": "UncommonAdamantiumOre"
    },
    "784": {
        "botName": "T4_ORE_LEVEL2@2",
        "humanName": "RareIronOre"
    },
    "785": {
        "botName": "T5_ORE_LEVEL2@2",
        "humanName": "RareTitaniumOre"
    },
    "786": {
        "botName": "T6_ORE_LEVEL2@2",
        "humanName": "RareRuniteOre"
    },
    "787": {
        "botName": "T7_ORE_LEVEL2@2",
        "humanName": "RareMeteoriteOre"
    },
    "788": {
        "botName": "T8_ORE_LEVEL2@2",
        "humanName": "RareAdamantiumOre"
    },
    "789": {
        "botName": "T4_ORE_LEVEL3@3",
        "humanName": "ExceptionalIronOre"
    },
    "790": {
        "botName": "T5_ORE_LEVEL3@3",
        "humanName": "ExceptionalTitaniumOre"
    },
    "791": {
        "botName": "T6_ORE_LEVEL3@3",
        "humanName": "ExceptionalRuniteOre"
    },
    "792": {
        "botName": "T7_ORE_LEVEL3@3",
        "humanName": "ExceptionalMeteoriteOre"
    },
    "793": {
        "botName": "T8_ORE_LEVEL3@3",
        "humanName": "ExceptionalAdamantiumOre"
    },
    "794": {
        "botName": "T1_HIDE",
        "humanName": "ScrapsofHide"
    },
    "795": {
        "botName": "T2_HIDE",
        "humanName": "RuggedHide"
    },
    "796": {
        "botName": "T3_HIDE",
        "humanName": "ThinHide"
    },
    "797": {
        "botName": "T4_HIDE",
        "humanName": "MediumHide"
    },
    "798": {
        "botName": "T5_HIDE",
        "humanName": "HeavyHide"
    },
    "799": {
        "botName": "T6_HIDE",
        "humanName": "RobustHide"
    },
    "800": {
        "botName": "T7_HIDE",
        "humanName": "ThickHide"
    },
    "801": {
        "botName": "T8_HIDE",
        "humanName": "ResilientHide"
    },
    "802": {
        "botName": "T4_HIDE_LEVEL1@1",
        "humanName": "UncommonMediumHide"
    },
    "803": {
        "botName": "T5_HIDE_LEVEL1@1",
        "humanName": "UncommonHeavyHide"
    },
    "804": {
        "botName": "T6_HIDE_LEVEL1@1",
        "humanName": "UncommonRobustHide"
    },
    "805": {
        "botName": "T7_HIDE_LEVEL1@1",
        "humanName": "UncommonThickHide"
    },
    "806": {
        "botName": "T8_HIDE_LEVEL1@1",
        "humanName": "UncommonResilientHide"
    },
    "807": {
        "botName": "T4_HIDE_LEVEL2@2",
        "humanName": "RareMediumHide"
    },
    "808": {
        "botName": "T5_HIDE_LEVEL2@2",
        "humanName": "RareHeavyHide"
    },
    "809": {
        "botName": "T6_HIDE_LEVEL2@2",
        "humanName": "RareRobustHide"
    },
    "810": {
        "botName": "T7_HIDE_LEVEL2@2",
        "humanName": "RareThickHide"
    },
    "811": {
        "botName": "T8_HIDE_LEVEL2@2",
        "humanName": "RareResilientHide"
    },
    "812": {
        "botName": "T4_HIDE_LEVEL3@3",
        "humanName": "ExceptionalMediumHide"
    },
    "813": {
        "botName": "T5_HIDE_LEVEL3@3",
        "humanName": "ExceptionalHeavyHide"
    },
    "814": {
        "botName": "T6_HIDE_LEVEL3@3",
        "humanName": "ExceptionalRobustHide"
    },
    "815": {
        "botName": "T7_HIDE_LEVEL3@3",
        "humanName": "ExceptionalThickHide"
    },
    "816": {
        "botName": "T8_HIDE_LEVEL3@3",
        "humanName": "ExceptionalResilientHide"
    },
    "817": {
        "botName": "T2_FIBER",
        "humanName": "Cotton"
    },
    "818": {
        "botName": "T3_FIBER",
        "humanName": "Flax"
    },
    "819": {
        "botName": "T4_FIBER",
        "humanName": "Hemp"
    },
    "820": {
        "botName": "T5_FIBER",
        "humanName": "Skyflower"
    },
    "821": {
        "botName": "T6_FIBER",
        "humanName": "AmberleafCotton"
    },
    "822": {
        "botName": "T7_FIBER",
        "humanName": "Sunflax"
    },
    "823": {
        "botName": "T8_FIBER",
        "humanName": "GhostHemp"
    },
    "824": {
        "botName": "T4_FIBER_LEVEL1@1",
        "humanName": "UncommonHemp"
    },
    "825": {
        "botName": "T5_FIBER_LEVEL1@1",
        "humanName": "UncommonSkyflower"
    },
    "826": {
        "botName": "T6_FIBER_LEVEL1@1",
        "humanName": "UncommonAmberleafCotton"
    },
    "827": {
        "botName": "T7_FIBER_LEVEL1@1",
        "humanName": "UncommonSunflax"
    },
    "828": {
        "botName": "T8_FIBER_LEVEL1@1",
        "humanName": "UncommonGhostHemp"
    },
    "829": {
        "botName": "T4_FIBER_LEVEL2@2",
        "humanName": "RareHemp"
    },
    "830": {
        "botName": "T5_FIBER_LEVEL2@2",
        "humanName": "RareSkyflower"
    },
    "831": {
        "botName": "T6_FIBER_LEVEL2@2",
        "humanName": "RareAmberleafCotton"
    },
    "832": {
        "botName": "T7_FIBER_LEVEL2@2",
        "humanName": "RareSunflax"
    },
    "833": {
        "botName": "T8_FIBER_LEVEL2@2",
        "humanName": "RareGhostHemp"
    },
    "834": {
        "botName": "T4_FIBER_LEVEL3@3",
        "humanName": "ExceptionalHemp"
    },
    "835": {
        "botName": "T5_FIBER_LEVEL3@3",
        "humanName": "ExceptionalSkyflower"
    },
    "836": {
        "botName": "T6_FIBER_LEVEL3@3",
        "humanName": "ExceptionalAmberleafCotton"
    },
    "837": {
        "botName": "T7_FIBER_LEVEL3@3",
        "humanName": "ExceptionalSunflax"
    },
    "838": {
        "botName": "T8_FIBER_LEVEL3@3",
        "humanName": "ExceptionalGhostHemp"
    },
    "839": {
        "botName": "T2_PLANKS",
        "humanName": "BirchPlanks"
    },
    "840": {
        "botName": "T3_PLANKS",
        "humanName": "ChestnutPlanks"
    },
    "841": {
        "botName": "T4_PLANKS",
        "humanName": "PinePlanks"
    },
    "842": {
        "botName": "T5_PLANKS",
        "humanName": "CedarPlanks"
    },
    "843": {
        "botName": "T6_PLANKS",
        "humanName": "BloodoakPlanks"
    },
    "844": {
        "botName": "T7_PLANKS",
        "humanName": "AshenbarkPlanks"
    },
    "845": {
        "botName": "T8_PLANKS",
        "humanName": "WhitewoodPlanks"
    },
    "846": {
        "botName": "T4_PLANKS_LEVEL1@1",
        "humanName": "UncommonPinePlanks"
    },
    "847": {
        "botName": "T5_PLANKS_LEVEL1@1",
        "humanName": "UncommonCedarPlanks"
    },
    "848": {
        "botName": "T6_PLANKS_LEVEL1@1",
        "humanName": "UncommonBloodoakPlanks"
    },
    "849": {
        "botName": "T7_PLANKS_LEVEL1@1",
        "humanName": "UncommonAshenbarkPlanks"
    },
    "850": {
        "botName": "T8_PLANKS_LEVEL1@1",
        "humanName": "UncommonWhitewoodPlanks"
    },
    "851": {
        "botName": "T4_PLANKS_LEVEL2@2",
        "humanName": "RarePinePlanks"
    },
    "852": {
        "botName": "T5_PLANKS_LEVEL2@2",
        "humanName": "RareCedarPlanks"
    },
    "853": {
        "botName": "T6_PLANKS_LEVEL2@2",
        "humanName": "RareBloodoakPlanks"
    },
    "854": {
        "botName": "T7_PLANKS_LEVEL2@2",
        "humanName": "RareAshenbarkPlanks"
    },
    "855": {
        "botName": "T8_PLANKS_LEVEL2@2",
        "humanName": "RareWhitewoodPlanks"
    },
    "856": {
        "botName": "T4_PLANKS_LEVEL3@3",
        "humanName": "ExceptionalPinePlanks"
    },
    "857": {
        "botName": "T5_PLANKS_LEVEL3@3",
        "humanName": "ExceptionalCedarPlanks"
    },
    "858": {
        "botName": "T6_PLANKS_LEVEL3@3",
        "humanName": "ExceptionalBloodoakPlanks"
    },
    "859": {
        "botName": "T7_PLANKS_LEVEL3@3",
        "humanName": "ExceptionalAshenbarkPlanks"
    },
    "860": {
        "botName": "T8_PLANKS_LEVEL3@3",
        "humanName": "ExceptionalWhitewoodPlanks"
    },
    "861": {
        "botName": "T2_STONEBLOCK",
        "humanName": "LimestoneBlock"
    },
    "862": {
        "botName": "T3_STONEBLOCK",
        "humanName": "SandstoneBlock"
    },
    "863": {
        "botName": "T4_STONEBLOCK",
        "humanName": "TravertineBlock"
    },
    "864": {
        "botName": "T5_STONEBLOCK",
        "humanName": "GraniteBlock"
    },
    "865": {
        "botName": "T6_STONEBLOCK",
        "humanName": "SlateBlock"
    },
    "866": {
        "botName": "T7_STONEBLOCK",
        "humanName": "BasaltBlock"
    },
    "867": {
        "botName": "T8_STONEBLOCK",
        "humanName": "MarbleBlock"
    },
    "868": {
        "botName": "T2_METALBAR",
        "humanName": "CopperBar"
    },
    "869": {
        "botName": "T3_METALBAR",
        "humanName": "BronzeBar"
    },
    "870": {
        "botName": "T4_METALBAR",
        "humanName": "SteelBar"
    },
    "871": {
        "botName": "T5_METALBAR",
        "humanName": "TitaniumSteelBar"
    },
    "872": {
        "botName": "T6_METALBAR",
        "humanName": "RuniteSteelBar"
    },
    "873": {
        "botName": "T7_METALBAR",
        "humanName": "MeteoriteSteelBar"
    },
    "874": {
        "botName": "T8_METALBAR",
        "humanName": "AdamantiumSteelBar"
    },
    "875": {
        "botName": "T4_METALBAR_LEVEL1@1",
        "humanName": "UncommonSteelBar"
    },
    "876": {
        "botName": "T5_METALBAR_LEVEL1@1",
        "humanName": "UncommonTitaniumSteelBar"
    },
    "877": {
        "botName": "T6_METALBAR_LEVEL1@1",
        "humanName": "UncommonRuniteSteelBar"
    },
    "878": {
        "botName": "T7_METALBAR_LEVEL1@1",
        "humanName": "UncommonMeteoriteSteelBar"
    },
    "879": {
        "botName": "T8_METALBAR_LEVEL1@1",
        "humanName": "UncommonAdamantiumSteelBar"
    },
    "880": {
        "botName": "T4_METALBAR_LEVEL2@2",
        "humanName": "RareSteelBar"
    },
    "881": {
        "botName": "T5_METALBAR_LEVEL2@2",
        "humanName": "RareTitaniumSteelBar"
    },
    "882": {
        "botName": "T6_METALBAR_LEVEL2@2",
        "humanName": "RareRuniteSteelBar"
    },
    "883": {
        "botName": "T7_METALBAR_LEVEL2@2",
        "humanName": "RareMeteoriteSteelBar"
    },
    "884": {
        "botName": "T8_METALBAR_LEVEL2@2",
        "humanName": "RareAdamantiumSteelBar"
    },
    "885": {
        "botName": "T4_METALBAR_LEVEL3@3",
        "humanName": "ExceptionalSteelBar"
    },
    "886": {
        "botName": "T5_METALBAR_LEVEL3@3",
        "humanName": "ExceptionalTitaniumSteelBar"
    },
    "887": {
        "botName": "T6_METALBAR_LEVEL3@3",
        "humanName": "ExceptionalRuniteSteelBar"
    },
    "888": {
        "botName": "T7_METALBAR_LEVEL3@3",
        "humanName": "ExceptionalMeteoriteSteelBar"
    },
    "889": {
        "botName": "T8_METALBAR_LEVEL3@3",
        "humanName": "ExceptionalAdamantiumSteelBar"
    },
    "890": {
        "botName": "T2_LEATHER",
        "humanName": "StiffLeather"
    },
    "891": {
        "botName": "T3_LEATHER",
        "humanName": "ThickLeather"
    },
    "892": {
        "botName": "T4_LEATHER",
        "humanName": "WorkedLeather"
    },
    "893": {
        "botName": "T5_LEATHER",
        "humanName": "CuredLeather"
    },
    "894": {
        "botName": "T6_LEATHER",
        "humanName": "HardenedLeather"
    },
    "895": {
        "botName": "T7_LEATHER",
        "humanName": "ReinforcedLeather"
    },
    "896": {
        "botName": "T8_LEATHER",
        "humanName": "FortifiedLeather"
    },
    "897": {
        "botName": "T4_LEATHER_LEVEL1@1",
        "humanName": "UncommonWorkedLeather"
    },
    "898": {
        "botName": "T5_LEATHER_LEVEL1@1",
        "humanName": "UncommonCuredLeather"
    },
    "899": {
        "botName": "T6_LEATHER_LEVEL1@1",
        "humanName": "UncommonHardenedLeather"
    },
    "900": {
        "botName": "T7_LEATHER_LEVEL1@1",
        "humanName": "UncommonReinforcedLeather"
    },
    "901": {
        "botName": "T8_LEATHER_LEVEL1@1",
        "humanName": "UncommonFortifiedLeather"
    },
    "902": {
        "botName": "T4_LEATHER_LEVEL2@2",
        "humanName": "RareWorkedLeather"
    },
    "903": {
        "botName": "T5_LEATHER_LEVEL2@2",
        "humanName": "RareCuredLeather"
    },
    "904": {
        "botName": "T6_LEATHER_LEVEL2@2",
        "humanName": "RareHardenedLeather"
    },
    "905": {
        "botName": "T7_LEATHER_LEVEL2@2",
        "humanName": "RareReinforcedLeather"
    },
    "906": {
        "botName": "T8_LEATHER_LEVEL2@2",
        "humanName": "RareFortifiedLeather"
    },
    "907": {
        "botName": "T4_LEATHER_LEVEL3@3",
        "humanName": "ExceptionalWorkedLeather"
    },
    "908": {
        "botName": "T5_LEATHER_LEVEL3@3",
        "humanName": "ExceptionalCuredLeather"
    },
    "909": {
        "botName": "T6_LEATHER_LEVEL3@3",
        "humanName": "ExceptionalHardenedLeather"
    },
    "910": {
        "botName": "T7_LEATHER_LEVEL3@3",
        "humanName": "ExceptionalReinforcedLeather"
    },
    "911": {
        "botName": "T8_LEATHER_LEVEL3@3",
        "humanName": "ExceptionalFortifiedLeather"
    },
    "912": {
        "botName": "T2_CLOTH",
        "humanName": "SimpleCloth"
    },
    "913": {
        "botName": "T3_CLOTH",
        "humanName": "NeatCloth"
    },
    "914": {
        "botName": "T4_CLOTH",
        "humanName": "FineCloth"
    },
    "915": {
        "botName": "T5_CLOTH",
        "humanName": "OrnateCloth"
    },
    "916": {
        "botName": "T6_CLOTH",
        "humanName": "LavishCloth"
    },
    "917": {
        "botName": "T7_CLOTH",
        "humanName": "OpulentCloth"
    },
    "918": {
        "botName": "T8_CLOTH",
        "humanName": "BaroqueCloth"
    },
    "919": {
        "botName": "T4_CLOTH_LEVEL1@1",
        "humanName": "UncommonFineCloth"
    },
    "920": {
        "botName": "T5_CLOTH_LEVEL1@1",
        "humanName": "UncommonOrnateCloth"
    },
    "921": {
        "botName": "T6_CLOTH_LEVEL1@1",
        "humanName": "UncommonLavishCloth"
    },
    "922": {
        "botName": "T7_CLOTH_LEVEL1@1",
        "humanName": "UncommonOpulentCloth"
    },
    "923": {
        "botName": "T8_CLOTH_LEVEL1@1",
        "humanName": "UncommonBaroqueCloth"
    },
    "924": {
        "botName": "T4_CLOTH_LEVEL2@2",
        "humanName": "RareFineCloth"
    },
    "925": {
        "botName": "T5_CLOTH_LEVEL2@2",
        "humanName": "RareOrnateCloth"
    },
    "926": {
        "botName": "T6_CLOTH_LEVEL2@2",
        "humanName": "RareLavishCloth"
    },
    "927": {
        "botName": "T7_CLOTH_LEVEL2@2",
        "humanName": "RareOpulentCloth"
    },
    "928": {
        "botName": "T8_CLOTH_LEVEL2@2",
        "humanName": "RareBaroqueCloth"
    },
    "929": {
        "botName": "T4_CLOTH_LEVEL3@3",
        "humanName": "ExceptionalFineCloth"
    },
    "930": {
        "botName": "T5_CLOTH_LEVEL3@3",
        "humanName": "ExceptionalOrnateCloth"
    },
    "931": {
        "botName": "T6_CLOTH_LEVEL3@3",
        "humanName": "ExceptionalLavishCloth"
    },
    "932": {
        "botName": "T7_CLOTH_LEVEL3@3",
        "humanName": "ExceptionalOpulentCloth"
    },
    "933": {
        "botName": "T8_CLOTH_LEVEL3@3",
        "humanName": "ExceptionalBaroqueCloth"
    },
    "934": {
        "botName": "T4_ARTEFACT_2H_ARCANESTAFF_HELL",
        "humanName": "Adept'sOccultOrb"
    },
    "935": {
        "botName": "T4_ARTEFACT_2H_BOW_HELL",
        "humanName": "Adept'sDemonicArrowheads"
    },
    "936": {
        "botName": "T4_ARTEFACT_2H_BOW_KEEPER",
        "humanName": "Adept'sCarvedbone"
    },
    "937": {
        "botName": "T4_ARTEFACT_2H_CLEAVER_HELL",
        "humanName": "Adept'sDemonicBlade"
    },
    "938": {
        "botName": "T4_ARTEFACT_2H_COMBATSTAFF_MORGANA",
        "humanName": "Adept'sReinforcedMorganaPole"
    },
    "939": {
        "botName": "T4_ARTEFACT_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Adept'sAlluringBolts"
    },
    "940": {
        "botName": "T4_ARTEFACT_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Adept'sBloodforgedCatalyst"
    },
    "941": {
        "botName": "T5_ARTEFACT_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Expert'sBloodforgedCatalyst"
    },
    "942": {
        "botName": "T6_ARTEFACT_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Master'sBloodforgedCatalyst"
    },
    "943": {
        "botName": "T7_ARTEFACT_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Grandmaster'sBloodforgedCatalyst"
    },
    "944": {
        "botName": "T8_ARTEFACT_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Elder'sBloodforgedCatalyst"
    },
    "945": {
        "botName": "T4_ARTEFACT_2H_DUALAXE_KEEPER",
        "humanName": "Adept'sKeeperAxeheads"
    },
    "946": {
        "botName": "T4_ARTEFACT_2H_DUALCROSSBOW_HELL",
        "humanName": "Adept'sHellishBolts"
    },
    "947": {
        "botName": "T4_ARTEFACT_2H_DUALHAMMER_HELL",
        "humanName": "Adept'sHellishHammerHeads"
    },
    "948": {
        "botName": "T4_ARTEFACT_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Adept'sCursedBlades"
    },
    "949": {
        "botName": "T4_ARTEFACT_2H_DUALSICKLE_UNDEAD",
        "humanName": "Adept'sGhastlyBlades"
    },
    "950": {
        "botName": "T4_ARTEFACT_2H_ENIGMATICORB_MORGANA",
        "humanName": "Adept'sPossessedCatalyst"
    },
    "951": {
        "botName": "T4_ARTEFACT_2H_FIRESTAFF_HELL",
        "humanName": "Adept'sBurningOrb"
    },
    "952": {
        "botName": "T4_ARTEFACT_2H_HALBERD_MORGANA",
        "humanName": "Adept'sMorganaHalberdHead"
    },
    "953": {
        "botName": "T4_ARTEFACT_2H_HAMMER_UNDEAD",
        "humanName": "Adept'sAncientHammerHead"
    },
    "954": {
        "botName": "T4_ARTEFACT_2H_HARPOON_HELL",
        "humanName": "Adept'sInfernalHarpoonTip"
    },
    "955": {
        "botName": "T4_ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Adept'sPossessedScroll"
    },
    "956": {
        "botName": "T4_ARTEFACT_2H_HOLYSTAFF_HELL",
        "humanName": "Adept'sInfernalScroll"
    },
    "957": {
        "botName": "T4_ARTEFACT_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Adept'sGhastlyScroll"
    },
    "958": {
        "botName": "T4_ARTEFACT_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Adept'sCursedFrozenCrystal"
    },
    "959": {
        "botName": "T4_ARTEFACT_2H_ICEGAUNTLETS_HELL",
        "humanName": "Adept'sIcicleOrb"
    },
    "960": {
        "botName": "T4_ARTEFACT_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Adept'sUnholyScroll"
    },
    "961": {
        "botName": "T4_ARTEFACT_2H_IRONGAUNTLETS_HELL",
        "humanName": "Adept'sBlackLeather"
    },
    "962": {
        "botName": "T4_ARTEFACT_2H_LONGBOW_UNDEAD",
        "humanName": "Adept'sGhastlyArrows"
    },
    "963": {
        "botName": "T4_ARTEFACT_2H_MACE_MORGANA",
        "humanName": "Adept'sImbuedMaceHead"
    },
    "964": {
        "botName": "T4_ARTEFACT_2H_NATURESTAFF_HELL",
        "humanName": "Adept'sSymbolofBlight"
    },
    "965": {
        "botName": "T4_ARTEFACT_2H_NATURESTAFF_KEEPER",
        "humanName": "Adept'sPreservedLog"
    },
    "966": {
        "botName": "T4_ARTEFACT_2H_RAM_KEEPER",
        "humanName": "Adept'sEngravedLog"
    },
    "967": {
        "botName": "T4_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Adept'sLostCrossbowMechanism"
    },
    "968": {
        "botName": "T4_ARTEFACT_2H_ROCKSTAFF_KEEPER",
        "humanName": "Adept'sPreservedRocks"
    },
    "969": {
        "botName": "T4_ARTEFACT_2H_SKULLORB_HELL",
        "humanName": "Adept'sCursedJawbone"
    },
    "970": {
        "botName": "T4_ARTEFACT_2H_TRIDENT_UNDEAD",
        "humanName": "Adept'sCursedBarbs"
    },
    "971": {
        "botName": "T4_ARTEFACT_2H_TWINSCYTHE_HELL",
        "humanName": "Adept'sHellishSickleheadPair"
    },
    "972": {
        "botName": "T4_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Adept'sLostArcaneCrystal"
    },
    "973": {
        "botName": "T4_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Adept'sLostCursedCrystal"
    },
    "974": {
        "botName": "T4_ARTEFACT_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Adept'sWildfireOrb"
    },
    "975": {
        "botName": "T4_ARTEFACT_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Adept'sHoarfrostOrb"
    },
    "976": {
        "botName": "T4_ARTEFACT_MAIN_MACE_HELL",
        "humanName": "Adept'sInfernalMaceHead"
    },
    "977": {
        "botName": "T4_ARTEFACT_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Adept'sDruidicInscriptions"
    },
    "978": {
        "botName": "T4_ARTEFACT_MAIN_RAPIER_MORGANA",
        "humanName": "Adept'sHardenedDebole"
    },
    "979": {
        "botName": "T4_ARTEFACT_MAIN_ROCKMACE_KEEPER",
        "humanName": "Adept'sRunedRock"
    },
    "980": {
        "botName": "T4_ARTEFACT_MAIN_SCIMITAR_MORGANA",
        "humanName": "Adept'sBloodforgedBlade"
    },
    "981": {
        "botName": "T4_ARTEFACT_MAIN_SPEAR_KEEPER",
        "humanName": "Adept'sKeeperSpearhead"
    },
    "982": {
        "botName": "T5_ARTEFACT_2H_ARCANESTAFF_HELL",
        "humanName": "Expert'sOccultOrb"
    },
    "983": {
        "botName": "T5_ARTEFACT_2H_BOW_HELL",
        "humanName": "Expert'sDemonicArrowheads"
    },
    "984": {
        "botName": "T5_ARTEFACT_2H_BOW_KEEPER",
        "humanName": "Expert'sCarvedbone"
    },
    "985": {
        "botName": "T5_ARTEFACT_2H_CLEAVER_HELL",
        "humanName": "Expert'sDemonicBlade"
    },
    "986": {
        "botName": "T5_ARTEFACT_2H_COMBATSTAFF_MORGANA",
        "humanName": "Expert'sReinforcedMorganaPole"
    },
    "987": {
        "botName": "T5_ARTEFACT_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Expert'sAlluringBolts"
    },
    "988": {
        "botName": "T5_ARTEFACT_2H_DUALAXE_KEEPER",
        "humanName": "Expert'sKeeperAxeheads"
    },
    "989": {
        "botName": "T5_ARTEFACT_2H_DUALCROSSBOW_HELL",
        "humanName": "Expert'sHellishBolts"
    },
    "990": {
        "botName": "T5_ARTEFACT_2H_DUALHAMMER_HELL",
        "humanName": "Expert'sHellishHammerHeads"
    },
    "991": {
        "botName": "T5_ARTEFACT_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Expert'sCursedBlades"
    },
    "992": {
        "botName": "T5_ARTEFACT_2H_DUALSICKLE_UNDEAD",
        "humanName": "Expert'sGhastlyBlades"
    },
    "993": {
        "botName": "T5_ARTEFACT_2H_ENIGMATICORB_MORGANA",
        "humanName": "Expert'sPossessedCatalyst"
    },
    "994": {
        "botName": "T5_ARTEFACT_2H_FIRESTAFF_HELL",
        "humanName": "Expert'sBurningOrb"
    },
    "995": {
        "botName": "T5_ARTEFACT_2H_HALBERD_MORGANA",
        "humanName": "Expert'sMorganaHalberdHead"
    },
    "996": {
        "botName": "T5_ARTEFACT_2H_HAMMER_UNDEAD",
        "humanName": "Expert'sAncientHammerHead"
    },
    "997": {
        "botName": "T5_ARTEFACT_2H_HARPOON_HELL",
        "humanName": "Expert'sInfernalHarpoonTip"
    },
    "998": {
        "botName": "T5_ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Expert'sPossessedScroll"
    },
    "999": {
        "botName": "T5_ARTEFACT_2H_HOLYSTAFF_HELL",
        "humanName": "Expert'sInfernalScroll"
    },
    "1000": {
        "botName": "T5_ARTEFACT_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Expert'sGhastlyScroll"
    },
    "1001": {
        "botName": "T5_ARTEFACT_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Expert'sCursedFrozenCrystal"
    },
    "1002": {
        "botName": "T5_ARTEFACT_2H_ICEGAUNTLETS_HELL",
        "humanName": "Expert'sIcicleOrb"
    },
    "1003": {
        "botName": "T5_ARTEFACT_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Expert'sUnholyScroll"
    },
    "1004": {
        "botName": "T5_ARTEFACT_2H_IRONGAUNTLETS_HELL",
        "humanName": "Expert'sBlackLeather"
    },
    "1005": {
        "botName": "T5_ARTEFACT_2H_LONGBOW_UNDEAD",
        "humanName": "Expert'sGhastlyArrows"
    },
    "1006": {
        "botName": "T5_ARTEFACT_2H_MACE_MORGANA",
        "humanName": "Expert'sImbuedMaceHead"
    },
    "1007": {
        "botName": "T5_ARTEFACT_2H_NATURESTAFF_HELL",
        "humanName": "Expert'sSymbolofBlight"
    },
    "1008": {
        "botName": "T5_ARTEFACT_2H_NATURESTAFF_KEEPER",
        "humanName": "Expert'sPreservedLog"
    },
    "1009": {
        "botName": "T5_ARTEFACT_2H_RAM_KEEPER",
        "humanName": "Expert'sEngravedLog"
    },
    "1010": {
        "botName": "T5_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Expert'sLostCrossbowMechanism"
    },
    "1011": {
        "botName": "T5_ARTEFACT_2H_ROCKSTAFF_KEEPER",
        "humanName": "Expert'sPreservedRocks"
    },
    "1012": {
        "botName": "T4_ARTEFACT_2H_SCYTHE_HELL",
        "humanName": "Adept'sHellishSicklehead"
    },
    "1013": {
        "botName": "T5_ARTEFACT_2H_SCYTHE_HELL",
        "humanName": "Expert'sHellishSicklehead"
    },
    "1014": {
        "botName": "T6_ARTEFACT_2H_SCYTHE_HELL",
        "humanName": "Master'sHellishSicklehead"
    },
    "1015": {
        "botName": "T7_ARTEFACT_2H_SCYTHE_HELL",
        "humanName": "Grandmaster'sHellishSicklehead"
    },
    "1016": {
        "botName": "T8_ARTEFACT_2H_SCYTHE_HELL",
        "humanName": "Elder'sHellishSicklehead"
    },
    "1017": {
        "botName": "T5_ARTEFACT_2H_SKULLORB_HELL",
        "humanName": "Expert'sCursedJawbone"
    },
    "1018": {
        "botName": "T5_ARTEFACT_2H_TRIDENT_UNDEAD",
        "humanName": "Expert'sCursedBarbs"
    },
    "1019": {
        "botName": "T5_ARTEFACT_2H_TWINSCYTHE_HELL",
        "humanName": "Expert'sHellishSickleheadPair"
    },
    "1020": {
        "botName": "T5_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Expert'sLostArcaneCrystal"
    },
    "1021": {
        "botName": "T5_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Expert'sLostCursedCrystal"
    },
    "1022": {
        "botName": "T5_ARTEFACT_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Expert'sWildfireOrb"
    },
    "1023": {
        "botName": "T5_ARTEFACT_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Expert'sHoarfrostOrb"
    },
    "1024": {
        "botName": "T5_ARTEFACT_MAIN_MACE_HELL",
        "humanName": "Expert'sInfernalMaceHead"
    },
    "1025": {
        "botName": "T5_ARTEFACT_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Expert'sDruidicInscriptions"
    },
    "1026": {
        "botName": "T5_ARTEFACT_MAIN_RAPIER_MORGANA",
        "humanName": "Expert'sHardenedDebole"
    },
    "1027": {
        "botName": "T5_ARTEFACT_MAIN_ROCKMACE_KEEPER",
        "humanName": "Expert'sRunedRock"
    },
    "1028": {
        "botName": "T5_ARTEFACT_MAIN_SCIMITAR_MORGANA",
        "humanName": "Expert'sBloodforgedBlade"
    },
    "1029": {
        "botName": "T5_ARTEFACT_MAIN_SPEAR_KEEPER",
        "humanName": "Expert'sKeeperSpearhead"
    },
    "1030": {
        "botName": "T6_ARTEFACT_2H_ARCANESTAFF_HELL",
        "humanName": "Master'sOccultOrb"
    },
    "1031": {
        "botName": "T6_ARTEFACT_2H_BOW_HELL",
        "humanName": "Master'sDemonicArrowheads"
    },
    "1032": {
        "botName": "T6_ARTEFACT_2H_BOW_KEEPER",
        "humanName": "Master'sCarvedbone"
    },
    "1033": {
        "botName": "T6_ARTEFACT_2H_CLEAVER_HELL",
        "humanName": "Master'sDemonicBlade"
    },
    "1034": {
        "botName": "T6_ARTEFACT_2H_COMBATSTAFF_MORGANA",
        "humanName": "Master'sReinforcedMorganaPole"
    },
    "1035": {
        "botName": "T6_ARTEFACT_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Master'sAlluringBolts"
    },
    "1036": {
        "botName": "T6_ARTEFACT_2H_DUALAXE_KEEPER",
        "humanName": "Master'sKeeperAxeheads"
    },
    "1037": {
        "botName": "T6_ARTEFACT_2H_DUALCROSSBOW_HELL",
        "humanName": "Master'sHellishBolts"
    },
    "1038": {
        "botName": "T6_ARTEFACT_2H_DUALHAMMER_HELL",
        "humanName": "Master'sHellishHammerHeads"
    },
    "1039": {
        "botName": "T6_ARTEFACT_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Master'sCursedBlades"
    },
    "1040": {
        "botName": "T6_ARTEFACT_2H_DUALSICKLE_UNDEAD",
        "humanName": "Master'sGhastlyBlades"
    },
    "1041": {
        "botName": "T6_ARTEFACT_2H_ENIGMATICORB_MORGANA",
        "humanName": "Master'sPossessedCatalyst"
    },
    "1042": {
        "botName": "T6_ARTEFACT_2H_FIRESTAFF_HELL",
        "humanName": "Master'sBurningOrb"
    },
    "1043": {
        "botName": "T6_ARTEFACT_2H_HALBERD_MORGANA",
        "humanName": "Master'sMorganaHalberdHead"
    },
    "1044": {
        "botName": "T6_ARTEFACT_2H_HAMMER_UNDEAD",
        "humanName": "Master'sAncientHammerHead"
    },
    "1045": {
        "botName": "T6_ARTEFACT_2H_HARPOON_HELL",
        "humanName": "Master'sInfernalHarpoonTip"
    },
    "1046": {
        "botName": "T6_ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Master'sPossessedScroll"
    },
    "1047": {
        "botName": "T6_ARTEFACT_2H_HOLYSTAFF_HELL",
        "humanName": "Master'sInfernalScroll"
    },
    "1048": {
        "botName": "T6_ARTEFACT_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Master'sGhastlyScroll"
    },
    "1049": {
        "botName": "T6_ARTEFACT_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Master'sCursedFrozenCrystal"
    },
    "1050": {
        "botName": "T6_ARTEFACT_2H_ICEGAUNTLETS_HELL",
        "humanName": "Master'sIcicleOrb"
    },
    "1051": {
        "botName": "T6_ARTEFACT_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Master'sUnholyScroll"
    },
    "1052": {
        "botName": "T6_ARTEFACT_2H_IRONGAUNTLETS_HELL",
        "humanName": "Master'sBlackLeather"
    },
    "1053": {
        "botName": "T6_ARTEFACT_2H_LONGBOW_UNDEAD",
        "humanName": "Master'sGhastlyArrows"
    },
    "1054": {
        "botName": "T6_ARTEFACT_2H_MACE_MORGANA",
        "humanName": "Master'sImbuedMaceHead"
    },
    "1055": {
        "botName": "T6_ARTEFACT_2H_NATURESTAFF_HELL",
        "humanName": "Master'sSymbolofBlight"
    },
    "1056": {
        "botName": "T6_ARTEFACT_2H_NATURESTAFF_KEEPER",
        "humanName": "Master'sPreservedLog"
    },
    "1057": {
        "botName": "T6_ARTEFACT_2H_RAM_KEEPER",
        "humanName": "Master'sEngravedLog"
    },
    "1058": {
        "botName": "T6_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Master'sLostCrossbowMechanism"
    },
    "1059": {
        "botName": "T6_ARTEFACT_2H_ROCKSTAFF_KEEPER",
        "humanName": "Master'sPreservedRocks"
    },
    "1060": {
        "botName": "T6_ARTEFACT_2H_SKULLORB_HELL",
        "humanName": "Master'sCursedJawbone"
    },
    "1061": {
        "botName": "T6_ARTEFACT_2H_TRIDENT_UNDEAD",
        "humanName": "Master'sCursedBarbs"
    },
    "1062": {
        "botName": "T6_ARTEFACT_2H_TWINSCYTHE_HELL",
        "humanName": "Master'sHellishSickleheadPair"
    },
    "1063": {
        "botName": "T6_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Master'sLostArcaneCrystal"
    },
    "1064": {
        "botName": "T6_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Master'sLostCursedCrystal"
    },
    "1065": {
        "botName": "T6_ARTEFACT_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Master'sWildfireOrb"
    },
    "1066": {
        "botName": "T6_ARTEFACT_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Master'sHoarfrostOrb"
    },
    "1067": {
        "botName": "T6_ARTEFACT_MAIN_MACE_HELL",
        "humanName": "Master'sInfernalMaceHead"
    },
    "1068": {
        "botName": "T6_ARTEFACT_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Master'sDruidicInscriptions"
    },
    "1069": {
        "botName": "T6_ARTEFACT_MAIN_RAPIER_MORGANA",
        "humanName": "Master'sHardenedDebole"
    },
    "1070": {
        "botName": "T6_ARTEFACT_MAIN_ROCKMACE_KEEPER",
        "humanName": "Master'sRunedRock"
    },
    "1071": {
        "botName": "T6_ARTEFACT_MAIN_SCIMITAR_MORGANA",
        "humanName": "Master'sBloodforgedBlade"
    },
    "1072": {
        "botName": "T6_ARTEFACT_MAIN_SPEAR_KEEPER",
        "humanName": "Master'sKeeperSpearhead"
    },
    "1073": {
        "botName": "T7_ARTEFACT_2H_ARCANESTAFF_HELL",
        "humanName": "Grandmaster'sOccultOrb"
    },
    "1074": {
        "botName": "T7_ARTEFACT_2H_BOW_HELL",
        "humanName": "Grandmaster'sDemonicArrowheads"
    },
    "1075": {
        "botName": "T7_ARTEFACT_2H_BOW_KEEPER",
        "humanName": "Grandmaster'sCarvedBone"
    },
    "1076": {
        "botName": "T7_ARTEFACT_2H_CLEAVER_HELL",
        "humanName": "Grandmaster'sDemonicBlade"
    },
    "1077": {
        "botName": "T7_ARTEFACT_2H_COMBATSTAFF_MORGANA",
        "humanName": "Grandmaster'sReinforcedMorganaPole"
    },
    "1078": {
        "botName": "T7_ARTEFACT_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Grandmaster'sAlluringBolts"
    },
    "1079": {
        "botName": "T7_ARTEFACT_2H_DUALAXE_KEEPER",
        "humanName": "Grandmaster'sKeeperAxeheads"
    },
    "1080": {
        "botName": "T7_ARTEFACT_2H_DUALCROSSBOW_HELL",
        "humanName": "Grandmaster'sHellishBolts"
    },
    "1081": {
        "botName": "T7_ARTEFACT_2H_DUALHAMMER_HELL",
        "humanName": "Grandmaster'sHellishHammerHeads"
    },
    "1082": {
        "botName": "T7_ARTEFACT_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Grandmaster'sCursedBlades"
    },
    "1083": {
        "botName": "T7_ARTEFACT_2H_DUALSICKLE_UNDEAD",
        "humanName": "Grandmaster'sGhastlyBlades"
    },
    "1084": {
        "botName": "T7_ARTEFACT_2H_ENIGMATICORB_MORGANA",
        "humanName": "Grandmaster'sPossessedCatalyst"
    },
    "1085": {
        "botName": "T7_ARTEFACT_2H_FIRESTAFF_HELL",
        "humanName": "Grandmaster'sBurningOrb"
    },
    "1086": {
        "botName": "T7_ARTEFACT_2H_HALBERD_MORGANA",
        "humanName": "Grandmaster'sMorganaHalberdHead"
    },
    "1087": {
        "botName": "T7_ARTEFACT_2H_HAMMER_UNDEAD",
        "humanName": "Grandmaster'sAncientHammerHead"
    },
    "1088": {
        "botName": "T7_ARTEFACT_2H_HARPOON_HELL",
        "humanName": "Grandmaster'sInfernalHarpoonTip"
    },
    "1089": {
        "botName": "T7_ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Grandmaster'sPossessedScroll"
    },
    "1090": {
        "botName": "T7_ARTEFACT_2H_HOLYSTAFF_HELL",
        "humanName": "Grandmaster'sInfernalScroll"
    },
    "1091": {
        "botName": "T7_ARTEFACT_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Grandmaster'sGhastlyScroll"
    },
    "1092": {
        "botName": "T7_ARTEFACT_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Grandmaster'sCursedFrozenCrystal"
    },
    "1093": {
        "botName": "T7_ARTEFACT_2H_ICEGAUNTLETS_HELL",
        "humanName": "Grandmaster'sIcicleOrb"
    },
    "1094": {
        "botName": "T7_ARTEFACT_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Grandmaster'sUnholyScroll"
    },
    "1095": {
        "botName": "T7_ARTEFACT_2H_IRONGAUNTLETS_HELL",
        "humanName": "Grandmaster'sBlackLeather"
    },
    "1096": {
        "botName": "T7_ARTEFACT_2H_LONGBOW_UNDEAD",
        "humanName": "Grandmaster'sGhastlyArrows"
    },
    "1097": {
        "botName": "T7_ARTEFACT_2H_MACE_MORGANA",
        "humanName": "Grandmaster'sImbuedMaceHead"
    },
    "1098": {
        "botName": "T7_ARTEFACT_2H_NATURESTAFF_HELL",
        "humanName": "Grandmaster'sSymbolofBlight"
    },
    "1099": {
        "botName": "T7_ARTEFACT_2H_NATURESTAFF_KEEPER",
        "humanName": "Grandmaster'sPreservedLog"
    },
    "1100": {
        "botName": "T7_ARTEFACT_2H_RAM_KEEPER",
        "humanName": "Grandmaster'sEngravedLog"
    },
    "1101": {
        "botName": "T7_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Grandmaster'sLostCrossbowMechanism"
    },
    "1102": {
        "botName": "T7_ARTEFACT_2H_ROCKSTAFF_KEEPER",
        "humanName": "Grandmaster'sPreservedRocks"
    },
    "1103": {
        "botName": "T7_ARTEFACT_2H_SKULLORB_HELL",
        "humanName": "Grandmaster'sCursedJawbone"
    },
    "1104": {
        "botName": "T7_ARTEFACT_2H_TRIDENT_UNDEAD",
        "humanName": "Grandmaster'sCursedBarbs"
    },
    "1105": {
        "botName": "T7_ARTEFACT_2H_TWINSCYTHE_HELL",
        "humanName": "Grandmaster'sHellishSickleheadPair"
    },
    "1106": {
        "botName": "T7_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Grandmaster'sLostArcaneCrystal"
    },
    "1107": {
        "botName": "T7_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Grandmaster'sLostCursedCrystal"
    },
    "1108": {
        "botName": "T7_ARTEFACT_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Grandmaster'sWildfireOrb"
    },
    "1109": {
        "botName": "T7_ARTEFACT_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Grandmaster'sHoarfrostOrb"
    },
    "1110": {
        "botName": "T7_ARTEFACT_MAIN_MACE_HELL",
        "humanName": "Grandmaster'sInfernalMaceHead"
    },
    "1111": {
        "botName": "T7_ARTEFACT_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Grandmaster'sDruidicInscriptions"
    },
    "1112": {
        "botName": "T7_ARTEFACT_MAIN_RAPIER_MORGANA",
        "humanName": "Grandmaster'sHardenedDebole"
    },
    "1113": {
        "botName": "T7_ARTEFACT_MAIN_ROCKMACE_KEEPER",
        "humanName": "Grandmaster'sRunedRock"
    },
    "1114": {
        "botName": "T7_ARTEFACT_MAIN_SCIMITAR_MORGANA",
        "humanName": "Grandmaster'sBloodforgedBlade"
    },
    "1115": {
        "botName": "T7_ARTEFACT_MAIN_SPEAR_KEEPER",
        "humanName": "Grandmaster'sKeeperSpearhead"
    },
    "1116": {
        "botName": "T8_ARTEFACT_2H_ARCANESTAFF_HELL",
        "humanName": "Elder'sOccultOrb"
    },
    "1117": {
        "botName": "T8_ARTEFACT_2H_BOW_HELL",
        "humanName": "Elder'sDemonicArrowheads"
    },
    "1118": {
        "botName": "T8_ARTEFACT_2H_BOW_KEEPER",
        "humanName": "Elder'sCarvedbone"
    },
    "1119": {
        "botName": "T8_ARTEFACT_2H_CLEAVER_HELL",
        "humanName": "Elder'sDemonicBlade"
    },
    "1120": {
        "botName": "T8_ARTEFACT_2H_COMBATSTAFF_MORGANA",
        "humanName": "Elder'sReinforcedMorganaPole"
    },
    "1121": {
        "botName": "T8_ARTEFACT_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Elder'sAlluringBolts"
    },
    "1122": {
        "botName": "T8_ARTEFACT_2H_DUALAXE_KEEPER",
        "humanName": "Elder'sKeeperAxeheads"
    },
    "1123": {
        "botName": "T8_ARTEFACT_2H_DUALCROSSBOW_HELL",
        "humanName": "Elder'sHellishBolts"
    },
    "1124": {
        "botName": "T8_ARTEFACT_2H_DUALHAMMER_HELL",
        "humanName": "Elder'sHellishHammerHeads"
    },
    "1125": {
        "botName": "T8_ARTEFACT_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Elder'sCursedBlades"
    },
    "1126": {
        "botName": "T8_ARTEFACT_2H_DUALSICKLE_UNDEAD",
        "humanName": "Elder'sGhastlyBlades"
    },
    "1127": {
        "botName": "T8_ARTEFACT_2H_ENIGMATICORB_MORGANA",
        "humanName": "Elder'sPossessedCatalyst"
    },
    "1128": {
        "botName": "T8_ARTEFACT_2H_FIRESTAFF_HELL",
        "humanName": "Elder'sBurningOrb"
    },
    "1129": {
        "botName": "T8_ARTEFACT_2H_HALBERD_MORGANA",
        "humanName": "Elder'sMorganaHalberdHead"
    },
    "1130": {
        "botName": "T8_ARTEFACT_2H_HAMMER_UNDEAD",
        "humanName": "Elder'sAncientHammerHead"
    },
    "1131": {
        "botName": "T8_ARTEFACT_2H_HARPOON_HELL",
        "humanName": "Elder'sInfernalHarpoonTip"
    },
    "1132": {
        "botName": "T8_ARTEFACT_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Elder'sPossessedScroll"
    },
    "1133": {
        "botName": "T8_ARTEFACT_2H_HOLYSTAFF_HELL",
        "humanName": "Elder'sInfernalScroll"
    },
    "1134": {
        "botName": "T8_ARTEFACT_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Elder'sGhastlyScroll"
    },
    "1135": {
        "botName": "T8_ARTEFACT_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Elder'sCursedFrozenCrystal"
    },
    "1136": {
        "botName": "T8_ARTEFACT_2H_ICEGAUNTLETS_HELL",
        "humanName": "Elder'sIcicleOrb"
    },
    "1137": {
        "botName": "T8_ARTEFACT_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Elder'sUnholyScroll"
    },
    "1138": {
        "botName": "T8_ARTEFACT_2H_IRONGAUNTLETS_HELL",
        "humanName": "Elder'sBlackLeather"
    },
    "1139": {
        "botName": "T8_ARTEFACT_2H_LONGBOW_UNDEAD",
        "humanName": "Elder'sGhastlyArrows"
    },
    "1140": {
        "botName": "T8_ARTEFACT_2H_MACE_MORGANA",
        "humanName": "Elder'sImbuedMaceHead"
    },
    "1141": {
        "botName": "T8_ARTEFACT_2H_NATURESTAFF_HELL",
        "humanName": "Elder'sSymbolofBlight"
    },
    "1142": {
        "botName": "T8_ARTEFACT_2H_NATURESTAFF_KEEPER",
        "humanName": "Elder'sPreservedLog"
    },
    "1143": {
        "botName": "T8_ARTEFACT_2H_RAM_KEEPER",
        "humanName": "Elder'sEngravedLog"
    },
    "1144": {
        "botName": "T8_ARTEFACT_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Elder'sLostCrossbowMechanism"
    },
    "1145": {
        "botName": "T8_ARTEFACT_2H_ROCKSTAFF_KEEPER",
        "humanName": "Elder'sPreservedRocks"
    },
    "1146": {
        "botName": "T8_ARTEFACT_2H_SKULLORB_HELL",
        "humanName": "Elder'sCursedJawbone"
    },
    "1147": {
        "botName": "T8_ARTEFACT_2H_TRIDENT_UNDEAD",
        "humanName": "Elder'sCursedBarbs"
    },
    "1148": {
        "botName": "T8_ARTEFACT_2H_TWINSCYTHE_HELL",
        "humanName": "Elder'sHellishSickleheadPair"
    },
    "1149": {
        "botName": "T8_ARTEFACT_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Elder'sLostArcaneCrystal"
    },
    "1150": {
        "botName": "T8_ARTEFACT_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Elder'sLostCursedCrystal"
    },
    "1151": {
        "botName": "T8_ARTEFACT_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Elder'sWildfireOrb"
    },
    "1152": {
        "botName": "T8_ARTEFACT_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Elder'sHoarfrostOrb"
    },
    "1153": {
        "botName": "T8_ARTEFACT_MAIN_MACE_HELL",
        "humanName": "Elder'sInfernalMaceHead"
    },
    "1154": {
        "botName": "T8_ARTEFACT_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Elder'sDruidicInscriptions"
    },
    "1155": {
        "botName": "T8_ARTEFACT_MAIN_RAPIER_MORGANA",
        "humanName": "Elder'sHardenedDebole"
    },
    "1156": {
        "botName": "T8_ARTEFACT_MAIN_ROCKMACE_KEEPER",
        "humanName": "Elder'sRunedRock"
    },
    "1157": {
        "botName": "T8_ARTEFACT_MAIN_SCIMITAR_MORGANA",
        "humanName": "Elder'sBloodforgedBlade"
    },
    "1158": {
        "botName": "T8_ARTEFACT_MAIN_SPEAR_KEEPER",
        "humanName": "Elder'sKeeperSpearhead"
    },
    "1159": {
        "botName": "T4_ARTEFACT_2H_DAGGER_KATAR_AVALON",
        "humanName": "Adept'sBloodstainedAntiquities"
    },
    "1160": {
        "botName": "T4_ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Adept'sRuinedAncestralVamplate"
    },
    "1161": {
        "botName": "T4_ARTEFACT_2H_AXE_AVALON",
        "humanName": "Adept'sAvalonianBattleMemoir"
    },
    "1162": {
        "botName": "T4_ARTEFACT_2H_CLAYMORE_AVALON",
        "humanName": "Adept'sRemnantsoftheOldKing"
    },
    "1163": {
        "botName": "T4_ARTEFACT_2H_QUARTERSTAFF_AVALON",
        "humanName": "Adept'sTimewornWalkingStaff"
    },
    "1164": {
        "botName": "T4_ARTEFACT_2H_HAMMER_AVALON",
        "humanName": "Adept'sMassiveMetallicHand"
    },
    "1165": {
        "botName": "T4_ARTEFACT_2H_DUALMACE_AVALON",
        "humanName": "Adept'sBrokenOaths"
    },
    "1166": {
        "botName": "T4_ARTEFACT_2H_BOW_AVALON",
        "humanName": "Adept'sImmaculatelyCraftedRiser"
    },
    "1167": {
        "botName": "T4_ARTEFACT_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Adept'sHummingAvalonianWhirligig"
    },
    "1168": {
        "botName": "T4_ARTEFACT_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Adept'sFracturedOpaqueOrb"
    },
    "1169": {
        "botName": "T4_ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Adept'sGlowingHarmonicRing"
    },
    "1170": {
        "botName": "T4_ARTEFACT_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Adept'sChilledCrystallineShard"
    },
    "1171": {
        "botName": "T4_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Adept'sHypnoticHarmonicRing"
    },
    "1172": {
        "botName": "T4_ARTEFACT_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Adept'sMessianicCurio"
    },
    "1173": {
        "botName": "T4_ARTEFACT_MAIN_NATURESTAFF_AVALON",
        "humanName": "Adept'sUprootedPerennialSapling"
    },
    "1174": {
        "botName": "T5_ARTEFACT_2H_DAGGER_KATAR_AVALON",
        "humanName": "Expert'sBloodstainedAntiquities"
    },
    "1175": {
        "botName": "T5_ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Expert'sRuinedAncestralVamplate"
    },
    "1176": {
        "botName": "T5_ARTEFACT_2H_AXE_AVALON",
        "humanName": "Expert'sAvalonianBattleMemoir"
    },
    "1177": {
        "botName": "T5_ARTEFACT_2H_CLAYMORE_AVALON",
        "humanName": "Expert'sRemnantsoftheOldKing"
    },
    "1178": {
        "botName": "T5_ARTEFACT_2H_QUARTERSTAFF_AVALON",
        "humanName": "Expert'sTimewornWalkingStaff"
    },
    "1179": {
        "botName": "T5_ARTEFACT_2H_HAMMER_AVALON",
        "humanName": "Expert'sMassiveMetallicHand"
    },
    "1180": {
        "botName": "T5_ARTEFACT_2H_DUALMACE_AVALON",
        "humanName": "Expert'sBrokenOaths"
    },
    "1181": {
        "botName": "T5_ARTEFACT_2H_BOW_AVALON",
        "humanName": "Expert'sImmaculatelyCraftedRiser"
    },
    "1182": {
        "botName": "T5_ARTEFACT_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Expert'sHummingAvalonianWhirligig"
    },
    "1183": {
        "botName": "T5_ARTEFACT_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Expert'sFracturedOpaqueOrb"
    },
    "1184": {
        "botName": "T5_ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Expert'sGlowingHarmonicRing"
    },
    "1185": {
        "botName": "T5_ARTEFACT_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Expert'sChilledCrystallineShard"
    },
    "1186": {
        "botName": "T5_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Expert'sHypnoticHarmonicRing"
    },
    "1187": {
        "botName": "T5_ARTEFACT_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Expert'sMessianicCurio"
    },
    "1188": {
        "botName": "T5_ARTEFACT_MAIN_NATURESTAFF_AVALON",
        "humanName": "Expert'sUprootedPerennialSapling"
    },
    "1189": {
        "botName": "T6_ARTEFACT_2H_DAGGER_KATAR_AVALON",
        "humanName": "Master'sBloodstainedAntiquities"
    },
    "1190": {
        "botName": "T6_ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Master'sRuinedAncestralVamplate"
    },
    "1191": {
        "botName": "T6_ARTEFACT_2H_AXE_AVALON",
        "humanName": "Master'sAvalonianBattleMemoir"
    },
    "1192": {
        "botName": "T6_ARTEFACT_2H_CLAYMORE_AVALON",
        "humanName": "Master'sRemnantsoftheOldKing"
    },
    "1193": {
        "botName": "T6_ARTEFACT_2H_QUARTERSTAFF_AVALON",
        "humanName": "Master'sTimewornWalkingStaff"
    },
    "1194": {
        "botName": "T6_ARTEFACT_2H_HAMMER_AVALON",
        "humanName": "Master'sMassiveMetallicHand"
    },
    "1195": {
        "botName": "T6_ARTEFACT_2H_DUALMACE_AVALON",
        "humanName": "Master'sBrokenOaths"
    },
    "1196": {
        "botName": "T6_ARTEFACT_2H_BOW_AVALON",
        "humanName": "Master'sImmaculatelyCraftedRiser"
    },
    "1197": {
        "botName": "T6_ARTEFACT_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Master'sHummingAvalonianWhirligig"
    },
    "1198": {
        "botName": "T6_ARTEFACT_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Master'sFracturedOpaqueOrb"
    },
    "1199": {
        "botName": "T6_ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Master'sGlowingHarmonicRing"
    },
    "1200": {
        "botName": "T6_ARTEFACT_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Master'sChilledCrystallineShard"
    },
    "1201": {
        "botName": "T6_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Master'sHypnoticHarmonicRing"
    },
    "1202": {
        "botName": "T6_ARTEFACT_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Master'sMessianicCurio"
    },
    "1203": {
        "botName": "T6_ARTEFACT_MAIN_NATURESTAFF_AVALON",
        "humanName": "Master'sUprootedPerennialSapling"
    },
    "1204": {
        "botName": "T7_ARTEFACT_2H_DAGGER_KATAR_AVALON",
        "humanName": "Grandmaster'sBloodstainedAntiquities"
    },
    "1205": {
        "botName": "T7_ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Grandmaster'sRuinedAncestralVamplate"
    },
    "1206": {
        "botName": "T7_ARTEFACT_2H_AXE_AVALON",
        "humanName": "Grandmaster'sAvalonianBattleMemoir"
    },
    "1207": {
        "botName": "T7_ARTEFACT_2H_CLAYMORE_AVALON",
        "humanName": "Grandmaster'sRemnantsoftheOldKing"
    },
    "1208": {
        "botName": "T7_ARTEFACT_2H_QUARTERSTAFF_AVALON",
        "humanName": "Grandmaster'sTimewornWalkingStaff"
    },
    "1209": {
        "botName": "T7_ARTEFACT_2H_HAMMER_AVALON",
        "humanName": "Grandmaster'sMassiveMetallicHand"
    },
    "1210": {
        "botName": "T7_ARTEFACT_2H_DUALMACE_AVALON",
        "humanName": "Grandmaster'sBrokenOaths"
    },
    "1211": {
        "botName": "T7_ARTEFACT_2H_BOW_AVALON",
        "humanName": "Grandmaster'sImmaculatelyCraftedRiser"
    },
    "1212": {
        "botName": "T7_ARTEFACT_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Grandmaster'sHummingAvalonianWhirligig"
    },
    "1213": {
        "botName": "T7_ARTEFACT_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Grandmaster'sFracturedOpaqueOrb"
    },
    "1214": {
        "botName": "T7_ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Grandmaster'sGlowingHarmonicRing"
    },
    "1215": {
        "botName": "T7_ARTEFACT_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Grandmaster'sChilledCrystallineShard"
    },
    "1216": {
        "botName": "T7_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Grandmaster'sHypnoticHarmonicRing"
    },
    "1217": {
        "botName": "T7_ARTEFACT_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Grandmaster'sMessianicCurio"
    },
    "1218": {
        "botName": "T7_ARTEFACT_MAIN_NATURESTAFF_AVALON",
        "humanName": "Grandmaster'sUprootedPerennialSapling"
    },
    "1219": {
        "botName": "T8_ARTEFACT_2H_DAGGER_KATAR_AVALON",
        "humanName": "Elder'sBloodstainedAntiquities"
    },
    "1220": {
        "botName": "T8_ARTEFACT_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Elder'sRuinedAncestralVamplate"
    },
    "1221": {
        "botName": "T8_ARTEFACT_2H_AXE_AVALON",
        "humanName": "Elder'sAvalonianBattleMemoir"
    },
    "1222": {
        "botName": "T8_ARTEFACT_2H_CLAYMORE_AVALON",
        "humanName": "Elder'sRemnantsoftheOldKing"
    },
    "1223": {
        "botName": "T8_ARTEFACT_2H_QUARTERSTAFF_AVALON",
        "humanName": "Elder'sTimewornWalkingStaff"
    },
    "1224": {
        "botName": "T8_ARTEFACT_2H_HAMMER_AVALON",
        "humanName": "Elder'sMassiveMetallicHand"
    },
    "1225": {
        "botName": "T8_ARTEFACT_2H_DUALMACE_AVALON",
        "humanName": "Elder'sBrokenOaths"
    },
    "1226": {
        "botName": "T8_ARTEFACT_2H_BOW_AVALON",
        "humanName": "Elder'sImmaculatelyCraftedRiser"
    },
    "1227": {
        "botName": "T8_ARTEFACT_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Elder'sHummingAvalonianWhirligig"
    },
    "1228": {
        "botName": "T8_ARTEFACT_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Elder'sFracturedOpaqueOrb"
    },
    "1229": {
        "botName": "T8_ARTEFACT_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Elder'sGlowingHarmonicRing"
    },
    "1230": {
        "botName": "T8_ARTEFACT_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Elder'sChilledCrystallineShard"
    },
    "1231": {
        "botName": "T8_ARTEFACT_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Elder'sHypnoticHarmonicRing"
    },
    "1232": {
        "botName": "T8_ARTEFACT_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Elder'sMessianicCurio"
    },
    "1233": {
        "botName": "T8_ARTEFACT_MAIN_NATURESTAFF_AVALON",
        "humanName": "Elder'sUprootedPerennialSapling"
    },
    "1234": {
        "botName": "T4_ARTEFACT_2H_KNUCKLES_KEEPER",
        "humanName": "Adept'sUrsineGuardianRemains"
    },
    "1235": {
        "botName": "T5_ARTEFACT_2H_KNUCKLES_KEEPER",
        "humanName": "Expert'sUrsineGuardianRemains"
    },
    "1236": {
        "botName": "T6_ARTEFACT_2H_KNUCKLES_KEEPER",
        "humanName": "Master'sUrsineGuardianRemains"
    },
    "1237": {
        "botName": "T7_ARTEFACT_2H_KNUCKLES_KEEPER",
        "humanName": "Grandmaster'sUrsineGuardianRemains"
    },
    "1238": {
        "botName": "T8_ARTEFACT_2H_KNUCKLES_KEEPER",
        "humanName": "Elder'sUrsineGuardianRemains"
    },
    "1239": {
        "botName": "T4_ARTEFACT_2H_KNUCKLES_HELL",
        "humanName": "Adept'sSeveredDemonicHorns"
    },
    "1240": {
        "botName": "T5_ARTEFACT_2H_KNUCKLES_HELL",
        "humanName": "Expert'sSeveredDemonicHorns"
    },
    "1241": {
        "botName": "T6_ARTEFACT_2H_KNUCKLES_HELL",
        "humanName": "Master'sSeveredDemonicHorns"
    },
    "1242": {
        "botName": "T7_ARTEFACT_2H_KNUCKLES_HELL",
        "humanName": "Grandmaster'sSeveredDemonicHorns"
    },
    "1243": {
        "botName": "T8_ARTEFACT_2H_KNUCKLES_HELL",
        "humanName": "Elder'sSeveredDemonicHorns"
    },
    "1244": {
        "botName": "T4_ARTEFACT_2H_KNUCKLES_MORGANA",
        "humanName": "Adept'sWarpedRavenPlate"
    },
    "1245": {
        "botName": "T5_ARTEFACT_2H_KNUCKLES_MORGANA",
        "humanName": "Expert'sWarpedRavenPlate"
    },
    "1246": {
        "botName": "T6_ARTEFACT_2H_KNUCKLES_MORGANA",
        "humanName": "Master'sWarpedRavenPlate"
    },
    "1247": {
        "botName": "T7_ARTEFACT_2H_KNUCKLES_MORGANA",
        "humanName": "Grandmaster'sWarpedRavenPlate"
    },
    "1248": {
        "botName": "T8_ARTEFACT_2H_KNUCKLES_MORGANA",
        "humanName": "Elder'sWarpedRavenPlate"
    },
    "1249": {
        "botName": "T4_ARTEFACT_2H_KNUCKLES_AVALON",
        "humanName": "Adept'sDamagedAvalonianGauntlet"
    },
    "1250": {
        "botName": "T5_ARTEFACT_2H_KNUCKLES_AVALON",
        "humanName": "Expert'sDamagedAvalonianGauntlet"
    },
    "1251": {
        "botName": "T6_ARTEFACT_2H_KNUCKLES_AVALON",
        "humanName": "Master'sDamagedAvalonianGauntlet"
    },
    "1252": {
        "botName": "T7_ARTEFACT_2H_KNUCKLES_AVALON",
        "humanName": "Grandmaster'sDamagedAvalonianGauntlet"
    },
    "1253": {
        "botName": "T8_ARTEFACT_2H_KNUCKLES_AVALON",
        "humanName": "Elder'sDamagedAvalonianGauntlet"
    },
    "1254": {
        "botName": "T4_ARTEFACT_MAIN_DAGGER_HELL",
        "humanName": "Adept'sBrokenDemonicFang"
    },
    "1255": {
        "botName": "T5_ARTEFACT_MAIN_DAGGER_HELL",
        "humanName": "Expert'sBrokenDemonicFang"
    },
    "1256": {
        "botName": "T6_ARTEFACT_MAIN_DAGGER_HELL",
        "humanName": "Master'sBrokenDemonicFang"
    },
    "1257": {
        "botName": "T7_ARTEFACT_MAIN_DAGGER_HELL",
        "humanName": "Grandmaster'sBrokenDemonicFang"
    },
    "1258": {
        "botName": "T8_ARTEFACT_MAIN_DAGGER_HELL",
        "humanName": "Elder'sBrokenDemonicFang"
    },
    "1259": {
        "botName": "T4_ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Adept'sAncientShieldCore"
    },
    "1260": {
        "botName": "T5_ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Expert'sAncientShieldCore"
    },
    "1261": {
        "botName": "T6_ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Master'sAncientShieldCore"
    },
    "1262": {
        "botName": "T7_ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Grandmaster'sAncientShieldCore"
    },
    "1263": {
        "botName": "T8_ARTEFACT_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Elder'sAncientShieldCore"
    },
    "1264": {
        "botName": "T4_ARTEFACT_OFF_SHIELD_HELL",
        "humanName": "Adept'sInfernalShieldCore"
    },
    "1265": {
        "botName": "T5_ARTEFACT_OFF_SHIELD_HELL",
        "humanName": "Expert'sInfernalShieldCore"
    },
    "1266": {
        "botName": "T6_ARTEFACT_OFF_SHIELD_HELL",
        "humanName": "Master'sInfernalShieldCore"
    },
    "1267": {
        "botName": "T7_ARTEFACT_OFF_SHIELD_HELL",
        "humanName": "Grandmaster'sInfernalShieldCore"
    },
    "1268": {
        "botName": "T8_ARTEFACT_OFF_SHIELD_HELL",
        "humanName": "Elder'sInfernalShieldCore"
    },
    "1269": {
        "botName": "T4_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Adept'sBloodforgedSpikes"
    },
    "1270": {
        "botName": "T5_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Expert'sBloodforgedSpikes"
    },
    "1271": {
        "botName": "T6_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Master'sBloodforgedSpikes"
    },
    "1272": {
        "botName": "T7_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Grandmaster'sBloodforgedSpikes"
    },
    "1273": {
        "botName": "T8_ARTEFACT_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Elder'sBloodforgedSpikes"
    },
    "1274": {
        "botName": "T4_ARTEFACT_OFF_SHIELD_AVALON",
        "humanName": "Adept'sCrushedAvalonianHeirloom"
    },
    "1275": {
        "botName": "T5_ARTEFACT_OFF_SHIELD_AVALON",
        "humanName": "Expert'sCrushedAvalonianHeirloom"
    },
    "1276": {
        "botName": "T6_ARTEFACT_OFF_SHIELD_AVALON",
        "humanName": "Master'sCrushedAvalonianHeirloom"
    },
    "1277": {
        "botName": "T7_ARTEFACT_OFF_SHIELD_AVALON",
        "humanName": "Grandmaster'sCrushedAvalonianHeirloom"
    },
    "1278": {
        "botName": "T8_ARTEFACT_OFF_SHIELD_AVALON",
        "humanName": "Elder'sCrushedAvalonianHeirloom"
    },
    "1279": {
        "botName": "T4_ARTEFACT_OFF_ORB_MORGANA",
        "humanName": "Adept'sAlluringCrystal"
    },
    "1280": {
        "botName": "T5_ARTEFACT_OFF_ORB_MORGANA",
        "humanName": "Expert'sAlluringCrystal"
    },
    "1281": {
        "botName": "T6_ARTEFACT_OFF_ORB_MORGANA",
        "humanName": "Master'sAlluringCrystal"
    },
    "1282": {
        "botName": "T7_ARTEFACT_OFF_ORB_MORGANA",
        "humanName": "Grandmaster'sAlluringCrystal"
    },
    "1283": {
        "botName": "T8_ARTEFACT_OFF_ORB_MORGANA",
        "humanName": "Elder'sAlluringCrystal"
    },
    "1284": {
        "botName": "T4_ARTEFACT_OFF_DEMONSKULL_HELL",
        "humanName": "Adept'sDemonicJawbone"
    },
    "1285": {
        "botName": "T5_ARTEFACT_OFF_DEMONSKULL_HELL",
        "humanName": "Expert'sDemonicJawbone"
    },
    "1286": {
        "botName": "T6_ARTEFACT_OFF_DEMONSKULL_HELL",
        "humanName": "Master'sDemonicJawbone"
    },
    "1287": {
        "botName": "T7_ARTEFACT_OFF_DEMONSKULL_HELL",
        "humanName": "Grandmaster'sDemonicJawbone"
    },
    "1288": {
        "botName": "T8_ARTEFACT_OFF_DEMONSKULL_HELL",
        "humanName": "Elder'sDemonicJawbone"
    },
    "1289": {
        "botName": "T4_ARTEFACT_OFF_TOTEM_KEEPER",
        "humanName": "Adept'sInscribedStone"
    },
    "1290": {
        "botName": "T5_ARTEFACT_OFF_TOTEM_KEEPER",
        "humanName": "Expert'sInscribedStone"
    },
    "1291": {
        "botName": "T6_ARTEFACT_OFF_TOTEM_KEEPER",
        "humanName": "Master'sInscribedStone"
    },
    "1292": {
        "botName": "T7_ARTEFACT_OFF_TOTEM_KEEPER",
        "humanName": "Grandmaster'sInscribedStone"
    },
    "1293": {
        "botName": "T8_ARTEFACT_OFF_TOTEM_KEEPER",
        "humanName": "Elder'sInscribedStone"
    },
    "1294": {
        "botName": "T4_ARTEFACT_OFF_CENSER_AVALON",
        "humanName": "Adept'sSeveredCelestialKeepsake"
    },
    "1295": {
        "botName": "T5_ARTEFACT_OFF_CENSER_AVALON",
        "humanName": "Expert'sSeveredCelestialKeepsake"
    },
    "1296": {
        "botName": "T6_ARTEFACT_OFF_CENSER_AVALON",
        "humanName": "Master'sSeveredCelestialKeepsake"
    },
    "1297": {
        "botName": "T7_ARTEFACT_OFF_CENSER_AVALON",
        "humanName": "Grandmaster'sSeveredCelestialKeepsake"
    },
    "1298": {
        "botName": "T8_ARTEFACT_OFF_CENSER_AVALON",
        "humanName": "Elder'sSeveredCelestialKeepsake"
    },
    "1299": {
        "botName": "T4_ARTEFACT_OFF_HORN_KEEPER",
        "humanName": "Adept'sRunedHorn"
    },
    "1300": {
        "botName": "T5_ARTEFACT_OFF_HORN_KEEPER",
        "humanName": "Expert'sRunedHorn"
    },
    "1301": {
        "botName": "T6_ARTEFACT_OFF_HORN_KEEPER",
        "humanName": "Master'sRunedHorn"
    },
    "1302": {
        "botName": "T7_ARTEFACT_OFF_HORN_KEEPER",
        "humanName": "Grandmaster'sRunedHorn"
    },
    "1303": {
        "botName": "T8_ARTEFACT_OFF_HORN_KEEPER",
        "humanName": "Elder'sRunedHorn"
    },
    "1304": {
        "botName": "T4_ARTEFACT_OFF_JESTERCANE_HELL",
        "humanName": "Adept'sHellishHandle"
    },
    "1305": {
        "botName": "T5_ARTEFACT_OFF_JESTERCANE_HELL",
        "humanName": "Expert'sHellishHandle"
    },
    "1306": {
        "botName": "T6_ARTEFACT_OFF_JESTERCANE_HELL",
        "humanName": "Master'sHellishHandle"
    },
    "1307": {
        "botName": "T7_ARTEFACT_OFF_JESTERCANE_HELL",
        "humanName": "Grandmaster'sHellishHandle"
    },
    "1308": {
        "botName": "T8_ARTEFACT_OFF_JESTERCANE_HELL",
        "humanName": "Elder'sHellishHandle"
    },
    "1309": {
        "botName": "T4_ARTEFACT_OFF_LAMP_UNDEAD",
        "humanName": "Adept'sGhastlyCandle"
    },
    "1310": {
        "botName": "T5_ARTEFACT_OFF_LAMP_UNDEAD",
        "humanName": "Expert'sGhastlyCandle"
    },
    "1311": {
        "botName": "T6_ARTEFACT_OFF_LAMP_UNDEAD",
        "humanName": "Master'sGhastlyCandle"
    },
    "1312": {
        "botName": "T7_ARTEFACT_OFF_LAMP_UNDEAD",
        "humanName": "Grandmaster'sGhastlyCandle"
    },
    "1313": {
        "botName": "T8_ARTEFACT_OFF_LAMP_UNDEAD",
        "humanName": "Elder'sGhastlyCandle"
    },
    "1314": {
        "botName": "T4_ARTEFACT_OFF_TALISMAN_AVALON",
        "humanName": "Adept'sShatteredAvalonianMemento"
    },
    "1315": {
        "botName": "T5_ARTEFACT_OFF_TALISMAN_AVALON",
        "humanName": "Expert'sShatteredAvalonianMemento"
    },
    "1316": {
        "botName": "T6_ARTEFACT_OFF_TALISMAN_AVALON",
        "humanName": "Master'sShatteredAvalonianMemento"
    },
    "1317": {
        "botName": "T7_ARTEFACT_OFF_TALISMAN_AVALON",
        "humanName": "Grandmaster'sShatteredAvalonianMemento"
    },
    "1318": {
        "botName": "T8_ARTEFACT_OFF_TALISMAN_AVALON",
        "humanName": "Elder'sShatteredAvalonianMemento"
    },
    "1319": {
        "botName": "T4_ARTEFACT_HEAD_PLATE_UNDEAD",
        "humanName": "Adept'sAncientPadding"
    },
    "1320": {
        "botName": "T5_ARTEFACT_HEAD_PLATE_UNDEAD",
        "humanName": "Expert'sAncientPadding"
    },
    "1321": {
        "botName": "T6_ARTEFACT_HEAD_PLATE_UNDEAD",
        "humanName": "Master'sAncientPadding"
    },
    "1322": {
        "botName": "T7_ARTEFACT_HEAD_PLATE_UNDEAD",
        "humanName": "Grandmaster'sAncientPadding"
    },
    "1323": {
        "botName": "T8_ARTEFACT_HEAD_PLATE_UNDEAD",
        "humanName": "Elder'sAncientPadding"
    },
    "1324": {
        "botName": "T4_ARTEFACT_ARMOR_PLATE_UNDEAD",
        "humanName": "Adept'sAncientChainRings"
    },
    "1325": {
        "botName": "T5_ARTEFACT_ARMOR_PLATE_UNDEAD",
        "humanName": "Expert'sAncientChainRings"
    },
    "1326": {
        "botName": "T6_ARTEFACT_ARMOR_PLATE_UNDEAD",
        "humanName": "Master'sAncientChainRings"
    },
    "1327": {
        "botName": "T7_ARTEFACT_ARMOR_PLATE_UNDEAD",
        "humanName": "Grandmaster'sAncientChainRings"
    },
    "1328": {
        "botName": "T8_ARTEFACT_ARMOR_PLATE_UNDEAD",
        "humanName": "Elder'sAncientChainRings"
    },
    "1329": {
        "botName": "T4_ARTEFACT_SHOES_PLATE_UNDEAD",
        "humanName": "Adept'sAncientBindings"
    },
    "1330": {
        "botName": "T5_ARTEFACT_SHOES_PLATE_UNDEAD",
        "humanName": "Expert'sAncientBindings"
    },
    "1331": {
        "botName": "T6_ARTEFACT_SHOES_PLATE_UNDEAD",
        "humanName": "Master'sAncientBindings"
    },
    "1332": {
        "botName": "T7_ARTEFACT_SHOES_PLATE_UNDEAD",
        "humanName": "Grandmaster'sAncientBindings"
    },
    "1333": {
        "botName": "T8_ARTEFACT_SHOES_PLATE_UNDEAD",
        "humanName": "Elder'sAncientBindings"
    },
    "1334": {
        "botName": "T4_ARTEFACT_HEAD_PLATE_HELL",
        "humanName": "Adept'sDemonicScraps"
    },
    "1335": {
        "botName": "T5_ARTEFACT_HEAD_PLATE_HELL",
        "humanName": "Expert'sDemonicScraps"
    },
    "1336": {
        "botName": "T6_ARTEFACT_HEAD_PLATE_HELL",
        "humanName": "Master'sDemonicScraps"
    },
    "1337": {
        "botName": "T7_ARTEFACT_HEAD_PLATE_HELL",
        "humanName": "Grandmaster'sDemonicScraps"
    },
    "1338": {
        "botName": "T8_ARTEFACT_HEAD_PLATE_HELL",
        "humanName": "Elder'sDemonicScraps"
    },
    "1339": {
        "botName": "T4_ARTEFACT_ARMOR_PLATE_HELL",
        "humanName": "Adept'sDemonicPlates"
    },
    "1340": {
        "botName": "T5_ARTEFACT_ARMOR_PLATE_HELL",
        "humanName": "Expert'sDemonicPlates"
    },
    "1341": {
        "botName": "T6_ARTEFACT_ARMOR_PLATE_HELL",
        "humanName": "Master'sDemonicPlates"
    },
    "1342": {
        "botName": "T7_ARTEFACT_ARMOR_PLATE_HELL",
        "humanName": "Grandmaster'sDemonicPlates"
    },
    "1343": {
        "botName": "T8_ARTEFACT_ARMOR_PLATE_HELL",
        "humanName": "Elder'sDemonicPlates"
    },
    "1344": {
        "botName": "T4_ARTEFACT_SHOES_PLATE_HELL",
        "humanName": "Adept'sDemonicFilling"
    },
    "1345": {
        "botName": "T5_ARTEFACT_SHOES_PLATE_HELL",
        "humanName": "Expert'sDemonicFilling"
    },
    "1346": {
        "botName": "T6_ARTEFACT_SHOES_PLATE_HELL",
        "humanName": "Master'sDemonicFilling"
    },
    "1347": {
        "botName": "T7_ARTEFACT_SHOES_PLATE_HELL",
        "humanName": "Grandmaster'sDemonicFilling"
    },
    "1348": {
        "botName": "T8_ARTEFACT_SHOES_PLATE_HELL",
        "humanName": "Elder'sDemonicFilling"
    },
    "1349": {
        "botName": "T4_ARTEFACT_HEAD_PLATE_KEEPER",
        "humanName": "Adept'sCarvedSkullPadding"
    },
    "1350": {
        "botName": "T5_ARTEFACT_HEAD_PLATE_KEEPER",
        "humanName": "Expert'sCarvedSkullPadding"
    },
    "1351": {
        "botName": "T6_ARTEFACT_HEAD_PLATE_KEEPER",
        "humanName": "Master'sCarvedSkullPadding"
    },
    "1352": {
        "botName": "T7_ARTEFACT_HEAD_PLATE_KEEPER",
        "humanName": "Grandmaster'sCarvedSkullPadding"
    },
    "1353": {
        "botName": "T8_ARTEFACT_HEAD_PLATE_KEEPER",
        "humanName": "Elder'sCarvedSkullPadding"
    },
    "1354": {
        "botName": "T4_ARTEFACT_ARMOR_PLATE_KEEPER",
        "humanName": "Adept'sPreservedAnimalFur"
    },
    "1355": {
        "botName": "T5_ARTEFACT_ARMOR_PLATE_KEEPER",
        "humanName": "Expert'sPreservedAnimalFur"
    },
    "1356": {
        "botName": "T6_ARTEFACT_ARMOR_PLATE_KEEPER",
        "humanName": "Master'sPreservedAnimalFur"
    },
    "1357": {
        "botName": "T7_ARTEFACT_ARMOR_PLATE_KEEPER",
        "humanName": "Grandmaster'sPreservedAnimalFur"
    },
    "1358": {
        "botName": "T8_ARTEFACT_ARMOR_PLATE_KEEPER",
        "humanName": "Elder'sPreservedAnimalFur"
    },
    "1359": {
        "botName": "T4_ARTEFACT_SHOES_PLATE_KEEPER",
        "humanName": "Adept'sInscribedBindings"
    },
    "1360": {
        "botName": "T5_ARTEFACT_SHOES_PLATE_KEEPER",
        "humanName": "Expert'sInscribedBindings"
    },
    "1361": {
        "botName": "T6_ARTEFACT_SHOES_PLATE_KEEPER",
        "humanName": "Master'sInscribedBindings"
    },
    "1362": {
        "botName": "T7_ARTEFACT_SHOES_PLATE_KEEPER",
        "humanName": "Grandmaster'sInscribedBindings"
    },
    "1363": {
        "botName": "T8_ARTEFACT_SHOES_PLATE_KEEPER",
        "humanName": "Elder'sInscribedBindings"
    },
    "1364": {
        "botName": "T4_ARTEFACT_HEAD_PLATE_AVALON",
        "humanName": "Adept'sExaltedVisor"
    },
    "1365": {
        "botName": "T5_ARTEFACT_HEAD_PLATE_AVALON",
        "humanName": "Expert'sExaltedVisor"
    },
    "1366": {
        "botName": "T6_ARTEFACT_HEAD_PLATE_AVALON",
        "humanName": "Master'sExaltedVisor"
    },
    "1367": {
        "botName": "T7_ARTEFACT_HEAD_PLATE_AVALON",
        "humanName": "Grandmaster'sExaltedVisor"
    },
    "1368": {
        "botName": "T8_ARTEFACT_HEAD_PLATE_AVALON",
        "humanName": "Elder'sExaltedVisor"
    },
    "1369": {
        "botName": "T4_ARTEFACT_ARMOR_PLATE_AVALON",
        "humanName": "Adept'sExaltedPlating"
    },
    "1370": {
        "botName": "T5_ARTEFACT_ARMOR_PLATE_AVALON",
        "humanName": "Expert'sExaltedPlating"
    },
    "1371": {
        "botName": "T6_ARTEFACT_ARMOR_PLATE_AVALON",
        "humanName": "Master'sExaltedPlating"
    },
    "1372": {
        "botName": "T7_ARTEFACT_ARMOR_PLATE_AVALON",
        "humanName": "Grandmaster'sExaltedPlating"
    },
    "1373": {
        "botName": "T8_ARTEFACT_ARMOR_PLATE_AVALON",
        "humanName": "Elder'sExaltedPlating"
    },
    "1374": {
        "botName": "T4_ARTEFACT_SHOES_PLATE_AVALON",
        "humanName": "Adept'sExaltedGreave"
    },
    "1375": {
        "botName": "T5_ARTEFACT_SHOES_PLATE_AVALON",
        "humanName": "Expert'sExaltedGreave"
    },
    "1376": {
        "botName": "T6_ARTEFACT_SHOES_PLATE_AVALON",
        "humanName": "Master'sExaltedGreave"
    },
    "1377": {
        "botName": "T7_ARTEFACT_SHOES_PLATE_AVALON",
        "humanName": "Grandmaster'sExaltedGreave"
    },
    "1378": {
        "botName": "T8_ARTEFACT_SHOES_PLATE_AVALON",
        "humanName": "Elder'sExaltedGreave"
    },
    "1379": {
        "botName": "T4_ARTEFACT_HEAD_LEATHER_MORGANA",
        "humanName": "Adept'sImbuedVisor"
    },
    "1380": {
        "botName": "T5_ARTEFACT_HEAD_LEATHER_MORGANA",
        "humanName": "Expert'sImbuedVisor"
    },
    "1381": {
        "botName": "T6_ARTEFACT_HEAD_LEATHER_MORGANA",
        "humanName": "Master'sImbuedVisor"
    },
    "1382": {
        "botName": "T7_ARTEFACT_HEAD_LEATHER_MORGANA",
        "humanName": "Grandmaster'sImbuedVisor"
    },
    "1383": {
        "botName": "T8_ARTEFACT_HEAD_LEATHER_MORGANA",
        "humanName": "Elder'sImbuedVisor"
    },
    "1384": {
        "botName": "T4_ARTEFACT_ARMOR_LEATHER_MORGANA",
        "humanName": "Adept'sImbuedLeatherFolds"
    },
    "1385": {
        "botName": "T5_ARTEFACT_ARMOR_LEATHER_MORGANA",
        "humanName": "Expert'sImbuedLeatherFolds"
    },
    "1386": {
        "botName": "T6_ARTEFACT_ARMOR_LEATHER_MORGANA",
        "humanName": "Master'sImbuedLeatherFolds"
    },
    "1387": {
        "botName": "T7_ARTEFACT_ARMOR_LEATHER_MORGANA",
        "humanName": "Grandmaster'sImbuedLeatherFolds"
    },
    "1388": {
        "botName": "T8_ARTEFACT_ARMOR_LEATHER_MORGANA",
        "humanName": "Elder'sImbuedLeatherFolds"
    },
    "1389": {
        "botName": "T4_ARTEFACT_SHOES_LEATHER_MORGANA",
        "humanName": "Adept'sImbuedSoles"
    },
    "1390": {
        "botName": "T5_ARTEFACT_SHOES_LEATHER_MORGANA",
        "humanName": "Expert'sImbuedSoles"
    },
    "1391": {
        "botName": "T6_ARTEFACT_SHOES_LEATHER_MORGANA",
        "humanName": "Master'sImbuedSoles"
    },
    "1392": {
        "botName": "T7_ARTEFACT_SHOES_LEATHER_MORGANA",
        "humanName": "Grandmaster'sImbuedSoles"
    },
    "1393": {
        "botName": "T8_ARTEFACT_SHOES_LEATHER_MORGANA",
        "humanName": "Elder'sImbuedSoles"
    },
    "1394": {
        "botName": "T4_ARTEFACT_HEAD_LEATHER_HELL",
        "humanName": "Adept'sDemonhidePadding"
    },
    "1395": {
        "botName": "T5_ARTEFACT_HEAD_LEATHER_HELL",
        "humanName": "Expert'sDemonhidePadding"
    },
    "1396": {
        "botName": "T6_ARTEFACT_HEAD_LEATHER_HELL",
        "humanName": "Master'sDemonhidePadding"
    },
    "1397": {
        "botName": "T7_ARTEFACT_HEAD_LEATHER_HELL",
        "humanName": "Grandmaster'sDemonhidePadding"
    },
    "1398": {
        "botName": "T8_ARTEFACT_HEAD_LEATHER_HELL",
        "humanName": "Elder'sDemonhidePadding"
    },
    "1399": {
        "botName": "T4_ARTEFACT_ARMOR_LEATHER_HELL",
        "humanName": "Adept'sDemonhideLeather"
    },
    "1400": {
        "botName": "T5_ARTEFACT_ARMOR_LEATHER_HELL",
        "humanName": "Expert'sDemonhideLeather"
    },
    "1401": {
        "botName": "T6_ARTEFACT_ARMOR_LEATHER_HELL",
        "humanName": "Master'sDemonhideLeather"
    },
    "1402": {
        "botName": "T7_ARTEFACT_ARMOR_LEATHER_HELL",
        "humanName": "Grandmaster'sDemonhideLeather"
    },
    "1403": {
        "botName": "T8_ARTEFACT_ARMOR_LEATHER_HELL",
        "humanName": "Elder'sDemonhideLeather"
    },
    "1404": {
        "botName": "T4_ARTEFACT_SHOES_LEATHER_HELL",
        "humanName": "Adept'sDemonhideBindings"
    },
    "1405": {
        "botName": "T5_ARTEFACT_SHOES_LEATHER_HELL",
        "humanName": "Expert'sDemonhideBindings"
    },
    "1406": {
        "botName": "T6_ARTEFACT_SHOES_LEATHER_HELL",
        "humanName": "Master'sDemonhideBindings"
    },
    "1407": {
        "botName": "T7_ARTEFACT_SHOES_LEATHER_HELL",
        "humanName": "Grandmaster'sDemonhideBindings"
    },
    "1408": {
        "botName": "T8_ARTEFACT_SHOES_LEATHER_HELL",
        "humanName": "Elder'sDemonhideBindings"
    },
    "1409": {
        "botName": "T4_ARTEFACT_HEAD_LEATHER_UNDEAD",
        "humanName": "Adept'sGhastlyVisor"
    },
    "1410": {
        "botName": "T5_ARTEFACT_HEAD_LEATHER_UNDEAD",
        "humanName": "Expert'sGhastlyVisor"
    },
    "1411": {
        "botName": "T6_ARTEFACT_HEAD_LEATHER_UNDEAD",
        "humanName": "Master'sGhastlyVisor"
    },
    "1412": {
        "botName": "T7_ARTEFACT_HEAD_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sGhastlyVisor"
    },
    "1413": {
        "botName": "T8_ARTEFACT_HEAD_LEATHER_UNDEAD",
        "humanName": "Elder'sGhastlyVisor"
    },
    "1414": {
        "botName": "T4_ARTEFACT_ARMOR_LEATHER_UNDEAD",
        "humanName": "Adept'sGhastlyLeather"
    },
    "1415": {
        "botName": "T5_ARTEFACT_ARMOR_LEATHER_UNDEAD",
        "humanName": "Expert'sGhastlyLeather"
    },
    "1416": {
        "botName": "T6_ARTEFACT_ARMOR_LEATHER_UNDEAD",
        "humanName": "Master'sGhastlyLeather"
    },
    "1417": {
        "botName": "T7_ARTEFACT_ARMOR_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sGhastlyLeather"
    },
    "1418": {
        "botName": "T8_ARTEFACT_ARMOR_LEATHER_UNDEAD",
        "humanName": "Elder'sGhastlyLeather"
    },
    "1419": {
        "botName": "T4_ARTEFACT_SHOES_LEATHER_UNDEAD",
        "humanName": "Adept'sGhastlyBindings"
    },
    "1420": {
        "botName": "T5_ARTEFACT_SHOES_LEATHER_UNDEAD",
        "humanName": "Expert'sGhastlyBindings"
    },
    "1421": {
        "botName": "T6_ARTEFACT_SHOES_LEATHER_UNDEAD",
        "humanName": "Master'sGhastlyBindings"
    },
    "1422": {
        "botName": "T7_ARTEFACT_SHOES_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sGhastlyBindings"
    },
    "1423": {
        "botName": "T8_ARTEFACT_SHOES_LEATHER_UNDEAD",
        "humanName": "Elder'sGhastlyBindings"
    },
    "1424": {
        "botName": "T4_ARTEFACT_HEAD_LEATHER_AVALON",
        "humanName": "Adept'sAuguredPadding"
    },
    "1425": {
        "botName": "T5_ARTEFACT_HEAD_LEATHER_AVALON",
        "humanName": "Expert'sAuguredPadding"
    },
    "1426": {
        "botName": "T6_ARTEFACT_HEAD_LEATHER_AVALON",
        "humanName": "Master'sAuguredPadding"
    },
    "1427": {
        "botName": "T7_ARTEFACT_HEAD_LEATHER_AVALON",
        "humanName": "Grandmaster'sAuguredPadding"
    },
    "1428": {
        "botName": "T8_ARTEFACT_HEAD_LEATHER_AVALON",
        "humanName": "Elder'sAuguredPadding"
    },
    "1429": {
        "botName": "T4_ARTEFACT_ARMOR_LEATHER_AVALON",
        "humanName": "Adept'sAuguredSash"
    },
    "1430": {
        "botName": "T5_ARTEFACT_ARMOR_LEATHER_AVALON",
        "humanName": "Expert'sAuguredSash"
    },
    "1431": {
        "botName": "T6_ARTEFACT_ARMOR_LEATHER_AVALON",
        "humanName": "Master'sAuguredSash"
    },
    "1432": {
        "botName": "T7_ARTEFACT_ARMOR_LEATHER_AVALON",
        "humanName": "Grandmaster'sAuguredSash"
    },
    "1433": {
        "botName": "T8_ARTEFACT_ARMOR_LEATHER_AVALON",
        "humanName": "Elder'sAuguredSash"
    },
    "1434": {
        "botName": "T4_ARTEFACT_SHOES_LEATHER_AVALON",
        "humanName": "Adept'sAuguredFasteners"
    },
    "1435": {
        "botName": "T5_ARTEFACT_SHOES_LEATHER_AVALON",
        "humanName": "Expert'sAuguredFasteners"
    },
    "1436": {
        "botName": "T6_ARTEFACT_SHOES_LEATHER_AVALON",
        "humanName": "Master'sAuguredFasteners"
    },
    "1437": {
        "botName": "T7_ARTEFACT_SHOES_LEATHER_AVALON",
        "humanName": "Grandmaster'sAuguredFasteners"
    },
    "1438": {
        "botName": "T8_ARTEFACT_SHOES_LEATHER_AVALON",
        "humanName": "Elder'sAuguredFasteners"
    },
    "1439": {
        "botName": "T4_ARTEFACT_HEAD_CLOTH_KEEPER",
        "humanName": "Adept'sDruidicPreservedBeak"
    },
    "1440": {
        "botName": "T5_ARTEFACT_HEAD_CLOTH_KEEPER",
        "humanName": "Expert'sDruidicPreservedBeak"
    },
    "1441": {
        "botName": "T6_ARTEFACT_HEAD_CLOTH_KEEPER",
        "humanName": "Master'sDruidicPreservedBeak"
    },
    "1442": {
        "botName": "T7_ARTEFACT_HEAD_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidicPreservedBeak"
    },
    "1443": {
        "botName": "T8_ARTEFACT_HEAD_CLOTH_KEEPER",
        "humanName": "Elder'sDruidicPreservedBeak"
    },
    "1444": {
        "botName": "T4_ARTEFACT_ARMOR_CLOTH_KEEPER",
        "humanName": "Adept'sDruidicFeathers"
    },
    "1445": {
        "botName": "T5_ARTEFACT_ARMOR_CLOTH_KEEPER",
        "humanName": "Expert'sDruidicFeathers"
    },
    "1446": {
        "botName": "T6_ARTEFACT_ARMOR_CLOTH_KEEPER",
        "humanName": "Master'sDruidicFeathers"
    },
    "1447": {
        "botName": "T7_ARTEFACT_ARMOR_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidicFeathers"
    },
    "1448": {
        "botName": "T8_ARTEFACT_ARMOR_CLOTH_KEEPER",
        "humanName": "Elder'sDruidicFeathers"
    },
    "1449": {
        "botName": "T4_ARTEFACT_SHOES_CLOTH_KEEPER",
        "humanName": "Adept'sDruidicBindings"
    },
    "1450": {
        "botName": "T5_ARTEFACT_SHOES_CLOTH_KEEPER",
        "humanName": "Expert'sDruidicBindings"
    },
    "1451": {
        "botName": "T6_ARTEFACT_SHOES_CLOTH_KEEPER",
        "humanName": "Master'sDruidicBindings"
    },
    "1452": {
        "botName": "T7_ARTEFACT_SHOES_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidicBindings"
    },
    "1453": {
        "botName": "T8_ARTEFACT_SHOES_CLOTH_KEEPER",
        "humanName": "Elder'sDruidicBindings"
    },
    "1454": {
        "botName": "T4_ARTEFACT_HEAD_CLOTH_HELL",
        "humanName": "Adept'sInfernalClothVisor"
    },
    "1455": {
        "botName": "T5_ARTEFACT_HEAD_CLOTH_HELL",
        "humanName": "Expert'sInfernalClothVisor"
    },
    "1456": {
        "botName": "T6_ARTEFACT_HEAD_CLOTH_HELL",
        "humanName": "Master'sInfernalClothVisor"
    },
    "1457": {
        "botName": "T7_ARTEFACT_HEAD_CLOTH_HELL",
        "humanName": "Grandmaster'sInfernalClothVisor"
    },
    "1458": {
        "botName": "T8_ARTEFACT_HEAD_CLOTH_HELL",
        "humanName": "Elder'sInfernalClothVisor"
    },
    "1459": {
        "botName": "T4_ARTEFACT_ARMOR_CLOTH_HELL",
        "humanName": "Adept'sInfernalClothFolds"
    },
    "1460": {
        "botName": "T5_ARTEFACT_ARMOR_CLOTH_HELL",
        "humanName": "Expert'sInfernalClothFolds"
    },
    "1461": {
        "botName": "T6_ARTEFACT_ARMOR_CLOTH_HELL",
        "humanName": "Master'sInfernalClothFolds"
    },
    "1462": {
        "botName": "T7_ARTEFACT_ARMOR_CLOTH_HELL",
        "humanName": "Grandmaster'sInfernalClothFolds"
    },
    "1463": {
        "botName": "T8_ARTEFACT_ARMOR_CLOTH_HELL",
        "humanName": "Elder'sInfernalClothFolds"
    },
    "1464": {
        "botName": "T4_ARTEFACT_SHOES_CLOTH_HELL",
        "humanName": "Adept'sInfernalClothBindings"
    },
    "1465": {
        "botName": "T5_ARTEFACT_SHOES_CLOTH_HELL",
        "humanName": "Expert'sInfernalClothBindings"
    },
    "1466": {
        "botName": "T6_ARTEFACT_SHOES_CLOTH_HELL",
        "humanName": "Master'sInfernalClothBindings"
    },
    "1467": {
        "botName": "T7_ARTEFACT_SHOES_CLOTH_HELL",
        "humanName": "Grandmaster'sInfernalClothBindings"
    },
    "1468": {
        "botName": "T8_ARTEFACT_SHOES_CLOTH_HELL",
        "humanName": "Elder'sInfernalClothBindings"
    },
    "1469": {
        "botName": "T4_ARTEFACT_HEAD_CLOTH_MORGANA",
        "humanName": "Adept'sAlluringPadding"
    },
    "1470": {
        "botName": "T5_ARTEFACT_HEAD_CLOTH_MORGANA",
        "humanName": "Expert'sAlluringPadding"
    },
    "1471": {
        "botName": "T6_ARTEFACT_HEAD_CLOTH_MORGANA",
        "humanName": "Master'sAlluringPadding"
    },
    "1472": {
        "botName": "T7_ARTEFACT_HEAD_CLOTH_MORGANA",
        "humanName": "Grandmaster'sAlluringPadding"
    },
    "1473": {
        "botName": "T8_ARTEFACT_HEAD_CLOTH_MORGANA",
        "humanName": "Elder'sAlluringPadding"
    },
    "1474": {
        "botName": "T4_ARTEFACT_ARMOR_CLOTH_MORGANA",
        "humanName": "Adept'sAlluringAmulet"
    },
    "1475": {
        "botName": "T5_ARTEFACT_ARMOR_CLOTH_MORGANA",
        "humanName": "Expert'sAlluringAmulet"
    },
    "1476": {
        "botName": "T6_ARTEFACT_ARMOR_CLOTH_MORGANA",
        "humanName": "Master'sAlluringAmulet"
    },
    "1477": {
        "botName": "T7_ARTEFACT_ARMOR_CLOTH_MORGANA",
        "humanName": "Grandmaster'sAlluringAmulet"
    },
    "1478": {
        "botName": "T8_ARTEFACT_ARMOR_CLOTH_MORGANA",
        "humanName": "Elder'sAlluringAmulet"
    },
    "1479": {
        "botName": "T4_ARTEFACT_SHOES_CLOTH_MORGANA",
        "humanName": "Adept'sAlluringBindings"
    },
    "1480": {
        "botName": "T5_ARTEFACT_SHOES_CLOTH_MORGANA",
        "humanName": "Expert'sAlluringBindings"
    },
    "1481": {
        "botName": "T6_ARTEFACT_SHOES_CLOTH_MORGANA",
        "humanName": "Master'sAlluringBindings"
    },
    "1482": {
        "botName": "T7_ARTEFACT_SHOES_CLOTH_MORGANA",
        "humanName": "Grandmaster'sAlluringBindings"
    },
    "1483": {
        "botName": "T8_ARTEFACT_SHOES_CLOTH_MORGANA",
        "humanName": "Elder'sAlluringBindings"
    },
    "1484": {
        "botName": "T4_ARTEFACT_HEAD_CLOTH_AVALON",
        "humanName": "Adept'sSanctifiedMask"
    },
    "1485": {
        "botName": "T5_ARTEFACT_HEAD_CLOTH_AVALON",
        "humanName": "Expert'sSanctifiedMask"
    },
    "1486": {
        "botName": "T6_ARTEFACT_HEAD_CLOTH_AVALON",
        "humanName": "Master'sSanctifiedMask"
    },
    "1487": {
        "botName": "T7_ARTEFACT_HEAD_CLOTH_AVALON",
        "humanName": "Grandmaster'sSanctifiedMask"
    },
    "1488": {
        "botName": "T8_ARTEFACT_HEAD_CLOTH_AVALON",
        "humanName": "Elder'sSanctifiedMask"
    },
    "1489": {
        "botName": "T4_ARTEFACT_ARMOR_CLOTH_AVALON",
        "humanName": "Adept'sSanctifiedBelt"
    },
    "1490": {
        "botName": "T5_ARTEFACT_ARMOR_CLOTH_AVALON",
        "humanName": "Expert'sSanctifiedBelt"
    },
    "1491": {
        "botName": "T6_ARTEFACT_ARMOR_CLOTH_AVALON",
        "humanName": "Master'sSanctifiedBelt"
    },
    "1492": {
        "botName": "T7_ARTEFACT_ARMOR_CLOTH_AVALON",
        "humanName": "Grandmaster'sSanctifiedBelt"
    },
    "1493": {
        "botName": "T8_ARTEFACT_ARMOR_CLOTH_AVALON",
        "humanName": "Elder'sSanctifiedBelt"
    },
    "1494": {
        "botName": "T4_ARTEFACT_SHOES_CLOTH_AVALON",
        "humanName": "Adept'sSanctifiedBindings"
    },
    "1495": {
        "botName": "T5_ARTEFACT_SHOES_CLOTH_AVALON",
        "humanName": "Expert'sSanctifiedBindings"
    },
    "1496": {
        "botName": "T6_ARTEFACT_SHOES_CLOTH_AVALON",
        "humanName": "Master'sSanctifiedBindings"
    },
    "1497": {
        "botName": "T7_ARTEFACT_SHOES_CLOTH_AVALON",
        "humanName": "Grandmaster'sSanctifiedBindings"
    },
    "1498": {
        "botName": "T8_ARTEFACT_SHOES_CLOTH_AVALON",
        "humanName": "Elder'sSanctifiedBindings"
    },
    "1499": {
        "botName": "T4_ARTEFACT_TOKEN_FAVOR_1",
        "humanName": "Adept'sCrystallizedSpirit"
    },
    "1500": {
        "botName": "T5_ARTEFACT_TOKEN_FAVOR_1",
        "humanName": "Expert'sCrystallizedSpirit"
    },
    "1501": {
        "botName": "T6_ARTEFACT_TOKEN_FAVOR_1",
        "humanName": "Master'sCrystallizedSpirit"
    },
    "1502": {
        "botName": "T7_ARTEFACT_TOKEN_FAVOR_1",
        "humanName": "Grandmaster'sCrystallizedSpirit"
    },
    "1503": {
        "botName": "T8_ARTEFACT_TOKEN_FAVOR_1",
        "humanName": "Elder'sCrystallizedSpirit"
    },
    "1504": {
        "botName": "T4_ARTEFACT_TOKEN_FAVOR_2",
        "humanName": "Adept'sCrystallizedDread"
    },
    "1505": {
        "botName": "T5_ARTEFACT_TOKEN_FAVOR_2",
        "humanName": "Expert'sCrystallizedDread"
    },
    "1506": {
        "botName": "T6_ARTEFACT_TOKEN_FAVOR_2",
        "humanName": "Master'sCrystallizedDread"
    },
    "1507": {
        "botName": "T7_ARTEFACT_TOKEN_FAVOR_2",
        "humanName": "Grandmaster'sCrystallizedDread"
    },
    "1508": {
        "botName": "T8_ARTEFACT_TOKEN_FAVOR_2",
        "humanName": "Elder'sCrystallizedDread"
    },
    "1509": {
        "botName": "T4_ARTEFACT_TOKEN_FAVOR_3",
        "humanName": "Adept'sCrystallizedMagic"
    },
    "1510": {
        "botName": "T5_ARTEFACT_TOKEN_FAVOR_3",
        "humanName": "Expert'sCrystallizedMagic"
    },
    "1511": {
        "botName": "T6_ARTEFACT_TOKEN_FAVOR_3",
        "humanName": "Master'sCrystallizedMagic"
    },
    "1512": {
        "botName": "T7_ARTEFACT_TOKEN_FAVOR_3",
        "humanName": "Grandmaster'sCrystallizedMagic"
    },
    "1513": {
        "botName": "T8_ARTEFACT_TOKEN_FAVOR_3",
        "humanName": "Elder'sCrystallizedMagic"
    },
    "1514": {
        "botName": "T4_ARTEFACT_TOKEN_FAVOR_4",
        "humanName": "Adept'sCrystallizedDivinity"
    },
    "1515": {
        "botName": "T5_ARTEFACT_TOKEN_FAVOR_4",
        "humanName": "Expert'sCrystallizedDivinity"
    },
    "1516": {
        "botName": "T6_ARTEFACT_TOKEN_FAVOR_4",
        "humanName": "Master'sCrystallizedDivinity"
    },
    "1517": {
        "botName": "T7_ARTEFACT_TOKEN_FAVOR_4",
        "humanName": "Grandmaster'sCrystallizedDivinity"
    },
    "1518": {
        "botName": "T8_ARTEFACT_TOKEN_FAVOR_4",
        "humanName": "Elder'sCrystallizedDivinity"
    },
    "1519": {
        "botName": "T4_ESSENCE_POTION",
        "humanName": "Adept'sArcaneEssence"
    },
    "1520": {
        "botName": "T4_ESSENCE",
        "humanName": "Adept'sFadedEssence"
    },
    "1521": {
        "botName": "T4_RUNE",
        "humanName": "Adept'sRune"
    },
    "1522": {
        "botName": "T4_SOUL",
        "humanName": "Adept'sSoul"
    },
    "1523": {
        "botName": "T4_RELIC",
        "humanName": "Adept'sRelic"
    },
    "1524": {
        "botName": "T4_SHARD_AVALONIAN",
        "humanName": "Adept'sAvalonianShard"
    },
    "1525": {
        "botName": "T5_ESSENCE_POTION",
        "humanName": "Expert'sArcaneEssence"
    },
    "1526": {
        "botName": "T5_ESSENCE",
        "humanName": "Expert'sFadedEssence"
    },
    "1527": {
        "botName": "T5_RUNE",
        "humanName": "Expert'sRune"
    },
    "1528": {
        "botName": "T5_SOUL",
        "humanName": "Expert'sSoul"
    },
    "1529": {
        "botName": "T5_RELIC",
        "humanName": "Expert'sRelic"
    },
    "1530": {
        "botName": "T5_SHARD_AVALONIAN",
        "humanName": "Expert'sAvalonianShard"
    },
    "1531": {
        "botName": "T6_ESSENCE_POTION",
        "humanName": "Master'sArcaneEssence"
    },
    "1532": {
        "botName": "T6_ESSENCE",
        "humanName": "Master'sFadedEssence"
    },
    "1533": {
        "botName": "T6_RUNE",
        "humanName": "Master'sRune"
    },
    "1534": {
        "botName": "T6_SOUL",
        "humanName": "Master'sSoul"
    },
    "1535": {
        "botName": "T6_RELIC",
        "humanName": "Master'sRelic"
    },
    "1536": {
        "botName": "T6_SHARD_AVALONIAN",
        "humanName": "Master'sAvalonianShard"
    },
    "1537": {
        "botName": "T7_ESSENCE_POTION",
        "humanName": "Grandmaster'sArcaneEssence"
    },
    "1538": {
        "botName": "T7_ESSENCE",
        "humanName": "Grandmaster'sFadedEssence"
    },
    "1539": {
        "botName": "T7_RUNE",
        "humanName": "Grandmaster'sRune"
    },
    "1540": {
        "botName": "T7_SOUL",
        "humanName": "Grandmaster'sSoul"
    },
    "1541": {
        "botName": "T7_RELIC",
        "humanName": "Grandmaster'sRelic"
    },
    "1542": {
        "botName": "T7_SHARD_AVALONIAN",
        "humanName": "Grandmaster'sAvalonianShard"
    },
    "1543": {
        "botName": "T8_ESSENCE_POTION",
        "humanName": "Elder'sArcaneEssence"
    },
    "1544": {
        "botName": "T8_ESSENCE",
        "humanName": "Elder'sFadedEssence"
    },
    "1545": {
        "botName": "T8_RUNE",
        "humanName": "Elder'sRune"
    },
    "1546": {
        "botName": "T8_SOUL",
        "humanName": "Elder'sSoul"
    },
    "1547": {
        "botName": "T8_RELIC",
        "humanName": "Elder'sRelic"
    },
    "1548": {
        "botName": "T8_SHARD_AVALONIAN",
        "humanName": "Elder'sAvalonianShard"
    },
    "1549": {
        "botName": "T1_TRASH",
        "humanName": "Trash"
    },
    "1550": {
        "botName": "T2_TRASH",
        "humanName": "Trash"
    },
    "1551": {
        "botName": "T3_TRASH",
        "humanName": "Trash"
    },
    "1552": {
        "botName": "T4_TRASH",
        "humanName": "Trash"
    },
    "1553": {
        "botName": "T5_TRASH",
        "humanName": "Trash"
    },
    "1554": {
        "botName": "T6_TRASH",
        "humanName": "Trash"
    },
    "1555": {
        "botName": "T7_TRASH",
        "humanName": "Trash"
    },
    "1556": {
        "botName": "T8_TRASH",
        "humanName": "Trash"
    },
    "1557": {
        "botName": "T1_OFF_SHIELD",
        "humanName": "Beginner'sShield"
    },
    "1558": {
        "botName": "T2_OFF_SHIELD",
        "humanName": "Novice'sShield"
    },
    "1559": {
        "botName": "T3_OFF_SHIELD",
        "humanName": "Journeyman'sShield"
    },
    "1560": {
        "botName": "T4_OFF_SHIELD",
        "humanName": "Adept'sShield"
    },
    "1561": {
        "botName": "T4_OFF_SHIELD@1",
        "humanName": "Adept'sShield"
    },
    "1562": {
        "botName": "T4_OFF_SHIELD@2",
        "humanName": "Adept'sShield"
    },
    "1563": {
        "botName": "T4_OFF_SHIELD@3",
        "humanName": "Adept'sShield"
    },
    "1564": {
        "botName": "T5_OFF_SHIELD",
        "humanName": "Expert'sShield"
    },
    "1565": {
        "botName": "T5_OFF_SHIELD@1",
        "humanName": "Expert'sShield"
    },
    "1566": {
        "botName": "T5_OFF_SHIELD@2",
        "humanName": "Expert'sShield"
    },
    "1567": {
        "botName": "T5_OFF_SHIELD@3",
        "humanName": "Expert'sShield"
    },
    "1568": {
        "botName": "T6_OFF_SHIELD",
        "humanName": "Master'sShield"
    },
    "1569": {
        "botName": "T6_OFF_SHIELD@1",
        "humanName": "Master'sShield"
    },
    "1570": {
        "botName": "T6_OFF_SHIELD@2",
        "humanName": "Master'sShield"
    },
    "1571": {
        "botName": "T6_OFF_SHIELD@3",
        "humanName": "Master'sShield"
    },
    "1572": {
        "botName": "T7_OFF_SHIELD",
        "humanName": "Grandmaster'sShield"
    },
    "1573": {
        "botName": "T7_OFF_SHIELD@1",
        "humanName": "Grandmaster'sShield"
    },
    "1574": {
        "botName": "T7_OFF_SHIELD@2",
        "humanName": "Grandmaster'sShield"
    },
    "1575": {
        "botName": "T7_OFF_SHIELD@3",
        "humanName": "Grandmaster'sShield"
    },
    "1576": {
        "botName": "T8_OFF_SHIELD",
        "humanName": "Elder'sShield"
    },
    "1577": {
        "botName": "T8_OFF_SHIELD@1",
        "humanName": "Elder'sShield"
    },
    "1578": {
        "botName": "T8_OFF_SHIELD@2",
        "humanName": "Elder'sShield"
    },
    "1579": {
        "botName": "T8_OFF_SHIELD@3",
        "humanName": "Elder'sShield"
    },
    "1580": {
        "botName": "T4_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Adept'sSarcophagus"
    },
    "1581": {
        "botName": "T4_OFF_TOWERSHIELD_UNDEAD@1",
        "humanName": "Adept'sSarcophagus"
    },
    "1582": {
        "botName": "T4_OFF_TOWERSHIELD_UNDEAD@2",
        "humanName": "Adept'sSarcophagus"
    },
    "1583": {
        "botName": "T4_OFF_TOWERSHIELD_UNDEAD@3",
        "humanName": "Adept'sSarcophagus"
    },
    "1584": {
        "botName": "T5_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Expert'sSarcophagus"
    },
    "1585": {
        "botName": "T5_OFF_TOWERSHIELD_UNDEAD@1",
        "humanName": "Expert'sSarcophagus"
    },
    "1586": {
        "botName": "T5_OFF_TOWERSHIELD_UNDEAD@2",
        "humanName": "Expert'sSarcophagus"
    },
    "1587": {
        "botName": "T5_OFF_TOWERSHIELD_UNDEAD@3",
        "humanName": "Expert'sSarcophagus"
    },
    "1588": {
        "botName": "T6_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Master'sSarcophagus"
    },
    "1589": {
        "botName": "T6_OFF_TOWERSHIELD_UNDEAD@1",
        "humanName": "Master'sSarcophagus"
    },
    "1590": {
        "botName": "T6_OFF_TOWERSHIELD_UNDEAD@2",
        "humanName": "Master'sSarcophagus"
    },
    "1591": {
        "botName": "T6_OFF_TOWERSHIELD_UNDEAD@3",
        "humanName": "Master'sSarcophagus"
    },
    "1592": {
        "botName": "T7_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Grandmaster'sSarcophagus"
    },
    "1593": {
        "botName": "T7_OFF_TOWERSHIELD_UNDEAD@1",
        "humanName": "Grandmaster'sSarcophagus"
    },
    "1594": {
        "botName": "T7_OFF_TOWERSHIELD_UNDEAD@2",
        "humanName": "Grandmaster'sSarcophagus"
    },
    "1595": {
        "botName": "T7_OFF_TOWERSHIELD_UNDEAD@3",
        "humanName": "Grandmaster'sSarcophagus"
    },
    "1596": {
        "botName": "T8_OFF_TOWERSHIELD_UNDEAD",
        "humanName": "Elder'sSarcophagus"
    },
    "1597": {
        "botName": "T8_OFF_TOWERSHIELD_UNDEAD@1",
        "humanName": "Elder'sSarcophagus"
    },
    "1598": {
        "botName": "T8_OFF_TOWERSHIELD_UNDEAD@2",
        "humanName": "Elder'sSarcophagus"
    },
    "1599": {
        "botName": "T8_OFF_TOWERSHIELD_UNDEAD@3",
        "humanName": "Elder'sSarcophagus"
    },
    "1600": {
        "botName": "T4_OFF_SHIELD_HELL",
        "humanName": "Adept'sCaitiffShield"
    },
    "1601": {
        "botName": "T4_OFF_SHIELD_HELL@1",
        "humanName": "Adept'sCaitiffShield"
    },
    "1602": {
        "botName": "T4_OFF_SHIELD_HELL@2",
        "humanName": "Adept'sCaitiffShield"
    },
    "1603": {
        "botName": "T4_OFF_SHIELD_HELL@3",
        "humanName": "Adept'sCaitiffShield"
    },
    "1604": {
        "botName": "T5_OFF_SHIELD_HELL",
        "humanName": "Expert'sCaitiffShield"
    },
    "1605": {
        "botName": "T5_OFF_SHIELD_HELL@1",
        "humanName": "Expert'sCaitiffShield"
    },
    "1606": {
        "botName": "T5_OFF_SHIELD_HELL@2",
        "humanName": "Expert'sCaitiffShield"
    },
    "1607": {
        "botName": "T5_OFF_SHIELD_HELL@3",
        "humanName": "Expert'sCaitiffShield"
    },
    "1608": {
        "botName": "T6_OFF_SHIELD_HELL",
        "humanName": "Master'sCaitiffShield"
    },
    "1609": {
        "botName": "T6_OFF_SHIELD_HELL@1",
        "humanName": "Master'sCaitiffShield"
    },
    "1610": {
        "botName": "T6_OFF_SHIELD_HELL@2",
        "humanName": "Master'sCaitiffShield"
    },
    "1611": {
        "botName": "T6_OFF_SHIELD_HELL@3",
        "humanName": "Master'sCaitiffShield"
    },
    "1612": {
        "botName": "T7_OFF_SHIELD_HELL",
        "humanName": "Grandmaster'sCaitiffShield"
    },
    "1613": {
        "botName": "T7_OFF_SHIELD_HELL@1",
        "humanName": "Grandmaster'sCaitiffShield"
    },
    "1614": {
        "botName": "T7_OFF_SHIELD_HELL@2",
        "humanName": "Grandmaster'sCaitiffShield"
    },
    "1615": {
        "botName": "T7_OFF_SHIELD_HELL@3",
        "humanName": "Grandmaster'sCaitiffShield"
    },
    "1616": {
        "botName": "T8_OFF_SHIELD_HELL",
        "humanName": "Elder'sCaitiffShield"
    },
    "1617": {
        "botName": "T8_OFF_SHIELD_HELL@1",
        "humanName": "Elder'sCaitiffShield"
    },
    "1618": {
        "botName": "T8_OFF_SHIELD_HELL@2",
        "humanName": "Elder'sCaitiffShield"
    },
    "1619": {
        "botName": "T8_OFF_SHIELD_HELL@3",
        "humanName": "Elder'sCaitiffShield"
    },
    "1620": {
        "botName": "T4_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Adept'sFacebreaker"
    },
    "1621": {
        "botName": "T4_OFF_SPIKEDSHIELD_MORGANA@1",
        "humanName": "Adept'sFacebreaker"
    },
    "1622": {
        "botName": "T4_OFF_SPIKEDSHIELD_MORGANA@2",
        "humanName": "Adept'sFacebreaker"
    },
    "1623": {
        "botName": "T4_OFF_SPIKEDSHIELD_MORGANA@3",
        "humanName": "Adept'sFacebreaker"
    },
    "1624": {
        "botName": "T5_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Expert'sFacebreaker"
    },
    "1625": {
        "botName": "T5_OFF_SPIKEDSHIELD_MORGANA@1",
        "humanName": "Expert'sFacebreaker"
    },
    "1626": {
        "botName": "T5_OFF_SPIKEDSHIELD_MORGANA@2",
        "humanName": "Expert'sFacebreaker"
    },
    "1627": {
        "botName": "T5_OFF_SPIKEDSHIELD_MORGANA@3",
        "humanName": "Expert'sFacebreaker"
    },
    "1628": {
        "botName": "T6_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Master'sFacebreaker"
    },
    "1629": {
        "botName": "T6_OFF_SPIKEDSHIELD_MORGANA@1",
        "humanName": "Master'sFacebreaker"
    },
    "1630": {
        "botName": "T6_OFF_SPIKEDSHIELD_MORGANA@2",
        "humanName": "Master'sFacebreaker"
    },
    "1631": {
        "botName": "T6_OFF_SPIKEDSHIELD_MORGANA@3",
        "humanName": "Master'sFacebreaker"
    },
    "1632": {
        "botName": "T7_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Grandmaster'sFacebreaker"
    },
    "1633": {
        "botName": "T7_OFF_SPIKEDSHIELD_MORGANA@1",
        "humanName": "Grandmaster'sFacebreaker"
    },
    "1634": {
        "botName": "T7_OFF_SPIKEDSHIELD_MORGANA@2",
        "humanName": "Grandmaster'sFacebreaker"
    },
    "1635": {
        "botName": "T7_OFF_SPIKEDSHIELD_MORGANA@3",
        "humanName": "Grandmaster'sFacebreaker"
    },
    "1636": {
        "botName": "T8_OFF_SPIKEDSHIELD_MORGANA",
        "humanName": "Elder'sFacebreaker"
    },
    "1637": {
        "botName": "T8_OFF_SPIKEDSHIELD_MORGANA@1",
        "humanName": "Elder'sFacebreaker"
    },
    "1638": {
        "botName": "T8_OFF_SPIKEDSHIELD_MORGANA@2",
        "humanName": "Elder'sFacebreaker"
    },
    "1639": {
        "botName": "T8_OFF_SPIKEDSHIELD_MORGANA@3",
        "humanName": "Elder'sFacebreaker"
    },
    "1640": {
        "botName": "T4_OFF_SHIELD_AVALON",
        "humanName": "Adept'sAstralAegis"
    },
    "1641": {
        "botName": "T4_OFF_SHIELD_AVALON@1",
        "humanName": "Adept'sAstralAegis"
    },
    "1642": {
        "botName": "T4_OFF_SHIELD_AVALON@2",
        "humanName": "Adept'sAstralAegis"
    },
    "1643": {
        "botName": "T4_OFF_SHIELD_AVALON@3",
        "humanName": "Adept'sAstralAegis"
    },
    "1644": {
        "botName": "T5_OFF_SHIELD_AVALON",
        "humanName": "Expert'sAstralAegis"
    },
    "1645": {
        "botName": "T5_OFF_SHIELD_AVALON@1",
        "humanName": "Expert'sAstralAegis"
    },
    "1646": {
        "botName": "T5_OFF_SHIELD_AVALON@2",
        "humanName": "Expert'sAstralAegis"
    },
    "1647": {
        "botName": "T5_OFF_SHIELD_AVALON@3",
        "humanName": "Expert'sAstralAegis"
    },
    "1648": {
        "botName": "T6_OFF_SHIELD_AVALON",
        "humanName": "Master'sAstralAegis"
    },
    "1649": {
        "botName": "T6_OFF_SHIELD_AVALON@1",
        "humanName": "Master'sAstralAegis"
    },
    "1650": {
        "botName": "T6_OFF_SHIELD_AVALON@2",
        "humanName": "Master'sAstralAegis"
    },
    "1651": {
        "botName": "T6_OFF_SHIELD_AVALON@3",
        "humanName": "Master'sAstralAegis"
    },
    "1652": {
        "botName": "T7_OFF_SHIELD_AVALON",
        "humanName": "Grandmaster'sAstralAegis"
    },
    "1653": {
        "botName": "T7_OFF_SHIELD_AVALON@1",
        "humanName": "Grandmaster'sAstralAegis"
    },
    "1654": {
        "botName": "T7_OFF_SHIELD_AVALON@2",
        "humanName": "Grandmaster'sAstralAegis"
    },
    "1655": {
        "botName": "T7_OFF_SHIELD_AVALON@3",
        "humanName": "Grandmaster'sAstralAegis"
    },
    "1656": {
        "botName": "T8_OFF_SHIELD_AVALON",
        "humanName": "Elder'sAstralAegis"
    },
    "1657": {
        "botName": "T8_OFF_SHIELD_AVALON@1",
        "humanName": "Elder'sAstralAegis"
    },
    "1658": {
        "botName": "T8_OFF_SHIELD_AVALON@2",
        "humanName": "Elder'sAstralAegis"
    },
    "1659": {
        "botName": "T8_OFF_SHIELD_AVALON@3",
        "humanName": "Elder'sAstralAegis"
    },
    "1660": {
        "botName": "T2_OFF_BOOK",
        "humanName": "Novice'sTomeofSpells"
    },
    "1661": {
        "botName": "T3_OFF_BOOK",
        "humanName": "Journeyman'sTomeofSpells"
    },
    "1662": {
        "botName": "T4_OFF_BOOK",
        "humanName": "Adept'sTomeofSpells"
    },
    "1663": {
        "botName": "T4_OFF_BOOK@1",
        "humanName": "Adept'sTomeofSpells"
    },
    "1664": {
        "botName": "T4_OFF_BOOK@2",
        "humanName": "Adept'sTomeofSpells"
    },
    "1665": {
        "botName": "T4_OFF_BOOK@3",
        "humanName": "Adept'sTomeofSpells"
    },
    "1666": {
        "botName": "T5_OFF_BOOK",
        "humanName": "Expert'sTomeofSpells"
    },
    "1667": {
        "botName": "T5_OFF_BOOK@1",
        "humanName": "Expert'sTomeofSpells"
    },
    "1668": {
        "botName": "T5_OFF_BOOK@2",
        "humanName": "Expert'sTomeofSpells"
    },
    "1669": {
        "botName": "T5_OFF_BOOK@3",
        "humanName": "Expert'sTomeofSpells"
    },
    "1670": {
        "botName": "T6_OFF_BOOK",
        "humanName": "Master'sTomeofSpells"
    },
    "1671": {
        "botName": "T6_OFF_BOOK@1",
        "humanName": "Master'sTomeofSpells"
    },
    "1672": {
        "botName": "T6_OFF_BOOK@2",
        "humanName": "Master'sTomeofSpells"
    },
    "1673": {
        "botName": "T6_OFF_BOOK@3",
        "humanName": "Master'sTomeofSpells"
    },
    "1674": {
        "botName": "T7_OFF_BOOK",
        "humanName": "Grandmaster'sTomeofSpells"
    },
    "1675": {
        "botName": "T7_OFF_BOOK@1",
        "humanName": "Grandmaster'sTomeofSpells"
    },
    "1676": {
        "botName": "T7_OFF_BOOK@2",
        "humanName": "Grandmaster'sTomeofSpells"
    },
    "1677": {
        "botName": "T7_OFF_BOOK@3",
        "humanName": "Grandmaster'sTomeofSpells"
    },
    "1678": {
        "botName": "T8_OFF_BOOK",
        "humanName": "Rosalia'sDiary"
    },
    "1679": {
        "botName": "T8_OFF_BOOK@1",
        "humanName": "Rosalia'sDiary"
    },
    "1680": {
        "botName": "T8_OFF_BOOK@2",
        "humanName": "Rosalia'sDiary"
    },
    "1681": {
        "botName": "T8_OFF_BOOK@3",
        "humanName": "Rosalia'sDiary"
    },
    "1682": {
        "botName": "T4_OFF_ORB_MORGANA",
        "humanName": "Adept'sEyeofSecrets"
    },
    "1683": {
        "botName": "T4_OFF_ORB_MORGANA@1",
        "humanName": "Adept'sEyeofSecrets"
    },
    "1684": {
        "botName": "T4_OFF_ORB_MORGANA@2",
        "humanName": "Adept'sEyeofSecrets"
    },
    "1685": {
        "botName": "T4_OFF_ORB_MORGANA@3",
        "humanName": "Adept'sEyeofSecrets"
    },
    "1686": {
        "botName": "T5_OFF_ORB_MORGANA",
        "humanName": "Expert'sEyeofSecrets"
    },
    "1687": {
        "botName": "T5_OFF_ORB_MORGANA@1",
        "humanName": "Expert'sEyeofSecrets"
    },
    "1688": {
        "botName": "T5_OFF_ORB_MORGANA@2",
        "humanName": "Expert'sEyeofSecrets"
    },
    "1689": {
        "botName": "T5_OFF_ORB_MORGANA@3",
        "humanName": "Expert'sEyeofSecrets"
    },
    "1690": {
        "botName": "T6_OFF_ORB_MORGANA",
        "humanName": "Master'sEyeofSecrets"
    },
    "1691": {
        "botName": "T6_OFF_ORB_MORGANA@1",
        "humanName": "Master'sEyeofSecrets"
    },
    "1692": {
        "botName": "T6_OFF_ORB_MORGANA@2",
        "humanName": "Master'sEyeofSecrets"
    },
    "1693": {
        "botName": "T6_OFF_ORB_MORGANA@3",
        "humanName": "Master'sEyeofSecrets"
    },
    "1694": {
        "botName": "T7_OFF_ORB_MORGANA",
        "humanName": "Grandmaster'sEyeofSecrets"
    },
    "1695": {
        "botName": "T7_OFF_ORB_MORGANA@1",
        "humanName": "Grandmaster'sEyeofSecrets"
    },
    "1696": {
        "botName": "T7_OFF_ORB_MORGANA@2",
        "humanName": "Grandmaster'sEyeofSecrets"
    },
    "1697": {
        "botName": "T7_OFF_ORB_MORGANA@3",
        "humanName": "Grandmaster'sEyeofSecrets"
    },
    "1698": {
        "botName": "T8_OFF_ORB_MORGANA",
        "humanName": "Elder'sEyeofSecrets"
    },
    "1699": {
        "botName": "T8_OFF_ORB_MORGANA@1",
        "humanName": "Elder'sEyeofSecrets"
    },
    "1700": {
        "botName": "T8_OFF_ORB_MORGANA@2",
        "humanName": "Elder'sEyeofSecrets"
    },
    "1701": {
        "botName": "T8_OFF_ORB_MORGANA@3",
        "humanName": "Elder'sEyeofSecrets"
    },
    "1702": {
        "botName": "T4_OFF_DEMONSKULL_HELL",
        "humanName": "Adept'sMuisak"
    },
    "1703": {
        "botName": "T4_OFF_DEMONSKULL_HELL@1",
        "humanName": "Adept'sMuisak"
    },
    "1704": {
        "botName": "T4_OFF_DEMONSKULL_HELL@2",
        "humanName": "Adept'sMuisak"
    },
    "1705": {
        "botName": "T4_OFF_DEMONSKULL_HELL@3",
        "humanName": "Adept'sMuisak"
    },
    "1706": {
        "botName": "T5_OFF_DEMONSKULL_HELL",
        "humanName": "Expert'sMuisak"
    },
    "1707": {
        "botName": "T5_OFF_DEMONSKULL_HELL@1",
        "humanName": "Expert'sMuisak"
    },
    "1708": {
        "botName": "T5_OFF_DEMONSKULL_HELL@2",
        "humanName": "Expert'sMuisak"
    },
    "1709": {
        "botName": "T5_OFF_DEMONSKULL_HELL@3",
        "humanName": "Expert'sMuisak"
    },
    "1710": {
        "botName": "T6_OFF_DEMONSKULL_HELL",
        "humanName": "Master'sMuisak"
    },
    "1711": {
        "botName": "T6_OFF_DEMONSKULL_HELL@1",
        "humanName": "Master'sMuisak"
    },
    "1712": {
        "botName": "T6_OFF_DEMONSKULL_HELL@2",
        "humanName": "Master'sMuisak"
    },
    "1713": {
        "botName": "T6_OFF_DEMONSKULL_HELL@3",
        "humanName": "Master'sMuisak"
    },
    "1714": {
        "botName": "T7_OFF_DEMONSKULL_HELL",
        "humanName": "Grandmaster'sMuisak"
    },
    "1715": {
        "botName": "T7_OFF_DEMONSKULL_HELL@1",
        "humanName": "Grandmaster'sMuisak"
    },
    "1716": {
        "botName": "T7_OFF_DEMONSKULL_HELL@2",
        "humanName": "Grandmaster'sMuisak"
    },
    "1717": {
        "botName": "T7_OFF_DEMONSKULL_HELL@3",
        "humanName": "Grandmaster'sMuisak"
    },
    "1718": {
        "botName": "T8_OFF_DEMONSKULL_HELL",
        "humanName": "Elder'sMuisak"
    },
    "1719": {
        "botName": "T8_OFF_DEMONSKULL_HELL@1",
        "humanName": "Elder'sMuisak"
    },
    "1720": {
        "botName": "T8_OFF_DEMONSKULL_HELL@2",
        "humanName": "Elder'sMuisak"
    },
    "1721": {
        "botName": "T8_OFF_DEMONSKULL_HELL@3",
        "humanName": "Elder'sMuisak"
    },
    "1722": {
        "botName": "T4_OFF_TOTEM_KEEPER",
        "humanName": "Adept'sTaproot"
    },
    "1723": {
        "botName": "T4_OFF_TOTEM_KEEPER@1",
        "humanName": "Adept'sTaproot"
    },
    "1724": {
        "botName": "T4_OFF_TOTEM_KEEPER@2",
        "humanName": "Adept'sTaproot"
    },
    "1725": {
        "botName": "T4_OFF_TOTEM_KEEPER@3",
        "humanName": "Adept'sTaproot"
    },
    "1726": {
        "botName": "T5_OFF_TOTEM_KEEPER",
        "humanName": "Expert'sTaproot"
    },
    "1727": {
        "botName": "T5_OFF_TOTEM_KEEPER@1",
        "humanName": "Expert'sTaproot"
    },
    "1728": {
        "botName": "T5_OFF_TOTEM_KEEPER@2",
        "humanName": "Expert'sTaproot"
    },
    "1729": {
        "botName": "T5_OFF_TOTEM_KEEPER@3",
        "humanName": "Expert'sTaproot"
    },
    "1730": {
        "botName": "T6_OFF_TOTEM_KEEPER",
        "humanName": "Master'sTaproot"
    },
    "1731": {
        "botName": "T6_OFF_TOTEM_KEEPER@1",
        "humanName": "Master'sTaproot"
    },
    "1732": {
        "botName": "T6_OFF_TOTEM_KEEPER@2",
        "humanName": "Master'sTaproot"
    },
    "1733": {
        "botName": "T6_OFF_TOTEM_KEEPER@3",
        "humanName": "Master'sTaproot"
    },
    "1734": {
        "botName": "T7_OFF_TOTEM_KEEPER",
        "humanName": "Grandmaster'sTaproot"
    },
    "1735": {
        "botName": "T7_OFF_TOTEM_KEEPER@1",
        "humanName": "Grandmaster'sTaproot"
    },
    "1736": {
        "botName": "T7_OFF_TOTEM_KEEPER@2",
        "humanName": "Grandmaster'sTaproot"
    },
    "1737": {
        "botName": "T7_OFF_TOTEM_KEEPER@3",
        "humanName": "Grandmaster'sTaproot"
    },
    "1738": {
        "botName": "T8_OFF_TOTEM_KEEPER",
        "humanName": "Elder'sTaproot"
    },
    "1739": {
        "botName": "T8_OFF_TOTEM_KEEPER@1",
        "humanName": "Elder'sTaproot"
    },
    "1740": {
        "botName": "T8_OFF_TOTEM_KEEPER@2",
        "humanName": "Elder'sTaproot"
    },
    "1741": {
        "botName": "T8_OFF_TOTEM_KEEPER@3",
        "humanName": "Elder'sTaproot"
    },
    "1742": {
        "botName": "T4_OFF_CENSER_AVALON",
        "humanName": "Adept'sCelestialCenser"
    },
    "1743": {
        "botName": "T4_OFF_CENSER_AVALON@1",
        "humanName": "Adept'sCelestialCenser"
    },
    "1744": {
        "botName": "T4_OFF_CENSER_AVALON@2",
        "humanName": "Adept'sCelestialCenser"
    },
    "1745": {
        "botName": "T4_OFF_CENSER_AVALON@3",
        "humanName": "Adept'sCelestialCenser"
    },
    "1746": {
        "botName": "T5_OFF_CENSER_AVALON",
        "humanName": "Expert'sCelestialCenser"
    },
    "1747": {
        "botName": "T5_OFF_CENSER_AVALON@1",
        "humanName": "Expert'sCelestialCenser"
    },
    "1748": {
        "botName": "T5_OFF_CENSER_AVALON@2",
        "humanName": "Expert'sCelestialCenser"
    },
    "1749": {
        "botName": "T5_OFF_CENSER_AVALON@3",
        "humanName": "Expert'sCelestialCenser"
    },
    "1750": {
        "botName": "T6_OFF_CENSER_AVALON",
        "humanName": "Master'sCelestialCenser"
    },
    "1751": {
        "botName": "T6_OFF_CENSER_AVALON@1",
        "humanName": "Master'sCelestialCenser"
    },
    "1752": {
        "botName": "T6_OFF_CENSER_AVALON@2",
        "humanName": "Master'sCelestialCenser"
    },
    "1753": {
        "botName": "T6_OFF_CENSER_AVALON@3",
        "humanName": "Master'sCelestialCenser"
    },
    "1754": {
        "botName": "T7_OFF_CENSER_AVALON",
        "humanName": "Grandmaster'sCelestialCenser"
    },
    "1755": {
        "botName": "T7_OFF_CENSER_AVALON@1",
        "humanName": "Grandmaster'sCelestialCenser"
    },
    "1756": {
        "botName": "T7_OFF_CENSER_AVALON@2",
        "humanName": "Grandmaster'sCelestialCenser"
    },
    "1757": {
        "botName": "T7_OFF_CENSER_AVALON@3",
        "humanName": "Grandmaster'sCelestialCenser"
    },
    "1758": {
        "botName": "T8_OFF_CENSER_AVALON",
        "humanName": "Elder'sCelestialCenser"
    },
    "1759": {
        "botName": "T8_OFF_CENSER_AVALON@1",
        "humanName": "Elder'sCelestialCenser"
    },
    "1760": {
        "botName": "T8_OFF_CENSER_AVALON@2",
        "humanName": "Elder'sCelestialCenser"
    },
    "1761": {
        "botName": "T8_OFF_CENSER_AVALON@3",
        "humanName": "Elder'sCelestialCenser"
    },
    "1762": {
        "botName": "T3_OFF_TORCH",
        "humanName": "Journeyman'sTorch"
    },
    "1763": {
        "botName": "T4_OFF_TORCH",
        "humanName": "Adept'sTorch"
    },
    "1764": {
        "botName": "T4_OFF_TORCH@1",
        "humanName": "Adept'sTorch"
    },
    "1765": {
        "botName": "T4_OFF_TORCH@2",
        "humanName": "Adept'sTorch"
    },
    "1766": {
        "botName": "T4_OFF_TORCH@3",
        "humanName": "Adept'sTorch"
    },
    "1767": {
        "botName": "T5_OFF_TORCH",
        "humanName": "Expert'sTorch"
    },
    "1768": {
        "botName": "T5_OFF_TORCH@1",
        "humanName": "Expert'sTorch"
    },
    "1769": {
        "botName": "T5_OFF_TORCH@2",
        "humanName": "Expert'sTorch"
    },
    "1770": {
        "botName": "T5_OFF_TORCH@3",
        "humanName": "Expert'sTorch"
    },
    "1771": {
        "botName": "T6_OFF_TORCH",
        "humanName": "Master'sTorch"
    },
    "1772": {
        "botName": "T6_OFF_TORCH@1",
        "humanName": "Master'sTorch"
    },
    "1773": {
        "botName": "T6_OFF_TORCH@2",
        "humanName": "Master'sTorch"
    },
    "1774": {
        "botName": "T6_OFF_TORCH@3",
        "humanName": "Master'sTorch"
    },
    "1775": {
        "botName": "T7_OFF_TORCH",
        "humanName": "Grandmaster'sTorch"
    },
    "1776": {
        "botName": "T7_OFF_TORCH@1",
        "humanName": "Grandmaster'sTorch"
    },
    "1777": {
        "botName": "T7_OFF_TORCH@2",
        "humanName": "Grandmaster'sTorch"
    },
    "1778": {
        "botName": "T7_OFF_TORCH@3",
        "humanName": "Grandmaster'sTorch"
    },
    "1779": {
        "botName": "T8_OFF_TORCH",
        "humanName": "Elder'sTorch"
    },
    "1780": {
        "botName": "T8_OFF_TORCH@1",
        "humanName": "Elder'sTorch"
    },
    "1781": {
        "botName": "T8_OFF_TORCH@2",
        "humanName": "Elder'sTorch"
    },
    "1782": {
        "botName": "T8_OFF_TORCH@3",
        "humanName": "Elder'sTorch"
    },
    "1783": {
        "botName": "T4_OFF_HORN_KEEPER",
        "humanName": "Adept'sMistcaller"
    },
    "1784": {
        "botName": "T4_OFF_HORN_KEEPER@1",
        "humanName": "Adept'sMistcaller"
    },
    "1785": {
        "botName": "T4_OFF_HORN_KEEPER@2",
        "humanName": "Adept'sMistcaller"
    },
    "1786": {
        "botName": "T4_OFF_HORN_KEEPER@3",
        "humanName": "Adept'sMistcaller"
    },
    "1787": {
        "botName": "T5_OFF_HORN_KEEPER",
        "humanName": "Expert'sMistcaller"
    },
    "1788": {
        "botName": "T5_OFF_HORN_KEEPER@1",
        "humanName": "Expert'sMistcaller"
    },
    "1789": {
        "botName": "T5_OFF_HORN_KEEPER@2",
        "humanName": "Expert'sMistcaller"
    },
    "1790": {
        "botName": "T5_OFF_HORN_KEEPER@3",
        "humanName": "Expert'sMistcaller"
    },
    "1791": {
        "botName": "T6_OFF_HORN_KEEPER",
        "humanName": "Master'sMistcaller"
    },
    "1792": {
        "botName": "T6_OFF_HORN_KEEPER@1",
        "humanName": "Master'sMistcaller"
    },
    "1793": {
        "botName": "T6_OFF_HORN_KEEPER@2",
        "humanName": "Master'sMistcaller"
    },
    "1794": {
        "botName": "T6_OFF_HORN_KEEPER@3",
        "humanName": "Master'sMistcaller"
    },
    "1795": {
        "botName": "T7_OFF_HORN_KEEPER",
        "humanName": "Grandmaster'sMistcaller"
    },
    "1796": {
        "botName": "T7_OFF_HORN_KEEPER@1",
        "humanName": "Grandmaster'sMistcaller"
    },
    "1797": {
        "botName": "T7_OFF_HORN_KEEPER@2",
        "humanName": "Grandmaster'sMistcaller"
    },
    "1798": {
        "botName": "T7_OFF_HORN_KEEPER@3",
        "humanName": "Grandmaster'sMistcaller"
    },
    "1799": {
        "botName": "T8_OFF_HORN_KEEPER",
        "humanName": "Elder'sMistcaller"
    },
    "1800": {
        "botName": "T8_OFF_HORN_KEEPER@1",
        "humanName": "Elder'sMistcaller"
    },
    "1801": {
        "botName": "T8_OFF_HORN_KEEPER@2",
        "humanName": "Elder'sMistcaller"
    },
    "1802": {
        "botName": "T8_OFF_HORN_KEEPER@3",
        "humanName": "Elder'sMistcaller"
    },
    "1803": {
        "botName": "T4_OFF_TALISMAN_AVALON",
        "humanName": "Adept'sSacredScepter"
    },
    "1804": {
        "botName": "T4_OFF_TALISMAN_AVALON@1",
        "humanName": "Adept'sSacredScepter"
    },
    "1805": {
        "botName": "T4_OFF_TALISMAN_AVALON@2",
        "humanName": "Adept'sSacredScepter"
    },
    "1806": {
        "botName": "T4_OFF_TALISMAN_AVALON@3",
        "humanName": "Adept'sSacredScepter"
    },
    "1807": {
        "botName": "T5_OFF_TALISMAN_AVALON",
        "humanName": "Expert'sSacredScepter"
    },
    "1808": {
        "botName": "T5_OFF_TALISMAN_AVALON@1",
        "humanName": "Expert'sSacredScepter"
    },
    "1809": {
        "botName": "T5_OFF_TALISMAN_AVALON@2",
        "humanName": "Expert'sSacredScepter"
    },
    "1810": {
        "botName": "T5_OFF_TALISMAN_AVALON@3",
        "humanName": "Expert'sSacredScepter"
    },
    "1811": {
        "botName": "T6_OFF_TALISMAN_AVALON",
        "humanName": "Master'sSacredScepter"
    },
    "1812": {
        "botName": "T6_OFF_TALISMAN_AVALON@1",
        "humanName": "Master'sSacredScepter"
    },
    "1813": {
        "botName": "T6_OFF_TALISMAN_AVALON@2",
        "humanName": "Master'sSacredScepter"
    },
    "1814": {
        "botName": "T6_OFF_TALISMAN_AVALON@3",
        "humanName": "Master'sSacredScepter"
    },
    "1815": {
        "botName": "T7_OFF_TALISMAN_AVALON",
        "humanName": "Grandmaster'sSacredScepter"
    },
    "1816": {
        "botName": "T7_OFF_TALISMAN_AVALON@1",
        "humanName": "Grandmaster'sSacredScepter"
    },
    "1817": {
        "botName": "T7_OFF_TALISMAN_AVALON@2",
        "humanName": "Grandmaster'sSacredScepter"
    },
    "1818": {
        "botName": "T7_OFF_TALISMAN_AVALON@3",
        "humanName": "Grandmaster'sSacredScepter"
    },
    "1819": {
        "botName": "T8_OFF_TALISMAN_AVALON",
        "humanName": "Elder'sSacredScepter"
    },
    "1820": {
        "botName": "T8_OFF_TALISMAN_AVALON@1",
        "humanName": "Elder'sSacredScepter"
    },
    "1821": {
        "botName": "T8_OFF_TALISMAN_AVALON@2",
        "humanName": "Elder'sSacredScepter"
    },
    "1822": {
        "botName": "T8_OFF_TALISMAN_AVALON@3",
        "humanName": "Elder'sSacredScepter"
    },
    "1823": {
        "botName": "T4_OFF_LAMP_UNDEAD",
        "humanName": "Adept'sCryptcandle"
    },
    "1824": {
        "botName": "T4_OFF_LAMP_UNDEAD@1",
        "humanName": "Adept'sCryptcandle"
    },
    "1825": {
        "botName": "T4_OFF_LAMP_UNDEAD@2",
        "humanName": "Adept'sCryptcandle"
    },
    "1826": {
        "botName": "T4_OFF_LAMP_UNDEAD@3",
        "humanName": "Adept'sCryptcandle"
    },
    "1827": {
        "botName": "T5_OFF_LAMP_UNDEAD",
        "humanName": "Expert'sCryptcandle"
    },
    "1828": {
        "botName": "T5_OFF_LAMP_UNDEAD@1",
        "humanName": "Expert'sCryptcandle"
    },
    "1829": {
        "botName": "T5_OFF_LAMP_UNDEAD@2",
        "humanName": "Expert'sCryptcandle"
    },
    "1830": {
        "botName": "T5_OFF_LAMP_UNDEAD@3",
        "humanName": "Expert'sCryptcandle"
    },
    "1831": {
        "botName": "T6_OFF_LAMP_UNDEAD",
        "humanName": "Master'sCryptcandle"
    },
    "1832": {
        "botName": "T6_OFF_LAMP_UNDEAD@1",
        "humanName": "Master'sCryptcandle"
    },
    "1833": {
        "botName": "T6_OFF_LAMP_UNDEAD@2",
        "humanName": "Master'sCryptcandle"
    },
    "1834": {
        "botName": "T6_OFF_LAMP_UNDEAD@3",
        "humanName": "Master'sCryptcandle"
    },
    "1835": {
        "botName": "T7_OFF_LAMP_UNDEAD",
        "humanName": "Grandmaster'sCryptcandle"
    },
    "1836": {
        "botName": "T7_OFF_LAMP_UNDEAD@1",
        "humanName": "Grandmaster'sCryptcandle"
    },
    "1837": {
        "botName": "T7_OFF_LAMP_UNDEAD@2",
        "humanName": "Grandmaster'sCryptcandle"
    },
    "1838": {
        "botName": "T7_OFF_LAMP_UNDEAD@3",
        "humanName": "Grandmaster'sCryptcandle"
    },
    "1839": {
        "botName": "T8_OFF_LAMP_UNDEAD",
        "humanName": "Elder'sCryptcandle"
    },
    "1840": {
        "botName": "T8_OFF_LAMP_UNDEAD@1",
        "humanName": "Elder'sCryptcandle"
    },
    "1841": {
        "botName": "T8_OFF_LAMP_UNDEAD@2",
        "humanName": "Elder'sCryptcandle"
    },
    "1842": {
        "botName": "T8_OFF_LAMP_UNDEAD@3",
        "humanName": "Elder'sCryptcandle"
    },
    "1843": {
        "botName": "T4_OFF_JESTERCANE_HELL",
        "humanName": "Adept'sLeeringCane"
    },
    "1844": {
        "botName": "T4_OFF_JESTERCANE_HELL@1",
        "humanName": "Adept'sLeeringCane"
    },
    "1845": {
        "botName": "T4_OFF_JESTERCANE_HELL@2",
        "humanName": "Adept'sLeeringCane"
    },
    "1846": {
        "botName": "T4_OFF_JESTERCANE_HELL@3",
        "humanName": "Adept'sLeeringCane"
    },
    "1847": {
        "botName": "T5_OFF_JESTERCANE_HELL",
        "humanName": "Expert'sLeeringCane"
    },
    "1848": {
        "botName": "T5_OFF_JESTERCANE_HELL@1",
        "humanName": "Expert'sLeeringCane"
    },
    "1849": {
        "botName": "T5_OFF_JESTERCANE_HELL@2",
        "humanName": "Expert'sLeeringCane"
    },
    "1850": {
        "botName": "T5_OFF_JESTERCANE_HELL@3",
        "humanName": "Expert'sLeeringCane"
    },
    "1851": {
        "botName": "T6_OFF_JESTERCANE_HELL",
        "humanName": "Master'sLeeringCane"
    },
    "1852": {
        "botName": "T6_OFF_JESTERCANE_HELL@1",
        "humanName": "Master'sLeeringCane"
    },
    "1853": {
        "botName": "T6_OFF_JESTERCANE_HELL@2",
        "humanName": "Master'sLeeringCane"
    },
    "1854": {
        "botName": "T6_OFF_JESTERCANE_HELL@3",
        "humanName": "Master'sLeeringCane"
    },
    "1855": {
        "botName": "T7_OFF_JESTERCANE_HELL",
        "humanName": "Grandmaster'sLeeringCane"
    },
    "1856": {
        "botName": "T7_OFF_JESTERCANE_HELL@1",
        "humanName": "Grandmaster'sLeeringCane"
    },
    "1857": {
        "botName": "T7_OFF_JESTERCANE_HELL@2",
        "humanName": "Grandmaster'sLeeringCane"
    },
    "1858": {
        "botName": "T7_OFF_JESTERCANE_HELL@3",
        "humanName": "Grandmaster'sLeeringCane"
    },
    "1859": {
        "botName": "T8_OFF_JESTERCANE_HELL",
        "humanName": "Elder'sLeeringCane"
    },
    "1860": {
        "botName": "T8_OFF_JESTERCANE_HELL@1",
        "humanName": "Elder'sLeeringCane"
    },
    "1861": {
        "botName": "T8_OFF_JESTERCANE_HELL@2",
        "humanName": "Elder'sLeeringCane"
    },
    "1862": {
        "botName": "T8_OFF_JESTERCANE_HELL@3",
        "humanName": "Elder'sLeeringCane"
    },
    "1863": {
        "botName": "T2_CAPE",
        "humanName": "Novice'sCape"
    },
    "1864": {
        "botName": "T3_CAPE",
        "humanName": "Journeyman'sCape"
    },
    "1865": {
        "botName": "T4_CAPE",
        "humanName": "Adept'sCape"
    },
    "1866": {
        "botName": "T4_CAPE@1",
        "humanName": "Adept'sCape"
    },
    "1867": {
        "botName": "T4_CAPE@2",
        "humanName": "Adept'sCape"
    },
    "1868": {
        "botName": "T4_CAPE@3",
        "humanName": "Adept'sCape"
    },
    "1869": {
        "botName": "T5_CAPE",
        "humanName": "Expert'sCape"
    },
    "1870": {
        "botName": "T5_CAPE@1",
        "humanName": "Expert'sCape"
    },
    "1871": {
        "botName": "T5_CAPE@2",
        "humanName": "Expert'sCape"
    },
    "1872": {
        "botName": "T5_CAPE@3",
        "humanName": "Expert'sCape"
    },
    "1873": {
        "botName": "T6_CAPE",
        "humanName": "Master'sCape"
    },
    "1874": {
        "botName": "T6_CAPE@1",
        "humanName": "Master'sCape"
    },
    "1875": {
        "botName": "T6_CAPE@2",
        "humanName": "Master'sCape"
    },
    "1876": {
        "botName": "T6_CAPE@3",
        "humanName": "Master'sCape"
    },
    "1877": {
        "botName": "T7_CAPE",
        "humanName": "Grandmaster'sCape"
    },
    "1878": {
        "botName": "T7_CAPE@1",
        "humanName": "Grandmaster'sCape"
    },
    "1879": {
        "botName": "T7_CAPE@2",
        "humanName": "Grandmaster'sCape"
    },
    "1880": {
        "botName": "T7_CAPE@3",
        "humanName": "Grandmaster'sCape"
    },
    "1881": {
        "botName": "T8_CAPE",
        "humanName": "Elder'sCape"
    },
    "1882": {
        "botName": "T8_CAPE@1",
        "humanName": "Elder'sCape"
    },
    "1883": {
        "botName": "T8_CAPE@2",
        "humanName": "Elder'sCape"
    },
    "1884": {
        "botName": "T8_CAPE@3",
        "humanName": "Elder'sCape"
    },
    "1885": {
        "botName": "T4_CAPEITEM_FW_BRIDGEWATCH",
        "humanName": "Adept'sBridgewatchCape"
    },
    "1886": {
        "botName": "T4_CAPEITEM_FW_BRIDGEWATCH@1",
        "humanName": "Adept'sBridgewatchCape"
    },
    "1887": {
        "botName": "T4_CAPEITEM_FW_BRIDGEWATCH@2",
        "humanName": "Adept'sBridgewatchCape"
    },
    "1888": {
        "botName": "T4_CAPEITEM_FW_BRIDGEWATCH@3",
        "humanName": "Adept'sBridgewatchCape"
    },
    "1889": {
        "botName": "T5_CAPEITEM_FW_BRIDGEWATCH",
        "humanName": "Expert'sBridgewatchCape"
    },
    "1890": {
        "botName": "T5_CAPEITEM_FW_BRIDGEWATCH@1",
        "humanName": "Expert'sBridgewatchCape"
    },
    "1891": {
        "botName": "T5_CAPEITEM_FW_BRIDGEWATCH@2",
        "humanName": "Expert'sBridgewatchCape"
    },
    "1892": {
        "botName": "T5_CAPEITEM_FW_BRIDGEWATCH@3",
        "humanName": "Expert'sBridgewatchCape"
    },
    "1893": {
        "botName": "T6_CAPEITEM_FW_BRIDGEWATCH",
        "humanName": "Master'sBridgewatchCape"
    },
    "1894": {
        "botName": "T6_CAPEITEM_FW_BRIDGEWATCH@1",
        "humanName": "Master'sBridgewatchCape"
    },
    "1895": {
        "botName": "T6_CAPEITEM_FW_BRIDGEWATCH@2",
        "humanName": "Master'sBridgewatchCape"
    },
    "1896": {
        "botName": "T6_CAPEITEM_FW_BRIDGEWATCH@3",
        "humanName": "Master'sBridgewatchCape"
    },
    "1897": {
        "botName": "T7_CAPEITEM_FW_BRIDGEWATCH",
        "humanName": "Grandmaster'sBridgewatchCape"
    },
    "1898": {
        "botName": "T7_CAPEITEM_FW_BRIDGEWATCH@1",
        "humanName": "Grandmaster'sBridgewatchCape"
    },
    "1899": {
        "botName": "T7_CAPEITEM_FW_BRIDGEWATCH@2",
        "humanName": "Grandmaster'sBridgewatchCape"
    },
    "1900": {
        "botName": "T7_CAPEITEM_FW_BRIDGEWATCH@3",
        "humanName": "Grandmaster'sBridgewatchCape"
    },
    "1901": {
        "botName": "T8_CAPEITEM_FW_BRIDGEWATCH",
        "humanName": "Elder'sBridgewatchCape"
    },
    "1902": {
        "botName": "T8_CAPEITEM_FW_BRIDGEWATCH@1",
        "humanName": "Elder'sBridgewatchCape"
    },
    "1903": {
        "botName": "T8_CAPEITEM_FW_BRIDGEWATCH@2",
        "humanName": "Elder'sBridgewatchCape"
    },
    "1904": {
        "botName": "T8_CAPEITEM_FW_BRIDGEWATCH@3",
        "humanName": "Elder'sBridgewatchCape"
    },
    "1905": {
        "botName": "T4_CAPEITEM_FW_FORTSTERLING",
        "humanName": "Adept'sFortSterlingCape"
    },
    "1906": {
        "botName": "T4_CAPEITEM_FW_FORTSTERLING@1",
        "humanName": "Adept'sFortSterlingCape"
    },
    "1907": {
        "botName": "T4_CAPEITEM_FW_FORTSTERLING@2",
        "humanName": "Adept'sFortSterlingCape"
    },
    "1908": {
        "botName": "T4_CAPEITEM_FW_FORTSTERLING@3",
        "humanName": "Adept'sFortSterlingCape"
    },
    "1909": {
        "botName": "T5_CAPEITEM_FW_FORTSTERLING",
        "humanName": "Expert'sFortSterlingCape"
    },
    "1910": {
        "botName": "T5_CAPEITEM_FW_FORTSTERLING@1",
        "humanName": "Expert'sFortSterlingCape"
    },
    "1911": {
        "botName": "T5_CAPEITEM_FW_FORTSTERLING@2",
        "humanName": "Expert'sFortSterlingCape"
    },
    "1912": {
        "botName": "T5_CAPEITEM_FW_FORTSTERLING@3",
        "humanName": "Expert'sFortSterlingCape"
    },
    "1913": {
        "botName": "T6_CAPEITEM_FW_FORTSTERLING",
        "humanName": "Master'sFortSterlingCape"
    },
    "1914": {
        "botName": "T6_CAPEITEM_FW_FORTSTERLING@1",
        "humanName": "Master'sFortSterlingCape"
    },
    "1915": {
        "botName": "T6_CAPEITEM_FW_FORTSTERLING@2",
        "humanName": "Master'sFortSterlingCape"
    },
    "1916": {
        "botName": "T6_CAPEITEM_FW_FORTSTERLING@3",
        "humanName": "Master'sFortSterlingCape"
    },
    "1917": {
        "botName": "T7_CAPEITEM_FW_FORTSTERLING",
        "humanName": "Grandmaster'sFortSterlingCape"
    },
    "1918": {
        "botName": "T7_CAPEITEM_FW_FORTSTERLING@1",
        "humanName": "Grandmaster'sFortSterlingCape"
    },
    "1919": {
        "botName": "T7_CAPEITEM_FW_FORTSTERLING@2",
        "humanName": "Grandmaster'sFortSterlingCape"
    },
    "1920": {
        "botName": "T7_CAPEITEM_FW_FORTSTERLING@3",
        "humanName": "Grandmaster'sFortSterlingCape"
    },
    "1921": {
        "botName": "T8_CAPEITEM_FW_FORTSTERLING",
        "humanName": "Elder'sFortSterlingCape"
    },
    "1922": {
        "botName": "T8_CAPEITEM_FW_FORTSTERLING@1",
        "humanName": "Elder'sFortSterlingCape"
    },
    "1923": {
        "botName": "T8_CAPEITEM_FW_FORTSTERLING@2",
        "humanName": "Elder'sFortSterlingCape"
    },
    "1924": {
        "botName": "T8_CAPEITEM_FW_FORTSTERLING@3",
        "humanName": "Elder'sFortSterlingCape"
    },
    "1925": {
        "botName": "T4_CAPEITEM_FW_LYMHURST",
        "humanName": "Adept'sLymhurstCape"
    },
    "1926": {
        "botName": "T4_CAPEITEM_FW_LYMHURST@1",
        "humanName": "Adept'sLymhurstCape"
    },
    "1927": {
        "botName": "T4_CAPEITEM_FW_LYMHURST@2",
        "humanName": "Adept'sLymhurstCape"
    },
    "1928": {
        "botName": "T4_CAPEITEM_FW_LYMHURST@3",
        "humanName": "Adept'sLymhurstCape"
    },
    "1929": {
        "botName": "T5_CAPEITEM_FW_LYMHURST",
        "humanName": "Expert'sLymhurstCape"
    },
    "1930": {
        "botName": "T5_CAPEITEM_FW_LYMHURST@1",
        "humanName": "Expert'sLymhurstCape"
    },
    "1931": {
        "botName": "T5_CAPEITEM_FW_LYMHURST@2",
        "humanName": "Expert'sLymhurstCape"
    },
    "1932": {
        "botName": "T5_CAPEITEM_FW_LYMHURST@3",
        "humanName": "Expert'sLymhurstCape"
    },
    "1933": {
        "botName": "T6_CAPEITEM_FW_LYMHURST",
        "humanName": "Master'sLymhurstCape"
    },
    "1934": {
        "botName": "T6_CAPEITEM_FW_LYMHURST@1",
        "humanName": "Master'sLymhurstCape"
    },
    "1935": {
        "botName": "T6_CAPEITEM_FW_LYMHURST@2",
        "humanName": "Master'sLymhurstCape"
    },
    "1936": {
        "botName": "T6_CAPEITEM_FW_LYMHURST@3",
        "humanName": "Master'sLymhurstCape"
    },
    "1937": {
        "botName": "T7_CAPEITEM_FW_LYMHURST",
        "humanName": "Grandmaster'sLymhurstCape"
    },
    "1938": {
        "botName": "T7_CAPEITEM_FW_LYMHURST@1",
        "humanName": "Grandmaster'sLymhurstCape"
    },
    "1939": {
        "botName": "T7_CAPEITEM_FW_LYMHURST@2",
        "humanName": "Grandmaster'sLymhurstCape"
    },
    "1940": {
        "botName": "T7_CAPEITEM_FW_LYMHURST@3",
        "humanName": "Grandmaster'sLymhurstCape"
    },
    "1941": {
        "botName": "T8_CAPEITEM_FW_LYMHURST",
        "humanName": "Elder'sLymhurstCape"
    },
    "1942": {
        "botName": "T8_CAPEITEM_FW_LYMHURST@1",
        "humanName": "Elder'sLymhurstCape"
    },
    "1943": {
        "botName": "T8_CAPEITEM_FW_LYMHURST@2",
        "humanName": "Elder'sLymhurstCape"
    },
    "1944": {
        "botName": "T8_CAPEITEM_FW_LYMHURST@3",
        "humanName": "Elder'sLymhurstCape"
    },
    "1945": {
        "botName": "T4_CAPEITEM_FW_MARTLOCK",
        "humanName": "Adept'sMartlockCape"
    },
    "1946": {
        "botName": "T4_CAPEITEM_FW_MARTLOCK@1",
        "humanName": "Adept'sMartlockCape"
    },
    "1947": {
        "botName": "T4_CAPEITEM_FW_MARTLOCK@2",
        "humanName": "Adept'sMartlockCape"
    },
    "1948": {
        "botName": "T4_CAPEITEM_FW_MARTLOCK@3",
        "humanName": "Adept'sMartlockCape"
    },
    "1949": {
        "botName": "T5_CAPEITEM_FW_MARTLOCK",
        "humanName": "Expert'sMartlockCape"
    },
    "1950": {
        "botName": "T5_CAPEITEM_FW_MARTLOCK@1",
        "humanName": "Expert'sMartlockCape"
    },
    "1951": {
        "botName": "T5_CAPEITEM_FW_MARTLOCK@2",
        "humanName": "Expert'sMartlockCape"
    },
    "1952": {
        "botName": "T5_CAPEITEM_FW_MARTLOCK@3",
        "humanName": "Expert'sMartlockCape"
    },
    "1953": {
        "botName": "T6_CAPEITEM_FW_MARTLOCK",
        "humanName": "Master'sMartlockCape"
    },
    "1954": {
        "botName": "T6_CAPEITEM_FW_MARTLOCK@1",
        "humanName": "Master'sMartlockCape"
    },
    "1955": {
        "botName": "T6_CAPEITEM_FW_MARTLOCK@2",
        "humanName": "Master'sMartlockCape"
    },
    "1956": {
        "botName": "T6_CAPEITEM_FW_MARTLOCK@3",
        "humanName": "Master'sMartlockCape"
    },
    "1957": {
        "botName": "T7_CAPEITEM_FW_MARTLOCK",
        "humanName": "Grandmaster'sMartlockCape"
    },
    "1958": {
        "botName": "T7_CAPEITEM_FW_MARTLOCK@1",
        "humanName": "Grandmaster'sMartlockCape"
    },
    "1959": {
        "botName": "T7_CAPEITEM_FW_MARTLOCK@2",
        "humanName": "Grandmaster'sMartlockCape"
    },
    "1960": {
        "botName": "T7_CAPEITEM_FW_MARTLOCK@3",
        "humanName": "Grandmaster'sMartlockCape"
    },
    "1961": {
        "botName": "T8_CAPEITEM_FW_MARTLOCK",
        "humanName": "Elder'sMartlockCape"
    },
    "1962": {
        "botName": "T8_CAPEITEM_FW_MARTLOCK@1",
        "humanName": "Elder'sMartlockCape"
    },
    "1963": {
        "botName": "T8_CAPEITEM_FW_MARTLOCK@2",
        "humanName": "Elder'sMartlockCape"
    },
    "1964": {
        "botName": "T8_CAPEITEM_FW_MARTLOCK@3",
        "humanName": "Elder'sMartlockCape"
    },
    "1965": {
        "botName": "T4_CAPEITEM_FW_THETFORD",
        "humanName": "Adept'sThetfordCape"
    },
    "1966": {
        "botName": "T4_CAPEITEM_FW_THETFORD@1",
        "humanName": "Adept'sThetfordCape"
    },
    "1967": {
        "botName": "T4_CAPEITEM_FW_THETFORD@2",
        "humanName": "Adept'sThetfordCape"
    },
    "1968": {
        "botName": "T4_CAPEITEM_FW_THETFORD@3",
        "humanName": "Adept'sThetfordCape"
    },
    "1969": {
        "botName": "T5_CAPEITEM_FW_THETFORD",
        "humanName": "Expert'sThetfordCape"
    },
    "1970": {
        "botName": "T5_CAPEITEM_FW_THETFORD@1",
        "humanName": "Expert'sThetfordCape"
    },
    "1971": {
        "botName": "T5_CAPEITEM_FW_THETFORD@2",
        "humanName": "Expert'sThetfordCape"
    },
    "1972": {
        "botName": "T5_CAPEITEM_FW_THETFORD@3",
        "humanName": "Expert'sThetfordCape"
    },
    "1973": {
        "botName": "T6_CAPEITEM_FW_THETFORD",
        "humanName": "Master'sThetfordCape"
    },
    "1974": {
        "botName": "T6_CAPEITEM_FW_THETFORD@1",
        "humanName": "Master'sThetfordCape"
    },
    "1975": {
        "botName": "T6_CAPEITEM_FW_THETFORD@2",
        "humanName": "Master'sThetfordCape"
    },
    "1976": {
        "botName": "T6_CAPEITEM_FW_THETFORD@3",
        "humanName": "Master'sThetfordCape"
    },
    "1977": {
        "botName": "T7_CAPEITEM_FW_THETFORD",
        "humanName": "Grandmaster'sThetfordCape"
    },
    "1978": {
        "botName": "T7_CAPEITEM_FW_THETFORD@1",
        "humanName": "Grandmaster'sThetfordCape"
    },
    "1979": {
        "botName": "T7_CAPEITEM_FW_THETFORD@2",
        "humanName": "Grandmaster'sThetfordCape"
    },
    "1980": {
        "botName": "T7_CAPEITEM_FW_THETFORD@3",
        "humanName": "Grandmaster'sThetfordCape"
    },
    "1981": {
        "botName": "T8_CAPEITEM_FW_THETFORD",
        "humanName": "Elder'sThetfordCape"
    },
    "1982": {
        "botName": "T8_CAPEITEM_FW_THETFORD@1",
        "humanName": "Elder'sThetfordCape"
    },
    "1983": {
        "botName": "T8_CAPEITEM_FW_THETFORD@2",
        "humanName": "Elder'sThetfordCape"
    },
    "1984": {
        "botName": "T8_CAPEITEM_FW_THETFORD@3",
        "humanName": "Elder'sThetfordCape"
    },
    "1985": {
        "botName": "T4_CAPEITEM_FW_CAERLEON",
        "humanName": "Adept'sCaerleonCape"
    },
    "1986": {
        "botName": "T4_CAPEITEM_FW_CAERLEON@1",
        "humanName": "Adept'sCaerleonCape"
    },
    "1987": {
        "botName": "T4_CAPEITEM_FW_CAERLEON@2",
        "humanName": "Adept'sCaerleonCape"
    },
    "1988": {
        "botName": "T4_CAPEITEM_FW_CAERLEON@3",
        "humanName": "Adept'sCaerleonCape"
    },
    "1989": {
        "botName": "T5_CAPEITEM_FW_CAERLEON",
        "humanName": "Expert'sCaerleonCape"
    },
    "1990": {
        "botName": "T5_CAPEITEM_FW_CAERLEON@1",
        "humanName": "Expert'sCaerleonCape"
    },
    "1991": {
        "botName": "T5_CAPEITEM_FW_CAERLEON@2",
        "humanName": "Expert'sCaerleonCape"
    },
    "1992": {
        "botName": "T5_CAPEITEM_FW_CAERLEON@3",
        "humanName": "Expert'sCaerleonCape"
    },
    "1993": {
        "botName": "T6_CAPEITEM_FW_CAERLEON",
        "humanName": "Master'sCaerleonCape"
    },
    "1994": {
        "botName": "T6_CAPEITEM_FW_CAERLEON@1",
        "humanName": "Master'sCaerleonCape"
    },
    "1995": {
        "botName": "T6_CAPEITEM_FW_CAERLEON@2",
        "humanName": "Master'sCaerleonCape"
    },
    "1996": {
        "botName": "T6_CAPEITEM_FW_CAERLEON@3",
        "humanName": "Master'sCaerleonCape"
    },
    "1997": {
        "botName": "T7_CAPEITEM_FW_CAERLEON",
        "humanName": "Grandmaster'sCaerleonCape"
    },
    "1998": {
        "botName": "T7_CAPEITEM_FW_CAERLEON@1",
        "humanName": "Grandmaster'sCaerleonCape"
    },
    "1999": {
        "botName": "T7_CAPEITEM_FW_CAERLEON@2",
        "humanName": "Grandmaster'sCaerleonCape"
    },
    "2000": {
        "botName": "T7_CAPEITEM_FW_CAERLEON@3",
        "humanName": "Grandmaster'sCaerleonCape"
    },
    "2001": {
        "botName": "T8_CAPEITEM_FW_CAERLEON",
        "humanName": "Elder'sCaerleonCape"
    },
    "2002": {
        "botName": "T8_CAPEITEM_FW_CAERLEON@1",
        "humanName": "Elder'sCaerleonCape"
    },
    "2003": {
        "botName": "T8_CAPEITEM_FW_CAERLEON@2",
        "humanName": "Elder'sCaerleonCape"
    },
    "2004": {
        "botName": "T8_CAPEITEM_FW_CAERLEON@3",
        "humanName": "Elder'sCaerleonCape"
    },
    "2005": {
        "botName": "T4_CAPEITEM_HERETIC",
        "humanName": "Adept'sHereticCape"
    },
    "2006": {
        "botName": "T4_CAPEITEM_HERETIC@1",
        "humanName": "Adept'sHereticCape"
    },
    "2007": {
        "botName": "T4_CAPEITEM_HERETIC@2",
        "humanName": "Adept'sHereticCape"
    },
    "2008": {
        "botName": "T4_CAPEITEM_HERETIC@3",
        "humanName": "Adept'sHereticCape"
    },
    "2009": {
        "botName": "T5_CAPEITEM_HERETIC",
        "humanName": "Expert'sHereticCape"
    },
    "2010": {
        "botName": "T5_CAPEITEM_HERETIC@1",
        "humanName": "Expert'sHereticCape"
    },
    "2011": {
        "botName": "T5_CAPEITEM_HERETIC@2",
        "humanName": "Expert'sHereticCape"
    },
    "2012": {
        "botName": "T5_CAPEITEM_HERETIC@3",
        "humanName": "Expert'sHereticCape"
    },
    "2013": {
        "botName": "T6_CAPEITEM_HERETIC",
        "humanName": "Master'sHereticCape"
    },
    "2014": {
        "botName": "T6_CAPEITEM_HERETIC@1",
        "humanName": "Master'sHereticCape"
    },
    "2015": {
        "botName": "T6_CAPEITEM_HERETIC@2",
        "humanName": "Master'sHereticCape"
    },
    "2016": {
        "botName": "T6_CAPEITEM_HERETIC@3",
        "humanName": "Master'sHereticCape"
    },
    "2017": {
        "botName": "T7_CAPEITEM_HERETIC",
        "humanName": "Grandmaster'sHereticCape"
    },
    "2018": {
        "botName": "T7_CAPEITEM_HERETIC@1",
        "humanName": "Grandmaster'sHereticCape"
    },
    "2019": {
        "botName": "T7_CAPEITEM_HERETIC@2",
        "humanName": "Grandmaster'sHereticCape"
    },
    "2020": {
        "botName": "T7_CAPEITEM_HERETIC@3",
        "humanName": "Grandmaster'sHereticCape"
    },
    "2021": {
        "botName": "T8_CAPEITEM_HERETIC",
        "humanName": "Elder'sHereticCape"
    },
    "2022": {
        "botName": "T8_CAPEITEM_HERETIC@1",
        "humanName": "Elder'sHereticCape"
    },
    "2023": {
        "botName": "T8_CAPEITEM_HERETIC@2",
        "humanName": "Elder'sHereticCape"
    },
    "2024": {
        "botName": "T8_CAPEITEM_HERETIC@3",
        "humanName": "Elder'sHereticCape"
    },
    "2025": {
        "botName": "T4_CAPEITEM_UNDEAD",
        "humanName": "Adept'sUndeadCape"
    },
    "2026": {
        "botName": "T4_CAPEITEM_UNDEAD@1",
        "humanName": "Adept'sUndeadCape"
    },
    "2027": {
        "botName": "T4_CAPEITEM_UNDEAD@2",
        "humanName": "Adept'sUndeadCape"
    },
    "2028": {
        "botName": "T4_CAPEITEM_UNDEAD@3",
        "humanName": "Adept'sUndeadCape"
    },
    "2029": {
        "botName": "T5_CAPEITEM_UNDEAD",
        "humanName": "Expert'sUndeadCape"
    },
    "2030": {
        "botName": "T5_CAPEITEM_UNDEAD@1",
        "humanName": "Expert'sUndeadCape"
    },
    "2031": {
        "botName": "T5_CAPEITEM_UNDEAD@2",
        "humanName": "Expert'sUndeadCape"
    },
    "2032": {
        "botName": "T5_CAPEITEM_UNDEAD@3",
        "humanName": "Expert'sUndeadCape"
    },
    "2033": {
        "botName": "T6_CAPEITEM_UNDEAD",
        "humanName": "Master'sUndeadCape"
    },
    "2034": {
        "botName": "T6_CAPEITEM_UNDEAD@1",
        "humanName": "Master'sUndeadCape"
    },
    "2035": {
        "botName": "T6_CAPEITEM_UNDEAD@2",
        "humanName": "Master'sUndeadCape"
    },
    "2036": {
        "botName": "T6_CAPEITEM_UNDEAD@3",
        "humanName": "Master'sUndeadCape"
    },
    "2037": {
        "botName": "T7_CAPEITEM_UNDEAD",
        "humanName": "Grandmaster'sUndeadCape"
    },
    "2038": {
        "botName": "T7_CAPEITEM_UNDEAD@1",
        "humanName": "Grandmaster'sUndeadCape"
    },
    "2039": {
        "botName": "T7_CAPEITEM_UNDEAD@2",
        "humanName": "Grandmaster'sUndeadCape"
    },
    "2040": {
        "botName": "T7_CAPEITEM_UNDEAD@3",
        "humanName": "Grandmaster'sUndeadCape"
    },
    "2041": {
        "botName": "T8_CAPEITEM_UNDEAD",
        "humanName": "Elder'sUndeadCape"
    },
    "2042": {
        "botName": "T8_CAPEITEM_UNDEAD@1",
        "humanName": "Elder'sUndeadCape"
    },
    "2043": {
        "botName": "T8_CAPEITEM_UNDEAD@2",
        "humanName": "Elder'sUndeadCape"
    },
    "2044": {
        "botName": "T8_CAPEITEM_UNDEAD@3",
        "humanName": "Elder'sUndeadCape"
    },
    "2045": {
        "botName": "T4_CAPEITEM_KEEPER",
        "humanName": "Adept'sKeeperCape"
    },
    "2046": {
        "botName": "T4_CAPEITEM_KEEPER@1",
        "humanName": "Adept'sKeeperCape"
    },
    "2047": {
        "botName": "T4_CAPEITEM_KEEPER@2",
        "humanName": "Adept'sKeeperCape"
    },
    "2048": {
        "botName": "T4_CAPEITEM_KEEPER@3",
        "humanName": "Adept'sKeeperCape"
    },
    "2049": {
        "botName": "T5_CAPEITEM_KEEPER",
        "humanName": "Expert'sKeeperCape"
    },
    "2050": {
        "botName": "T5_CAPEITEM_KEEPER@1",
        "humanName": "Expert'sKeeperCape"
    },
    "2051": {
        "botName": "T5_CAPEITEM_KEEPER@2",
        "humanName": "Expert'sKeeperCape"
    },
    "2052": {
        "botName": "T5_CAPEITEM_KEEPER@3",
        "humanName": "Expert'sKeeperCape"
    },
    "2053": {
        "botName": "T6_CAPEITEM_KEEPER",
        "humanName": "Master'sKeeperCape"
    },
    "2054": {
        "botName": "T6_CAPEITEM_KEEPER@1",
        "humanName": "Master'sKeeperCape"
    },
    "2055": {
        "botName": "T6_CAPEITEM_KEEPER@2",
        "humanName": "Master'sKeeperCape"
    },
    "2056": {
        "botName": "T6_CAPEITEM_KEEPER@3",
        "humanName": "Master'sKeeperCape"
    },
    "2057": {
        "botName": "T7_CAPEITEM_KEEPER",
        "humanName": "Grandmaster'sKeeperCape"
    },
    "2058": {
        "botName": "T7_CAPEITEM_KEEPER@1",
        "humanName": "Grandmaster'sKeeperCape"
    },
    "2059": {
        "botName": "T7_CAPEITEM_KEEPER@2",
        "humanName": "Grandmaster'sKeeperCape"
    },
    "2060": {
        "botName": "T7_CAPEITEM_KEEPER@3",
        "humanName": "Grandmaster'sKeeperCape"
    },
    "2061": {
        "botName": "T8_CAPEITEM_KEEPER",
        "humanName": "Elder'sKeeperCape"
    },
    "2062": {
        "botName": "T8_CAPEITEM_KEEPER@1",
        "humanName": "Elder'sKeeperCape"
    },
    "2063": {
        "botName": "T8_CAPEITEM_KEEPER@2",
        "humanName": "Elder'sKeeperCape"
    },
    "2064": {
        "botName": "T8_CAPEITEM_KEEPER@3",
        "humanName": "Elder'sKeeperCape"
    },
    "2065": {
        "botName": "T4_CAPEITEM_MORGANA",
        "humanName": "Adept'sMorganaCape"
    },
    "2066": {
        "botName": "T4_CAPEITEM_MORGANA@1",
        "humanName": "Adept'sMorganaCape"
    },
    "2067": {
        "botName": "T4_CAPEITEM_MORGANA@2",
        "humanName": "Adept'sMorganaCape"
    },
    "2068": {
        "botName": "T4_CAPEITEM_MORGANA@3",
        "humanName": "Adept'sMorganaCape"
    },
    "2069": {
        "botName": "T5_CAPEITEM_MORGANA",
        "humanName": "Expert'sMorganaCape"
    },
    "2070": {
        "botName": "T5_CAPEITEM_MORGANA@1",
        "humanName": "Expert'sMorganaCape"
    },
    "2071": {
        "botName": "T5_CAPEITEM_MORGANA@2",
        "humanName": "Expert'sMorganaCape"
    },
    "2072": {
        "botName": "T5_CAPEITEM_MORGANA@3",
        "humanName": "Expert'sMorganaCape"
    },
    "2073": {
        "botName": "T6_CAPEITEM_MORGANA",
        "humanName": "Master'sMorganaCape"
    },
    "2074": {
        "botName": "T6_CAPEITEM_MORGANA@1",
        "humanName": "Master'sMorganaCape"
    },
    "2075": {
        "botName": "T6_CAPEITEM_MORGANA@2",
        "humanName": "Master'sMorganaCape"
    },
    "2076": {
        "botName": "T6_CAPEITEM_MORGANA@3",
        "humanName": "Master'sMorganaCape"
    },
    "2077": {
        "botName": "T7_CAPEITEM_MORGANA",
        "humanName": "Grandmaster'sMorganaCape"
    },
    "2078": {
        "botName": "T7_CAPEITEM_MORGANA@1",
        "humanName": "Grandmaster'sMorganaCape"
    },
    "2079": {
        "botName": "T7_CAPEITEM_MORGANA@2",
        "humanName": "Grandmaster'sMorganaCape"
    },
    "2080": {
        "botName": "T7_CAPEITEM_MORGANA@3",
        "humanName": "Grandmaster'sMorganaCape"
    },
    "2081": {
        "botName": "T8_CAPEITEM_MORGANA",
        "humanName": "Elder'sMorganaCape"
    },
    "2082": {
        "botName": "T8_CAPEITEM_MORGANA@1",
        "humanName": "Elder'sMorganaCape"
    },
    "2083": {
        "botName": "T8_CAPEITEM_MORGANA@2",
        "humanName": "Elder'sMorganaCape"
    },
    "2084": {
        "botName": "T8_CAPEITEM_MORGANA@3",
        "humanName": "Elder'sMorganaCape"
    },
    "2085": {
        "botName": "T4_CAPEITEM_DEMON",
        "humanName": "Adept'sDemonCape"
    },
    "2086": {
        "botName": "T4_CAPEITEM_DEMON@1",
        "humanName": "Adept'sDemonCape"
    },
    "2087": {
        "botName": "T4_CAPEITEM_DEMON@2",
        "humanName": "Adept'sDemonCape"
    },
    "2088": {
        "botName": "T4_CAPEITEM_DEMON@3",
        "humanName": "Adept'sDemonCape"
    },
    "2089": {
        "botName": "T5_CAPEITEM_DEMON",
        "humanName": "Expert'sDemonCape"
    },
    "2090": {
        "botName": "T5_CAPEITEM_DEMON@1",
        "humanName": "Expert'sDemonCape"
    },
    "2091": {
        "botName": "T5_CAPEITEM_DEMON@2",
        "humanName": "Expert'sDemonCape"
    },
    "2092": {
        "botName": "T5_CAPEITEM_DEMON@3",
        "humanName": "Expert'sDemonCape"
    },
    "2093": {
        "botName": "T6_CAPEITEM_DEMON",
        "humanName": "Master'sDemonCape"
    },
    "2094": {
        "botName": "T6_CAPEITEM_DEMON@1",
        "humanName": "Master'sDemonCape"
    },
    "2095": {
        "botName": "T6_CAPEITEM_DEMON@2",
        "humanName": "Master'sDemonCape"
    },
    "2096": {
        "botName": "T6_CAPEITEM_DEMON@3",
        "humanName": "Master'sDemonCape"
    },
    "2097": {
        "botName": "T7_CAPEITEM_DEMON",
        "humanName": "Grandmaster'sDemonCape"
    },
    "2098": {
        "botName": "T7_CAPEITEM_DEMON@1",
        "humanName": "Grandmaster'sDemonCape"
    },
    "2099": {
        "botName": "T7_CAPEITEM_DEMON@2",
        "humanName": "Grandmaster'sDemonCape"
    },
    "2100": {
        "botName": "T7_CAPEITEM_DEMON@3",
        "humanName": "Grandmaster'sDemonCape"
    },
    "2101": {
        "botName": "T8_CAPEITEM_DEMON",
        "humanName": "Elder'sDemonCape"
    },
    "2102": {
        "botName": "T8_CAPEITEM_DEMON@1",
        "humanName": "Elder'sDemonCape"
    },
    "2103": {
        "botName": "T8_CAPEITEM_DEMON@2",
        "humanName": "Elder'sDemonCape"
    },
    "2104": {
        "botName": "T8_CAPEITEM_DEMON@3",
        "humanName": "Elder'sDemonCape"
    },
    "2105": {
        "botName": "UNIQUE_LOOTCHEST_FIRSTREFERRAL",
        "humanName": "Recruiter'sPileofTomes"
    },
    "2106": {
        "botName": "UNIQUE_LOOTCHEST_SKILLBOOKS_TELLAFRIEND",
        "humanName": "PileofTomes"
    },
    "2107": {
        "botName": "T2_BAG",
        "humanName": "Novice'sBag"
    },
    "2108": {
        "botName": "T3_BAG",
        "humanName": "Journeyman'sBag"
    },
    "2109": {
        "botName": "T4_BAG",
        "humanName": "Adept'sBag"
    },
    "2110": {
        "botName": "T4_BAG@1",
        "humanName": "Adept'sBag"
    },
    "2111": {
        "botName": "T4_BAG@2",
        "humanName": "Adept'sBag"
    },
    "2112": {
        "botName": "T4_BAG@3",
        "humanName": "Adept'sBag"
    },
    "2113": {
        "botName": "T5_BAG",
        "humanName": "Expert'sBag"
    },
    "2114": {
        "botName": "T5_BAG@1",
        "humanName": "Expert'sBag"
    },
    "2115": {
        "botName": "T5_BAG@2",
        "humanName": "Expert'sBag"
    },
    "2116": {
        "botName": "T5_BAG@3",
        "humanName": "Expert'sBag"
    },
    "2117": {
        "botName": "T6_BAG",
        "humanName": "Master'sBag"
    },
    "2118": {
        "botName": "T6_BAG@1",
        "humanName": "Master'sBag"
    },
    "2119": {
        "botName": "T6_BAG@2",
        "humanName": "Master'sBag"
    },
    "2120": {
        "botName": "T6_BAG@3",
        "humanName": "Master'sBag"
    },
    "2121": {
        "botName": "T7_BAG",
        "humanName": "Grandmaster'sBag"
    },
    "2122": {
        "botName": "T7_BAG@1",
        "humanName": "Grandmaster'sBag"
    },
    "2123": {
        "botName": "T7_BAG@2",
        "humanName": "Grandmaster'sBag"
    },
    "2124": {
        "botName": "T7_BAG@3",
        "humanName": "Grandmaster'sBag"
    },
    "2125": {
        "botName": "T8_BAG",
        "humanName": "Elder'sBag"
    },
    "2126": {
        "botName": "T8_BAG@1",
        "humanName": "Elder'sBag"
    },
    "2127": {
        "botName": "T8_BAG@2",
        "humanName": "Elder'sBag"
    },
    "2128": {
        "botName": "T8_BAG@3",
        "humanName": "Elder'sBag"
    },
    "2129": {
        "botName": "T4_BAG_INSIGHT",
        "humanName": "Adept'sSatchelofInsight"
    },
    "2130": {
        "botName": "T4_BAG_INSIGHT@1",
        "humanName": "Adept'sSatchelofInsight"
    },
    "2131": {
        "botName": "T4_BAG_INSIGHT@2",
        "humanName": "Adept'sSatchelofInsight"
    },
    "2132": {
        "botName": "T4_BAG_INSIGHT@3",
        "humanName": "Adept'sSatchelofInsight"
    },
    "2133": {
        "botName": "T5_BAG_INSIGHT",
        "humanName": "Expert'sSatchelofInsight"
    },
    "2134": {
        "botName": "T5_BAG_INSIGHT@1",
        "humanName": "Expert'sSatchelofInsight"
    },
    "2135": {
        "botName": "T5_BAG_INSIGHT@2",
        "humanName": "Expert'sSatchelofInsight"
    },
    "2136": {
        "botName": "T5_BAG_INSIGHT@3",
        "humanName": "Expert'sSatchelofInsight"
    },
    "2137": {
        "botName": "T6_BAG_INSIGHT",
        "humanName": "Master'sSatchelofInsight"
    },
    "2138": {
        "botName": "T6_BAG_INSIGHT@1",
        "humanName": "Master'sSatchelofInsight"
    },
    "2139": {
        "botName": "T6_BAG_INSIGHT@2",
        "humanName": "Master'sSatchelofInsight"
    },
    "2140": {
        "botName": "T6_BAG_INSIGHT@3",
        "humanName": "Master'sSatchelofInsight"
    },
    "2141": {
        "botName": "T7_BAG_INSIGHT",
        "humanName": "Grandmaster'sSatchelofInsight"
    },
    "2142": {
        "botName": "T7_BAG_INSIGHT@1",
        "humanName": "Grandmaster'sSatchelofInsight"
    },
    "2143": {
        "botName": "T7_BAG_INSIGHT@2",
        "humanName": "Grandmaster'sSatchelofInsight"
    },
    "2144": {
        "botName": "T7_BAG_INSIGHT@3",
        "humanName": "Grandmaster'sSatchelofInsight"
    },
    "2145": {
        "botName": "T8_BAG_INSIGHT",
        "humanName": "Elder'sSatchelofInsight"
    },
    "2146": {
        "botName": "T8_BAG_INSIGHT@1",
        "humanName": "Elder'sSatchelofInsight"
    },
    "2147": {
        "botName": "T8_BAG_INSIGHT@2",
        "humanName": "Elder'sSatchelofInsight"
    },
    "2148": {
        "botName": "T8_BAG_INSIGHT@3",
        "humanName": "Elder'sSatchelofInsight"
    },
    "2149": {
        "botName": "T1_2H_TOOL_PICK",
        "humanName": "Beginner'sPickaxe"
    },
    "2150": {
        "botName": "T2_2H_TOOL_PICK",
        "humanName": "Novice'sPickaxe"
    },
    "2151": {
        "botName": "T3_2H_TOOL_PICK",
        "humanName": "Journeyman'sPickaxe"
    },
    "2152": {
        "botName": "T4_2H_TOOL_PICK",
        "humanName": "Adept'sPickaxe"
    },
    "2153": {
        "botName": "T5_2H_TOOL_PICK",
        "humanName": "Expert'sPickaxe"
    },
    "2154": {
        "botName": "T6_2H_TOOL_PICK",
        "humanName": "Master'sPickaxe"
    },
    "2155": {
        "botName": "T7_2H_TOOL_PICK",
        "humanName": "Grandmaster'sPickaxe"
    },
    "2156": {
        "botName": "T8_2H_TOOL_PICK",
        "humanName": "Elder'sPickaxe"
    },
    "2157": {
        "botName": "T4_2H_TOOL_PICK_AVALON",
        "humanName": "Adept'sAvalonianPickaxe"
    },
    "2158": {
        "botName": "T5_2H_TOOL_PICK_AVALON",
        "humanName": "Expert'sAvalonianPickaxe"
    },
    "2159": {
        "botName": "T6_2H_TOOL_PICK_AVALON",
        "humanName": "Master'sAvalonianPickaxe"
    },
    "2160": {
        "botName": "T7_2H_TOOL_PICK_AVALON",
        "humanName": "Grandmaster'sAvalonianPickaxe"
    },
    "2161": {
        "botName": "T8_2H_TOOL_PICK_AVALON",
        "humanName": "Elder'sAvalonianPickaxe"
    },
    "2162": {
        "botName": "T1_2H_TOOL_HAMMER",
        "humanName": "Beginner'sStoneHammer"
    },
    "2163": {
        "botName": "T2_2H_TOOL_HAMMER",
        "humanName": "Novice'sStoneHammer"
    },
    "2164": {
        "botName": "T3_2H_TOOL_HAMMER",
        "humanName": "Journeyman'sStoneHammer"
    },
    "2165": {
        "botName": "T4_2H_TOOL_HAMMER",
        "humanName": "Adept'sStoneHammer"
    },
    "2166": {
        "botName": "T5_2H_TOOL_HAMMER",
        "humanName": "Expert'sStoneHammer"
    },
    "2167": {
        "botName": "T6_2H_TOOL_HAMMER",
        "humanName": "Master'sStoneHammer"
    },
    "2168": {
        "botName": "T7_2H_TOOL_HAMMER",
        "humanName": "Grandmaster'sStoneHammer"
    },
    "2169": {
        "botName": "T8_2H_TOOL_HAMMER",
        "humanName": "Elder'sStoneHammer"
    },
    "2170": {
        "botName": "T4_2H_TOOL_HAMMER_AVALON",
        "humanName": "Adept'sAvalonianStoneHammer"
    },
    "2171": {
        "botName": "T5_2H_TOOL_HAMMER_AVALON",
        "humanName": "Expert'sAvalonianStoneHammer"
    },
    "2172": {
        "botName": "T6_2H_TOOL_HAMMER_AVALON",
        "humanName": "Master'sAvalonianStoneHammer"
    },
    "2173": {
        "botName": "T7_2H_TOOL_HAMMER_AVALON",
        "humanName": "Grandmaster'sAvalonianStoneHammer"
    },
    "2174": {
        "botName": "T8_2H_TOOL_HAMMER_AVALON",
        "humanName": "Elder'sAvalonianStoneHammer"
    },
    "2175": {
        "botName": "T1_2H_TOOL_AXE",
        "humanName": "Beginner'sAxe"
    },
    "2176": {
        "botName": "T2_2H_TOOL_AXE",
        "humanName": "Novice'sAxe"
    },
    "2177": {
        "botName": "T3_2H_TOOL_AXE",
        "humanName": "Journeyman'sAxe"
    },
    "2178": {
        "botName": "T4_2H_TOOL_AXE",
        "humanName": "Adept'sAxe"
    },
    "2179": {
        "botName": "T5_2H_TOOL_AXE",
        "humanName": "Expert'sAxe"
    },
    "2180": {
        "botName": "T6_2H_TOOL_AXE",
        "humanName": "Master'sAxe"
    },
    "2181": {
        "botName": "T7_2H_TOOL_AXE",
        "humanName": "Grandmaster'sAxe"
    },
    "2182": {
        "botName": "T8_2H_TOOL_AXE",
        "humanName": "Elder'sAxe"
    },
    "2183": {
        "botName": "T4_2H_TOOL_AXE_AVALON",
        "humanName": "Adept'sAvalonianAxe"
    },
    "2184": {
        "botName": "T5_2H_TOOL_AXE_AVALON",
        "humanName": "Expert'sAvalonianAxe"
    },
    "2185": {
        "botName": "T6_2H_TOOL_AXE_AVALON",
        "humanName": "Master'sAvalonianAxe"
    },
    "2186": {
        "botName": "T7_2H_TOOL_AXE_AVALON",
        "humanName": "Grandmaster'sAvalonianAxe"
    },
    "2187": {
        "botName": "T8_2H_TOOL_AXE_AVALON",
        "humanName": "Elder'sAvalonianAxe"
    },
    "2188": {
        "botName": "T1_2H_TOOL_SICKLE",
        "humanName": "Beginner'sSickle"
    },
    "2189": {
        "botName": "T2_2H_TOOL_SICKLE",
        "humanName": "Novice'sSickle"
    },
    "2190": {
        "botName": "T3_2H_TOOL_SICKLE",
        "humanName": "Journeyman'sSickle"
    },
    "2191": {
        "botName": "T4_2H_TOOL_SICKLE",
        "humanName": "Adept'sSickle"
    },
    "2192": {
        "botName": "T5_2H_TOOL_SICKLE",
        "humanName": "Expert'sSickle"
    },
    "2193": {
        "botName": "T6_2H_TOOL_SICKLE",
        "humanName": "Master'sSickle"
    },
    "2194": {
        "botName": "T7_2H_TOOL_SICKLE",
        "humanName": "Grandmaster'sSickle"
    },
    "2195": {
        "botName": "T8_2H_TOOL_SICKLE",
        "humanName": "Elder'sSickle"
    },
    "2196": {
        "botName": "T4_2H_TOOL_SICKLE_AVALON",
        "humanName": "Adept'sAvalonianSickle"
    },
    "2197": {
        "botName": "T5_2H_TOOL_SICKLE_AVALON",
        "humanName": "Expert'sAvalonianSickle"
    },
    "2198": {
        "botName": "T6_2H_TOOL_SICKLE_AVALON",
        "humanName": "Master'sAvalonianSickle"
    },
    "2199": {
        "botName": "T7_2H_TOOL_SICKLE_AVALON",
        "humanName": "Grandmaster'sAvalonianSickle"
    },
    "2200": {
        "botName": "T8_2H_TOOL_SICKLE_AVALON",
        "humanName": "Elder'sAvalonianSickle"
    },
    "2201": {
        "botName": "T1_2H_TOOL_KNIFE",
        "humanName": "Beginner'sSkinningKnife"
    },
    "2202": {
        "botName": "T2_2H_TOOL_KNIFE",
        "humanName": "Novice'sSkinningKnife"
    },
    "2203": {
        "botName": "T3_2H_TOOL_KNIFE",
        "humanName": "Journeyman'sSkinningKnife"
    },
    "2204": {
        "botName": "T4_2H_TOOL_KNIFE",
        "humanName": "Adept'sSkinningKnife"
    },
    "2205": {
        "botName": "T5_2H_TOOL_KNIFE",
        "humanName": "Expert'sSkinningKnife"
    },
    "2206": {
        "botName": "T6_2H_TOOL_KNIFE",
        "humanName": "Master'sSkinningKnife"
    },
    "2207": {
        "botName": "T7_2H_TOOL_KNIFE",
        "humanName": "Grandmaster'sSkinningKnife"
    },
    "2208": {
        "botName": "T8_2H_TOOL_KNIFE",
        "humanName": "Elder'sSkinningKnife"
    },
    "2209": {
        "botName": "T4_2H_TOOL_KNIFE_AVALON",
        "humanName": "Adept'sAvalonianSkinningKnife"
    },
    "2210": {
        "botName": "T5_2H_TOOL_KNIFE_AVALON",
        "humanName": "Expert'sAvalonianSkinningKnife"
    },
    "2211": {
        "botName": "T6_2H_TOOL_KNIFE_AVALON",
        "humanName": "Master'sAvalonianSkinningKnife"
    },
    "2212": {
        "botName": "T7_2H_TOOL_KNIFE_AVALON",
        "humanName": "Grandmaster'sAvalonianSkinningKnife"
    },
    "2213": {
        "botName": "T8_2H_TOOL_KNIFE_AVALON",
        "humanName": "Elder'sAvalonianSkinningKnife"
    },
    "2214": {
        "botName": "T2_2H_TOOL_SIEGEHAMMER",
        "humanName": "Novice'sDemolitionHammer"
    },
    "2215": {
        "botName": "T3_2H_TOOL_SIEGEHAMMER",
        "humanName": "Journeyman'sDemolitionHammer"
    },
    "2216": {
        "botName": "T4_2H_TOOL_SIEGEHAMMER",
        "humanName": "Adept'sDemolitionHammer"
    },
    "2217": {
        "botName": "T5_2H_TOOL_SIEGEHAMMER",
        "humanName": "Expert'sDemolitionHammer"
    },
    "2218": {
        "botName": "T6_2H_TOOL_SIEGEHAMMER",
        "humanName": "Master'sDemolitionHammer"
    },
    "2219": {
        "botName": "T7_2H_TOOL_SIEGEHAMMER",
        "humanName": "Grandmaster'sDemolitionHammer"
    },
    "2220": {
        "botName": "T8_2H_TOOL_SIEGEHAMMER",
        "humanName": "Elder'sDemolitionHammer"
    },
    "2221": {
        "botName": "T4_2H_TOOL_SIEGEHAMMER_AVALON",
        "humanName": "Adept'sAvalonianDemolitionHammer"
    },
    "2222": {
        "botName": "T5_2H_TOOL_SIEGEHAMMER_AVALON",
        "humanName": "Expert'sAvalonianDemolitionHammer"
    },
    "2223": {
        "botName": "T6_2H_TOOL_SIEGEHAMMER_AVALON",
        "humanName": "Master'sAvalonianDemolitionHammer"
    },
    "2224": {
        "botName": "T7_2H_TOOL_SIEGEHAMMER_AVALON",
        "humanName": "Grandmaster'sAvalonianDemolitionHammer"
    },
    "2225": {
        "botName": "T8_2H_TOOL_SIEGEHAMMER_AVALON",
        "humanName": "Elder'sAvalonianDemolitionHammer"
    },
    "2226": {
        "botName": "T3_2H_TOOL_FISHINGROD",
        "humanName": "Journeyman'sFishingRod"
    },
    "2227": {
        "botName": "T4_2H_TOOL_FISHINGROD",
        "humanName": "Adept'sFishingRod"
    },
    "2228": {
        "botName": "T5_2H_TOOL_FISHINGROD",
        "humanName": "Expert'sFishingRod"
    },
    "2229": {
        "botName": "T6_2H_TOOL_FISHINGROD",
        "humanName": "Master'sFishingRod"
    },
    "2230": {
        "botName": "T7_2H_TOOL_FISHINGROD",
        "humanName": "Grandmaster'sFishingRod"
    },
    "2231": {
        "botName": "T8_2H_TOOL_FISHINGROD",
        "humanName": "Elder'sFishingRod"
    },
    "2232": {
        "botName": "T4_2H_TOOL_FISHINGROD_AVALON",
        "humanName": "Adept'sAvalonianFishingRod"
    },
    "2233": {
        "botName": "T5_2H_TOOL_FISHINGROD_AVALON",
        "humanName": "Expert'sAvalonianFishingRod"
    },
    "2234": {
        "botName": "T6_2H_TOOL_FISHINGROD_AVALON",
        "humanName": "Master'sAvalonianFishingRod"
    },
    "2235": {
        "botName": "T7_2H_TOOL_FISHINGROD_AVALON",
        "humanName": "Grandmaster'sAvalonianFishingRod"
    },
    "2236": {
        "botName": "T8_2H_TOOL_FISHINGROD_AVALON",
        "humanName": "Elder'sAvalonianFishingRod"
    },
    "2237": {
        "botName": "UNIQUE_MOUNT_ARMORED_HORSE_KNIGHT_01_TEST"
    },
    "2238": {
        "botName": "T2_MOUNT_MULE",
        "humanName": "Novice'sMule"
    },
    "2239": {
        "botName": "T3_MOUNT_HORSE",
        "humanName": "Journeyman'sRidingHorse"
    },
    "2240": {
        "botName": "T4_MOUNT_HORSE",
        "humanName": "Adept'sRidingHorse"
    },
    "2241": {
        "botName": "T5_MOUNT_HORSE",
        "humanName": "Expert'sRidingHorse"
    },
    "2242": {
        "botName": "T6_MOUNT_HORSE",
        "humanName": "Master'sRidingHorse"
    },
    "2243": {
        "botName": "T7_MOUNT_HORSE",
        "humanName": "Grandmaster'sRidingHorse"
    },
    "2244": {
        "botName": "T8_MOUNT_HORSE",
        "humanName": "Elder'sRidingHorse"
    },
    "2245": {
        "botName": "T5_MOUNT_ARMORED_HORSE",
        "humanName": "Expert'sArmoredHorse"
    },
    "2246": {
        "botName": "T6_MOUNT_ARMORED_HORSE",
        "humanName": "Master'sArmoredHorse"
    },
    "2247": {
        "botName": "T7_MOUNT_ARMORED_HORSE",
        "humanName": "Grandmaster'sArmoredHorse"
    },
    "2248": {
        "botName": "T8_MOUNT_ARMORED_HORSE",
        "humanName": "Elder'sArmoredHorse"
    },
    "2249": {
        "botName": "T3_MOUNT_OX",
        "humanName": "Journeyman'sTransportOx"
    },
    "2250": {
        "botName": "T4_MOUNT_OX",
        "humanName": "Adept'sTransportOx"
    },
    "2251": {
        "botName": "T5_MOUNT_OX",
        "humanName": "Expert'sTransportOx"
    },
    "2252": {
        "botName": "T6_MOUNT_OX",
        "humanName": "Master'sTransportOx"
    },
    "2253": {
        "botName": "T7_MOUNT_OX",
        "humanName": "Grandmaster'sTransportOx"
    },
    "2254": {
        "botName": "T8_MOUNT_OX",
        "humanName": "Elder'sTransportOx"
    },
    "2255": {
        "botName": "T4_MOUNT_GIANTSTAG",
        "humanName": "Adept'sGiantStag"
    },
    "2256": {
        "botName": "T6_MOUNT_GIANTSTAG_MOOSE",
        "humanName": "Moose"
    },
    "2257": {
        "botName": "T6_MOUNT_DIREWOLF",
        "humanName": "Direwolf"
    },
    "2258": {
        "botName": "T7_MOUNT_DIREBOAR",
        "humanName": "SaddledDireboar"
    },
    "2259": {
        "botName": "T7_MOUNT_SWAMPDRAGON",
        "humanName": "SaddledSwampDragon"
    },
    "2260": {
        "botName": "T8_MOUNT_DIREBEAR",
        "humanName": "SaddledDirebear"
    },
    "2261": {
        "botName": "T8_MOUNT_MAMMOTH_TRANSPORT",
        "humanName": "Elder'sTransportMammoth"
    },
    "2262": {
        "botName": "T5_MOUNT_MOABIRD_FW_BRIDGEWATCH",
        "humanName": "SaddledMoabird"
    },
    "2263": {
        "botName": "T5_MOUNT_DIREBEAR_FW_FORTSTERLING",
        "humanName": "SaddledWinterBear"
    },
    "2264": {
        "botName": "T5_MOUNT_DIREBOAR_FW_LYMHURST",
        "humanName": "SaddledWildBoar"
    },
    "2265": {
        "botName": "T5_MOUNT_RAM_FW_MARTLOCK",
        "humanName": "SaddledBighornRam"
    },
    "2266": {
        "botName": "T5_MOUNT_SWAMPDRAGON_FW_THETFORD",
        "humanName": "SaddledSwampSalamander"
    },
    "2267": {
        "botName": "T5_MOUNT_GREYWOLF_FW_CAERLEON",
        "humanName": "SaddledGreywolf"
    },
    "2268": {
        "botName": "T8_MOUNT_MOABIRD_FW_BRIDGEWATCH_ELITE",
        "humanName": "EliteTerrorbird"
    },
    "2269": {
        "botName": "T8_MOUNT_DIREBEAR_FW_FORTSTERLING_ELITE",
        "humanName": "EliteWinterBear"
    },
    "2270": {
        "botName": "T8_MOUNT_DIREBOAR_FW_LYMHURST_ELITE",
        "humanName": "EliteWildBoar"
    },
    "2271": {
        "botName": "T8_MOUNT_RAM_FW_MARTLOCK_ELITE",
        "humanName": "EliteBighornRam"
    },
    "2272": {
        "botName": "T8_MOUNT_SWAMPDRAGON_FW_THETFORD_ELITE",
        "humanName": "EliteSwampSalamander"
    },
    "2273": {
        "botName": "T8_MOUNT_GREYWOLF_FW_CAERLEON_ELITE",
        "humanName": "EliteGreywolf"
    },
    "2274": {
        "botName": "T8_MOUNT_MAMMOTH_BATTLE@1",
        "humanName": "Elder'sCommandMammoth"
    },
    "2275": {
        "botName": "T7_MOUNT_SWAMPDRAGON_BATTLE",
        "humanName": "FlameBasilisk"
    },
    "2276": {
        "botName": "T7_MOUNT_ARMORED_SWAMPDRAGON_BATTLE",
        "humanName": "VenomBasilisk"
    },
    "2277": {
        "botName": "T6_MOUNT_SIEGE_BALLISTA",
        "humanName": "SiegeBallista"
    },
    "2278": {
        "botName": "T8_MOUNT_HORSE_UNDEAD@1",
        "humanName": "SpectralBonehorse"
    },
    "2279": {
        "botName": "T5_MOUNT_COUGAR_KEEPER@1",
        "humanName": "Swiftclaw"
    },
    "2280": {
        "botName": "T8_MOUNT_COUGAR_KEEPER@1",
        "humanName": "Rageclaw"
    },
    "2281": {
        "botName": "T8_MOUNT_ARMORED_HORSE_MORGANA@1",
        "humanName": "MorganaNightmare"
    },
    "2282": {
        "botName": "T8_MOUNT_RABBIT_EASTER",
        "humanName": "SpringCottontail"
    },
    "2283": {
        "botName": "UNIQUE_MOUNT_RAM_XMAS",
        "humanName": "YuleRam"
    },
    "2284": {
        "botName": "T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK",
        "humanName": "AvalonianBasilisk"
    },
    "2285": {
        "botName": "UNIQUE_MOUNT_RAM_TELLAFRIEND",
        "humanName": "Recruiter'sRam"
    },
    "2286": {
        "botName": "UNIQUE_MOUNT_MOABIRD_TELLAFRIEND",
        "humanName": "Recruiter'sMoabird"
    },
    "2287": {
        "botName": "UNIQUE_MOUNT_BAT_TELLAFRIEND",
        "humanName": "Recruiter'sSaddledBat"
    },
    "2288": {
        "botName": "UNIQUE_MOUNT_GIANTTOAD_TELLAFRIEND",
        "humanName": "Recruiter'sToad"
    },
    "2289": {
        "botName": "UNIQUE_MOUNT_PANDA_TELLAFRIEND"
    },
    "2290": {
        "botName": "UNIQUE_MOUNT_GIANTTOAD_02_TELLAFRIEND",
        "humanName": "Recruiter'sGiantFrog"
    },
    "2291": {
        "botName": "T5_MOUNT_ARMORED_HORSE_SKIN_01",
        "humanName": "Expert'sWarhorse"
    },
    "2292": {
        "botName": "T6_MOUNT_ARMORED_HORSE_SKIN_01",
        "humanName": "Master'sWarhorse"
    },
    "2293": {
        "botName": "T7_MOUNT_ARMORED_HORSE_SKIN_01",
        "humanName": "Grandmaster'sWarhorse"
    },
    "2294": {
        "botName": "T8_MOUNT_ARMORED_HORSE_SKIN_01",
        "humanName": "Elder'sWarhorse"
    },
    "2295": {
        "botName": "UNIQUE_MOUNT_BAT_PERSONAL",
        "humanName": "SpectralBat"
    },
    "2296": {
        "botName": "T7_MOUNT_MONITORLIZARD_ADC",
        "humanName": "PestLizard"
    },
    "2297": {
        "botName": "T7_MOUNT_HUSKY_ADC",
        "humanName": "SnowHusky"
    },
    "2298": {
        "botName": "T6_MOUNT_FROSTRAM_ADC",
        "humanName": "FrostRam"
    },
    "2299": {
        "botName": "T7_MOUNT_TERRORBIRD_ADC",
        "humanName": "SaddledTerrorbird"
    },
    "2300": {
        "botName": "UNIQUE_MOUNT_BEAR_KEEPER_ADC",
        "humanName": "GrizzlyBear"
    },
    "2301": {
        "botName": "UNIQUE_MOUNT_BLACK_PANTHER_ADC",
        "humanName": "BlackPanther"
    },
    "2302": {
        "botName": "UNIQUE_MOUNT_MORGANA_RAVEN_ADC",
        "humanName": "MorganaRaven"
    },
    "2303": {
        "botName": "UNIQUE_MOUNT_GIANT_HORSE_ADC",
        "humanName": "GallantHorse"
    },
    "2304": {
        "botName": "UNIQUE_MOUNT_UNDEAD_DIREBOAR_ADC",
        "humanName": "SpectralDireboar"
    },
    "2305": {
        "botName": "UNIQUE_MOUNT_DIVINE_OWL_ADC",
        "humanName": "DivineOwl"
    },
    "2306": {
        "botName": "UNIQUE_MOUNT_HERETIC_MULE_ADC",
        "humanName": "HereticCombatMule"
    },
    "2307": {
        "botName": "UNIQUE_MOUNT_RHINO_SEASON_CRYSTAL",
        "humanName": "CrystalBattleRhino"
    },
    "2308": {
        "botName": "UNIQUE_MOUNT_RHINO_SEASON_GOLD",
        "humanName": "GoldBattleRhino"
    },
    "2309": {
        "botName": "UNIQUE_MOUNT_RHINO_SEASON_SILVER",
        "humanName": "SilverBattleRhino"
    },
    "2310": {
        "botName": "UNIQUE_MOUNT_RHINO_SEASON_BRONZE",
        "humanName": "BronzeBattleRhino"
    },
    "2311": {
        "botName": "UNIQUE_MOUNT_TOWER_CHARIOT_CRYSTAL",
        "humanName": "CrystalTowerChariot"
    },
    "2312": {
        "botName": "UNIQUE_MOUNT_TOWER_CHARIOT_GOLD",
        "humanName": "GoldTowerChariot"
    },
    "2313": {
        "botName": "UNIQUE_MOUNT_TOWER_CHARIOT_SILVER",
        "humanName": "SilverTowerChariot"
    },
    "2314": {
        "botName": "UNIQUE_MOUNT_ARMORED_EAGLE_CRYSTAL",
        "humanName": "CrystalBattleEagle"
    },
    "2315": {
        "botName": "UNIQUE_MOUNT_ARMORED_EAGLE_GOLD",
        "humanName": "GoldBattleEagle"
    },
    "2316": {
        "botName": "UNIQUE_MOUNT_ARMORED_EAGLE_SILVER",
        "humanName": "SilverBattleEagle"
    },
    "2317": {
        "botName": "UNIQUE_MOUNT_BEETLE_CRYSTAL",
        "humanName": "CrystalColossusBeetle"
    },
    "2318": {
        "botName": "UNIQUE_MOUNT_BEETLE_GOLD",
        "humanName": "GoldColossusBeetle"
    },
    "2319": {
        "botName": "UNIQUE_MOUNT_BEETLE_SILVER",
        "humanName": "SilverColossusBeetle"
    },
    "2320": {
        "botName": "UNIQUE_MOUNT_BEHEMOTH_CRYSTAL",
        "humanName": "CrystalBehemoth"
    },
    "2321": {
        "botName": "UNIQUE_MOUNT_BEHEMOTH_GOLD",
        "humanName": "GoldBehemoth"
    },
    "2322": {
        "botName": "UNIQUE_MOUNT_BEHEMOTH_SILVER",
        "humanName": "SilverBehemoth"
    },
    "2323": {
        "botName": "UNIQUE_MOUNT_ENT_CRYSTAL",
        "humanName": "CrystalAncientEnt"
    },
    "2324": {
        "botName": "UNIQUE_MOUNT_ENT_GOLD",
        "humanName": "GoldAncientEnt"
    },
    "2325": {
        "botName": "UNIQUE_MOUNT_ENT_SILVER",
        "humanName": "SilverAncientEnt"
    },
    "2326": {
        "botName": "UNIQUE_MOUNT_BATTLESPIDER_CRYSTAL",
        "humanName": "CrystalGoliathHorseeater"
    },
    "2327": {
        "botName": "UNIQUE_MOUNT_BATTLESPIDER_GOLD",
        "humanName": "GoldGoliathHorseeater"
    },
    "2328": {
        "botName": "UNIQUE_MOUNT_BATTLESPIDER_SILVER",
        "humanName": "SilverGoliathHorseeater"
    },
    "2329": {
        "botName": "UNIQUE_MOUNT_BASTION_CRYSTAL",
        "humanName": "CrystalRovingBastion"
    },
    "2330": {
        "botName": "UNIQUE_MOUNT_BASTION_GOLD",
        "humanName": "GoldRovingBastion"
    },
    "2331": {
        "botName": "UNIQUE_MOUNT_BASTION_SILVER",
        "humanName": "SilverRovingBastion"
    },
    "2332": {
        "botName": "UNIQUE_MOUNT_JUGGERNAUT_CRYSTAL",
        "humanName": "CrystalJuggernaut"
    },
    "2333": {
        "botName": "UNIQUE_MOUNT_JUGGERNAUT_GOLD",
        "humanName": "GoldJuggernaut"
    },
    "2334": {
        "botName": "UNIQUE_MOUNT_JUGGERNAUT_SILVER",
        "humanName": "SilverJuggernaut"
    },
    "2335": {
        "botName": "UNIQUE_MOUNT_TANKBEETLE_CRYSTAL",
        "humanName": "CrystalPhalanxBeetle"
    },
    "2336": {
        "botName": "UNIQUE_MOUNT_TANKBEETLE_GOLD",
        "humanName": "GoldPhalanxBeetle"
    },
    "2337": {
        "botName": "UNIQUE_MOUNT_TANKBEETLE_SILVER",
        "humanName": "SilverPhalanxBeetle"
    },
    "2338": {
        "botName": "UNIQUE_MOUNT_RHINO_TELLAFRIEND"
    },
    "2339": {
        "botName": "UNIQUE_MOUNT_GIANTSTAG_FOUNDER_EPIC",
        "humanName": "EpicExplorer'sGiantStag"
    },
    "2340": {
        "botName": "T4_FURNITUREITEM_REPAIRKIT",
        "humanName": "Adept'sRepairKit"
    },
    "2341": {
        "botName": "T5_FURNITUREITEM_REPAIRKIT",
        "humanName": "Expert'sRepairKit"
    },
    "2342": {
        "botName": "T6_FURNITUREITEM_REPAIRKIT",
        "humanName": "Master'sRepairKit"
    },
    "2343": {
        "botName": "T7_FURNITUREITEM_REPAIRKIT",
        "humanName": "Grandmaster'sRepairKit"
    },
    "2344": {
        "botName": "T8_FURNITUREITEM_REPAIRKIT",
        "humanName": "Elder'sRepairKit"
    },
    "2345": {
        "botName": "T2_FURNITUREITEM_GUILDBANNER_FABRIC",
        "humanName": "GuildBanneronFabric"
    },
    "2346": {
        "botName": "T3_FURNITUREITEM_GUILDBANNER_FABRIC",
        "humanName": "GuildBanneronFabric"
    },
    "2347": {
        "botName": "T4_FURNITUREITEM_GUILDBANNER_FABRIC",
        "humanName": "GuildBanneronFabric"
    },
    "2348": {
        "botName": "T5_FURNITUREITEM_GUILDBANNER_FABRIC",
        "humanName": "GuildBanneronFabric"
    },
    "2349": {
        "botName": "T2_FURNITUREITEM_GUILDBANNER_SHIELD",
        "humanName": "GuildBanneronShield"
    },
    "2350": {
        "botName": "T3_FURNITUREITEM_GUILDBANNER_SHIELD",
        "humanName": "GuildBanneronShield"
    },
    "2351": {
        "botName": "T4_FURNITUREITEM_GUILDBANNER_SHIELD",
        "humanName": "GuildBanneronShield"
    },
    "2352": {
        "botName": "T5_FURNITUREITEM_GUILDBANNER_SHIELD",
        "humanName": "GuildBanneronShield"
    },
    "2353": {
        "botName": "T3_FURNITUREITEM_ANNIVERSARYBANNER",
        "humanName": "AnniversaryBanner-White"
    },
    "2354": {
        "botName": "T3_FURNITUREITEM_ANNIVERSARYBANNER_2020",
        "humanName": "AnniversaryBanner-Red"
    },
    "2355": {
        "botName": "T3_FURNITUREITEM_ANNIVERSARYBANNER_2021",
        "humanName": "AnniversaryBanner-Blue"
    },
    "2356": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_A@1",
        "humanName": "Recruiter'sCrate"
    },
    "2357": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_B@1",
        "humanName": "Recruiter'sChest"
    },
    "2358": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_C@1",
        "humanName": "Recruiter'sWoodenChest"
    },
    "2359": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_COMPANION@1",
        "humanName": "Recruiter'sCompanionCrate"
    },
    "2360": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_BARREL@1",
        "humanName": "Recruiter'sBarrel-crate"
    },
    "2361": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_MERLINCUBE@1",
        "humanName": "Recruiter'sMerlynCube"
    },
    "2362": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_SARCOPHAGUS",
        "humanName": "Recruiter'sSarcophagusChest"
    },
    "2363": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_DEER_STATUE",
        "humanName": "Recruiter'sDeerStatue"
    },
    "2364": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_HUNTER_STATUE",
        "humanName": "Recruiter'sHunterStatue"
    },
    "2365": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_CHEST_BARREL_B@1",
        "humanName": "Recruiter'sStorage-Barrel"
    },
    "2366": {
        "botName": "UNIQUE_FURNITUREITEM_TELLAFRIEND_BANNER_A",
        "humanName": "Recruiter'sGuildBanner"
    },
    "2367": {
        "botName": "T2_FURNITUREITEM_BED",
        "humanName": "Novice'sBed"
    },
    "2368": {
        "botName": "T3_FURNITUREITEM_BED",
        "humanName": "Journeyman'sBed"
    },
    "2369": {
        "botName": "T4_FURNITUREITEM_BED",
        "humanName": "Adept'sBed"
    },
    "2370": {
        "botName": "T5_FURNITUREITEM_BED",
        "humanName": "Expert'sBed"
    },
    "2371": {
        "botName": "T6_FURNITUREITEM_BED",
        "humanName": "Master'sBed"
    },
    "2372": {
        "botName": "T7_FURNITUREITEM_BED",
        "humanName": "Grandmaster'sBed"
    },
    "2373": {
        "botName": "T8_FURNITUREITEM_BED",
        "humanName": "Elder'sBed"
    },
    "2374": {
        "botName": "T2_FURNITUREITEM_CHEST",
        "humanName": "Novice'sChest"
    },
    "2375": {
        "botName": "T3_FURNITUREITEM_CHEST",
        "humanName": "Journeyman'sChest"
    },
    "2376": {
        "botName": "T4_FURNITUREITEM_CHEST",
        "humanName": "Adept'sChest"
    },
    "2377": {
        "botName": "T5_FURNITUREITEM_CHEST",
        "humanName": "Expert'sChest"
    },
    "2378": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_BLUE",
        "humanName": "RoyalBlueFireworks"
    },
    "2379": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_GREEN",
        "humanName": "RoyalGreenFireworks"
    },
    "2380": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_YELLOW",
        "humanName": "RoyalYellowFireworks"
    },
    "2381": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_RED",
        "humanName": "RoyalRedFireworks"
    },
    "2382": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_BLUE_NONTRADABLE",
        "humanName": "RoyalBlueFireworks"
    },
    "2383": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_GREEN_NONTRADABLE",
        "humanName": "RoyalGreenFireworks"
    },
    "2384": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_YELLOW_NONTRADABLE",
        "humanName": "RoyalYellowFireworks"
    },
    "2385": {
        "botName": "T3_VANITY_CONSUMABLE_FIREWORKS_RED_NONTRADABLE",
        "humanName": "RoyalRedFireworks"
    },
    "2386": {
        "botName": "UNIQUE_CONSUMABLE_EVENT_WINTER_2017",
        "humanName": "Snowball"
    },
    "2387": {
        "botName": "UNIQUE_CONSUMABLE_EVENT_EASTER_2020_EGG",
        "humanName": "SurpriseEgg"
    },
    "2388": {
        "botName": "UNIQUE_CONSUMABLE_EVENT_EASTER_2020_CHOCOLATE",
        "humanName": "Chocolate"
    },
    "2389": {
        "botName": "T2_FURNITUREITEM_TABLE",
        "humanName": "Novice'sTable"
    },
    "2390": {
        "botName": "T3_FURNITUREITEM_TABLE",
        "humanName": "Journeyman'sTable"
    },
    "2391": {
        "botName": "T4_FURNITUREITEM_TABLE",
        "humanName": "Adept'sTable"
    },
    "2392": {
        "botName": "T5_FURNITUREITEM_TABLE",
        "humanName": "Expert'sTable"
    },
    "2393": {
        "botName": "T6_FURNITUREITEM_TABLE",
        "humanName": "Master'sTable"
    },
    "2394": {
        "botName": "T7_FURNITUREITEM_TABLE",
        "humanName": "Grandmaster'sTable"
    },
    "2395": {
        "botName": "T8_FURNITUREITEM_TABLE",
        "humanName": "Elder'sTable"
    },
    "2396": {
        "botName": "UNIQUE_FURNITUREITEM_EASTER_CHEST",
        "humanName": "Egg-shapedChest"
    },
    "2397": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_04",
        "humanName": "ModestArenaDisplay"
    },
    "2398": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_05",
        "humanName": "GrandArenaDisplay"
    },
    "2399": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_06",
        "humanName": "GloriousArenaDisplay"
    },
    "2400": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_01",
        "humanName": "ModestArenaDisplay"
    },
    "2401": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_02",
        "humanName": "GrandArenaDisplay"
    },
    "2402": {
        "botName": "UNIQUE_FURNITUREITEM_VANITY_ARENA_BANNER_03",
        "humanName": "GloriousArenaDisplay"
    },
    "2403": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_DECO_B",
        "humanName": "Haystack"
    },
    "2404": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_DECO_C",
        "humanName": "Haystackandcart"
    },
    "2405": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_DECO_D",
        "humanName": "Treestumpwithpumpkins"
    },
    "2406": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_FIREBOWL_A",
        "humanName": "Firebowl"
    },
    "2407": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_FIREBOWL_B",
        "humanName": "Firebowlwithpedestal"
    },
    "2408": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_MAGIC_EMBLEM_GROUND_A",
        "humanName": "Smallarcanestonesigil"
    },
    "2409": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_MAGIC_EMBLEM_GROUND_B",
        "humanName": "Arcanestonesigil"
    },
    "2410": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_NATURE_EMBLEM_GROUND_A",
        "humanName": "Smallnaturestonesigil"
    },
    "2411": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_NATURE_EMBLEM_GROUND_B",
        "humanName": "Naturestonesigil"
    },
    "2412": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_A",
        "humanName": "Scholarstatue"
    },
    "2413": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_A_BROKEN",
        "humanName": "Brokenscholarstatue"
    },
    "2414": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_HUNTER_A",
        "humanName": "Huntingsculpture"
    },
    "2415": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_HUNTER_B",
        "humanName": "Hunterstatue"
    },
    "2416": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_MAGE_A",
        "humanName": "Booksculpture"
    },
    "2417": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_MAGE_B",
        "humanName": "Magicianstatue"
    },
    "2418": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_SWORD_A",
        "humanName": "Smallswordsculpture"
    },
    "2419": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_SWORD_B",
        "humanName": "Swordsculpture"
    },
    "2420": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_WARRIOR_A",
        "humanName": "Swordandshieldsculpture"
    },
    "2421": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_STATUE_WARRIOR_B",
        "humanName": "Warriorstatue"
    },
    "2422": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_VALOR_EMBLEM_GROUND_A",
        "humanName": "Smallvalorousstonesigil"
    },
    "2423": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_VALOR_EMBLEM_GROUND_B",
        "humanName": "Valorousstonesigil"
    },
    "2424": {
        "botName": "PLAYERISLAND_FURNITUREITEM_STONE_WELL_A",
        "humanName": "Stonewell"
    },
    "2425": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_A",
        "humanName": "Autumntree"
    },
    "2426": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_B",
        "humanName": "Summertree"
    },
    "2427": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DECO_C",
        "humanName": "Springtree"
    },
    "2428": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DOMESTIC_A",
        "humanName": "Smallfruittree"
    },
    "2429": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_TREE_DOMESTIC_B",
        "humanName": "Fruittree"
    },
    "2430": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_BUNTING_A",
        "humanName": "Buntingportal"
    },
    "2431": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_FENCE_WATCHTOWER_A",
        "humanName": "Woodenwatchtower"
    },
    "2432": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_FLOOR_SIGN_A",
        "humanName": "Woodensign"
    },
    "2433": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_GATE_A",
        "humanName": "Woodenentrance"
    },
    "2434": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_GATE_BIG_B",
        "humanName": "Woodengate"
    },
    "2435": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_LAUNDRY_A",
        "humanName": "Clothesline"
    },
    "2436": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_FISH_A",
        "humanName": "Fishline"
    },
    "2437": {
        "botName": "PLAYERISLAND_FURNITUREITEM_VEGETATION_FLOWER_A",
        "humanName": "Flowervase"
    },
    "2438": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_LANTERN_A",
        "humanName": "Simplelantern"
    },
    "2439": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_LANTERN_CORNER_A",
        "humanName": "Cornerlantern"
    },
    "2440": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_CANDELABRA_A",
        "humanName": "Candelabra"
    },
    "2441": {
        "botName": "PLAYERISLAND_FURNITUREITEM_WOOD_BARREL_A",
        "humanName": "Barrelwithcandle"
    },
    "2442": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_SCARECROW_A"
    },
    "2443": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_MEDIUM"
    },
    "2444": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_LARGE"
    },
    "2445": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_FOODCONTAINER_SMALL"
    },
    "2446": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_LATRINE_A"
    },
    "2447": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_WATERTOWER_A"
    },
    "2448": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_BIRDHOUSE_A"
    },
    "2449": {
        "botName": "PLAYERISLAND_FURNITUREITEM_FARM_DOG_HUT_A"
    },
    "2450": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_FOUNTAIN_A"
    },
    "2451": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_BENCH_A"
    },
    "2452": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_STREET_LANTERN_A"
    },
    "2453": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_A"
    },
    "2454": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_SMALL_A"
    },
    "2455": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_RECTANGLE_A"
    },
    "2456": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_PYRAMID_A"
    },
    "2457": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_HEDGE_SPHERE_A"
    },
    "2458": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_STONE_PATH_A"
    },
    "2459": {
        "botName": "PLAYERISLAND_FURNITUREITEM_NOBLE_STONE_PATH_PLATFORM_A"
    },
    "2460": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_TORCH_A",
        "humanName": "Flambeau(DisciplesofMorgana)"
    },
    "2461": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_TORCH_C@1",
        "humanName": "RavenStandardFlambeau(DisciplesofMorgana)"
    },
    "2462": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_PENTAGRAM@3",
        "humanName": "Pentagram(DisciplesofMorgana)"
    },
    "2463": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_FIREBOWL_B",
        "humanName": "SimpleBrazier(DisciplesofMorgana)"
    },
    "2464": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_FIREBOWL_C@1",
        "humanName": "ReinforcedBrazier(DisciplesofMorgana)"
    },
    "2465": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_CAMPFIRE_D@2",
        "humanName": "Cauldron(DisciplesofMorgana)"
    },
    "2466": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_SACRIFICE_ALTAR_A",
        "humanName": "RavenStandardShrine(DisciplesofMorgana)"
    },
    "2467": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_SIEGE_BALLISTA_A@2",
        "humanName": "SiegeBallista(DisciplesofMorgana)"
    },
    "2468": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_STANDARD_A",
        "humanName": "RavenStandard(DisciplesofMorgana)"
    },
    "2469": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_WEAPONCRATE_A@2",
        "humanName": "ArmyCrate(DisciplesofMorgana)"
    },
    "2470": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_PRISON_CELL_C@3",
        "humanName": "PrisonerCage(DisciplesofMorgana)"
    },
    "2471": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_TENT_A@3",
        "humanName": "Soldier'sTent(DisciplesofMorgana)"
    },
    "2472": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_STATUE_A",
        "humanName": "MorganaCultistStatue"
    },
    "2473": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_ARCHWAY_A",
        "humanName": "MorganaStoneArchway"
    },
    "2474": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_CANDLESTAND_A",
        "humanName": "MorganaCandleStand"
    },
    "2475": {
        "botName": "UNIQUE_FURNITUREITEM_MORGANA_CARPET_A",
        "humanName": "MorganaCarpet"
    },
    "2476": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_SYMBOL_A",
        "humanName": "KeeperSymbol"
    },
    "2477": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_CANDLE_A",
        "humanName": "KeeperCeremonialCandle"
    },
    "2478": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_SHRINE_A",
        "humanName": "KeeperShrine"
    },
    "2479": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_CAMP_FIRE_A",
        "humanName": "KeeperCampfire"
    },
    "2480": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_ALTAR_A",
        "humanName": "KeeperAltar"
    },
    "2481": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_FLAG_A",
        "humanName": "KeeperFlag"
    },
    "2482": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_SYMBOL_OF_POWER_A",
        "humanName": "KeeperSymbolofPower"
    },
    "2483": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_STAR_OF_POWER_A",
        "humanName": "KeeperStarofPower"
    },
    "2484": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_FIREBOWL",
        "humanName": "KeeperFireBowl"
    },
    "2485": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_CAULDRON",
        "humanName": "KeeperCauldron"
    },
    "2486": {
        "botName": "UNIQUE_FURNITUREITEM_KEEPER_HEATER",
        "humanName": "KeeperRockFireplace"
    },
    "2487": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_FOOD_PILE",
        "humanName": "HereticFoodStash"
    },
    "2488": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_ANIMAL_CAGES",
        "humanName": "HereticAnimalCages"
    },
    "2489": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_WEAPON_RACK",
        "humanName": "HereticWeaponRack"
    },
    "2490": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_TRAINING_DUMMY",
        "humanName": "HereticTrainingDummy"
    },
    "2491": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_PALLISADE",
        "humanName": "HereticPalisade"
    },
    "2492": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_GAME_TABLE",
        "humanName": "HereticGameTable"
    },
    "2493": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_FLAG",
        "humanName": "HereticFlag"
    },
    "2494": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_PLANNING_TABLE",
        "humanName": "HereticChief'sTable"
    },
    "2495": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_TENT",
        "humanName": "HereticTent"
    },
    "2496": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRIM_LANTERN",
        "humanName": "GrimLantern"
    },
    "2497": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRIM_HEADSTONE",
        "humanName": "GrimGravestone"
    },
    "2498": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRIM_COFFIN",
        "humanName": "EmptyCoffin"
    },
    "2499": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRAVE_A",
        "humanName": "TomboftheUnknown"
    },
    "2500": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRAVE_B",
        "humanName": "MemorialoftheFallen"
    },
    "2501": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GRIM_WEEPINGWOMAN",
        "humanName": "WeepingWomanStatue"
    },
    "2502": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_CANDY_BOOT"
    },
    "2503": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_BRANCH_A",
        "humanName": "YuletideCandle"
    },
    "2504": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_BRANCH_B",
        "humanName": "YuletideWreath"
    },
    "2505": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_LANTERN",
        "humanName": "YuletideLantern"
    },
    "2506": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_PRESENT",
        "humanName": "PresentBox"
    },
    "2507": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_FILL_CITY_TREE_B",
        "humanName": "SmallDecoratedPineTree"
    },
    "2508": {
        "botName": "UNIQUE_FURNITUREITEM_XMAS_FILL_CITY_TREE_A",
        "humanName": "DecoratedPineTree"
    },
    "2509": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_FROST_SNOWBALLSTACK_A"
    },
    "2510": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_FROST_SNOWMAN",
        "humanName": "FrostSnowman"
    },
    "2511": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_FROST_LANTERN_A"
    },
    "2512": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_A",
        "humanName": "IceSculpture"
    },
    "2513": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_B",
        "humanName": "IceSculpture"
    },
    "2514": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_ICESCULPTURE_C",
        "humanName": "IceSculpture"
    },
    "2515": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_FROST_IGLOO",
        "humanName": "FrostIgloo"
    },
    "2516": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_CARNIVAL_FIREWORK_A",
        "humanName": "CarnivalFirework"
    },
    "2517": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_CARNIVAL_ARCHWAY_A",
        "humanName": "CarnivalArch"
    },
    "2518": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_CARNIVAL_MASK_CART",
        "humanName": "CarnivalCostumeCart"
    },
    "2519": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_A",
        "humanName": "WolfRiderStatue(L)"
    },
    "2520": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_B",
        "humanName": "WolfRiderStatue(R)"
    },
    "2521": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_RUG_DIREBEAR",
        "humanName": "DirebearRug"
    },
    "2522": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_RUG_WOLF",
        "humanName": "WolfRug"
    },
    "2523": {
        "botName": "UNIQUE_FURNITUREITEM_KNIGHT_STATUE_A",
        "humanName": "KnightStatue"
    },
    "2524": {
        "botName": "UNIQUE_FURNITUREITEM_KNIGHT_CARPET_A",
        "humanName": "RegalCarpet"
    },
    "2525": {
        "botName": "UNIQUE_FURNITUREITEM_KNIGHT_THRONE_A",
        "humanName": "StoneThrone"
    },
    "2526": {
        "botName": "UNIQUE_FURNITUREITEM_KNIGHT_ROUNDTABLE_A",
        "humanName": "RoundTable"
    },
    "2527": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_STATUE_MAGE_A",
        "humanName": "MageStatue"
    },
    "2528": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HEALING_CIRCLE_A",
        "humanName": "MagicRuneCircle"
    },
    "2529": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_GLASS_SPHERE_A",
        "humanName": "GlassSphere"
    },
    "2530": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_BARREL_BURNING_A",
        "humanName": "HereticBurningBarrel"
    },
    "2531": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_LANTERN",
        "humanName": "HereticLantern"
    },
    "2532": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_JUNKPILE",
        "humanName": "HereticJunkpile"
    },
    "2533": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_STOVE_A",
        "humanName": "HereticStove"
    },
    "2534": {
        "botName": "UNIQUE_FURNITUREITEM_HERETICS_TOOL_BOARD_A",
        "humanName": "HereticToolboard"
    },
    "2535": {
        "botName": "UNIQUE_FURNITUREITEM_HERETIC_CONSTRUCT",
        "humanName": "HereticScarecrow"
    },
    "2536": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_PUMPKIN_LANTERN_A",
        "humanName": "ScaryPumpkinLantern"
    },
    "2537": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_PUMPKIN_LANTERN_B",
        "humanName": "FriendlyPumpkinLantern"
    },
    "2538": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_TREE_LANTERN_A",
        "humanName": "HalloweenLantern"
    },
    "2539": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_CAULDRON_A",
        "humanName": "HalloweenCauldron"
    },
    "2540": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_SCARECROW_A",
        "humanName": "HalloweenScarecrow"
    },
    "2541": {
        "botName": "UNIQUE_FURNITUREITEM_ADC_HALLOWEEN_SCARECROW_PYRE_A",
        "humanName": "HalloweenPyre"
    },
    "2542": {
        "botName": "UNIQUE_FURNITUREITEM_OLD_OUTLAND_CARPET",
        "humanName": "OutlandsMapCarpet"
    },
    "2543": {
        "botName": "UNIQUE_FURNITUREITEM_SEALED_CAERLEON_REALMGATE",
        "humanName": "CaerleonRealmgate"
    },
    "2544": {
        "botName": "UNIQUE_ALTAR_OF_CHEATING"
    },
    "2545": {
        "botName": "UNIQUE_FURNITUREITEM_VICTORY_TROPHY",
        "humanName": "Skullof$craftedby"
    },
    "2546": {
        "botName": "UNIQUE_INGREDIENT_ANCHOR_FOUNDER_LEGENDARY",
        "humanName": "Explorer'sAnchor"
    },
    "2547": {
        "botName": "UNIQUE_FURNITUREITEM_FOUNDER_LOOKINGGLASS",
        "humanName": "Explorer'sSpyglass"
    },
    "2548": {
        "botName": "UNIQUE_FURNITUREITEM_FOUNDER_CERTIFICATE",
        "humanName": "Founder'sCertificate"
    },
    "2549": {
        "botName": "UNIQUE_FURNITUREITEM_FOUNDER_STATUE",
        "humanName": "Founder'sStatue"
    },
    "2550": {
        "botName": "UNIQUE_SHOES_RUBBERBANDING",
        "humanName": "RubberbandBoots"
    },
    "2551": {
        "botName": "UNIQUE_INTERNAL_HEAD_GAMEMASTER",
        "humanName": "GameMaster'sHat"
    },
    "2552": {
        "botName": "UNIQUE_INTERNAL_ARMOR_GAMEMASTER",
        "humanName": "GameMaster'sDoublet"
    },
    "2553": {
        "botName": "UNIQUE_INTERNAL_SHOES_GAMEMASTER",
        "humanName": "GameMaster'sBoots"
    },
    "2554": {
        "botName": "UNIQUE_INTERNAL_OFF_SCROLL_GAMEMASTER",
        "humanName": "ScrolloftheLaw"
    },
    "2555": {
        "botName": "T2_HEAD_PLATE_SET1",
        "humanName": "Novice'sSoldierHelmet"
    },
    "2556": {
        "botName": "T3_HEAD_PLATE_SET1",
        "humanName": "Journeyman'sSoldierHelmet"
    },
    "2557": {
        "botName": "T4_HEAD_PLATE_SET1",
        "humanName": "Adept'sSoldierHelmet"
    },
    "2558": {
        "botName": "T4_HEAD_PLATE_SET1@1",
        "humanName": "Adept'sSoldierHelmet"
    },
    "2559": {
        "botName": "T4_HEAD_PLATE_SET1@2",
        "humanName": "Adept'sSoldierHelmet"
    },
    "2560": {
        "botName": "T4_HEAD_PLATE_SET1@3",
        "humanName": "Adept'sSoldierHelmet"
    },
    "2561": {
        "botName": "T5_HEAD_PLATE_SET1",
        "humanName": "Expert'sSoldierHelmet"
    },
    "2562": {
        "botName": "T5_HEAD_PLATE_SET1@1",
        "humanName": "Expert'sSoldierHelmet"
    },
    "2563": {
        "botName": "T5_HEAD_PLATE_SET1@2",
        "humanName": "Expert'sSoldierHelmet"
    },
    "2564": {
        "botName": "T5_HEAD_PLATE_SET1@3",
        "humanName": "Expert'sSoldierHelmet"
    },
    "2565": {
        "botName": "T6_HEAD_PLATE_SET1",
        "humanName": "Master'sSoldierHelmet"
    },
    "2566": {
        "botName": "T6_HEAD_PLATE_SET1@1",
        "humanName": "Master'sSoldierHelmet"
    },
    "2567": {
        "botName": "T6_HEAD_PLATE_SET1@2",
        "humanName": "Master'sSoldierHelmet"
    },
    "2568": {
        "botName": "T6_HEAD_PLATE_SET1@3",
        "humanName": "Master'sSoldierHelmet"
    },
    "2569": {
        "botName": "T7_HEAD_PLATE_SET1",
        "humanName": "Grandmaster'sSoldierHelmet"
    },
    "2570": {
        "botName": "T7_HEAD_PLATE_SET1@1",
        "humanName": "Grandmaster'sSoldierHelmet"
    },
    "2571": {
        "botName": "T7_HEAD_PLATE_SET1@2",
        "humanName": "Grandmaster'sSoldierHelmet"
    },
    "2572": {
        "botName": "T7_HEAD_PLATE_SET1@3",
        "humanName": "Grandmaster'sSoldierHelmet"
    },
    "2573": {
        "botName": "T8_HEAD_PLATE_SET1",
        "humanName": "Elder'sSoldierHelmet"
    },
    "2574": {
        "botName": "T8_HEAD_PLATE_SET1@1",
        "humanName": "Elder'sSoldierHelmet"
    },
    "2575": {
        "botName": "T8_HEAD_PLATE_SET1@2",
        "humanName": "Elder'sSoldierHelmet"
    },
    "2576": {
        "botName": "T8_HEAD_PLATE_SET1@3",
        "humanName": "Elder'sSoldierHelmet"
    },
    "2577": {
        "botName": "T2_ARMOR_PLATE_SET1",
        "humanName": "Novice'sSoldierArmor"
    },
    "2578": {
        "botName": "T3_ARMOR_PLATE_SET1",
        "humanName": "Journeyman'sSoldierArmor"
    },
    "2579": {
        "botName": "T4_ARMOR_PLATE_SET1",
        "humanName": "Adept'sSoldierArmor"
    },
    "2580": {
        "botName": "T4_ARMOR_PLATE_SET1@1",
        "humanName": "Adept'sSoldierArmor"
    },
    "2581": {
        "botName": "T4_ARMOR_PLATE_SET1@2",
        "humanName": "Adept'sSoldierArmor"
    },
    "2582": {
        "botName": "T4_ARMOR_PLATE_SET1@3",
        "humanName": "Adept'sSoldierArmor"
    },
    "2583": {
        "botName": "T5_ARMOR_PLATE_SET1",
        "humanName": "Expert'sSoldierArmor"
    },
    "2584": {
        "botName": "T5_ARMOR_PLATE_SET1@1",
        "humanName": "Expert'sSoldierArmor"
    },
    "2585": {
        "botName": "T5_ARMOR_PLATE_SET1@2",
        "humanName": "Expert'sSoldierArmor"
    },
    "2586": {
        "botName": "T5_ARMOR_PLATE_SET1@3",
        "humanName": "Expert'sSoldierArmor"
    },
    "2587": {
        "botName": "T6_ARMOR_PLATE_SET1",
        "humanName": "Master'sSoldierArmor"
    },
    "2588": {
        "botName": "T6_ARMOR_PLATE_SET1@1",
        "humanName": "Master'sSoldierArmor"
    },
    "2589": {
        "botName": "T6_ARMOR_PLATE_SET1@2",
        "humanName": "Master'sSoldierArmor"
    },
    "2590": {
        "botName": "T6_ARMOR_PLATE_SET1@3",
        "humanName": "Master'sSoldierArmor"
    },
    "2591": {
        "botName": "T7_ARMOR_PLATE_SET1",
        "humanName": "Grandmaster'sSoldierArmor"
    },
    "2592": {
        "botName": "T7_ARMOR_PLATE_SET1@1",
        "humanName": "Grandmaster'sSoldierArmor"
    },
    "2593": {
        "botName": "T7_ARMOR_PLATE_SET1@2",
        "humanName": "Grandmaster'sSoldierArmor"
    },
    "2594": {
        "botName": "T7_ARMOR_PLATE_SET1@3",
        "humanName": "Grandmaster'sSoldierArmor"
    },
    "2595": {
        "botName": "T8_ARMOR_PLATE_SET1",
        "humanName": "Elder'sSoldierArmor"
    },
    "2596": {
        "botName": "T8_ARMOR_PLATE_SET1@1",
        "humanName": "Elder'sSoldierArmor"
    },
    "2597": {
        "botName": "T8_ARMOR_PLATE_SET1@2",
        "humanName": "Elder'sSoldierArmor"
    },
    "2598": {
        "botName": "T8_ARMOR_PLATE_SET1@3",
        "humanName": "Elder'sSoldierArmor"
    },
    "2599": {
        "botName": "T2_SHOES_PLATE_SET1",
        "humanName": "Novice'sSoldierBoots"
    },
    "2600": {
        "botName": "T3_SHOES_PLATE_SET1",
        "humanName": "Journeyman'sSoldierBoots"
    },
    "2601": {
        "botName": "T4_SHOES_PLATE_SET1",
        "humanName": "Adept'sSoldierBoots"
    },
    "2602": {
        "botName": "T4_SHOES_PLATE_SET1@1",
        "humanName": "Adept'sSoldierBoots"
    },
    "2603": {
        "botName": "T4_SHOES_PLATE_SET1@2",
        "humanName": "Adept'sSoldierBoots"
    },
    "2604": {
        "botName": "T4_SHOES_PLATE_SET1@3",
        "humanName": "Adept'sSoldierBoots"
    },
    "2605": {
        "botName": "T5_SHOES_PLATE_SET1",
        "humanName": "Expert'sSoldierBoots"
    },
    "2606": {
        "botName": "T5_SHOES_PLATE_SET1@1",
        "humanName": "Expert'sSoldierBoots"
    },
    "2607": {
        "botName": "T5_SHOES_PLATE_SET1@2",
        "humanName": "Expert'sSoldierBoots"
    },
    "2608": {
        "botName": "T5_SHOES_PLATE_SET1@3",
        "humanName": "Expert'sSoldierBoots"
    },
    "2609": {
        "botName": "T6_SHOES_PLATE_SET1",
        "humanName": "Master'sSoldierBoots"
    },
    "2610": {
        "botName": "T6_SHOES_PLATE_SET1@1",
        "humanName": "Master'sSoldierBoots"
    },
    "2611": {
        "botName": "T6_SHOES_PLATE_SET1@2",
        "humanName": "Master'sSoldierBoots"
    },
    "2612": {
        "botName": "T6_SHOES_PLATE_SET1@3",
        "humanName": "Master'sSoldierBoots"
    },
    "2613": {
        "botName": "T7_SHOES_PLATE_SET1",
        "humanName": "Grandmaster'sSoldierBoots"
    },
    "2614": {
        "botName": "T7_SHOES_PLATE_SET1@1",
        "humanName": "Grandmaster'sSoldierBoots"
    },
    "2615": {
        "botName": "T7_SHOES_PLATE_SET1@2",
        "humanName": "Grandmaster'sSoldierBoots"
    },
    "2616": {
        "botName": "T7_SHOES_PLATE_SET1@3",
        "humanName": "Grandmaster'sSoldierBoots"
    },
    "2617": {
        "botName": "T8_SHOES_PLATE_SET1",
        "humanName": "Elder'sSoldierBoots"
    },
    "2618": {
        "botName": "T8_SHOES_PLATE_SET1@1",
        "humanName": "Elder'sSoldierBoots"
    },
    "2619": {
        "botName": "T8_SHOES_PLATE_SET1@2",
        "humanName": "Elder'sSoldierBoots"
    },
    "2620": {
        "botName": "T8_SHOES_PLATE_SET1@3",
        "humanName": "Elder'sSoldierBoots"
    },
    "2621": {
        "botName": "T4_HEAD_PLATE_SET2",
        "humanName": "Adept'sKnightHelmet"
    },
    "2622": {
        "botName": "T4_HEAD_PLATE_SET2@1",
        "humanName": "Adept'sKnightHelmet"
    },
    "2623": {
        "botName": "T4_HEAD_PLATE_SET2@2",
        "humanName": "Adept'sKnightHelmet"
    },
    "2624": {
        "botName": "T4_HEAD_PLATE_SET2@3",
        "humanName": "Adept'sKnightHelmet"
    },
    "2625": {
        "botName": "T5_HEAD_PLATE_SET2",
        "humanName": "Expert'sKnightHelmet"
    },
    "2626": {
        "botName": "T5_HEAD_PLATE_SET2@1",
        "humanName": "Expert'sKnightHelmet"
    },
    "2627": {
        "botName": "T5_HEAD_PLATE_SET2@2",
        "humanName": "Expert'sKnightHelmet"
    },
    "2628": {
        "botName": "T5_HEAD_PLATE_SET2@3",
        "humanName": "Expert'sKnightHelmet"
    },
    "2629": {
        "botName": "T6_HEAD_PLATE_SET2",
        "humanName": "Master'sKnightHelmet"
    },
    "2630": {
        "botName": "T6_HEAD_PLATE_SET2@1",
        "humanName": "Master'sKnightHelmet"
    },
    "2631": {
        "botName": "T6_HEAD_PLATE_SET2@2",
        "humanName": "Master'sKnightHelmet"
    },
    "2632": {
        "botName": "T6_HEAD_PLATE_SET2@3",
        "humanName": "Master'sKnightHelmet"
    },
    "2633": {
        "botName": "T7_HEAD_PLATE_SET2",
        "humanName": "Grandmaster'sKnightHelmet"
    },
    "2634": {
        "botName": "T7_HEAD_PLATE_SET2@1",
        "humanName": "Grandmaster'sKnightHelmet"
    },
    "2635": {
        "botName": "T7_HEAD_PLATE_SET2@2",
        "humanName": "Grandmaster'sKnightHelmet"
    },
    "2636": {
        "botName": "T7_HEAD_PLATE_SET2@3",
        "humanName": "Grandmaster'sKnightHelmet"
    },
    "2637": {
        "botName": "T8_HEAD_PLATE_SET2",
        "humanName": "Elder'sKnightHelmet"
    },
    "2638": {
        "botName": "T8_HEAD_PLATE_SET2@1",
        "humanName": "Elder'sKnightHelmet"
    },
    "2639": {
        "botName": "T8_HEAD_PLATE_SET2@2",
        "humanName": "Elder'sKnightHelmet"
    },
    "2640": {
        "botName": "T8_HEAD_PLATE_SET2@3",
        "humanName": "Elder'sKnightHelmet"
    },
    "2641": {
        "botName": "T4_ARMOR_PLATE_SET2",
        "humanName": "Adept'sKnightArmor"
    },
    "2642": {
        "botName": "T4_ARMOR_PLATE_SET2@1",
        "humanName": "Adept'sKnightArmor"
    },
    "2643": {
        "botName": "T4_ARMOR_PLATE_SET2@2",
        "humanName": "Adept'sKnightArmor"
    },
    "2644": {
        "botName": "T4_ARMOR_PLATE_SET2@3",
        "humanName": "Adept'sKnightArmor"
    },
    "2645": {
        "botName": "T5_ARMOR_PLATE_SET2",
        "humanName": "Expert'sKnightArmor"
    },
    "2646": {
        "botName": "T5_ARMOR_PLATE_SET2@1",
        "humanName": "Expert'sKnightArmor"
    },
    "2647": {
        "botName": "T5_ARMOR_PLATE_SET2@2",
        "humanName": "Expert'sKnightArmor"
    },
    "2648": {
        "botName": "T5_ARMOR_PLATE_SET2@3",
        "humanName": "Expert'sKnightArmor"
    },
    "2649": {
        "botName": "T6_ARMOR_PLATE_SET2",
        "humanName": "Master'sKnightArmor"
    },
    "2650": {
        "botName": "T6_ARMOR_PLATE_SET2@1",
        "humanName": "Master'sKnightArmor"
    },
    "2651": {
        "botName": "T6_ARMOR_PLATE_SET2@2",
        "humanName": "Master'sKnightArmor"
    },
    "2652": {
        "botName": "T6_ARMOR_PLATE_SET2@3",
        "humanName": "Master'sKnightArmor"
    },
    "2653": {
        "botName": "T7_ARMOR_PLATE_SET2",
        "humanName": "Grandmaster'sKnightArmor"
    },
    "2654": {
        "botName": "T7_ARMOR_PLATE_SET2@1",
        "humanName": "Grandmaster'sKnightArmor"
    },
    "2655": {
        "botName": "T7_ARMOR_PLATE_SET2@2",
        "humanName": "Grandmaster'sKnightArmor"
    },
    "2656": {
        "botName": "T7_ARMOR_PLATE_SET2@3",
        "humanName": "Grandmaster'sKnightArmor"
    },
    "2657": {
        "botName": "T8_ARMOR_PLATE_SET2",
        "humanName": "Elder'sKnightArmor"
    },
    "2658": {
        "botName": "T8_ARMOR_PLATE_SET2@1",
        "humanName": "Elder'sKnightArmor"
    },
    "2659": {
        "botName": "T8_ARMOR_PLATE_SET2@2",
        "humanName": "Elder'sKnightArmor"
    },
    "2660": {
        "botName": "T8_ARMOR_PLATE_SET2@3",
        "humanName": "Elder'sKnightArmor"
    },
    "2661": {
        "botName": "T4_SHOES_PLATE_SET2",
        "humanName": "Adept'sKnightBoots"
    },
    "2662": {
        "botName": "T4_SHOES_PLATE_SET2@1",
        "humanName": "Adept'sKnightBoots"
    },
    "2663": {
        "botName": "T4_SHOES_PLATE_SET2@2",
        "humanName": "Adept'sKnightBoots"
    },
    "2664": {
        "botName": "T4_SHOES_PLATE_SET2@3",
        "humanName": "Adept'sKnightBoots"
    },
    "2665": {
        "botName": "T5_SHOES_PLATE_SET2",
        "humanName": "Expert'sKnightBoots"
    },
    "2666": {
        "botName": "T5_SHOES_PLATE_SET2@1",
        "humanName": "Expert'sKnightBoots"
    },
    "2667": {
        "botName": "T5_SHOES_PLATE_SET2@2",
        "humanName": "Expert'sKnightBoots"
    },
    "2668": {
        "botName": "T5_SHOES_PLATE_SET2@3",
        "humanName": "Expert'sKnightBoots"
    },
    "2669": {
        "botName": "T6_SHOES_PLATE_SET2",
        "humanName": "Master'sKnightBoots"
    },
    "2670": {
        "botName": "T6_SHOES_PLATE_SET2@1",
        "humanName": "Master'sKnightBoots"
    },
    "2671": {
        "botName": "T6_SHOES_PLATE_SET2@2",
        "humanName": "Master'sKnightBoots"
    },
    "2672": {
        "botName": "T6_SHOES_PLATE_SET2@3",
        "humanName": "Master'sKnightBoots"
    },
    "2673": {
        "botName": "T7_SHOES_PLATE_SET2",
        "humanName": "Grandmaster'sKnightBoots"
    },
    "2674": {
        "botName": "T7_SHOES_PLATE_SET2@1",
        "humanName": "Grandmaster'sKnightBoots"
    },
    "2675": {
        "botName": "T7_SHOES_PLATE_SET2@2",
        "humanName": "Grandmaster'sKnightBoots"
    },
    "2676": {
        "botName": "T7_SHOES_PLATE_SET2@3",
        "humanName": "Grandmaster'sKnightBoots"
    },
    "2677": {
        "botName": "T8_SHOES_PLATE_SET2",
        "humanName": "Elder'sKnightBoots"
    },
    "2678": {
        "botName": "T8_SHOES_PLATE_SET2@1",
        "humanName": "Elder'sKnightBoots"
    },
    "2679": {
        "botName": "T8_SHOES_PLATE_SET2@2",
        "humanName": "Elder'sKnightBoots"
    },
    "2680": {
        "botName": "T8_SHOES_PLATE_SET2@3",
        "humanName": "Elder'sKnightBoots"
    },
    "2681": {
        "botName": "T4_HEAD_PLATE_SET3",
        "humanName": "Adept'sGuardianHelmet"
    },
    "2682": {
        "botName": "T4_HEAD_PLATE_SET3@1",
        "humanName": "Adept'sGuardianHelmet"
    },
    "2683": {
        "botName": "T4_HEAD_PLATE_SET3@2",
        "humanName": "Adept'sGuardianHelmet"
    },
    "2684": {
        "botName": "T4_HEAD_PLATE_SET3@3",
        "humanName": "Adept'sGuardianHelmet"
    },
    "2685": {
        "botName": "T5_HEAD_PLATE_SET3",
        "humanName": "Expert'sGuardianHelmet"
    },
    "2686": {
        "botName": "T5_HEAD_PLATE_SET3@1",
        "humanName": "Expert'sGuardianHelmet"
    },
    "2687": {
        "botName": "T5_HEAD_PLATE_SET3@2",
        "humanName": "Expert'sGuardianHelmet"
    },
    "2688": {
        "botName": "T5_HEAD_PLATE_SET3@3",
        "humanName": "Expert'sGuardianHelmet"
    },
    "2689": {
        "botName": "T6_HEAD_PLATE_SET3",
        "humanName": "Master'sGuardianHelmet"
    },
    "2690": {
        "botName": "T6_HEAD_PLATE_SET3@1",
        "humanName": "Master'sGuardianHelmet"
    },
    "2691": {
        "botName": "T6_HEAD_PLATE_SET3@2",
        "humanName": "Master'sGuardianHelmet"
    },
    "2692": {
        "botName": "T6_HEAD_PLATE_SET3@3",
        "humanName": "Master'sGuardianHelmet"
    },
    "2693": {
        "botName": "T7_HEAD_PLATE_SET3",
        "humanName": "Grandmaster'sGuardianHelmet"
    },
    "2694": {
        "botName": "T7_HEAD_PLATE_SET3@1",
        "humanName": "Grandmaster'sGuardianHelmet"
    },
    "2695": {
        "botName": "T7_HEAD_PLATE_SET3@2",
        "humanName": "Grandmaster'sGuardianHelmet"
    },
    "2696": {
        "botName": "T7_HEAD_PLATE_SET3@3",
        "humanName": "Grandmaster'sGuardianHelmet"
    },
    "2697": {
        "botName": "T8_HEAD_PLATE_SET3",
        "humanName": "Elder'sGuardianHelmet"
    },
    "2698": {
        "botName": "T8_HEAD_PLATE_SET3@1",
        "humanName": "Elder'sGuardianHelmet"
    },
    "2699": {
        "botName": "T8_HEAD_PLATE_SET3@2",
        "humanName": "Elder'sGuardianHelmet"
    },
    "2700": {
        "botName": "T8_HEAD_PLATE_SET3@3",
        "humanName": "Elder'sGuardianHelmet"
    },
    "2701": {
        "botName": "T4_ARMOR_PLATE_SET3",
        "humanName": "Adept'sGuardianArmor"
    },
    "2702": {
        "botName": "T4_ARMOR_PLATE_SET3@1",
        "humanName": "Adept'sGuardianArmor"
    },
    "2703": {
        "botName": "T4_ARMOR_PLATE_SET3@2",
        "humanName": "Adept'sGuardianArmor"
    },
    "2704": {
        "botName": "T4_ARMOR_PLATE_SET3@3",
        "humanName": "Adept'sGuardianArmor"
    },
    "2705": {
        "botName": "T5_ARMOR_PLATE_SET3",
        "humanName": "Expert'sGuardianArmor"
    },
    "2706": {
        "botName": "T5_ARMOR_PLATE_SET3@1",
        "humanName": "Expert'sGuardianArmor"
    },
    "2707": {
        "botName": "T5_ARMOR_PLATE_SET3@2",
        "humanName": "Expert'sGuardianArmor"
    },
    "2708": {
        "botName": "T5_ARMOR_PLATE_SET3@3",
        "humanName": "Expert'sGuardianArmor"
    },
    "2709": {
        "botName": "T6_ARMOR_PLATE_SET3",
        "humanName": "Master'sGuardianArmor"
    },
    "2710": {
        "botName": "T6_ARMOR_PLATE_SET3@1",
        "humanName": "Master'sGuardianArmor"
    },
    "2711": {
        "botName": "T6_ARMOR_PLATE_SET3@2",
        "humanName": "Master'sGuardianArmor"
    },
    "2712": {
        "botName": "T6_ARMOR_PLATE_SET3@3",
        "humanName": "Master'sGuardianArmor"
    },
    "2713": {
        "botName": "T7_ARMOR_PLATE_SET3",
        "humanName": "Grandmaster'sGuardianArmor"
    },
    "2714": {
        "botName": "T7_ARMOR_PLATE_SET3@1",
        "humanName": "Grandmaster'sGuardianArmor"
    },
    "2715": {
        "botName": "T7_ARMOR_PLATE_SET3@2",
        "humanName": "Grandmaster'sGuardianArmor"
    },
    "2716": {
        "botName": "T7_ARMOR_PLATE_SET3@3",
        "humanName": "Grandmaster'sGuardianArmor"
    },
    "2717": {
        "botName": "T8_ARMOR_PLATE_SET3",
        "humanName": "Elder'sGuardianArmor"
    },
    "2718": {
        "botName": "T8_ARMOR_PLATE_SET3@1",
        "humanName": "Elder'sGuardianArmor"
    },
    "2719": {
        "botName": "T8_ARMOR_PLATE_SET3@2",
        "humanName": "Elder'sGuardianArmor"
    },
    "2720": {
        "botName": "T8_ARMOR_PLATE_SET3@3",
        "humanName": "Elder'sGuardianArmor"
    },
    "2721": {
        "botName": "T4_SHOES_PLATE_SET3",
        "humanName": "Adept'sGuardianBoots"
    },
    "2722": {
        "botName": "T4_SHOES_PLATE_SET3@1",
        "humanName": "Adept'sGuardianBoots"
    },
    "2723": {
        "botName": "T4_SHOES_PLATE_SET3@2",
        "humanName": "Adept'sGuardianBoots"
    },
    "2724": {
        "botName": "T4_SHOES_PLATE_SET3@3",
        "humanName": "Adept'sGuardianBoots"
    },
    "2725": {
        "botName": "T5_SHOES_PLATE_SET3",
        "humanName": "Expert'sGuardianBoots"
    },
    "2726": {
        "botName": "T5_SHOES_PLATE_SET3@1",
        "humanName": "Expert'sGuardianBoots"
    },
    "2727": {
        "botName": "T5_SHOES_PLATE_SET3@2",
        "humanName": "Expert'sGuardianBoots"
    },
    "2728": {
        "botName": "T5_SHOES_PLATE_SET3@3",
        "humanName": "Expert'sGuardianBoots"
    },
    "2729": {
        "botName": "T6_SHOES_PLATE_SET3",
        "humanName": "Master'sGuardianBoots"
    },
    "2730": {
        "botName": "T6_SHOES_PLATE_SET3@1",
        "humanName": "Master'sGuardianBoots"
    },
    "2731": {
        "botName": "T6_SHOES_PLATE_SET3@2",
        "humanName": "Master'sGuardianBoots"
    },
    "2732": {
        "botName": "T6_SHOES_PLATE_SET3@3",
        "humanName": "Master'sGuardianBoots"
    },
    "2733": {
        "botName": "T7_SHOES_PLATE_SET3",
        "humanName": "Grandmaster'sGuardianBoots"
    },
    "2734": {
        "botName": "T7_SHOES_PLATE_SET3@1",
        "humanName": "Grandmaster'sGuardianBoots"
    },
    "2735": {
        "botName": "T7_SHOES_PLATE_SET3@2",
        "humanName": "Grandmaster'sGuardianBoots"
    },
    "2736": {
        "botName": "T7_SHOES_PLATE_SET3@3",
        "humanName": "Grandmaster'sGuardianBoots"
    },
    "2737": {
        "botName": "T8_SHOES_PLATE_SET3",
        "humanName": "Elder'sGuardianBoots"
    },
    "2738": {
        "botName": "T8_SHOES_PLATE_SET3@1",
        "humanName": "Elder'sGuardianBoots"
    },
    "2739": {
        "botName": "T8_SHOES_PLATE_SET3@2",
        "humanName": "Elder'sGuardianBoots"
    },
    "2740": {
        "botName": "T8_SHOES_PLATE_SET3@3",
        "humanName": "Elder'sGuardianBoots"
    },
    "2741": {
        "botName": "T4_HEAD_PLATE_UNDEAD",
        "humanName": "Adept'sGraveguardHelmet"
    },
    "2742": {
        "botName": "T4_HEAD_PLATE_UNDEAD@1",
        "humanName": "Adept'sGraveguardHelmet"
    },
    "2743": {
        "botName": "T4_HEAD_PLATE_UNDEAD@2",
        "humanName": "Adept'sGraveguardHelmet"
    },
    "2744": {
        "botName": "T4_HEAD_PLATE_UNDEAD@3",
        "humanName": "Adept'sGraveguardHelmet"
    },
    "2745": {
        "botName": "T5_HEAD_PLATE_UNDEAD",
        "humanName": "Expert'sGraveguardHelmet"
    },
    "2746": {
        "botName": "T5_HEAD_PLATE_UNDEAD@1",
        "humanName": "Expert'sGraveguardHelmet"
    },
    "2747": {
        "botName": "T5_HEAD_PLATE_UNDEAD@2",
        "humanName": "Expert'sGraveguardHelmet"
    },
    "2748": {
        "botName": "T5_HEAD_PLATE_UNDEAD@3",
        "humanName": "Expert'sGraveguardHelmet"
    },
    "2749": {
        "botName": "T6_HEAD_PLATE_UNDEAD",
        "humanName": "Master'sGraveguardHelmet"
    },
    "2750": {
        "botName": "T6_HEAD_PLATE_UNDEAD@1",
        "humanName": "Master'sGraveguardHelmet"
    },
    "2751": {
        "botName": "T6_HEAD_PLATE_UNDEAD@2",
        "humanName": "Master'sGraveguardHelmet"
    },
    "2752": {
        "botName": "T6_HEAD_PLATE_UNDEAD@3",
        "humanName": "Master'sGraveguardHelmet"
    },
    "2753": {
        "botName": "T7_HEAD_PLATE_UNDEAD",
        "humanName": "Grandmaster'sGraveguardHelmet"
    },
    "2754": {
        "botName": "T7_HEAD_PLATE_UNDEAD@1",
        "humanName": "Grandmaster'sGraveguardHelmet"
    },
    "2755": {
        "botName": "T7_HEAD_PLATE_UNDEAD@2",
        "humanName": "Grandmaster'sGraveguardHelmet"
    },
    "2756": {
        "botName": "T7_HEAD_PLATE_UNDEAD@3",
        "humanName": "Grandmaster'sGraveguardHelmet"
    },
    "2757": {
        "botName": "T8_HEAD_PLATE_UNDEAD",
        "humanName": "Elder'sGraveguardHelmet"
    },
    "2758": {
        "botName": "T8_HEAD_PLATE_UNDEAD@1",
        "humanName": "Elder'sGraveguardHelmet"
    },
    "2759": {
        "botName": "T8_HEAD_PLATE_UNDEAD@2",
        "humanName": "Elder'sGraveguardHelmet"
    },
    "2760": {
        "botName": "T8_HEAD_PLATE_UNDEAD@3",
        "humanName": "Elder'sGraveguardHelmet"
    },
    "2761": {
        "botName": "T4_ARMOR_PLATE_UNDEAD",
        "humanName": "Adept'sGraveguardArmor"
    },
    "2762": {
        "botName": "T4_ARMOR_PLATE_UNDEAD@1",
        "humanName": "Adept'sGraveguardArmor"
    },
    "2763": {
        "botName": "T4_ARMOR_PLATE_UNDEAD@2",
        "humanName": "Adept'sGraveguardArmor"
    },
    "2764": {
        "botName": "T4_ARMOR_PLATE_UNDEAD@3",
        "humanName": "Adept'sGraveguardArmor"
    },
    "2765": {
        "botName": "T5_ARMOR_PLATE_UNDEAD",
        "humanName": "Expert'sGraveguardArmor"
    },
    "2766": {
        "botName": "T5_ARMOR_PLATE_UNDEAD@1",
        "humanName": "Expert'sGraveguardArmor"
    },
    "2767": {
        "botName": "T5_ARMOR_PLATE_UNDEAD@2",
        "humanName": "Expert'sGraveguardArmor"
    },
    "2768": {
        "botName": "T5_ARMOR_PLATE_UNDEAD@3",
        "humanName": "Expert'sGraveguardArmor"
    },
    "2769": {
        "botName": "T6_ARMOR_PLATE_UNDEAD",
        "humanName": "Master'sGraveguardArmor"
    },
    "2770": {
        "botName": "T6_ARMOR_PLATE_UNDEAD@1",
        "humanName": "Master'sGraveguardArmor"
    },
    "2771": {
        "botName": "T6_ARMOR_PLATE_UNDEAD@2",
        "humanName": "Master'sGraveguardArmor"
    },
    "2772": {
        "botName": "T6_ARMOR_PLATE_UNDEAD@3",
        "humanName": "Master'sGraveguardArmor"
    },
    "2773": {
        "botName": "T7_ARMOR_PLATE_UNDEAD",
        "humanName": "Grandmaster'sGraveguardArmor"
    },
    "2774": {
        "botName": "T7_ARMOR_PLATE_UNDEAD@1",
        "humanName": "Grandmaster'sGraveguardArmor"
    },
    "2775": {
        "botName": "T7_ARMOR_PLATE_UNDEAD@2",
        "humanName": "Grandmaster'sGraveguardArmor"
    },
    "2776": {
        "botName": "T7_ARMOR_PLATE_UNDEAD@3",
        "humanName": "Grandmaster'sGraveguardArmor"
    },
    "2777": {
        "botName": "T8_ARMOR_PLATE_UNDEAD",
        "humanName": "Elder'sGraveguardArmor"
    },
    "2778": {
        "botName": "T8_ARMOR_PLATE_UNDEAD@1",
        "humanName": "Elder'sGraveguardArmor"
    },
    "2779": {
        "botName": "T8_ARMOR_PLATE_UNDEAD@2",
        "humanName": "Elder'sGraveguardArmor"
    },
    "2780": {
        "botName": "T8_ARMOR_PLATE_UNDEAD@3",
        "humanName": "Elder'sGraveguardArmor"
    },
    "2781": {
        "botName": "T4_SHOES_PLATE_UNDEAD",
        "humanName": "Adept'sGraveguardBoots"
    },
    "2782": {
        "botName": "T4_SHOES_PLATE_UNDEAD@1",
        "humanName": "Adept'sGraveguardBoots"
    },
    "2783": {
        "botName": "T4_SHOES_PLATE_UNDEAD@2",
        "humanName": "Adept'sGraveguardBoots"
    },
    "2784": {
        "botName": "T4_SHOES_PLATE_UNDEAD@3",
        "humanName": "Adept'sGraveguardBoots"
    },
    "2785": {
        "botName": "T5_SHOES_PLATE_UNDEAD",
        "humanName": "Expert'sGraveguardBoots"
    },
    "2786": {
        "botName": "T5_SHOES_PLATE_UNDEAD@1",
        "humanName": "Expert'sGraveguardBoots"
    },
    "2787": {
        "botName": "T5_SHOES_PLATE_UNDEAD@2",
        "humanName": "Expert'sGraveguardBoots"
    },
    "2788": {
        "botName": "T5_SHOES_PLATE_UNDEAD@3",
        "humanName": "Expert'sGraveguardBoots"
    },
    "2789": {
        "botName": "T6_SHOES_PLATE_UNDEAD",
        "humanName": "Master'sGraveguardBoots"
    },
    "2790": {
        "botName": "T6_SHOES_PLATE_UNDEAD@1",
        "humanName": "Master'sGraveguardBoots"
    },
    "2791": {
        "botName": "T6_SHOES_PLATE_UNDEAD@2",
        "humanName": "Master'sGraveguardBoots"
    },
    "2792": {
        "botName": "T6_SHOES_PLATE_UNDEAD@3",
        "humanName": "Master'sGraveguardBoots"
    },
    "2793": {
        "botName": "T7_SHOES_PLATE_UNDEAD",
        "humanName": "Grandmaster'sGraveguardBoots"
    },
    "2794": {
        "botName": "T7_SHOES_PLATE_UNDEAD@1",
        "humanName": "Grandmaster'sGraveguardBoots"
    },
    "2795": {
        "botName": "T7_SHOES_PLATE_UNDEAD@2",
        "humanName": "Grandmaster'sGraveguardBoots"
    },
    "2796": {
        "botName": "T7_SHOES_PLATE_UNDEAD@3",
        "humanName": "Grandmaster'sGraveguardBoots"
    },
    "2797": {
        "botName": "T8_SHOES_PLATE_UNDEAD",
        "humanName": "Elder'sGraveguardBoots"
    },
    "2798": {
        "botName": "T8_SHOES_PLATE_UNDEAD@1",
        "humanName": "Elder'sGraveguardBoots"
    },
    "2799": {
        "botName": "T8_SHOES_PLATE_UNDEAD@2",
        "humanName": "Elder'sGraveguardBoots"
    },
    "2800": {
        "botName": "T8_SHOES_PLATE_UNDEAD@3",
        "humanName": "Elder'sGraveguardBoots"
    },
    "2801": {
        "botName": "T4_HEAD_PLATE_HELL",
        "humanName": "Adept'sDemonHelmet"
    },
    "2802": {
        "botName": "T4_HEAD_PLATE_HELL@1",
        "humanName": "Adept'sDemonHelmet"
    },
    "2803": {
        "botName": "T4_HEAD_PLATE_HELL@2",
        "humanName": "Adept'sDemonHelmet"
    },
    "2804": {
        "botName": "T4_HEAD_PLATE_HELL@3",
        "humanName": "Adept'sDemonHelmet"
    },
    "2805": {
        "botName": "T5_HEAD_PLATE_HELL",
        "humanName": "Expert'sDemonHelmet"
    },
    "2806": {
        "botName": "T5_HEAD_PLATE_HELL@1",
        "humanName": "Expert'sDemonHelmet"
    },
    "2807": {
        "botName": "T5_HEAD_PLATE_HELL@2",
        "humanName": "Expert'sDemonHelmet"
    },
    "2808": {
        "botName": "T5_HEAD_PLATE_HELL@3",
        "humanName": "Expert'sDemonHelmet"
    },
    "2809": {
        "botName": "T6_HEAD_PLATE_HELL",
        "humanName": "Master'sDemonHelmet"
    },
    "2810": {
        "botName": "T6_HEAD_PLATE_HELL@1",
        "humanName": "Master'sDemonHelmet"
    },
    "2811": {
        "botName": "T6_HEAD_PLATE_HELL@2",
        "humanName": "Master'sDemonHelmet"
    },
    "2812": {
        "botName": "T6_HEAD_PLATE_HELL@3",
        "humanName": "Master'sDemonHelmet"
    },
    "2813": {
        "botName": "T7_HEAD_PLATE_HELL",
        "humanName": "Grandmaster'sDemonHelmet"
    },
    "2814": {
        "botName": "T7_HEAD_PLATE_HELL@1",
        "humanName": "Grandmaster'sDemonHelmet"
    },
    "2815": {
        "botName": "T7_HEAD_PLATE_HELL@2",
        "humanName": "Grandmaster'sDemonHelmet"
    },
    "2816": {
        "botName": "T7_HEAD_PLATE_HELL@3",
        "humanName": "Grandmaster'sDemonHelmet"
    },
    "2817": {
        "botName": "T8_HEAD_PLATE_HELL",
        "humanName": "Elder'sDemonHelmet"
    },
    "2818": {
        "botName": "T8_HEAD_PLATE_HELL@1",
        "humanName": "Elder'sDemonHelmet"
    },
    "2819": {
        "botName": "T8_HEAD_PLATE_HELL@2",
        "humanName": "Elder'sDemonHelmet"
    },
    "2820": {
        "botName": "T8_HEAD_PLATE_HELL@3",
        "humanName": "Elder'sDemonHelmet"
    },
    "2821": {
        "botName": "T4_ARMOR_PLATE_HELL",
        "humanName": "Adept'sDemonArmor"
    },
    "2822": {
        "botName": "T4_ARMOR_PLATE_HELL@1",
        "humanName": "Adept'sDemonArmor"
    },
    "2823": {
        "botName": "T4_ARMOR_PLATE_HELL@2",
        "humanName": "Adept'sDemonArmor"
    },
    "2824": {
        "botName": "T4_ARMOR_PLATE_HELL@3",
        "humanName": "Adept'sDemonArmor"
    },
    "2825": {
        "botName": "T5_ARMOR_PLATE_HELL",
        "humanName": "Expert'sDemonArmor"
    },
    "2826": {
        "botName": "T5_ARMOR_PLATE_HELL@1",
        "humanName": "Expert'sDemonArmor"
    },
    "2827": {
        "botName": "T5_ARMOR_PLATE_HELL@2",
        "humanName": "Expert'sDemonArmor"
    },
    "2828": {
        "botName": "T5_ARMOR_PLATE_HELL@3",
        "humanName": "Expert'sDemonArmor"
    },
    "2829": {
        "botName": "T6_ARMOR_PLATE_HELL",
        "humanName": "Master'sDemonArmor"
    },
    "2830": {
        "botName": "T6_ARMOR_PLATE_HELL@1",
        "humanName": "Master'sDemonArmor"
    },
    "2831": {
        "botName": "T6_ARMOR_PLATE_HELL@2",
        "humanName": "Master'sDemonArmor"
    },
    "2832": {
        "botName": "T6_ARMOR_PLATE_HELL@3",
        "humanName": "Master'sDemonArmor"
    },
    "2833": {
        "botName": "T7_ARMOR_PLATE_HELL",
        "humanName": "Grandmaster'sDemonArmor"
    },
    "2834": {
        "botName": "T7_ARMOR_PLATE_HELL@1",
        "humanName": "Grandmaster'sDemonArmor"
    },
    "2835": {
        "botName": "T7_ARMOR_PLATE_HELL@2",
        "humanName": "Grandmaster'sDemonArmor"
    },
    "2836": {
        "botName": "T7_ARMOR_PLATE_HELL@3",
        "humanName": "Grandmaster'sDemonArmor"
    },
    "2837": {
        "botName": "T8_ARMOR_PLATE_HELL",
        "humanName": "Elder'sDemonArmor"
    },
    "2838": {
        "botName": "T8_ARMOR_PLATE_HELL@1",
        "humanName": "Elder'sDemonArmor"
    },
    "2839": {
        "botName": "T8_ARMOR_PLATE_HELL@2",
        "humanName": "Elder'sDemonArmor"
    },
    "2840": {
        "botName": "T8_ARMOR_PLATE_HELL@3",
        "humanName": "Elder'sDemonArmor"
    },
    "2841": {
        "botName": "T4_SHOES_PLATE_HELL",
        "humanName": "Adept'sDemonBoots"
    },
    "2842": {
        "botName": "T4_SHOES_PLATE_HELL@1",
        "humanName": "Adept'sDemonBoots"
    },
    "2843": {
        "botName": "T4_SHOES_PLATE_HELL@2",
        "humanName": "Adept'sDemonBoots"
    },
    "2844": {
        "botName": "T4_SHOES_PLATE_HELL@3",
        "humanName": "Adept'sDemonBoots"
    },
    "2845": {
        "botName": "T5_SHOES_PLATE_HELL",
        "humanName": "Expert'sDemonBoots"
    },
    "2846": {
        "botName": "T5_SHOES_PLATE_HELL@1",
        "humanName": "Expert'sDemonBoots"
    },
    "2847": {
        "botName": "T5_SHOES_PLATE_HELL@2",
        "humanName": "Expert'sDemonBoots"
    },
    "2848": {
        "botName": "T5_SHOES_PLATE_HELL@3",
        "humanName": "Expert'sDemonBoots"
    },
    "2849": {
        "botName": "T6_SHOES_PLATE_HELL",
        "humanName": "Master'sDemonBoots"
    },
    "2850": {
        "botName": "T6_SHOES_PLATE_HELL@1",
        "humanName": "Master'sDemonBoots"
    },
    "2851": {
        "botName": "T6_SHOES_PLATE_HELL@2",
        "humanName": "Master'sDemonBoots"
    },
    "2852": {
        "botName": "T6_SHOES_PLATE_HELL@3",
        "humanName": "Master'sDemonBoots"
    },
    "2853": {
        "botName": "T7_SHOES_PLATE_HELL",
        "humanName": "Grandmaster'sDemonBoots"
    },
    "2854": {
        "botName": "T7_SHOES_PLATE_HELL@1",
        "humanName": "Grandmaster'sDemonBoots"
    },
    "2855": {
        "botName": "T7_SHOES_PLATE_HELL@2",
        "humanName": "Grandmaster'sDemonBoots"
    },
    "2856": {
        "botName": "T7_SHOES_PLATE_HELL@3",
        "humanName": "Grandmaster'sDemonBoots"
    },
    "2857": {
        "botName": "T8_SHOES_PLATE_HELL",
        "humanName": "Elder'sDemonBoots"
    },
    "2858": {
        "botName": "T8_SHOES_PLATE_HELL@1",
        "humanName": "Elder'sDemonBoots"
    },
    "2859": {
        "botName": "T8_SHOES_PLATE_HELL@2",
        "humanName": "Elder'sDemonBoots"
    },
    "2860": {
        "botName": "T8_SHOES_PLATE_HELL@3",
        "humanName": "Elder'sDemonBoots"
    },
    "2861": {
        "botName": "T4_HEAD_PLATE_KEEPER",
        "humanName": "Adept'sJudicatorHelmet"
    },
    "2862": {
        "botName": "T4_HEAD_PLATE_KEEPER@1",
        "humanName": "Adept'sJudicatorHelmet"
    },
    "2863": {
        "botName": "T4_HEAD_PLATE_KEEPER@2",
        "humanName": "Adept'sJudicatorHelmet"
    },
    "2864": {
        "botName": "T4_HEAD_PLATE_KEEPER@3",
        "humanName": "Adept'sJudicatorHelmet"
    },
    "2865": {
        "botName": "T5_HEAD_PLATE_KEEPER",
        "humanName": "Expert'sJudicatorHelmet"
    },
    "2866": {
        "botName": "T5_HEAD_PLATE_KEEPER@1",
        "humanName": "Expert'sJudicatorHelmet"
    },
    "2867": {
        "botName": "T5_HEAD_PLATE_KEEPER@2",
        "humanName": "Expert'sJudicatorHelmet"
    },
    "2868": {
        "botName": "T5_HEAD_PLATE_KEEPER@3",
        "humanName": "Expert'sJudicatorHelmet"
    },
    "2869": {
        "botName": "T6_HEAD_PLATE_KEEPER",
        "humanName": "Master'sJudicatorHelmet"
    },
    "2870": {
        "botName": "T6_HEAD_PLATE_KEEPER@1",
        "humanName": "Master'sJudicatorHelmet"
    },
    "2871": {
        "botName": "T6_HEAD_PLATE_KEEPER@2",
        "humanName": "Master'sJudicatorHelmet"
    },
    "2872": {
        "botName": "T6_HEAD_PLATE_KEEPER@3",
        "humanName": "Master'sJudicatorHelmet"
    },
    "2873": {
        "botName": "T7_HEAD_PLATE_KEEPER",
        "humanName": "Grandmaster'sJudicatorHelmet"
    },
    "2874": {
        "botName": "T7_HEAD_PLATE_KEEPER@1",
        "humanName": "Grandmaster'sJudicatorHelmet"
    },
    "2875": {
        "botName": "T7_HEAD_PLATE_KEEPER@2",
        "humanName": "Grandmaster'sJudicatorHelmet"
    },
    "2876": {
        "botName": "T7_HEAD_PLATE_KEEPER@3",
        "humanName": "Grandmaster'sJudicatorHelmet"
    },
    "2877": {
        "botName": "T8_HEAD_PLATE_KEEPER",
        "humanName": "Elder'sJudicatorHelmet"
    },
    "2878": {
        "botName": "T8_HEAD_PLATE_KEEPER@1",
        "humanName": "Elder'sJudicatorHelmet"
    },
    "2879": {
        "botName": "T8_HEAD_PLATE_KEEPER@2",
        "humanName": "Elder'sJudicatorHelmet"
    },
    "2880": {
        "botName": "T8_HEAD_PLATE_KEEPER@3",
        "humanName": "Elder'sJudicatorHelmet"
    },
    "2881": {
        "botName": "T4_ARMOR_PLATE_KEEPER",
        "humanName": "Adept'sJudicatorArmor"
    },
    "2882": {
        "botName": "T4_ARMOR_PLATE_KEEPER@1",
        "humanName": "Adept'sJudicatorArmor"
    },
    "2883": {
        "botName": "T4_ARMOR_PLATE_KEEPER@2",
        "humanName": "Adept'sJudicatorArmor"
    },
    "2884": {
        "botName": "T4_ARMOR_PLATE_KEEPER@3",
        "humanName": "Adept'sJudicatorArmor"
    },
    "2885": {
        "botName": "T5_ARMOR_PLATE_KEEPER",
        "humanName": "Expert'sJudicatorArmor"
    },
    "2886": {
        "botName": "T5_ARMOR_PLATE_KEEPER@1",
        "humanName": "Expert'sJudicatorArmor"
    },
    "2887": {
        "botName": "T5_ARMOR_PLATE_KEEPER@2",
        "humanName": "Expert'sJudicatorArmor"
    },
    "2888": {
        "botName": "T5_ARMOR_PLATE_KEEPER@3",
        "humanName": "Expert'sJudicatorArmor"
    },
    "2889": {
        "botName": "T6_ARMOR_PLATE_KEEPER",
        "humanName": "Master'sJudicatorArmor"
    },
    "2890": {
        "botName": "T6_ARMOR_PLATE_KEEPER@1",
        "humanName": "Master'sJudicatorArmor"
    },
    "2891": {
        "botName": "T6_ARMOR_PLATE_KEEPER@2",
        "humanName": "Master'sJudicatorArmor"
    },
    "2892": {
        "botName": "T6_ARMOR_PLATE_KEEPER@3",
        "humanName": "Master'sJudicatorArmor"
    },
    "2893": {
        "botName": "T7_ARMOR_PLATE_KEEPER",
        "humanName": "Grandmaster'sJudicatorArmor"
    },
    "2894": {
        "botName": "T7_ARMOR_PLATE_KEEPER@1",
        "humanName": "Grandmaster'sJudicatorArmor"
    },
    "2895": {
        "botName": "T7_ARMOR_PLATE_KEEPER@2",
        "humanName": "Grandmaster'sJudicatorArmor"
    },
    "2896": {
        "botName": "T7_ARMOR_PLATE_KEEPER@3",
        "humanName": "Grandmaster'sJudicatorArmor"
    },
    "2897": {
        "botName": "T8_ARMOR_PLATE_KEEPER",
        "humanName": "Elder'sJudicatorArmor"
    },
    "2898": {
        "botName": "T8_ARMOR_PLATE_KEEPER@1",
        "humanName": "Elder'sJudicatorArmor"
    },
    "2899": {
        "botName": "T8_ARMOR_PLATE_KEEPER@2",
        "humanName": "Elder'sJudicatorArmor"
    },
    "2900": {
        "botName": "T8_ARMOR_PLATE_KEEPER@3",
        "humanName": "Elder'sJudicatorArmor"
    },
    "2901": {
        "botName": "T4_SHOES_PLATE_KEEPER",
        "humanName": "Adept'sJudicatorBoots"
    },
    "2902": {
        "botName": "T4_SHOES_PLATE_KEEPER@1",
        "humanName": "Adept'sJudicatorBoots"
    },
    "2903": {
        "botName": "T4_SHOES_PLATE_KEEPER@2",
        "humanName": "Adept'sJudicatorBoots"
    },
    "2904": {
        "botName": "T4_SHOES_PLATE_KEEPER@3",
        "humanName": "Adept'sJudicatorBoots"
    },
    "2905": {
        "botName": "T5_SHOES_PLATE_KEEPER",
        "humanName": "Expert'sJudicatorBoots"
    },
    "2906": {
        "botName": "T5_SHOES_PLATE_KEEPER@1",
        "humanName": "Expert'sJudicatorBoots"
    },
    "2907": {
        "botName": "T5_SHOES_PLATE_KEEPER@2",
        "humanName": "Expert'sJudicatorBoots"
    },
    "2908": {
        "botName": "T5_SHOES_PLATE_KEEPER@3",
        "humanName": "Expert'sJudicatorBoots"
    },
    "2909": {
        "botName": "T6_SHOES_PLATE_KEEPER",
        "humanName": "Master'sJudicatorBoots"
    },
    "2910": {
        "botName": "T6_SHOES_PLATE_KEEPER@1",
        "humanName": "Master'sJudicatorBoots"
    },
    "2911": {
        "botName": "T6_SHOES_PLATE_KEEPER@2",
        "humanName": "Master'sJudicatorBoots"
    },
    "2912": {
        "botName": "T6_SHOES_PLATE_KEEPER@3",
        "humanName": "Master'sJudicatorBoots"
    },
    "2913": {
        "botName": "T7_SHOES_PLATE_KEEPER",
        "humanName": "Grandmaster'sJudicatorBoots"
    },
    "2914": {
        "botName": "T7_SHOES_PLATE_KEEPER@1",
        "humanName": "Grandmaster'sJudicatorBoots"
    },
    "2915": {
        "botName": "T7_SHOES_PLATE_KEEPER@2",
        "humanName": "Grandmaster'sJudicatorBoots"
    },
    "2916": {
        "botName": "T7_SHOES_PLATE_KEEPER@3",
        "humanName": "Grandmaster'sJudicatorBoots"
    },
    "2917": {
        "botName": "T8_SHOES_PLATE_KEEPER",
        "humanName": "Elder'sJudicatorBoots"
    },
    "2918": {
        "botName": "T8_SHOES_PLATE_KEEPER@1",
        "humanName": "Elder'sJudicatorBoots"
    },
    "2919": {
        "botName": "T8_SHOES_PLATE_KEEPER@2",
        "humanName": "Elder'sJudicatorBoots"
    },
    "2920": {
        "botName": "T8_SHOES_PLATE_KEEPER@3",
        "humanName": "Elder'sJudicatorBoots"
    },
    "2921": {
        "botName": "T4_HEAD_PLATE_AVALON",
        "humanName": "Adept'sHelmetofValor"
    },
    "2922": {
        "botName": "T4_HEAD_PLATE_AVALON@1",
        "humanName": "Adept'sHelmetofValor"
    },
    "2923": {
        "botName": "T4_HEAD_PLATE_AVALON@2",
        "humanName": "Adept'sHelmetofValor"
    },
    "2924": {
        "botName": "T4_HEAD_PLATE_AVALON@3",
        "humanName": "Adept'sHelmetofValor"
    },
    "2925": {
        "botName": "T5_HEAD_PLATE_AVALON",
        "humanName": "Expert'sHelmetofValor"
    },
    "2926": {
        "botName": "T5_HEAD_PLATE_AVALON@1",
        "humanName": "Expert'sHelmetofValor"
    },
    "2927": {
        "botName": "T5_HEAD_PLATE_AVALON@2",
        "humanName": "Expert'sHelmetofValor"
    },
    "2928": {
        "botName": "T5_HEAD_PLATE_AVALON@3",
        "humanName": "Expert'sHelmetofValor"
    },
    "2929": {
        "botName": "T6_HEAD_PLATE_AVALON",
        "humanName": "Master'sHelmetofValor"
    },
    "2930": {
        "botName": "T6_HEAD_PLATE_AVALON@1",
        "humanName": "Master'sHelmetofValor"
    },
    "2931": {
        "botName": "T6_HEAD_PLATE_AVALON@2",
        "humanName": "Master'sHelmetofValor"
    },
    "2932": {
        "botName": "T6_HEAD_PLATE_AVALON@3",
        "humanName": "Master'sHelmetofValor"
    },
    "2933": {
        "botName": "T7_HEAD_PLATE_AVALON",
        "humanName": "Grandmaster'sHelmetofValor"
    },
    "2934": {
        "botName": "T7_HEAD_PLATE_AVALON@1",
        "humanName": "Grandmaster'sHelmetofValor"
    },
    "2935": {
        "botName": "T7_HEAD_PLATE_AVALON@2",
        "humanName": "Grandmaster'sHelmetofValor"
    },
    "2936": {
        "botName": "T7_HEAD_PLATE_AVALON@3",
        "humanName": "Grandmaster'sHelmetofValor"
    },
    "2937": {
        "botName": "T8_HEAD_PLATE_AVALON",
        "humanName": "Elder'sHelmetofValor"
    },
    "2938": {
        "botName": "T8_HEAD_PLATE_AVALON@1",
        "humanName": "Elder'sHelmetofValor"
    },
    "2939": {
        "botName": "T8_HEAD_PLATE_AVALON@2",
        "humanName": "Elder'sHelmetofValor"
    },
    "2940": {
        "botName": "T8_HEAD_PLATE_AVALON@3",
        "humanName": "Elder'sHelmetofValor"
    },
    "2941": {
        "botName": "T4_ARMOR_PLATE_AVALON",
        "humanName": "Adept'sArmorofValor"
    },
    "2942": {
        "botName": "T4_ARMOR_PLATE_AVALON@1",
        "humanName": "Adept'sArmorofValor"
    },
    "2943": {
        "botName": "T4_ARMOR_PLATE_AVALON@2",
        "humanName": "Adept'sArmorofValor"
    },
    "2944": {
        "botName": "T4_ARMOR_PLATE_AVALON@3",
        "humanName": "Adept'sArmorofValor"
    },
    "2945": {
        "botName": "T5_ARMOR_PLATE_AVALON",
        "humanName": "Expert'sArmorofValor"
    },
    "2946": {
        "botName": "T5_ARMOR_PLATE_AVALON@1",
        "humanName": "Expert'sArmorofValor"
    },
    "2947": {
        "botName": "T5_ARMOR_PLATE_AVALON@2",
        "humanName": "Expert'sArmorofValor"
    },
    "2948": {
        "botName": "T5_ARMOR_PLATE_AVALON@3",
        "humanName": "Expert'sArmorofValor"
    },
    "2949": {
        "botName": "T6_ARMOR_PLATE_AVALON",
        "humanName": "Master'sArmorofValor"
    },
    "2950": {
        "botName": "T6_ARMOR_PLATE_AVALON@1",
        "humanName": "Master'sArmorofValor"
    },
    "2951": {
        "botName": "T6_ARMOR_PLATE_AVALON@2",
        "humanName": "Master'sArmorofValor"
    },
    "2952": {
        "botName": "T6_ARMOR_PLATE_AVALON@3",
        "humanName": "Master'sArmorofValor"
    },
    "2953": {
        "botName": "T7_ARMOR_PLATE_AVALON",
        "humanName": "Grandmaster'sArmorofValor"
    },
    "2954": {
        "botName": "T7_ARMOR_PLATE_AVALON@1",
        "humanName": "Grandmaster'sArmorofValor"
    },
    "2955": {
        "botName": "T7_ARMOR_PLATE_AVALON@2",
        "humanName": "Grandmaster'sArmorofValor"
    },
    "2956": {
        "botName": "T7_ARMOR_PLATE_AVALON@3",
        "humanName": "Grandmaster'sArmorofValor"
    },
    "2957": {
        "botName": "T8_ARMOR_PLATE_AVALON",
        "humanName": "Elder'sArmorofValor"
    },
    "2958": {
        "botName": "T8_ARMOR_PLATE_AVALON@1",
        "humanName": "Elder'sArmorofValor"
    },
    "2959": {
        "botName": "T8_ARMOR_PLATE_AVALON@2",
        "humanName": "Elder'sArmorofValor"
    },
    "2960": {
        "botName": "T8_ARMOR_PLATE_AVALON@3",
        "humanName": "Elder'sArmorofValor"
    },
    "2961": {
        "botName": "T4_SHOES_PLATE_AVALON",
        "humanName": "Adept'sBootsofValor"
    },
    "2962": {
        "botName": "T4_SHOES_PLATE_AVALON@1",
        "humanName": "Adept'sBootsofValor"
    },
    "2963": {
        "botName": "T4_SHOES_PLATE_AVALON@2",
        "humanName": "Adept'sBootsofValor"
    },
    "2964": {
        "botName": "T4_SHOES_PLATE_AVALON@3",
        "humanName": "Adept'sBootsofValor"
    },
    "2965": {
        "botName": "T5_SHOES_PLATE_AVALON",
        "humanName": "Expert'sBootsofValor"
    },
    "2966": {
        "botName": "T5_SHOES_PLATE_AVALON@1",
        "humanName": "Expert'sBootsofValor"
    },
    "2967": {
        "botName": "T5_SHOES_PLATE_AVALON@2",
        "humanName": "Expert'sBootsofValor"
    },
    "2968": {
        "botName": "T5_SHOES_PLATE_AVALON@3",
        "humanName": "Expert'sBootsofValor"
    },
    "2969": {
        "botName": "T6_SHOES_PLATE_AVALON",
        "humanName": "Master'sBootsofValor"
    },
    "2970": {
        "botName": "T6_SHOES_PLATE_AVALON@1",
        "humanName": "Master'sBootsofValor"
    },
    "2971": {
        "botName": "T6_SHOES_PLATE_AVALON@2",
        "humanName": "Master'sBootsofValor"
    },
    "2972": {
        "botName": "T6_SHOES_PLATE_AVALON@3",
        "humanName": "Master'sBootsofValor"
    },
    "2973": {
        "botName": "T7_SHOES_PLATE_AVALON",
        "humanName": "Grandmaster'sBootsofValor"
    },
    "2974": {
        "botName": "T7_SHOES_PLATE_AVALON@1",
        "humanName": "Grandmaster'sBootsofValor"
    },
    "2975": {
        "botName": "T7_SHOES_PLATE_AVALON@2",
        "humanName": "Grandmaster'sBootsofValor"
    },
    "2976": {
        "botName": "T7_SHOES_PLATE_AVALON@3",
        "humanName": "Grandmaster'sBootsofValor"
    },
    "2977": {
        "botName": "T8_SHOES_PLATE_AVALON",
        "humanName": "Elder'sBootsofValor"
    },
    "2978": {
        "botName": "T8_SHOES_PLATE_AVALON@1",
        "humanName": "Elder'sBootsofValor"
    },
    "2979": {
        "botName": "T8_SHOES_PLATE_AVALON@2",
        "humanName": "Elder'sBootsofValor"
    },
    "2980": {
        "botName": "T8_SHOES_PLATE_AVALON@3",
        "humanName": "Elder'sBootsofValor"
    },
    "2981": {
        "botName": "T1_HEAD_LEATHER_SET1",
        "humanName": "Beginner'sMercenaryHood"
    },
    "2982": {
        "botName": "T2_HEAD_LEATHER_SET1",
        "humanName": "Novice'sMercenaryHood"
    },
    "2983": {
        "botName": "T3_HEAD_LEATHER_SET1",
        "humanName": "Journeyman'sMercenaryHood"
    },
    "2984": {
        "botName": "T4_HEAD_LEATHER_SET1",
        "humanName": "Adept'sMercenaryHood"
    },
    "2985": {
        "botName": "T4_HEAD_LEATHER_SET1@1",
        "humanName": "Adept'sMercenaryHood"
    },
    "2986": {
        "botName": "T4_HEAD_LEATHER_SET1@2",
        "humanName": "Adept'sMercenaryHood"
    },
    "2987": {
        "botName": "T4_HEAD_LEATHER_SET1@3",
        "humanName": "Adept'sMercenaryHood"
    },
    "2988": {
        "botName": "T5_HEAD_LEATHER_SET1",
        "humanName": "Expert'sMercenaryHood"
    },
    "2989": {
        "botName": "T5_HEAD_LEATHER_SET1@1",
        "humanName": "Expert'sMercenaryHood"
    },
    "2990": {
        "botName": "T5_HEAD_LEATHER_SET1@2",
        "humanName": "Expert'sMercenaryHood"
    },
    "2991": {
        "botName": "T5_HEAD_LEATHER_SET1@3",
        "humanName": "Expert'sMercenaryHood"
    },
    "2992": {
        "botName": "T6_HEAD_LEATHER_SET1",
        "humanName": "Master'sMercenaryHood"
    },
    "2993": {
        "botName": "T6_HEAD_LEATHER_SET1@1",
        "humanName": "Master'sMercenaryHood"
    },
    "2994": {
        "botName": "T6_HEAD_LEATHER_SET1@2",
        "humanName": "Master'sMercenaryHood"
    },
    "2995": {
        "botName": "T6_HEAD_LEATHER_SET1@3",
        "humanName": "Master'sMercenaryHood"
    },
    "2996": {
        "botName": "T7_HEAD_LEATHER_SET1",
        "humanName": "Grandmaster'sMercenaryHood"
    },
    "2997": {
        "botName": "T7_HEAD_LEATHER_SET1@1",
        "humanName": "Grandmaster'sMercenaryHood"
    },
    "2998": {
        "botName": "T7_HEAD_LEATHER_SET1@2",
        "humanName": "Grandmaster'sMercenaryHood"
    },
    "2999": {
        "botName": "T7_HEAD_LEATHER_SET1@3",
        "humanName": "Grandmaster'sMercenaryHood"
    },
    "3000": {
        "botName": "T8_HEAD_LEATHER_SET1",
        "humanName": "Elder'sMercenaryHood"
    },
    "3001": {
        "botName": "T8_HEAD_LEATHER_SET1@1",
        "humanName": "Elder'sMercenaryHood"
    },
    "3002": {
        "botName": "T8_HEAD_LEATHER_SET1@2",
        "humanName": "Elder'sMercenaryHood"
    },
    "3003": {
        "botName": "T8_HEAD_LEATHER_SET1@3",
        "humanName": "Elder'sMercenaryHood"
    },
    "3004": {
        "botName": "T1_ARMOR_LEATHER_SET1",
        "humanName": "Beginner'sMercenaryJacket"
    },
    "3005": {
        "botName": "T2_ARMOR_LEATHER_SET1",
        "humanName": "Novice'sMercenaryJacket"
    },
    "3006": {
        "botName": "T3_ARMOR_LEATHER_SET1",
        "humanName": "Journeyman'sMercenaryJacket"
    },
    "3007": {
        "botName": "T4_ARMOR_LEATHER_SET1",
        "humanName": "Adept'sMercenaryJacket"
    },
    "3008": {
        "botName": "T4_ARMOR_LEATHER_SET1@1",
        "humanName": "Adept'sMercenaryJacket"
    },
    "3009": {
        "botName": "T4_ARMOR_LEATHER_SET1@2",
        "humanName": "Adept'sMercenaryJacket"
    },
    "3010": {
        "botName": "T4_ARMOR_LEATHER_SET1@3",
        "humanName": "Adept'sMercenaryJacket"
    },
    "3011": {
        "botName": "T5_ARMOR_LEATHER_SET1",
        "humanName": "Expert'sMercenaryJacket"
    },
    "3012": {
        "botName": "T5_ARMOR_LEATHER_SET1@1",
        "humanName": "Expert'sMercenaryJacket"
    },
    "3013": {
        "botName": "T5_ARMOR_LEATHER_SET1@2",
        "humanName": "Expert'sMercenaryJacket"
    },
    "3014": {
        "botName": "T5_ARMOR_LEATHER_SET1@3",
        "humanName": "Expert'sMercenaryJacket"
    },
    "3015": {
        "botName": "T6_ARMOR_LEATHER_SET1",
        "humanName": "Master'sMercenaryJacket"
    },
    "3016": {
        "botName": "T6_ARMOR_LEATHER_SET1@1",
        "humanName": "Master'sMercenaryJacket"
    },
    "3017": {
        "botName": "T6_ARMOR_LEATHER_SET1@2",
        "humanName": "Master'sMercenaryJacket"
    },
    "3018": {
        "botName": "T6_ARMOR_LEATHER_SET1@3",
        "humanName": "Master'sMercenaryJacket"
    },
    "3019": {
        "botName": "T7_ARMOR_LEATHER_SET1",
        "humanName": "Grandmaster'sMercenaryJacket"
    },
    "3020": {
        "botName": "T7_ARMOR_LEATHER_SET1@1",
        "humanName": "Grandmaster'sMercenaryJacket"
    },
    "3021": {
        "botName": "T7_ARMOR_LEATHER_SET1@2",
        "humanName": "Grandmaster'sMercenaryJacket"
    },
    "3022": {
        "botName": "T7_ARMOR_LEATHER_SET1@3",
        "humanName": "Grandmaster'sMercenaryJacket"
    },
    "3023": {
        "botName": "T8_ARMOR_LEATHER_SET1",
        "humanName": "Elder'sMercenaryJacket"
    },
    "3024": {
        "botName": "T8_ARMOR_LEATHER_SET1@1",
        "humanName": "Elder'sMercenaryJacket"
    },
    "3025": {
        "botName": "T8_ARMOR_LEATHER_SET1@2",
        "humanName": "Elder'sMercenaryJacket"
    },
    "3026": {
        "botName": "T8_ARMOR_LEATHER_SET1@3",
        "humanName": "Elder'sMercenaryJacket"
    },
    "3027": {
        "botName": "T1_SHOES_LEATHER_SET1",
        "humanName": "Beginner'sMercenaryShoes"
    },
    "3028": {
        "botName": "T2_SHOES_LEATHER_SET1",
        "humanName": "Novice'sMercenaryShoes"
    },
    "3029": {
        "botName": "T3_SHOES_LEATHER_SET1",
        "humanName": "Journeyman'sMercenaryShoes"
    },
    "3030": {
        "botName": "T4_SHOES_LEATHER_SET1",
        "humanName": "Adept'sMercenaryShoes"
    },
    "3031": {
        "botName": "T4_SHOES_LEATHER_SET1@1",
        "humanName": "Adept'sMercenaryShoes"
    },
    "3032": {
        "botName": "T4_SHOES_LEATHER_SET1@2",
        "humanName": "Adept'sMercenaryShoes"
    },
    "3033": {
        "botName": "T4_SHOES_LEATHER_SET1@3",
        "humanName": "Adept'sMercenaryShoes"
    },
    "3034": {
        "botName": "T5_SHOES_LEATHER_SET1",
        "humanName": "Expert'sMercenaryShoes"
    },
    "3035": {
        "botName": "T5_SHOES_LEATHER_SET1@1",
        "humanName": "Expert'sMercenaryShoes"
    },
    "3036": {
        "botName": "T5_SHOES_LEATHER_SET1@2",
        "humanName": "Expert'sMercenaryShoes"
    },
    "3037": {
        "botName": "T5_SHOES_LEATHER_SET1@3",
        "humanName": "Expert'sMercenaryShoes"
    },
    "3038": {
        "botName": "T6_SHOES_LEATHER_SET1",
        "humanName": "Master'sMercenaryShoes"
    },
    "3039": {
        "botName": "T6_SHOES_LEATHER_SET1@1",
        "humanName": "Master'sMercenaryShoes"
    },
    "3040": {
        "botName": "T6_SHOES_LEATHER_SET1@2",
        "humanName": "Master'sMercenaryShoes"
    },
    "3041": {
        "botName": "T6_SHOES_LEATHER_SET1@3",
        "humanName": "Master'sMercenaryShoes"
    },
    "3042": {
        "botName": "T7_SHOES_LEATHER_SET1",
        "humanName": "Grandmaster'sMercenaryShoes"
    },
    "3043": {
        "botName": "T7_SHOES_LEATHER_SET1@1",
        "humanName": "Grandmaster'sMercenaryShoes"
    },
    "3044": {
        "botName": "T7_SHOES_LEATHER_SET1@2",
        "humanName": "Grandmaster'sMercenaryShoes"
    },
    "3045": {
        "botName": "T7_SHOES_LEATHER_SET1@3",
        "humanName": "Grandmaster'sMercenaryShoes"
    },
    "3046": {
        "botName": "T8_SHOES_LEATHER_SET1",
        "humanName": "Elder'sMercenaryShoes"
    },
    "3047": {
        "botName": "T8_SHOES_LEATHER_SET1@1",
        "humanName": "Elder'sMercenaryShoes"
    },
    "3048": {
        "botName": "T8_SHOES_LEATHER_SET1@2",
        "humanName": "Elder'sMercenaryShoes"
    },
    "3049": {
        "botName": "T8_SHOES_LEATHER_SET1@3",
        "humanName": "Elder'sMercenaryShoes"
    },
    "3050": {
        "botName": "T4_HEAD_LEATHER_SET2",
        "humanName": "Adept'sHunterHood"
    },
    "3051": {
        "botName": "T4_HEAD_LEATHER_SET2@1",
        "humanName": "Adept'sHunterHood"
    },
    "3052": {
        "botName": "T4_HEAD_LEATHER_SET2@2",
        "humanName": "Adept'sHunterHood"
    },
    "3053": {
        "botName": "T4_HEAD_LEATHER_SET2@3",
        "humanName": "Adept'sHunterHood"
    },
    "3054": {
        "botName": "T5_HEAD_LEATHER_SET2",
        "humanName": "Expert'sHunterHood"
    },
    "3055": {
        "botName": "T5_HEAD_LEATHER_SET2@1",
        "humanName": "Expert'sHunterHood"
    },
    "3056": {
        "botName": "T5_HEAD_LEATHER_SET2@2",
        "humanName": "Expert'sHunterHood"
    },
    "3057": {
        "botName": "T5_HEAD_LEATHER_SET2@3",
        "humanName": "Expert'sHunterHood"
    },
    "3058": {
        "botName": "T6_HEAD_LEATHER_SET2",
        "humanName": "Master'sHunterHood"
    },
    "3059": {
        "botName": "T6_HEAD_LEATHER_SET2@1",
        "humanName": "Master'sHunterHood"
    },
    "3060": {
        "botName": "T6_HEAD_LEATHER_SET2@2",
        "humanName": "Master'sHunterHood"
    },
    "3061": {
        "botName": "T6_HEAD_LEATHER_SET2@3",
        "humanName": "Master'sHunterHood"
    },
    "3062": {
        "botName": "T7_HEAD_LEATHER_SET2",
        "humanName": "Grandmaster'sHunterHood"
    },
    "3063": {
        "botName": "T7_HEAD_LEATHER_SET2@1",
        "humanName": "Grandmaster'sHunterHood"
    },
    "3064": {
        "botName": "T7_HEAD_LEATHER_SET2@2",
        "humanName": "Grandmaster'sHunterHood"
    },
    "3065": {
        "botName": "T7_HEAD_LEATHER_SET2@3",
        "humanName": "Grandmaster'sHunterHood"
    },
    "3066": {
        "botName": "T8_HEAD_LEATHER_SET2",
        "humanName": "Elder'sHunterHood"
    },
    "3067": {
        "botName": "T8_HEAD_LEATHER_SET2@1",
        "humanName": "Elder'sHunterHood"
    },
    "3068": {
        "botName": "T8_HEAD_LEATHER_SET2@2",
        "humanName": "Elder'sHunterHood"
    },
    "3069": {
        "botName": "T8_HEAD_LEATHER_SET2@3",
        "humanName": "Elder'sHunterHood"
    },
    "3070": {
        "botName": "T4_ARMOR_LEATHER_SET2",
        "humanName": "Adept'sHunterJacket"
    },
    "3071": {
        "botName": "T4_ARMOR_LEATHER_SET2@1",
        "humanName": "Adept'sHunterJacket"
    },
    "3072": {
        "botName": "T4_ARMOR_LEATHER_SET2@2",
        "humanName": "Adept'sHunterJacket"
    },
    "3073": {
        "botName": "T4_ARMOR_LEATHER_SET2@3",
        "humanName": "Adept'sHunterJacket"
    },
    "3074": {
        "botName": "T5_ARMOR_LEATHER_SET2",
        "humanName": "Expert'sHunterJacket"
    },
    "3075": {
        "botName": "T5_ARMOR_LEATHER_SET2@1",
        "humanName": "Expert'sHunterJacket"
    },
    "3076": {
        "botName": "T5_ARMOR_LEATHER_SET2@2",
        "humanName": "Expert'sHunterJacket"
    },
    "3077": {
        "botName": "T5_ARMOR_LEATHER_SET2@3",
        "humanName": "Expert'sHunterJacket"
    },
    "3078": {
        "botName": "T6_ARMOR_LEATHER_SET2",
        "humanName": "Master'sHunterJacket"
    },
    "3079": {
        "botName": "T6_ARMOR_LEATHER_SET2@1",
        "humanName": "Master'sHunterJacket"
    },
    "3080": {
        "botName": "T6_ARMOR_LEATHER_SET2@2",
        "humanName": "Master'sHunterJacket"
    },
    "3081": {
        "botName": "T6_ARMOR_LEATHER_SET2@3",
        "humanName": "Master'sHunterJacket"
    },
    "3082": {
        "botName": "T7_ARMOR_LEATHER_SET2",
        "humanName": "Grandmaster'sHunterJacket"
    },
    "3083": {
        "botName": "T7_ARMOR_LEATHER_SET2@1",
        "humanName": "Grandmaster'sHunterJacket"
    },
    "3084": {
        "botName": "T7_ARMOR_LEATHER_SET2@2",
        "humanName": "Grandmaster'sHunterJacket"
    },
    "3085": {
        "botName": "T7_ARMOR_LEATHER_SET2@3",
        "humanName": "Grandmaster'sHunterJacket"
    },
    "3086": {
        "botName": "T8_ARMOR_LEATHER_SET2",
        "humanName": "Elder'sHunterJacket"
    },
    "3087": {
        "botName": "T8_ARMOR_LEATHER_SET2@1",
        "humanName": "Elder'sHunterJacket"
    },
    "3088": {
        "botName": "T8_ARMOR_LEATHER_SET2@2",
        "humanName": "Elder'sHunterJacket"
    },
    "3089": {
        "botName": "T8_ARMOR_LEATHER_SET2@3",
        "humanName": "Elder'sHunterJacket"
    },
    "3090": {
        "botName": "T4_SHOES_LEATHER_SET2",
        "humanName": "Adept'sHunterShoes"
    },
    "3091": {
        "botName": "T4_SHOES_LEATHER_SET2@1",
        "humanName": "Adept'sHunterShoes"
    },
    "3092": {
        "botName": "T4_SHOES_LEATHER_SET2@2",
        "humanName": "Adept'sHunterShoes"
    },
    "3093": {
        "botName": "T4_SHOES_LEATHER_SET2@3",
        "humanName": "Adept'sHunterShoes"
    },
    "3094": {
        "botName": "T5_SHOES_LEATHER_SET2",
        "humanName": "Expert'sHunterShoes"
    },
    "3095": {
        "botName": "T5_SHOES_LEATHER_SET2@1",
        "humanName": "Expert'sHunterShoes"
    },
    "3096": {
        "botName": "T5_SHOES_LEATHER_SET2@2",
        "humanName": "Expert'sHunterShoes"
    },
    "3097": {
        "botName": "T5_SHOES_LEATHER_SET2@3",
        "humanName": "Expert'sHunterShoes"
    },
    "3098": {
        "botName": "T6_SHOES_LEATHER_SET2",
        "humanName": "Master'sHunterShoes"
    },
    "3099": {
        "botName": "T6_SHOES_LEATHER_SET2@1",
        "humanName": "Master'sHunterShoes"
    },
    "3100": {
        "botName": "T6_SHOES_LEATHER_SET2@2",
        "humanName": "Master'sHunterShoes"
    },
    "3101": {
        "botName": "T6_SHOES_LEATHER_SET2@3",
        "humanName": "Master'sHunterShoes"
    },
    "3102": {
        "botName": "T7_SHOES_LEATHER_SET2",
        "humanName": "Grandmaster'sHunterShoes"
    },
    "3103": {
        "botName": "T7_SHOES_LEATHER_SET2@1",
        "humanName": "Grandmaster'sHunterShoes"
    },
    "3104": {
        "botName": "T7_SHOES_LEATHER_SET2@2",
        "humanName": "Grandmaster'sHunterShoes"
    },
    "3105": {
        "botName": "T7_SHOES_LEATHER_SET2@3",
        "humanName": "Grandmaster'sHunterShoes"
    },
    "3106": {
        "botName": "T8_SHOES_LEATHER_SET2",
        "humanName": "Elder'sHunterShoes"
    },
    "3107": {
        "botName": "T8_SHOES_LEATHER_SET2@1",
        "humanName": "Elder'sHunterShoes"
    },
    "3108": {
        "botName": "T8_SHOES_LEATHER_SET2@2",
        "humanName": "Elder'sHunterShoes"
    },
    "3109": {
        "botName": "T8_SHOES_LEATHER_SET2@3",
        "humanName": "Elder'sHunterShoes"
    },
    "3110": {
        "botName": "T4_HEAD_LEATHER_SET3",
        "humanName": "Adept'sAssassinHood"
    },
    "3111": {
        "botName": "T4_HEAD_LEATHER_SET3@1",
        "humanName": "Adept'sAssassinHood"
    },
    "3112": {
        "botName": "T4_HEAD_LEATHER_SET3@2",
        "humanName": "Adept'sAssassinHood"
    },
    "3113": {
        "botName": "T4_HEAD_LEATHER_SET3@3",
        "humanName": "Adept'sAssassinHood"
    },
    "3114": {
        "botName": "T5_HEAD_LEATHER_SET3",
        "humanName": "Expert'sAssassinHood"
    },
    "3115": {
        "botName": "T5_HEAD_LEATHER_SET3@1",
        "humanName": "Expert'sAssassinHood"
    },
    "3116": {
        "botName": "T5_HEAD_LEATHER_SET3@2",
        "humanName": "Expert'sAssassinHood"
    },
    "3117": {
        "botName": "T5_HEAD_LEATHER_SET3@3",
        "humanName": "Expert'sAssassinHood"
    },
    "3118": {
        "botName": "T6_HEAD_LEATHER_SET3",
        "humanName": "Master'sAssassinHood"
    },
    "3119": {
        "botName": "T6_HEAD_LEATHER_SET3@1",
        "humanName": "Master'sAssassinHood"
    },
    "3120": {
        "botName": "T6_HEAD_LEATHER_SET3@2",
        "humanName": "Master'sAssassinHood"
    },
    "3121": {
        "botName": "T6_HEAD_LEATHER_SET3@3",
        "humanName": "Master'sAssassinHood"
    },
    "3122": {
        "botName": "T7_HEAD_LEATHER_SET3",
        "humanName": "Grandmaster'sAssassinHood"
    },
    "3123": {
        "botName": "T7_HEAD_LEATHER_SET3@1",
        "humanName": "Grandmaster'sAssassinHood"
    },
    "3124": {
        "botName": "T7_HEAD_LEATHER_SET3@2",
        "humanName": "Grandmaster'sAssassinHood"
    },
    "3125": {
        "botName": "T7_HEAD_LEATHER_SET3@3",
        "humanName": "Grandmaster'sAssassinHood"
    },
    "3126": {
        "botName": "T8_HEAD_LEATHER_SET3",
        "humanName": "Elder'sAssassinHood"
    },
    "3127": {
        "botName": "T8_HEAD_LEATHER_SET3@1",
        "humanName": "Elder'sAssassinHood"
    },
    "3128": {
        "botName": "T8_HEAD_LEATHER_SET3@2",
        "humanName": "Elder'sAssassinHood"
    },
    "3129": {
        "botName": "T8_HEAD_LEATHER_SET3@3",
        "humanName": "Elder'sAssassinHood"
    },
    "3130": {
        "botName": "T4_ARMOR_LEATHER_SET3",
        "humanName": "Adept'sAssassinJacket"
    },
    "3131": {
        "botName": "T4_ARMOR_LEATHER_SET3@1",
        "humanName": "Adept'sAssassinJacket"
    },
    "3132": {
        "botName": "T4_ARMOR_LEATHER_SET3@2",
        "humanName": "Adept'sAssassinJacket"
    },
    "3133": {
        "botName": "T4_ARMOR_LEATHER_SET3@3",
        "humanName": "Adept'sAssassinJacket"
    },
    "3134": {
        "botName": "T5_ARMOR_LEATHER_SET3",
        "humanName": "Expert'sAssassinJacket"
    },
    "3135": {
        "botName": "T5_ARMOR_LEATHER_SET3@1",
        "humanName": "Expert'sAssassinJacket"
    },
    "3136": {
        "botName": "T5_ARMOR_LEATHER_SET3@2",
        "humanName": "Expert'sAssassinJacket"
    },
    "3137": {
        "botName": "T5_ARMOR_LEATHER_SET3@3",
        "humanName": "Expert'sAssassinJacket"
    },
    "3138": {
        "botName": "T6_ARMOR_LEATHER_SET3",
        "humanName": "Master'sAssassinJacket"
    },
    "3139": {
        "botName": "T6_ARMOR_LEATHER_SET3@1",
        "humanName": "Master'sAssassinJacket"
    },
    "3140": {
        "botName": "T6_ARMOR_LEATHER_SET3@2",
        "humanName": "Master'sAssassinJacket"
    },
    "3141": {
        "botName": "T6_ARMOR_LEATHER_SET3@3",
        "humanName": "Master'sAssassinJacket"
    },
    "3142": {
        "botName": "T7_ARMOR_LEATHER_SET3",
        "humanName": "Grandmaster'sAssassinJacket"
    },
    "3143": {
        "botName": "T7_ARMOR_LEATHER_SET3@1",
        "humanName": "Grandmaster'sAssassinJacket"
    },
    "3144": {
        "botName": "T7_ARMOR_LEATHER_SET3@2",
        "humanName": "Grandmaster'sAssassinJacket"
    },
    "3145": {
        "botName": "T7_ARMOR_LEATHER_SET3@3",
        "humanName": "Grandmaster'sAssassinJacket"
    },
    "3146": {
        "botName": "T8_ARMOR_LEATHER_SET3",
        "humanName": "Elder'sAssassinJacket"
    },
    "3147": {
        "botName": "T8_ARMOR_LEATHER_SET3@1",
        "humanName": "Elder'sAssassinJacket"
    },
    "3148": {
        "botName": "T8_ARMOR_LEATHER_SET3@2",
        "humanName": "Elder'sAssassinJacket"
    },
    "3149": {
        "botName": "T8_ARMOR_LEATHER_SET3@3",
        "humanName": "Elder'sAssassinJacket"
    },
    "3150": {
        "botName": "T4_SHOES_LEATHER_SET3",
        "humanName": "Adept'sAssassinShoes"
    },
    "3151": {
        "botName": "T4_SHOES_LEATHER_SET3@1",
        "humanName": "Adept'sAssassinShoes"
    },
    "3152": {
        "botName": "T4_SHOES_LEATHER_SET3@2",
        "humanName": "Adept'sAssassinShoes"
    },
    "3153": {
        "botName": "T4_SHOES_LEATHER_SET3@3",
        "humanName": "Adept'sAssassinShoes"
    },
    "3154": {
        "botName": "T5_SHOES_LEATHER_SET3",
        "humanName": "Expert'sAssassinShoes"
    },
    "3155": {
        "botName": "T5_SHOES_LEATHER_SET3@1",
        "humanName": "Expert'sAssassinShoes"
    },
    "3156": {
        "botName": "T5_SHOES_LEATHER_SET3@2",
        "humanName": "Expert'sAssassinShoes"
    },
    "3157": {
        "botName": "T5_SHOES_LEATHER_SET3@3",
        "humanName": "Expert'sAssassinShoes"
    },
    "3158": {
        "botName": "T6_SHOES_LEATHER_SET3",
        "humanName": "Master'sAssassinShoes"
    },
    "3159": {
        "botName": "T6_SHOES_LEATHER_SET3@1",
        "humanName": "Master'sAssassinShoes"
    },
    "3160": {
        "botName": "T6_SHOES_LEATHER_SET3@2",
        "humanName": "Master'sAssassinShoes"
    },
    "3161": {
        "botName": "T6_SHOES_LEATHER_SET3@3",
        "humanName": "Master'sAssassinShoes"
    },
    "3162": {
        "botName": "T7_SHOES_LEATHER_SET3",
        "humanName": "Grandmaster'sAssassinShoes"
    },
    "3163": {
        "botName": "T7_SHOES_LEATHER_SET3@1",
        "humanName": "Grandmaster'sAssassinShoes"
    },
    "3164": {
        "botName": "T7_SHOES_LEATHER_SET3@2",
        "humanName": "Grandmaster'sAssassinShoes"
    },
    "3165": {
        "botName": "T7_SHOES_LEATHER_SET3@3",
        "humanName": "Grandmaster'sAssassinShoes"
    },
    "3166": {
        "botName": "T8_SHOES_LEATHER_SET3",
        "humanName": "Elder'sAssassinShoes"
    },
    "3167": {
        "botName": "T8_SHOES_LEATHER_SET3@1",
        "humanName": "Elder'sAssassinShoes"
    },
    "3168": {
        "botName": "T8_SHOES_LEATHER_SET3@2",
        "humanName": "Elder'sAssassinShoes"
    },
    "3169": {
        "botName": "T8_SHOES_LEATHER_SET3@3",
        "humanName": "Elder'sAssassinShoes"
    },
    "3170": {
        "botName": "T4_HEAD_LEATHER_MORGANA",
        "humanName": "Adept'sStalkerHood"
    },
    "3171": {
        "botName": "T4_HEAD_LEATHER_MORGANA@1",
        "humanName": "Adept'sStalkerHood"
    },
    "3172": {
        "botName": "T4_HEAD_LEATHER_MORGANA@2",
        "humanName": "Adept'sStalkerHood"
    },
    "3173": {
        "botName": "T4_HEAD_LEATHER_MORGANA@3",
        "humanName": "Adept'sStalkerHood"
    },
    "3174": {
        "botName": "T5_HEAD_LEATHER_MORGANA",
        "humanName": "Expert'sStalkerHood"
    },
    "3175": {
        "botName": "T5_HEAD_LEATHER_MORGANA@1",
        "humanName": "Expert'sStalkerHood"
    },
    "3176": {
        "botName": "T5_HEAD_LEATHER_MORGANA@2",
        "humanName": "Expert'sStalkerHood"
    },
    "3177": {
        "botName": "T5_HEAD_LEATHER_MORGANA@3",
        "humanName": "Expert'sStalkerHood"
    },
    "3178": {
        "botName": "T6_HEAD_LEATHER_MORGANA",
        "humanName": "Master'sStalkerHood"
    },
    "3179": {
        "botName": "T6_HEAD_LEATHER_MORGANA@1",
        "humanName": "Master'sStalkerHood"
    },
    "3180": {
        "botName": "T6_HEAD_LEATHER_MORGANA@2",
        "humanName": "Master'sStalkerHood"
    },
    "3181": {
        "botName": "T6_HEAD_LEATHER_MORGANA@3",
        "humanName": "Master'sStalkerHood"
    },
    "3182": {
        "botName": "T7_HEAD_LEATHER_MORGANA",
        "humanName": "Grandmaster'sStalkerHood"
    },
    "3183": {
        "botName": "T7_HEAD_LEATHER_MORGANA@1",
        "humanName": "Grandmaster'sStalkerHood"
    },
    "3184": {
        "botName": "T7_HEAD_LEATHER_MORGANA@2",
        "humanName": "Grandmaster'sStalkerHood"
    },
    "3185": {
        "botName": "T7_HEAD_LEATHER_MORGANA@3",
        "humanName": "Grandmaster'sStalkerHood"
    },
    "3186": {
        "botName": "T8_HEAD_LEATHER_MORGANA",
        "humanName": "Elder'sStalkerHood"
    },
    "3187": {
        "botName": "T8_HEAD_LEATHER_MORGANA@1",
        "humanName": "Elder'sStalkerHood"
    },
    "3188": {
        "botName": "T8_HEAD_LEATHER_MORGANA@2",
        "humanName": "Elder'sStalkerHood"
    },
    "3189": {
        "botName": "T8_HEAD_LEATHER_MORGANA@3",
        "humanName": "Elder'sStalkerHood"
    },
    "3190": {
        "botName": "T4_ARMOR_LEATHER_MORGANA",
        "humanName": "Adept'sStalkerJacket"
    },
    "3191": {
        "botName": "T4_ARMOR_LEATHER_MORGANA@1",
        "humanName": "Adept'sStalkerJacket"
    },
    "3192": {
        "botName": "T4_ARMOR_LEATHER_MORGANA@2",
        "humanName": "Adept'sStalkerJacket"
    },
    "3193": {
        "botName": "T4_ARMOR_LEATHER_MORGANA@3",
        "humanName": "Adept'sStalkerJacket"
    },
    "3194": {
        "botName": "T5_ARMOR_LEATHER_MORGANA",
        "humanName": "Expert'sStalkerJacket"
    },
    "3195": {
        "botName": "T5_ARMOR_LEATHER_MORGANA@1",
        "humanName": "Expert'sStalkerJacket"
    },
    "3196": {
        "botName": "T5_ARMOR_LEATHER_MORGANA@2",
        "humanName": "Expert'sStalkerJacket"
    },
    "3197": {
        "botName": "T5_ARMOR_LEATHER_MORGANA@3",
        "humanName": "Expert'sStalkerJacket"
    },
    "3198": {
        "botName": "T6_ARMOR_LEATHER_MORGANA",
        "humanName": "Master'sStalkerJacket"
    },
    "3199": {
        "botName": "T6_ARMOR_LEATHER_MORGANA@1",
        "humanName": "Master'sStalkerJacket"
    },
    "3200": {
        "botName": "T6_ARMOR_LEATHER_MORGANA@2",
        "humanName": "Master'sStalkerJacket"
    },
    "3201": {
        "botName": "T6_ARMOR_LEATHER_MORGANA@3",
        "humanName": "Master'sStalkerJacket"
    },
    "3202": {
        "botName": "T7_ARMOR_LEATHER_MORGANA",
        "humanName": "Grandmaster'sStalkerJacket"
    },
    "3203": {
        "botName": "T7_ARMOR_LEATHER_MORGANA@1",
        "humanName": "Grandmaster'sStalkerJacket"
    },
    "3204": {
        "botName": "T7_ARMOR_LEATHER_MORGANA@2",
        "humanName": "Grandmaster'sStalkerJacket"
    },
    "3205": {
        "botName": "T7_ARMOR_LEATHER_MORGANA@3",
        "humanName": "Grandmaster'sStalkerJacket"
    },
    "3206": {
        "botName": "T8_ARMOR_LEATHER_MORGANA",
        "humanName": "Elder'sStalkerJacket"
    },
    "3207": {
        "botName": "T8_ARMOR_LEATHER_MORGANA@1",
        "humanName": "Elder'sStalkerJacket"
    },
    "3208": {
        "botName": "T8_ARMOR_LEATHER_MORGANA@2",
        "humanName": "Elder'sStalkerJacket"
    },
    "3209": {
        "botName": "T8_ARMOR_LEATHER_MORGANA@3",
        "humanName": "Elder'sStalkerJacket"
    },
    "3210": {
        "botName": "T4_SHOES_LEATHER_MORGANA",
        "humanName": "Adept'sStalkerShoes"
    },
    "3211": {
        "botName": "T4_SHOES_LEATHER_MORGANA@1",
        "humanName": "Adept'sStalkerShoes"
    },
    "3212": {
        "botName": "T4_SHOES_LEATHER_MORGANA@2",
        "humanName": "Adept'sStalkerShoes"
    },
    "3213": {
        "botName": "T4_SHOES_LEATHER_MORGANA@3",
        "humanName": "Adept'sStalkerShoes"
    },
    "3214": {
        "botName": "T5_SHOES_LEATHER_MORGANA",
        "humanName": "Expert'sStalkerShoes"
    },
    "3215": {
        "botName": "T5_SHOES_LEATHER_MORGANA@1",
        "humanName": "Expert'sStalkerShoes"
    },
    "3216": {
        "botName": "T5_SHOES_LEATHER_MORGANA@2",
        "humanName": "Expert'sStalkerShoes"
    },
    "3217": {
        "botName": "T5_SHOES_LEATHER_MORGANA@3",
        "humanName": "Expert'sStalkerShoes"
    },
    "3218": {
        "botName": "T6_SHOES_LEATHER_MORGANA",
        "humanName": "Master'sStalkerShoes"
    },
    "3219": {
        "botName": "T6_SHOES_LEATHER_MORGANA@1",
        "humanName": "Master'sStalkerShoes"
    },
    "3220": {
        "botName": "T6_SHOES_LEATHER_MORGANA@2",
        "humanName": "Master'sStalkerShoes"
    },
    "3221": {
        "botName": "T6_SHOES_LEATHER_MORGANA@3",
        "humanName": "Master'sStalkerShoes"
    },
    "3222": {
        "botName": "T7_SHOES_LEATHER_MORGANA",
        "humanName": "Grandmaster'sStalkerShoes"
    },
    "3223": {
        "botName": "T7_SHOES_LEATHER_MORGANA@1",
        "humanName": "Grandmaster'sStalkerShoes"
    },
    "3224": {
        "botName": "T7_SHOES_LEATHER_MORGANA@2",
        "humanName": "Grandmaster'sStalkerShoes"
    },
    "3225": {
        "botName": "T7_SHOES_LEATHER_MORGANA@3",
        "humanName": "Grandmaster'sStalkerShoes"
    },
    "3226": {
        "botName": "T8_SHOES_LEATHER_MORGANA",
        "humanName": "Elder'sStalkerShoes"
    },
    "3227": {
        "botName": "T8_SHOES_LEATHER_MORGANA@1",
        "humanName": "Elder'sStalkerShoes"
    },
    "3228": {
        "botName": "T8_SHOES_LEATHER_MORGANA@2",
        "humanName": "Elder'sStalkerShoes"
    },
    "3229": {
        "botName": "T8_SHOES_LEATHER_MORGANA@3",
        "humanName": "Elder'sStalkerShoes"
    },
    "3230": {
        "botName": "T4_HEAD_LEATHER_HELL",
        "humanName": "Adept'sHellionHood"
    },
    "3231": {
        "botName": "T4_HEAD_LEATHER_HELL@1",
        "humanName": "Adept'sHellionHood"
    },
    "3232": {
        "botName": "T4_HEAD_LEATHER_HELL@2",
        "humanName": "Adept'sHellionHood"
    },
    "3233": {
        "botName": "T4_HEAD_LEATHER_HELL@3",
        "humanName": "Adept'sHellionHood"
    },
    "3234": {
        "botName": "T5_HEAD_LEATHER_HELL",
        "humanName": "Expert'sHellionHood"
    },
    "3235": {
        "botName": "T5_HEAD_LEATHER_HELL@1",
        "humanName": "Expert'sHellionHood"
    },
    "3236": {
        "botName": "T5_HEAD_LEATHER_HELL@2",
        "humanName": "Expert'sHellionHood"
    },
    "3237": {
        "botName": "T5_HEAD_LEATHER_HELL@3",
        "humanName": "Expert'sHellionHood"
    },
    "3238": {
        "botName": "T6_HEAD_LEATHER_HELL",
        "humanName": "Master'sHellionHood"
    },
    "3239": {
        "botName": "T6_HEAD_LEATHER_HELL@1",
        "humanName": "Master'sHellionHood"
    },
    "3240": {
        "botName": "T6_HEAD_LEATHER_HELL@2",
        "humanName": "Master'sHellionHood"
    },
    "3241": {
        "botName": "T6_HEAD_LEATHER_HELL@3",
        "humanName": "Master'sHellionHood"
    },
    "3242": {
        "botName": "T7_HEAD_LEATHER_HELL",
        "humanName": "Grandmaster'sHellionHood"
    },
    "3243": {
        "botName": "T7_HEAD_LEATHER_HELL@1",
        "humanName": "Grandmaster'sHellionHood"
    },
    "3244": {
        "botName": "T7_HEAD_LEATHER_HELL@2",
        "humanName": "Grandmaster'sHellionHood"
    },
    "3245": {
        "botName": "T7_HEAD_LEATHER_HELL@3",
        "humanName": "Grandmaster'sHellionHood"
    },
    "3246": {
        "botName": "T8_HEAD_LEATHER_HELL",
        "humanName": "Elder'sHellionHood"
    },
    "3247": {
        "botName": "T8_HEAD_LEATHER_HELL@1",
        "humanName": "Elder'sHellionHood"
    },
    "3248": {
        "botName": "T8_HEAD_LEATHER_HELL@2",
        "humanName": "Elder'sHellionHood"
    },
    "3249": {
        "botName": "T8_HEAD_LEATHER_HELL@3",
        "humanName": "Elder'sHellionHood"
    },
    "3250": {
        "botName": "T4_ARMOR_LEATHER_HELL",
        "humanName": "Adept'sHellionJacket"
    },
    "3251": {
        "botName": "T4_ARMOR_LEATHER_HELL@1",
        "humanName": "Adept'sHellionJacket"
    },
    "3252": {
        "botName": "T4_ARMOR_LEATHER_HELL@2",
        "humanName": "Adept'sHellionJacket"
    },
    "3253": {
        "botName": "T4_ARMOR_LEATHER_HELL@3",
        "humanName": "Adept'sHellionJacket"
    },
    "3254": {
        "botName": "T5_ARMOR_LEATHER_HELL",
        "humanName": "Expert'sHellionJacket"
    },
    "3255": {
        "botName": "T5_ARMOR_LEATHER_HELL@1",
        "humanName": "Expert'sHellionJacket"
    },
    "3256": {
        "botName": "T5_ARMOR_LEATHER_HELL@2",
        "humanName": "Expert'sHellionJacket"
    },
    "3257": {
        "botName": "T5_ARMOR_LEATHER_HELL@3",
        "humanName": "Expert'sHellionJacket"
    },
    "3258": {
        "botName": "T6_ARMOR_LEATHER_HELL",
        "humanName": "Master'sHellionJacket"
    },
    "3259": {
        "botName": "T6_ARMOR_LEATHER_HELL@1",
        "humanName": "Master'sHellionJacket"
    },
    "3260": {
        "botName": "T6_ARMOR_LEATHER_HELL@2",
        "humanName": "Master'sHellionJacket"
    },
    "3261": {
        "botName": "T6_ARMOR_LEATHER_HELL@3",
        "humanName": "Master'sHellionJacket"
    },
    "3262": {
        "botName": "T7_ARMOR_LEATHER_HELL",
        "humanName": "Grandmaster'sHellionJacket"
    },
    "3263": {
        "botName": "T7_ARMOR_LEATHER_HELL@1",
        "humanName": "Grandmaster'sHellionJacket"
    },
    "3264": {
        "botName": "T7_ARMOR_LEATHER_HELL@2",
        "humanName": "Grandmaster'sHellionJacket"
    },
    "3265": {
        "botName": "T7_ARMOR_LEATHER_HELL@3",
        "humanName": "Grandmaster'sHellionJacket"
    },
    "3266": {
        "botName": "T8_ARMOR_LEATHER_HELL",
        "humanName": "Elder'sHellionJacket"
    },
    "3267": {
        "botName": "T8_ARMOR_LEATHER_HELL@1",
        "humanName": "Elder'sHellionJacket"
    },
    "3268": {
        "botName": "T8_ARMOR_LEATHER_HELL@2",
        "humanName": "Elder'sHellionJacket"
    },
    "3269": {
        "botName": "T8_ARMOR_LEATHER_HELL@3",
        "humanName": "Elder'sHellionJacket"
    },
    "3270": {
        "botName": "T4_SHOES_LEATHER_HELL",
        "humanName": "Adept'sHellionShoes"
    },
    "3271": {
        "botName": "T4_SHOES_LEATHER_HELL@1",
        "humanName": "Adept'sHellionShoes"
    },
    "3272": {
        "botName": "T4_SHOES_LEATHER_HELL@2",
        "humanName": "Adept'sHellionShoes"
    },
    "3273": {
        "botName": "T4_SHOES_LEATHER_HELL@3",
        "humanName": "Adept'sHellionShoes"
    },
    "3274": {
        "botName": "T5_SHOES_LEATHER_HELL",
        "humanName": "Expert'sHellionShoes"
    },
    "3275": {
        "botName": "T5_SHOES_LEATHER_HELL@1",
        "humanName": "Expert'sHellionShoes"
    },
    "3276": {
        "botName": "T5_SHOES_LEATHER_HELL@2",
        "humanName": "Expert'sHellionShoes"
    },
    "3277": {
        "botName": "T5_SHOES_LEATHER_HELL@3",
        "humanName": "Expert'sHellionShoes"
    },
    "3278": {
        "botName": "T6_SHOES_LEATHER_HELL",
        "humanName": "Master'sHellionShoes"
    },
    "3279": {
        "botName": "T6_SHOES_LEATHER_HELL@1",
        "humanName": "Master'sHellionShoes"
    },
    "3280": {
        "botName": "T6_SHOES_LEATHER_HELL@2",
        "humanName": "Master'sHellionShoes"
    },
    "3281": {
        "botName": "T6_SHOES_LEATHER_HELL@3",
        "humanName": "Master'sHellionShoes"
    },
    "3282": {
        "botName": "T7_SHOES_LEATHER_HELL",
        "humanName": "Grandmaster'sHellionShoes"
    },
    "3283": {
        "botName": "T7_SHOES_LEATHER_HELL@1",
        "humanName": "Grandmaster'sHellionShoes"
    },
    "3284": {
        "botName": "T7_SHOES_LEATHER_HELL@2",
        "humanName": "Grandmaster'sHellionShoes"
    },
    "3285": {
        "botName": "T7_SHOES_LEATHER_HELL@3",
        "humanName": "Grandmaster'sHellionShoes"
    },
    "3286": {
        "botName": "T8_SHOES_LEATHER_HELL",
        "humanName": "Elder'sHellionShoes"
    },
    "3287": {
        "botName": "T8_SHOES_LEATHER_HELL@1",
        "humanName": "Elder'sHellionShoes"
    },
    "3288": {
        "botName": "T8_SHOES_LEATHER_HELL@2",
        "humanName": "Elder'sHellionShoes"
    },
    "3289": {
        "botName": "T8_SHOES_LEATHER_HELL@3",
        "humanName": "Elder'sHellionShoes"
    },
    "3290": {
        "botName": "T4_HEAD_LEATHER_UNDEAD",
        "humanName": "Adept'sSpecterHood"
    },
    "3291": {
        "botName": "T4_HEAD_LEATHER_UNDEAD@1",
        "humanName": "Adept'sSpecterHood"
    },
    "3292": {
        "botName": "T4_HEAD_LEATHER_UNDEAD@2",
        "humanName": "Adept'sSpecterHood"
    },
    "3293": {
        "botName": "T4_HEAD_LEATHER_UNDEAD@3",
        "humanName": "Adept'sSpecterHood"
    },
    "3294": {
        "botName": "T5_HEAD_LEATHER_UNDEAD",
        "humanName": "Expert'sSpecterHood"
    },
    "3295": {
        "botName": "T5_HEAD_LEATHER_UNDEAD@1",
        "humanName": "Expert'sSpecterHood"
    },
    "3296": {
        "botName": "T5_HEAD_LEATHER_UNDEAD@2",
        "humanName": "Expert'sSpecterHood"
    },
    "3297": {
        "botName": "T5_HEAD_LEATHER_UNDEAD@3",
        "humanName": "Expert'sSpecterHood"
    },
    "3298": {
        "botName": "T6_HEAD_LEATHER_UNDEAD",
        "humanName": "Master'sSpecterHood"
    },
    "3299": {
        "botName": "T6_HEAD_LEATHER_UNDEAD@1",
        "humanName": "Master'sSpecterHood"
    },
    "3300": {
        "botName": "T6_HEAD_LEATHER_UNDEAD@2",
        "humanName": "Master'sSpecterHood"
    },
    "3301": {
        "botName": "T6_HEAD_LEATHER_UNDEAD@3",
        "humanName": "Master'sSpecterHood"
    },
    "3302": {
        "botName": "T7_HEAD_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sSpecterHood"
    },
    "3303": {
        "botName": "T7_HEAD_LEATHER_UNDEAD@1",
        "humanName": "Grandmaster'sSpecterHood"
    },
    "3304": {
        "botName": "T7_HEAD_LEATHER_UNDEAD@2",
        "humanName": "Grandmaster'sSpecterHood"
    },
    "3305": {
        "botName": "T7_HEAD_LEATHER_UNDEAD@3",
        "humanName": "Grandmaster'sSpecterHood"
    },
    "3306": {
        "botName": "T8_HEAD_LEATHER_UNDEAD",
        "humanName": "Elder'sSpecterHood"
    },
    "3307": {
        "botName": "T8_HEAD_LEATHER_UNDEAD@1",
        "humanName": "Elder'sSpecterHood"
    },
    "3308": {
        "botName": "T8_HEAD_LEATHER_UNDEAD@2",
        "humanName": "Elder'sSpecterHood"
    },
    "3309": {
        "botName": "T8_HEAD_LEATHER_UNDEAD@3",
        "humanName": "Elder'sSpecterHood"
    },
    "3310": {
        "botName": "T4_ARMOR_LEATHER_UNDEAD",
        "humanName": "Adept'sSpecterJacket"
    },
    "3311": {
        "botName": "T4_ARMOR_LEATHER_UNDEAD@1",
        "humanName": "Adept'sSpecterJacket"
    },
    "3312": {
        "botName": "T4_ARMOR_LEATHER_UNDEAD@2",
        "humanName": "Adept'sSpecterJacket"
    },
    "3313": {
        "botName": "T4_ARMOR_LEATHER_UNDEAD@3",
        "humanName": "Adept'sSpecterJacket"
    },
    "3314": {
        "botName": "T5_ARMOR_LEATHER_UNDEAD",
        "humanName": "Expert'sSpecterJacket"
    },
    "3315": {
        "botName": "T5_ARMOR_LEATHER_UNDEAD@1",
        "humanName": "Expert'sSpecterJacket"
    },
    "3316": {
        "botName": "T5_ARMOR_LEATHER_UNDEAD@2",
        "humanName": "Expert'sSpecterJacket"
    },
    "3317": {
        "botName": "T5_ARMOR_LEATHER_UNDEAD@3",
        "humanName": "Expert'sSpecterJacket"
    },
    "3318": {
        "botName": "T6_ARMOR_LEATHER_UNDEAD",
        "humanName": "Master'sSpecterJacket"
    },
    "3319": {
        "botName": "T6_ARMOR_LEATHER_UNDEAD@1",
        "humanName": "Master'sSpecterJacket"
    },
    "3320": {
        "botName": "T6_ARMOR_LEATHER_UNDEAD@2",
        "humanName": "Master'sSpecterJacket"
    },
    "3321": {
        "botName": "T6_ARMOR_LEATHER_UNDEAD@3",
        "humanName": "Master'sSpecterJacket"
    },
    "3322": {
        "botName": "T7_ARMOR_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sSpecterJacket"
    },
    "3323": {
        "botName": "T7_ARMOR_LEATHER_UNDEAD@1",
        "humanName": "Grandmaster'sSpecterJacket"
    },
    "3324": {
        "botName": "T7_ARMOR_LEATHER_UNDEAD@2",
        "humanName": "Grandmaster'sSpecterJacket"
    },
    "3325": {
        "botName": "T7_ARMOR_LEATHER_UNDEAD@3",
        "humanName": "Grandmaster'sSpecterJacket"
    },
    "3326": {
        "botName": "T8_ARMOR_LEATHER_UNDEAD",
        "humanName": "Elder'sSpecterJacket"
    },
    "3327": {
        "botName": "T8_ARMOR_LEATHER_UNDEAD@1",
        "humanName": "Elder'sSpecterJacket"
    },
    "3328": {
        "botName": "T8_ARMOR_LEATHER_UNDEAD@2",
        "humanName": "Elder'sSpecterJacket"
    },
    "3329": {
        "botName": "T8_ARMOR_LEATHER_UNDEAD@3",
        "humanName": "Elder'sSpecterJacket"
    },
    "3330": {
        "botName": "T4_SHOES_LEATHER_UNDEAD",
        "humanName": "Adept'sSpecterShoes"
    },
    "3331": {
        "botName": "T4_SHOES_LEATHER_UNDEAD@1",
        "humanName": "Adept'sSpecterShoes"
    },
    "3332": {
        "botName": "T4_SHOES_LEATHER_UNDEAD@2",
        "humanName": "Adept'sSpecterShoes"
    },
    "3333": {
        "botName": "T4_SHOES_LEATHER_UNDEAD@3",
        "humanName": "Adept'sSpecterShoes"
    },
    "3334": {
        "botName": "T5_SHOES_LEATHER_UNDEAD",
        "humanName": "Expert'sSpecterShoes"
    },
    "3335": {
        "botName": "T5_SHOES_LEATHER_UNDEAD@1",
        "humanName": "Expert'sSpecterShoes"
    },
    "3336": {
        "botName": "T5_SHOES_LEATHER_UNDEAD@2",
        "humanName": "Expert'sSpecterShoes"
    },
    "3337": {
        "botName": "T5_SHOES_LEATHER_UNDEAD@3",
        "humanName": "Expert'sSpecterShoes"
    },
    "3338": {
        "botName": "T6_SHOES_LEATHER_UNDEAD",
        "humanName": "Master'sSpecterShoes"
    },
    "3339": {
        "botName": "T6_SHOES_LEATHER_UNDEAD@1",
        "humanName": "Master'sSpecterShoes"
    },
    "3340": {
        "botName": "T6_SHOES_LEATHER_UNDEAD@2",
        "humanName": "Master'sSpecterShoes"
    },
    "3341": {
        "botName": "T6_SHOES_LEATHER_UNDEAD@3",
        "humanName": "Master'sSpecterShoes"
    },
    "3342": {
        "botName": "T7_SHOES_LEATHER_UNDEAD",
        "humanName": "Grandmaster'sSpecterShoes"
    },
    "3343": {
        "botName": "T7_SHOES_LEATHER_UNDEAD@1",
        "humanName": "Grandmaster'sSpecterShoes"
    },
    "3344": {
        "botName": "T7_SHOES_LEATHER_UNDEAD@2",
        "humanName": "Grandmaster'sSpecterShoes"
    },
    "3345": {
        "botName": "T7_SHOES_LEATHER_UNDEAD@3",
        "humanName": "Grandmaster'sSpecterShoes"
    },
    "3346": {
        "botName": "T8_SHOES_LEATHER_UNDEAD",
        "humanName": "Elder'sSpecterShoes"
    },
    "3347": {
        "botName": "T8_SHOES_LEATHER_UNDEAD@1",
        "humanName": "Elder'sSpecterShoes"
    },
    "3348": {
        "botName": "T8_SHOES_LEATHER_UNDEAD@2",
        "humanName": "Elder'sSpecterShoes"
    },
    "3349": {
        "botName": "T8_SHOES_LEATHER_UNDEAD@3",
        "humanName": "Elder'sSpecterShoes"
    },
    "3350": {
        "botName": "T4_HEAD_LEATHER_AVALON",
        "humanName": "Adept'sHoodofTenacity"
    },
    "3351": {
        "botName": "T4_HEAD_LEATHER_AVALON@1",
        "humanName": "Adept'sHoodofTenacity"
    },
    "3352": {
        "botName": "T4_HEAD_LEATHER_AVALON@2",
        "humanName": "Adept'sHoodofTenacity"
    },
    "3353": {
        "botName": "T4_HEAD_LEATHER_AVALON@3",
        "humanName": "Adept'sHoodofTenacity"
    },
    "3354": {
        "botName": "T5_HEAD_LEATHER_AVALON",
        "humanName": "Expert'sHoodofTenacity"
    },
    "3355": {
        "botName": "T5_HEAD_LEATHER_AVALON@1",
        "humanName": "Expert'sHoodofTenacity"
    },
    "3356": {
        "botName": "T5_HEAD_LEATHER_AVALON@2",
        "humanName": "Expert'sHoodofTenacity"
    },
    "3357": {
        "botName": "T5_HEAD_LEATHER_AVALON@3",
        "humanName": "Expert'sHoodofTenacity"
    },
    "3358": {
        "botName": "T6_HEAD_LEATHER_AVALON",
        "humanName": "Master'sHoodofTenacity"
    },
    "3359": {
        "botName": "T6_HEAD_LEATHER_AVALON@1",
        "humanName": "Master'sHoodofTenacity"
    },
    "3360": {
        "botName": "T6_HEAD_LEATHER_AVALON@2",
        "humanName": "Master'sHoodofTenacity"
    },
    "3361": {
        "botName": "T6_HEAD_LEATHER_AVALON@3",
        "humanName": "Master'sHoodofTenacity"
    },
    "3362": {
        "botName": "T7_HEAD_LEATHER_AVALON",
        "humanName": "Grandmaster'sHoodofTenacity"
    },
    "3363": {
        "botName": "T7_HEAD_LEATHER_AVALON@1",
        "humanName": "Grandmaster'sHoodofTenacity"
    },
    "3364": {
        "botName": "T7_HEAD_LEATHER_AVALON@2",
        "humanName": "Grandmaster'sHoodofTenacity"
    },
    "3365": {
        "botName": "T7_HEAD_LEATHER_AVALON@3",
        "humanName": "Grandmaster'sHoodofTenacity"
    },
    "3366": {
        "botName": "T8_HEAD_LEATHER_AVALON",
        "humanName": "Elder'sHoodofTenacity"
    },
    "3367": {
        "botName": "T8_HEAD_LEATHER_AVALON@1",
        "humanName": "Elder'sHoodofTenacity"
    },
    "3368": {
        "botName": "T8_HEAD_LEATHER_AVALON@2",
        "humanName": "Elder'sHoodofTenacity"
    },
    "3369": {
        "botName": "T8_HEAD_LEATHER_AVALON@3",
        "humanName": "Elder'sHoodofTenacity"
    },
    "3370": {
        "botName": "T4_ARMOR_LEATHER_AVALON",
        "humanName": "Adept'sJacketofTenacity"
    },
    "3371": {
        "botName": "T4_ARMOR_LEATHER_AVALON@1",
        "humanName": "Adept'sJacketofTenacity"
    },
    "3372": {
        "botName": "T4_ARMOR_LEATHER_AVALON@2",
        "humanName": "Adept'sJacketofTenacity"
    },
    "3373": {
        "botName": "T4_ARMOR_LEATHER_AVALON@3",
        "humanName": "Adept'sJacketofTenacity"
    },
    "3374": {
        "botName": "T5_ARMOR_LEATHER_AVALON",
        "humanName": "Expert'sJacketofTenacity"
    },
    "3375": {
        "botName": "T5_ARMOR_LEATHER_AVALON@1",
        "humanName": "Expert'sJacketofTenacity"
    },
    "3376": {
        "botName": "T5_ARMOR_LEATHER_AVALON@2",
        "humanName": "Expert'sJacketofTenacity"
    },
    "3377": {
        "botName": "T5_ARMOR_LEATHER_AVALON@3",
        "humanName": "Expert'sJacketofTenacity"
    },
    "3378": {
        "botName": "T6_ARMOR_LEATHER_AVALON",
        "humanName": "Master'sJacketofTenacity"
    },
    "3379": {
        "botName": "T6_ARMOR_LEATHER_AVALON@1",
        "humanName": "Master'sJacketofTenacity"
    },
    "3380": {
        "botName": "T6_ARMOR_LEATHER_AVALON@2",
        "humanName": "Master'sJacketofTenacity"
    },
    "3381": {
        "botName": "T6_ARMOR_LEATHER_AVALON@3",
        "humanName": "Master'sJacketofTenacity"
    },
    "3382": {
        "botName": "T7_ARMOR_LEATHER_AVALON",
        "humanName": "Grandmaster'sJacketofTenacity"
    },
    "3383": {
        "botName": "T7_ARMOR_LEATHER_AVALON@1",
        "humanName": "Grandmaster'sJacketofTenacity"
    },
    "3384": {
        "botName": "T7_ARMOR_LEATHER_AVALON@2",
        "humanName": "Grandmaster'sJacketofTenacity"
    },
    "3385": {
        "botName": "T7_ARMOR_LEATHER_AVALON@3",
        "humanName": "Grandmaster'sJacketofTenacity"
    },
    "3386": {
        "botName": "T8_ARMOR_LEATHER_AVALON",
        "humanName": "Elder'sJacketofTenacity"
    },
    "3387": {
        "botName": "T8_ARMOR_LEATHER_AVALON@1",
        "humanName": "Elder'sJacketofTenacity"
    },
    "3388": {
        "botName": "T8_ARMOR_LEATHER_AVALON@2",
        "humanName": "Elder'sJacketofTenacity"
    },
    "3389": {
        "botName": "T8_ARMOR_LEATHER_AVALON@3",
        "humanName": "Elder'sJacketofTenacity"
    },
    "3390": {
        "botName": "T4_SHOES_LEATHER_AVALON",
        "humanName": "Adept'sShoesofTenacity"
    },
    "3391": {
        "botName": "T4_SHOES_LEATHER_AVALON@1",
        "humanName": "Adept'sShoesofTenacity"
    },
    "3392": {
        "botName": "T4_SHOES_LEATHER_AVALON@2",
        "humanName": "Adept'sShoesofTenacity"
    },
    "3393": {
        "botName": "T4_SHOES_LEATHER_AVALON@3",
        "humanName": "Adept'sShoesofTenacity"
    },
    "3394": {
        "botName": "T5_SHOES_LEATHER_AVALON",
        "humanName": "Expert'sShoesofTenacity"
    },
    "3395": {
        "botName": "T5_SHOES_LEATHER_AVALON@1",
        "humanName": "Expert'sShoesofTenacity"
    },
    "3396": {
        "botName": "T5_SHOES_LEATHER_AVALON@2",
        "humanName": "Expert'sShoesofTenacity"
    },
    "3397": {
        "botName": "T5_SHOES_LEATHER_AVALON@3",
        "humanName": "Expert'sShoesofTenacity"
    },
    "3398": {
        "botName": "T6_SHOES_LEATHER_AVALON",
        "humanName": "Master'sShoesofTenacity"
    },
    "3399": {
        "botName": "T6_SHOES_LEATHER_AVALON@1",
        "humanName": "Master'sShoesofTenacity"
    },
    "3400": {
        "botName": "T6_SHOES_LEATHER_AVALON@2",
        "humanName": "Master'sShoesofTenacity"
    },
    "3401": {
        "botName": "T6_SHOES_LEATHER_AVALON@3",
        "humanName": "Master'sShoesofTenacity"
    },
    "3402": {
        "botName": "T7_SHOES_LEATHER_AVALON",
        "humanName": "Grandmaster'sShoesofTenacity"
    },
    "3403": {
        "botName": "T7_SHOES_LEATHER_AVALON@1",
        "humanName": "Grandmaster'sShoesofTenacity"
    },
    "3404": {
        "botName": "T7_SHOES_LEATHER_AVALON@2",
        "humanName": "Grandmaster'sShoesofTenacity"
    },
    "3405": {
        "botName": "T7_SHOES_LEATHER_AVALON@3",
        "humanName": "Grandmaster'sShoesofTenacity"
    },
    "3406": {
        "botName": "T8_SHOES_LEATHER_AVALON",
        "humanName": "Elder'sShoesofTenacity"
    },
    "3407": {
        "botName": "T8_SHOES_LEATHER_AVALON@1",
        "humanName": "Elder'sShoesofTenacity"
    },
    "3408": {
        "botName": "T8_SHOES_LEATHER_AVALON@2",
        "humanName": "Elder'sShoesofTenacity"
    },
    "3409": {
        "botName": "T8_SHOES_LEATHER_AVALON@3",
        "humanName": "Elder'sShoesofTenacity"
    },
    "3410": {
        "botName": "T2_HEAD_CLOTH_SET1",
        "humanName": "Novice'sScholarCowl"
    },
    "3411": {
        "botName": "T3_HEAD_CLOTH_SET1",
        "humanName": "Journeyman'sScholarCowl"
    },
    "3412": {
        "botName": "T4_HEAD_CLOTH_SET1",
        "humanName": "Adept'sScholarCowl"
    },
    "3413": {
        "botName": "T4_HEAD_CLOTH_SET1@1",
        "humanName": "Adept'sScholarCowl"
    },
    "3414": {
        "botName": "T4_HEAD_CLOTH_SET1@2",
        "humanName": "Adept'sScholarCowl"
    },
    "3415": {
        "botName": "T4_HEAD_CLOTH_SET1@3",
        "humanName": "Adept'sScholarCowl"
    },
    "3416": {
        "botName": "T5_HEAD_CLOTH_SET1",
        "humanName": "Expert'sScholarCowl"
    },
    "3417": {
        "botName": "T5_HEAD_CLOTH_SET1@1",
        "humanName": "Expert'sScholarCowl"
    },
    "3418": {
        "botName": "T5_HEAD_CLOTH_SET1@2",
        "humanName": "Expert'sScholarCowl"
    },
    "3419": {
        "botName": "T5_HEAD_CLOTH_SET1@3",
        "humanName": "Expert'sScholarCowl"
    },
    "3420": {
        "botName": "T6_HEAD_CLOTH_SET1",
        "humanName": "Master'sScholarCowl"
    },
    "3421": {
        "botName": "T6_HEAD_CLOTH_SET1@1",
        "humanName": "Master'sScholarCowl"
    },
    "3422": {
        "botName": "T6_HEAD_CLOTH_SET1@2",
        "humanName": "Master'sScholarCowl"
    },
    "3423": {
        "botName": "T6_HEAD_CLOTH_SET1@3",
        "humanName": "Master'sScholarCowl"
    },
    "3424": {
        "botName": "T7_HEAD_CLOTH_SET1",
        "humanName": "Grandmaster'sScholarCowl"
    },
    "3425": {
        "botName": "T7_HEAD_CLOTH_SET1@1",
        "humanName": "Grandmaster'sScholarCowl"
    },
    "3426": {
        "botName": "T7_HEAD_CLOTH_SET1@2",
        "humanName": "Grandmaster'sScholarCowl"
    },
    "3427": {
        "botName": "T7_HEAD_CLOTH_SET1@3",
        "humanName": "Grandmaster'sScholarCowl"
    },
    "3428": {
        "botName": "T8_HEAD_CLOTH_SET1",
        "humanName": "Elder'sScholarCowl"
    },
    "3429": {
        "botName": "T8_HEAD_CLOTH_SET1@1",
        "humanName": "Elder'sScholarCowl"
    },
    "3430": {
        "botName": "T8_HEAD_CLOTH_SET1@2",
        "humanName": "Elder'sScholarCowl"
    },
    "3431": {
        "botName": "T8_HEAD_CLOTH_SET1@3",
        "humanName": "Elder'sScholarCowl"
    },
    "3432": {
        "botName": "T2_ARMOR_CLOTH_SET1",
        "humanName": "Novice'sScholarRobe"
    },
    "3433": {
        "botName": "T3_ARMOR_CLOTH_SET1",
        "humanName": "Journeyman'sScholarRobe"
    },
    "3434": {
        "botName": "T4_ARMOR_CLOTH_SET1",
        "humanName": "Adept'sScholarRobe"
    },
    "3435": {
        "botName": "T4_ARMOR_CLOTH_SET1@1",
        "humanName": "Adept'sScholarRobe"
    },
    "3436": {
        "botName": "T4_ARMOR_CLOTH_SET1@2",
        "humanName": "Adept'sScholarRobe"
    },
    "3437": {
        "botName": "T4_ARMOR_CLOTH_SET1@3",
        "humanName": "Adept'sScholarRobe"
    },
    "3438": {
        "botName": "T5_ARMOR_CLOTH_SET1",
        "humanName": "Expert'sScholarRobe"
    },
    "3439": {
        "botName": "T5_ARMOR_CLOTH_SET1@1",
        "humanName": "Expert'sScholarRobe"
    },
    "3440": {
        "botName": "T5_ARMOR_CLOTH_SET1@2",
        "humanName": "Expert'sScholarRobe"
    },
    "3441": {
        "botName": "T5_ARMOR_CLOTH_SET1@3",
        "humanName": "Expert'sScholarRobe"
    },
    "3442": {
        "botName": "T6_ARMOR_CLOTH_SET1",
        "humanName": "Master'sScholarRobe"
    },
    "3443": {
        "botName": "T6_ARMOR_CLOTH_SET1@1",
        "humanName": "Master'sScholarRobe"
    },
    "3444": {
        "botName": "T6_ARMOR_CLOTH_SET1@2",
        "humanName": "Master'sScholarRobe"
    },
    "3445": {
        "botName": "T6_ARMOR_CLOTH_SET1@3",
        "humanName": "Master'sScholarRobe"
    },
    "3446": {
        "botName": "T7_ARMOR_CLOTH_SET1",
        "humanName": "Grandmaster'sScholarRobe"
    },
    "3447": {
        "botName": "T7_ARMOR_CLOTH_SET1@1",
        "humanName": "Grandmaster'sScholarRobe"
    },
    "3448": {
        "botName": "T7_ARMOR_CLOTH_SET1@2",
        "humanName": "Grandmaster'sScholarRobe"
    },
    "3449": {
        "botName": "T7_ARMOR_CLOTH_SET1@3",
        "humanName": "Grandmaster'sScholarRobe"
    },
    "3450": {
        "botName": "T8_ARMOR_CLOTH_SET1",
        "humanName": "Elder'sScholarRobe"
    },
    "3451": {
        "botName": "T8_ARMOR_CLOTH_SET1@1",
        "humanName": "Elder'sScholarRobe"
    },
    "3452": {
        "botName": "T8_ARMOR_CLOTH_SET1@2",
        "humanName": "Elder'sScholarRobe"
    },
    "3453": {
        "botName": "T8_ARMOR_CLOTH_SET1@3",
        "humanName": "Elder'sScholarRobe"
    },
    "3454": {
        "botName": "T2_SHOES_CLOTH_SET1",
        "humanName": "Novice'sScholarSandals"
    },
    "3455": {
        "botName": "T3_SHOES_CLOTH_SET1",
        "humanName": "Journeyman'sScholarSandals"
    },
    "3456": {
        "botName": "T4_SHOES_CLOTH_SET1",
        "humanName": "Adept'sScholarSandals"
    },
    "3457": {
        "botName": "T4_SHOES_CLOTH_SET1@1",
        "humanName": "Adept'sScholarSandals"
    },
    "3458": {
        "botName": "T4_SHOES_CLOTH_SET1@2",
        "humanName": "Adept'sScholarSandals"
    },
    "3459": {
        "botName": "T4_SHOES_CLOTH_SET1@3",
        "humanName": "Adept'sScholarSandals"
    },
    "3460": {
        "botName": "T5_SHOES_CLOTH_SET1",
        "humanName": "Expert'sScholarSandals"
    },
    "3461": {
        "botName": "T5_SHOES_CLOTH_SET1@1",
        "humanName": "Expert'sScholarSandals"
    },
    "3462": {
        "botName": "T5_SHOES_CLOTH_SET1@2",
        "humanName": "Expert'sScholarSandals"
    },
    "3463": {
        "botName": "T5_SHOES_CLOTH_SET1@3",
        "humanName": "Expert'sScholarSandals"
    },
    "3464": {
        "botName": "T6_SHOES_CLOTH_SET1",
        "humanName": "Master'sScholarSandals"
    },
    "3465": {
        "botName": "T6_SHOES_CLOTH_SET1@1",
        "humanName": "Master'sScholarSandals"
    },
    "3466": {
        "botName": "T6_SHOES_CLOTH_SET1@2",
        "humanName": "Master'sScholarSandals"
    },
    "3467": {
        "botName": "T6_SHOES_CLOTH_SET1@3",
        "humanName": "Master'sScholarSandals"
    },
    "3468": {
        "botName": "T7_SHOES_CLOTH_SET1",
        "humanName": "Grandmaster'sScholarSandals"
    },
    "3469": {
        "botName": "T7_SHOES_CLOTH_SET1@1",
        "humanName": "Grandmaster'sScholarSandals"
    },
    "3470": {
        "botName": "T7_SHOES_CLOTH_SET1@2",
        "humanName": "Grandmaster'sScholarSandals"
    },
    "3471": {
        "botName": "T7_SHOES_CLOTH_SET1@3",
        "humanName": "Grandmaster'sScholarSandals"
    },
    "3472": {
        "botName": "T8_SHOES_CLOTH_SET1",
        "humanName": "Elder'sScholarSandals"
    },
    "3473": {
        "botName": "T8_SHOES_CLOTH_SET1@1",
        "humanName": "Elder'sScholarSandals"
    },
    "3474": {
        "botName": "T8_SHOES_CLOTH_SET1@2",
        "humanName": "Elder'sScholarSandals"
    },
    "3475": {
        "botName": "T8_SHOES_CLOTH_SET1@3",
        "humanName": "Elder'sScholarSandals"
    },
    "3476": {
        "botName": "T4_HEAD_CLOTH_SET2",
        "humanName": "Adept'sClericCowl"
    },
    "3477": {
        "botName": "T4_HEAD_CLOTH_SET2@1",
        "humanName": "Adept'sClericCowl"
    },
    "3478": {
        "botName": "T4_HEAD_CLOTH_SET2@2",
        "humanName": "Adept'sClericCowl"
    },
    "3479": {
        "botName": "T4_HEAD_CLOTH_SET2@3",
        "humanName": "Adept'sClericCowl"
    },
    "3480": {
        "botName": "T5_HEAD_CLOTH_SET2",
        "humanName": "Expert'sClericCowl"
    },
    "3481": {
        "botName": "T5_HEAD_CLOTH_SET2@1",
        "humanName": "Expert'sClericCowl"
    },
    "3482": {
        "botName": "T5_HEAD_CLOTH_SET2@2",
        "humanName": "Expert'sClericCowl"
    },
    "3483": {
        "botName": "T5_HEAD_CLOTH_SET2@3",
        "humanName": "Expert'sClericCowl"
    },
    "3484": {
        "botName": "T6_HEAD_CLOTH_SET2",
        "humanName": "Master'sClericCowl"
    },
    "3485": {
        "botName": "T6_HEAD_CLOTH_SET2@1",
        "humanName": "Master'sClericCowl"
    },
    "3486": {
        "botName": "T6_HEAD_CLOTH_SET2@2",
        "humanName": "Master'sClericCowl"
    },
    "3487": {
        "botName": "T6_HEAD_CLOTH_SET2@3",
        "humanName": "Master'sClericCowl"
    },
    "3488": {
        "botName": "T7_HEAD_CLOTH_SET2",
        "humanName": "Grandmaster'sClericCowl"
    },
    "3489": {
        "botName": "T7_HEAD_CLOTH_SET2@1",
        "humanName": "Grandmaster'sClericCowl"
    },
    "3490": {
        "botName": "T7_HEAD_CLOTH_SET2@2",
        "humanName": "Grandmaster'sClericCowl"
    },
    "3491": {
        "botName": "T7_HEAD_CLOTH_SET2@3",
        "humanName": "Grandmaster'sClericCowl"
    },
    "3492": {
        "botName": "T8_HEAD_CLOTH_SET2",
        "humanName": "Elder'sClericCowl"
    },
    "3493": {
        "botName": "T8_HEAD_CLOTH_SET2@1",
        "humanName": "Elder'sClericCowl"
    },
    "3494": {
        "botName": "T8_HEAD_CLOTH_SET2@2",
        "humanName": "Elder'sClericCowl"
    },
    "3495": {
        "botName": "T8_HEAD_CLOTH_SET2@3",
        "humanName": "Elder'sClericCowl"
    },
    "3496": {
        "botName": "T4_ARMOR_CLOTH_SET2",
        "humanName": "Adept'sClericRobe"
    },
    "3497": {
        "botName": "T4_ARMOR_CLOTH_SET2@1",
        "humanName": "Adept'sClericRobe"
    },
    "3498": {
        "botName": "T4_ARMOR_CLOTH_SET2@2",
        "humanName": "Adept'sClericRobe"
    },
    "3499": {
        "botName": "T4_ARMOR_CLOTH_SET2@3",
        "humanName": "Adept'sClericRobe"
    },
    "3500": {
        "botName": "T5_ARMOR_CLOTH_SET2",
        "humanName": "Expert'sClericRobe"
    },
    "3501": {
        "botName": "T5_ARMOR_CLOTH_SET2@1",
        "humanName": "Expert'sClericRobe"
    },
    "3502": {
        "botName": "T5_ARMOR_CLOTH_SET2@2",
        "humanName": "Expert'sClericRobe"
    },
    "3503": {
        "botName": "T5_ARMOR_CLOTH_SET2@3",
        "humanName": "Expert'sClericRobe"
    },
    "3504": {
        "botName": "T6_ARMOR_CLOTH_SET2",
        "humanName": "Master'sClericRobe"
    },
    "3505": {
        "botName": "T6_ARMOR_CLOTH_SET2@1",
        "humanName": "Master'sClericRobe"
    },
    "3506": {
        "botName": "T6_ARMOR_CLOTH_SET2@2",
        "humanName": "Master'sClericRobe"
    },
    "3507": {
        "botName": "T6_ARMOR_CLOTH_SET2@3",
        "humanName": "Master'sClericRobe"
    },
    "3508": {
        "botName": "T7_ARMOR_CLOTH_SET2",
        "humanName": "Grandmaster'sClericRobe"
    },
    "3509": {
        "botName": "T7_ARMOR_CLOTH_SET2@1",
        "humanName": "Grandmaster'sClericRobe"
    },
    "3510": {
        "botName": "T7_ARMOR_CLOTH_SET2@2",
        "humanName": "Grandmaster'sClericRobe"
    },
    "3511": {
        "botName": "T7_ARMOR_CLOTH_SET2@3",
        "humanName": "Grandmaster'sClericRobe"
    },
    "3512": {
        "botName": "T8_ARMOR_CLOTH_SET2",
        "humanName": "Elder'sClericRobe"
    },
    "3513": {
        "botName": "T8_ARMOR_CLOTH_SET2@1",
        "humanName": "Elder'sClericRobe"
    },
    "3514": {
        "botName": "T8_ARMOR_CLOTH_SET2@2",
        "humanName": "Elder'sClericRobe"
    },
    "3515": {
        "botName": "T8_ARMOR_CLOTH_SET2@3",
        "humanName": "Elder'sClericRobe"
    },
    "3516": {
        "botName": "T4_SHOES_CLOTH_SET2",
        "humanName": "Adept'sClericSandals"
    },
    "3517": {
        "botName": "T4_SHOES_CLOTH_SET2@1",
        "humanName": "Adept'sClericSandals"
    },
    "3518": {
        "botName": "T4_SHOES_CLOTH_SET2@2",
        "humanName": "Adept'sClericSandals"
    },
    "3519": {
        "botName": "T4_SHOES_CLOTH_SET2@3",
        "humanName": "Adept'sClericSandals"
    },
    "3520": {
        "botName": "T5_SHOES_CLOTH_SET2",
        "humanName": "Expert'sClericSandals"
    },
    "3521": {
        "botName": "T5_SHOES_CLOTH_SET2@1",
        "humanName": "Expert'sClericSandals"
    },
    "3522": {
        "botName": "T5_SHOES_CLOTH_SET2@2",
        "humanName": "Expert'sClericSandals"
    },
    "3523": {
        "botName": "T5_SHOES_CLOTH_SET2@3",
        "humanName": "Expert'sClericSandals"
    },
    "3524": {
        "botName": "T6_SHOES_CLOTH_SET2",
        "humanName": "Master'sClericSandals"
    },
    "3525": {
        "botName": "T6_SHOES_CLOTH_SET2@1",
        "humanName": "Master'sClericSandals"
    },
    "3526": {
        "botName": "T6_SHOES_CLOTH_SET2@2",
        "humanName": "Master'sClericSandals"
    },
    "3527": {
        "botName": "T6_SHOES_CLOTH_SET2@3",
        "humanName": "Master'sClericSandals"
    },
    "3528": {
        "botName": "T7_SHOES_CLOTH_SET2",
        "humanName": "Grandmaster'sClericSandals"
    },
    "3529": {
        "botName": "T7_SHOES_CLOTH_SET2@1",
        "humanName": "Grandmaster'sClericSandals"
    },
    "3530": {
        "botName": "T7_SHOES_CLOTH_SET2@2",
        "humanName": "Grandmaster'sClericSandals"
    },
    "3531": {
        "botName": "T7_SHOES_CLOTH_SET2@3",
        "humanName": "Grandmaster'sClericSandals"
    },
    "3532": {
        "botName": "T8_SHOES_CLOTH_SET2",
        "humanName": "Elder'sClericSandals"
    },
    "3533": {
        "botName": "T8_SHOES_CLOTH_SET2@1",
        "humanName": "Elder'sClericSandals"
    },
    "3534": {
        "botName": "T8_SHOES_CLOTH_SET2@2",
        "humanName": "Elder'sClericSandals"
    },
    "3535": {
        "botName": "T8_SHOES_CLOTH_SET2@3",
        "humanName": "Elder'sClericSandals"
    },
    "3536": {
        "botName": "T4_HEAD_CLOTH_SET3",
        "humanName": "Adept'sMageCowl"
    },
    "3537": {
        "botName": "T4_HEAD_CLOTH_SET3@1",
        "humanName": "Adept'sMageCowl"
    },
    "3538": {
        "botName": "T4_HEAD_CLOTH_SET3@2",
        "humanName": "Adept'sMageCowl"
    },
    "3539": {
        "botName": "T4_HEAD_CLOTH_SET3@3",
        "humanName": "Adept'sMageCowl"
    },
    "3540": {
        "botName": "T5_HEAD_CLOTH_SET3",
        "humanName": "Expert'sMageCowl"
    },
    "3541": {
        "botName": "T5_HEAD_CLOTH_SET3@1",
        "humanName": "Expert'sMageCowl"
    },
    "3542": {
        "botName": "T5_HEAD_CLOTH_SET3@2",
        "humanName": "Expert'sMageCowl"
    },
    "3543": {
        "botName": "T5_HEAD_CLOTH_SET3@3",
        "humanName": "Expert'sMageCowl"
    },
    "3544": {
        "botName": "T6_HEAD_CLOTH_SET3",
        "humanName": "Master'sMageCowl"
    },
    "3545": {
        "botName": "T6_HEAD_CLOTH_SET3@1",
        "humanName": "Master'sMageCowl"
    },
    "3546": {
        "botName": "T6_HEAD_CLOTH_SET3@2",
        "humanName": "Master'sMageCowl"
    },
    "3547": {
        "botName": "T6_HEAD_CLOTH_SET3@3",
        "humanName": "Master'sMageCowl"
    },
    "3548": {
        "botName": "T7_HEAD_CLOTH_SET3",
        "humanName": "Grandmaster'sMageCowl"
    },
    "3549": {
        "botName": "T7_HEAD_CLOTH_SET3@1",
        "humanName": "Grandmaster'sMageCowl"
    },
    "3550": {
        "botName": "T7_HEAD_CLOTH_SET3@2",
        "humanName": "Grandmaster'sMageCowl"
    },
    "3551": {
        "botName": "T7_HEAD_CLOTH_SET3@3",
        "humanName": "Grandmaster'sMageCowl"
    },
    "3552": {
        "botName": "T8_HEAD_CLOTH_SET3",
        "humanName": "Elder'sMageCowl"
    },
    "3553": {
        "botName": "T8_HEAD_CLOTH_SET3@1",
        "humanName": "Elder'sMageCowl"
    },
    "3554": {
        "botName": "T8_HEAD_CLOTH_SET3@2",
        "humanName": "Elder'sMageCowl"
    },
    "3555": {
        "botName": "T8_HEAD_CLOTH_SET3@3",
        "humanName": "Elder'sMageCowl"
    },
    "3556": {
        "botName": "T4_ARMOR_CLOTH_SET3",
        "humanName": "Adept'sMageRobe"
    },
    "3557": {
        "botName": "T4_ARMOR_CLOTH_SET3@1",
        "humanName": "Adept'sMageRobe"
    },
    "3558": {
        "botName": "T4_ARMOR_CLOTH_SET3@2",
        "humanName": "Adept'sMageRobe"
    },
    "3559": {
        "botName": "T4_ARMOR_CLOTH_SET3@3",
        "humanName": "Adept'sMageRobe"
    },
    "3560": {
        "botName": "T5_ARMOR_CLOTH_SET3",
        "humanName": "Expert'sMageRobe"
    },
    "3561": {
        "botName": "T5_ARMOR_CLOTH_SET3@1",
        "humanName": "Expert'sMageRobe"
    },
    "3562": {
        "botName": "T5_ARMOR_CLOTH_SET3@2",
        "humanName": "Expert'sMageRobe"
    },
    "3563": {
        "botName": "T5_ARMOR_CLOTH_SET3@3",
        "humanName": "Expert'sMageRobe"
    },
    "3564": {
        "botName": "T6_ARMOR_CLOTH_SET3",
        "humanName": "Master'sMageRobe"
    },
    "3565": {
        "botName": "T6_ARMOR_CLOTH_SET3@1",
        "humanName": "Master'sMageRobe"
    },
    "3566": {
        "botName": "T6_ARMOR_CLOTH_SET3@2",
        "humanName": "Master'sMageRobe"
    },
    "3567": {
        "botName": "T6_ARMOR_CLOTH_SET3@3",
        "humanName": "Master'sMageRobe"
    },
    "3568": {
        "botName": "T7_ARMOR_CLOTH_SET3",
        "humanName": "Grandmaster'sMageRobe"
    },
    "3569": {
        "botName": "T7_ARMOR_CLOTH_SET3@1",
        "humanName": "Grandmaster'sMageRobe"
    },
    "3570": {
        "botName": "T7_ARMOR_CLOTH_SET3@2",
        "humanName": "Grandmaster'sMageRobe"
    },
    "3571": {
        "botName": "T7_ARMOR_CLOTH_SET3@3",
        "humanName": "Grandmaster'sMageRobe"
    },
    "3572": {
        "botName": "T8_ARMOR_CLOTH_SET3",
        "humanName": "Elder'sMageRobe"
    },
    "3573": {
        "botName": "T8_ARMOR_CLOTH_SET3@1",
        "humanName": "Elder'sMageRobe"
    },
    "3574": {
        "botName": "T8_ARMOR_CLOTH_SET3@2",
        "humanName": "Elder'sMageRobe"
    },
    "3575": {
        "botName": "T8_ARMOR_CLOTH_SET3@3",
        "humanName": "Elder'sMageRobe"
    },
    "3576": {
        "botName": "T4_SHOES_CLOTH_SET3",
        "humanName": "Adept'sMageSandals"
    },
    "3577": {
        "botName": "T4_SHOES_CLOTH_SET3@1",
        "humanName": "Adept'sMageSandals"
    },
    "3578": {
        "botName": "T4_SHOES_CLOTH_SET3@2",
        "humanName": "Adept'sMageSandals"
    },
    "3579": {
        "botName": "T4_SHOES_CLOTH_SET3@3",
        "humanName": "Adept'sMageSandals"
    },
    "3580": {
        "botName": "T5_SHOES_CLOTH_SET3",
        "humanName": "Expert'sMageSandals"
    },
    "3581": {
        "botName": "T5_SHOES_CLOTH_SET3@1",
        "humanName": "Expert'sMageSandals"
    },
    "3582": {
        "botName": "T5_SHOES_CLOTH_SET3@2",
        "humanName": "Expert'sMageSandals"
    },
    "3583": {
        "botName": "T5_SHOES_CLOTH_SET3@3",
        "humanName": "Expert'sMageSandals"
    },
    "3584": {
        "botName": "T6_SHOES_CLOTH_SET3",
        "humanName": "Master'sMageSandals"
    },
    "3585": {
        "botName": "T6_SHOES_CLOTH_SET3@1",
        "humanName": "Master'sMageSandals"
    },
    "3586": {
        "botName": "T6_SHOES_CLOTH_SET3@2",
        "humanName": "Master'sMageSandals"
    },
    "3587": {
        "botName": "T6_SHOES_CLOTH_SET3@3",
        "humanName": "Master'sMageSandals"
    },
    "3588": {
        "botName": "T7_SHOES_CLOTH_SET3",
        "humanName": "Grandmaster'sMageSandals"
    },
    "3589": {
        "botName": "T7_SHOES_CLOTH_SET3@1",
        "humanName": "Grandmaster'sMageSandals"
    },
    "3590": {
        "botName": "T7_SHOES_CLOTH_SET3@2",
        "humanName": "Grandmaster'sMageSandals"
    },
    "3591": {
        "botName": "T7_SHOES_CLOTH_SET3@3",
        "humanName": "Grandmaster'sMageSandals"
    },
    "3592": {
        "botName": "T8_SHOES_CLOTH_SET3",
        "humanName": "Elder'sMageSandals"
    },
    "3593": {
        "botName": "T8_SHOES_CLOTH_SET3@1",
        "humanName": "Elder'sMageSandals"
    },
    "3594": {
        "botName": "T8_SHOES_CLOTH_SET3@2",
        "humanName": "Elder'sMageSandals"
    },
    "3595": {
        "botName": "T8_SHOES_CLOTH_SET3@3",
        "humanName": "Elder'sMageSandals"
    },
    "3596": {
        "botName": "T4_HEAD_CLOTH_KEEPER",
        "humanName": "Adept'sDruidCowl"
    },
    "3597": {
        "botName": "T4_HEAD_CLOTH_KEEPER@1",
        "humanName": "Adept'sDruidCowl"
    },
    "3598": {
        "botName": "T4_HEAD_CLOTH_KEEPER@2",
        "humanName": "Adept'sDruidCowl"
    },
    "3599": {
        "botName": "T4_HEAD_CLOTH_KEEPER@3",
        "humanName": "Adept'sDruidCowl"
    },
    "3600": {
        "botName": "T5_HEAD_CLOTH_KEEPER",
        "humanName": "Expert'sDruidCowl"
    },
    "3601": {
        "botName": "T5_HEAD_CLOTH_KEEPER@1",
        "humanName": "Expert'sDruidCowl"
    },
    "3602": {
        "botName": "T5_HEAD_CLOTH_KEEPER@2",
        "humanName": "Expert'sDruidCowl"
    },
    "3603": {
        "botName": "T5_HEAD_CLOTH_KEEPER@3",
        "humanName": "Expert'sDruidCowl"
    },
    "3604": {
        "botName": "T6_HEAD_CLOTH_KEEPER",
        "humanName": "Master'sDruidCowl"
    },
    "3605": {
        "botName": "T6_HEAD_CLOTH_KEEPER@1",
        "humanName": "Master'sDruidCowl"
    },
    "3606": {
        "botName": "T6_HEAD_CLOTH_KEEPER@2",
        "humanName": "Master'sDruidCowl"
    },
    "3607": {
        "botName": "T6_HEAD_CLOTH_KEEPER@3",
        "humanName": "Master'sDruidCowl"
    },
    "3608": {
        "botName": "T7_HEAD_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidCowl"
    },
    "3609": {
        "botName": "T7_HEAD_CLOTH_KEEPER@1",
        "humanName": "Grandmaster'sDruidCowl"
    },
    "3610": {
        "botName": "T7_HEAD_CLOTH_KEEPER@2",
        "humanName": "Grandmaster'sDruidCowl"
    },
    "3611": {
        "botName": "T7_HEAD_CLOTH_KEEPER@3",
        "humanName": "Grandmaster'sDruidCowl"
    },
    "3612": {
        "botName": "T8_HEAD_CLOTH_KEEPER",
        "humanName": "Elder'sDruidCowl"
    },
    "3613": {
        "botName": "T8_HEAD_CLOTH_KEEPER@1",
        "humanName": "Elder'sDruidCowl"
    },
    "3614": {
        "botName": "T8_HEAD_CLOTH_KEEPER@2",
        "humanName": "Elder'sDruidCowl"
    },
    "3615": {
        "botName": "T8_HEAD_CLOTH_KEEPER@3",
        "humanName": "Elder'sDruidCowl"
    },
    "3616": {
        "botName": "T4_ARMOR_CLOTH_KEEPER",
        "humanName": "Adept'sDruidRobe"
    },
    "3617": {
        "botName": "T4_ARMOR_CLOTH_KEEPER@1",
        "humanName": "Adept'sDruidRobe"
    },
    "3618": {
        "botName": "T4_ARMOR_CLOTH_KEEPER@2",
        "humanName": "Adept'sDruidRobe"
    },
    "3619": {
        "botName": "T4_ARMOR_CLOTH_KEEPER@3",
        "humanName": "Adept'sDruidRobe"
    },
    "3620": {
        "botName": "T5_ARMOR_CLOTH_KEEPER",
        "humanName": "Expert'sDruidRobe"
    },
    "3621": {
        "botName": "T5_ARMOR_CLOTH_KEEPER@1",
        "humanName": "Expert'sDruidRobe"
    },
    "3622": {
        "botName": "T5_ARMOR_CLOTH_KEEPER@2",
        "humanName": "Expert'sDruidRobe"
    },
    "3623": {
        "botName": "T5_ARMOR_CLOTH_KEEPER@3",
        "humanName": "Expert'sDruidRobe"
    },
    "3624": {
        "botName": "T6_ARMOR_CLOTH_KEEPER",
        "humanName": "Master'sDruidRobe"
    },
    "3625": {
        "botName": "T6_ARMOR_CLOTH_KEEPER@1",
        "humanName": "Master'sDruidRobe"
    },
    "3626": {
        "botName": "T6_ARMOR_CLOTH_KEEPER@2",
        "humanName": "Master'sDruidRobe"
    },
    "3627": {
        "botName": "T6_ARMOR_CLOTH_KEEPER@3",
        "humanName": "Master'sDruidRobe"
    },
    "3628": {
        "botName": "T7_ARMOR_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidRobe"
    },
    "3629": {
        "botName": "T7_ARMOR_CLOTH_KEEPER@1",
        "humanName": "Grandmaster'sDruidRobe"
    },
    "3630": {
        "botName": "T7_ARMOR_CLOTH_KEEPER@2",
        "humanName": "Grandmaster'sDruidRobe"
    },
    "3631": {
        "botName": "T7_ARMOR_CLOTH_KEEPER@3",
        "humanName": "Grandmaster'sDruidRobe"
    },
    "3632": {
        "botName": "T8_ARMOR_CLOTH_KEEPER",
        "humanName": "Elder'sDruidRobe"
    },
    "3633": {
        "botName": "T8_ARMOR_CLOTH_KEEPER@1",
        "humanName": "Elder'sDruidRobe"
    },
    "3634": {
        "botName": "T8_ARMOR_CLOTH_KEEPER@2",
        "humanName": "Elder'sDruidRobe"
    },
    "3635": {
        "botName": "T8_ARMOR_CLOTH_KEEPER@3",
        "humanName": "Elder'sDruidRobe"
    },
    "3636": {
        "botName": "T4_SHOES_CLOTH_KEEPER",
        "humanName": "Adept'sDruidSandals"
    },
    "3637": {
        "botName": "T4_SHOES_CLOTH_KEEPER@1",
        "humanName": "Adept'sDruidSandals"
    },
    "3638": {
        "botName": "T4_SHOES_CLOTH_KEEPER@2",
        "humanName": "Adept'sDruidSandals"
    },
    "3639": {
        "botName": "T4_SHOES_CLOTH_KEEPER@3",
        "humanName": "Adept'sDruidSandals"
    },
    "3640": {
        "botName": "T5_SHOES_CLOTH_KEEPER",
        "humanName": "Expert'sDruidSandals"
    },
    "3641": {
        "botName": "T5_SHOES_CLOTH_KEEPER@1",
        "humanName": "Expert'sDruidSandals"
    },
    "3642": {
        "botName": "T5_SHOES_CLOTH_KEEPER@2",
        "humanName": "Expert'sDruidSandals"
    },
    "3643": {
        "botName": "T5_SHOES_CLOTH_KEEPER@3",
        "humanName": "Expert'sDruidSandals"
    },
    "3644": {
        "botName": "T6_SHOES_CLOTH_KEEPER",
        "humanName": "Master'sDruidSandals"
    },
    "3645": {
        "botName": "T6_SHOES_CLOTH_KEEPER@1",
        "humanName": "Master'sDruidSandals"
    },
    "3646": {
        "botName": "T6_SHOES_CLOTH_KEEPER@2",
        "humanName": "Master'sDruidSandals"
    },
    "3647": {
        "botName": "T6_SHOES_CLOTH_KEEPER@3",
        "humanName": "Master'sDruidSandals"
    },
    "3648": {
        "botName": "T7_SHOES_CLOTH_KEEPER",
        "humanName": "Grandmaster'sDruidSandals"
    },
    "3649": {
        "botName": "T7_SHOES_CLOTH_KEEPER@1",
        "humanName": "Grandmaster'sDruidSandals"
    },
    "3650": {
        "botName": "T7_SHOES_CLOTH_KEEPER@2",
        "humanName": "Grandmaster'sDruidSandals"
    },
    "3651": {
        "botName": "T7_SHOES_CLOTH_KEEPER@3",
        "humanName": "Grandmaster'sDruidSandals"
    },
    "3652": {
        "botName": "T8_SHOES_CLOTH_KEEPER",
        "humanName": "Elder'sDruidSandals"
    },
    "3653": {
        "botName": "T8_SHOES_CLOTH_KEEPER@1",
        "humanName": "Elder'sDruidSandals"
    },
    "3654": {
        "botName": "T8_SHOES_CLOTH_KEEPER@2",
        "humanName": "Elder'sDruidSandals"
    },
    "3655": {
        "botName": "T8_SHOES_CLOTH_KEEPER@3",
        "humanName": "Elder'sDruidSandals"
    },
    "3656": {
        "botName": "T4_HEAD_CLOTH_HELL",
        "humanName": "Adept'sFiendCowl"
    },
    "3657": {
        "botName": "T4_HEAD_CLOTH_HELL@1",
        "humanName": "Adept'sFiendCowl"
    },
    "3658": {
        "botName": "T4_HEAD_CLOTH_HELL@2",
        "humanName": "Adept'sFiendCowl"
    },
    "3659": {
        "botName": "T4_HEAD_CLOTH_HELL@3",
        "humanName": "Adept'sFiendCowl"
    },
    "3660": {
        "botName": "T5_HEAD_CLOTH_HELL",
        "humanName": "Expert'sFiendCowl"
    },
    "3661": {
        "botName": "T5_HEAD_CLOTH_HELL@1",
        "humanName": "Expert'sFiendCowl"
    },
    "3662": {
        "botName": "T5_HEAD_CLOTH_HELL@2",
        "humanName": "Expert'sFiendCowl"
    },
    "3663": {
        "botName": "T5_HEAD_CLOTH_HELL@3",
        "humanName": "Expert'sFiendCowl"
    },
    "3664": {
        "botName": "T6_HEAD_CLOTH_HELL",
        "humanName": "Master'sFiendCowl"
    },
    "3665": {
        "botName": "T6_HEAD_CLOTH_HELL@1",
        "humanName": "Master'sFiendCowl"
    },
    "3666": {
        "botName": "T6_HEAD_CLOTH_HELL@2",
        "humanName": "Master'sFiendCowl"
    },
    "3667": {
        "botName": "T6_HEAD_CLOTH_HELL@3",
        "humanName": "Master'sFiendCowl"
    },
    "3668": {
        "botName": "T7_HEAD_CLOTH_HELL",
        "humanName": "Grandmaster'sFiendCowl"
    },
    "3669": {
        "botName": "T7_HEAD_CLOTH_HELL@1",
        "humanName": "Grandmaster'sFiendCowl"
    },
    "3670": {
        "botName": "T7_HEAD_CLOTH_HELL@2",
        "humanName": "Grandmaster'sFiendCowl"
    },
    "3671": {
        "botName": "T7_HEAD_CLOTH_HELL@3",
        "humanName": "Grandmaster'sFiendCowl"
    },
    "3672": {
        "botName": "T8_HEAD_CLOTH_HELL",
        "humanName": "Elder'sFiendCowl"
    },
    "3673": {
        "botName": "T8_HEAD_CLOTH_HELL@1",
        "humanName": "Elder'sFiendCowl"
    },
    "3674": {
        "botName": "T8_HEAD_CLOTH_HELL@2",
        "humanName": "Elder'sFiendCowl"
    },
    "3675": {
        "botName": "T8_HEAD_CLOTH_HELL@3",
        "humanName": "Elder'sFiendCowl"
    },
    "3676": {
        "botName": "T4_ARMOR_CLOTH_HELL",
        "humanName": "Adept'sFiendRobe"
    },
    "3677": {
        "botName": "T4_ARMOR_CLOTH_HELL@1",
        "humanName": "Adept'sFiendRobe"
    },
    "3678": {
        "botName": "T4_ARMOR_CLOTH_HELL@2",
        "humanName": "Adept'sFiendRobe"
    },
    "3679": {
        "botName": "T4_ARMOR_CLOTH_HELL@3",
        "humanName": "Adept'sFiendRobe"
    },
    "3680": {
        "botName": "T5_ARMOR_CLOTH_HELL",
        "humanName": "Expert'sFiendRobe"
    },
    "3681": {
        "botName": "T5_ARMOR_CLOTH_HELL@1",
        "humanName": "Expert'sFiendRobe"
    },
    "3682": {
        "botName": "T5_ARMOR_CLOTH_HELL@2",
        "humanName": "Expert'sFiendRobe"
    },
    "3683": {
        "botName": "T5_ARMOR_CLOTH_HELL@3",
        "humanName": "Expert'sFiendRobe"
    },
    "3684": {
        "botName": "T6_ARMOR_CLOTH_HELL",
        "humanName": "Master'sFiendRobe"
    },
    "3685": {
        "botName": "T6_ARMOR_CLOTH_HELL@1",
        "humanName": "Master'sFiendRobe"
    },
    "3686": {
        "botName": "T6_ARMOR_CLOTH_HELL@2",
        "humanName": "Master'sFiendRobe"
    },
    "3687": {
        "botName": "T6_ARMOR_CLOTH_HELL@3",
        "humanName": "Master'sFiendRobe"
    },
    "3688": {
        "botName": "T7_ARMOR_CLOTH_HELL",
        "humanName": "Grandmaster'sFiendRobe"
    },
    "3689": {
        "botName": "T7_ARMOR_CLOTH_HELL@1",
        "humanName": "Grandmaster'sFiendRobe"
    },
    "3690": {
        "botName": "T7_ARMOR_CLOTH_HELL@2",
        "humanName": "Grandmaster'sFiendRobe"
    },
    "3691": {
        "botName": "T7_ARMOR_CLOTH_HELL@3",
        "humanName": "Grandmaster'sFiendRobe"
    },
    "3692": {
        "botName": "T8_ARMOR_CLOTH_HELL",
        "humanName": "Elder'sFiendRobe"
    },
    "3693": {
        "botName": "T8_ARMOR_CLOTH_HELL@1",
        "humanName": "Elder'sFiendRobe"
    },
    "3694": {
        "botName": "T8_ARMOR_CLOTH_HELL@2",
        "humanName": "Elder'sFiendRobe"
    },
    "3695": {
        "botName": "T8_ARMOR_CLOTH_HELL@3",
        "humanName": "Elder'sFiendRobe"
    },
    "3696": {
        "botName": "T4_SHOES_CLOTH_HELL",
        "humanName": "Adept'sFiendSandals"
    },
    "3697": {
        "botName": "T4_SHOES_CLOTH_HELL@1",
        "humanName": "Adept'sFiendSandals"
    },
    "3698": {
        "botName": "T4_SHOES_CLOTH_HELL@2",
        "humanName": "Adept'sFiendSandals"
    },
    "3699": {
        "botName": "T4_SHOES_CLOTH_HELL@3",
        "humanName": "Adept'sFiendSandals"
    },
    "3700": {
        "botName": "T5_SHOES_CLOTH_HELL",
        "humanName": "Expert'sFiendSandals"
    },
    "3701": {
        "botName": "T5_SHOES_CLOTH_HELL@1",
        "humanName": "Expert'sFiendSandals"
    },
    "3702": {
        "botName": "T5_SHOES_CLOTH_HELL@2",
        "humanName": "Expert'sFiendSandals"
    },
    "3703": {
        "botName": "T5_SHOES_CLOTH_HELL@3",
        "humanName": "Expert'sFiendSandals"
    },
    "3704": {
        "botName": "T6_SHOES_CLOTH_HELL",
        "humanName": "Master'sFiendSandals"
    },
    "3705": {
        "botName": "T6_SHOES_CLOTH_HELL@1",
        "humanName": "Master'sFiendSandals"
    },
    "3706": {
        "botName": "T6_SHOES_CLOTH_HELL@2",
        "humanName": "Master'sFiendSandals"
    },
    "3707": {
        "botName": "T6_SHOES_CLOTH_HELL@3",
        "humanName": "Master'sFiendSandals"
    },
    "3708": {
        "botName": "T7_SHOES_CLOTH_HELL",
        "humanName": "Grandmaster'sFiendSandals"
    },
    "3709": {
        "botName": "T7_SHOES_CLOTH_HELL@1",
        "humanName": "Grandmaster'sFiendSandals"
    },
    "3710": {
        "botName": "T7_SHOES_CLOTH_HELL@2",
        "humanName": "Grandmaster'sFiendSandals"
    },
    "3711": {
        "botName": "T7_SHOES_CLOTH_HELL@3",
        "humanName": "Grandmaster'sFiendSandals"
    },
    "3712": {
        "botName": "T8_SHOES_CLOTH_HELL",
        "humanName": "Elder'sFiendSandals"
    },
    "3713": {
        "botName": "T8_SHOES_CLOTH_HELL@1",
        "humanName": "Elder'sFiendSandals"
    },
    "3714": {
        "botName": "T8_SHOES_CLOTH_HELL@2",
        "humanName": "Elder'sFiendSandals"
    },
    "3715": {
        "botName": "T8_SHOES_CLOTH_HELL@3",
        "humanName": "Elder'sFiendSandals"
    },
    "3716": {
        "botName": "T4_HEAD_CLOTH_MORGANA",
        "humanName": "Adept'sCultistCowl"
    },
    "3717": {
        "botName": "T4_HEAD_CLOTH_MORGANA@1",
        "humanName": "Adept'sCultistCowl"
    },
    "3718": {
        "botName": "T4_HEAD_CLOTH_MORGANA@2",
        "humanName": "Adept'sCultistCowl"
    },
    "3719": {
        "botName": "T4_HEAD_CLOTH_MORGANA@3",
        "humanName": "Adept'sCultistCowl"
    },
    "3720": {
        "botName": "T5_HEAD_CLOTH_MORGANA",
        "humanName": "Expert'sCultistCowl"
    },
    "3721": {
        "botName": "T5_HEAD_CLOTH_MORGANA@1",
        "humanName": "Expert'sCultistCowl"
    },
    "3722": {
        "botName": "T5_HEAD_CLOTH_MORGANA@2",
        "humanName": "Expert'sCultistCowl"
    },
    "3723": {
        "botName": "T5_HEAD_CLOTH_MORGANA@3",
        "humanName": "Expert'sCultistCowl"
    },
    "3724": {
        "botName": "T6_HEAD_CLOTH_MORGANA",
        "humanName": "Master'sCultistCowl"
    },
    "3725": {
        "botName": "T6_HEAD_CLOTH_MORGANA@1",
        "humanName": "Master'sCultistCowl"
    },
    "3726": {
        "botName": "T6_HEAD_CLOTH_MORGANA@2",
        "humanName": "Master'sCultistCowl"
    },
    "3727": {
        "botName": "T6_HEAD_CLOTH_MORGANA@3",
        "humanName": "Master'sCultistCowl"
    },
    "3728": {
        "botName": "T7_HEAD_CLOTH_MORGANA",
        "humanName": "Grandmaster'sCultistCowl"
    },
    "3729": {
        "botName": "T7_HEAD_CLOTH_MORGANA@1",
        "humanName": "Grandmaster'sCultistCowl"
    },
    "3730": {
        "botName": "T7_HEAD_CLOTH_MORGANA@2",
        "humanName": "Grandmaster'sCultistCowl"
    },
    "3731": {
        "botName": "T7_HEAD_CLOTH_MORGANA@3",
        "humanName": "Grandmaster'sCultistCowl"
    },
    "3732": {
        "botName": "T8_HEAD_CLOTH_MORGANA",
        "humanName": "Elder'sCultistCowl"
    },
    "3733": {
        "botName": "T8_HEAD_CLOTH_MORGANA@1",
        "humanName": "Elder'sCultistCowl"
    },
    "3734": {
        "botName": "T8_HEAD_CLOTH_MORGANA@2",
        "humanName": "Elder'sCultistCowl"
    },
    "3735": {
        "botName": "T8_HEAD_CLOTH_MORGANA@3",
        "humanName": "Elder'sCultistCowl"
    },
    "3736": {
        "botName": "T4_ARMOR_CLOTH_MORGANA",
        "humanName": "Adept'sCultistRobe"
    },
    "3737": {
        "botName": "T4_ARMOR_CLOTH_MORGANA@1",
        "humanName": "Adept'sCultistRobe"
    },
    "3738": {
        "botName": "T4_ARMOR_CLOTH_MORGANA@2",
        "humanName": "Adept'sCultistRobe"
    },
    "3739": {
        "botName": "T4_ARMOR_CLOTH_MORGANA@3",
        "humanName": "Adept'sCultistRobe"
    },
    "3740": {
        "botName": "T5_ARMOR_CLOTH_MORGANA",
        "humanName": "Expert'sCultistRobe"
    },
    "3741": {
        "botName": "T5_ARMOR_CLOTH_MORGANA@1",
        "humanName": "Expert'sCultistRobe"
    },
    "3742": {
        "botName": "T5_ARMOR_CLOTH_MORGANA@2",
        "humanName": "Expert'sCultistRobe"
    },
    "3743": {
        "botName": "T5_ARMOR_CLOTH_MORGANA@3",
        "humanName": "Expert'sCultistRobe"
    },
    "3744": {
        "botName": "T6_ARMOR_CLOTH_MORGANA",
        "humanName": "Master'sCultistRobe"
    },
    "3745": {
        "botName": "T6_ARMOR_CLOTH_MORGANA@1",
        "humanName": "Master'sCultistRobe"
    },
    "3746": {
        "botName": "T6_ARMOR_CLOTH_MORGANA@2",
        "humanName": "Master'sCultistRobe"
    },
    "3747": {
        "botName": "T6_ARMOR_CLOTH_MORGANA@3",
        "humanName": "Master'sCultistRobe"
    },
    "3748": {
        "botName": "T7_ARMOR_CLOTH_MORGANA",
        "humanName": "Grandmaster'sCultistRobe"
    },
    "3749": {
        "botName": "T7_ARMOR_CLOTH_MORGANA@1",
        "humanName": "Grandmaster'sCultistRobe"
    },
    "3750": {
        "botName": "T7_ARMOR_CLOTH_MORGANA@2",
        "humanName": "Grandmaster'sCultistRobe"
    },
    "3751": {
        "botName": "T7_ARMOR_CLOTH_MORGANA@3",
        "humanName": "Grandmaster'sCultistRobe"
    },
    "3752": {
        "botName": "T8_ARMOR_CLOTH_MORGANA",
        "humanName": "Elder'sCultistRobe"
    },
    "3753": {
        "botName": "T8_ARMOR_CLOTH_MORGANA@1",
        "humanName": "Elder'sCultistRobe"
    },
    "3754": {
        "botName": "T8_ARMOR_CLOTH_MORGANA@2",
        "humanName": "Elder'sCultistRobe"
    },
    "3755": {
        "botName": "T8_ARMOR_CLOTH_MORGANA@3",
        "humanName": "Elder'sCultistRobe"
    },
    "3756": {
        "botName": "T4_SHOES_CLOTH_MORGANA",
        "humanName": "Adept'sCultistSandals"
    },
    "3757": {
        "botName": "T4_SHOES_CLOTH_MORGANA@1",
        "humanName": "Adept'sCultistSandals"
    },
    "3758": {
        "botName": "T4_SHOES_CLOTH_MORGANA@2",
        "humanName": "Adept'sCultistSandals"
    },
    "3759": {
        "botName": "T4_SHOES_CLOTH_MORGANA@3",
        "humanName": "Adept'sCultistSandals"
    },
    "3760": {
        "botName": "T5_SHOES_CLOTH_MORGANA",
        "humanName": "Expert'sCultistSandals"
    },
    "3761": {
        "botName": "T5_SHOES_CLOTH_MORGANA@1",
        "humanName": "Expert'sCultistSandals"
    },
    "3762": {
        "botName": "T5_SHOES_CLOTH_MORGANA@2",
        "humanName": "Expert'sCultistSandals"
    },
    "3763": {
        "botName": "T5_SHOES_CLOTH_MORGANA@3",
        "humanName": "Expert'sCultistSandals"
    },
    "3764": {
        "botName": "T6_SHOES_CLOTH_MORGANA",
        "humanName": "Master'sCultistSandals"
    },
    "3765": {
        "botName": "T6_SHOES_CLOTH_MORGANA@1",
        "humanName": "Master'sCultistSandals"
    },
    "3766": {
        "botName": "T6_SHOES_CLOTH_MORGANA@2",
        "humanName": "Master'sCultistSandals"
    },
    "3767": {
        "botName": "T6_SHOES_CLOTH_MORGANA@3",
        "humanName": "Master'sCultistSandals"
    },
    "3768": {
        "botName": "T7_SHOES_CLOTH_MORGANA",
        "humanName": "Grandmaster'sCultistSandals"
    },
    "3769": {
        "botName": "T7_SHOES_CLOTH_MORGANA@1",
        "humanName": "Grandmaster'sCultistSandals"
    },
    "3770": {
        "botName": "T7_SHOES_CLOTH_MORGANA@2",
        "humanName": "Grandmaster'sCultistSandals"
    },
    "3771": {
        "botName": "T7_SHOES_CLOTH_MORGANA@3",
        "humanName": "Grandmaster'sCultistSandals"
    },
    "3772": {
        "botName": "T8_SHOES_CLOTH_MORGANA",
        "humanName": "Elder'sCultistSandals"
    },
    "3773": {
        "botName": "T8_SHOES_CLOTH_MORGANA@1",
        "humanName": "Elder'sCultistSandals"
    },
    "3774": {
        "botName": "T8_SHOES_CLOTH_MORGANA@2",
        "humanName": "Elder'sCultistSandals"
    },
    "3775": {
        "botName": "T8_SHOES_CLOTH_MORGANA@3",
        "humanName": "Elder'sCultistSandals"
    },
    "3776": {
        "botName": "T4_HEAD_CLOTH_AVALON",
        "humanName": "Adept'sCowlofPurity"
    },
    "3777": {
        "botName": "T4_HEAD_CLOTH_AVALON@1",
        "humanName": "Adept'sCowlofPurity"
    },
    "3778": {
        "botName": "T4_HEAD_CLOTH_AVALON@2",
        "humanName": "Adept'sCowlofPurity"
    },
    "3779": {
        "botName": "T4_HEAD_CLOTH_AVALON@3",
        "humanName": "Adept'sCowlofPurity"
    },
    "3780": {
        "botName": "T5_HEAD_CLOTH_AVALON",
        "humanName": "Expert'sCowlofPurity"
    },
    "3781": {
        "botName": "T5_HEAD_CLOTH_AVALON@1",
        "humanName": "Expert'sCowlofPurity"
    },
    "3782": {
        "botName": "T5_HEAD_CLOTH_AVALON@2",
        "humanName": "Expert'sCowlofPurity"
    },
    "3783": {
        "botName": "T5_HEAD_CLOTH_AVALON@3",
        "humanName": "Expert'sCowlofPurity"
    },
    "3784": {
        "botName": "T6_HEAD_CLOTH_AVALON",
        "humanName": "Master'sCowlofPurity"
    },
    "3785": {
        "botName": "T6_HEAD_CLOTH_AVALON@1",
        "humanName": "Master'sCowlofPurity"
    },
    "3786": {
        "botName": "T6_HEAD_CLOTH_AVALON@2",
        "humanName": "Master'sCowlofPurity"
    },
    "3787": {
        "botName": "T6_HEAD_CLOTH_AVALON@3",
        "humanName": "Master'sCowlofPurity"
    },
    "3788": {
        "botName": "T7_HEAD_CLOTH_AVALON",
        "humanName": "Grandmaster'sCowlofPurity"
    },
    "3789": {
        "botName": "T7_HEAD_CLOTH_AVALON@1",
        "humanName": "Grandmaster'sCowlofPurity"
    },
    "3790": {
        "botName": "T7_HEAD_CLOTH_AVALON@2",
        "humanName": "Grandmaster'sCowlofPurity"
    },
    "3791": {
        "botName": "T7_HEAD_CLOTH_AVALON@3",
        "humanName": "Grandmaster'sCowlofPurity"
    },
    "3792": {
        "botName": "T8_HEAD_CLOTH_AVALON",
        "humanName": "Elder'sCowlofPurity"
    },
    "3793": {
        "botName": "T8_HEAD_CLOTH_AVALON@1",
        "humanName": "Elder'sCowlofPurity"
    },
    "3794": {
        "botName": "T8_HEAD_CLOTH_AVALON@2",
        "humanName": "Elder'sCowlofPurity"
    },
    "3795": {
        "botName": "T8_HEAD_CLOTH_AVALON@3",
        "humanName": "Elder'sCowlofPurity"
    },
    "3796": {
        "botName": "T4_ARMOR_CLOTH_AVALON",
        "humanName": "Adept'sRobeofPurity"
    },
    "3797": {
        "botName": "T4_ARMOR_CLOTH_AVALON@1",
        "humanName": "Adept'sRobeofPurity"
    },
    "3798": {
        "botName": "T4_ARMOR_CLOTH_AVALON@2",
        "humanName": "Adept'sRobeofPurity"
    },
    "3799": {
        "botName": "T4_ARMOR_CLOTH_AVALON@3",
        "humanName": "Adept'sRobeofPurity"
    },
    "3800": {
        "botName": "T5_ARMOR_CLOTH_AVALON",
        "humanName": "Expert'sRobeofPurity"
    },
    "3801": {
        "botName": "T5_ARMOR_CLOTH_AVALON@1",
        "humanName": "Expert'sRobeofPurity"
    },
    "3802": {
        "botName": "T5_ARMOR_CLOTH_AVALON@2",
        "humanName": "Expert'sRobeofPurity"
    },
    "3803": {
        "botName": "T5_ARMOR_CLOTH_AVALON@3",
        "humanName": "Expert'sRobeofPurity"
    },
    "3804": {
        "botName": "T6_ARMOR_CLOTH_AVALON",
        "humanName": "Master'sRobeofPurity"
    },
    "3805": {
        "botName": "T6_ARMOR_CLOTH_AVALON@1",
        "humanName": "Master'sRobeofPurity"
    },
    "3806": {
        "botName": "T6_ARMOR_CLOTH_AVALON@2",
        "humanName": "Master'sRobeofPurity"
    },
    "3807": {
        "botName": "T6_ARMOR_CLOTH_AVALON@3",
        "humanName": "Master'sRobeofPurity"
    },
    "3808": {
        "botName": "T7_ARMOR_CLOTH_AVALON",
        "humanName": "Grandmaster'sRobeofPurity"
    },
    "3809": {
        "botName": "T7_ARMOR_CLOTH_AVALON@1",
        "humanName": "Grandmaster'sRobeofPurity"
    },
    "3810": {
        "botName": "T7_ARMOR_CLOTH_AVALON@2",
        "humanName": "Grandmaster'sRobeofPurity"
    },
    "3811": {
        "botName": "T7_ARMOR_CLOTH_AVALON@3",
        "humanName": "Grandmaster'sRobeofPurity"
    },
    "3812": {
        "botName": "T8_ARMOR_CLOTH_AVALON",
        "humanName": "Elder'sRobeofPurity"
    },
    "3813": {
        "botName": "T8_ARMOR_CLOTH_AVALON@1",
        "humanName": "Elder'sRobeofPurity"
    },
    "3814": {
        "botName": "T8_ARMOR_CLOTH_AVALON@2",
        "humanName": "Elder'sRobeofPurity"
    },
    "3815": {
        "botName": "T8_ARMOR_CLOTH_AVALON@3",
        "humanName": "Elder'sRobeofPurity"
    },
    "3816": {
        "botName": "T4_SHOES_CLOTH_AVALON",
        "humanName": "Adept'sSandalsofPurity"
    },
    "3817": {
        "botName": "T4_SHOES_CLOTH_AVALON@1",
        "humanName": "Adept'sSandalsofPurity"
    },
    "3818": {
        "botName": "T4_SHOES_CLOTH_AVALON@2",
        "humanName": "Adept'sSandalsofPurity"
    },
    "3819": {
        "botName": "T4_SHOES_CLOTH_AVALON@3",
        "humanName": "Adept'sSandalsofPurity"
    },
    "3820": {
        "botName": "T5_SHOES_CLOTH_AVALON",
        "humanName": "Expert'sSandalsofPurity"
    },
    "3821": {
        "botName": "T5_SHOES_CLOTH_AVALON@1",
        "humanName": "Expert'sSandalsofPurity"
    },
    "3822": {
        "botName": "T5_SHOES_CLOTH_AVALON@2",
        "humanName": "Expert'sSandalsofPurity"
    },
    "3823": {
        "botName": "T5_SHOES_CLOTH_AVALON@3",
        "humanName": "Expert'sSandalsofPurity"
    },
    "3824": {
        "botName": "T6_SHOES_CLOTH_AVALON",
        "humanName": "Master'sSandalsofPurity"
    },
    "3825": {
        "botName": "T6_SHOES_CLOTH_AVALON@1",
        "humanName": "Master'sSandalsofPurity"
    },
    "3826": {
        "botName": "T6_SHOES_CLOTH_AVALON@2",
        "humanName": "Master'sSandalsofPurity"
    },
    "3827": {
        "botName": "T6_SHOES_CLOTH_AVALON@3",
        "humanName": "Master'sSandalsofPurity"
    },
    "3828": {
        "botName": "T7_SHOES_CLOTH_AVALON",
        "humanName": "Grandmaster'sSandalsofPurity"
    },
    "3829": {
        "botName": "T7_SHOES_CLOTH_AVALON@1",
        "humanName": "Grandmaster'sSandalsofPurity"
    },
    "3830": {
        "botName": "T7_SHOES_CLOTH_AVALON@2",
        "humanName": "Grandmaster'sSandalsofPurity"
    },
    "3831": {
        "botName": "T7_SHOES_CLOTH_AVALON@3",
        "humanName": "Grandmaster'sSandalsofPurity"
    },
    "3832": {
        "botName": "T8_SHOES_CLOTH_AVALON",
        "humanName": "Elder'sSandalsofPurity"
    },
    "3833": {
        "botName": "T8_SHOES_CLOTH_AVALON@1",
        "humanName": "Elder'sSandalsofPurity"
    },
    "3834": {
        "botName": "T8_SHOES_CLOTH_AVALON@2",
        "humanName": "Elder'sSandalsofPurity"
    },
    "3835": {
        "botName": "T8_SHOES_CLOTH_AVALON@3",
        "humanName": "Elder'sSandalsofPurity"
    },
    "3836": {
        "botName": "T4_HEAD_CLOTH_ROYAL",
        "humanName": "Adept'sRoyalCowl"
    },
    "3837": {
        "botName": "T4_HEAD_CLOTH_ROYAL@1",
        "humanName": "Adept'sRoyalCowl"
    },
    "3838": {
        "botName": "T4_HEAD_CLOTH_ROYAL@2",
        "humanName": "Adept'sRoyalCowl"
    },
    "3839": {
        "botName": "T4_HEAD_CLOTH_ROYAL@3",
        "humanName": "Adept'sRoyalCowl"
    },
    "3840": {
        "botName": "T5_HEAD_CLOTH_ROYAL",
        "humanName": "Expert'sRoyalCowl"
    },
    "3841": {
        "botName": "T5_HEAD_CLOTH_ROYAL@1",
        "humanName": "Expert'sRoyalCowl"
    },
    "3842": {
        "botName": "T5_HEAD_CLOTH_ROYAL@2",
        "humanName": "Expert'sRoyalCowl"
    },
    "3843": {
        "botName": "T5_HEAD_CLOTH_ROYAL@3",
        "humanName": "Expert'sRoyalCowl"
    },
    "3844": {
        "botName": "T6_HEAD_CLOTH_ROYAL",
        "humanName": "Master'sRoyalCowl"
    },
    "3845": {
        "botName": "T6_HEAD_CLOTH_ROYAL@1",
        "humanName": "Master'sRoyalCowl"
    },
    "3846": {
        "botName": "T6_HEAD_CLOTH_ROYAL@2",
        "humanName": "Master'sRoyalCowl"
    },
    "3847": {
        "botName": "T6_HEAD_CLOTH_ROYAL@3",
        "humanName": "Master'sRoyalCowl"
    },
    "3848": {
        "botName": "T7_HEAD_CLOTH_ROYAL",
        "humanName": "Grandmaster'sRoyalCowl"
    },
    "3849": {
        "botName": "T7_HEAD_CLOTH_ROYAL@1",
        "humanName": "Grandmaster'sRoyalCowl"
    },
    "3850": {
        "botName": "T7_HEAD_CLOTH_ROYAL@2",
        "humanName": "Grandmaster'sRoyalCowl"
    },
    "3851": {
        "botName": "T7_HEAD_CLOTH_ROYAL@3",
        "humanName": "Grandmaster'sRoyalCowl"
    },
    "3852": {
        "botName": "T8_HEAD_CLOTH_ROYAL",
        "humanName": "Elder'sRoyalCowl"
    },
    "3853": {
        "botName": "T8_HEAD_CLOTH_ROYAL@1",
        "humanName": "Elder'sRoyalCowl"
    },
    "3854": {
        "botName": "T8_HEAD_CLOTH_ROYAL@2",
        "humanName": "Elder'sRoyalCowl"
    },
    "3855": {
        "botName": "T8_HEAD_CLOTH_ROYAL@3",
        "humanName": "Elder'sRoyalCowl"
    },
    "3856": {
        "botName": "T4_ARMOR_CLOTH_ROYAL",
        "humanName": "Adept'sRoyalRobe"
    },
    "3857": {
        "botName": "T4_ARMOR_CLOTH_ROYAL@1",
        "humanName": "Adept'sRoyalRobe"
    },
    "3858": {
        "botName": "T4_ARMOR_CLOTH_ROYAL@2",
        "humanName": "Adept'sRoyalRobe"
    },
    "3859": {
        "botName": "T4_ARMOR_CLOTH_ROYAL@3",
        "humanName": "Adept'sRoyalRobe"
    },
    "3860": {
        "botName": "T5_ARMOR_CLOTH_ROYAL",
        "humanName": "Expert'sRoyalRobe"
    },
    "3861": {
        "botName": "T5_ARMOR_CLOTH_ROYAL@1",
        "humanName": "Expert'sRoyalRobe"
    },
    "3862": {
        "botName": "T5_ARMOR_CLOTH_ROYAL@2",
        "humanName": "Expert'sRoyalRobe"
    },
    "3863": {
        "botName": "T5_ARMOR_CLOTH_ROYAL@3",
        "humanName": "Expert'sRoyalRobe"
    },
    "3864": {
        "botName": "T6_ARMOR_CLOTH_ROYAL",
        "humanName": "Master'sRoyalRobe"
    },
    "3865": {
        "botName": "T6_ARMOR_CLOTH_ROYAL@1",
        "humanName": "Master'sRoyalRobe"
    },
    "3866": {
        "botName": "T6_ARMOR_CLOTH_ROYAL@2",
        "humanName": "Master'sRoyalRobe"
    },
    "3867": {
        "botName": "T6_ARMOR_CLOTH_ROYAL@3",
        "humanName": "Master'sRoyalRobe"
    },
    "3868": {
        "botName": "T7_ARMOR_CLOTH_ROYAL",
        "humanName": "Grandmaster'sRoyalRobe"
    },
    "3869": {
        "botName": "T7_ARMOR_CLOTH_ROYAL@1",
        "humanName": "Grandmaster'sRoyalRobe"
    },
    "3870": {
        "botName": "T7_ARMOR_CLOTH_ROYAL@2",
        "humanName": "Grandmaster'sRoyalRobe"
    },
    "3871": {
        "botName": "T7_ARMOR_CLOTH_ROYAL@3",
        "humanName": "Grandmaster'sRoyalRobe"
    },
    "3872": {
        "botName": "T8_ARMOR_CLOTH_ROYAL",
        "humanName": "Elder'sRoyalRobe"
    },
    "3873": {
        "botName": "T8_ARMOR_CLOTH_ROYAL@1",
        "humanName": "Elder'sRoyalRobe"
    },
    "3874": {
        "botName": "T8_ARMOR_CLOTH_ROYAL@2",
        "humanName": "Elder'sRoyalRobe"
    },
    "3875": {
        "botName": "T8_ARMOR_CLOTH_ROYAL@3",
        "humanName": "Elder'sRoyalRobe"
    },
    "3876": {
        "botName": "T4_SHOES_CLOTH_ROYAL",
        "humanName": "Adept'sRoyalSandals"
    },
    "3877": {
        "botName": "T4_SHOES_CLOTH_ROYAL@1",
        "humanName": "Adept'sRoyalSandals"
    },
    "3878": {
        "botName": "T4_SHOES_CLOTH_ROYAL@2",
        "humanName": "Adept'sRoyalSandals"
    },
    "3879": {
        "botName": "T4_SHOES_CLOTH_ROYAL@3",
        "humanName": "Adept'sRoyalSandals"
    },
    "3880": {
        "botName": "T5_SHOES_CLOTH_ROYAL",
        "humanName": "Expert'sRoyalSandals"
    },
    "3881": {
        "botName": "T5_SHOES_CLOTH_ROYAL@1",
        "humanName": "Expert'sRoyalSandals"
    },
    "3882": {
        "botName": "T5_SHOES_CLOTH_ROYAL@2",
        "humanName": "Expert'sRoyalSandals"
    },
    "3883": {
        "botName": "T5_SHOES_CLOTH_ROYAL@3",
        "humanName": "Expert'sRoyalSandals"
    },
    "3884": {
        "botName": "T6_SHOES_CLOTH_ROYAL",
        "humanName": "Master'sRoyalSandals"
    },
    "3885": {
        "botName": "T6_SHOES_CLOTH_ROYAL@1",
        "humanName": "Master'sRoyalSandals"
    },
    "3886": {
        "botName": "T6_SHOES_CLOTH_ROYAL@2",
        "humanName": "Master'sRoyalSandals"
    },
    "3887": {
        "botName": "T6_SHOES_CLOTH_ROYAL@3",
        "humanName": "Master'sRoyalSandals"
    },
    "3888": {
        "botName": "T7_SHOES_CLOTH_ROYAL",
        "humanName": "Grandmaster'sRoyalSandals"
    },
    "3889": {
        "botName": "T7_SHOES_CLOTH_ROYAL@1",
        "humanName": "Grandmaster'sRoyalSandals"
    },
    "3890": {
        "botName": "T7_SHOES_CLOTH_ROYAL@2",
        "humanName": "Grandmaster'sRoyalSandals"
    },
    "3891": {
        "botName": "T7_SHOES_CLOTH_ROYAL@3",
        "humanName": "Grandmaster'sRoyalSandals"
    },
    "3892": {
        "botName": "T8_SHOES_CLOTH_ROYAL",
        "humanName": "Elder'sRoyalSandals"
    },
    "3893": {
        "botName": "T8_SHOES_CLOTH_ROYAL@1",
        "humanName": "Elder'sRoyalSandals"
    },
    "3894": {
        "botName": "T8_SHOES_CLOTH_ROYAL@2",
        "humanName": "Elder'sRoyalSandals"
    },
    "3895": {
        "botName": "T8_SHOES_CLOTH_ROYAL@3",
        "humanName": "Elder'sRoyalSandals"
    },
    "3896": {
        "botName": "T4_HEAD_LEATHER_ROYAL",
        "humanName": "Adept'sRoyalHood"
    },
    "3897": {
        "botName": "T4_HEAD_LEATHER_ROYAL@1",
        "humanName": "Adept'sRoyalHood"
    },
    "3898": {
        "botName": "T4_HEAD_LEATHER_ROYAL@2",
        "humanName": "Adept'sRoyalHood"
    },
    "3899": {
        "botName": "T4_HEAD_LEATHER_ROYAL@3",
        "humanName": "Adept'sRoyalHood"
    },
    "3900": {
        "botName": "T5_HEAD_LEATHER_ROYAL",
        "humanName": "Expert'sRoyalHood"
    },
    "3901": {
        "botName": "T5_HEAD_LEATHER_ROYAL@1",
        "humanName": "Expert'sRoyalHood"
    },
    "3902": {
        "botName": "T5_HEAD_LEATHER_ROYAL@2",
        "humanName": "Expert'sRoyalHood"
    },
    "3903": {
        "botName": "T5_HEAD_LEATHER_ROYAL@3",
        "humanName": "Expert'sRoyalHood"
    },
    "3904": {
        "botName": "T6_HEAD_LEATHER_ROYAL",
        "humanName": "Master'sRoyalHood"
    },
    "3905": {
        "botName": "T6_HEAD_LEATHER_ROYAL@1",
        "humanName": "Master'sRoyalHood"
    },
    "3906": {
        "botName": "T6_HEAD_LEATHER_ROYAL@2",
        "humanName": "Master'sRoyalHood"
    },
    "3907": {
        "botName": "T6_HEAD_LEATHER_ROYAL@3",
        "humanName": "Master'sRoyalHood"
    },
    "3908": {
        "botName": "T7_HEAD_LEATHER_ROYAL",
        "humanName": "Grandmaster'sRoyalHood"
    },
    "3909": {
        "botName": "T7_HEAD_LEATHER_ROYAL@1",
        "humanName": "Grandmaster'sRoyalHood"
    },
    "3910": {
        "botName": "T7_HEAD_LEATHER_ROYAL@2",
        "humanName": "Grandmaster'sRoyalHood"
    },
    "3911": {
        "botName": "T7_HEAD_LEATHER_ROYAL@3",
        "humanName": "Grandmaster'sRoyalHood"
    },
    "3912": {
        "botName": "T8_HEAD_LEATHER_ROYAL",
        "humanName": "Elder'sRoyalHood"
    },
    "3913": {
        "botName": "T8_HEAD_LEATHER_ROYAL@1",
        "humanName": "Elder'sRoyalHood"
    },
    "3914": {
        "botName": "T8_HEAD_LEATHER_ROYAL@2",
        "humanName": "Elder'sRoyalHood"
    },
    "3915": {
        "botName": "T8_HEAD_LEATHER_ROYAL@3",
        "humanName": "Elder'sRoyalHood"
    },
    "3916": {
        "botName": "T4_ARMOR_LEATHER_ROYAL",
        "humanName": "Adept'sRoyalJacket"
    },
    "3917": {
        "botName": "T4_ARMOR_LEATHER_ROYAL@1",
        "humanName": "Adept'sRoyalJacket"
    },
    "3918": {
        "botName": "T4_ARMOR_LEATHER_ROYAL@2",
        "humanName": "Adept'sRoyalJacket"
    },
    "3919": {
        "botName": "T4_ARMOR_LEATHER_ROYAL@3",
        "humanName": "Adept'sRoyalJacket"
    },
    "3920": {
        "botName": "T5_ARMOR_LEATHER_ROYAL",
        "humanName": "Expert'sRoyalJacket"
    },
    "3921": {
        "botName": "T5_ARMOR_LEATHER_ROYAL@1",
        "humanName": "Expert'sRoyalJacket"
    },
    "3922": {
        "botName": "T5_ARMOR_LEATHER_ROYAL@2",
        "humanName": "Expert'sRoyalJacket"
    },
    "3923": {
        "botName": "T5_ARMOR_LEATHER_ROYAL@3",
        "humanName": "Expert'sRoyalJacket"
    },
    "3924": {
        "botName": "T6_ARMOR_LEATHER_ROYAL",
        "humanName": "Master'sRoyalJacket"
    },
    "3925": {
        "botName": "T6_ARMOR_LEATHER_ROYAL@1",
        "humanName": "Master'sRoyalJacket"
    },
    "3926": {
        "botName": "T6_ARMOR_LEATHER_ROYAL@2",
        "humanName": "Master'sRoyalJacket"
    },
    "3927": {
        "botName": "T6_ARMOR_LEATHER_ROYAL@3",
        "humanName": "Master'sRoyalJacket"
    },
    "3928": {
        "botName": "T7_ARMOR_LEATHER_ROYAL",
        "humanName": "Grandmaster'sRoyalJacket"
    },
    "3929": {
        "botName": "T7_ARMOR_LEATHER_ROYAL@1",
        "humanName": "Grandmaster'sRoyalJacket"
    },
    "3930": {
        "botName": "T7_ARMOR_LEATHER_ROYAL@2",
        "humanName": "Grandmaster'sRoyalJacket"
    },
    "3931": {
        "botName": "T7_ARMOR_LEATHER_ROYAL@3",
        "humanName": "Grandmaster'sRoyalJacket"
    },
    "3932": {
        "botName": "T8_ARMOR_LEATHER_ROYAL",
        "humanName": "Elder'sRoyalJacket"
    },
    "3933": {
        "botName": "T8_ARMOR_LEATHER_ROYAL@1",
        "humanName": "Elder'sRoyalJacket"
    },
    "3934": {
        "botName": "T8_ARMOR_LEATHER_ROYAL@2",
        "humanName": "Elder'sRoyalJacket"
    },
    "3935": {
        "botName": "T8_ARMOR_LEATHER_ROYAL@3",
        "humanName": "Elder'sRoyalJacket"
    },
    "3936": {
        "botName": "T4_SHOES_LEATHER_ROYAL",
        "humanName": "Adept'sRoyalShoes"
    },
    "3937": {
        "botName": "T4_SHOES_LEATHER_ROYAL@1",
        "humanName": "Adept'sRoyalShoes"
    },
    "3938": {
        "botName": "T4_SHOES_LEATHER_ROYAL@2",
        "humanName": "Adept'sRoyalShoes"
    },
    "3939": {
        "botName": "T4_SHOES_LEATHER_ROYAL@3",
        "humanName": "Adept'sRoyalShoes"
    },
    "3940": {
        "botName": "T5_SHOES_LEATHER_ROYAL",
        "humanName": "Expert'sRoyalShoes"
    },
    "3941": {
        "botName": "T5_SHOES_LEATHER_ROYAL@1",
        "humanName": "Expert'sRoyalShoes"
    },
    "3942": {
        "botName": "T5_SHOES_LEATHER_ROYAL@2",
        "humanName": "Expert'sRoyalShoes"
    },
    "3943": {
        "botName": "T5_SHOES_LEATHER_ROYAL@3",
        "humanName": "Expert'sRoyalShoes"
    },
    "3944": {
        "botName": "T6_SHOES_LEATHER_ROYAL",
        "humanName": "Master'sRoyalShoes"
    },
    "3945": {
        "botName": "T6_SHOES_LEATHER_ROYAL@1",
        "humanName": "Master'sRoyalShoes"
    },
    "3946": {
        "botName": "T6_SHOES_LEATHER_ROYAL@2",
        "humanName": "Master'sRoyalShoes"
    },
    "3947": {
        "botName": "T6_SHOES_LEATHER_ROYAL@3",
        "humanName": "Master'sRoyalShoes"
    },
    "3948": {
        "botName": "T7_SHOES_LEATHER_ROYAL",
        "humanName": "Grandmaster'sRoyalShoes"
    },
    "3949": {
        "botName": "T7_SHOES_LEATHER_ROYAL@1",
        "humanName": "Grandmaster'sRoyalShoes"
    },
    "3950": {
        "botName": "T7_SHOES_LEATHER_ROYAL@2",
        "humanName": "Grandmaster'sRoyalShoes"
    },
    "3951": {
        "botName": "T7_SHOES_LEATHER_ROYAL@3",
        "humanName": "Grandmaster'sRoyalShoes"
    },
    "3952": {
        "botName": "T8_SHOES_LEATHER_ROYAL",
        "humanName": "Elder'sRoyalShoes"
    },
    "3953": {
        "botName": "T8_SHOES_LEATHER_ROYAL@1",
        "humanName": "Elder'sRoyalShoes"
    },
    "3954": {
        "botName": "T8_SHOES_LEATHER_ROYAL@2",
        "humanName": "Elder'sRoyalShoes"
    },
    "3955": {
        "botName": "T8_SHOES_LEATHER_ROYAL@3",
        "humanName": "Elder'sRoyalShoes"
    },
    "3956": {
        "botName": "T4_HEAD_PLATE_ROYAL",
        "humanName": "Adept'sRoyalHelmet"
    },
    "3957": {
        "botName": "T4_HEAD_PLATE_ROYAL@1",
        "humanName": "Adept'sRoyalHelmet"
    },
    "3958": {
        "botName": "T4_HEAD_PLATE_ROYAL@2",
        "humanName": "Adept'sRoyalHelmet"
    },
    "3959": {
        "botName": "T4_HEAD_PLATE_ROYAL@3",
        "humanName": "Adept'sRoyalHelmet"
    },
    "3960": {
        "botName": "T5_HEAD_PLATE_ROYAL",
        "humanName": "Expert'sRoyalHelmet"
    },
    "3961": {
        "botName": "T5_HEAD_PLATE_ROYAL@1",
        "humanName": "Expert'sRoyalHelmet"
    },
    "3962": {
        "botName": "T5_HEAD_PLATE_ROYAL@2",
        "humanName": "Expert'sRoyalHelmet"
    },
    "3963": {
        "botName": "T5_HEAD_PLATE_ROYAL@3",
        "humanName": "Expert'sRoyalHelmet"
    },
    "3964": {
        "botName": "T6_HEAD_PLATE_ROYAL",
        "humanName": "Master'sRoyalHelmet"
    },
    "3965": {
        "botName": "T6_HEAD_PLATE_ROYAL@1",
        "humanName": "Master'sRoyalHelmet"
    },
    "3966": {
        "botName": "T6_HEAD_PLATE_ROYAL@2",
        "humanName": "Master'sRoyalHelmet"
    },
    "3967": {
        "botName": "T6_HEAD_PLATE_ROYAL@3",
        "humanName": "Master'sRoyalHelmet"
    },
    "3968": {
        "botName": "T7_HEAD_PLATE_ROYAL",
        "humanName": "Grandmaster'sRoyalHelmet"
    },
    "3969": {
        "botName": "T7_HEAD_PLATE_ROYAL@1",
        "humanName": "Grandmaster'sRoyalHelmet"
    },
    "3970": {
        "botName": "T7_HEAD_PLATE_ROYAL@2",
        "humanName": "Grandmaster'sRoyalHelmet"
    },
    "3971": {
        "botName": "T7_HEAD_PLATE_ROYAL@3",
        "humanName": "Grandmaster'sRoyalHelmet"
    },
    "3972": {
        "botName": "T8_HEAD_PLATE_ROYAL",
        "humanName": "Elder'sRoyalHelmet"
    },
    "3973": {
        "botName": "T8_HEAD_PLATE_ROYAL@1",
        "humanName": "Elder'sRoyalHelmet"
    },
    "3974": {
        "botName": "T8_HEAD_PLATE_ROYAL@2",
        "humanName": "Elder'sRoyalHelmet"
    },
    "3975": {
        "botName": "T8_HEAD_PLATE_ROYAL@3",
        "humanName": "Elder'sRoyalHelmet"
    },
    "3976": {
        "botName": "T4_ARMOR_PLATE_ROYAL",
        "humanName": "Adept'sRoyalArmor"
    },
    "3977": {
        "botName": "T4_ARMOR_PLATE_ROYAL@1",
        "humanName": "Adept'sRoyalArmor"
    },
    "3978": {
        "botName": "T4_ARMOR_PLATE_ROYAL@2",
        "humanName": "Adept'sRoyalArmor"
    },
    "3979": {
        "botName": "T4_ARMOR_PLATE_ROYAL@3",
        "humanName": "Adept'sRoyalArmor"
    },
    "3980": {
        "botName": "T5_ARMOR_PLATE_ROYAL",
        "humanName": "Expert'sRoyalArmor"
    },
    "3981": {
        "botName": "T5_ARMOR_PLATE_ROYAL@1",
        "humanName": "Expert'sRoyalArmor"
    },
    "3982": {
        "botName": "T5_ARMOR_PLATE_ROYAL@2",
        "humanName": "Expert'sRoyalArmor"
    },
    "3983": {
        "botName": "T5_ARMOR_PLATE_ROYAL@3",
        "humanName": "Expert'sRoyalArmor"
    },
    "3984": {
        "botName": "T6_ARMOR_PLATE_ROYAL",
        "humanName": "Master'sRoyalArmor"
    },
    "3985": {
        "botName": "T6_ARMOR_PLATE_ROYAL@1",
        "humanName": "Master'sRoyalArmor"
    },
    "3986": {
        "botName": "T6_ARMOR_PLATE_ROYAL@2",
        "humanName": "Master'sRoyalArmor"
    },
    "3987": {
        "botName": "T6_ARMOR_PLATE_ROYAL@3",
        "humanName": "Master'sRoyalArmor"
    },
    "3988": {
        "botName": "T7_ARMOR_PLATE_ROYAL",
        "humanName": "Grandmaster'sRoyalArmor"
    },
    "3989": {
        "botName": "T7_ARMOR_PLATE_ROYAL@1",
        "humanName": "Grandmaster'sRoyalArmor"
    },
    "3990": {
        "botName": "T7_ARMOR_PLATE_ROYAL@2",
        "humanName": "Grandmaster'sRoyalArmor"
    },
    "3991": {
        "botName": "T7_ARMOR_PLATE_ROYAL@3",
        "humanName": "Grandmaster'sRoyalArmor"
    },
    "3992": {
        "botName": "T8_ARMOR_PLATE_ROYAL",
        "humanName": "Elder'sRoyalArmor"
    },
    "3993": {
        "botName": "T8_ARMOR_PLATE_ROYAL@1",
        "humanName": "Elder'sRoyalArmor"
    },
    "3994": {
        "botName": "T8_ARMOR_PLATE_ROYAL@2",
        "humanName": "Elder'sRoyalArmor"
    },
    "3995": {
        "botName": "T8_ARMOR_PLATE_ROYAL@3",
        "humanName": "Elder'sRoyalArmor"
    },
    "3996": {
        "botName": "T4_SHOES_PLATE_ROYAL",
        "humanName": "Adept'sRoyalBoots"
    },
    "3997": {
        "botName": "T4_SHOES_PLATE_ROYAL@1",
        "humanName": "Adept'sRoyalBoots"
    },
    "3998": {
        "botName": "T4_SHOES_PLATE_ROYAL@2",
        "humanName": "Adept'sRoyalBoots"
    },
    "3999": {
        "botName": "T4_SHOES_PLATE_ROYAL@3",
        "humanName": "Adept'sRoyalBoots"
    },
    "4000": {
        "botName": "T5_SHOES_PLATE_ROYAL",
        "humanName": "Expert'sRoyalBoots"
    },
    "4001": {
        "botName": "T5_SHOES_PLATE_ROYAL@1",
        "humanName": "Expert'sRoyalBoots"
    },
    "4002": {
        "botName": "T5_SHOES_PLATE_ROYAL@2",
        "humanName": "Expert'sRoyalBoots"
    },
    "4003": {
        "botName": "T5_SHOES_PLATE_ROYAL@3",
        "humanName": "Expert'sRoyalBoots"
    },
    "4004": {
        "botName": "T6_SHOES_PLATE_ROYAL",
        "humanName": "Master'sRoyalBoots"
    },
    "4005": {
        "botName": "T6_SHOES_PLATE_ROYAL@1",
        "humanName": "Master'sRoyalBoots"
    },
    "4006": {
        "botName": "T6_SHOES_PLATE_ROYAL@2",
        "humanName": "Master'sRoyalBoots"
    },
    "4007": {
        "botName": "T6_SHOES_PLATE_ROYAL@3",
        "humanName": "Master'sRoyalBoots"
    },
    "4008": {
        "botName": "T7_SHOES_PLATE_ROYAL",
        "humanName": "Grandmaster'sRoyalBoots"
    },
    "4009": {
        "botName": "T7_SHOES_PLATE_ROYAL@1",
        "humanName": "Grandmaster'sRoyalBoots"
    },
    "4010": {
        "botName": "T7_SHOES_PLATE_ROYAL@2",
        "humanName": "Grandmaster'sRoyalBoots"
    },
    "4011": {
        "botName": "T7_SHOES_PLATE_ROYAL@3",
        "humanName": "Grandmaster'sRoyalBoots"
    },
    "4012": {
        "botName": "T8_SHOES_PLATE_ROYAL",
        "humanName": "Elder'sRoyalBoots"
    },
    "4013": {
        "botName": "T8_SHOES_PLATE_ROYAL@1",
        "humanName": "Elder'sRoyalBoots"
    },
    "4014": {
        "botName": "T8_SHOES_PLATE_ROYAL@2",
        "humanName": "Elder'sRoyalBoots"
    },
    "4015": {
        "botName": "T8_SHOES_PLATE_ROYAL@3",
        "humanName": "Elder'sRoyalBoots"
    },
    "4016": {
        "botName": "T4_HEAD_GATHERER_FIBER",
        "humanName": "Adept'sHarvesterCap"
    },
    "4017": {
        "botName": "T4_HEAD_GATHERER_FIBER@1",
        "humanName": "Adept'sHarvesterCap"
    },
    "4018": {
        "botName": "T4_HEAD_GATHERER_FIBER@2",
        "humanName": "Adept'sHarvesterCap"
    },
    "4019": {
        "botName": "T4_HEAD_GATHERER_FIBER@3",
        "humanName": "Adept'sHarvesterCap"
    },
    "4020": {
        "botName": "T5_HEAD_GATHERER_FIBER",
        "humanName": "Expert'sHarvesterCap"
    },
    "4021": {
        "botName": "T5_HEAD_GATHERER_FIBER@1",
        "humanName": "Expert'sHarvesterCap"
    },
    "4022": {
        "botName": "T5_HEAD_GATHERER_FIBER@2",
        "humanName": "Expert'sHarvesterCap"
    },
    "4023": {
        "botName": "T5_HEAD_GATHERER_FIBER@3",
        "humanName": "Expert'sHarvesterCap"
    },
    "4024": {
        "botName": "T6_HEAD_GATHERER_FIBER",
        "humanName": "Master'sHarvesterCap"
    },
    "4025": {
        "botName": "T6_HEAD_GATHERER_FIBER@1",
        "humanName": "Master'sHarvesterCap"
    },
    "4026": {
        "botName": "T6_HEAD_GATHERER_FIBER@2",
        "humanName": "Master'sHarvesterCap"
    },
    "4027": {
        "botName": "T6_HEAD_GATHERER_FIBER@3",
        "humanName": "Master'sHarvesterCap"
    },
    "4028": {
        "botName": "T7_HEAD_GATHERER_FIBER",
        "humanName": "Grandmaster'sHarvesterCap"
    },
    "4029": {
        "botName": "T7_HEAD_GATHERER_FIBER@1",
        "humanName": "Grandmaster'sHarvesterCap"
    },
    "4030": {
        "botName": "T7_HEAD_GATHERER_FIBER@2",
        "humanName": "Grandmaster'sHarvesterCap"
    },
    "4031": {
        "botName": "T7_HEAD_GATHERER_FIBER@3",
        "humanName": "Grandmaster'sHarvesterCap"
    },
    "4032": {
        "botName": "T8_HEAD_GATHERER_FIBER",
        "humanName": "Elder'sHarvesterCap"
    },
    "4033": {
        "botName": "T8_HEAD_GATHERER_FIBER@1",
        "humanName": "Elder'sHarvesterCap"
    },
    "4034": {
        "botName": "T8_HEAD_GATHERER_FIBER@2",
        "humanName": "Elder'sHarvesterCap"
    },
    "4035": {
        "botName": "T8_HEAD_GATHERER_FIBER@3",
        "humanName": "Elder'sHarvesterCap"
    },
    "4036": {
        "botName": "T4_ARMOR_GATHERER_FIBER",
        "humanName": "Adept'sHarvesterGarb"
    },
    "4037": {
        "botName": "T4_ARMOR_GATHERER_FIBER@1",
        "humanName": "Adept'sHarvesterGarb"
    },
    "4038": {
        "botName": "T4_ARMOR_GATHERER_FIBER@2",
        "humanName": "Adept'sHarvesterGarb"
    },
    "4039": {
        "botName": "T4_ARMOR_GATHERER_FIBER@3",
        "humanName": "Adept'sHarvesterGarb"
    },
    "4040": {
        "botName": "T5_ARMOR_GATHERER_FIBER",
        "humanName": "Expert'sHarvesterGarb"
    },
    "4041": {
        "botName": "T5_ARMOR_GATHERER_FIBER@1",
        "humanName": "Expert'sHarvesterGarb"
    },
    "4042": {
        "botName": "T5_ARMOR_GATHERER_FIBER@2",
        "humanName": "Expert'sHarvesterGarb"
    },
    "4043": {
        "botName": "T5_ARMOR_GATHERER_FIBER@3",
        "humanName": "Expert'sHarvesterGarb"
    },
    "4044": {
        "botName": "T6_ARMOR_GATHERER_FIBER",
        "humanName": "Master'sHarvesterGarb"
    },
    "4045": {
        "botName": "T6_ARMOR_GATHERER_FIBER@1",
        "humanName": "Master'sHarvesterGarb"
    },
    "4046": {
        "botName": "T6_ARMOR_GATHERER_FIBER@2",
        "humanName": "Master'sHarvesterGarb"
    },
    "4047": {
        "botName": "T6_ARMOR_GATHERER_FIBER@3",
        "humanName": "Master'sHarvesterGarb"
    },
    "4048": {
        "botName": "T7_ARMOR_GATHERER_FIBER",
        "humanName": "Grandmaster'sHarvesterGarb"
    },
    "4049": {
        "botName": "T7_ARMOR_GATHERER_FIBER@1",
        "humanName": "Grandmaster'sHarvesterGarb"
    },
    "4050": {
        "botName": "T7_ARMOR_GATHERER_FIBER@2",
        "humanName": "Grandmaster'sHarvesterGarb"
    },
    "4051": {
        "botName": "T7_ARMOR_GATHERER_FIBER@3",
        "humanName": "Grandmaster'sHarvesterGarb"
    },
    "4052": {
        "botName": "T8_ARMOR_GATHERER_FIBER",
        "humanName": "Elder'sHarvesterGarb"
    },
    "4053": {
        "botName": "T8_ARMOR_GATHERER_FIBER@1",
        "humanName": "Elder'sHarvesterGarb"
    },
    "4054": {
        "botName": "T8_ARMOR_GATHERER_FIBER@2",
        "humanName": "Elder'sHarvesterGarb"
    },
    "4055": {
        "botName": "T8_ARMOR_GATHERER_FIBER@3",
        "humanName": "Elder'sHarvesterGarb"
    },
    "4056": {
        "botName": "T4_SHOES_GATHERER_FIBER",
        "humanName": "Adept'sHarvesterWorkboots"
    },
    "4057": {
        "botName": "T4_SHOES_GATHERER_FIBER@1",
        "humanName": "Adept'sHarvesterWorkboots"
    },
    "4058": {
        "botName": "T4_SHOES_GATHERER_FIBER@2",
        "humanName": "Adept'sHarvesterWorkboots"
    },
    "4059": {
        "botName": "T4_SHOES_GATHERER_FIBER@3",
        "humanName": "Adept'sHarvesterWorkboots"
    },
    "4060": {
        "botName": "T5_SHOES_GATHERER_FIBER",
        "humanName": "Expert'sHarvesterWorkboots"
    },
    "4061": {
        "botName": "T5_SHOES_GATHERER_FIBER@1",
        "humanName": "Expert'sHarvesterWorkboots"
    },
    "4062": {
        "botName": "T5_SHOES_GATHERER_FIBER@2",
        "humanName": "Expert'sHarvesterWorkboots"
    },
    "4063": {
        "botName": "T5_SHOES_GATHERER_FIBER@3",
        "humanName": "Expert'sHarvesterWorkboots"
    },
    "4064": {
        "botName": "T6_SHOES_GATHERER_FIBER",
        "humanName": "Master'sHarvesterWorkboots"
    },
    "4065": {
        "botName": "T6_SHOES_GATHERER_FIBER@1",
        "humanName": "Master'sHarvesterWorkboots"
    },
    "4066": {
        "botName": "T6_SHOES_GATHERER_FIBER@2",
        "humanName": "Master'sHarvesterWorkboots"
    },
    "4067": {
        "botName": "T6_SHOES_GATHERER_FIBER@3",
        "humanName": "Master'sHarvesterWorkboots"
    },
    "4068": {
        "botName": "T7_SHOES_GATHERER_FIBER",
        "humanName": "Grandmaster'sHarvesterWorkboots"
    },
    "4069": {
        "botName": "T7_SHOES_GATHERER_FIBER@1",
        "humanName": "Grandmaster'sHarvesterWorkboots"
    },
    "4070": {
        "botName": "T7_SHOES_GATHERER_FIBER@2",
        "humanName": "Grandmaster'sHarvesterWorkboots"
    },
    "4071": {
        "botName": "T7_SHOES_GATHERER_FIBER@3",
        "humanName": "Grandmaster'sHarvesterWorkboots"
    },
    "4072": {
        "botName": "T8_SHOES_GATHERER_FIBER",
        "humanName": "Elder'sHarvesterWorkboots"
    },
    "4073": {
        "botName": "T8_SHOES_GATHERER_FIBER@1",
        "humanName": "Elder'sHarvesterWorkboots"
    },
    "4074": {
        "botName": "T8_SHOES_GATHERER_FIBER@2",
        "humanName": "Elder'sHarvesterWorkboots"
    },
    "4075": {
        "botName": "T8_SHOES_GATHERER_FIBER@3",
        "humanName": "Elder'sHarvesterWorkboots"
    },
    "4076": {
        "botName": "T4_BACKPACK_GATHERER_FIBER",
        "humanName": "Adept'sHarvesterBackpack"
    },
    "4077": {
        "botName": "T4_BACKPACK_GATHERER_FIBER@1",
        "humanName": "Adept'sHarvesterBackpack"
    },
    "4078": {
        "botName": "T4_BACKPACK_GATHERER_FIBER@2",
        "humanName": "Adept'sHarvesterBackpack"
    },
    "4079": {
        "botName": "T4_BACKPACK_GATHERER_FIBER@3",
        "humanName": "Adept'sHarvesterBackpack"
    },
    "4080": {
        "botName": "T5_BACKPACK_GATHERER_FIBER",
        "humanName": "Expert'sHarvesterBackpack"
    },
    "4081": {
        "botName": "T5_BACKPACK_GATHERER_FIBER@1",
        "humanName": "Expert'sHarvesterBackpack"
    },
    "4082": {
        "botName": "T5_BACKPACK_GATHERER_FIBER@2",
        "humanName": "Expert'sHarvesterBackpack"
    },
    "4083": {
        "botName": "T5_BACKPACK_GATHERER_FIBER@3",
        "humanName": "Expert'sHarvesterBackpack"
    },
    "4084": {
        "botName": "T6_BACKPACK_GATHERER_FIBER",
        "humanName": "Master'sHarvesterBackpack"
    },
    "4085": {
        "botName": "T6_BACKPACK_GATHERER_FIBER@1",
        "humanName": "Master'sHarvesterBackpack"
    },
    "4086": {
        "botName": "T6_BACKPACK_GATHERER_FIBER@2",
        "humanName": "Master'sHarvesterBackpack"
    },
    "4087": {
        "botName": "T6_BACKPACK_GATHERER_FIBER@3",
        "humanName": "Master'sHarvesterBackpack"
    },
    "4088": {
        "botName": "T7_BACKPACK_GATHERER_FIBER",
        "humanName": "Grandmaster'sHarvesterBackpack"
    },
    "4089": {
        "botName": "T7_BACKPACK_GATHERER_FIBER@1",
        "humanName": "Grandmaster'sHarvesterBackpack"
    },
    "4090": {
        "botName": "T7_BACKPACK_GATHERER_FIBER@2",
        "humanName": "Grandmaster'sHarvesterBackpack"
    },
    "4091": {
        "botName": "T7_BACKPACK_GATHERER_FIBER@3",
        "humanName": "Grandmaster'sHarvesterBackpack"
    },
    "4092": {
        "botName": "T8_BACKPACK_GATHERER_FIBER",
        "humanName": "Elder'sHarvesterBackpack"
    },
    "4093": {
        "botName": "T8_BACKPACK_GATHERER_FIBER@1",
        "humanName": "Elder'sHarvesterBackpack"
    },
    "4094": {
        "botName": "T8_BACKPACK_GATHERER_FIBER@2",
        "humanName": "Elder'sHarvesterBackpack"
    },
    "4095": {
        "botName": "T8_BACKPACK_GATHERER_FIBER@3",
        "humanName": "Elder'sHarvesterBackpack"
    },
    "4096": {
        "botName": "T4_HEAD_GATHERER_HIDE",
        "humanName": "Adept'sSkinnerCap"
    },
    "4097": {
        "botName": "T4_HEAD_GATHERER_HIDE@1",
        "humanName": "Adept'sSkinnerCap"
    },
    "4098": {
        "botName": "T4_HEAD_GATHERER_HIDE@2",
        "humanName": "Adept'sSkinnerCap"
    },
    "4099": {
        "botName": "T4_HEAD_GATHERER_HIDE@3",
        "humanName": "Adept'sSkinnerCap"
    },
    "4100": {
        "botName": "T5_HEAD_GATHERER_HIDE",
        "humanName": "Expert'sSkinnerCap"
    },
    "4101": {
        "botName": "T5_HEAD_GATHERER_HIDE@1",
        "humanName": "Expert'sSkinnerCap"
    },
    "4102": {
        "botName": "T5_HEAD_GATHERER_HIDE@2",
        "humanName": "Expert'sSkinnerCap"
    },
    "4103": {
        "botName": "T5_HEAD_GATHERER_HIDE@3",
        "humanName": "Expert'sSkinnerCap"
    },
    "4104": {
        "botName": "T6_HEAD_GATHERER_HIDE",
        "humanName": "Master'sSkinnerCap"
    },
    "4105": {
        "botName": "T6_HEAD_GATHERER_HIDE@1",
        "humanName": "Master'sSkinnerCap"
    },
    "4106": {
        "botName": "T6_HEAD_GATHERER_HIDE@2",
        "humanName": "Master'sSkinnerCap"
    },
    "4107": {
        "botName": "T6_HEAD_GATHERER_HIDE@3",
        "humanName": "Master'sSkinnerCap"
    },
    "4108": {
        "botName": "T7_HEAD_GATHERER_HIDE",
        "humanName": "Grandmaster'sSkinnerCap"
    },
    "4109": {
        "botName": "T7_HEAD_GATHERER_HIDE@1",
        "humanName": "Grandmaster'sSkinnerCap"
    },
    "4110": {
        "botName": "T7_HEAD_GATHERER_HIDE@2",
        "humanName": "Grandmaster'sSkinnerCap"
    },
    "4111": {
        "botName": "T7_HEAD_GATHERER_HIDE@3",
        "humanName": "Grandmaster'sSkinnerCap"
    },
    "4112": {
        "botName": "T8_HEAD_GATHERER_HIDE",
        "humanName": "Elder'sSkinnerCap"
    },
    "4113": {
        "botName": "T8_HEAD_GATHERER_HIDE@1",
        "humanName": "Elder'sSkinnerCap"
    },
    "4114": {
        "botName": "T8_HEAD_GATHERER_HIDE@2",
        "humanName": "Elder'sSkinnerCap"
    },
    "4115": {
        "botName": "T8_HEAD_GATHERER_HIDE@3",
        "humanName": "Elder'sSkinnerCap"
    },
    "4116": {
        "botName": "T4_ARMOR_GATHERER_HIDE",
        "humanName": "Adept'sSkinnerGarb"
    },
    "4117": {
        "botName": "T4_ARMOR_GATHERER_HIDE@1",
        "humanName": "Adept'sSkinnerGarb"
    },
    "4118": {
        "botName": "T4_ARMOR_GATHERER_HIDE@2",
        "humanName": "Adept'sSkinnerGarb"
    },
    "4119": {
        "botName": "T4_ARMOR_GATHERER_HIDE@3",
        "humanName": "Adept'sSkinnerGarb"
    },
    "4120": {
        "botName": "T5_ARMOR_GATHERER_HIDE",
        "humanName": "Expert'sSkinnerGarb"
    },
    "4121": {
        "botName": "T5_ARMOR_GATHERER_HIDE@1",
        "humanName": "Expert'sSkinnerGarb"
    },
    "4122": {
        "botName": "T5_ARMOR_GATHERER_HIDE@2",
        "humanName": "Expert'sSkinnerGarb"
    },
    "4123": {
        "botName": "T5_ARMOR_GATHERER_HIDE@3",
        "humanName": "Expert'sSkinnerGarb"
    },
    "4124": {
        "botName": "T6_ARMOR_GATHERER_HIDE",
        "humanName": "Master'sSkinnerGarb"
    },
    "4125": {
        "botName": "T6_ARMOR_GATHERER_HIDE@1",
        "humanName": "Master'sSkinnerGarb"
    },
    "4126": {
        "botName": "T6_ARMOR_GATHERER_HIDE@2",
        "humanName": "Master'sSkinnerGarb"
    },
    "4127": {
        "botName": "T6_ARMOR_GATHERER_HIDE@3",
        "humanName": "Master'sSkinnerGarb"
    },
    "4128": {
        "botName": "T7_ARMOR_GATHERER_HIDE",
        "humanName": "Grandmaster'sSkinnerGarb"
    },
    "4129": {
        "botName": "T7_ARMOR_GATHERER_HIDE@1",
        "humanName": "Grandmaster'sSkinnerGarb"
    },
    "4130": {
        "botName": "T7_ARMOR_GATHERER_HIDE@2",
        "humanName": "Grandmaster'sSkinnerGarb"
    },
    "4131": {
        "botName": "T7_ARMOR_GATHERER_HIDE@3",
        "humanName": "Grandmaster'sSkinnerGarb"
    },
    "4132": {
        "botName": "T8_ARMOR_GATHERER_HIDE",
        "humanName": "Elder'sSkinnerGarb"
    },
    "4133": {
        "botName": "T8_ARMOR_GATHERER_HIDE@1",
        "humanName": "Elder'sSkinnerGarb"
    },
    "4134": {
        "botName": "T8_ARMOR_GATHERER_HIDE@2",
        "humanName": "Elder'sSkinnerGarb"
    },
    "4135": {
        "botName": "T8_ARMOR_GATHERER_HIDE@3",
        "humanName": "Elder'sSkinnerGarb"
    },
    "4136": {
        "botName": "T4_SHOES_GATHERER_HIDE",
        "humanName": "Adept'sSkinnerWorkboots"
    },
    "4137": {
        "botName": "T4_SHOES_GATHERER_HIDE@1",
        "humanName": "Adept'sSkinnerWorkboots"
    },
    "4138": {
        "botName": "T4_SHOES_GATHERER_HIDE@2",
        "humanName": "Adept'sSkinnerWorkboots"
    },
    "4139": {
        "botName": "T4_SHOES_GATHERER_HIDE@3",
        "humanName": "Adept'sSkinnerWorkboots"
    },
    "4140": {
        "botName": "T5_SHOES_GATHERER_HIDE",
        "humanName": "Expert'sSkinnerWorkboots"
    },
    "4141": {
        "botName": "T5_SHOES_GATHERER_HIDE@1",
        "humanName": "Expert'sSkinnerWorkboots"
    },
    "4142": {
        "botName": "T5_SHOES_GATHERER_HIDE@2",
        "humanName": "Expert'sSkinnerWorkboots"
    },
    "4143": {
        "botName": "T5_SHOES_GATHERER_HIDE@3",
        "humanName": "Expert'sSkinnerWorkboots"
    },
    "4144": {
        "botName": "T6_SHOES_GATHERER_HIDE",
        "humanName": "Master'sSkinnerWorkboots"
    },
    "4145": {
        "botName": "T6_SHOES_GATHERER_HIDE@1",
        "humanName": "Master'sSkinnerWorkboots"
    },
    "4146": {
        "botName": "T6_SHOES_GATHERER_HIDE@2",
        "humanName": "Master'sSkinnerWorkboots"
    },
    "4147": {
        "botName": "T6_SHOES_GATHERER_HIDE@3",
        "humanName": "Master'sSkinnerWorkboots"
    },
    "4148": {
        "botName": "T7_SHOES_GATHERER_HIDE",
        "humanName": "Grandmaster'sSkinnerWorkboots"
    },
    "4149": {
        "botName": "T7_SHOES_GATHERER_HIDE@1",
        "humanName": "Grandmaster'sSkinnerWorkboots"
    },
    "4150": {
        "botName": "T7_SHOES_GATHERER_HIDE@2",
        "humanName": "Grandmaster'sSkinnerWorkboots"
    },
    "4151": {
        "botName": "T7_SHOES_GATHERER_HIDE@3",
        "humanName": "Grandmaster'sSkinnerWorkboots"
    },
    "4152": {
        "botName": "T8_SHOES_GATHERER_HIDE",
        "humanName": "Elder'sSkinnerWorkboots"
    },
    "4153": {
        "botName": "T8_SHOES_GATHERER_HIDE@1",
        "humanName": "Elder'sSkinnerWorkboots"
    },
    "4154": {
        "botName": "T8_SHOES_GATHERER_HIDE@2",
        "humanName": "Elder'sSkinnerWorkboots"
    },
    "4155": {
        "botName": "T8_SHOES_GATHERER_HIDE@3",
        "humanName": "Elder'sSkinnerWorkboots"
    },
    "4156": {
        "botName": "T4_BACKPACK_GATHERER_HIDE",
        "humanName": "Adept'sSkinnerBackpack"
    },
    "4157": {
        "botName": "T4_BACKPACK_GATHERER_HIDE@1",
        "humanName": "Adept'sSkinnerBackpack"
    },
    "4158": {
        "botName": "T4_BACKPACK_GATHERER_HIDE@2",
        "humanName": "Adept'sSkinnerBackpack"
    },
    "4159": {
        "botName": "T4_BACKPACK_GATHERER_HIDE@3",
        "humanName": "Adept'sSkinnerBackpack"
    },
    "4160": {
        "botName": "T5_BACKPACK_GATHERER_HIDE",
        "humanName": "Expert'sSkinnerBackpack"
    },
    "4161": {
        "botName": "T5_BACKPACK_GATHERER_HIDE@1",
        "humanName": "Expert'sSkinnerBackpack"
    },
    "4162": {
        "botName": "T5_BACKPACK_GATHERER_HIDE@2",
        "humanName": "Expert'sSkinnerBackpack"
    },
    "4163": {
        "botName": "T5_BACKPACK_GATHERER_HIDE@3",
        "humanName": "Expert'sSkinnerBackpack"
    },
    "4164": {
        "botName": "T6_BACKPACK_GATHERER_HIDE",
        "humanName": "Master'sSkinnerBackpack"
    },
    "4165": {
        "botName": "T6_BACKPACK_GATHERER_HIDE@1",
        "humanName": "Master'sSkinnerBackpack"
    },
    "4166": {
        "botName": "T6_BACKPACK_GATHERER_HIDE@2",
        "humanName": "Master'sSkinnerBackpack"
    },
    "4167": {
        "botName": "T6_BACKPACK_GATHERER_HIDE@3",
        "humanName": "Master'sSkinnerBackpack"
    },
    "4168": {
        "botName": "T7_BACKPACK_GATHERER_HIDE",
        "humanName": "Grandmaster'sSkinnerBackpack"
    },
    "4169": {
        "botName": "T7_BACKPACK_GATHERER_HIDE@1",
        "humanName": "Grandmaster'sSkinnerBackpack"
    },
    "4170": {
        "botName": "T7_BACKPACK_GATHERER_HIDE@2",
        "humanName": "Grandmaster'sSkinnerBackpack"
    },
    "4171": {
        "botName": "T7_BACKPACK_GATHERER_HIDE@3",
        "humanName": "Grandmaster'sSkinnerBackpack"
    },
    "4172": {
        "botName": "T8_BACKPACK_GATHERER_HIDE",
        "humanName": "Elder'sSkinnerBackpack"
    },
    "4173": {
        "botName": "T8_BACKPACK_GATHERER_HIDE@1",
        "humanName": "Elder'sSkinnerBackpack"
    },
    "4174": {
        "botName": "T8_BACKPACK_GATHERER_HIDE@2",
        "humanName": "Elder'sSkinnerBackpack"
    },
    "4175": {
        "botName": "T8_BACKPACK_GATHERER_HIDE@3",
        "humanName": "Elder'sSkinnerBackpack"
    },
    "4176": {
        "botName": "T4_HEAD_GATHERER_ORE",
        "humanName": "Adept'sMinerCap"
    },
    "4177": {
        "botName": "T4_HEAD_GATHERER_ORE@1",
        "humanName": "Adept'sMinerCap"
    },
    "4178": {
        "botName": "T4_HEAD_GATHERER_ORE@2",
        "humanName": "Adept'sMinerCap"
    },
    "4179": {
        "botName": "T4_HEAD_GATHERER_ORE@3",
        "humanName": "Adept'sMinerCap"
    },
    "4180": {
        "botName": "T5_HEAD_GATHERER_ORE",
        "humanName": "Expert'sMinerCap"
    },
    "4181": {
        "botName": "T5_HEAD_GATHERER_ORE@1",
        "humanName": "Expert'sMinerCap"
    },
    "4182": {
        "botName": "T5_HEAD_GATHERER_ORE@2",
        "humanName": "Expert'sMinerCap"
    },
    "4183": {
        "botName": "T5_HEAD_GATHERER_ORE@3",
        "humanName": "Expert'sMinerCap"
    },
    "4184": {
        "botName": "T6_HEAD_GATHERER_ORE",
        "humanName": "Master'sMinerCap"
    },
    "4185": {
        "botName": "T6_HEAD_GATHERER_ORE@1",
        "humanName": "Master'sMinerCap"
    },
    "4186": {
        "botName": "T6_HEAD_GATHERER_ORE@2",
        "humanName": "Master'sMinerCap"
    },
    "4187": {
        "botName": "T6_HEAD_GATHERER_ORE@3",
        "humanName": "Master'sMinerCap"
    },
    "4188": {
        "botName": "T7_HEAD_GATHERER_ORE",
        "humanName": "Grandmaster'sMinerCap"
    },
    "4189": {
        "botName": "T7_HEAD_GATHERER_ORE@1",
        "humanName": "Grandmaster'sMinerCap"
    },
    "4190": {
        "botName": "T7_HEAD_GATHERER_ORE@2",
        "humanName": "Grandmaster'sMinerCap"
    },
    "4191": {
        "botName": "T7_HEAD_GATHERER_ORE@3",
        "humanName": "Grandmaster'sMinerCap"
    },
    "4192": {
        "botName": "T8_HEAD_GATHERER_ORE",
        "humanName": "Elder'sMinerCap"
    },
    "4193": {
        "botName": "T8_HEAD_GATHERER_ORE@1",
        "humanName": "Elder'sMinerCap"
    },
    "4194": {
        "botName": "T8_HEAD_GATHERER_ORE@2",
        "humanName": "Elder'sMinerCap"
    },
    "4195": {
        "botName": "T8_HEAD_GATHERER_ORE@3",
        "humanName": "Elder'sMinerCap"
    },
    "4196": {
        "botName": "T4_ARMOR_GATHERER_ORE",
        "humanName": "Adept'sMinerGarb"
    },
    "4197": {
        "botName": "T4_ARMOR_GATHERER_ORE@1",
        "humanName": "Adept'sMinerGarb"
    },
    "4198": {
        "botName": "T4_ARMOR_GATHERER_ORE@2",
        "humanName": "Adept'sMinerGarb"
    },
    "4199": {
        "botName": "T4_ARMOR_GATHERER_ORE@3",
        "humanName": "Adept'sMinerGarb"
    },
    "4200": {
        "botName": "T5_ARMOR_GATHERER_ORE",
        "humanName": "Expert'sMinerGarb"
    },
    "4201": {
        "botName": "T5_ARMOR_GATHERER_ORE@1",
        "humanName": "Expert'sMinerGarb"
    },
    "4202": {
        "botName": "T5_ARMOR_GATHERER_ORE@2",
        "humanName": "Expert'sMinerGarb"
    },
    "4203": {
        "botName": "T5_ARMOR_GATHERER_ORE@3",
        "humanName": "Expert'sMinerGarb"
    },
    "4204": {
        "botName": "T6_ARMOR_GATHERER_ORE",
        "humanName": "Master'sMinerGarb"
    },
    "4205": {
        "botName": "T6_ARMOR_GATHERER_ORE@1",
        "humanName": "Master'sMinerGarb"
    },
    "4206": {
        "botName": "T6_ARMOR_GATHERER_ORE@2",
        "humanName": "Master'sMinerGarb"
    },
    "4207": {
        "botName": "T6_ARMOR_GATHERER_ORE@3",
        "humanName": "Master'sMinerGarb"
    },
    "4208": {
        "botName": "T7_ARMOR_GATHERER_ORE",
        "humanName": "Grandmaster'sMinerGarb"
    },
    "4209": {
        "botName": "T7_ARMOR_GATHERER_ORE@1",
        "humanName": "Grandmaster'sMinerGarb"
    },
    "4210": {
        "botName": "T7_ARMOR_GATHERER_ORE@2",
        "humanName": "Grandmaster'sMinerGarb"
    },
    "4211": {
        "botName": "T7_ARMOR_GATHERER_ORE@3",
        "humanName": "Grandmaster'sMinerGarb"
    },
    "4212": {
        "botName": "T8_ARMOR_GATHERER_ORE",
        "humanName": "Elder'sMinerGarb"
    },
    "4213": {
        "botName": "T8_ARMOR_GATHERER_ORE@1",
        "humanName": "Elder'sMinerGarb"
    },
    "4214": {
        "botName": "T8_ARMOR_GATHERER_ORE@2",
        "humanName": "Elder'sMinerGarb"
    },
    "4215": {
        "botName": "T8_ARMOR_GATHERER_ORE@3",
        "humanName": "Elder'sMinerGarb"
    },
    "4216": {
        "botName": "T4_SHOES_GATHERER_ORE",
        "humanName": "Adept'sMinerWorkboots"
    },
    "4217": {
        "botName": "T4_SHOES_GATHERER_ORE@1",
        "humanName": "Adept'sMinerWorkboots"
    },
    "4218": {
        "botName": "T4_SHOES_GATHERER_ORE@2",
        "humanName": "Adept'sMinerWorkboots"
    },
    "4219": {
        "botName": "T4_SHOES_GATHERER_ORE@3",
        "humanName": "Adept'sMinerWorkboots"
    },
    "4220": {
        "botName": "T5_SHOES_GATHERER_ORE",
        "humanName": "Expert'sMinerWorkboots"
    },
    "4221": {
        "botName": "T5_SHOES_GATHERER_ORE@1",
        "humanName": "Expert'sMinerWorkboots"
    },
    "4222": {
        "botName": "T5_SHOES_GATHERER_ORE@2",
        "humanName": "Expert'sMinerWorkboots"
    },
    "4223": {
        "botName": "T5_SHOES_GATHERER_ORE@3",
        "humanName": "Expert'sMinerWorkboots"
    },
    "4224": {
        "botName": "T6_SHOES_GATHERER_ORE",
        "humanName": "Master'sMinerWorkboots"
    },
    "4225": {
        "botName": "T6_SHOES_GATHERER_ORE@1",
        "humanName": "Master'sMinerWorkboots"
    },
    "4226": {
        "botName": "T6_SHOES_GATHERER_ORE@2",
        "humanName": "Master'sMinerWorkboots"
    },
    "4227": {
        "botName": "T6_SHOES_GATHERER_ORE@3",
        "humanName": "Master'sMinerWorkboots"
    },
    "4228": {
        "botName": "T7_SHOES_GATHERER_ORE",
        "humanName": "Grandmaster'sMinerWorkboots"
    },
    "4229": {
        "botName": "T7_SHOES_GATHERER_ORE@1",
        "humanName": "Grandmaster'sMinerWorkboots"
    },
    "4230": {
        "botName": "T7_SHOES_GATHERER_ORE@2",
        "humanName": "Grandmaster'sMinerWorkboots"
    },
    "4231": {
        "botName": "T7_SHOES_GATHERER_ORE@3",
        "humanName": "Grandmaster'sMinerWorkboots"
    },
    "4232": {
        "botName": "T8_SHOES_GATHERER_ORE",
        "humanName": "Elder'sMinerWorkboots"
    },
    "4233": {
        "botName": "T8_SHOES_GATHERER_ORE@1",
        "humanName": "Elder'sMinerWorkboots"
    },
    "4234": {
        "botName": "T8_SHOES_GATHERER_ORE@2",
        "humanName": "Elder'sMinerWorkboots"
    },
    "4235": {
        "botName": "T8_SHOES_GATHERER_ORE@3",
        "humanName": "Elder'sMinerWorkboots"
    },
    "4236": {
        "botName": "T4_BACKPACK_GATHERER_ORE",
        "humanName": "Adept'sMinerBackpack"
    },
    "4237": {
        "botName": "T4_BACKPACK_GATHERER_ORE@1",
        "humanName": "Adept'sMinerBackpack"
    },
    "4238": {
        "botName": "T4_BACKPACK_GATHERER_ORE@2",
        "humanName": "Adept'sMinerBackpack"
    },
    "4239": {
        "botName": "T4_BACKPACK_GATHERER_ORE@3",
        "humanName": "Adept'sMinerBackpack"
    },
    "4240": {
        "botName": "T5_BACKPACK_GATHERER_ORE",
        "humanName": "Expert'sMinerBackpack"
    },
    "4241": {
        "botName": "T5_BACKPACK_GATHERER_ORE@1",
        "humanName": "Expert'sMinerBackpack"
    },
    "4242": {
        "botName": "T5_BACKPACK_GATHERER_ORE@2",
        "humanName": "Expert'sMinerBackpack"
    },
    "4243": {
        "botName": "T5_BACKPACK_GATHERER_ORE@3",
        "humanName": "Expert'sMinerBackpack"
    },
    "4244": {
        "botName": "T6_BACKPACK_GATHERER_ORE",
        "humanName": "Master'sMinerBackpack"
    },
    "4245": {
        "botName": "T6_BACKPACK_GATHERER_ORE@1",
        "humanName": "Master'sMinerBackpack"
    },
    "4246": {
        "botName": "T6_BACKPACK_GATHERER_ORE@2",
        "humanName": "Master'sMinerBackpack"
    },
    "4247": {
        "botName": "T6_BACKPACK_GATHERER_ORE@3",
        "humanName": "Master'sMinerBackpack"
    },
    "4248": {
        "botName": "T7_BACKPACK_GATHERER_ORE",
        "humanName": "Grandmaster'sMinerBackpack"
    },
    "4249": {
        "botName": "T7_BACKPACK_GATHERER_ORE@1",
        "humanName": "Grandmaster'sMinerBackpack"
    },
    "4250": {
        "botName": "T7_BACKPACK_GATHERER_ORE@2",
        "humanName": "Grandmaster'sMinerBackpack"
    },
    "4251": {
        "botName": "T7_BACKPACK_GATHERER_ORE@3",
        "humanName": "Grandmaster'sMinerBackpack"
    },
    "4252": {
        "botName": "T8_BACKPACK_GATHERER_ORE",
        "humanName": "Elder'sMinerBackpack"
    },
    "4253": {
        "botName": "T8_BACKPACK_GATHERER_ORE@1",
        "humanName": "Elder'sMinerBackpack"
    },
    "4254": {
        "botName": "T8_BACKPACK_GATHERER_ORE@2",
        "humanName": "Elder'sMinerBackpack"
    },
    "4255": {
        "botName": "T8_BACKPACK_GATHERER_ORE@3",
        "humanName": "Elder'sMinerBackpack"
    },
    "4256": {
        "botName": "T4_HEAD_GATHERER_ROCK",
        "humanName": "Adept'sQuarrierCap"
    },
    "4257": {
        "botName": "T4_HEAD_GATHERER_ROCK@1",
        "humanName": "Adept'sQuarrierCap"
    },
    "4258": {
        "botName": "T4_HEAD_GATHERER_ROCK@2",
        "humanName": "Adept'sQuarrierCap"
    },
    "4259": {
        "botName": "T4_HEAD_GATHERER_ROCK@3",
        "humanName": "Adept'sQuarrierCap"
    },
    "4260": {
        "botName": "T5_HEAD_GATHERER_ROCK",
        "humanName": "Expert'sQuarrierCap"
    },
    "4261": {
        "botName": "T5_HEAD_GATHERER_ROCK@1",
        "humanName": "Expert'sQuarrierCap"
    },
    "4262": {
        "botName": "T5_HEAD_GATHERER_ROCK@2",
        "humanName": "Expert'sQuarrierCap"
    },
    "4263": {
        "botName": "T5_HEAD_GATHERER_ROCK@3",
        "humanName": "Expert'sQuarrierCap"
    },
    "4264": {
        "botName": "T6_HEAD_GATHERER_ROCK",
        "humanName": "Master'sQuarrierCap"
    },
    "4265": {
        "botName": "T6_HEAD_GATHERER_ROCK@1",
        "humanName": "Master'sQuarrierCap"
    },
    "4266": {
        "botName": "T6_HEAD_GATHERER_ROCK@2",
        "humanName": "Master'sQuarrierCap"
    },
    "4267": {
        "botName": "T6_HEAD_GATHERER_ROCK@3",
        "humanName": "Master'sQuarrierCap"
    },
    "4268": {
        "botName": "T7_HEAD_GATHERER_ROCK",
        "humanName": "Grandmaster'sQuarrierCap"
    },
    "4269": {
        "botName": "T7_HEAD_GATHERER_ROCK@1",
        "humanName": "Grandmaster'sQuarrierCap"
    },
    "4270": {
        "botName": "T7_HEAD_GATHERER_ROCK@2",
        "humanName": "Grandmaster'sQuarrierCap"
    },
    "4271": {
        "botName": "T7_HEAD_GATHERER_ROCK@3",
        "humanName": "Grandmaster'sQuarrierCap"
    },
    "4272": {
        "botName": "T8_HEAD_GATHERER_ROCK",
        "humanName": "Elder'sQuarrierCap"
    },
    "4273": {
        "botName": "T8_HEAD_GATHERER_ROCK@1",
        "humanName": "Elder'sQuarrierCap"
    },
    "4274": {
        "botName": "T8_HEAD_GATHERER_ROCK@2",
        "humanName": "Elder'sQuarrierCap"
    },
    "4275": {
        "botName": "T8_HEAD_GATHERER_ROCK@3",
        "humanName": "Elder'sQuarrierCap"
    },
    "4276": {
        "botName": "T4_ARMOR_GATHERER_ROCK",
        "humanName": "Adept'sQuarrierGarb"
    },
    "4277": {
        "botName": "T4_ARMOR_GATHERER_ROCK@1",
        "humanName": "Adept'sQuarrierGarb"
    },
    "4278": {
        "botName": "T4_ARMOR_GATHERER_ROCK@2",
        "humanName": "Adept'sQuarrierGarb"
    },
    "4279": {
        "botName": "T4_ARMOR_GATHERER_ROCK@3",
        "humanName": "Adept'sQuarrierGarb"
    },
    "4280": {
        "botName": "T5_ARMOR_GATHERER_ROCK",
        "humanName": "Expert'sQuarrierGarb"
    },
    "4281": {
        "botName": "T5_ARMOR_GATHERER_ROCK@1",
        "humanName": "Expert'sQuarrierGarb"
    },
    "4282": {
        "botName": "T5_ARMOR_GATHERER_ROCK@2",
        "humanName": "Expert'sQuarrierGarb"
    },
    "4283": {
        "botName": "T5_ARMOR_GATHERER_ROCK@3",
        "humanName": "Expert'sQuarrierGarb"
    },
    "4284": {
        "botName": "T6_ARMOR_GATHERER_ROCK",
        "humanName": "Master'sQuarrierGarb"
    },
    "4285": {
        "botName": "T6_ARMOR_GATHERER_ROCK@1",
        "humanName": "Master'sQuarrierGarb"
    },
    "4286": {
        "botName": "T6_ARMOR_GATHERER_ROCK@2",
        "humanName": "Master'sQuarrierGarb"
    },
    "4287": {
        "botName": "T6_ARMOR_GATHERER_ROCK@3",
        "humanName": "Master'sQuarrierGarb"
    },
    "4288": {
        "botName": "T7_ARMOR_GATHERER_ROCK",
        "humanName": "Grandmaster'sQuarrierGarb"
    },
    "4289": {
        "botName": "T7_ARMOR_GATHERER_ROCK@1",
        "humanName": "Grandmaster'sQuarrierGarb"
    },
    "4290": {
        "botName": "T7_ARMOR_GATHERER_ROCK@2",
        "humanName": "Grandmaster'sQuarrierGarb"
    },
    "4291": {
        "botName": "T7_ARMOR_GATHERER_ROCK@3",
        "humanName": "Grandmaster'sQuarrierGarb"
    },
    "4292": {
        "botName": "T8_ARMOR_GATHERER_ROCK",
        "humanName": "Elder'sQuarrierGarb"
    },
    "4293": {
        "botName": "T8_ARMOR_GATHERER_ROCK@1",
        "humanName": "Elder'sQuarrierGarb"
    },
    "4294": {
        "botName": "T8_ARMOR_GATHERER_ROCK@2",
        "humanName": "Elder'sQuarrierGarb"
    },
    "4295": {
        "botName": "T8_ARMOR_GATHERER_ROCK@3",
        "humanName": "Elder'sQuarrierGarb"
    },
    "4296": {
        "botName": "T4_SHOES_GATHERER_ROCK",
        "humanName": "Adept'sQuarrierWorkboots"
    },
    "4297": {
        "botName": "T4_SHOES_GATHERER_ROCK@1",
        "humanName": "Adept'sQuarrierWorkboots"
    },
    "4298": {
        "botName": "T4_SHOES_GATHERER_ROCK@2",
        "humanName": "Adept'sQuarrierWorkboots"
    },
    "4299": {
        "botName": "T4_SHOES_GATHERER_ROCK@3",
        "humanName": "Adept'sQuarrierWorkboots"
    },
    "4300": {
        "botName": "T5_SHOES_GATHERER_ROCK",
        "humanName": "Expert'sQuarrierWorkboots"
    },
    "4301": {
        "botName": "T5_SHOES_GATHERER_ROCK@1",
        "humanName": "Expert'sQuarrierWorkboots"
    },
    "4302": {
        "botName": "T5_SHOES_GATHERER_ROCK@2",
        "humanName": "Expert'sQuarrierWorkboots"
    },
    "4303": {
        "botName": "T5_SHOES_GATHERER_ROCK@3",
        "humanName": "Expert'sQuarrierWorkboots"
    },
    "4304": {
        "botName": "T6_SHOES_GATHERER_ROCK",
        "humanName": "Master'sQuarrierWorkboots"
    },
    "4305": {
        "botName": "T6_SHOES_GATHERER_ROCK@1",
        "humanName": "Master'sQuarrierWorkboots"
    },
    "4306": {
        "botName": "T6_SHOES_GATHERER_ROCK@2",
        "humanName": "Master'sQuarrierWorkboots"
    },
    "4307": {
        "botName": "T6_SHOES_GATHERER_ROCK@3",
        "humanName": "Master'sQuarrierWorkboots"
    },
    "4308": {
        "botName": "T7_SHOES_GATHERER_ROCK",
        "humanName": "Grandmaster'sQuarrierWorkboots"
    },
    "4309": {
        "botName": "T7_SHOES_GATHERER_ROCK@1",
        "humanName": "Grandmaster'sQuarrierWorkboots"
    },
    "4310": {
        "botName": "T7_SHOES_GATHERER_ROCK@2",
        "humanName": "Grandmaster'sQuarrierWorkboots"
    },
    "4311": {
        "botName": "T7_SHOES_GATHERER_ROCK@3",
        "humanName": "Grandmaster'sQuarrierWorkboots"
    },
    "4312": {
        "botName": "T8_SHOES_GATHERER_ROCK",
        "humanName": "Elder'sQuarrierWorkboots"
    },
    "4313": {
        "botName": "T8_SHOES_GATHERER_ROCK@1",
        "humanName": "Elder'sQuarrierWorkboots"
    },
    "4314": {
        "botName": "T8_SHOES_GATHERER_ROCK@2",
        "humanName": "Elder'sQuarrierWorkboots"
    },
    "4315": {
        "botName": "T8_SHOES_GATHERER_ROCK@3",
        "humanName": "Elder'sQuarrierWorkboots"
    },
    "4316": {
        "botName": "T4_BACKPACK_GATHERER_ROCK",
        "humanName": "Adept'sQuarrierBackpack"
    },
    "4317": {
        "botName": "T4_BACKPACK_GATHERER_ROCK@1",
        "humanName": "Adept'sQuarrierBackpack"
    },
    "4318": {
        "botName": "T4_BACKPACK_GATHERER_ROCK@2",
        "humanName": "Adept'sQuarrierBackpack"
    },
    "4319": {
        "botName": "T4_BACKPACK_GATHERER_ROCK@3",
        "humanName": "Adept'sQuarrierBackpack"
    },
    "4320": {
        "botName": "T5_BACKPACK_GATHERER_ROCK",
        "humanName": "Expert'sQuarrierBackpack"
    },
    "4321": {
        "botName": "T5_BACKPACK_GATHERER_ROCK@1",
        "humanName": "Expert'sQuarrierBackpack"
    },
    "4322": {
        "botName": "T5_BACKPACK_GATHERER_ROCK@2",
        "humanName": "Expert'sQuarrierBackpack"
    },
    "4323": {
        "botName": "T5_BACKPACK_GATHERER_ROCK@3",
        "humanName": "Expert'sQuarrierBackpack"
    },
    "4324": {
        "botName": "T6_BACKPACK_GATHERER_ROCK",
        "humanName": "Master'sQuarrierBackpack"
    },
    "4325": {
        "botName": "T6_BACKPACK_GATHERER_ROCK@1",
        "humanName": "Master'sQuarrierBackpack"
    },
    "4326": {
        "botName": "T6_BACKPACK_GATHERER_ROCK@2",
        "humanName": "Master'sQuarrierBackpack"
    },
    "4327": {
        "botName": "T6_BACKPACK_GATHERER_ROCK@3",
        "humanName": "Master'sQuarrierBackpack"
    },
    "4328": {
        "botName": "T7_BACKPACK_GATHERER_ROCK",
        "humanName": "Grandmaster'sQuarrierBackpack"
    },
    "4329": {
        "botName": "T7_BACKPACK_GATHERER_ROCK@1",
        "humanName": "Grandmaster'sQuarrierBackpack"
    },
    "4330": {
        "botName": "T7_BACKPACK_GATHERER_ROCK@2",
        "humanName": "Grandmaster'sQuarrierBackpack"
    },
    "4331": {
        "botName": "T7_BACKPACK_GATHERER_ROCK@3",
        "humanName": "Grandmaster'sQuarrierBackpack"
    },
    "4332": {
        "botName": "T8_BACKPACK_GATHERER_ROCK",
        "humanName": "Elder'sQuarrierBackpack"
    },
    "4333": {
        "botName": "T8_BACKPACK_GATHERER_ROCK@1",
        "humanName": "Elder'sQuarrierBackpack"
    },
    "4334": {
        "botName": "T8_BACKPACK_GATHERER_ROCK@2",
        "humanName": "Elder'sQuarrierBackpack"
    },
    "4335": {
        "botName": "T8_BACKPACK_GATHERER_ROCK@3",
        "humanName": "Elder'sQuarrierBackpack"
    },
    "4336": {
        "botName": "T4_HEAD_GATHERER_WOOD",
        "humanName": "Adept'sLumberjackCap"
    },
    "4337": {
        "botName": "T4_HEAD_GATHERER_WOOD@1",
        "humanName": "Adept'sLumberjackCap"
    },
    "4338": {
        "botName": "T4_HEAD_GATHERER_WOOD@2",
        "humanName": "Adept'sLumberjackCap"
    },
    "4339": {
        "botName": "T4_HEAD_GATHERER_WOOD@3",
        "humanName": "Adept'sLumberjackCap"
    },
    "4340": {
        "botName": "T5_HEAD_GATHERER_WOOD",
        "humanName": "Expert'sLumberjackCap"
    },
    "4341": {
        "botName": "T5_HEAD_GATHERER_WOOD@1",
        "humanName": "Expert'sLumberjackCap"
    },
    "4342": {
        "botName": "T5_HEAD_GATHERER_WOOD@2",
        "humanName": "Expert'sLumberjackCap"
    },
    "4343": {
        "botName": "T5_HEAD_GATHERER_WOOD@3",
        "humanName": "Expert'sLumberjackCap"
    },
    "4344": {
        "botName": "T6_HEAD_GATHERER_WOOD",
        "humanName": "Master'sLumberjackCap"
    },
    "4345": {
        "botName": "T6_HEAD_GATHERER_WOOD@1",
        "humanName": "Master'sLumberjackCap"
    },
    "4346": {
        "botName": "T6_HEAD_GATHERER_WOOD@2",
        "humanName": "Master'sLumberjackCap"
    },
    "4347": {
        "botName": "T6_HEAD_GATHERER_WOOD@3",
        "humanName": "Master'sLumberjackCap"
    },
    "4348": {
        "botName": "T7_HEAD_GATHERER_WOOD",
        "humanName": "Grandmaster'sLumberjackCap"
    },
    "4349": {
        "botName": "T7_HEAD_GATHERER_WOOD@1",
        "humanName": "Grandmaster'sLumberjackCap"
    },
    "4350": {
        "botName": "T7_HEAD_GATHERER_WOOD@2",
        "humanName": "Grandmaster'sLumberjackCap"
    },
    "4351": {
        "botName": "T7_HEAD_GATHERER_WOOD@3",
        "humanName": "Grandmaster'sLumberjackCap"
    },
    "4352": {
        "botName": "T8_HEAD_GATHERER_WOOD",
        "humanName": "Elder'sLumberjackCap"
    },
    "4353": {
        "botName": "T8_HEAD_GATHERER_WOOD@1",
        "humanName": "Elder'sLumberjackCap"
    },
    "4354": {
        "botName": "T8_HEAD_GATHERER_WOOD@2",
        "humanName": "Elder'sLumberjackCap"
    },
    "4355": {
        "botName": "T8_HEAD_GATHERER_WOOD@3",
        "humanName": "Elder'sLumberjackCap"
    },
    "4356": {
        "botName": "T4_ARMOR_GATHERER_WOOD",
        "humanName": "Adept'sLumberjackGarb"
    },
    "4357": {
        "botName": "T4_ARMOR_GATHERER_WOOD@1",
        "humanName": "Adept'sLumberjackGarb"
    },
    "4358": {
        "botName": "T4_ARMOR_GATHERER_WOOD@2",
        "humanName": "Adept'sLumberjackGarb"
    },
    "4359": {
        "botName": "T4_ARMOR_GATHERER_WOOD@3",
        "humanName": "Adept'sLumberjackGarb"
    },
    "4360": {
        "botName": "T5_ARMOR_GATHERER_WOOD",
        "humanName": "Expert'sLumberjackGarb"
    },
    "4361": {
        "botName": "T5_ARMOR_GATHERER_WOOD@1",
        "humanName": "Expert'sLumberjackGarb"
    },
    "4362": {
        "botName": "T5_ARMOR_GATHERER_WOOD@2",
        "humanName": "Expert'sLumberjackGarb"
    },
    "4363": {
        "botName": "T5_ARMOR_GATHERER_WOOD@3",
        "humanName": "Expert'sLumberjackGarb"
    },
    "4364": {
        "botName": "T6_ARMOR_GATHERER_WOOD",
        "humanName": "Master'sLumberjackGarb"
    },
    "4365": {
        "botName": "T6_ARMOR_GATHERER_WOOD@1",
        "humanName": "Master'sLumberjackGarb"
    },
    "4366": {
        "botName": "T6_ARMOR_GATHERER_WOOD@2",
        "humanName": "Master'sLumberjackGarb"
    },
    "4367": {
        "botName": "T6_ARMOR_GATHERER_WOOD@3",
        "humanName": "Master'sLumberjackGarb"
    },
    "4368": {
        "botName": "T7_ARMOR_GATHERER_WOOD",
        "humanName": "Grandmaster'sLumberjackGarb"
    },
    "4369": {
        "botName": "T7_ARMOR_GATHERER_WOOD@1",
        "humanName": "Grandmaster'sLumberjackGarb"
    },
    "4370": {
        "botName": "T7_ARMOR_GATHERER_WOOD@2",
        "humanName": "Grandmaster'sLumberjackGarb"
    },
    "4371": {
        "botName": "T7_ARMOR_GATHERER_WOOD@3",
        "humanName": "Grandmaster'sLumberjackGarb"
    },
    "4372": {
        "botName": "T8_ARMOR_GATHERER_WOOD",
        "humanName": "Elder'sLumberjackGarb"
    },
    "4373": {
        "botName": "T8_ARMOR_GATHERER_WOOD@1",
        "humanName": "Elder'sLumberjackGarb"
    },
    "4374": {
        "botName": "T8_ARMOR_GATHERER_WOOD@2",
        "humanName": "Elder'sLumberjackGarb"
    },
    "4375": {
        "botName": "T8_ARMOR_GATHERER_WOOD@3",
        "humanName": "Elder'sLumberjackGarb"
    },
    "4376": {
        "botName": "T4_SHOES_GATHERER_WOOD",
        "humanName": "Adept'sLumberjackWorkboots"
    },
    "4377": {
        "botName": "T4_SHOES_GATHERER_WOOD@1",
        "humanName": "Adept'sLumberjackWorkboots"
    },
    "4378": {
        "botName": "T4_SHOES_GATHERER_WOOD@2",
        "humanName": "Adept'sLumberjackWorkboots"
    },
    "4379": {
        "botName": "T4_SHOES_GATHERER_WOOD@3",
        "humanName": "Adept'sLumberjackWorkboots"
    },
    "4380": {
        "botName": "T5_SHOES_GATHERER_WOOD",
        "humanName": "Expert'sLumberjackWorkboots"
    },
    "4381": {
        "botName": "T5_SHOES_GATHERER_WOOD@1",
        "humanName": "Expert'sLumberjackWorkboots"
    },
    "4382": {
        "botName": "T5_SHOES_GATHERER_WOOD@2",
        "humanName": "Expert'sLumberjackWorkboots"
    },
    "4383": {
        "botName": "T5_SHOES_GATHERER_WOOD@3",
        "humanName": "Expert'sLumberjackWorkboots"
    },
    "4384": {
        "botName": "T6_SHOES_GATHERER_WOOD",
        "humanName": "Master'sLumberjackWorkboots"
    },
    "4385": {
        "botName": "T6_SHOES_GATHERER_WOOD@1",
        "humanName": "Master'sLumberjackWorkboots"
    },
    "4386": {
        "botName": "T6_SHOES_GATHERER_WOOD@2",
        "humanName": "Master'sLumberjackWorkboots"
    },
    "4387": {
        "botName": "T6_SHOES_GATHERER_WOOD@3",
        "humanName": "Master'sLumberjackWorkboots"
    },
    "4388": {
        "botName": "T7_SHOES_GATHERER_WOOD",
        "humanName": "Grandmaster'sLumberjackWorkboots"
    },
    "4389": {
        "botName": "T7_SHOES_GATHERER_WOOD@1",
        "humanName": "Grandmaster'sLumberjackWorkboots"
    },
    "4390": {
        "botName": "T7_SHOES_GATHERER_WOOD@2",
        "humanName": "Grandmaster'sLumberjackWorkboots"
    },
    "4391": {
        "botName": "T7_SHOES_GATHERER_WOOD@3",
        "humanName": "Grandmaster'sLumberjackWorkboots"
    },
    "4392": {
        "botName": "T8_SHOES_GATHERER_WOOD",
        "humanName": "Elder'sLumberjackWorkboots"
    },
    "4393": {
        "botName": "T8_SHOES_GATHERER_WOOD@1",
        "humanName": "Elder'sLumberjackWorkboots"
    },
    "4394": {
        "botName": "T8_SHOES_GATHERER_WOOD@2",
        "humanName": "Elder'sLumberjackWorkboots"
    },
    "4395": {
        "botName": "T8_SHOES_GATHERER_WOOD@3",
        "humanName": "Elder'sLumberjackWorkboots"
    },
    "4396": {
        "botName": "T4_BACKPACK_GATHERER_WOOD",
        "humanName": "Adept'sLumberjackBackpack"
    },
    "4397": {
        "botName": "T4_BACKPACK_GATHERER_WOOD@1",
        "humanName": "Adept'sLumberjackBackpack"
    },
    "4398": {
        "botName": "T4_BACKPACK_GATHERER_WOOD@2",
        "humanName": "Adept'sLumberjackBackpack"
    },
    "4399": {
        "botName": "T4_BACKPACK_GATHERER_WOOD@3",
        "humanName": "Adept'sLumberjackBackpack"
    },
    "4400": {
        "botName": "T5_BACKPACK_GATHERER_WOOD",
        "humanName": "Expert'sLumberjackBackpack"
    },
    "4401": {
        "botName": "T5_BACKPACK_GATHERER_WOOD@1",
        "humanName": "Expert'sLumberjackBackpack"
    },
    "4402": {
        "botName": "T5_BACKPACK_GATHERER_WOOD@2",
        "humanName": "Expert'sLumberjackBackpack"
    },
    "4403": {
        "botName": "T5_BACKPACK_GATHERER_WOOD@3",
        "humanName": "Expert'sLumberjackBackpack"
    },
    "4404": {
        "botName": "T6_BACKPACK_GATHERER_WOOD",
        "humanName": "Master'sLumberjackBackpack"
    },
    "4405": {
        "botName": "T6_BACKPACK_GATHERER_WOOD@1",
        "humanName": "Master'sLumberjackBackpack"
    },
    "4406": {
        "botName": "T6_BACKPACK_GATHERER_WOOD@2",
        "humanName": "Master'sLumberjackBackpack"
    },
    "4407": {
        "botName": "T6_BACKPACK_GATHERER_WOOD@3",
        "humanName": "Master'sLumberjackBackpack"
    },
    "4408": {
        "botName": "T7_BACKPACK_GATHERER_WOOD",
        "humanName": "Grandmaster'sLumberjackBackpack"
    },
    "4409": {
        "botName": "T7_BACKPACK_GATHERER_WOOD@1",
        "humanName": "Grandmaster'sLumberjackBackpack"
    },
    "4410": {
        "botName": "T7_BACKPACK_GATHERER_WOOD@2",
        "humanName": "Grandmaster'sLumberjackBackpack"
    },
    "4411": {
        "botName": "T7_BACKPACK_GATHERER_WOOD@3",
        "humanName": "Grandmaster'sLumberjackBackpack"
    },
    "4412": {
        "botName": "T8_BACKPACK_GATHERER_WOOD",
        "humanName": "Elder'sLumberjackBackpack"
    },
    "4413": {
        "botName": "T8_BACKPACK_GATHERER_WOOD@1",
        "humanName": "Elder'sLumberjackBackpack"
    },
    "4414": {
        "botName": "T8_BACKPACK_GATHERER_WOOD@2",
        "humanName": "Elder'sLumberjackBackpack"
    },
    "4415": {
        "botName": "T8_BACKPACK_GATHERER_WOOD@3",
        "humanName": "Elder'sLumberjackBackpack"
    },
    "4416": {
        "botName": "T4_HEAD_GATHERER_FISH",
        "humanName": "Adept'sFishermanCap"
    },
    "4417": {
        "botName": "T4_HEAD_GATHERER_FISH@1",
        "humanName": "Adept'sFishermanCap"
    },
    "4418": {
        "botName": "T4_HEAD_GATHERER_FISH@2",
        "humanName": "Adept'sFishermanCap"
    },
    "4419": {
        "botName": "T4_HEAD_GATHERER_FISH@3",
        "humanName": "Adept'sFishermanCap"
    },
    "4420": {
        "botName": "T5_HEAD_GATHERER_FISH",
        "humanName": "Expert'sFishermanCap"
    },
    "4421": {
        "botName": "T5_HEAD_GATHERER_FISH@1",
        "humanName": "Expert'sFishermanCap"
    },
    "4422": {
        "botName": "T5_HEAD_GATHERER_FISH@2",
        "humanName": "Expert'sFishermanCap"
    },
    "4423": {
        "botName": "T5_HEAD_GATHERER_FISH@3",
        "humanName": "Expert'sFishermanCap"
    },
    "4424": {
        "botName": "T6_HEAD_GATHERER_FISH",
        "humanName": "Master'sFishermanCap"
    },
    "4425": {
        "botName": "T6_HEAD_GATHERER_FISH@1",
        "humanName": "Master'sFishermanCap"
    },
    "4426": {
        "botName": "T6_HEAD_GATHERER_FISH@2",
        "humanName": "Master'sFishermanCap"
    },
    "4427": {
        "botName": "T6_HEAD_GATHERER_FISH@3",
        "humanName": "Master'sFishermanCap"
    },
    "4428": {
        "botName": "T7_HEAD_GATHERER_FISH",
        "humanName": "Grandmaster'sFishermanCap"
    },
    "4429": {
        "botName": "T7_HEAD_GATHERER_FISH@1",
        "humanName": "Grandmaster'sFishermanCap"
    },
    "4430": {
        "botName": "T7_HEAD_GATHERER_FISH@2",
        "humanName": "Grandmaster'sFishermanCap"
    },
    "4431": {
        "botName": "T7_HEAD_GATHERER_FISH@3",
        "humanName": "Grandmaster'sFishermanCap"
    },
    "4432": {
        "botName": "T8_HEAD_GATHERER_FISH",
        "humanName": "Elder'sFishermanCap"
    },
    "4433": {
        "botName": "T8_HEAD_GATHERER_FISH@1",
        "humanName": "Elder'sFishermanCap"
    },
    "4434": {
        "botName": "T8_HEAD_GATHERER_FISH@2",
        "humanName": "Elder'sFishermanCap"
    },
    "4435": {
        "botName": "T8_HEAD_GATHERER_FISH@3",
        "humanName": "Elder'sFishermanCap"
    },
    "4436": {
        "botName": "T4_ARMOR_GATHERER_FISH",
        "humanName": "Adept'sFishermanGarb"
    },
    "4437": {
        "botName": "T4_ARMOR_GATHERER_FISH@1",
        "humanName": "Adept'sFishermanGarb"
    },
    "4438": {
        "botName": "T4_ARMOR_GATHERER_FISH@2",
        "humanName": "Adept'sFishermanGarb"
    },
    "4439": {
        "botName": "T4_ARMOR_GATHERER_FISH@3",
        "humanName": "Adept'sFishermanGarb"
    },
    "4440": {
        "botName": "T5_ARMOR_GATHERER_FISH",
        "humanName": "Expert'sFishermanGarb"
    },
    "4441": {
        "botName": "T5_ARMOR_GATHERER_FISH@1",
        "humanName": "Expert'sFishermanGarb"
    },
    "4442": {
        "botName": "T5_ARMOR_GATHERER_FISH@2",
        "humanName": "Expert'sFishermanGarb"
    },
    "4443": {
        "botName": "T5_ARMOR_GATHERER_FISH@3",
        "humanName": "Expert'sFishermanGarb"
    },
    "4444": {
        "botName": "T6_ARMOR_GATHERER_FISH",
        "humanName": "Master'sFishermanGarb"
    },
    "4445": {
        "botName": "T6_ARMOR_GATHERER_FISH@1",
        "humanName": "Master'sFishermanGarb"
    },
    "4446": {
        "botName": "T6_ARMOR_GATHERER_FISH@2",
        "humanName": "Master'sFishermanGarb"
    },
    "4447": {
        "botName": "T6_ARMOR_GATHERER_FISH@3",
        "humanName": "Master'sFishermanGarb"
    },
    "4448": {
        "botName": "T7_ARMOR_GATHERER_FISH",
        "humanName": "Grandmaster'sFishermanGarb"
    },
    "4449": {
        "botName": "T7_ARMOR_GATHERER_FISH@1",
        "humanName": "Grandmaster'sFishermanGarb"
    },
    "4450": {
        "botName": "T7_ARMOR_GATHERER_FISH@2",
        "humanName": "Grandmaster'sFishermanGarb"
    },
    "4451": {
        "botName": "T7_ARMOR_GATHERER_FISH@3",
        "humanName": "Grandmaster'sFishermanGarb"
    },
    "4452": {
        "botName": "T8_ARMOR_GATHERER_FISH",
        "humanName": "Elder'sFishermanGarb"
    },
    "4453": {
        "botName": "T8_ARMOR_GATHERER_FISH@1",
        "humanName": "Elder'sFishermanGarb"
    },
    "4454": {
        "botName": "T8_ARMOR_GATHERER_FISH@2",
        "humanName": "Elder'sFishermanGarb"
    },
    "4455": {
        "botName": "T8_ARMOR_GATHERER_FISH@3",
        "humanName": "Elder'sFishermanGarb"
    },
    "4456": {
        "botName": "T4_SHOES_GATHERER_FISH",
        "humanName": "Adept'sFishermanWorkboots"
    },
    "4457": {
        "botName": "T4_SHOES_GATHERER_FISH@1",
        "humanName": "Adept'sFishermanWorkboots"
    },
    "4458": {
        "botName": "T4_SHOES_GATHERER_FISH@2",
        "humanName": "Adept'sFishermanWorkboots"
    },
    "4459": {
        "botName": "T4_SHOES_GATHERER_FISH@3",
        "humanName": "Adept'sFishermanWorkboots"
    },
    "4460": {
        "botName": "T5_SHOES_GATHERER_FISH",
        "humanName": "Expert'sFishermanWorkboots"
    },
    "4461": {
        "botName": "T5_SHOES_GATHERER_FISH@1",
        "humanName": "Expert'sFishermanWorkboots"
    },
    "4462": {
        "botName": "T5_SHOES_GATHERER_FISH@2",
        "humanName": "Expert'sFishermanWorkboots"
    },
    "4463": {
        "botName": "T5_SHOES_GATHERER_FISH@3",
        "humanName": "Expert'sFishermanWorkboots"
    },
    "4464": {
        "botName": "T6_SHOES_GATHERER_FISH",
        "humanName": "Master'sFishermanWorkboots"
    },
    "4465": {
        "botName": "T6_SHOES_GATHERER_FISH@1",
        "humanName": "Master'sFishermanWorkboots"
    },
    "4466": {
        "botName": "T6_SHOES_GATHERER_FISH@2",
        "humanName": "Master'sFishermanWorkboots"
    },
    "4467": {
        "botName": "T6_SHOES_GATHERER_FISH@3",
        "humanName": "Master'sFishermanWorkboots"
    },
    "4468": {
        "botName": "T7_SHOES_GATHERER_FISH",
        "humanName": "Grandmaster'sFishermanWorkboots"
    },
    "4469": {
        "botName": "T7_SHOES_GATHERER_FISH@1",
        "humanName": "Grandmaster'sFishermanWorkboots"
    },
    "4470": {
        "botName": "T7_SHOES_GATHERER_FISH@2",
        "humanName": "Grandmaster'sFishermanWorkboots"
    },
    "4471": {
        "botName": "T7_SHOES_GATHERER_FISH@3",
        "humanName": "Grandmaster'sFishermanWorkboots"
    },
    "4472": {
        "botName": "T8_SHOES_GATHERER_FISH",
        "humanName": "Elder'sFishermanWorkboots"
    },
    "4473": {
        "botName": "T8_SHOES_GATHERER_FISH@1",
        "humanName": "Elder'sFishermanWorkboots"
    },
    "4474": {
        "botName": "T8_SHOES_GATHERER_FISH@2",
        "humanName": "Elder'sFishermanWorkboots"
    },
    "4475": {
        "botName": "T8_SHOES_GATHERER_FISH@3",
        "humanName": "Elder'sFishermanWorkboots"
    },
    "4476": {
        "botName": "T4_BACKPACK_GATHERER_FISH",
        "humanName": "Adept'sFishermanBackpack"
    },
    "4477": {
        "botName": "T4_BACKPACK_GATHERER_FISH@1",
        "humanName": "Adept'sFishermanBackpack"
    },
    "4478": {
        "botName": "T4_BACKPACK_GATHERER_FISH@2",
        "humanName": "Adept'sFishermanBackpack"
    },
    "4479": {
        "botName": "T4_BACKPACK_GATHERER_FISH@3",
        "humanName": "Adept'sFishermanBackpack"
    },
    "4480": {
        "botName": "T5_BACKPACK_GATHERER_FISH",
        "humanName": "Expert'sFishermanBackpack"
    },
    "4481": {
        "botName": "T5_BACKPACK_GATHERER_FISH@1",
        "humanName": "Expert'sFishermanBackpack"
    },
    "4482": {
        "botName": "T5_BACKPACK_GATHERER_FISH@2",
        "humanName": "Expert'sFishermanBackpack"
    },
    "4483": {
        "botName": "T5_BACKPACK_GATHERER_FISH@3",
        "humanName": "Expert'sFishermanBackpack"
    },
    "4484": {
        "botName": "T6_BACKPACK_GATHERER_FISH",
        "humanName": "Master'sFishermanBackpack"
    },
    "4485": {
        "botName": "T6_BACKPACK_GATHERER_FISH@1",
        "humanName": "Master'sFishermanBackpack"
    },
    "4486": {
        "botName": "T6_BACKPACK_GATHERER_FISH@2",
        "humanName": "Master'sFishermanBackpack"
    },
    "4487": {
        "botName": "T6_BACKPACK_GATHERER_FISH@3",
        "humanName": "Master'sFishermanBackpack"
    },
    "4488": {
        "botName": "T7_BACKPACK_GATHERER_FISH",
        "humanName": "Grandmaster'sFishermanBackpack"
    },
    "4489": {
        "botName": "T7_BACKPACK_GATHERER_FISH@1",
        "humanName": "Grandmaster'sFishermanBackpack"
    },
    "4490": {
        "botName": "T7_BACKPACK_GATHERER_FISH@2",
        "humanName": "Grandmaster'sFishermanBackpack"
    },
    "4491": {
        "botName": "T7_BACKPACK_GATHERER_FISH@3",
        "humanName": "Grandmaster'sFishermanBackpack"
    },
    "4492": {
        "botName": "T8_BACKPACK_GATHERER_FISH",
        "humanName": "Elder'sFishermanBackpack"
    },
    "4493": {
        "botName": "T8_BACKPACK_GATHERER_FISH@1",
        "humanName": "Elder'sFishermanBackpack"
    },
    "4494": {
        "botName": "T8_BACKPACK_GATHERER_FISH@2",
        "humanName": "Elder'sFishermanBackpack"
    },
    "4495": {
        "botName": "T8_BACKPACK_GATHERER_FISH@3",
        "humanName": "Elder'sFishermanBackpack"
    },
    "4496": {
        "botName": "T2_JOURNAL_WOOD",
        "humanName": "NoviceLumberjack'sJournal(PartiallyFull)"
    },
    "4497": {
        "botName": "T3_JOURNAL_WOOD",
        "humanName": "JourneymanLumberjack'sJournal(PartiallyFull)"
    },
    "4498": {
        "botName": "T4_JOURNAL_WOOD",
        "humanName": "AdeptLumberjack'sJournal(PartiallyFull)"
    },
    "4499": {
        "botName": "T5_JOURNAL_WOOD",
        "humanName": "ExpertLumberjack'sJournal(PartiallyFull)"
    },
    "4500": {
        "botName": "T6_JOURNAL_WOOD",
        "humanName": "MasterLumberjack'sJournal(PartiallyFull)"
    },
    "4501": {
        "botName": "T7_JOURNAL_WOOD",
        "humanName": "GrandmasterLumberjack'sJournal(PartiallyFull)"
    },
    "4502": {
        "botName": "T8_JOURNAL_WOOD",
        "humanName": "ElderLumberjack'sJournal(PartiallyFull)"
    },
    "4503": {
        "botName": "T2_JOURNAL_STONE",
        "humanName": "NoviceStonecutter'sJournal(PartiallyFull)"
    },
    "4504": {
        "botName": "T3_JOURNAL_STONE",
        "humanName": "JourneymanStonecutter'sJournal(PartiallyFull)"
    },
    "4505": {
        "botName": "T4_JOURNAL_STONE",
        "humanName": "AdeptStonecutter'sJournal(PartiallyFull)"
    },
    "4506": {
        "botName": "T5_JOURNAL_STONE",
        "humanName": "ExpertStonecutter'sJournal(PartiallyFull)"
    },
    "4507": {
        "botName": "T6_JOURNAL_STONE",
        "humanName": "MasterStonecutter'sJournal(PartiallyFull)"
    },
    "4508": {
        "botName": "T7_JOURNAL_STONE",
        "humanName": "GrandmasterStonecutter'sJournal(PartiallyFull)"
    },
    "4509": {
        "botName": "T8_JOURNAL_STONE",
        "humanName": "ElderStonecutter'sJournal(PartiallyFull)"
    },
    "4510": {
        "botName": "T2_JOURNAL_ORE",
        "humanName": "NoviceProspector'sJournal(PartiallyFull)"
    },
    "4511": {
        "botName": "T3_JOURNAL_ORE",
        "humanName": "JourneymanProspector'sJournal(PartiallyFull)"
    },
    "4512": {
        "botName": "T4_JOURNAL_ORE",
        "humanName": "AdeptProspector'sJournal(PartiallyFull)"
    },
    "4513": {
        "botName": "T5_JOURNAL_ORE",
        "humanName": "ExpertProspector'sJournal(PartiallyFull)"
    },
    "4514": {
        "botName": "T6_JOURNAL_ORE",
        "humanName": "MasterProspector'sJournal(PartiallyFull)"
    },
    "4515": {
        "botName": "T7_JOURNAL_ORE",
        "humanName": "GrandmasterProspector'sJournal(PartiallyFull)"
    },
    "4516": {
        "botName": "T8_JOURNAL_ORE",
        "humanName": "ElderProspector'sJournal(PartiallyFull)"
    },
    "4517": {
        "botName": "T2_JOURNAL_FIBER",
        "humanName": "NoviceCropper'sJournal(PartiallyFull)"
    },
    "4518": {
        "botName": "T3_JOURNAL_FIBER",
        "humanName": "JourneymanCropper'sJournal(PartiallyFull)"
    },
    "4519": {
        "botName": "T4_JOURNAL_FIBER",
        "humanName": "AdeptCropper'sJournal(PartiallyFull)"
    },
    "4520": {
        "botName": "T5_JOURNAL_FIBER",
        "humanName": "ExpertCropper'sJournal(PartiallyFull)"
    },
    "4521": {
        "botName": "T6_JOURNAL_FIBER",
        "humanName": "MasterCropper'sJournal(PartiallyFull)"
    },
    "4522": {
        "botName": "T7_JOURNAL_FIBER",
        "humanName": "GrandmasterCropper'sJournal(PartiallyFull)"
    },
    "4523": {
        "botName": "T8_JOURNAL_FIBER",
        "humanName": "ElderCropper'sJournal(PartiallyFull)"
    },
    "4524": {
        "botName": "T2_JOURNAL_HIDE",
        "humanName": "NoviceGamekeeper'sJournal(PartiallyFull)"
    },
    "4525": {
        "botName": "T3_JOURNAL_HIDE",
        "humanName": "JourneymanGamekeeper'sJournal(PartiallyFull)"
    },
    "4526": {
        "botName": "T4_JOURNAL_HIDE",
        "humanName": "AdeptGamekeeper'sJournal(PartiallyFull)"
    },
    "4527": {
        "botName": "T5_JOURNAL_HIDE",
        "humanName": "ExpertGamekeeper'sJournal(PartiallyFull)"
    },
    "4528": {
        "botName": "T6_JOURNAL_HIDE",
        "humanName": "MasterGamekeeper'sJournal(PartiallyFull)"
    },
    "4529": {
        "botName": "T7_JOURNAL_HIDE",
        "humanName": "GrandmasterGamekeeper'sJournal(PartiallyFull)"
    },
    "4530": {
        "botName": "T8_JOURNAL_HIDE",
        "humanName": "ElderGamekeeper'sJournal(PartiallyFull)"
    },
    "4531": {
        "botName": "T2_JOURNAL_WARRIOR",
        "humanName": "NoviceBlacksmith'sJournal(PartiallyFull)"
    },
    "4532": {
        "botName": "T3_JOURNAL_WARRIOR",
        "humanName": "JourneymanBlacksmith'sJournal(PartiallyFull)"
    },
    "4533": {
        "botName": "T4_JOURNAL_WARRIOR",
        "humanName": "AdeptBlacksmith'sJournal(PartiallyFull)"
    },
    "4534": {
        "botName": "T5_JOURNAL_WARRIOR",
        "humanName": "ExpertBlacksmith'sJournal(PartiallyFull)"
    },
    "4535": {
        "botName": "T6_JOURNAL_WARRIOR",
        "humanName": "MasterBlacksmith'sJournal(PartiallyFull)"
    },
    "4536": {
        "botName": "T7_JOURNAL_WARRIOR",
        "humanName": "GrandmasterBlacksmith'sJournal(PartiallyFull)"
    },
    "4537": {
        "botName": "T8_JOURNAL_WARRIOR",
        "humanName": "ElderBlacksmith'sJournal(PartiallyFull)"
    },
    "4538": {
        "botName": "T2_JOURNAL_HUNTER",
        "humanName": "NoviceFletcher'sJournal(PartiallyFull)"
    },
    "4539": {
        "botName": "T3_JOURNAL_HUNTER",
        "humanName": "JourneymanFletcher'sJournal(PartiallyFull)"
    },
    "4540": {
        "botName": "T4_JOURNAL_HUNTER",
        "humanName": "AdeptFletcher'sJournal(PartiallyFull)"
    },
    "4541": {
        "botName": "T5_JOURNAL_HUNTER",
        "humanName": "ExpertFletcher'sJournal(PartiallyFull)"
    },
    "4542": {
        "botName": "T6_JOURNAL_HUNTER",
        "humanName": "MasterFletcher'sJournal(PartiallyFull)"
    },
    "4543": {
        "botName": "T7_JOURNAL_HUNTER",
        "humanName": "GrandmasterFletcher'sJournal(PartiallyFull)"
    },
    "4544": {
        "botName": "T8_JOURNAL_HUNTER",
        "humanName": "ElderFletcher'sJournal(PartiallyFull)"
    },
    "4545": {
        "botName": "T2_JOURNAL_MAGE",
        "humanName": "NoviceImbuer'sJournal(PartiallyFull)"
    },
    "4546": {
        "botName": "T3_JOURNAL_MAGE",
        "humanName": "JourneymanImbuer'sJournal(PartiallyFull)"
    },
    "4547": {
        "botName": "T4_JOURNAL_MAGE",
        "humanName": "AdeptImbuer'sJournal(PartiallyFull)"
    },
    "4548": {
        "botName": "T5_JOURNAL_MAGE",
        "humanName": "ExpertImbuer'sJournal(PartiallyFull)"
    },
    "4549": {
        "botName": "T6_JOURNAL_MAGE",
        "humanName": "MasterImbuer'sJournal(PartiallyFull)"
    },
    "4550": {
        "botName": "T7_JOURNAL_MAGE",
        "humanName": "GrandmasterImbuer'sJournal(PartiallyFull)"
    },
    "4551": {
        "botName": "T8_JOURNAL_MAGE",
        "humanName": "ElderImbuer'sJournal(PartiallyFull)"
    },
    "4552": {
        "botName": "T2_JOURNAL_TOOLMAKER",
        "humanName": "NoviceTinker'sJournal(PartiallyFull)"
    },
    "4553": {
        "botName": "T3_JOURNAL_TOOLMAKER",
        "humanName": "JourneymanTinker'sJournal(PartiallyFull)"
    },
    "4554": {
        "botName": "T4_JOURNAL_TOOLMAKER",
        "humanName": "AdeptTinker'sJournal(PartiallyFull)"
    },
    "4555": {
        "botName": "T5_JOURNAL_TOOLMAKER",
        "humanName": "ExpertTinker'sJournal(PartiallyFull)"
    },
    "4556": {
        "botName": "T6_JOURNAL_TOOLMAKER",
        "humanName": "MasterTinker'sJournal(PartiallyFull)"
    },
    "4557": {
        "botName": "T7_JOURNAL_TOOLMAKER",
        "humanName": "GrandmasterTinker'sJournal(PartiallyFull)"
    },
    "4558": {
        "botName": "T8_JOURNAL_TOOLMAKER",
        "humanName": "ElderTinker'sJournal(PartiallyFull)"
    },
    "4559": {
        "botName": "T2_JOURNAL_MERCENARY",
        "humanName": "NoviceMercenary'sJournal(PartiallyFull)"
    },
    "4560": {
        "botName": "T3_JOURNAL_MERCENARY",
        "humanName": "JourneymanMercenary'sJournal(PartiallyFull)"
    },
    "4561": {
        "botName": "T4_JOURNAL_MERCENARY",
        "humanName": "AdeptMercenary'sJournal(PartiallyFull)"
    },
    "4562": {
        "botName": "T5_JOURNAL_MERCENARY",
        "humanName": "ExpertMercenary'sJournal(PartiallyFull)"
    },
    "4563": {
        "botName": "T6_JOURNAL_MERCENARY",
        "humanName": "MasterMercenary'sJournal(PartiallyFull)"
    },
    "4564": {
        "botName": "T7_JOURNAL_MERCENARY",
        "humanName": "GrandmasterMercenary'sJournal(PartiallyFull)"
    },
    "4565": {
        "botName": "T8_JOURNAL_MERCENARY",
        "humanName": "ElderMercenary'sJournal(PartiallyFull)"
    },
    "4566": {
        "botName": "T2_JOURNAL_TROPHY_GENERAL",
        "humanName": "Novice'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4567": {
        "botName": "T3_JOURNAL_TROPHY_GENERAL",
        "humanName": "Journeyman'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4568": {
        "botName": "T4_JOURNAL_TROPHY_GENERAL",
        "humanName": "Adept'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4569": {
        "botName": "T5_JOURNAL_TROPHY_GENERAL",
        "humanName": "Expert'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4570": {
        "botName": "T6_JOURNAL_TROPHY_GENERAL",
        "humanName": "Master'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4571": {
        "botName": "T7_JOURNAL_TROPHY_GENERAL",
        "humanName": "Grandmaster'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4572": {
        "botName": "T8_JOURNAL_TROPHY_GENERAL",
        "humanName": "Elder'sGeneralistTrophyJournal(PartiallyFull)"
    },
    "4573": {
        "botName": "T2_JOURNAL_TROPHY_MERCENARY",
        "humanName": "NoviceMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4574": {
        "botName": "T3_JOURNAL_TROPHY_MERCENARY",
        "humanName": "JourneymanMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4575": {
        "botName": "T4_JOURNAL_TROPHY_MERCENARY",
        "humanName": "AdeptMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4576": {
        "botName": "T5_JOURNAL_TROPHY_MERCENARY",
        "humanName": "ExpertMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4577": {
        "botName": "T6_JOURNAL_TROPHY_MERCENARY",
        "humanName": "MasterMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4578": {
        "botName": "T7_JOURNAL_TROPHY_MERCENARY",
        "humanName": "GrandmasterMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4579": {
        "botName": "T8_JOURNAL_TROPHY_MERCENARY",
        "humanName": "ElderMercenary'sTrophyJournal(PartiallyFull)"
    },
    "4580": {
        "botName": "T2_JOURNAL_TROPHY_HIDE",
        "humanName": "NoviceGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4581": {
        "botName": "T3_JOURNAL_TROPHY_HIDE",
        "humanName": "JourneymanGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4582": {
        "botName": "T4_JOURNAL_TROPHY_HIDE",
        "humanName": "AdeptGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4583": {
        "botName": "T5_JOURNAL_TROPHY_HIDE",
        "humanName": "ExpertGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4584": {
        "botName": "T6_JOURNAL_TROPHY_HIDE",
        "humanName": "MasterGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4585": {
        "botName": "T7_JOURNAL_TROPHY_HIDE",
        "humanName": "GrandmasterGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4586": {
        "botName": "T8_JOURNAL_TROPHY_HIDE",
        "humanName": "ElderGamekeeper'sTrophyJournal(PartiallyFull)"
    },
    "4587": {
        "botName": "T2_JOURNAL_TROPHY_WOOD",
        "humanName": "NoviceLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4588": {
        "botName": "T3_JOURNAL_TROPHY_WOOD",
        "humanName": "JourneymanLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4589": {
        "botName": "T4_JOURNAL_TROPHY_WOOD",
        "humanName": "AdeptLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4590": {
        "botName": "T5_JOURNAL_TROPHY_WOOD",
        "humanName": "ExpertLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4591": {
        "botName": "T6_JOURNAL_TROPHY_WOOD",
        "humanName": "MasterLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4592": {
        "botName": "T7_JOURNAL_TROPHY_WOOD",
        "humanName": "GrandmasterLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4593": {
        "botName": "T8_JOURNAL_TROPHY_WOOD",
        "humanName": "ElderLumberjack'sTrophyJournal(PartiallyFull)"
    },
    "4594": {
        "botName": "T2_JOURNAL_TROPHY_STONE",
        "humanName": "NoviceStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4595": {
        "botName": "T3_JOURNAL_TROPHY_STONE",
        "humanName": "JourneymanStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4596": {
        "botName": "T4_JOURNAL_TROPHY_STONE",
        "humanName": "AdeptStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4597": {
        "botName": "T5_JOURNAL_TROPHY_STONE",
        "humanName": "ExpertStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4598": {
        "botName": "T6_JOURNAL_TROPHY_STONE",
        "humanName": "MasterStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4599": {
        "botName": "T7_JOURNAL_TROPHY_STONE",
        "humanName": "GrandmasterStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4600": {
        "botName": "T8_JOURNAL_TROPHY_STONE",
        "humanName": "ElderStonecutter'sTrophyJournal(PartiallyFull)"
    },
    "4601": {
        "botName": "T2_JOURNAL_TROPHY_ORE",
        "humanName": "NoviceProspector'sTrophyJournal(PartiallyFull)"
    },
    "4602": {
        "botName": "T3_JOURNAL_TROPHY_ORE",
        "humanName": "JourneymanProspector'sTrophyJournal(PartiallyFull)"
    },
    "4603": {
        "botName": "T4_JOURNAL_TROPHY_ORE",
        "humanName": "AdeptProspector'sTrophyJournal(PartiallyFull)"
    },
    "4604": {
        "botName": "T5_JOURNAL_TROPHY_ORE",
        "humanName": "ExpertProspector'sTrophyJournal(PartiallyFull)"
    },
    "4605": {
        "botName": "T6_JOURNAL_TROPHY_ORE",
        "humanName": "MasterProspector'sTrophyJournal(PartiallyFull)"
    },
    "4606": {
        "botName": "T7_JOURNAL_TROPHY_ORE",
        "humanName": "GrandmasterProspector'sTrophyJournal(PartiallyFull)"
    },
    "4607": {
        "botName": "T8_JOURNAL_TROPHY_ORE",
        "humanName": "ElderProspector'sTrophyJournal(PartiallyFull)"
    },
    "4608": {
        "botName": "T2_JOURNAL_TROPHY_FIBER",
        "humanName": "NoviceCropper'sTrophyJournal(PartiallyFull)"
    },
    "4609": {
        "botName": "T3_JOURNAL_TROPHY_FIBER",
        "humanName": "JourneymanCropper'sTrophyJournal(PartiallyFull)"
    },
    "4610": {
        "botName": "T4_JOURNAL_TROPHY_FIBER",
        "humanName": "AdeptCropper'sTrophyJournal(PartiallyFull)"
    },
    "4611": {
        "botName": "T5_JOURNAL_TROPHY_FIBER",
        "humanName": "ExpertCropper'sTrophyJournal(PartiallyFull)"
    },
    "4612": {
        "botName": "T6_JOURNAL_TROPHY_FIBER",
        "humanName": "MasterCropper'sTrophyJournal(PartiallyFull)"
    },
    "4613": {
        "botName": "T7_JOURNAL_TROPHY_FIBER",
        "humanName": "GrandmasterCropper'sTrophyJournal(PartiallyFull)"
    },
    "4614": {
        "botName": "T8_JOURNAL_TROPHY_FIBER",
        "humanName": "ElderCropper'sTrophyJournal(PartiallyFull)"
    },
    "4615": {
        "botName": "T2_JOURNAL_TROPHY_FISHING",
        "humanName": "NoviceFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4616": {
        "botName": "T3_JOURNAL_TROPHY_FISHING",
        "humanName": "JourneymanFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4617": {
        "botName": "T4_JOURNAL_TROPHY_FISHING",
        "humanName": "AdeptFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4618": {
        "botName": "T5_JOURNAL_TROPHY_FISHING",
        "humanName": "ExpertFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4619": {
        "botName": "T6_JOURNAL_TROPHY_FISHING",
        "humanName": "MasterFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4620": {
        "botName": "T7_JOURNAL_TROPHY_FISHING",
        "humanName": "GrandmasterFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4621": {
        "botName": "T8_JOURNAL_TROPHY_FISHING",
        "humanName": "ElderFisherman'sTrophyJournal(PartiallyFull)"
    },
    "4622": {
        "botName": "T2_JOURNAL_FISHING",
        "humanName": "NoviceFisherman'sJournal(PartiallyFull)"
    },
    "4623": {
        "botName": "T3_JOURNAL_FISHING",
        "humanName": "JourneymanFisherman'sJournal(PartiallyFull)"
    },
    "4624": {
        "botName": "T4_JOURNAL_FISHING",
        "humanName": "AdeptFisherman'sJournal(PartiallyFull)"
    },
    "4625": {
        "botName": "T5_JOURNAL_FISHING",
        "humanName": "ExpertFisherman'sJournal(PartiallyFull)"
    },
    "4626": {
        "botName": "T6_JOURNAL_FISHING",
        "humanName": "MasterFisherman'sJournal(PartiallyFull)"
    },
    "4627": {
        "botName": "T7_JOURNAL_FISHING",
        "humanName": "GrandmasterFisherman'sJournal(PartiallyFull)"
    },
    "4628": {
        "botName": "T8_JOURNAL_FISHING",
        "humanName": "ElderFisherman'sJournal(PartiallyFull)"
    },
    "4629": {
        "botName": "T2_LABOURER_CONTRACT_WOOD",
        "humanName": "NoviceLumberjackContract"
    },
    "4630": {
        "botName": "T3_LABOURER_CONTRACT_WOOD",
        "humanName": "JourneymanLumberjackContract"
    },
    "4631": {
        "botName": "T4_LABOURER_CONTRACT_WOOD",
        "humanName": "AdeptLumberjackContract"
    },
    "4632": {
        "botName": "T5_LABOURER_CONTRACT_WOOD",
        "humanName": "ExpertLumberjackContract"
    },
    "4633": {
        "botName": "T6_LABOURER_CONTRACT_WOOD",
        "humanName": "MasterLumberjackContract"
    },
    "4634": {
        "botName": "T7_LABOURER_CONTRACT_WOOD",
        "humanName": "GrandmasterLumberjackContract"
    },
    "4635": {
        "botName": "T8_LABOURER_CONTRACT_WOOD",
        "humanName": "ElderLumberjackContract"
    },
    "4636": {
        "botName": "T2_LABOURER_CONTRACT_STONE",
        "humanName": "NoviceStonecutterContract"
    },
    "4637": {
        "botName": "T3_LABOURER_CONTRACT_STONE",
        "humanName": "JourneymanStonecutterContract"
    },
    "4638": {
        "botName": "T4_LABOURER_CONTRACT_STONE",
        "humanName": "AdeptStonecutterContract"
    },
    "4639": {
        "botName": "T5_LABOURER_CONTRACT_STONE",
        "humanName": "ExpertStonecutterContract"
    },
    "4640": {
        "botName": "T6_LABOURER_CONTRACT_STONE",
        "humanName": "MasterStonecutterContract"
    },
    "4641": {
        "botName": "T7_LABOURER_CONTRACT_STONE",
        "humanName": "GrandmasterStonecutterContract"
    },
    "4642": {
        "botName": "T8_LABOURER_CONTRACT_STONE",
        "humanName": "ElderStonecutterContract"
    },
    "4643": {
        "botName": "T2_LABOURER_CONTRACT_FIBER",
        "humanName": "NoviceCropperContract"
    },
    "4644": {
        "botName": "T3_LABOURER_CONTRACT_FIBER",
        "humanName": "JourneymanCropperContract"
    },
    "4645": {
        "botName": "T4_LABOURER_CONTRACT_FIBER",
        "humanName": "AdeptCropperContract"
    },
    "4646": {
        "botName": "T5_LABOURER_CONTRACT_FIBER",
        "humanName": "ExpertCropperContract"
    },
    "4647": {
        "botName": "T6_LABOURER_CONTRACT_FIBER",
        "humanName": "MasterCropperContract"
    },
    "4648": {
        "botName": "T7_LABOURER_CONTRACT_FIBER",
        "humanName": "GrandmasterCropperContract"
    },
    "4649": {
        "botName": "T8_LABOURER_CONTRACT_FIBER",
        "humanName": "ElderCropperContract"
    },
    "4650": {
        "botName": "T2_LABOURER_CONTRACT_HIDE",
        "humanName": "NoviceGamekeeperContract"
    },
    "4651": {
        "botName": "T3_LABOURER_CONTRACT_HIDE",
        "humanName": "JourneymanGamekeeperContract"
    },
    "4652": {
        "botName": "T4_LABOURER_CONTRACT_HIDE",
        "humanName": "AdeptGamekeeperContract"
    },
    "4653": {
        "botName": "T5_LABOURER_CONTRACT_HIDE",
        "humanName": "ExpertGamekeeperContract"
    },
    "4654": {
        "botName": "T6_LABOURER_CONTRACT_HIDE",
        "humanName": "MasterGamekeeperContract"
    },
    "4655": {
        "botName": "T7_LABOURER_CONTRACT_HIDE",
        "humanName": "GrandmasterGamekeeperContract"
    },
    "4656": {
        "botName": "T8_LABOURER_CONTRACT_HIDE",
        "humanName": "ElderGamekeeperContract"
    },
    "4657": {
        "botName": "T2_LABOURER_CONTRACT_ORE",
        "humanName": "NoviceProspectorContract"
    },
    "4658": {
        "botName": "T3_LABOURER_CONTRACT_ORE",
        "humanName": "JourneymanProspectorContract"
    },
    "4659": {
        "botName": "T4_LABOURER_CONTRACT_ORE",
        "humanName": "AdeptProspectorContract"
    },
    "4660": {
        "botName": "T5_LABOURER_CONTRACT_ORE",
        "humanName": "ExpertProspectorContract"
    },
    "4661": {
        "botName": "T6_LABOURER_CONTRACT_ORE",
        "humanName": "MasterProspectorContract"
    },
    "4662": {
        "botName": "T7_LABOURER_CONTRACT_ORE",
        "humanName": "GrandmasterProspectorContract"
    },
    "4663": {
        "botName": "T8_LABOURER_CONTRACT_ORE",
        "humanName": "ElderProspectorContract"
    },
    "4664": {
        "botName": "T2_LABOURER_CONTRACT_MERCENARY",
        "humanName": "NoviceMercenaryContract"
    },
    "4665": {
        "botName": "T3_LABOURER_CONTRACT_MERCENARY",
        "humanName": "JourneymanMercenaryContract"
    },
    "4666": {
        "botName": "T4_LABOURER_CONTRACT_MERCENARY",
        "humanName": "AdeptMercenaryContract"
    },
    "4667": {
        "botName": "T5_LABOURER_CONTRACT_MERCENARY",
        "humanName": "ExpertMercenaryContract"
    },
    "4668": {
        "botName": "T6_LABOURER_CONTRACT_MERCENARY",
        "humanName": "MasterMercenaryContract"
    },
    "4669": {
        "botName": "T7_LABOURER_CONTRACT_MERCENARY",
        "humanName": "GrandmasterMercenaryContract"
    },
    "4670": {
        "botName": "T8_LABOURER_CONTRACT_MERCENARY",
        "humanName": "ElderMercenaryContract"
    },
    "4671": {
        "botName": "T2_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "NoviceFishermanContract"
    },
    "4672": {
        "botName": "T3_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "JourneymanFishermanContract"
    },
    "4673": {
        "botName": "T4_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "AdeptFishermanContract"
    },
    "4674": {
        "botName": "T5_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "ExpertFishermanContract"
    },
    "4675": {
        "botName": "T6_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "MasterFishermanContract"
    },
    "4676": {
        "botName": "T7_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "GrandmasterFishermanContract"
    },
    "4677": {
        "botName": "T8_LABOURER_CONTRACT_FISHERMAN",
        "humanName": "ElderFishermanContract"
    },
    "4678": {
        "botName": "T2_LABOURER_CONTRACT_HUNTER",
        "humanName": "NoviceFletcherContract"
    },
    "4679": {
        "botName": "T3_LABOURER_CONTRACT_HUNTER",
        "humanName": "JourneymanFletcherContract"
    },
    "4680": {
        "botName": "T4_LABOURER_CONTRACT_HUNTER",
        "humanName": "AdeptFletcherContract"
    },
    "4681": {
        "botName": "T5_LABOURER_CONTRACT_HUNTER",
        "humanName": "ExpertFletcherContract"
    },
    "4682": {
        "botName": "T6_LABOURER_CONTRACT_HUNTER",
        "humanName": "MasterFletcherContract"
    },
    "4683": {
        "botName": "T7_LABOURER_CONTRACT_HUNTER",
        "humanName": "GrandmasterFletcherContract"
    },
    "4684": {
        "botName": "T8_LABOURER_CONTRACT_HUNTER",
        "humanName": "ElderFletcherContract"
    },
    "4685": {
        "botName": "T2_LABOURER_CONTRACT_MAGE",
        "humanName": "NoviceImbuerContract"
    },
    "4686": {
        "botName": "T3_LABOURER_CONTRACT_MAGE",
        "humanName": "JourneymanImbuerContract"
    },
    "4687": {
        "botName": "T4_LABOURER_CONTRACT_MAGE",
        "humanName": "AdeptImbuerContract"
    },
    "4688": {
        "botName": "T5_LABOURER_CONTRACT_MAGE",
        "humanName": "ExpertImbuerContract"
    },
    "4689": {
        "botName": "T6_LABOURER_CONTRACT_MAGE",
        "humanName": "MasterImbuerContract"
    },
    "4690": {
        "botName": "T7_LABOURER_CONTRACT_MAGE",
        "humanName": "GrandmasterImbuerContract"
    },
    "4691": {
        "botName": "T8_LABOURER_CONTRACT_MAGE",
        "humanName": "ElderImbuerContract"
    },
    "4692": {
        "botName": "T2_LABOURER_CONTRACT_WARRIOR",
        "humanName": "NoviceBlacksmithContract"
    },
    "4693": {
        "botName": "T3_LABOURER_CONTRACT_WARRIOR",
        "humanName": "JourneymanBlacksmithContract"
    },
    "4694": {
        "botName": "T4_LABOURER_CONTRACT_WARRIOR",
        "humanName": "AdeptBlacksmithContract"
    },
    "4695": {
        "botName": "T5_LABOURER_CONTRACT_WARRIOR",
        "humanName": "ExpertBlacksmithContract"
    },
    "4696": {
        "botName": "T6_LABOURER_CONTRACT_WARRIOR",
        "humanName": "MasterBlacksmithContract"
    },
    "4697": {
        "botName": "T7_LABOURER_CONTRACT_WARRIOR",
        "humanName": "GrandmasterBlacksmithContract"
    },
    "4698": {
        "botName": "T8_LABOURER_CONTRACT_WARRIOR",
        "humanName": "ElderBlacksmithContract"
    },
    "4699": {
        "botName": "T2_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "NoviceTinkerContract"
    },
    "4700": {
        "botName": "T3_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "JourneymanTinkerContract"
    },
    "4701": {
        "botName": "T4_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "AdeptTinkerContract"
    },
    "4702": {
        "botName": "T5_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "ExpertTinkerContract"
    },
    "4703": {
        "botName": "T6_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "MasterTinkerContract"
    },
    "4704": {
        "botName": "T7_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "GrandmasterTinkerContract"
    },
    "4705": {
        "botName": "T8_LABOURER_CONTRACT_TOOLMAKER",
        "humanName": "ElderTinkerContract"
    },
    "4706": {
        "botName": "T2_2H_BOW",
        "humanName": "Novice'sBow"
    },
    "4707": {
        "botName": "T3_2H_BOW",
        "humanName": "Journeyman'sBow"
    },
    "4708": {
        "botName": "T4_2H_BOW",
        "humanName": "Adept'sBow"
    },
    "4709": {
        "botName": "T4_2H_BOW@1",
        "humanName": "Adept'sBow"
    },
    "4710": {
        "botName": "T4_2H_BOW@2",
        "humanName": "Adept'sBow"
    },
    "4711": {
        "botName": "T4_2H_BOW@3",
        "humanName": "Adept'sBow"
    },
    "4712": {
        "botName": "T5_2H_BOW",
        "humanName": "Expert'sBow"
    },
    "4713": {
        "botName": "T5_2H_BOW@1",
        "humanName": "Expert'sBow"
    },
    "4714": {
        "botName": "T5_2H_BOW@2",
        "humanName": "Expert'sBow"
    },
    "4715": {
        "botName": "T5_2H_BOW@3",
        "humanName": "Expert'sBow"
    },
    "4716": {
        "botName": "T6_2H_BOW",
        "humanName": "Master'sBow"
    },
    "4717": {
        "botName": "T6_2H_BOW@1",
        "humanName": "Master'sBow"
    },
    "4718": {
        "botName": "T6_2H_BOW@2",
        "humanName": "Master'sBow"
    },
    "4719": {
        "botName": "T6_2H_BOW@3",
        "humanName": "Master'sBow"
    },
    "4720": {
        "botName": "T7_2H_BOW",
        "humanName": "Grandmaster'sBow"
    },
    "4721": {
        "botName": "T7_2H_BOW@1",
        "humanName": "Grandmaster'sBow"
    },
    "4722": {
        "botName": "T7_2H_BOW@2",
        "humanName": "Grandmaster'sBow"
    },
    "4723": {
        "botName": "T7_2H_BOW@3",
        "humanName": "Grandmaster'sBow"
    },
    "4724": {
        "botName": "T8_2H_BOW",
        "humanName": "Elder'sBow"
    },
    "4725": {
        "botName": "T8_2H_BOW@1",
        "humanName": "Elder'sBow"
    },
    "4726": {
        "botName": "T8_2H_BOW@2",
        "humanName": "Elder'sBow"
    },
    "4727": {
        "botName": "T8_2H_BOW@3",
        "humanName": "Elder'sBow"
    },
    "4728": {
        "botName": "T4_2H_WARBOW",
        "humanName": "Adept'sWarbow"
    },
    "4729": {
        "botName": "T4_2H_WARBOW@1",
        "humanName": "Adept'sWarbow"
    },
    "4730": {
        "botName": "T4_2H_WARBOW@2",
        "humanName": "Adept'sWarbow"
    },
    "4731": {
        "botName": "T4_2H_WARBOW@3",
        "humanName": "Adept'sWarbow"
    },
    "4732": {
        "botName": "T5_2H_WARBOW",
        "humanName": "Expert'sWarbow"
    },
    "4733": {
        "botName": "T5_2H_WARBOW@1",
        "humanName": "Expert'sWarbow"
    },
    "4734": {
        "botName": "T5_2H_WARBOW@2",
        "humanName": "Expert'sWarbow"
    },
    "4735": {
        "botName": "T5_2H_WARBOW@3",
        "humanName": "Expert'sWarbow"
    },
    "4736": {
        "botName": "T6_2H_WARBOW",
        "humanName": "Master'sWarbow"
    },
    "4737": {
        "botName": "T6_2H_WARBOW@1",
        "humanName": "Master'sWarbow"
    },
    "4738": {
        "botName": "T6_2H_WARBOW@2",
        "humanName": "Master'sWarbow"
    },
    "4739": {
        "botName": "T6_2H_WARBOW@3",
        "humanName": "Master'sWarbow"
    },
    "4740": {
        "botName": "T7_2H_WARBOW",
        "humanName": "Grandmaster'sWarbow"
    },
    "4741": {
        "botName": "T7_2H_WARBOW@1",
        "humanName": "Grandmaster'sWarbow"
    },
    "4742": {
        "botName": "T7_2H_WARBOW@2",
        "humanName": "Grandmaster'sWarbow"
    },
    "4743": {
        "botName": "T7_2H_WARBOW@3",
        "humanName": "Grandmaster'sWarbow"
    },
    "4744": {
        "botName": "T8_2H_WARBOW",
        "humanName": "Elder'sWarbow"
    },
    "4745": {
        "botName": "T8_2H_WARBOW@1",
        "humanName": "Elder'sWarbow"
    },
    "4746": {
        "botName": "T8_2H_WARBOW@2",
        "humanName": "Elder'sWarbow"
    },
    "4747": {
        "botName": "T8_2H_WARBOW@3",
        "humanName": "Elder'sWarbow"
    },
    "4748": {
        "botName": "T4_2H_LONGBOW",
        "humanName": "Adept'sLongbow"
    },
    "4749": {
        "botName": "T4_2H_LONGBOW@1",
        "humanName": "Adept'sLongbow"
    },
    "4750": {
        "botName": "T4_2H_LONGBOW@2",
        "humanName": "Adept'sLongbow"
    },
    "4751": {
        "botName": "T4_2H_LONGBOW@3",
        "humanName": "Adept'sLongbow"
    },
    "4752": {
        "botName": "T5_2H_LONGBOW",
        "humanName": "Expert'sLongbow"
    },
    "4753": {
        "botName": "T5_2H_LONGBOW@1",
        "humanName": "Expert'sLongbow"
    },
    "4754": {
        "botName": "T5_2H_LONGBOW@2",
        "humanName": "Expert'sLongbow"
    },
    "4755": {
        "botName": "T5_2H_LONGBOW@3",
        "humanName": "Expert'sLongbow"
    },
    "4756": {
        "botName": "T6_2H_LONGBOW",
        "humanName": "Master'sLongbow"
    },
    "4757": {
        "botName": "T6_2H_LONGBOW@1",
        "humanName": "Master'sLongbow"
    },
    "4758": {
        "botName": "T6_2H_LONGBOW@2",
        "humanName": "Master'sLongbow"
    },
    "4759": {
        "botName": "T6_2H_LONGBOW@3",
        "humanName": "Master'sLongbow"
    },
    "4760": {
        "botName": "T7_2H_LONGBOW",
        "humanName": "Grandmaster'sLongbow"
    },
    "4761": {
        "botName": "T7_2H_LONGBOW@1",
        "humanName": "Grandmaster'sLongbow"
    },
    "4762": {
        "botName": "T7_2H_LONGBOW@2",
        "humanName": "Grandmaster'sLongbow"
    },
    "4763": {
        "botName": "T7_2H_LONGBOW@3",
        "humanName": "Grandmaster'sLongbow"
    },
    "4764": {
        "botName": "T8_2H_LONGBOW",
        "humanName": "Elder'sLongbow"
    },
    "4765": {
        "botName": "T8_2H_LONGBOW@1",
        "humanName": "Elder'sLongbow"
    },
    "4766": {
        "botName": "T8_2H_LONGBOW@2",
        "humanName": "Elder'sLongbow"
    },
    "4767": {
        "botName": "T8_2H_LONGBOW@3",
        "humanName": "Elder'sLongbow"
    },
    "4768": {
        "botName": "T4_2H_LONGBOW_UNDEAD",
        "humanName": "Adept'sWhisperingBow"
    },
    "4769": {
        "botName": "T4_2H_LONGBOW_UNDEAD@1",
        "humanName": "Adept'sWhisperingBow"
    },
    "4770": {
        "botName": "T4_2H_LONGBOW_UNDEAD@2",
        "humanName": "Adept'sWhisperingBow"
    },
    "4771": {
        "botName": "T4_2H_LONGBOW_UNDEAD@3",
        "humanName": "Adept'sWhisperingBow"
    },
    "4772": {
        "botName": "T5_2H_LONGBOW_UNDEAD",
        "humanName": "Expert'sWhisperingBow"
    },
    "4773": {
        "botName": "T5_2H_LONGBOW_UNDEAD@1",
        "humanName": "Expert'sWhisperingBow"
    },
    "4774": {
        "botName": "T5_2H_LONGBOW_UNDEAD@2",
        "humanName": "Expert'sWhisperingBow"
    },
    "4775": {
        "botName": "T5_2H_LONGBOW_UNDEAD@3",
        "humanName": "Expert'sWhisperingBow"
    },
    "4776": {
        "botName": "T6_2H_LONGBOW_UNDEAD",
        "humanName": "Master'sWhisperingBow"
    },
    "4777": {
        "botName": "T6_2H_LONGBOW_UNDEAD@1",
        "humanName": "Master'sWhisperingBow"
    },
    "4778": {
        "botName": "T6_2H_LONGBOW_UNDEAD@2",
        "humanName": "Master'sWhisperingBow"
    },
    "4779": {
        "botName": "T6_2H_LONGBOW_UNDEAD@3",
        "humanName": "Master'sWhisperingBow"
    },
    "4780": {
        "botName": "T7_2H_LONGBOW_UNDEAD",
        "humanName": "Grandmaster'sWhisperingBow"
    },
    "4781": {
        "botName": "T7_2H_LONGBOW_UNDEAD@1",
        "humanName": "Grandmaster'sWhisperingBow"
    },
    "4782": {
        "botName": "T7_2H_LONGBOW_UNDEAD@2",
        "humanName": "Grandmaster'sWhisperingBow"
    },
    "4783": {
        "botName": "T7_2H_LONGBOW_UNDEAD@3",
        "humanName": "Grandmaster'sWhisperingBow"
    },
    "4784": {
        "botName": "T8_2H_LONGBOW_UNDEAD",
        "humanName": "Elder'sWhisperingBow"
    },
    "4785": {
        "botName": "T8_2H_LONGBOW_UNDEAD@1",
        "humanName": "Elder'sWhisperingBow"
    },
    "4786": {
        "botName": "T8_2H_LONGBOW_UNDEAD@2",
        "humanName": "Elder'sWhisperingBow"
    },
    "4787": {
        "botName": "T8_2H_LONGBOW_UNDEAD@3",
        "humanName": "Elder'sWhisperingBow"
    },
    "4788": {
        "botName": "T4_2H_BOW_HELL",
        "humanName": "Adept'sWailingBow"
    },
    "4789": {
        "botName": "T4_2H_BOW_HELL@1",
        "humanName": "Adept'sWailingBow"
    },
    "4790": {
        "botName": "T4_2H_BOW_HELL@2",
        "humanName": "Adept'sWailingBow"
    },
    "4791": {
        "botName": "T4_2H_BOW_HELL@3",
        "humanName": "Adept'sWailingBow"
    },
    "4792": {
        "botName": "T5_2H_BOW_HELL",
        "humanName": "Expert'sWailingBow"
    },
    "4793": {
        "botName": "T5_2H_BOW_HELL@1",
        "humanName": "Expert'sWailingBow"
    },
    "4794": {
        "botName": "T5_2H_BOW_HELL@2",
        "humanName": "Expert'sWailingBow"
    },
    "4795": {
        "botName": "T5_2H_BOW_HELL@3",
        "humanName": "Expert'sWailingBow"
    },
    "4796": {
        "botName": "T6_2H_BOW_HELL",
        "humanName": "Master'sWailingBow"
    },
    "4797": {
        "botName": "T6_2H_BOW_HELL@1",
        "humanName": "Master'sWailingBow"
    },
    "4798": {
        "botName": "T6_2H_BOW_HELL@2",
        "humanName": "Master'sWailingBow"
    },
    "4799": {
        "botName": "T6_2H_BOW_HELL@3",
        "humanName": "Master'sWailingBow"
    },
    "4800": {
        "botName": "T7_2H_BOW_HELL",
        "humanName": "Grandmaster'sWailingBow"
    },
    "4801": {
        "botName": "T7_2H_BOW_HELL@1",
        "humanName": "Grandmaster'sWailingBow"
    },
    "4802": {
        "botName": "T7_2H_BOW_HELL@2",
        "humanName": "Grandmaster'sWailingBow"
    },
    "4803": {
        "botName": "T7_2H_BOW_HELL@3",
        "humanName": "Grandmaster'sWailingBow"
    },
    "4804": {
        "botName": "T8_2H_BOW_HELL",
        "humanName": "Elder'sWailingBow"
    },
    "4805": {
        "botName": "T8_2H_BOW_HELL@1",
        "humanName": "Elder'sWailingBow"
    },
    "4806": {
        "botName": "T8_2H_BOW_HELL@2",
        "humanName": "Elder'sWailingBow"
    },
    "4807": {
        "botName": "T8_2H_BOW_HELL@3",
        "humanName": "Elder'sWailingBow"
    },
    "4808": {
        "botName": "T4_2H_BOW_KEEPER",
        "humanName": "Adept'sBowofBadon"
    },
    "4809": {
        "botName": "T4_2H_BOW_KEEPER@1",
        "humanName": "Adept'sBowofBadon"
    },
    "4810": {
        "botName": "T4_2H_BOW_KEEPER@2",
        "humanName": "Adept'sBowofBadon"
    },
    "4811": {
        "botName": "T4_2H_BOW_KEEPER@3",
        "humanName": "Adept'sBowofBadon"
    },
    "4812": {
        "botName": "T5_2H_BOW_KEEPER",
        "humanName": "Expert'sBowofBadon"
    },
    "4813": {
        "botName": "T5_2H_BOW_KEEPER@1",
        "humanName": "Expert'sBowofBadon"
    },
    "4814": {
        "botName": "T5_2H_BOW_KEEPER@2",
        "humanName": "Expert'sBowofBadon"
    },
    "4815": {
        "botName": "T5_2H_BOW_KEEPER@3",
        "humanName": "Expert'sBowofBadon"
    },
    "4816": {
        "botName": "T6_2H_BOW_KEEPER",
        "humanName": "Master'sBowofBadon"
    },
    "4817": {
        "botName": "T6_2H_BOW_KEEPER@1",
        "humanName": "Master'sBowofBadon"
    },
    "4818": {
        "botName": "T6_2H_BOW_KEEPER@2",
        "humanName": "Master'sBowofBadon"
    },
    "4819": {
        "botName": "T6_2H_BOW_KEEPER@3",
        "humanName": "Master'sBowofBadon"
    },
    "4820": {
        "botName": "T7_2H_BOW_KEEPER",
        "humanName": "Grandmaster'sBowofBadon"
    },
    "4821": {
        "botName": "T7_2H_BOW_KEEPER@1",
        "humanName": "Grandmaster'sBowofBadon"
    },
    "4822": {
        "botName": "T7_2H_BOW_KEEPER@2",
        "humanName": "Grandmaster'sBowofBadon"
    },
    "4823": {
        "botName": "T7_2H_BOW_KEEPER@3",
        "humanName": "Grandmaster'sBowofBadon"
    },
    "4824": {
        "botName": "T8_2H_BOW_KEEPER",
        "humanName": "Elder'sBowofBadon"
    },
    "4825": {
        "botName": "T8_2H_BOW_KEEPER@1",
        "humanName": "Elder'sBowofBadon"
    },
    "4826": {
        "botName": "T8_2H_BOW_KEEPER@2",
        "humanName": "Elder'sBowofBadon"
    },
    "4827": {
        "botName": "T8_2H_BOW_KEEPER@3",
        "humanName": "Elder'sBowofBadon"
    },
    "4828": {
        "botName": "T4_2H_BOW_AVALON",
        "humanName": "Adept'sMistpiercer"
    },
    "4829": {
        "botName": "T4_2H_BOW_AVALON@1",
        "humanName": "Adept'sMistpiercer"
    },
    "4830": {
        "botName": "T4_2H_BOW_AVALON@2",
        "humanName": "Adept'sMistpiercer"
    },
    "4831": {
        "botName": "T4_2H_BOW_AVALON@3",
        "humanName": "Adept'sMistpiercer"
    },
    "4832": {
        "botName": "T5_2H_BOW_AVALON",
        "humanName": "Expert'sMistpiercer"
    },
    "4833": {
        "botName": "T5_2H_BOW_AVALON@1",
        "humanName": "Expert'sMistpiercer"
    },
    "4834": {
        "botName": "T5_2H_BOW_AVALON@2",
        "humanName": "Expert'sMistpiercer"
    },
    "4835": {
        "botName": "T5_2H_BOW_AVALON@3",
        "humanName": "Expert'sMistpiercer"
    },
    "4836": {
        "botName": "T6_2H_BOW_AVALON",
        "humanName": "Master'sMistpiercer"
    },
    "4837": {
        "botName": "T6_2H_BOW_AVALON@1",
        "humanName": "Master'sMistpiercer"
    },
    "4838": {
        "botName": "T6_2H_BOW_AVALON@2",
        "humanName": "Master'sMistpiercer"
    },
    "4839": {
        "botName": "T6_2H_BOW_AVALON@3",
        "humanName": "Master'sMistpiercer"
    },
    "4840": {
        "botName": "T7_2H_BOW_AVALON",
        "humanName": "Grandmaster'sMistpiercer"
    },
    "4841": {
        "botName": "T7_2H_BOW_AVALON@1",
        "humanName": "Grandmaster'sMistpiercer"
    },
    "4842": {
        "botName": "T7_2H_BOW_AVALON@2",
        "humanName": "Grandmaster'sMistpiercer"
    },
    "4843": {
        "botName": "T7_2H_BOW_AVALON@3",
        "humanName": "Grandmaster'sMistpiercer"
    },
    "4844": {
        "botName": "T8_2H_BOW_AVALON",
        "humanName": "Elder'sMistpiercer"
    },
    "4845": {
        "botName": "T8_2H_BOW_AVALON@1",
        "humanName": "Elder'sMistpiercer"
    },
    "4846": {
        "botName": "T8_2H_BOW_AVALON@2",
        "humanName": "Elder'sMistpiercer"
    },
    "4847": {
        "botName": "T8_2H_BOW_AVALON@3",
        "humanName": "Elder'sMistpiercer"
    },
    "4848": {
        "botName": "T3_2H_CROSSBOW",
        "humanName": "Journeyman'sCrossbow"
    },
    "4849": {
        "botName": "T4_2H_CROSSBOW",
        "humanName": "Adept'sCrossbow"
    },
    "4850": {
        "botName": "T4_2H_CROSSBOW@1",
        "humanName": "Adept'sCrossbow"
    },
    "4851": {
        "botName": "T4_2H_CROSSBOW@2",
        "humanName": "Adept'sCrossbow"
    },
    "4852": {
        "botName": "T4_2H_CROSSBOW@3",
        "humanName": "Adept'sCrossbow"
    },
    "4853": {
        "botName": "T5_2H_CROSSBOW",
        "humanName": "Expert'sCrossbow"
    },
    "4854": {
        "botName": "T5_2H_CROSSBOW@1",
        "humanName": "Expert'sCrossbow"
    },
    "4855": {
        "botName": "T5_2H_CROSSBOW@2",
        "humanName": "Expert'sCrossbow"
    },
    "4856": {
        "botName": "T5_2H_CROSSBOW@3",
        "humanName": "Expert'sCrossbow"
    },
    "4857": {
        "botName": "T6_2H_CROSSBOW",
        "humanName": "Master'sCrossbow"
    },
    "4858": {
        "botName": "T6_2H_CROSSBOW@1",
        "humanName": "Master'sCrossbow"
    },
    "4859": {
        "botName": "T6_2H_CROSSBOW@2",
        "humanName": "Master'sCrossbow"
    },
    "4860": {
        "botName": "T6_2H_CROSSBOW@3",
        "humanName": "Master'sCrossbow"
    },
    "4861": {
        "botName": "T7_2H_CROSSBOW",
        "humanName": "Grandmaster'sCrossbow"
    },
    "4862": {
        "botName": "T7_2H_CROSSBOW@1",
        "humanName": "Grandmaster'sCrossbow"
    },
    "4863": {
        "botName": "T7_2H_CROSSBOW@2",
        "humanName": "Grandmaster'sCrossbow"
    },
    "4864": {
        "botName": "T7_2H_CROSSBOW@3",
        "humanName": "Grandmaster'sCrossbow"
    },
    "4865": {
        "botName": "T8_2H_CROSSBOW",
        "humanName": "Elder'sCrossbow"
    },
    "4866": {
        "botName": "T8_2H_CROSSBOW@1",
        "humanName": "Elder'sCrossbow"
    },
    "4867": {
        "botName": "T8_2H_CROSSBOW@2",
        "humanName": "Elder'sCrossbow"
    },
    "4868": {
        "botName": "T8_2H_CROSSBOW@3",
        "humanName": "Elder'sCrossbow"
    },
    "4869": {
        "botName": "T4_2H_CROSSBOWLARGE",
        "humanName": "Adept'sHeavyCrossbow"
    },
    "4870": {
        "botName": "T4_2H_CROSSBOWLARGE@1",
        "humanName": "Adept'sHeavyCrossbow"
    },
    "4871": {
        "botName": "T4_2H_CROSSBOWLARGE@2",
        "humanName": "Adept'sHeavyCrossbow"
    },
    "4872": {
        "botName": "T4_2H_CROSSBOWLARGE@3",
        "humanName": "Adept'sHeavyCrossbow"
    },
    "4873": {
        "botName": "T5_2H_CROSSBOWLARGE",
        "humanName": "Expert'sHeavyCrossbow"
    },
    "4874": {
        "botName": "T5_2H_CROSSBOWLARGE@1",
        "humanName": "Expert'sHeavyCrossbow"
    },
    "4875": {
        "botName": "T5_2H_CROSSBOWLARGE@2",
        "humanName": "Expert'sHeavyCrossbow"
    },
    "4876": {
        "botName": "T5_2H_CROSSBOWLARGE@3",
        "humanName": "Expert'sHeavyCrossbow"
    },
    "4877": {
        "botName": "T6_2H_CROSSBOWLARGE",
        "humanName": "Master'sHeavyCrossbow"
    },
    "4878": {
        "botName": "T6_2H_CROSSBOWLARGE@1",
        "humanName": "Master'sHeavyCrossbow"
    },
    "4879": {
        "botName": "T6_2H_CROSSBOWLARGE@2",
        "humanName": "Master'sHeavyCrossbow"
    },
    "4880": {
        "botName": "T6_2H_CROSSBOWLARGE@3",
        "humanName": "Master'sHeavyCrossbow"
    },
    "4881": {
        "botName": "T7_2H_CROSSBOWLARGE",
        "humanName": "Grandmaster'sHeavyCrossbow"
    },
    "4882": {
        "botName": "T7_2H_CROSSBOWLARGE@1",
        "humanName": "Grandmaster'sHeavyCrossbow"
    },
    "4883": {
        "botName": "T7_2H_CROSSBOWLARGE@2",
        "humanName": "Grandmaster'sHeavyCrossbow"
    },
    "4884": {
        "botName": "T7_2H_CROSSBOWLARGE@3",
        "humanName": "Grandmaster'sHeavyCrossbow"
    },
    "4885": {
        "botName": "T8_2H_CROSSBOWLARGE",
        "humanName": "Elder'sHeavyCrossbow"
    },
    "4886": {
        "botName": "T8_2H_CROSSBOWLARGE@1",
        "humanName": "Elder'sHeavyCrossbow"
    },
    "4887": {
        "botName": "T8_2H_CROSSBOWLARGE@2",
        "humanName": "Elder'sHeavyCrossbow"
    },
    "4888": {
        "botName": "T8_2H_CROSSBOWLARGE@3",
        "humanName": "Elder'sHeavyCrossbow"
    },
    "4889": {
        "botName": "T4_MAIN_1HCROSSBOW",
        "humanName": "Adept'sLightCrossbow"
    },
    "4890": {
        "botName": "T4_MAIN_1HCROSSBOW@1",
        "humanName": "Adept'sLightCrossbow"
    },
    "4891": {
        "botName": "T4_MAIN_1HCROSSBOW@2",
        "humanName": "Adept'sLightCrossbow"
    },
    "4892": {
        "botName": "T4_MAIN_1HCROSSBOW@3",
        "humanName": "Adept'sLightCrossbow"
    },
    "4893": {
        "botName": "T5_MAIN_1HCROSSBOW",
        "humanName": "Expert'sLightCrossbow"
    },
    "4894": {
        "botName": "T5_MAIN_1HCROSSBOW@1",
        "humanName": "Expert'sLightCrossbow"
    },
    "4895": {
        "botName": "T5_MAIN_1HCROSSBOW@2",
        "humanName": "Expert'sLightCrossbow"
    },
    "4896": {
        "botName": "T5_MAIN_1HCROSSBOW@3",
        "humanName": "Expert'sLightCrossbow"
    },
    "4897": {
        "botName": "T6_MAIN_1HCROSSBOW",
        "humanName": "Master'sLightCrossbow"
    },
    "4898": {
        "botName": "T6_MAIN_1HCROSSBOW@1",
        "humanName": "Master'sLightCrossbow"
    },
    "4899": {
        "botName": "T6_MAIN_1HCROSSBOW@2",
        "humanName": "Master'sLightCrossbow"
    },
    "4900": {
        "botName": "T6_MAIN_1HCROSSBOW@3",
        "humanName": "Master'sLightCrossbow"
    },
    "4901": {
        "botName": "T7_MAIN_1HCROSSBOW",
        "humanName": "Grandmaster'sLightCrossbow"
    },
    "4902": {
        "botName": "T7_MAIN_1HCROSSBOW@1",
        "humanName": "Grandmaster'sLightCrossbow"
    },
    "4903": {
        "botName": "T7_MAIN_1HCROSSBOW@2",
        "humanName": "Grandmaster'sLightCrossbow"
    },
    "4904": {
        "botName": "T7_MAIN_1HCROSSBOW@3",
        "humanName": "Grandmaster'sLightCrossbow"
    },
    "4905": {
        "botName": "T8_MAIN_1HCROSSBOW",
        "humanName": "Elder'sLightCrossbow"
    },
    "4906": {
        "botName": "T8_MAIN_1HCROSSBOW@1",
        "humanName": "Elder'sLightCrossbow"
    },
    "4907": {
        "botName": "T8_MAIN_1HCROSSBOW@2",
        "humanName": "Elder'sLightCrossbow"
    },
    "4908": {
        "botName": "T8_MAIN_1HCROSSBOW@3",
        "humanName": "Elder'sLightCrossbow"
    },
    "4909": {
        "botName": "T4_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Adept'sWeepingRepeater"
    },
    "4910": {
        "botName": "T4_2H_REPEATINGCROSSBOW_UNDEAD@1",
        "humanName": "Adept'sWeepingRepeater"
    },
    "4911": {
        "botName": "T4_2H_REPEATINGCROSSBOW_UNDEAD@2",
        "humanName": "Adept'sWeepingRepeater"
    },
    "4912": {
        "botName": "T4_2H_REPEATINGCROSSBOW_UNDEAD@3",
        "humanName": "Adept'sWeepingRepeater"
    },
    "4913": {
        "botName": "T5_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Expert'sWeepingRepeater"
    },
    "4914": {
        "botName": "T5_2H_REPEATINGCROSSBOW_UNDEAD@1",
        "humanName": "Expert'sWeepingRepeater"
    },
    "4915": {
        "botName": "T5_2H_REPEATINGCROSSBOW_UNDEAD@2",
        "humanName": "Expert'sWeepingRepeater"
    },
    "4916": {
        "botName": "T5_2H_REPEATINGCROSSBOW_UNDEAD@3",
        "humanName": "Expert'sWeepingRepeater"
    },
    "4917": {
        "botName": "T6_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Master'sWeepingRepeater"
    },
    "4918": {
        "botName": "T6_2H_REPEATINGCROSSBOW_UNDEAD@1",
        "humanName": "Master'sWeepingRepeater"
    },
    "4919": {
        "botName": "T6_2H_REPEATINGCROSSBOW_UNDEAD@2",
        "humanName": "Master'sWeepingRepeater"
    },
    "4920": {
        "botName": "T6_2H_REPEATINGCROSSBOW_UNDEAD@3",
        "humanName": "Master'sWeepingRepeater"
    },
    "4921": {
        "botName": "T7_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Grandmaster'sWeepingRepeater"
    },
    "4922": {
        "botName": "T7_2H_REPEATINGCROSSBOW_UNDEAD@1",
        "humanName": "Grandmaster'sWeepingRepeater"
    },
    "4923": {
        "botName": "T7_2H_REPEATINGCROSSBOW_UNDEAD@2",
        "humanName": "Grandmaster'sWeepingRepeater"
    },
    "4924": {
        "botName": "T7_2H_REPEATINGCROSSBOW_UNDEAD@3",
        "humanName": "Grandmaster'sWeepingRepeater"
    },
    "4925": {
        "botName": "T8_2H_REPEATINGCROSSBOW_UNDEAD",
        "humanName": "Elder'sWeepingRepeater"
    },
    "4926": {
        "botName": "T8_2H_REPEATINGCROSSBOW_UNDEAD@1",
        "humanName": "Elder'sWeepingRepeater"
    },
    "4927": {
        "botName": "T8_2H_REPEATINGCROSSBOW_UNDEAD@2",
        "humanName": "Elder'sWeepingRepeater"
    },
    "4928": {
        "botName": "T8_2H_REPEATINGCROSSBOW_UNDEAD@3",
        "humanName": "Elder'sWeepingRepeater"
    },
    "4929": {
        "botName": "T4_2H_DUALCROSSBOW_HELL",
        "humanName": "Adept'sBoltcasters"
    },
    "4930": {
        "botName": "T4_2H_DUALCROSSBOW_HELL@1",
        "humanName": "Adept'sBoltcasters"
    },
    "4931": {
        "botName": "T4_2H_DUALCROSSBOW_HELL@2",
        "humanName": "Adept'sBoltcasters"
    },
    "4932": {
        "botName": "T4_2H_DUALCROSSBOW_HELL@3",
        "humanName": "Adept'sBoltcasters"
    },
    "4933": {
        "botName": "T5_2H_DUALCROSSBOW_HELL",
        "humanName": "Expert'sBoltcasters"
    },
    "4934": {
        "botName": "T5_2H_DUALCROSSBOW_HELL@1",
        "humanName": "Expert'sBoltcasters"
    },
    "4935": {
        "botName": "T5_2H_DUALCROSSBOW_HELL@2",
        "humanName": "Expert'sBoltcasters"
    },
    "4936": {
        "botName": "T5_2H_DUALCROSSBOW_HELL@3",
        "humanName": "Expert'sBoltcasters"
    },
    "4937": {
        "botName": "T6_2H_DUALCROSSBOW_HELL",
        "humanName": "Master'sBoltcasters"
    },
    "4938": {
        "botName": "T6_2H_DUALCROSSBOW_HELL@1",
        "humanName": "Master'sBoltcasters"
    },
    "4939": {
        "botName": "T6_2H_DUALCROSSBOW_HELL@2",
        "humanName": "Master'sBoltcasters"
    },
    "4940": {
        "botName": "T6_2H_DUALCROSSBOW_HELL@3",
        "humanName": "Master'sBoltcasters"
    },
    "4941": {
        "botName": "T7_2H_DUALCROSSBOW_HELL",
        "humanName": "Grandmaster'sBoltcasters"
    },
    "4942": {
        "botName": "T7_2H_DUALCROSSBOW_HELL@1",
        "humanName": "Grandmaster'sBoltcasters"
    },
    "4943": {
        "botName": "T7_2H_DUALCROSSBOW_HELL@2",
        "humanName": "Grandmaster'sBoltcasters"
    },
    "4944": {
        "botName": "T7_2H_DUALCROSSBOW_HELL@3",
        "humanName": "Grandmaster'sBoltcasters"
    },
    "4945": {
        "botName": "T8_2H_DUALCROSSBOW_HELL",
        "humanName": "Elder'sBoltcasters"
    },
    "4946": {
        "botName": "T8_2H_DUALCROSSBOW_HELL@1",
        "humanName": "Elder'sBoltcasters"
    },
    "4947": {
        "botName": "T8_2H_DUALCROSSBOW_HELL@2",
        "humanName": "Elder'sBoltcasters"
    },
    "4948": {
        "botName": "T8_2H_DUALCROSSBOW_HELL@3",
        "humanName": "Elder'sBoltcasters"
    },
    "4949": {
        "botName": "T4_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Adept'sSiegebow"
    },
    "4950": {
        "botName": "T4_2H_CROSSBOWLARGE_MORGANA@1",
        "humanName": "Adept'sSiegebow"
    },
    "4951": {
        "botName": "T4_2H_CROSSBOWLARGE_MORGANA@2",
        "humanName": "Adept'sSiegebow"
    },
    "4952": {
        "botName": "T4_2H_CROSSBOWLARGE_MORGANA@3",
        "humanName": "Adept'sSiegebow"
    },
    "4953": {
        "botName": "T5_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Expert'sSiegebow"
    },
    "4954": {
        "botName": "T5_2H_CROSSBOWLARGE_MORGANA@1",
        "humanName": "Expert'sSiegebow"
    },
    "4955": {
        "botName": "T5_2H_CROSSBOWLARGE_MORGANA@2",
        "humanName": "Expert'sSiegebow"
    },
    "4956": {
        "botName": "T5_2H_CROSSBOWLARGE_MORGANA@3",
        "humanName": "Expert'sSiegebow"
    },
    "4957": {
        "botName": "T6_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Master'sSiegebow"
    },
    "4958": {
        "botName": "T6_2H_CROSSBOWLARGE_MORGANA@1",
        "humanName": "Master'sSiegebow"
    },
    "4959": {
        "botName": "T6_2H_CROSSBOWLARGE_MORGANA@2",
        "humanName": "Master'sSiegebow"
    },
    "4960": {
        "botName": "T6_2H_CROSSBOWLARGE_MORGANA@3",
        "humanName": "Master'sSiegebow"
    },
    "4961": {
        "botName": "T7_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Grandmaster'sSiegebow"
    },
    "4962": {
        "botName": "T7_2H_CROSSBOWLARGE_MORGANA@1",
        "humanName": "Grandmaster'sSiegebow"
    },
    "4963": {
        "botName": "T7_2H_CROSSBOWLARGE_MORGANA@2",
        "humanName": "Grandmaster'sSiegebow"
    },
    "4964": {
        "botName": "T7_2H_CROSSBOWLARGE_MORGANA@3",
        "humanName": "Grandmaster'sSiegebow"
    },
    "4965": {
        "botName": "T8_2H_CROSSBOWLARGE_MORGANA",
        "humanName": "Elder'sSiegebow"
    },
    "4966": {
        "botName": "T8_2H_CROSSBOWLARGE_MORGANA@1",
        "humanName": "Elder'sSiegebow"
    },
    "4967": {
        "botName": "T8_2H_CROSSBOWLARGE_MORGANA@2",
        "humanName": "Elder'sSiegebow"
    },
    "4968": {
        "botName": "T8_2H_CROSSBOWLARGE_MORGANA@3",
        "humanName": "Elder'sSiegebow"
    },
    "4969": {
        "botName": "T4_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Adept'sEnergyShaper"
    },
    "4970": {
        "botName": "T4_2H_CROSSBOW_CANNON_AVALON@1",
        "humanName": "Adept'sEnergyShaper"
    },
    "4971": {
        "botName": "T4_2H_CROSSBOW_CANNON_AVALON@2",
        "humanName": "Adept'sEnergyShaper"
    },
    "4972": {
        "botName": "T4_2H_CROSSBOW_CANNON_AVALON@3",
        "humanName": "Adept'sEnergyShaper"
    },
    "4973": {
        "botName": "T5_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Expert'sEnergyShaper"
    },
    "4974": {
        "botName": "T5_2H_CROSSBOW_CANNON_AVALON@1",
        "humanName": "Expert'sEnergyShaper"
    },
    "4975": {
        "botName": "T5_2H_CROSSBOW_CANNON_AVALON@2",
        "humanName": "Expert'sEnergyShaper"
    },
    "4976": {
        "botName": "T5_2H_CROSSBOW_CANNON_AVALON@3",
        "humanName": "Expert'sEnergyShaper"
    },
    "4977": {
        "botName": "T6_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Master'sEnergyShaper"
    },
    "4978": {
        "botName": "T6_2H_CROSSBOW_CANNON_AVALON@1",
        "humanName": "Master'sEnergyShaper"
    },
    "4979": {
        "botName": "T6_2H_CROSSBOW_CANNON_AVALON@2",
        "humanName": "Master'sEnergyShaper"
    },
    "4980": {
        "botName": "T6_2H_CROSSBOW_CANNON_AVALON@3",
        "humanName": "Master'sEnergyShaper"
    },
    "4981": {
        "botName": "T7_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Grandmaster'sEnergyShaper"
    },
    "4982": {
        "botName": "T7_2H_CROSSBOW_CANNON_AVALON@1",
        "humanName": "Grandmaster'sEnergyShaper"
    },
    "4983": {
        "botName": "T7_2H_CROSSBOW_CANNON_AVALON@2",
        "humanName": "Grandmaster'sEnergyShaper"
    },
    "4984": {
        "botName": "T7_2H_CROSSBOW_CANNON_AVALON@3",
        "humanName": "Grandmaster'sEnergyShaper"
    },
    "4985": {
        "botName": "T8_2H_CROSSBOW_CANNON_AVALON",
        "humanName": "Elder'sEnergyShaper"
    },
    "4986": {
        "botName": "T8_2H_CROSSBOW_CANNON_AVALON@1",
        "humanName": "Elder'sEnergyShaper"
    },
    "4987": {
        "botName": "T8_2H_CROSSBOW_CANNON_AVALON@2",
        "humanName": "Elder'sEnergyShaper"
    },
    "4988": {
        "botName": "T8_2H_CROSSBOW_CANNON_AVALON@3",
        "humanName": "Elder'sEnergyShaper"
    },
    "4989": {
        "botName": "T3_MAIN_CURSEDSTAFF",
        "humanName": "Journeyman'sCursedStaff"
    },
    "4990": {
        "botName": "T4_MAIN_CURSEDSTAFF",
        "humanName": "Adept'sCursedStaff"
    },
    "4991": {
        "botName": "T4_MAIN_CURSEDSTAFF@1",
        "humanName": "Adept'sCursedStaff"
    },
    "4992": {
        "botName": "T4_MAIN_CURSEDSTAFF@2",
        "humanName": "Adept'sCursedStaff"
    },
    "4993": {
        "botName": "T4_MAIN_CURSEDSTAFF@3",
        "humanName": "Adept'sCursedStaff"
    },
    "4994": {
        "botName": "T5_MAIN_CURSEDSTAFF",
        "humanName": "Expert'sCursedStaff"
    },
    "4995": {
        "botName": "T5_MAIN_CURSEDSTAFF@1",
        "humanName": "Expert'sCursedStaff"
    },
    "4996": {
        "botName": "T5_MAIN_CURSEDSTAFF@2",
        "humanName": "Expert'sCursedStaff"
    },
    "4997": {
        "botName": "T5_MAIN_CURSEDSTAFF@3",
        "humanName": "Expert'sCursedStaff"
    },
    "4998": {
        "botName": "T6_MAIN_CURSEDSTAFF",
        "humanName": "Master'sCursedStaff"
    },
    "4999": {
        "botName": "T6_MAIN_CURSEDSTAFF@1",
        "humanName": "Master'sCursedStaff"
    },
    "5000": {
        "botName": "T6_MAIN_CURSEDSTAFF@2",
        "humanName": "Master'sCursedStaff"
    },
    "5001": {
        "botName": "T6_MAIN_CURSEDSTAFF@3",
        "humanName": "Master'sCursedStaff"
    },
    "5002": {
        "botName": "T7_MAIN_CURSEDSTAFF",
        "humanName": "Grandmaster'sCursedStaff"
    },
    "5003": {
        "botName": "T7_MAIN_CURSEDSTAFF@1",
        "humanName": "Grandmaster'sCursedStaff"
    },
    "5004": {
        "botName": "T7_MAIN_CURSEDSTAFF@2",
        "humanName": "Grandmaster'sCursedStaff"
    },
    "5005": {
        "botName": "T7_MAIN_CURSEDSTAFF@3",
        "humanName": "Grandmaster'sCursedStaff"
    },
    "5006": {
        "botName": "T8_MAIN_CURSEDSTAFF",
        "humanName": "Elder'sCursedStaff"
    },
    "5007": {
        "botName": "T8_MAIN_CURSEDSTAFF@1",
        "humanName": "Elder'sCursedStaff"
    },
    "5008": {
        "botName": "T8_MAIN_CURSEDSTAFF@2",
        "humanName": "Elder'sCursedStaff"
    },
    "5009": {
        "botName": "T8_MAIN_CURSEDSTAFF@3",
        "humanName": "Elder'sCursedStaff"
    },
    "5010": {
        "botName": "T4_2H_CURSEDSTAFF",
        "humanName": "Adept'sGreatCursedStaff"
    },
    "5011": {
        "botName": "T4_2H_CURSEDSTAFF@1",
        "humanName": "Adept'sGreatCursedStaff"
    },
    "5012": {
        "botName": "T4_2H_CURSEDSTAFF@2",
        "humanName": "Adept'sGreatCursedStaff"
    },
    "5013": {
        "botName": "T4_2H_CURSEDSTAFF@3",
        "humanName": "Adept'sGreatCursedStaff"
    },
    "5014": {
        "botName": "T5_2H_CURSEDSTAFF",
        "humanName": "Expert'sGreatCursedStaff"
    },
    "5015": {
        "botName": "T5_2H_CURSEDSTAFF@1",
        "humanName": "Expert'sGreatCursedStaff"
    },
    "5016": {
        "botName": "T5_2H_CURSEDSTAFF@2",
        "humanName": "Expert'sGreatCursedStaff"
    },
    "5017": {
        "botName": "T5_2H_CURSEDSTAFF@3",
        "humanName": "Expert'sGreatCursedStaff"
    },
    "5018": {
        "botName": "T6_2H_CURSEDSTAFF",
        "humanName": "Master'sGreatCursedStaff"
    },
    "5019": {
        "botName": "T6_2H_CURSEDSTAFF@1",
        "humanName": "Master'sGreatCursedStaff"
    },
    "5020": {
        "botName": "T6_2H_CURSEDSTAFF@2",
        "humanName": "Master'sGreatCursedStaff"
    },
    "5021": {
        "botName": "T6_2H_CURSEDSTAFF@3",
        "humanName": "Master'sGreatCursedStaff"
    },
    "5022": {
        "botName": "T7_2H_CURSEDSTAFF",
        "humanName": "Grandmaster'sGreatCursedStaff"
    },
    "5023": {
        "botName": "T7_2H_CURSEDSTAFF@1",
        "humanName": "Grandmaster'sGreatCursedStaff"
    },
    "5024": {
        "botName": "T7_2H_CURSEDSTAFF@2",
        "humanName": "Grandmaster'sGreatCursedStaff"
    },
    "5025": {
        "botName": "T7_2H_CURSEDSTAFF@3",
        "humanName": "Grandmaster'sGreatCursedStaff"
    },
    "5026": {
        "botName": "T8_2H_CURSEDSTAFF",
        "humanName": "Elder'sGreatCursedStaff"
    },
    "5027": {
        "botName": "T8_2H_CURSEDSTAFF@1",
        "humanName": "Elder'sGreatCursedStaff"
    },
    "5028": {
        "botName": "T8_2H_CURSEDSTAFF@2",
        "humanName": "Elder'sGreatCursedStaff"
    },
    "5029": {
        "botName": "T8_2H_CURSEDSTAFF@3",
        "humanName": "Elder'sGreatCursedStaff"
    },
    "5030": {
        "botName": "T4_2H_DEMONICSTAFF",
        "humanName": "Adept'sDemonicStaff"
    },
    "5031": {
        "botName": "T4_2H_DEMONICSTAFF@1",
        "humanName": "Adept'sDemonicStaff"
    },
    "5032": {
        "botName": "T4_2H_DEMONICSTAFF@2",
        "humanName": "Adept'sDemonicStaff"
    },
    "5033": {
        "botName": "T4_2H_DEMONICSTAFF@3",
        "humanName": "Adept'sDemonicStaff"
    },
    "5034": {
        "botName": "T5_2H_DEMONICSTAFF",
        "humanName": "Expert'sDemonicStaff"
    },
    "5035": {
        "botName": "T5_2H_DEMONICSTAFF@1",
        "humanName": "Expert'sDemonicStaff"
    },
    "5036": {
        "botName": "T5_2H_DEMONICSTAFF@2",
        "humanName": "Expert'sDemonicStaff"
    },
    "5037": {
        "botName": "T5_2H_DEMONICSTAFF@3",
        "humanName": "Expert'sDemonicStaff"
    },
    "5038": {
        "botName": "T6_2H_DEMONICSTAFF",
        "humanName": "Master'sDemonicStaff"
    },
    "5039": {
        "botName": "T6_2H_DEMONICSTAFF@1",
        "humanName": "Master'sDemonicStaff"
    },
    "5040": {
        "botName": "T6_2H_DEMONICSTAFF@2",
        "humanName": "Master'sDemonicStaff"
    },
    "5041": {
        "botName": "T6_2H_DEMONICSTAFF@3",
        "humanName": "Master'sDemonicStaff"
    },
    "5042": {
        "botName": "T7_2H_DEMONICSTAFF",
        "humanName": "Grandmaster'sDemonicStaff"
    },
    "5043": {
        "botName": "T7_2H_DEMONICSTAFF@1",
        "humanName": "Grandmaster'sDemonicStaff"
    },
    "5044": {
        "botName": "T7_2H_DEMONICSTAFF@2",
        "humanName": "Grandmaster'sDemonicStaff"
    },
    "5045": {
        "botName": "T7_2H_DEMONICSTAFF@3",
        "humanName": "Grandmaster'sDemonicStaff"
    },
    "5046": {
        "botName": "T8_2H_DEMONICSTAFF",
        "humanName": "Elder'sDemonicStaff"
    },
    "5047": {
        "botName": "T8_2H_DEMONICSTAFF@1",
        "humanName": "Elder'sDemonicStaff"
    },
    "5048": {
        "botName": "T8_2H_DEMONICSTAFF@2",
        "humanName": "Elder'sDemonicStaff"
    },
    "5049": {
        "botName": "T8_2H_DEMONICSTAFF@3",
        "humanName": "Elder'sDemonicStaff"
    },
    "5050": {
        "botName": "T4_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Adept'sLifecurseStaff"
    },
    "5051": {
        "botName": "T4_MAIN_CURSEDSTAFF_UNDEAD@1",
        "humanName": "Adept'sLifecurseStaff"
    },
    "5052": {
        "botName": "T4_MAIN_CURSEDSTAFF_UNDEAD@2",
        "humanName": "Adept'sLifecurseStaff"
    },
    "5053": {
        "botName": "T4_MAIN_CURSEDSTAFF_UNDEAD@3",
        "humanName": "Adept'sLifecurseStaff"
    },
    "5054": {
        "botName": "T5_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Expert'sLifecurseStaff"
    },
    "5055": {
        "botName": "T5_MAIN_CURSEDSTAFF_UNDEAD@1",
        "humanName": "Expert'sLifecurseStaff"
    },
    "5056": {
        "botName": "T5_MAIN_CURSEDSTAFF_UNDEAD@2",
        "humanName": "Expert'sLifecurseStaff"
    },
    "5057": {
        "botName": "T5_MAIN_CURSEDSTAFF_UNDEAD@3",
        "humanName": "Expert'sLifecurseStaff"
    },
    "5058": {
        "botName": "T6_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Master'sLifecurseStaff"
    },
    "5059": {
        "botName": "T6_MAIN_CURSEDSTAFF_UNDEAD@1",
        "humanName": "Master'sLifecurseStaff"
    },
    "5060": {
        "botName": "T6_MAIN_CURSEDSTAFF_UNDEAD@2",
        "humanName": "Master'sLifecurseStaff"
    },
    "5061": {
        "botName": "T6_MAIN_CURSEDSTAFF_UNDEAD@3",
        "humanName": "Master'sLifecurseStaff"
    },
    "5062": {
        "botName": "T7_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Grandmaster'sLifecurseStaff"
    },
    "5063": {
        "botName": "T7_MAIN_CURSEDSTAFF_UNDEAD@1",
        "humanName": "Grandmaster'sLifecurseStaff"
    },
    "5064": {
        "botName": "T7_MAIN_CURSEDSTAFF_UNDEAD@2",
        "humanName": "Grandmaster'sLifecurseStaff"
    },
    "5065": {
        "botName": "T7_MAIN_CURSEDSTAFF_UNDEAD@3",
        "humanName": "Grandmaster'sLifecurseStaff"
    },
    "5066": {
        "botName": "T8_MAIN_CURSEDSTAFF_UNDEAD",
        "humanName": "Elder'sLifecurseStaff"
    },
    "5067": {
        "botName": "T8_MAIN_CURSEDSTAFF_UNDEAD@1",
        "humanName": "Elder'sLifecurseStaff"
    },
    "5068": {
        "botName": "T8_MAIN_CURSEDSTAFF_UNDEAD@2",
        "humanName": "Elder'sLifecurseStaff"
    },
    "5069": {
        "botName": "T8_MAIN_CURSEDSTAFF_UNDEAD@3",
        "humanName": "Elder'sLifecurseStaff"
    },
    "5070": {
        "botName": "T4_2H_SKULLORB_HELL",
        "humanName": "Adept'sCursedSkull"
    },
    "5071": {
        "botName": "T4_2H_SKULLORB_HELL@1",
        "humanName": "Adept'sCursedSkull"
    },
    "5072": {
        "botName": "T4_2H_SKULLORB_HELL@2",
        "humanName": "Adept'sCursedSkull"
    },
    "5073": {
        "botName": "T4_2H_SKULLORB_HELL@3",
        "humanName": "Adept'sCursedSkull"
    },
    "5074": {
        "botName": "T5_2H_SKULLORB_HELL",
        "humanName": "Expert'sCursedSkull"
    },
    "5075": {
        "botName": "T5_2H_SKULLORB_HELL@1",
        "humanName": "Expert'sCursedSkull"
    },
    "5076": {
        "botName": "T5_2H_SKULLORB_HELL@2",
        "humanName": "Expert'sCursedSkull"
    },
    "5077": {
        "botName": "T5_2H_SKULLORB_HELL@3",
        "humanName": "Expert'sCursedSkull"
    },
    "5078": {
        "botName": "T6_2H_SKULLORB_HELL",
        "humanName": "Master'sCursedSkull"
    },
    "5079": {
        "botName": "T6_2H_SKULLORB_HELL@1",
        "humanName": "Master'sCursedSkull"
    },
    "5080": {
        "botName": "T6_2H_SKULLORB_HELL@2",
        "humanName": "Master'sCursedSkull"
    },
    "5081": {
        "botName": "T6_2H_SKULLORB_HELL@3",
        "humanName": "Master'sCursedSkull"
    },
    "5082": {
        "botName": "T7_2H_SKULLORB_HELL",
        "humanName": "Grandmaster'sCursedSkull"
    },
    "5083": {
        "botName": "T7_2H_SKULLORB_HELL@1",
        "humanName": "Grandmaster'sCursedSkull"
    },
    "5084": {
        "botName": "T7_2H_SKULLORB_HELL@2",
        "humanName": "Grandmaster'sCursedSkull"
    },
    "5085": {
        "botName": "T7_2H_SKULLORB_HELL@3",
        "humanName": "Grandmaster'sCursedSkull"
    },
    "5086": {
        "botName": "T8_2H_SKULLORB_HELL",
        "humanName": "Elder'sCursedSkull"
    },
    "5087": {
        "botName": "T8_2H_SKULLORB_HELL@1",
        "humanName": "Elder'sCursedSkull"
    },
    "5088": {
        "botName": "T8_2H_SKULLORB_HELL@2",
        "humanName": "Elder'sCursedSkull"
    },
    "5089": {
        "botName": "T8_2H_SKULLORB_HELL@3",
        "humanName": "Elder'sCursedSkull"
    },
    "5090": {
        "botName": "T4_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Adept'sDamnationStaff"
    },
    "5091": {
        "botName": "T4_2H_CURSEDSTAFF_MORGANA@1",
        "humanName": "Adept'sDamnationStaff"
    },
    "5092": {
        "botName": "T4_2H_CURSEDSTAFF_MORGANA@2",
        "humanName": "Adept'sDamnationStaff"
    },
    "5093": {
        "botName": "T4_2H_CURSEDSTAFF_MORGANA@3",
        "humanName": "Adept'sDamnationStaff"
    },
    "5094": {
        "botName": "T5_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Expert'sDamnationStaff"
    },
    "5095": {
        "botName": "T5_2H_CURSEDSTAFF_MORGANA@1",
        "humanName": "Expert'sDamnationStaff"
    },
    "5096": {
        "botName": "T5_2H_CURSEDSTAFF_MORGANA@2",
        "humanName": "Expert'sDamnationStaff"
    },
    "5097": {
        "botName": "T5_2H_CURSEDSTAFF_MORGANA@3",
        "humanName": "Expert'sDamnationStaff"
    },
    "5098": {
        "botName": "T6_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Master'sDamnationStaff"
    },
    "5099": {
        "botName": "T6_2H_CURSEDSTAFF_MORGANA@1",
        "humanName": "Master'sDamnationStaff"
    },
    "5100": {
        "botName": "T6_2H_CURSEDSTAFF_MORGANA@2",
        "humanName": "Master'sDamnationStaff"
    },
    "5101": {
        "botName": "T6_2H_CURSEDSTAFF_MORGANA@3",
        "humanName": "Master'sDamnationStaff"
    },
    "5102": {
        "botName": "T7_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Grandmaster'sDamnationStaff"
    },
    "5103": {
        "botName": "T7_2H_CURSEDSTAFF_MORGANA@1",
        "humanName": "Grandmaster'sDamnationStaff"
    },
    "5104": {
        "botName": "T7_2H_CURSEDSTAFF_MORGANA@2",
        "humanName": "Grandmaster'sDamnationStaff"
    },
    "5105": {
        "botName": "T7_2H_CURSEDSTAFF_MORGANA@3",
        "humanName": "Grandmaster'sDamnationStaff"
    },
    "5106": {
        "botName": "T8_2H_CURSEDSTAFF_MORGANA",
        "humanName": "Elder'sDamnationStaff"
    },
    "5107": {
        "botName": "T8_2H_CURSEDSTAFF_MORGANA@1",
        "humanName": "Elder'sDamnationStaff"
    },
    "5108": {
        "botName": "T8_2H_CURSEDSTAFF_MORGANA@2",
        "humanName": "Elder'sDamnationStaff"
    },
    "5109": {
        "botName": "T8_2H_CURSEDSTAFF_MORGANA@3",
        "humanName": "Elder'sDamnationStaff"
    },
    "5110": {
        "botName": "T4_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Adept'sShadowcaller"
    },
    "5111": {
        "botName": "T4_MAIN_CURSEDSTAFF_AVALON@1",
        "humanName": "Adept'sShadowcaller"
    },
    "5112": {
        "botName": "T4_MAIN_CURSEDSTAFF_AVALON@2",
        "humanName": "Adept'sShadowcaller"
    },
    "5113": {
        "botName": "T4_MAIN_CURSEDSTAFF_AVALON@3",
        "humanName": "Adept'sShadowcaller"
    },
    "5114": {
        "botName": "T5_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Expert'sShadowcaller"
    },
    "5115": {
        "botName": "T5_MAIN_CURSEDSTAFF_AVALON@1",
        "humanName": "Expert'sShadowcaller"
    },
    "5116": {
        "botName": "T5_MAIN_CURSEDSTAFF_AVALON@2",
        "humanName": "Expert'sShadowcaller"
    },
    "5117": {
        "botName": "T5_MAIN_CURSEDSTAFF_AVALON@3",
        "humanName": "Expert'sShadowcaller"
    },
    "5118": {
        "botName": "T6_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Master'sShadowcaller"
    },
    "5119": {
        "botName": "T6_MAIN_CURSEDSTAFF_AVALON@1",
        "humanName": "Master'sShadowcaller"
    },
    "5120": {
        "botName": "T6_MAIN_CURSEDSTAFF_AVALON@2",
        "humanName": "Master'sShadowcaller"
    },
    "5121": {
        "botName": "T6_MAIN_CURSEDSTAFF_AVALON@3",
        "humanName": "Master'sShadowcaller"
    },
    "5122": {
        "botName": "T7_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Grandmaster'sShadowcaller"
    },
    "5123": {
        "botName": "T7_MAIN_CURSEDSTAFF_AVALON@1",
        "humanName": "Grandmaster'sShadowcaller"
    },
    "5124": {
        "botName": "T7_MAIN_CURSEDSTAFF_AVALON@2",
        "humanName": "Grandmaster'sShadowcaller"
    },
    "5125": {
        "botName": "T7_MAIN_CURSEDSTAFF_AVALON@3",
        "humanName": "Grandmaster'sShadowcaller"
    },
    "5126": {
        "botName": "T8_MAIN_CURSEDSTAFF_AVALON",
        "humanName": "Elder'sShadowcaller"
    },
    "5127": {
        "botName": "T8_MAIN_CURSEDSTAFF_AVALON@1",
        "humanName": "Elder'sShadowcaller"
    },
    "5128": {
        "botName": "T8_MAIN_CURSEDSTAFF_AVALON@2",
        "humanName": "Elder'sShadowcaller"
    },
    "5129": {
        "botName": "T8_MAIN_CURSEDSTAFF_AVALON@3",
        "humanName": "Elder'sShadowcaller"
    },
    "5130": {
        "botName": "T2_MAIN_FIRESTAFF",
        "humanName": "Novice'sFireStaff"
    },
    "5131": {
        "botName": "T3_MAIN_FIRESTAFF",
        "humanName": "Journeyman'sFireStaff"
    },
    "5132": {
        "botName": "T4_MAIN_FIRESTAFF",
        "humanName": "Adept'sFireStaff"
    },
    "5133": {
        "botName": "T4_MAIN_FIRESTAFF@1",
        "humanName": "Adept'sFireStaff"
    },
    "5134": {
        "botName": "T4_MAIN_FIRESTAFF@2",
        "humanName": "Adept'sFireStaff"
    },
    "5135": {
        "botName": "T4_MAIN_FIRESTAFF@3",
        "humanName": "Adept'sFireStaff"
    },
    "5136": {
        "botName": "T5_MAIN_FIRESTAFF",
        "humanName": "Expert'sFireStaff"
    },
    "5137": {
        "botName": "T5_MAIN_FIRESTAFF@1",
        "humanName": "Expert'sFireStaff"
    },
    "5138": {
        "botName": "T5_MAIN_FIRESTAFF@2",
        "humanName": "Expert'sFireStaff"
    },
    "5139": {
        "botName": "T5_MAIN_FIRESTAFF@3",
        "humanName": "Expert'sFireStaff"
    },
    "5140": {
        "botName": "T6_MAIN_FIRESTAFF",
        "humanName": "Master'sFireStaff"
    },
    "5141": {
        "botName": "T6_MAIN_FIRESTAFF@1",
        "humanName": "Master'sFireStaff"
    },
    "5142": {
        "botName": "T6_MAIN_FIRESTAFF@2",
        "humanName": "Master'sFireStaff"
    },
    "5143": {
        "botName": "T6_MAIN_FIRESTAFF@3",
        "humanName": "Master'sFireStaff"
    },
    "5144": {
        "botName": "T7_MAIN_FIRESTAFF",
        "humanName": "Grandmaster'sFireStaff"
    },
    "5145": {
        "botName": "T7_MAIN_FIRESTAFF@1",
        "humanName": "Grandmaster'sFireStaff"
    },
    "5146": {
        "botName": "T7_MAIN_FIRESTAFF@2",
        "humanName": "Grandmaster'sFireStaff"
    },
    "5147": {
        "botName": "T7_MAIN_FIRESTAFF@3",
        "humanName": "Grandmaster'sFireStaff"
    },
    "5148": {
        "botName": "T8_MAIN_FIRESTAFF",
        "humanName": "Elder'sFireStaff"
    },
    "5149": {
        "botName": "T8_MAIN_FIRESTAFF@1",
        "humanName": "Elder'sFireStaff"
    },
    "5150": {
        "botName": "T8_MAIN_FIRESTAFF@2",
        "humanName": "Elder'sFireStaff"
    },
    "5151": {
        "botName": "T8_MAIN_FIRESTAFF@3",
        "humanName": "Elder'sFireStaff"
    },
    "5152": {
        "botName": "T4_2H_FIRESTAFF",
        "humanName": "Adept'sGreatFireStaff"
    },
    "5153": {
        "botName": "T4_2H_FIRESTAFF@1",
        "humanName": "Adept'sGreatFireStaff"
    },
    "5154": {
        "botName": "T4_2H_FIRESTAFF@2",
        "humanName": "Adept'sGreatFireStaff"
    },
    "5155": {
        "botName": "T4_2H_FIRESTAFF@3",
        "humanName": "Adept'sGreatFireStaff"
    },
    "5156": {
        "botName": "T5_2H_FIRESTAFF",
        "humanName": "Expert'sGreatFireStaff"
    },
    "5157": {
        "botName": "T5_2H_FIRESTAFF@1",
        "humanName": "Expert'sGreatFireStaff"
    },
    "5158": {
        "botName": "T5_2H_FIRESTAFF@2",
        "humanName": "Expert'sGreatFireStaff"
    },
    "5159": {
        "botName": "T5_2H_FIRESTAFF@3",
        "humanName": "Expert'sGreatFireStaff"
    },
    "5160": {
        "botName": "T6_2H_FIRESTAFF",
        "humanName": "Master'sGreatFireStaff"
    },
    "5161": {
        "botName": "T6_2H_FIRESTAFF@1",
        "humanName": "Master'sGreatFireStaff"
    },
    "5162": {
        "botName": "T6_2H_FIRESTAFF@2",
        "humanName": "Master'sGreatFireStaff"
    },
    "5163": {
        "botName": "T6_2H_FIRESTAFF@3",
        "humanName": "Master'sGreatFireStaff"
    },
    "5164": {
        "botName": "T7_2H_FIRESTAFF",
        "humanName": "Grandmaster'sGreatFireStaff"
    },
    "5165": {
        "botName": "T7_2H_FIRESTAFF@1",
        "humanName": "Grandmaster'sGreatFireStaff"
    },
    "5166": {
        "botName": "T7_2H_FIRESTAFF@2",
        "humanName": "Grandmaster'sGreatFireStaff"
    },
    "5167": {
        "botName": "T7_2H_FIRESTAFF@3",
        "humanName": "Grandmaster'sGreatFireStaff"
    },
    "5168": {
        "botName": "T8_2H_FIRESTAFF",
        "humanName": "Vendetta'sWrath"
    },
    "5169": {
        "botName": "T8_2H_FIRESTAFF@1",
        "humanName": "Vendetta'sWrath"
    },
    "5170": {
        "botName": "T8_2H_FIRESTAFF@2",
        "humanName": "Vendetta'sWrath"
    },
    "5171": {
        "botName": "T8_2H_FIRESTAFF@3",
        "humanName": "Vendetta'sWrath"
    },
    "5172": {
        "botName": "T4_2H_INFERNOSTAFF",
        "humanName": "Adept'sInfernalStaff"
    },
    "5173": {
        "botName": "T4_2H_INFERNOSTAFF@1",
        "humanName": "Adept'sInfernalStaff"
    },
    "5174": {
        "botName": "T4_2H_INFERNOSTAFF@2",
        "humanName": "Adept'sInfernalStaff"
    },
    "5175": {
        "botName": "T4_2H_INFERNOSTAFF@3",
        "humanName": "Adept'sInfernalStaff"
    },
    "5176": {
        "botName": "T5_2H_INFERNOSTAFF",
        "humanName": "Expert'sInfernalStaff"
    },
    "5177": {
        "botName": "T5_2H_INFERNOSTAFF@1",
        "humanName": "Expert'sInfernalStaff"
    },
    "5178": {
        "botName": "T5_2H_INFERNOSTAFF@2",
        "humanName": "Expert'sInfernalStaff"
    },
    "5179": {
        "botName": "T5_2H_INFERNOSTAFF@3",
        "humanName": "Expert'sInfernalStaff"
    },
    "5180": {
        "botName": "T6_2H_INFERNOSTAFF",
        "humanName": "Master'sInfernalStaff"
    },
    "5181": {
        "botName": "T6_2H_INFERNOSTAFF@1",
        "humanName": "Master'sInfernalStaff"
    },
    "5182": {
        "botName": "T6_2H_INFERNOSTAFF@2",
        "humanName": "Master'sInfernalStaff"
    },
    "5183": {
        "botName": "T6_2H_INFERNOSTAFF@3",
        "humanName": "Master'sInfernalStaff"
    },
    "5184": {
        "botName": "T7_2H_INFERNOSTAFF",
        "humanName": "Grandmaster'sInfernalStaff"
    },
    "5185": {
        "botName": "T7_2H_INFERNOSTAFF@1",
        "humanName": "Grandmaster'sInfernalStaff"
    },
    "5186": {
        "botName": "T7_2H_INFERNOSTAFF@2",
        "humanName": "Grandmaster'sInfernalStaff"
    },
    "5187": {
        "botName": "T7_2H_INFERNOSTAFF@3",
        "humanName": "Grandmaster'sInfernalStaff"
    },
    "5188": {
        "botName": "T8_2H_INFERNOSTAFF",
        "humanName": "Elder'sInfernalStaff"
    },
    "5189": {
        "botName": "T8_2H_INFERNOSTAFF@1",
        "humanName": "Elder'sInfernalStaff"
    },
    "5190": {
        "botName": "T8_2H_INFERNOSTAFF@2",
        "humanName": "Elder'sInfernalStaff"
    },
    "5191": {
        "botName": "T8_2H_INFERNOSTAFF@3",
        "humanName": "Elder'sInfernalStaff"
    },
    "5192": {
        "botName": "T4_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Adept'sWildfireStaff"
    },
    "5193": {
        "botName": "T4_MAIN_FIRESTAFF_KEEPER@1",
        "humanName": "Adept'sWildfireStaff"
    },
    "5194": {
        "botName": "T4_MAIN_FIRESTAFF_KEEPER@2",
        "humanName": "Adept'sWildfireStaff"
    },
    "5195": {
        "botName": "T4_MAIN_FIRESTAFF_KEEPER@3",
        "humanName": "Adept'sWildfireStaff"
    },
    "5196": {
        "botName": "T5_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Expert'sWildfireStaff"
    },
    "5197": {
        "botName": "T5_MAIN_FIRESTAFF_KEEPER@1",
        "humanName": "Expert'sWildfireStaff"
    },
    "5198": {
        "botName": "T5_MAIN_FIRESTAFF_KEEPER@2",
        "humanName": "Expert'sWildfireStaff"
    },
    "5199": {
        "botName": "T5_MAIN_FIRESTAFF_KEEPER@3",
        "humanName": "Expert'sWildfireStaff"
    },
    "5200": {
        "botName": "T6_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Master'sWildfireStaff"
    },
    "5201": {
        "botName": "T6_MAIN_FIRESTAFF_KEEPER@1",
        "humanName": "Master'sWildfireStaff"
    },
    "5202": {
        "botName": "T6_MAIN_FIRESTAFF_KEEPER@2",
        "humanName": "Master'sWildfireStaff"
    },
    "5203": {
        "botName": "T6_MAIN_FIRESTAFF_KEEPER@3",
        "humanName": "Master'sWildfireStaff"
    },
    "5204": {
        "botName": "T7_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Grandmaster'sWildfireStaff"
    },
    "5205": {
        "botName": "T7_MAIN_FIRESTAFF_KEEPER@1",
        "humanName": "Grandmaster'sWildfireStaff"
    },
    "5206": {
        "botName": "T7_MAIN_FIRESTAFF_KEEPER@2",
        "humanName": "Grandmaster'sWildfireStaff"
    },
    "5207": {
        "botName": "T7_MAIN_FIRESTAFF_KEEPER@3",
        "humanName": "Grandmaster'sWildfireStaff"
    },
    "5208": {
        "botName": "T8_MAIN_FIRESTAFF_KEEPER",
        "humanName": "Elder'sWildfireStaff"
    },
    "5209": {
        "botName": "T8_MAIN_FIRESTAFF_KEEPER@1",
        "humanName": "Elder'sWildfireStaff"
    },
    "5210": {
        "botName": "T8_MAIN_FIRESTAFF_KEEPER@2",
        "humanName": "Elder'sWildfireStaff"
    },
    "5211": {
        "botName": "T8_MAIN_FIRESTAFF_KEEPER@3",
        "humanName": "Elder'sWildfireStaff"
    },
    "5212": {
        "botName": "T4_2H_FIRESTAFF_HELL",
        "humanName": "Adept'sBrimstoneStaff"
    },
    "5213": {
        "botName": "T4_2H_FIRESTAFF_HELL@1",
        "humanName": "Adept'sBrimstoneStaff"
    },
    "5214": {
        "botName": "T4_2H_FIRESTAFF_HELL@2",
        "humanName": "Adept'sBrimstoneStaff"
    },
    "5215": {
        "botName": "T4_2H_FIRESTAFF_HELL@3",
        "humanName": "Adept'sBrimstoneStaff"
    },
    "5216": {
        "botName": "T5_2H_FIRESTAFF_HELL",
        "humanName": "Expert'sBrimstoneStaff"
    },
    "5217": {
        "botName": "T5_2H_FIRESTAFF_HELL@1",
        "humanName": "Expert'sBrimstoneStaff"
    },
    "5218": {
        "botName": "T5_2H_FIRESTAFF_HELL@2",
        "humanName": "Expert'sBrimstoneStaff"
    },
    "5219": {
        "botName": "T5_2H_FIRESTAFF_HELL@3",
        "humanName": "Expert'sBrimstoneStaff"
    },
    "5220": {
        "botName": "T6_2H_FIRESTAFF_HELL",
        "humanName": "Master'sBrimstoneStaff"
    },
    "5221": {
        "botName": "T6_2H_FIRESTAFF_HELL@1",
        "humanName": "Master'sBrimstoneStaff"
    },
    "5222": {
        "botName": "T6_2H_FIRESTAFF_HELL@2",
        "humanName": "Master'sBrimstoneStaff"
    },
    "5223": {
        "botName": "T6_2H_FIRESTAFF_HELL@3",
        "humanName": "Master'sBrimstoneStaff"
    },
    "5224": {
        "botName": "T7_2H_FIRESTAFF_HELL",
        "humanName": "Grandmaster'sBrimstoneStaff"
    },
    "5225": {
        "botName": "T7_2H_FIRESTAFF_HELL@1",
        "humanName": "Grandmaster'sBrimstoneStaff"
    },
    "5226": {
        "botName": "T7_2H_FIRESTAFF_HELL@2",
        "humanName": "Grandmaster'sBrimstoneStaff"
    },
    "5227": {
        "botName": "T7_2H_FIRESTAFF_HELL@3",
        "humanName": "Grandmaster'sBrimstoneStaff"
    },
    "5228": {
        "botName": "T8_2H_FIRESTAFF_HELL",
        "humanName": "Elder'sBrimstoneStaff"
    },
    "5229": {
        "botName": "T8_2H_FIRESTAFF_HELL@1",
        "humanName": "Elder'sBrimstoneStaff"
    },
    "5230": {
        "botName": "T8_2H_FIRESTAFF_HELL@2",
        "humanName": "Elder'sBrimstoneStaff"
    },
    "5231": {
        "botName": "T8_2H_FIRESTAFF_HELL@3",
        "humanName": "Elder'sBrimstoneStaff"
    },
    "5232": {
        "botName": "T4_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Adept'sBlazingStaff"
    },
    "5233": {
        "botName": "T4_2H_INFERNOSTAFF_MORGANA@1",
        "humanName": "Adept'sBlazingStaff"
    },
    "5234": {
        "botName": "T4_2H_INFERNOSTAFF_MORGANA@2",
        "humanName": "Adept'sBlazingStaff"
    },
    "5235": {
        "botName": "T4_2H_INFERNOSTAFF_MORGANA@3",
        "humanName": "Adept'sBlazingStaff"
    },
    "5236": {
        "botName": "T5_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Expert'sBlazingStaff"
    },
    "5237": {
        "botName": "T5_2H_INFERNOSTAFF_MORGANA@1",
        "humanName": "Expert'sBlazingStaff"
    },
    "5238": {
        "botName": "T5_2H_INFERNOSTAFF_MORGANA@2",
        "humanName": "Expert'sBlazingStaff"
    },
    "5239": {
        "botName": "T5_2H_INFERNOSTAFF_MORGANA@3",
        "humanName": "Expert'sBlazingStaff"
    },
    "5240": {
        "botName": "T6_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Master'sBlazingStaff"
    },
    "5241": {
        "botName": "T6_2H_INFERNOSTAFF_MORGANA@1",
        "humanName": "Master'sBlazingStaff"
    },
    "5242": {
        "botName": "T6_2H_INFERNOSTAFF_MORGANA@2",
        "humanName": "Master'sBlazingStaff"
    },
    "5243": {
        "botName": "T6_2H_INFERNOSTAFF_MORGANA@3",
        "humanName": "Master'sBlazingStaff"
    },
    "5244": {
        "botName": "T7_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Grandmaster'sBlazingStaff"
    },
    "5245": {
        "botName": "T7_2H_INFERNOSTAFF_MORGANA@1",
        "humanName": "Grandmaster'sBlazingStaff"
    },
    "5246": {
        "botName": "T7_2H_INFERNOSTAFF_MORGANA@2",
        "humanName": "Grandmaster'sBlazingStaff"
    },
    "5247": {
        "botName": "T7_2H_INFERNOSTAFF_MORGANA@3",
        "humanName": "Grandmaster'sBlazingStaff"
    },
    "5248": {
        "botName": "T8_2H_INFERNOSTAFF_MORGANA",
        "humanName": "Elder'sBlazingStaff"
    },
    "5249": {
        "botName": "T8_2H_INFERNOSTAFF_MORGANA@1",
        "humanName": "Elder'sBlazingStaff"
    },
    "5250": {
        "botName": "T8_2H_INFERNOSTAFF_MORGANA@2",
        "humanName": "Elder'sBlazingStaff"
    },
    "5251": {
        "botName": "T8_2H_INFERNOSTAFF_MORGANA@3",
        "humanName": "Elder'sBlazingStaff"
    },
    "5252": {
        "botName": "T4_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Adept'sDawnsong"
    },
    "5253": {
        "botName": "T4_2H_FIRE_RINGPAIR_AVALON@1",
        "humanName": "Adept'sDawnsong"
    },
    "5254": {
        "botName": "T4_2H_FIRE_RINGPAIR_AVALON@2",
        "humanName": "Adept'sDawnsong"
    },
    "5255": {
        "botName": "T4_2H_FIRE_RINGPAIR_AVALON@3",
        "humanName": "Adept'sDawnsong"
    },
    "5256": {
        "botName": "T5_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Expert'sDawnsong"
    },
    "5257": {
        "botName": "T5_2H_FIRE_RINGPAIR_AVALON@1",
        "humanName": "Expert'sDawnsong"
    },
    "5258": {
        "botName": "T5_2H_FIRE_RINGPAIR_AVALON@2",
        "humanName": "Expert'sDawnsong"
    },
    "5259": {
        "botName": "T5_2H_FIRE_RINGPAIR_AVALON@3",
        "humanName": "Expert'sDawnsong"
    },
    "5260": {
        "botName": "T6_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Master'sDawnsong"
    },
    "5261": {
        "botName": "T6_2H_FIRE_RINGPAIR_AVALON@1",
        "humanName": "Master'sDawnsong"
    },
    "5262": {
        "botName": "T6_2H_FIRE_RINGPAIR_AVALON@2",
        "humanName": "Master'sDawnsong"
    },
    "5263": {
        "botName": "T6_2H_FIRE_RINGPAIR_AVALON@3",
        "humanName": "Master'sDawnsong"
    },
    "5264": {
        "botName": "T7_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Grandmaster'sDawnsong"
    },
    "5265": {
        "botName": "T7_2H_FIRE_RINGPAIR_AVALON@1",
        "humanName": "Grandmaster'sDawnsong"
    },
    "5266": {
        "botName": "T7_2H_FIRE_RINGPAIR_AVALON@2",
        "humanName": "Grandmaster'sDawnsong"
    },
    "5267": {
        "botName": "T7_2H_FIRE_RINGPAIR_AVALON@3",
        "humanName": "Grandmaster'sDawnsong"
    },
    "5268": {
        "botName": "T8_2H_FIRE_RINGPAIR_AVALON",
        "humanName": "Elder'sDawnsong"
    },
    "5269": {
        "botName": "T8_2H_FIRE_RINGPAIR_AVALON@1",
        "humanName": "Elder'sDawnsong"
    },
    "5270": {
        "botName": "T8_2H_FIRE_RINGPAIR_AVALON@2",
        "humanName": "Elder'sDawnsong"
    },
    "5271": {
        "botName": "T8_2H_FIRE_RINGPAIR_AVALON@3",
        "humanName": "Elder'sDawnsong"
    },
    "5272": {
        "botName": "T3_MAIN_FROSTSTAFF",
        "humanName": "Journeyman'sFrostStaff"
    },
    "5273": {
        "botName": "T4_MAIN_FROSTSTAFF",
        "humanName": "Adept'sFrostStaff"
    },
    "5274": {
        "botName": "T4_MAIN_FROSTSTAFF@1",
        "humanName": "Adept'sFrostStaff"
    },
    "5275": {
        "botName": "T4_MAIN_FROSTSTAFF@2",
        "humanName": "Adept'sFrostStaff"
    },
    "5276": {
        "botName": "T4_MAIN_FROSTSTAFF@3",
        "humanName": "Adept'sFrostStaff"
    },
    "5277": {
        "botName": "T5_MAIN_FROSTSTAFF",
        "humanName": "Expert'sFrostStaff"
    },
    "5278": {
        "botName": "T5_MAIN_FROSTSTAFF@1",
        "humanName": "Expert'sFrostStaff"
    },
    "5279": {
        "botName": "T5_MAIN_FROSTSTAFF@2",
        "humanName": "Expert'sFrostStaff"
    },
    "5280": {
        "botName": "T5_MAIN_FROSTSTAFF@3",
        "humanName": "Expert'sFrostStaff"
    },
    "5281": {
        "botName": "T6_MAIN_FROSTSTAFF",
        "humanName": "Master'sFrostStaff"
    },
    "5282": {
        "botName": "T6_MAIN_FROSTSTAFF@1",
        "humanName": "Master'sFrostStaff"
    },
    "5283": {
        "botName": "T6_MAIN_FROSTSTAFF@2",
        "humanName": "Master'sFrostStaff"
    },
    "5284": {
        "botName": "T6_MAIN_FROSTSTAFF@3",
        "humanName": "Master'sFrostStaff"
    },
    "5285": {
        "botName": "T7_MAIN_FROSTSTAFF",
        "humanName": "Grandmaster'sFrostStaff"
    },
    "5286": {
        "botName": "T7_MAIN_FROSTSTAFF@1",
        "humanName": "Grandmaster'sFrostStaff"
    },
    "5287": {
        "botName": "T7_MAIN_FROSTSTAFF@2",
        "humanName": "Grandmaster'sFrostStaff"
    },
    "5288": {
        "botName": "T7_MAIN_FROSTSTAFF@3",
        "humanName": "Grandmaster'sFrostStaff"
    },
    "5289": {
        "botName": "T8_MAIN_FROSTSTAFF",
        "humanName": "Elder'sFrostStaff"
    },
    "5290": {
        "botName": "T8_MAIN_FROSTSTAFF@1",
        "humanName": "Elder'sFrostStaff"
    },
    "5291": {
        "botName": "T8_MAIN_FROSTSTAFF@2",
        "humanName": "Elder'sFrostStaff"
    },
    "5292": {
        "botName": "T8_MAIN_FROSTSTAFF@3",
        "humanName": "Elder'sFrostStaff"
    },
    "5293": {
        "botName": "T4_2H_FROSTSTAFF",
        "humanName": "Adept'sGreatFrostStaff"
    },
    "5294": {
        "botName": "T4_2H_FROSTSTAFF@1",
        "humanName": "Adept'sGreatFrostStaff"
    },
    "5295": {
        "botName": "T4_2H_FROSTSTAFF@2",
        "humanName": "Adept'sGreatFrostStaff"
    },
    "5296": {
        "botName": "T4_2H_FROSTSTAFF@3",
        "humanName": "Adept'sGreatFrostStaff"
    },
    "5297": {
        "botName": "T5_2H_FROSTSTAFF",
        "humanName": "Expert'sGreatFrostStaff"
    },
    "5298": {
        "botName": "T5_2H_FROSTSTAFF@1",
        "humanName": "Expert'sGreatFrostStaff"
    },
    "5299": {
        "botName": "T5_2H_FROSTSTAFF@2",
        "humanName": "Expert'sGreatFrostStaff"
    },
    "5300": {
        "botName": "T5_2H_FROSTSTAFF@3",
        "humanName": "Expert'sGreatFrostStaff"
    },
    "5301": {
        "botName": "T6_2H_FROSTSTAFF",
        "humanName": "Master'sGreatFrostStaff"
    },
    "5302": {
        "botName": "T6_2H_FROSTSTAFF@1",
        "humanName": "Master'sGreatFrostStaff"
    },
    "5303": {
        "botName": "T6_2H_FROSTSTAFF@2",
        "humanName": "Master'sGreatFrostStaff"
    },
    "5304": {
        "botName": "T6_2H_FROSTSTAFF@3",
        "humanName": "Master'sGreatFrostStaff"
    },
    "5305": {
        "botName": "T7_2H_FROSTSTAFF",
        "humanName": "Grandmaster'sGreatFrostStaff"
    },
    "5306": {
        "botName": "T7_2H_FROSTSTAFF@1",
        "humanName": "Grandmaster'sGreatFrostStaff"
    },
    "5307": {
        "botName": "T7_2H_FROSTSTAFF@2",
        "humanName": "Grandmaster'sGreatFrostStaff"
    },
    "5308": {
        "botName": "T7_2H_FROSTSTAFF@3",
        "humanName": "Grandmaster'sGreatFrostStaff"
    },
    "5309": {
        "botName": "T8_2H_FROSTSTAFF",
        "humanName": "Elder'sGreatFrostStaff"
    },
    "5310": {
        "botName": "T8_2H_FROSTSTAFF@1",
        "humanName": "Elder'sGreatFrostStaff"
    },
    "5311": {
        "botName": "T8_2H_FROSTSTAFF@2",
        "humanName": "Elder'sGreatFrostStaff"
    },
    "5312": {
        "botName": "T8_2H_FROSTSTAFF@3",
        "humanName": "Elder'sGreatFrostStaff"
    },
    "5313": {
        "botName": "T4_2H_GLACIALSTAFF",
        "humanName": "Adept'sGlacialStaff"
    },
    "5314": {
        "botName": "T4_2H_GLACIALSTAFF@1",
        "humanName": "Adept'sGlacialStaff"
    },
    "5315": {
        "botName": "T4_2H_GLACIALSTAFF@2",
        "humanName": "Adept'sGlacialStaff"
    },
    "5316": {
        "botName": "T4_2H_GLACIALSTAFF@3",
        "humanName": "Adept'sGlacialStaff"
    },
    "5317": {
        "botName": "T5_2H_GLACIALSTAFF",
        "humanName": "Expert'sGlacialStaff"
    },
    "5318": {
        "botName": "T5_2H_GLACIALSTAFF@1",
        "humanName": "Expert'sGlacialStaff"
    },
    "5319": {
        "botName": "T5_2H_GLACIALSTAFF@2",
        "humanName": "Expert'sGlacialStaff"
    },
    "5320": {
        "botName": "T5_2H_GLACIALSTAFF@3",
        "humanName": "Expert'sGlacialStaff"
    },
    "5321": {
        "botName": "T6_2H_GLACIALSTAFF",
        "humanName": "Master'sGlacialStaff"
    },
    "5322": {
        "botName": "T6_2H_GLACIALSTAFF@1",
        "humanName": "Master'sGlacialStaff"
    },
    "5323": {
        "botName": "T6_2H_GLACIALSTAFF@2",
        "humanName": "Master'sGlacialStaff"
    },
    "5324": {
        "botName": "T6_2H_GLACIALSTAFF@3",
        "humanName": "Master'sGlacialStaff"
    },
    "5325": {
        "botName": "T7_2H_GLACIALSTAFF",
        "humanName": "Grandmaster'sGlacialStaff"
    },
    "5326": {
        "botName": "T7_2H_GLACIALSTAFF@1",
        "humanName": "Grandmaster'sGlacialStaff"
    },
    "5327": {
        "botName": "T7_2H_GLACIALSTAFF@2",
        "humanName": "Grandmaster'sGlacialStaff"
    },
    "5328": {
        "botName": "T7_2H_GLACIALSTAFF@3",
        "humanName": "Grandmaster'sGlacialStaff"
    },
    "5329": {
        "botName": "T8_2H_GLACIALSTAFF",
        "humanName": "Elder'sGlacialStaff"
    },
    "5330": {
        "botName": "T8_2H_GLACIALSTAFF@1",
        "humanName": "Elder'sGlacialStaff"
    },
    "5331": {
        "botName": "T8_2H_GLACIALSTAFF@2",
        "humanName": "Elder'sGlacialStaff"
    },
    "5332": {
        "botName": "T8_2H_GLACIALSTAFF@3",
        "humanName": "Elder'sGlacialStaff"
    },
    "5333": {
        "botName": "T4_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Adept'sHoarfrostStaff"
    },
    "5334": {
        "botName": "T4_MAIN_FROSTSTAFF_KEEPER@1",
        "humanName": "Adept'sHoarfrostStaff"
    },
    "5335": {
        "botName": "T4_MAIN_FROSTSTAFF_KEEPER@2",
        "humanName": "Adept'sHoarfrostStaff"
    },
    "5336": {
        "botName": "T4_MAIN_FROSTSTAFF_KEEPER@3",
        "humanName": "Adept'sHoarfrostStaff"
    },
    "5337": {
        "botName": "T5_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Expert'sHoarfrostStaff"
    },
    "5338": {
        "botName": "T5_MAIN_FROSTSTAFF_KEEPER@1",
        "humanName": "Expert'sHoarfrostStaff"
    },
    "5339": {
        "botName": "T5_MAIN_FROSTSTAFF_KEEPER@2",
        "humanName": "Expert'sHoarfrostStaff"
    },
    "5340": {
        "botName": "T5_MAIN_FROSTSTAFF_KEEPER@3",
        "humanName": "Expert'sHoarfrostStaff"
    },
    "5341": {
        "botName": "T6_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Master'sHoarfrostStaff"
    },
    "5342": {
        "botName": "T6_MAIN_FROSTSTAFF_KEEPER@1",
        "humanName": "Master'sHoarfrostStaff"
    },
    "5343": {
        "botName": "T6_MAIN_FROSTSTAFF_KEEPER@2",
        "humanName": "Master'sHoarfrostStaff"
    },
    "5344": {
        "botName": "T6_MAIN_FROSTSTAFF_KEEPER@3",
        "humanName": "Master'sHoarfrostStaff"
    },
    "5345": {
        "botName": "T7_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Grandmaster'sHoarfrostStaff"
    },
    "5346": {
        "botName": "T7_MAIN_FROSTSTAFF_KEEPER@1",
        "humanName": "Grandmaster'sHoarfrostStaff"
    },
    "5347": {
        "botName": "T7_MAIN_FROSTSTAFF_KEEPER@2",
        "humanName": "Grandmaster'sHoarfrostStaff"
    },
    "5348": {
        "botName": "T7_MAIN_FROSTSTAFF_KEEPER@3",
        "humanName": "Grandmaster'sHoarfrostStaff"
    },
    "5349": {
        "botName": "T8_MAIN_FROSTSTAFF_KEEPER",
        "humanName": "Elder'sHoarfrostStaff"
    },
    "5350": {
        "botName": "T8_MAIN_FROSTSTAFF_KEEPER@1",
        "humanName": "Elder'sHoarfrostStaff"
    },
    "5351": {
        "botName": "T8_MAIN_FROSTSTAFF_KEEPER@2",
        "humanName": "Elder'sHoarfrostStaff"
    },
    "5352": {
        "botName": "T8_MAIN_FROSTSTAFF_KEEPER@3",
        "humanName": "Elder'sHoarfrostStaff"
    },
    "5353": {
        "botName": "T4_2H_ICEGAUNTLETS_HELL",
        "humanName": "Adept'sIcicleStaff"
    },
    "5354": {
        "botName": "T4_2H_ICEGAUNTLETS_HELL@1",
        "humanName": "Adept'sIcicleStaff"
    },
    "5355": {
        "botName": "T4_2H_ICEGAUNTLETS_HELL@2",
        "humanName": "Adept'sIcicleStaff"
    },
    "5356": {
        "botName": "T4_2H_ICEGAUNTLETS_HELL@3",
        "humanName": "Adept'sIcicleStaff"
    },
    "5357": {
        "botName": "T5_2H_ICEGAUNTLETS_HELL",
        "humanName": "Expert'sIcicleStaff"
    },
    "5358": {
        "botName": "T5_2H_ICEGAUNTLETS_HELL@1",
        "humanName": "Expert'sIcicleStaff"
    },
    "5359": {
        "botName": "T5_2H_ICEGAUNTLETS_HELL@2",
        "humanName": "Expert'sIcicleStaff"
    },
    "5360": {
        "botName": "T5_2H_ICEGAUNTLETS_HELL@3",
        "humanName": "Expert'sIcicleStaff"
    },
    "5361": {
        "botName": "T6_2H_ICEGAUNTLETS_HELL",
        "humanName": "Master'sIcicleStaff"
    },
    "5362": {
        "botName": "T6_2H_ICEGAUNTLETS_HELL@1",
        "humanName": "Master'sIcicleStaff"
    },
    "5363": {
        "botName": "T6_2H_ICEGAUNTLETS_HELL@2",
        "humanName": "Master'sIcicleStaff"
    },
    "5364": {
        "botName": "T6_2H_ICEGAUNTLETS_HELL@3",
        "humanName": "Master'sIcicleStaff"
    },
    "5365": {
        "botName": "T7_2H_ICEGAUNTLETS_HELL",
        "humanName": "Grandmaster'sIcicleStaff"
    },
    "5366": {
        "botName": "T7_2H_ICEGAUNTLETS_HELL@1",
        "humanName": "Grandmaster'sIcicleStaff"
    },
    "5367": {
        "botName": "T7_2H_ICEGAUNTLETS_HELL@2",
        "humanName": "Grandmaster'sIcicleStaff"
    },
    "5368": {
        "botName": "T7_2H_ICEGAUNTLETS_HELL@3",
        "humanName": "Grandmaster'sIcicleStaff"
    },
    "5369": {
        "botName": "T8_2H_ICEGAUNTLETS_HELL",
        "humanName": "Elder'sIcicleStaff"
    },
    "5370": {
        "botName": "T8_2H_ICEGAUNTLETS_HELL@1",
        "humanName": "Elder'sIcicleStaff"
    },
    "5371": {
        "botName": "T8_2H_ICEGAUNTLETS_HELL@2",
        "humanName": "Elder'sIcicleStaff"
    },
    "5372": {
        "botName": "T8_2H_ICEGAUNTLETS_HELL@3",
        "humanName": "Elder'sIcicleStaff"
    },
    "5373": {
        "botName": "T4_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Adept'sPermafrostPrism"
    },
    "5374": {
        "botName": "T4_2H_ICECRYSTAL_UNDEAD@1",
        "humanName": "Adept'sPermafrostPrism"
    },
    "5375": {
        "botName": "T4_2H_ICECRYSTAL_UNDEAD@2",
        "humanName": "Adept'sPermafrostPrism"
    },
    "5376": {
        "botName": "T4_2H_ICECRYSTAL_UNDEAD@3",
        "humanName": "Adept'sPermafrostPrism"
    },
    "5377": {
        "botName": "T5_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Expert'sPermafrostPrism"
    },
    "5378": {
        "botName": "T5_2H_ICECRYSTAL_UNDEAD@1",
        "humanName": "Expert'sPermafrostPrism"
    },
    "5379": {
        "botName": "T5_2H_ICECRYSTAL_UNDEAD@2",
        "humanName": "Expert'sPermafrostPrism"
    },
    "5380": {
        "botName": "T5_2H_ICECRYSTAL_UNDEAD@3",
        "humanName": "Expert'sPermafrostPrism"
    },
    "5381": {
        "botName": "T6_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Master'sPermafrostPrism"
    },
    "5382": {
        "botName": "T6_2H_ICECRYSTAL_UNDEAD@1",
        "humanName": "Master'sPermafrostPrism"
    },
    "5383": {
        "botName": "T6_2H_ICECRYSTAL_UNDEAD@2",
        "humanName": "Master'sPermafrostPrism"
    },
    "5384": {
        "botName": "T6_2H_ICECRYSTAL_UNDEAD@3",
        "humanName": "Master'sPermafrostPrism"
    },
    "5385": {
        "botName": "T7_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Grandmaster'sPermafrostPrism"
    },
    "5386": {
        "botName": "T7_2H_ICECRYSTAL_UNDEAD@1",
        "humanName": "Grandmaster'sPermafrostPrism"
    },
    "5387": {
        "botName": "T7_2H_ICECRYSTAL_UNDEAD@2",
        "humanName": "Grandmaster'sPermafrostPrism"
    },
    "5388": {
        "botName": "T7_2H_ICECRYSTAL_UNDEAD@3",
        "humanName": "Grandmaster'sPermafrostPrism"
    },
    "5389": {
        "botName": "T8_2H_ICECRYSTAL_UNDEAD",
        "humanName": "Elder'sPermafrostPrism"
    },
    "5390": {
        "botName": "T8_2H_ICECRYSTAL_UNDEAD@1",
        "humanName": "Elder'sPermafrostPrism"
    },
    "5391": {
        "botName": "T8_2H_ICECRYSTAL_UNDEAD@2",
        "humanName": "Elder'sPermafrostPrism"
    },
    "5392": {
        "botName": "T8_2H_ICECRYSTAL_UNDEAD@3",
        "humanName": "Elder'sPermafrostPrism"
    },
    "5393": {
        "botName": "T4_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Adept'sChillhowl"
    },
    "5394": {
        "botName": "T4_MAIN_FROSTSTAFF_AVALON@1",
        "humanName": "Adept'sChillhowl"
    },
    "5395": {
        "botName": "T4_MAIN_FROSTSTAFF_AVALON@2",
        "humanName": "Adept'sChillhowl"
    },
    "5396": {
        "botName": "T4_MAIN_FROSTSTAFF_AVALON@3",
        "humanName": "Adept'sChillhowl"
    },
    "5397": {
        "botName": "T5_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Expert'sChillhowl"
    },
    "5398": {
        "botName": "T5_MAIN_FROSTSTAFF_AVALON@1",
        "humanName": "Expert'sChillhowl"
    },
    "5399": {
        "botName": "T5_MAIN_FROSTSTAFF_AVALON@2",
        "humanName": "Expert'sChillhowl"
    },
    "5400": {
        "botName": "T5_MAIN_FROSTSTAFF_AVALON@3",
        "humanName": "Expert'sChillhowl"
    },
    "5401": {
        "botName": "T6_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Master'sChillhowl"
    },
    "5402": {
        "botName": "T6_MAIN_FROSTSTAFF_AVALON@1",
        "humanName": "Master'sChillhowl"
    },
    "5403": {
        "botName": "T6_MAIN_FROSTSTAFF_AVALON@2",
        "humanName": "Master'sChillhowl"
    },
    "5404": {
        "botName": "T6_MAIN_FROSTSTAFF_AVALON@3",
        "humanName": "Master'sChillhowl"
    },
    "5405": {
        "botName": "T7_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Grandmaster'sChillhowl"
    },
    "5406": {
        "botName": "T7_MAIN_FROSTSTAFF_AVALON@1",
        "humanName": "Grandmaster'sChillhowl"
    },
    "5407": {
        "botName": "T7_MAIN_FROSTSTAFF_AVALON@2",
        "humanName": "Grandmaster'sChillhowl"
    },
    "5408": {
        "botName": "T7_MAIN_FROSTSTAFF_AVALON@3",
        "humanName": "Grandmaster'sChillhowl"
    },
    "5409": {
        "botName": "T8_MAIN_FROSTSTAFF_AVALON",
        "humanName": "Elder'sChillhowl"
    },
    "5410": {
        "botName": "T8_MAIN_FROSTSTAFF_AVALON@1",
        "humanName": "Elder'sChillhowl"
    },
    "5411": {
        "botName": "T8_MAIN_FROSTSTAFF_AVALON@2",
        "humanName": "Elder'sChillhowl"
    },
    "5412": {
        "botName": "T8_MAIN_FROSTSTAFF_AVALON@3",
        "humanName": "Elder'sChillhowl"
    },
    "5413": {
        "botName": "T3_MAIN_ARCANESTAFF",
        "humanName": "Journeyman'sArcaneStaff"
    },
    "5414": {
        "botName": "T4_MAIN_ARCANESTAFF",
        "humanName": "Adept'sArcaneStaff"
    },
    "5415": {
        "botName": "T4_MAIN_ARCANESTAFF@1",
        "humanName": "Adept'sArcaneStaff"
    },
    "5416": {
        "botName": "T4_MAIN_ARCANESTAFF@2",
        "humanName": "Adept'sArcaneStaff"
    },
    "5417": {
        "botName": "T4_MAIN_ARCANESTAFF@3",
        "humanName": "Adept'sArcaneStaff"
    },
    "5418": {
        "botName": "T5_MAIN_ARCANESTAFF",
        "humanName": "Expert'sArcaneStaff"
    },
    "5419": {
        "botName": "T5_MAIN_ARCANESTAFF@1",
        "humanName": "Expert'sArcaneStaff"
    },
    "5420": {
        "botName": "T5_MAIN_ARCANESTAFF@2",
        "humanName": "Expert'sArcaneStaff"
    },
    "5421": {
        "botName": "T5_MAIN_ARCANESTAFF@3",
        "humanName": "Expert'sArcaneStaff"
    },
    "5422": {
        "botName": "T6_MAIN_ARCANESTAFF",
        "humanName": "Master'sArcaneStaff"
    },
    "5423": {
        "botName": "T6_MAIN_ARCANESTAFF@1",
        "humanName": "Master'sArcaneStaff"
    },
    "5424": {
        "botName": "T6_MAIN_ARCANESTAFF@2",
        "humanName": "Master'sArcaneStaff"
    },
    "5425": {
        "botName": "T6_MAIN_ARCANESTAFF@3",
        "humanName": "Master'sArcaneStaff"
    },
    "5426": {
        "botName": "T7_MAIN_ARCANESTAFF",
        "humanName": "Grandmaster'sArcaneStaff"
    },
    "5427": {
        "botName": "T7_MAIN_ARCANESTAFF@1",
        "humanName": "Grandmaster'sArcaneStaff"
    },
    "5428": {
        "botName": "T7_MAIN_ARCANESTAFF@2",
        "humanName": "Grandmaster'sArcaneStaff"
    },
    "5429": {
        "botName": "T7_MAIN_ARCANESTAFF@3",
        "humanName": "Grandmaster'sArcaneStaff"
    },
    "5430": {
        "botName": "T8_MAIN_ARCANESTAFF",
        "humanName": "Elder'sArcaneStaff"
    },
    "5431": {
        "botName": "T8_MAIN_ARCANESTAFF@1",
        "humanName": "Elder'sArcaneStaff"
    },
    "5432": {
        "botName": "T8_MAIN_ARCANESTAFF@2",
        "humanName": "Elder'sArcaneStaff"
    },
    "5433": {
        "botName": "T8_MAIN_ARCANESTAFF@3",
        "humanName": "Elder'sArcaneStaff"
    },
    "5434": {
        "botName": "T4_2H_ARCANESTAFF",
        "humanName": "Adept'sGreatArcaneStaff"
    },
    "5435": {
        "botName": "T4_2H_ARCANESTAFF@1",
        "humanName": "Adept'sGreatArcaneStaff"
    },
    "5436": {
        "botName": "T4_2H_ARCANESTAFF@2",
        "humanName": "Adept'sGreatArcaneStaff"
    },
    "5437": {
        "botName": "T4_2H_ARCANESTAFF@3",
        "humanName": "Adept'sGreatArcaneStaff"
    },
    "5438": {
        "botName": "T5_2H_ARCANESTAFF",
        "humanName": "Expert'sGreatArcaneStaff"
    },
    "5439": {
        "botName": "T5_2H_ARCANESTAFF@1",
        "humanName": "Expert'sGreatArcaneStaff"
    },
    "5440": {
        "botName": "T5_2H_ARCANESTAFF@2",
        "humanName": "Expert'sGreatArcaneStaff"
    },
    "5441": {
        "botName": "T5_2H_ARCANESTAFF@3",
        "humanName": "Expert'sGreatArcaneStaff"
    },
    "5442": {
        "botName": "T6_2H_ARCANESTAFF",
        "humanName": "Master'sGreatArcaneStaff"
    },
    "5443": {
        "botName": "T6_2H_ARCANESTAFF@1",
        "humanName": "Master'sGreatArcaneStaff"
    },
    "5444": {
        "botName": "T6_2H_ARCANESTAFF@2",
        "humanName": "Master'sGreatArcaneStaff"
    },
    "5445": {
        "botName": "T6_2H_ARCANESTAFF@3",
        "humanName": "Master'sGreatArcaneStaff"
    },
    "5446": {
        "botName": "T7_2H_ARCANESTAFF",
        "humanName": "Grandmaster'sGreatArcaneStaff"
    },
    "5447": {
        "botName": "T7_2H_ARCANESTAFF@1",
        "humanName": "Grandmaster'sGreatArcaneStaff"
    },
    "5448": {
        "botName": "T7_2H_ARCANESTAFF@2",
        "humanName": "Grandmaster'sGreatArcaneStaff"
    },
    "5449": {
        "botName": "T7_2H_ARCANESTAFF@3",
        "humanName": "Grandmaster'sGreatArcaneStaff"
    },
    "5450": {
        "botName": "T8_2H_ARCANESTAFF",
        "humanName": "Elder'sGreatArcaneStaff"
    },
    "5451": {
        "botName": "T8_2H_ARCANESTAFF@1",
        "humanName": "Elder'sGreatArcaneStaff"
    },
    "5452": {
        "botName": "T8_2H_ARCANESTAFF@2",
        "humanName": "Elder'sGreatArcaneStaff"
    },
    "5453": {
        "botName": "T8_2H_ARCANESTAFF@3",
        "humanName": "Elder'sGreatArcaneStaff"
    },
    "5454": {
        "botName": "T4_2H_ENIGMATICSTAFF",
        "humanName": "Adept'sEnigmaticStaff"
    },
    "5455": {
        "botName": "T4_2H_ENIGMATICSTAFF@1",
        "humanName": "Adept'sEnigmaticStaff"
    },
    "5456": {
        "botName": "T4_2H_ENIGMATICSTAFF@2",
        "humanName": "Adept'sEnigmaticStaff"
    },
    "5457": {
        "botName": "T4_2H_ENIGMATICSTAFF@3",
        "humanName": "Adept'sEnigmaticStaff"
    },
    "5458": {
        "botName": "T5_2H_ENIGMATICSTAFF",
        "humanName": "Expert'sEnigmaticStaff"
    },
    "5459": {
        "botName": "T5_2H_ENIGMATICSTAFF@1",
        "humanName": "Expert'sEnigmaticStaff"
    },
    "5460": {
        "botName": "T5_2H_ENIGMATICSTAFF@2",
        "humanName": "Expert'sEnigmaticStaff"
    },
    "5461": {
        "botName": "T5_2H_ENIGMATICSTAFF@3",
        "humanName": "Expert'sEnigmaticStaff"
    },
    "5462": {
        "botName": "T6_2H_ENIGMATICSTAFF",
        "humanName": "Master'sEnigmaticStaff"
    },
    "5463": {
        "botName": "T6_2H_ENIGMATICSTAFF@1",
        "humanName": "Master'sEnigmaticStaff"
    },
    "5464": {
        "botName": "T6_2H_ENIGMATICSTAFF@2",
        "humanName": "Master'sEnigmaticStaff"
    },
    "5465": {
        "botName": "T6_2H_ENIGMATICSTAFF@3",
        "humanName": "Master'sEnigmaticStaff"
    },
    "5466": {
        "botName": "T7_2H_ENIGMATICSTAFF",
        "humanName": "Grandmaster'sEnigmaticStaff"
    },
    "5467": {
        "botName": "T7_2H_ENIGMATICSTAFF@1",
        "humanName": "Grandmaster'sEnigmaticStaff"
    },
    "5468": {
        "botName": "T7_2H_ENIGMATICSTAFF@2",
        "humanName": "Grandmaster'sEnigmaticStaff"
    },
    "5469": {
        "botName": "T7_2H_ENIGMATICSTAFF@3",
        "humanName": "Grandmaster'sEnigmaticStaff"
    },
    "5470": {
        "botName": "T8_2H_ENIGMATICSTAFF",
        "humanName": "Elder'sEnigmaticStaff"
    },
    "5471": {
        "botName": "T8_2H_ENIGMATICSTAFF@1",
        "humanName": "Elder'sEnigmaticStaff"
    },
    "5472": {
        "botName": "T8_2H_ENIGMATICSTAFF@2",
        "humanName": "Elder'sEnigmaticStaff"
    },
    "5473": {
        "botName": "T8_2H_ENIGMATICSTAFF@3",
        "humanName": "Elder'sEnigmaticStaff"
    },
    "5474": {
        "botName": "T4_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Adept'sWitchworkStaff"
    },
    "5475": {
        "botName": "T4_MAIN_ARCANESTAFF_UNDEAD@1",
        "humanName": "Adept'sWitchworkStaff"
    },
    "5476": {
        "botName": "T4_MAIN_ARCANESTAFF_UNDEAD@2",
        "humanName": "Adept'sWitchworkStaff"
    },
    "5477": {
        "botName": "T4_MAIN_ARCANESTAFF_UNDEAD@3",
        "humanName": "Adept'sWitchworkStaff"
    },
    "5478": {
        "botName": "T5_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Expert'sWitchworkStaff"
    },
    "5479": {
        "botName": "T5_MAIN_ARCANESTAFF_UNDEAD@1",
        "humanName": "Expert'sWitchworkStaff"
    },
    "5480": {
        "botName": "T5_MAIN_ARCANESTAFF_UNDEAD@2",
        "humanName": "Expert'sWitchworkStaff"
    },
    "5481": {
        "botName": "T5_MAIN_ARCANESTAFF_UNDEAD@3",
        "humanName": "Expert'sWitchworkStaff"
    },
    "5482": {
        "botName": "T6_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Master'sWitchworkStaff"
    },
    "5483": {
        "botName": "T6_MAIN_ARCANESTAFF_UNDEAD@1",
        "humanName": "Master'sWitchworkStaff"
    },
    "5484": {
        "botName": "T6_MAIN_ARCANESTAFF_UNDEAD@2",
        "humanName": "Master'sWitchworkStaff"
    },
    "5485": {
        "botName": "T6_MAIN_ARCANESTAFF_UNDEAD@3",
        "humanName": "Master'sWitchworkStaff"
    },
    "5486": {
        "botName": "T7_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Grandmaster'sWitchworkStaff"
    },
    "5487": {
        "botName": "T7_MAIN_ARCANESTAFF_UNDEAD@1",
        "humanName": "Grandmaster'sWitchworkStaff"
    },
    "5488": {
        "botName": "T7_MAIN_ARCANESTAFF_UNDEAD@2",
        "humanName": "Grandmaster'sWitchworkStaff"
    },
    "5489": {
        "botName": "T7_MAIN_ARCANESTAFF_UNDEAD@3",
        "humanName": "Grandmaster'sWitchworkStaff"
    },
    "5490": {
        "botName": "T8_MAIN_ARCANESTAFF_UNDEAD",
        "humanName": "Elder'sWitchworkStaff"
    },
    "5491": {
        "botName": "T8_MAIN_ARCANESTAFF_UNDEAD@1",
        "humanName": "Elder'sWitchworkStaff"
    },
    "5492": {
        "botName": "T8_MAIN_ARCANESTAFF_UNDEAD@2",
        "humanName": "Elder'sWitchworkStaff"
    },
    "5493": {
        "botName": "T8_MAIN_ARCANESTAFF_UNDEAD@3",
        "humanName": "Elder'sWitchworkStaff"
    },
    "5494": {
        "botName": "T4_2H_ARCANESTAFF_HELL",
        "humanName": "Adept'sOccultStaff"
    },
    "5495": {
        "botName": "T4_2H_ARCANESTAFF_HELL@1",
        "humanName": "Adept'sOccultStaff"
    },
    "5496": {
        "botName": "T4_2H_ARCANESTAFF_HELL@2",
        "humanName": "Adept'sOccultStaff"
    },
    "5497": {
        "botName": "T4_2H_ARCANESTAFF_HELL@3",
        "humanName": "Adept'sOccultStaff"
    },
    "5498": {
        "botName": "T5_2H_ARCANESTAFF_HELL",
        "humanName": "Expert'sOccultStaff"
    },
    "5499": {
        "botName": "T5_2H_ARCANESTAFF_HELL@1",
        "humanName": "Expert'sOccultStaff"
    },
    "5500": {
        "botName": "T5_2H_ARCANESTAFF_HELL@2",
        "humanName": "Expert'sOccultStaff"
    },
    "5501": {
        "botName": "T5_2H_ARCANESTAFF_HELL@3",
        "humanName": "Expert'sOccultStaff"
    },
    "5502": {
        "botName": "T6_2H_ARCANESTAFF_HELL",
        "humanName": "Master'sOccultStaff"
    },
    "5503": {
        "botName": "T6_2H_ARCANESTAFF_HELL@1",
        "humanName": "Master'sOccultStaff"
    },
    "5504": {
        "botName": "T6_2H_ARCANESTAFF_HELL@2",
        "humanName": "Master'sOccultStaff"
    },
    "5505": {
        "botName": "T6_2H_ARCANESTAFF_HELL@3",
        "humanName": "Master'sOccultStaff"
    },
    "5506": {
        "botName": "T7_2H_ARCANESTAFF_HELL",
        "humanName": "Grandmaster'sOccultStaff"
    },
    "5507": {
        "botName": "T7_2H_ARCANESTAFF_HELL@1",
        "humanName": "Grandmaster'sOccultStaff"
    },
    "5508": {
        "botName": "T7_2H_ARCANESTAFF_HELL@2",
        "humanName": "Grandmaster'sOccultStaff"
    },
    "5509": {
        "botName": "T7_2H_ARCANESTAFF_HELL@3",
        "humanName": "Grandmaster'sOccultStaff"
    },
    "5510": {
        "botName": "T8_2H_ARCANESTAFF_HELL",
        "humanName": "Elder'sOccultStaff"
    },
    "5511": {
        "botName": "T8_2H_ARCANESTAFF_HELL@1",
        "humanName": "Elder'sOccultStaff"
    },
    "5512": {
        "botName": "T8_2H_ARCANESTAFF_HELL@2",
        "humanName": "Elder'sOccultStaff"
    },
    "5513": {
        "botName": "T8_2H_ARCANESTAFF_HELL@3",
        "humanName": "Elder'sOccultStaff"
    },
    "5514": {
        "botName": "T4_2H_ENIGMATICORB_MORGANA",
        "humanName": "Adept'sMalevolentLocus"
    },
    "5515": {
        "botName": "T4_2H_ENIGMATICORB_MORGANA@1",
        "humanName": "Adept'sMalevolentLocus"
    },
    "5516": {
        "botName": "T4_2H_ENIGMATICORB_MORGANA@2",
        "humanName": "Adept'sMalevolentLocus"
    },
    "5517": {
        "botName": "T4_2H_ENIGMATICORB_MORGANA@3",
        "humanName": "Adept'sMalevolentLocus"
    },
    "5518": {
        "botName": "T5_2H_ENIGMATICORB_MORGANA",
        "humanName": "Expert'sMalevolentLocus"
    },
    "5519": {
        "botName": "T5_2H_ENIGMATICORB_MORGANA@1",
        "humanName": "Expert'sMalevolentLocus"
    },
    "5520": {
        "botName": "T5_2H_ENIGMATICORB_MORGANA@2",
        "humanName": "Expert'sMalevolentLocus"
    },
    "5521": {
        "botName": "T5_2H_ENIGMATICORB_MORGANA@3",
        "humanName": "Expert'sMalevolentLocus"
    },
    "5522": {
        "botName": "T6_2H_ENIGMATICORB_MORGANA",
        "humanName": "Master'sMalevolentLocus"
    },
    "5523": {
        "botName": "T6_2H_ENIGMATICORB_MORGANA@1",
        "humanName": "Master'sMalevolentLocus"
    },
    "5524": {
        "botName": "T6_2H_ENIGMATICORB_MORGANA@2",
        "humanName": "Master'sMalevolentLocus"
    },
    "5525": {
        "botName": "T6_2H_ENIGMATICORB_MORGANA@3",
        "humanName": "Master'sMalevolentLocus"
    },
    "5526": {
        "botName": "T7_2H_ENIGMATICORB_MORGANA",
        "humanName": "Grandmaster'sMalevolentLocus"
    },
    "5527": {
        "botName": "T7_2H_ENIGMATICORB_MORGANA@1",
        "humanName": "Grandmaster'sMalevolentLocus"
    },
    "5528": {
        "botName": "T7_2H_ENIGMATICORB_MORGANA@2",
        "humanName": "Grandmaster'sMalevolentLocus"
    },
    "5529": {
        "botName": "T7_2H_ENIGMATICORB_MORGANA@3",
        "humanName": "Grandmaster'sMalevolentLocus"
    },
    "5530": {
        "botName": "T8_2H_ENIGMATICORB_MORGANA",
        "humanName": "Elder'sMalevolentLocus"
    },
    "5531": {
        "botName": "T8_2H_ENIGMATICORB_MORGANA@1",
        "humanName": "Elder'sMalevolentLocus"
    },
    "5532": {
        "botName": "T8_2H_ENIGMATICORB_MORGANA@2",
        "humanName": "Elder'sMalevolentLocus"
    },
    "5533": {
        "botName": "T8_2H_ENIGMATICORB_MORGANA@3",
        "humanName": "Elder'sMalevolentLocus"
    },
    "5534": {
        "botName": "T4_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Adept'sEvensong"
    },
    "5535": {
        "botName": "T4_2H_ARCANE_RINGPAIR_AVALON@1",
        "humanName": "Adept'sEvensong"
    },
    "5536": {
        "botName": "T4_2H_ARCANE_RINGPAIR_AVALON@2",
        "humanName": "Adept'sEvensong"
    },
    "5537": {
        "botName": "T4_2H_ARCANE_RINGPAIR_AVALON@3",
        "humanName": "Adept'sEvensong"
    },
    "5538": {
        "botName": "T5_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Expert'sEvensong"
    },
    "5539": {
        "botName": "T5_2H_ARCANE_RINGPAIR_AVALON@1",
        "humanName": "Expert'sEvensong"
    },
    "5540": {
        "botName": "T5_2H_ARCANE_RINGPAIR_AVALON@2",
        "humanName": "Expert'sEvensong"
    },
    "5541": {
        "botName": "T5_2H_ARCANE_RINGPAIR_AVALON@3",
        "humanName": "Expert'sEvensong"
    },
    "5542": {
        "botName": "T6_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Master'sEvensong"
    },
    "5543": {
        "botName": "T6_2H_ARCANE_RINGPAIR_AVALON@1",
        "humanName": "Master'sEvensong"
    },
    "5544": {
        "botName": "T6_2H_ARCANE_RINGPAIR_AVALON@2",
        "humanName": "Master'sEvensong"
    },
    "5545": {
        "botName": "T6_2H_ARCANE_RINGPAIR_AVALON@3",
        "humanName": "Master'sEvensong"
    },
    "5546": {
        "botName": "T7_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Grandmaster'sEvensong"
    },
    "5547": {
        "botName": "T7_2H_ARCANE_RINGPAIR_AVALON@1",
        "humanName": "Grandmaster'sEvensong"
    },
    "5548": {
        "botName": "T7_2H_ARCANE_RINGPAIR_AVALON@2",
        "humanName": "Grandmaster'sEvensong"
    },
    "5549": {
        "botName": "T7_2H_ARCANE_RINGPAIR_AVALON@3",
        "humanName": "Grandmaster'sEvensong"
    },
    "5550": {
        "botName": "T8_2H_ARCANE_RINGPAIR_AVALON",
        "humanName": "Elder'sEvensong"
    },
    "5551": {
        "botName": "T8_2H_ARCANE_RINGPAIR_AVALON@1",
        "humanName": "Elder'sEvensong"
    },
    "5552": {
        "botName": "T8_2H_ARCANE_RINGPAIR_AVALON@2",
        "humanName": "Elder'sEvensong"
    },
    "5553": {
        "botName": "T8_2H_ARCANE_RINGPAIR_AVALON@3",
        "humanName": "Elder'sEvensong"
    },
    "5554": {
        "botName": "T3_MAIN_HOLYSTAFF",
        "humanName": "Journeyman'sHolyStaff"
    },
    "5555": {
        "botName": "T4_MAIN_HOLYSTAFF",
        "humanName": "Adept'sHolyStaff"
    },
    "5556": {
        "botName": "T4_MAIN_HOLYSTAFF@1",
        "humanName": "Adept'sHolyStaff"
    },
    "5557": {
        "botName": "T4_MAIN_HOLYSTAFF@2",
        "humanName": "Adept'sHolyStaff"
    },
    "5558": {
        "botName": "T4_MAIN_HOLYSTAFF@3",
        "humanName": "Adept'sHolyStaff"
    },
    "5559": {
        "botName": "T5_MAIN_HOLYSTAFF",
        "humanName": "Expert'sHolyStaff"
    },
    "5560": {
        "botName": "T5_MAIN_HOLYSTAFF@1",
        "humanName": "Expert'sHolyStaff"
    },
    "5561": {
        "botName": "T5_MAIN_HOLYSTAFF@2",
        "humanName": "Expert'sHolyStaff"
    },
    "5562": {
        "botName": "T5_MAIN_HOLYSTAFF@3",
        "humanName": "Expert'sHolyStaff"
    },
    "5563": {
        "botName": "T6_MAIN_HOLYSTAFF",
        "humanName": "Master'sHolyStaff"
    },
    "5564": {
        "botName": "T6_MAIN_HOLYSTAFF@1",
        "humanName": "Master'sHolyStaff"
    },
    "5565": {
        "botName": "T6_MAIN_HOLYSTAFF@2",
        "humanName": "Master'sHolyStaff"
    },
    "5566": {
        "botName": "T6_MAIN_HOLYSTAFF@3",
        "humanName": "Master'sHolyStaff"
    },
    "5567": {
        "botName": "T7_MAIN_HOLYSTAFF",
        "humanName": "Grandmaster'sHolyStaff"
    },
    "5568": {
        "botName": "T7_MAIN_HOLYSTAFF@1",
        "humanName": "Grandmaster'sHolyStaff"
    },
    "5569": {
        "botName": "T7_MAIN_HOLYSTAFF@2",
        "humanName": "Grandmaster'sHolyStaff"
    },
    "5570": {
        "botName": "T7_MAIN_HOLYSTAFF@3",
        "humanName": "Grandmaster'sHolyStaff"
    },
    "5571": {
        "botName": "T8_MAIN_HOLYSTAFF",
        "humanName": "Elder'sHolyStaff"
    },
    "5572": {
        "botName": "T8_MAIN_HOLYSTAFF@1",
        "humanName": "Elder'sHolyStaff"
    },
    "5573": {
        "botName": "T8_MAIN_HOLYSTAFF@2",
        "humanName": "Elder'sHolyStaff"
    },
    "5574": {
        "botName": "T8_MAIN_HOLYSTAFF@3",
        "humanName": "Elder'sHolyStaff"
    },
    "5575": {
        "botName": "T4_2H_HOLYSTAFF",
        "humanName": "Adept'sGreatHolyStaff"
    },
    "5576": {
        "botName": "T4_2H_HOLYSTAFF@1",
        "humanName": "Adept'sGreatHolyStaff"
    },
    "5577": {
        "botName": "T4_2H_HOLYSTAFF@2",
        "humanName": "Adept'sGreatHolyStaff"
    },
    "5578": {
        "botName": "T4_2H_HOLYSTAFF@3",
        "humanName": "Adept'sGreatHolyStaff"
    },
    "5579": {
        "botName": "T5_2H_HOLYSTAFF",
        "humanName": "Expert'sGreatHolyStaff"
    },
    "5580": {
        "botName": "T5_2H_HOLYSTAFF@1",
        "humanName": "Expert'sGreatHolyStaff"
    },
    "5581": {
        "botName": "T5_2H_HOLYSTAFF@2",
        "humanName": "Expert'sGreatHolyStaff"
    },
    "5582": {
        "botName": "T5_2H_HOLYSTAFF@3",
        "humanName": "Expert'sGreatHolyStaff"
    },
    "5583": {
        "botName": "T6_2H_HOLYSTAFF",
        "humanName": "Master'sGreatHolyStaff"
    },
    "5584": {
        "botName": "T6_2H_HOLYSTAFF@1",
        "humanName": "Master'sGreatHolyStaff"
    },
    "5585": {
        "botName": "T6_2H_HOLYSTAFF@2",
        "humanName": "Master'sGreatHolyStaff"
    },
    "5586": {
        "botName": "T6_2H_HOLYSTAFF@3",
        "humanName": "Master'sGreatHolyStaff"
    },
    "5587": {
        "botName": "T7_2H_HOLYSTAFF",
        "humanName": "Grandmaster'sGreatHolyStaff"
    },
    "5588": {
        "botName": "T7_2H_HOLYSTAFF@1",
        "humanName": "Grandmaster'sGreatHolyStaff"
    },
    "5589": {
        "botName": "T7_2H_HOLYSTAFF@2",
        "humanName": "Grandmaster'sGreatHolyStaff"
    },
    "5590": {
        "botName": "T7_2H_HOLYSTAFF@3",
        "humanName": "Grandmaster'sGreatHolyStaff"
    },
    "5591": {
        "botName": "T8_2H_HOLYSTAFF",
        "humanName": "Elder'sGreatHolyStaff"
    },
    "5592": {
        "botName": "T8_2H_HOLYSTAFF@1",
        "humanName": "Elder'sGreatHolyStaff"
    },
    "5593": {
        "botName": "T8_2H_HOLYSTAFF@2",
        "humanName": "Elder'sGreatHolyStaff"
    },
    "5594": {
        "botName": "T8_2H_HOLYSTAFF@3",
        "humanName": "Elder'sGreatHolyStaff"
    },
    "5595": {
        "botName": "T4_2H_DIVINESTAFF",
        "humanName": "Adept'sDivineStaff"
    },
    "5596": {
        "botName": "T4_2H_DIVINESTAFF@1",
        "humanName": "Adept'sDivineStaff"
    },
    "5597": {
        "botName": "T4_2H_DIVINESTAFF@2",
        "humanName": "Adept'sDivineStaff"
    },
    "5598": {
        "botName": "T4_2H_DIVINESTAFF@3",
        "humanName": "Adept'sDivineStaff"
    },
    "5599": {
        "botName": "T5_2H_DIVINESTAFF",
        "humanName": "Expert'sDivineStaff"
    },
    "5600": {
        "botName": "T5_2H_DIVINESTAFF@1",
        "humanName": "Expert'sDivineStaff"
    },
    "5601": {
        "botName": "T5_2H_DIVINESTAFF@2",
        "humanName": "Expert'sDivineStaff"
    },
    "5602": {
        "botName": "T5_2H_DIVINESTAFF@3",
        "humanName": "Expert'sDivineStaff"
    },
    "5603": {
        "botName": "T6_2H_DIVINESTAFF",
        "humanName": "Master'sDivineStaff"
    },
    "5604": {
        "botName": "T6_2H_DIVINESTAFF@1",
        "humanName": "Master'sDivineStaff"
    },
    "5605": {
        "botName": "T6_2H_DIVINESTAFF@2",
        "humanName": "Master'sDivineStaff"
    },
    "5606": {
        "botName": "T6_2H_DIVINESTAFF@3",
        "humanName": "Master'sDivineStaff"
    },
    "5607": {
        "botName": "T7_2H_DIVINESTAFF",
        "humanName": "Grandmaster'sDivineStaff"
    },
    "5608": {
        "botName": "T7_2H_DIVINESTAFF@1",
        "humanName": "Grandmaster'sDivineStaff"
    },
    "5609": {
        "botName": "T7_2H_DIVINESTAFF@2",
        "humanName": "Grandmaster'sDivineStaff"
    },
    "5610": {
        "botName": "T7_2H_DIVINESTAFF@3",
        "humanName": "Grandmaster'sDivineStaff"
    },
    "5611": {
        "botName": "T8_2H_DIVINESTAFF",
        "humanName": "Elder'sDivineStaff"
    },
    "5612": {
        "botName": "T8_2H_DIVINESTAFF@1",
        "humanName": "Elder'sDivineStaff"
    },
    "5613": {
        "botName": "T8_2H_DIVINESTAFF@2",
        "humanName": "Elder'sDivineStaff"
    },
    "5614": {
        "botName": "T8_2H_DIVINESTAFF@3",
        "humanName": "Elder'sDivineStaff"
    },
    "5615": {
        "botName": "T4_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Adept'sLifetouchStaff"
    },
    "5616": {
        "botName": "T4_MAIN_HOLYSTAFF_MORGANA@1",
        "humanName": "Adept'sLifetouchStaff"
    },
    "5617": {
        "botName": "T4_MAIN_HOLYSTAFF_MORGANA@2",
        "humanName": "Adept'sLifetouchStaff"
    },
    "5618": {
        "botName": "T4_MAIN_HOLYSTAFF_MORGANA@3",
        "humanName": "Adept'sLifetouchStaff"
    },
    "5619": {
        "botName": "T5_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Expert'sLifetouchStaff"
    },
    "5620": {
        "botName": "T5_MAIN_HOLYSTAFF_MORGANA@1",
        "humanName": "Expert'sLifetouchStaff"
    },
    "5621": {
        "botName": "T5_MAIN_HOLYSTAFF_MORGANA@2",
        "humanName": "Expert'sLifetouchStaff"
    },
    "5622": {
        "botName": "T5_MAIN_HOLYSTAFF_MORGANA@3",
        "humanName": "Expert'sLifetouchStaff"
    },
    "5623": {
        "botName": "T6_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Master'sLifetouchStaff"
    },
    "5624": {
        "botName": "T6_MAIN_HOLYSTAFF_MORGANA@1",
        "humanName": "Master'sLifetouchStaff"
    },
    "5625": {
        "botName": "T6_MAIN_HOLYSTAFF_MORGANA@2",
        "humanName": "Master'sLifetouchStaff"
    },
    "5626": {
        "botName": "T6_MAIN_HOLYSTAFF_MORGANA@3",
        "humanName": "Master'sLifetouchStaff"
    },
    "5627": {
        "botName": "T7_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Grandmaster'sLifetouchStaff"
    },
    "5628": {
        "botName": "T7_MAIN_HOLYSTAFF_MORGANA@1",
        "humanName": "Grandmaster'sLifetouchStaff"
    },
    "5629": {
        "botName": "T7_MAIN_HOLYSTAFF_MORGANA@2",
        "humanName": "Grandmaster'sLifetouchStaff"
    },
    "5630": {
        "botName": "T7_MAIN_HOLYSTAFF_MORGANA@3",
        "humanName": "Grandmaster'sLifetouchStaff"
    },
    "5631": {
        "botName": "T8_MAIN_HOLYSTAFF_MORGANA",
        "humanName": "Elder'sLifetouchStaff"
    },
    "5632": {
        "botName": "T8_MAIN_HOLYSTAFF_MORGANA@1",
        "humanName": "Elder'sLifetouchStaff"
    },
    "5633": {
        "botName": "T8_MAIN_HOLYSTAFF_MORGANA@2",
        "humanName": "Elder'sLifetouchStaff"
    },
    "5634": {
        "botName": "T8_MAIN_HOLYSTAFF_MORGANA@3",
        "humanName": "Elder'sLifetouchStaff"
    },
    "5635": {
        "botName": "T4_2H_HOLYSTAFF_HELL",
        "humanName": "Adept'sFallenStaff"
    },
    "5636": {
        "botName": "T4_2H_HOLYSTAFF_HELL@1",
        "humanName": "Adept'sFallenStaff"
    },
    "5637": {
        "botName": "T4_2H_HOLYSTAFF_HELL@2",
        "humanName": "Adept'sFallenStaff"
    },
    "5638": {
        "botName": "T4_2H_HOLYSTAFF_HELL@3",
        "humanName": "Adept'sFallenStaff"
    },
    "5639": {
        "botName": "T5_2H_HOLYSTAFF_HELL",
        "humanName": "Expert'sFallenStaff"
    },
    "5640": {
        "botName": "T5_2H_HOLYSTAFF_HELL@1",
        "humanName": "Expert'sFallenStaff"
    },
    "5641": {
        "botName": "T5_2H_HOLYSTAFF_HELL@2",
        "humanName": "Expert'sFallenStaff"
    },
    "5642": {
        "botName": "T5_2H_HOLYSTAFF_HELL@3",
        "humanName": "Expert'sFallenStaff"
    },
    "5643": {
        "botName": "T6_2H_HOLYSTAFF_HELL",
        "humanName": "Master'sFallenStaff"
    },
    "5644": {
        "botName": "T6_2H_HOLYSTAFF_HELL@1",
        "humanName": "Master'sFallenStaff"
    },
    "5645": {
        "botName": "T6_2H_HOLYSTAFF_HELL@2",
        "humanName": "Master'sFallenStaff"
    },
    "5646": {
        "botName": "T6_2H_HOLYSTAFF_HELL@3",
        "humanName": "Master'sFallenStaff"
    },
    "5647": {
        "botName": "T7_2H_HOLYSTAFF_HELL",
        "humanName": "Grandmaster'sFallenStaff"
    },
    "5648": {
        "botName": "T7_2H_HOLYSTAFF_HELL@1",
        "humanName": "Grandmaster'sFallenStaff"
    },
    "5649": {
        "botName": "T7_2H_HOLYSTAFF_HELL@2",
        "humanName": "Grandmaster'sFallenStaff"
    },
    "5650": {
        "botName": "T7_2H_HOLYSTAFF_HELL@3",
        "humanName": "Grandmaster'sFallenStaff"
    },
    "5651": {
        "botName": "T8_2H_HOLYSTAFF_HELL",
        "humanName": "Elder'sFallenStaff"
    },
    "5652": {
        "botName": "T8_2H_HOLYSTAFF_HELL@1",
        "humanName": "Elder'sFallenStaff"
    },
    "5653": {
        "botName": "T8_2H_HOLYSTAFF_HELL@2",
        "humanName": "Elder'sFallenStaff"
    },
    "5654": {
        "botName": "T8_2H_HOLYSTAFF_HELL@3",
        "humanName": "Elder'sFallenStaff"
    },
    "5655": {
        "botName": "T4_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Adept'sRedemptionStaff"
    },
    "5656": {
        "botName": "T4_2H_HOLYSTAFF_UNDEAD@1",
        "humanName": "Adept'sRedemptionStaff"
    },
    "5657": {
        "botName": "T4_2H_HOLYSTAFF_UNDEAD@2",
        "humanName": "Adept'sRedemptionStaff"
    },
    "5658": {
        "botName": "T4_2H_HOLYSTAFF_UNDEAD@3",
        "humanName": "Adept'sRedemptionStaff"
    },
    "5659": {
        "botName": "T5_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Expert'sRedemptionStaff"
    },
    "5660": {
        "botName": "T5_2H_HOLYSTAFF_UNDEAD@1",
        "humanName": "Expert'sRedemptionStaff"
    },
    "5661": {
        "botName": "T5_2H_HOLYSTAFF_UNDEAD@2",
        "humanName": "Expert'sRedemptionStaff"
    },
    "5662": {
        "botName": "T5_2H_HOLYSTAFF_UNDEAD@3",
        "humanName": "Expert'sRedemptionStaff"
    },
    "5663": {
        "botName": "T6_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Master'sRedemptionStaff"
    },
    "5664": {
        "botName": "T6_2H_HOLYSTAFF_UNDEAD@1",
        "humanName": "Master'sRedemptionStaff"
    },
    "5665": {
        "botName": "T6_2H_HOLYSTAFF_UNDEAD@2",
        "humanName": "Master'sRedemptionStaff"
    },
    "5666": {
        "botName": "T6_2H_HOLYSTAFF_UNDEAD@3",
        "humanName": "Master'sRedemptionStaff"
    },
    "5667": {
        "botName": "T7_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Grandmaster'sRedemptionStaff"
    },
    "5668": {
        "botName": "T7_2H_HOLYSTAFF_UNDEAD@1",
        "humanName": "Grandmaster'sRedemptionStaff"
    },
    "5669": {
        "botName": "T7_2H_HOLYSTAFF_UNDEAD@2",
        "humanName": "Grandmaster'sRedemptionStaff"
    },
    "5670": {
        "botName": "T7_2H_HOLYSTAFF_UNDEAD@3",
        "humanName": "Grandmaster'sRedemptionStaff"
    },
    "5671": {
        "botName": "T8_2H_HOLYSTAFF_UNDEAD",
        "humanName": "Elder'sRedemptionStaff"
    },
    "5672": {
        "botName": "T8_2H_HOLYSTAFF_UNDEAD@1",
        "humanName": "Elder'sRedemptionStaff"
    },
    "5673": {
        "botName": "T8_2H_HOLYSTAFF_UNDEAD@2",
        "humanName": "Elder'sRedemptionStaff"
    },
    "5674": {
        "botName": "T8_2H_HOLYSTAFF_UNDEAD@3",
        "humanName": "Elder'sRedemptionStaff"
    },
    "5675": {
        "botName": "T4_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Adept'sHallowfall"
    },
    "5676": {
        "botName": "T4_MAIN_HOLYSTAFF_AVALON@1",
        "humanName": "Adept'sHallowfall"
    },
    "5677": {
        "botName": "T4_MAIN_HOLYSTAFF_AVALON@2",
        "humanName": "Adept'sHallowfall"
    },
    "5678": {
        "botName": "T4_MAIN_HOLYSTAFF_AVALON@3",
        "humanName": "Adept'sHallowfall"
    },
    "5679": {
        "botName": "T5_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Expert'sHallowfall"
    },
    "5680": {
        "botName": "T5_MAIN_HOLYSTAFF_AVALON@1",
        "humanName": "Expert'sHallowfall"
    },
    "5681": {
        "botName": "T5_MAIN_HOLYSTAFF_AVALON@2",
        "humanName": "Expert'sHallowfall"
    },
    "5682": {
        "botName": "T5_MAIN_HOLYSTAFF_AVALON@3",
        "humanName": "Expert'sHallowfall"
    },
    "5683": {
        "botName": "T6_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Master'sHallowfall"
    },
    "5684": {
        "botName": "T6_MAIN_HOLYSTAFF_AVALON@1",
        "humanName": "Master'sHallowfall"
    },
    "5685": {
        "botName": "T6_MAIN_HOLYSTAFF_AVALON@2",
        "humanName": "Master'sHallowfall"
    },
    "5686": {
        "botName": "T6_MAIN_HOLYSTAFF_AVALON@3",
        "humanName": "Master'sHallowfall"
    },
    "5687": {
        "botName": "T7_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Grandmaster'sHallowfall"
    },
    "5688": {
        "botName": "T7_MAIN_HOLYSTAFF_AVALON@1",
        "humanName": "Grandmaster'sHallowfall"
    },
    "5689": {
        "botName": "T7_MAIN_HOLYSTAFF_AVALON@2",
        "humanName": "Grandmaster'sHallowfall"
    },
    "5690": {
        "botName": "T7_MAIN_HOLYSTAFF_AVALON@3",
        "humanName": "Grandmaster'sHallowfall"
    },
    "5691": {
        "botName": "T8_MAIN_HOLYSTAFF_AVALON",
        "humanName": "Elder'sHallowfall"
    },
    "5692": {
        "botName": "T8_MAIN_HOLYSTAFF_AVALON@1",
        "humanName": "Elder'sHallowfall"
    },
    "5693": {
        "botName": "T8_MAIN_HOLYSTAFF_AVALON@2",
        "humanName": "Elder'sHallowfall"
    },
    "5694": {
        "botName": "T8_MAIN_HOLYSTAFF_AVALON@3",
        "humanName": "Elder'sHallowfall"
    },
    "5695": {
        "botName": "T3_MAIN_NATURESTAFF",
        "humanName": "Journeyman'sNatureStaff"
    },
    "5696": {
        "botName": "T4_MAIN_NATURESTAFF",
        "humanName": "Adept'sNatureStaff"
    },
    "5697": {
        "botName": "T4_MAIN_NATURESTAFF@1",
        "humanName": "Adept'sNatureStaff"
    },
    "5698": {
        "botName": "T4_MAIN_NATURESTAFF@2",
        "humanName": "Adept'sNatureStaff"
    },
    "5699": {
        "botName": "T4_MAIN_NATURESTAFF@3",
        "humanName": "Adept'sNatureStaff"
    },
    "5700": {
        "botName": "T5_MAIN_NATURESTAFF",
        "humanName": "Expert'sNatureStaff"
    },
    "5701": {
        "botName": "T5_MAIN_NATURESTAFF@1",
        "humanName": "Expert'sNatureStaff"
    },
    "5702": {
        "botName": "T5_MAIN_NATURESTAFF@2",
        "humanName": "Expert'sNatureStaff"
    },
    "5703": {
        "botName": "T5_MAIN_NATURESTAFF@3",
        "humanName": "Expert'sNatureStaff"
    },
    "5704": {
        "botName": "T6_MAIN_NATURESTAFF",
        "humanName": "Master'sNatureStaff"
    },
    "5705": {
        "botName": "T6_MAIN_NATURESTAFF@1",
        "humanName": "Master'sNatureStaff"
    },
    "5706": {
        "botName": "T6_MAIN_NATURESTAFF@2",
        "humanName": "Master'sNatureStaff"
    },
    "5707": {
        "botName": "T6_MAIN_NATURESTAFF@3",
        "humanName": "Master'sNatureStaff"
    },
    "5708": {
        "botName": "T7_MAIN_NATURESTAFF",
        "humanName": "Grandmaster'sNatureStaff"
    },
    "5709": {
        "botName": "T7_MAIN_NATURESTAFF@1",
        "humanName": "Grandmaster'sNatureStaff"
    },
    "5710": {
        "botName": "T7_MAIN_NATURESTAFF@2",
        "humanName": "Grandmaster'sNatureStaff"
    },
    "5711": {
        "botName": "T7_MAIN_NATURESTAFF@3",
        "humanName": "Grandmaster'sNatureStaff"
    },
    "5712": {
        "botName": "T8_MAIN_NATURESTAFF",
        "humanName": "Elder'sNatureStaff"
    },
    "5713": {
        "botName": "T8_MAIN_NATURESTAFF@1",
        "humanName": "Elder'sNatureStaff"
    },
    "5714": {
        "botName": "T8_MAIN_NATURESTAFF@2",
        "humanName": "Elder'sNatureStaff"
    },
    "5715": {
        "botName": "T8_MAIN_NATURESTAFF@3",
        "humanName": "Elder'sNatureStaff"
    },
    "5716": {
        "botName": "T4_2H_NATURESTAFF",
        "humanName": "Adept'sGreatNatureStaff"
    },
    "5717": {
        "botName": "T4_2H_NATURESTAFF@1",
        "humanName": "Adept'sGreatNatureStaff"
    },
    "5718": {
        "botName": "T4_2H_NATURESTAFF@2",
        "humanName": "Adept'sGreatNatureStaff"
    },
    "5719": {
        "botName": "T4_2H_NATURESTAFF@3",
        "humanName": "Adept'sGreatNatureStaff"
    },
    "5720": {
        "botName": "T5_2H_NATURESTAFF",
        "humanName": "Expert'sGreatNatureStaff"
    },
    "5721": {
        "botName": "T5_2H_NATURESTAFF@1",
        "humanName": "Expert'sGreatNatureStaff"
    },
    "5722": {
        "botName": "T5_2H_NATURESTAFF@2",
        "humanName": "Expert'sGreatNatureStaff"
    },
    "5723": {
        "botName": "T5_2H_NATURESTAFF@3",
        "humanName": "Expert'sGreatNatureStaff"
    },
    "5724": {
        "botName": "T6_2H_NATURESTAFF",
        "humanName": "Master'sGreatNatureStaff"
    },
    "5725": {
        "botName": "T6_2H_NATURESTAFF@1",
        "humanName": "Master'sGreatNatureStaff"
    },
    "5726": {
        "botName": "T6_2H_NATURESTAFF@2",
        "humanName": "Master'sGreatNatureStaff"
    },
    "5727": {
        "botName": "T6_2H_NATURESTAFF@3",
        "humanName": "Master'sGreatNatureStaff"
    },
    "5728": {
        "botName": "T7_2H_NATURESTAFF",
        "humanName": "Grandmaster'sGreatNatureStaff"
    },
    "5729": {
        "botName": "T7_2H_NATURESTAFF@1",
        "humanName": "Grandmaster'sGreatNatureStaff"
    },
    "5730": {
        "botName": "T7_2H_NATURESTAFF@2",
        "humanName": "Grandmaster'sGreatNatureStaff"
    },
    "5731": {
        "botName": "T7_2H_NATURESTAFF@3",
        "humanName": "Grandmaster'sGreatNatureStaff"
    },
    "5732": {
        "botName": "T8_2H_NATURESTAFF",
        "humanName": "Elder'sGreatNatureStaff"
    },
    "5733": {
        "botName": "T8_2H_NATURESTAFF@1",
        "humanName": "Elder'sGreatNatureStaff"
    },
    "5734": {
        "botName": "T8_2H_NATURESTAFF@2",
        "humanName": "Elder'sGreatNatureStaff"
    },
    "5735": {
        "botName": "T8_2H_NATURESTAFF@3",
        "humanName": "Elder'sGreatNatureStaff"
    },
    "5736": {
        "botName": "T4_2H_WILDSTAFF",
        "humanName": "Adept'sWildStaff"
    },
    "5737": {
        "botName": "T4_2H_WILDSTAFF@1",
        "humanName": "Adept'sWildStaff"
    },
    "5738": {
        "botName": "T4_2H_WILDSTAFF@2",
        "humanName": "Adept'sWildStaff"
    },
    "5739": {
        "botName": "T4_2H_WILDSTAFF@3",
        "humanName": "Adept'sWildStaff"
    },
    "5740": {
        "botName": "T5_2H_WILDSTAFF",
        "humanName": "Expert'sWildStaff"
    },
    "5741": {
        "botName": "T5_2H_WILDSTAFF@1",
        "humanName": "Expert'sWildStaff"
    },
    "5742": {
        "botName": "T5_2H_WILDSTAFF@2",
        "humanName": "Expert'sWildStaff"
    },
    "5743": {
        "botName": "T5_2H_WILDSTAFF@3",
        "humanName": "Expert'sWildStaff"
    },
    "5744": {
        "botName": "T6_2H_WILDSTAFF",
        "humanName": "Master'sWildStaff"
    },
    "5745": {
        "botName": "T6_2H_WILDSTAFF@1",
        "humanName": "Master'sWildStaff"
    },
    "5746": {
        "botName": "T6_2H_WILDSTAFF@2",
        "humanName": "Master'sWildStaff"
    },
    "5747": {
        "botName": "T6_2H_WILDSTAFF@3",
        "humanName": "Master'sWildStaff"
    },
    "5748": {
        "botName": "T7_2H_WILDSTAFF",
        "humanName": "Grandmaster'sWildStaff"
    },
    "5749": {
        "botName": "T7_2H_WILDSTAFF@1",
        "humanName": "Grandmaster'sWildStaff"
    },
    "5750": {
        "botName": "T7_2H_WILDSTAFF@2",
        "humanName": "Grandmaster'sWildStaff"
    },
    "5751": {
        "botName": "T7_2H_WILDSTAFF@3",
        "humanName": "Grandmaster'sWildStaff"
    },
    "5752": {
        "botName": "T8_2H_WILDSTAFF",
        "humanName": "Elder'sWildStaff"
    },
    "5753": {
        "botName": "T8_2H_WILDSTAFF@1",
        "humanName": "Elder'sWildStaff"
    },
    "5754": {
        "botName": "T8_2H_WILDSTAFF@2",
        "humanName": "Elder'sWildStaff"
    },
    "5755": {
        "botName": "T8_2H_WILDSTAFF@3",
        "humanName": "Elder'sWildStaff"
    },
    "5756": {
        "botName": "T4_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Adept'sDruidicStaff"
    },
    "5757": {
        "botName": "T4_MAIN_NATURESTAFF_KEEPER@1",
        "humanName": "Adept'sDruidicStaff"
    },
    "5758": {
        "botName": "T4_MAIN_NATURESTAFF_KEEPER@2",
        "humanName": "Adept'sDruidicStaff"
    },
    "5759": {
        "botName": "T4_MAIN_NATURESTAFF_KEEPER@3",
        "humanName": "Adept'sDruidicStaff"
    },
    "5760": {
        "botName": "T5_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Expert'sDruidicStaff"
    },
    "5761": {
        "botName": "T5_MAIN_NATURESTAFF_KEEPER@1",
        "humanName": "Expert'sDruidicStaff"
    },
    "5762": {
        "botName": "T5_MAIN_NATURESTAFF_KEEPER@2",
        "humanName": "Expert'sDruidicStaff"
    },
    "5763": {
        "botName": "T5_MAIN_NATURESTAFF_KEEPER@3",
        "humanName": "Expert'sDruidicStaff"
    },
    "5764": {
        "botName": "T6_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Master'sDruidicStaff"
    },
    "5765": {
        "botName": "T6_MAIN_NATURESTAFF_KEEPER@1",
        "humanName": "Master'sDruidicStaff"
    },
    "5766": {
        "botName": "T6_MAIN_NATURESTAFF_KEEPER@2",
        "humanName": "Master'sDruidicStaff"
    },
    "5767": {
        "botName": "T6_MAIN_NATURESTAFF_KEEPER@3",
        "humanName": "Master'sDruidicStaff"
    },
    "5768": {
        "botName": "T7_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Grandmaster'sDruidicStaff"
    },
    "5769": {
        "botName": "T7_MAIN_NATURESTAFF_KEEPER@1",
        "humanName": "Grandmaster'sDruidicStaff"
    },
    "5770": {
        "botName": "T7_MAIN_NATURESTAFF_KEEPER@2",
        "humanName": "Grandmaster'sDruidicStaff"
    },
    "5771": {
        "botName": "T7_MAIN_NATURESTAFF_KEEPER@3",
        "humanName": "Grandmaster'sDruidicStaff"
    },
    "5772": {
        "botName": "T8_MAIN_NATURESTAFF_KEEPER",
        "humanName": "Elder'sDruidicStaff"
    },
    "5773": {
        "botName": "T8_MAIN_NATURESTAFF_KEEPER@1",
        "humanName": "Elder'sDruidicStaff"
    },
    "5774": {
        "botName": "T8_MAIN_NATURESTAFF_KEEPER@2",
        "humanName": "Elder'sDruidicStaff"
    },
    "5775": {
        "botName": "T8_MAIN_NATURESTAFF_KEEPER@3",
        "humanName": "Elder'sDruidicStaff"
    },
    "5776": {
        "botName": "T4_2H_NATURESTAFF_HELL",
        "humanName": "Adept'sBlightStaff"
    },
    "5777": {
        "botName": "T4_2H_NATURESTAFF_HELL@1",
        "humanName": "Adept'sBlightStaff"
    },
    "5778": {
        "botName": "T4_2H_NATURESTAFF_HELL@2",
        "humanName": "Adept'sBlightStaff"
    },
    "5779": {
        "botName": "T4_2H_NATURESTAFF_HELL@3",
        "humanName": "Adept'sBlightStaff"
    },
    "5780": {
        "botName": "T5_2H_NATURESTAFF_HELL",
        "humanName": "Expert'sBlightStaff"
    },
    "5781": {
        "botName": "T5_2H_NATURESTAFF_HELL@1",
        "humanName": "Expert'sBlightStaff"
    },
    "5782": {
        "botName": "T5_2H_NATURESTAFF_HELL@2",
        "humanName": "Expert'sBlightStaff"
    },
    "5783": {
        "botName": "T5_2H_NATURESTAFF_HELL@3",
        "humanName": "Expert'sBlightStaff"
    },
    "5784": {
        "botName": "T6_2H_NATURESTAFF_HELL",
        "humanName": "Master'sBlightStaff"
    },
    "5785": {
        "botName": "T6_2H_NATURESTAFF_HELL@1",
        "humanName": "Master'sBlightStaff"
    },
    "5786": {
        "botName": "T6_2H_NATURESTAFF_HELL@2",
        "humanName": "Master'sBlightStaff"
    },
    "5787": {
        "botName": "T6_2H_NATURESTAFF_HELL@3",
        "humanName": "Master'sBlightStaff"
    },
    "5788": {
        "botName": "T7_2H_NATURESTAFF_HELL",
        "humanName": "Grandmaster'sBlightStaff"
    },
    "5789": {
        "botName": "T7_2H_NATURESTAFF_HELL@1",
        "humanName": "Grandmaster'sBlightStaff"
    },
    "5790": {
        "botName": "T7_2H_NATURESTAFF_HELL@2",
        "humanName": "Grandmaster'sBlightStaff"
    },
    "5791": {
        "botName": "T7_2H_NATURESTAFF_HELL@3",
        "humanName": "Grandmaster'sBlightStaff"
    },
    "5792": {
        "botName": "T8_2H_NATURESTAFF_HELL",
        "humanName": "Elder'sBlightStaff"
    },
    "5793": {
        "botName": "T8_2H_NATURESTAFF_HELL@1",
        "humanName": "Elder'sBlightStaff"
    },
    "5794": {
        "botName": "T8_2H_NATURESTAFF_HELL@2",
        "humanName": "Elder'sBlightStaff"
    },
    "5795": {
        "botName": "T8_2H_NATURESTAFF_HELL@3",
        "humanName": "Elder'sBlightStaff"
    },
    "5796": {
        "botName": "T4_2H_NATURESTAFF_KEEPER",
        "humanName": "Adept'sRampantStaff"
    },
    "5797": {
        "botName": "T4_2H_NATURESTAFF_KEEPER@1",
        "humanName": "Adept'sRampantStaff"
    },
    "5798": {
        "botName": "T4_2H_NATURESTAFF_KEEPER@2",
        "humanName": "Adept'sRampantStaff"
    },
    "5799": {
        "botName": "T4_2H_NATURESTAFF_KEEPER@3",
        "humanName": "Adept'sRampantStaff"
    },
    "5800": {
        "botName": "T5_2H_NATURESTAFF_KEEPER",
        "humanName": "Expert'sRampantStaff"
    },
    "5801": {
        "botName": "T5_2H_NATURESTAFF_KEEPER@1",
        "humanName": "Expert'sRampantStaff"
    },
    "5802": {
        "botName": "T5_2H_NATURESTAFF_KEEPER@2",
        "humanName": "Expert'sRampantStaff"
    },
    "5803": {
        "botName": "T5_2H_NATURESTAFF_KEEPER@3",
        "humanName": "Expert'sRampantStaff"
    },
    "5804": {
        "botName": "T6_2H_NATURESTAFF_KEEPER",
        "humanName": "Master'sRampantStaff"
    },
    "5805": {
        "botName": "T6_2H_NATURESTAFF_KEEPER@1",
        "humanName": "Master'sRampantStaff"
    },
    "5806": {
        "botName": "T6_2H_NATURESTAFF_KEEPER@2",
        "humanName": "Master'sRampantStaff"
    },
    "5807": {
        "botName": "T6_2H_NATURESTAFF_KEEPER@3",
        "humanName": "Master'sRampantStaff"
    },
    "5808": {
        "botName": "T7_2H_NATURESTAFF_KEEPER",
        "humanName": "Grandmaster'sRampantStaff"
    },
    "5809": {
        "botName": "T7_2H_NATURESTAFF_KEEPER@1",
        "humanName": "Grandmaster'sRampantStaff"
    },
    "5810": {
        "botName": "T7_2H_NATURESTAFF_KEEPER@2",
        "humanName": "Grandmaster'sRampantStaff"
    },
    "5811": {
        "botName": "T7_2H_NATURESTAFF_KEEPER@3",
        "humanName": "Grandmaster'sRampantStaff"
    },
    "5812": {
        "botName": "T8_2H_NATURESTAFF_KEEPER",
        "humanName": "Elder'sRampantStaff"
    },
    "5813": {
        "botName": "T8_2H_NATURESTAFF_KEEPER@1",
        "humanName": "Elder'sRampantStaff"
    },
    "5814": {
        "botName": "T8_2H_NATURESTAFF_KEEPER@2",
        "humanName": "Elder'sRampantStaff"
    },
    "5815": {
        "botName": "T8_2H_NATURESTAFF_KEEPER@3",
        "humanName": "Elder'sRampantStaff"
    },
    "5816": {
        "botName": "T4_MAIN_NATURESTAFF_AVALON",
        "humanName": "Adept'sIronrootStaff"
    },
    "5817": {
        "botName": "T4_MAIN_NATURESTAFF_AVALON@1",
        "humanName": "Adept'sIronrootStaff"
    },
    "5818": {
        "botName": "T4_MAIN_NATURESTAFF_AVALON@2",
        "humanName": "Adept'sIronrootStaff"
    },
    "5819": {
        "botName": "T4_MAIN_NATURESTAFF_AVALON@3",
        "humanName": "Adept'sIronrootStaff"
    },
    "5820": {
        "botName": "T5_MAIN_NATURESTAFF_AVALON",
        "humanName": "Expert'sIronrootStaff"
    },
    "5821": {
        "botName": "T5_MAIN_NATURESTAFF_AVALON@1",
        "humanName": "Expert'sIronrootStaff"
    },
    "5822": {
        "botName": "T5_MAIN_NATURESTAFF_AVALON@2",
        "humanName": "Expert'sIronrootStaff"
    },
    "5823": {
        "botName": "T5_MAIN_NATURESTAFF_AVALON@3",
        "humanName": "Expert'sIronrootStaff"
    },
    "5824": {
        "botName": "T6_MAIN_NATURESTAFF_AVALON",
        "humanName": "Master'sIronrootStaff"
    },
    "5825": {
        "botName": "T6_MAIN_NATURESTAFF_AVALON@1",
        "humanName": "Master'sIronrootStaff"
    },
    "5826": {
        "botName": "T6_MAIN_NATURESTAFF_AVALON@2",
        "humanName": "Master'sIronrootStaff"
    },
    "5827": {
        "botName": "T6_MAIN_NATURESTAFF_AVALON@3",
        "humanName": "Master'sIronrootStaff"
    },
    "5828": {
        "botName": "T7_MAIN_NATURESTAFF_AVALON",
        "humanName": "Grandmaster'sIronrootStaff"
    },
    "5829": {
        "botName": "T7_MAIN_NATURESTAFF_AVALON@1",
        "humanName": "Grandmaster'sIronrootStaff"
    },
    "5830": {
        "botName": "T7_MAIN_NATURESTAFF_AVALON@2",
        "humanName": "Grandmaster'sIronrootStaff"
    },
    "5831": {
        "botName": "T7_MAIN_NATURESTAFF_AVALON@3",
        "humanName": "Grandmaster'sIronrootStaff"
    },
    "5832": {
        "botName": "T8_MAIN_NATURESTAFF_AVALON",
        "humanName": "Elder'sIronrootStaff"
    },
    "5833": {
        "botName": "T8_MAIN_NATURESTAFF_AVALON@1",
        "humanName": "Elder'sIronrootStaff"
    },
    "5834": {
        "botName": "T8_MAIN_NATURESTAFF_AVALON@2",
        "humanName": "Elder'sIronrootStaff"
    },
    "5835": {
        "botName": "T8_MAIN_NATURESTAFF_AVALON@3",
        "humanName": "Elder'sIronrootStaff"
    },
    "5836": {
        "botName": "T3_MAIN_DAGGER",
        "humanName": "Journeyman'sDagger"
    },
    "5837": {
        "botName": "T4_MAIN_DAGGER",
        "humanName": "Adept'sDagger"
    },
    "5838": {
        "botName": "T4_MAIN_DAGGER@1",
        "humanName": "Adept'sDagger"
    },
    "5839": {
        "botName": "T4_MAIN_DAGGER@2",
        "humanName": "Adept'sDagger"
    },
    "5840": {
        "botName": "T4_MAIN_DAGGER@3",
        "humanName": "Adept'sDagger"
    },
    "5841": {
        "botName": "T5_MAIN_DAGGER",
        "humanName": "Expert'sDagger"
    },
    "5842": {
        "botName": "T5_MAIN_DAGGER@1",
        "humanName": "Expert'sDagger"
    },
    "5843": {
        "botName": "T5_MAIN_DAGGER@2",
        "humanName": "Expert'sDagger"
    },
    "5844": {
        "botName": "T5_MAIN_DAGGER@3",
        "humanName": "Expert'sDagger"
    },
    "5845": {
        "botName": "T6_MAIN_DAGGER",
        "humanName": "Master'sDagger"
    },
    "5846": {
        "botName": "T6_MAIN_DAGGER@1",
        "humanName": "Master'sDagger"
    },
    "5847": {
        "botName": "T6_MAIN_DAGGER@2",
        "humanName": "Master'sDagger"
    },
    "5848": {
        "botName": "T6_MAIN_DAGGER@3",
        "humanName": "Master'sDagger"
    },
    "5849": {
        "botName": "T7_MAIN_DAGGER",
        "humanName": "Grandmaster'sDagger"
    },
    "5850": {
        "botName": "T7_MAIN_DAGGER@1",
        "humanName": "Grandmaster'sDagger"
    },
    "5851": {
        "botName": "T7_MAIN_DAGGER@2",
        "humanName": "Grandmaster'sDagger"
    },
    "5852": {
        "botName": "T7_MAIN_DAGGER@3",
        "humanName": "Grandmaster'sDagger"
    },
    "5853": {
        "botName": "T8_MAIN_DAGGER",
        "humanName": "Elder'sDagger"
    },
    "5854": {
        "botName": "T8_MAIN_DAGGER@1",
        "humanName": "Elder'sDagger"
    },
    "5855": {
        "botName": "T8_MAIN_DAGGER@2",
        "humanName": "Elder'sDagger"
    },
    "5856": {
        "botName": "T8_MAIN_DAGGER@3",
        "humanName": "Elder'sDagger"
    },
    "5857": {
        "botName": "T4_2H_DAGGERPAIR",
        "humanName": "Adept'sDaggerPair"
    },
    "5858": {
        "botName": "T4_2H_DAGGERPAIR@1",
        "humanName": "Adept'sDaggerPair"
    },
    "5859": {
        "botName": "T4_2H_DAGGERPAIR@2",
        "humanName": "Adept'sDaggerPair"
    },
    "5860": {
        "botName": "T4_2H_DAGGERPAIR@3",
        "humanName": "Adept'sDaggerPair"
    },
    "5861": {
        "botName": "T5_2H_DAGGERPAIR",
        "humanName": "Expert'sDaggerPair"
    },
    "5862": {
        "botName": "T5_2H_DAGGERPAIR@1",
        "humanName": "Expert'sDaggerPair"
    },
    "5863": {
        "botName": "T5_2H_DAGGERPAIR@2",
        "humanName": "Expert'sDaggerPair"
    },
    "5864": {
        "botName": "T5_2H_DAGGERPAIR@3",
        "humanName": "Expert'sDaggerPair"
    },
    "5865": {
        "botName": "T6_2H_DAGGERPAIR",
        "humanName": "Master'sDaggerPair"
    },
    "5866": {
        "botName": "T6_2H_DAGGERPAIR@1",
        "humanName": "Master'sDaggerPair"
    },
    "5867": {
        "botName": "T6_2H_DAGGERPAIR@2",
        "humanName": "Master'sDaggerPair"
    },
    "5868": {
        "botName": "T6_2H_DAGGERPAIR@3",
        "humanName": "Master'sDaggerPair"
    },
    "5869": {
        "botName": "T7_2H_DAGGERPAIR",
        "humanName": "Grandmaster'sDaggerPair"
    },
    "5870": {
        "botName": "T7_2H_DAGGERPAIR@1",
        "humanName": "Grandmaster'sDaggerPair"
    },
    "5871": {
        "botName": "T7_2H_DAGGERPAIR@2",
        "humanName": "Grandmaster'sDaggerPair"
    },
    "5872": {
        "botName": "T7_2H_DAGGERPAIR@3",
        "humanName": "Grandmaster'sDaggerPair"
    },
    "5873": {
        "botName": "T8_2H_DAGGERPAIR",
        "humanName": "Elder'sDaggerPair"
    },
    "5874": {
        "botName": "T8_2H_DAGGERPAIR@1",
        "humanName": "Elder'sDaggerPair"
    },
    "5875": {
        "botName": "T8_2H_DAGGERPAIR@2",
        "humanName": "Elder'sDaggerPair"
    },
    "5876": {
        "botName": "T8_2H_DAGGERPAIR@3",
        "humanName": "Elder'sDaggerPair"
    },
    "5877": {
        "botName": "T4_2H_CLAWPAIR",
        "humanName": "Adept'sClaws"
    },
    "5878": {
        "botName": "T4_2H_CLAWPAIR@1",
        "humanName": "Adept'sClaws"
    },
    "5879": {
        "botName": "T4_2H_CLAWPAIR@2",
        "humanName": "Adept'sClaws"
    },
    "5880": {
        "botName": "T4_2H_CLAWPAIR@3",
        "humanName": "Adept'sClaws"
    },
    "5881": {
        "botName": "T5_2H_CLAWPAIR",
        "humanName": "Expert'sClaws"
    },
    "5882": {
        "botName": "T5_2H_CLAWPAIR@1",
        "humanName": "Expert'sClaws"
    },
    "5883": {
        "botName": "T5_2H_CLAWPAIR@2",
        "humanName": "Expert'sClaws"
    },
    "5884": {
        "botName": "T5_2H_CLAWPAIR@3",
        "humanName": "Expert'sClaws"
    },
    "5885": {
        "botName": "T6_2H_CLAWPAIR",
        "humanName": "Master'sClaws"
    },
    "5886": {
        "botName": "T6_2H_CLAWPAIR@1",
        "humanName": "Master'sClaws"
    },
    "5887": {
        "botName": "T6_2H_CLAWPAIR@2",
        "humanName": "Master'sClaws"
    },
    "5888": {
        "botName": "T6_2H_CLAWPAIR@3",
        "humanName": "Master'sClaws"
    },
    "5889": {
        "botName": "T7_2H_CLAWPAIR",
        "humanName": "Grandmaster'sClaws"
    },
    "5890": {
        "botName": "T7_2H_CLAWPAIR@1",
        "humanName": "Grandmaster'sClaws"
    },
    "5891": {
        "botName": "T7_2H_CLAWPAIR@2",
        "humanName": "Grandmaster'sClaws"
    },
    "5892": {
        "botName": "T7_2H_CLAWPAIR@3",
        "humanName": "Grandmaster'sClaws"
    },
    "5893": {
        "botName": "T8_2H_CLAWPAIR",
        "humanName": "Elder'sClaws"
    },
    "5894": {
        "botName": "T8_2H_CLAWPAIR@1",
        "humanName": "Elder'sClaws"
    },
    "5895": {
        "botName": "T8_2H_CLAWPAIR@2",
        "humanName": "Elder'sClaws"
    },
    "5896": {
        "botName": "T8_2H_CLAWPAIR@3",
        "humanName": "Elder'sClaws"
    },
    "5897": {
        "botName": "T4_MAIN_RAPIER_MORGANA",
        "humanName": "Adept'sBloodletter"
    },
    "5898": {
        "botName": "T4_MAIN_RAPIER_MORGANA@1",
        "humanName": "Adept'sBloodletter"
    },
    "5899": {
        "botName": "T4_MAIN_RAPIER_MORGANA@2",
        "humanName": "Adept'sBloodletter"
    },
    "5900": {
        "botName": "T4_MAIN_RAPIER_MORGANA@3",
        "humanName": "Adept'sBloodletter"
    },
    "5901": {
        "botName": "T5_MAIN_RAPIER_MORGANA",
        "humanName": "Expert'sBloodletter"
    },
    "5902": {
        "botName": "T5_MAIN_RAPIER_MORGANA@1",
        "humanName": "Expert'sBloodletter"
    },
    "5903": {
        "botName": "T5_MAIN_RAPIER_MORGANA@2",
        "humanName": "Expert'sBloodletter"
    },
    "5904": {
        "botName": "T5_MAIN_RAPIER_MORGANA@3",
        "humanName": "Expert'sBloodletter"
    },
    "5905": {
        "botName": "T6_MAIN_RAPIER_MORGANA",
        "humanName": "Master'sBloodletter"
    },
    "5906": {
        "botName": "T6_MAIN_RAPIER_MORGANA@1",
        "humanName": "Master'sBloodletter"
    },
    "5907": {
        "botName": "T6_MAIN_RAPIER_MORGANA@2",
        "humanName": "Master'sBloodletter"
    },
    "5908": {
        "botName": "T6_MAIN_RAPIER_MORGANA@3",
        "humanName": "Master'sBloodletter"
    },
    "5909": {
        "botName": "T7_MAIN_RAPIER_MORGANA",
        "humanName": "Grandmaster'sBloodletter"
    },
    "5910": {
        "botName": "T7_MAIN_RAPIER_MORGANA@1",
        "humanName": "Grandmaster'sBloodletter"
    },
    "5911": {
        "botName": "T7_MAIN_RAPIER_MORGANA@2",
        "humanName": "Grandmaster'sBloodletter"
    },
    "5912": {
        "botName": "T7_MAIN_RAPIER_MORGANA@3",
        "humanName": "Grandmaster'sBloodletter"
    },
    "5913": {
        "botName": "T8_MAIN_RAPIER_MORGANA",
        "humanName": "Elder'sBloodletter"
    },
    "5914": {
        "botName": "T8_MAIN_RAPIER_MORGANA@1",
        "humanName": "Elder'sBloodletter"
    },
    "5915": {
        "botName": "T8_MAIN_RAPIER_MORGANA@2",
        "humanName": "Elder'sBloodletter"
    },
    "5916": {
        "botName": "T8_MAIN_RAPIER_MORGANA@3",
        "humanName": "Elder'sBloodletter"
    },
    "5917": {
        "botName": "T4_MAIN_DAGGER_HELL",
        "humanName": "Adept'sDemonfang"
    },
    "5918": {
        "botName": "T4_MAIN_DAGGER_HELL@1",
        "humanName": "Adept'sDemonfang"
    },
    "5919": {
        "botName": "T4_MAIN_DAGGER_HELL@2",
        "humanName": "Adept'sDemonfang"
    },
    "5920": {
        "botName": "T4_MAIN_DAGGER_HELL@3",
        "humanName": "Adept'sDemonfang"
    },
    "5921": {
        "botName": "T5_MAIN_DAGGER_HELL",
        "humanName": "Expert'sDemonfang"
    },
    "5922": {
        "botName": "T5_MAIN_DAGGER_HELL@1",
        "humanName": "Expert'sDemonfang"
    },
    "5923": {
        "botName": "T5_MAIN_DAGGER_HELL@2",
        "humanName": "Expert'sDemonfang"
    },
    "5924": {
        "botName": "T5_MAIN_DAGGER_HELL@3",
        "humanName": "Expert'sDemonfang"
    },
    "5925": {
        "botName": "T6_MAIN_DAGGER_HELL",
        "humanName": "Master'sDemonfang"
    },
    "5926": {
        "botName": "T6_MAIN_DAGGER_HELL@1",
        "humanName": "Master'sDemonfang"
    },
    "5927": {
        "botName": "T6_MAIN_DAGGER_HELL@2",
        "humanName": "Master'sDemonfang"
    },
    "5928": {
        "botName": "T6_MAIN_DAGGER_HELL@3",
        "humanName": "Master'sDemonfang"
    },
    "5929": {
        "botName": "T7_MAIN_DAGGER_HELL",
        "humanName": "Grandmaster'sDemonfang"
    },
    "5930": {
        "botName": "T7_MAIN_DAGGER_HELL@1",
        "humanName": "Grandmaster'sDemonfang"
    },
    "5931": {
        "botName": "T7_MAIN_DAGGER_HELL@2",
        "humanName": "Grandmaster'sDemonfang"
    },
    "5932": {
        "botName": "T7_MAIN_DAGGER_HELL@3",
        "humanName": "Grandmaster'sDemonfang"
    },
    "5933": {
        "botName": "T8_MAIN_DAGGER_HELL",
        "humanName": "Elder'sDemonfang"
    },
    "5934": {
        "botName": "T8_MAIN_DAGGER_HELL@1",
        "humanName": "Elder'sDemonfang"
    },
    "5935": {
        "botName": "T8_MAIN_DAGGER_HELL@2",
        "humanName": "Elder'sDemonfang"
    },
    "5936": {
        "botName": "T8_MAIN_DAGGER_HELL@3",
        "humanName": "Elder'sDemonfang"
    },
    "5937": {
        "botName": "T4_2H_IRONGAUNTLETS_HELL",
        "humanName": "Adept'sBlackHands"
    },
    "5938": {
        "botName": "T4_2H_IRONGAUNTLETS_HELL@1",
        "humanName": "Adept'sBlackHands"
    },
    "5939": {
        "botName": "T4_2H_IRONGAUNTLETS_HELL@2",
        "humanName": "Adept'sBlackHands"
    },
    "5940": {
        "botName": "T4_2H_IRONGAUNTLETS_HELL@3",
        "humanName": "Adept'sBlackHands"
    },
    "5941": {
        "botName": "T5_2H_IRONGAUNTLETS_HELL",
        "humanName": "Expert'sBlackHands"
    },
    "5942": {
        "botName": "T5_2H_IRONGAUNTLETS_HELL@1",
        "humanName": "Expert'sBlackHands"
    },
    "5943": {
        "botName": "T5_2H_IRONGAUNTLETS_HELL@2",
        "humanName": "Expert'sBlackHands"
    },
    "5944": {
        "botName": "T5_2H_IRONGAUNTLETS_HELL@3",
        "humanName": "Expert'sBlackHands"
    },
    "5945": {
        "botName": "T6_2H_IRONGAUNTLETS_HELL",
        "humanName": "Master'sBlackHands"
    },
    "5946": {
        "botName": "T6_2H_IRONGAUNTLETS_HELL@1",
        "humanName": "Master'sBlackHands"
    },
    "5947": {
        "botName": "T6_2H_IRONGAUNTLETS_HELL@2",
        "humanName": "Master'sBlackHands"
    },
    "5948": {
        "botName": "T6_2H_IRONGAUNTLETS_HELL@3",
        "humanName": "Master'sBlackHands"
    },
    "5949": {
        "botName": "T7_2H_IRONGAUNTLETS_HELL",
        "humanName": "Grandmaster'sBlackHands"
    },
    "5950": {
        "botName": "T7_2H_IRONGAUNTLETS_HELL@1",
        "humanName": "Grandmaster'sBlackHands"
    },
    "5951": {
        "botName": "T7_2H_IRONGAUNTLETS_HELL@2",
        "humanName": "Grandmaster'sBlackHands"
    },
    "5952": {
        "botName": "T7_2H_IRONGAUNTLETS_HELL@3",
        "humanName": "Grandmaster'sBlackHands"
    },
    "5953": {
        "botName": "T8_2H_IRONGAUNTLETS_HELL",
        "humanName": "Elder'sBlackHands"
    },
    "5954": {
        "botName": "T8_2H_IRONGAUNTLETS_HELL@1",
        "humanName": "Elder'sBlackHands"
    },
    "5955": {
        "botName": "T8_2H_IRONGAUNTLETS_HELL@2",
        "humanName": "Elder'sBlackHands"
    },
    "5956": {
        "botName": "T8_2H_IRONGAUNTLETS_HELL@3",
        "humanName": "Elder'sBlackHands"
    },
    "5957": {
        "botName": "T4_2H_DUALSICKLE_UNDEAD",
        "humanName": "Adept'sDeathgivers"
    },
    "5958": {
        "botName": "T4_2H_DUALSICKLE_UNDEAD@1",
        "humanName": "Adept'sDeathgivers"
    },
    "5959": {
        "botName": "T4_2H_DUALSICKLE_UNDEAD@2",
        "humanName": "Adept'sDeathgivers"
    },
    "5960": {
        "botName": "T4_2H_DUALSICKLE_UNDEAD@3",
        "humanName": "Adept'sDeathgivers"
    },
    "5961": {
        "botName": "T5_2H_DUALSICKLE_UNDEAD",
        "humanName": "Expert'sDeathgivers"
    },
    "5962": {
        "botName": "T5_2H_DUALSICKLE_UNDEAD@1",
        "humanName": "Expert'sDeathgivers"
    },
    "5963": {
        "botName": "T5_2H_DUALSICKLE_UNDEAD@2",
        "humanName": "Expert'sDeathgivers"
    },
    "5964": {
        "botName": "T5_2H_DUALSICKLE_UNDEAD@3",
        "humanName": "Expert'sDeathgivers"
    },
    "5965": {
        "botName": "T6_2H_DUALSICKLE_UNDEAD",
        "humanName": "Master'sDeathgivers"
    },
    "5966": {
        "botName": "T6_2H_DUALSICKLE_UNDEAD@1",
        "humanName": "Master'sDeathgivers"
    },
    "5967": {
        "botName": "T6_2H_DUALSICKLE_UNDEAD@2",
        "humanName": "Master'sDeathgivers"
    },
    "5968": {
        "botName": "T6_2H_DUALSICKLE_UNDEAD@3",
        "humanName": "Master'sDeathgivers"
    },
    "5969": {
        "botName": "T7_2H_DUALSICKLE_UNDEAD",
        "humanName": "Grandmaster'sDeathgivers"
    },
    "5970": {
        "botName": "T7_2H_DUALSICKLE_UNDEAD@1",
        "humanName": "Grandmaster'sDeathgivers"
    },
    "5971": {
        "botName": "T7_2H_DUALSICKLE_UNDEAD@2",
        "humanName": "Grandmaster'sDeathgivers"
    },
    "5972": {
        "botName": "T7_2H_DUALSICKLE_UNDEAD@3",
        "humanName": "Grandmaster'sDeathgivers"
    },
    "5973": {
        "botName": "T8_2H_DUALSICKLE_UNDEAD",
        "humanName": "Elder'sDeathgivers"
    },
    "5974": {
        "botName": "T8_2H_DUALSICKLE_UNDEAD@1",
        "humanName": "Elder'sDeathgivers"
    },
    "5975": {
        "botName": "T8_2H_DUALSICKLE_UNDEAD@2",
        "humanName": "Elder'sDeathgivers"
    },
    "5976": {
        "botName": "T8_2H_DUALSICKLE_UNDEAD@3",
        "humanName": "Elder'sDeathgivers"
    },
    "5977": {
        "botName": "T4_2H_DAGGER_KATAR_AVALON",
        "humanName": "Adept'sBridledFury"
    },
    "5978": {
        "botName": "T4_2H_DAGGER_KATAR_AVALON@1",
        "humanName": "Adept'sBridledFury"
    },
    "5979": {
        "botName": "T4_2H_DAGGER_KATAR_AVALON@2",
        "humanName": "Adept'sBridledFury"
    },
    "5980": {
        "botName": "T4_2H_DAGGER_KATAR_AVALON@3",
        "humanName": "Adept'sBridledFury"
    },
    "5981": {
        "botName": "T5_2H_DAGGER_KATAR_AVALON",
        "humanName": "Expert'sBridledFury"
    },
    "5982": {
        "botName": "T5_2H_DAGGER_KATAR_AVALON@1",
        "humanName": "Expert'sBridledFury"
    },
    "5983": {
        "botName": "T5_2H_DAGGER_KATAR_AVALON@2",
        "humanName": "Expert'sBridledFury"
    },
    "5984": {
        "botName": "T5_2H_DAGGER_KATAR_AVALON@3",
        "humanName": "Expert'sBridledFury"
    },
    "5985": {
        "botName": "T6_2H_DAGGER_KATAR_AVALON",
        "humanName": "Master'sBridledFury"
    },
    "5986": {
        "botName": "T6_2H_DAGGER_KATAR_AVALON@1",
        "humanName": "Master'sBridledFury"
    },
    "5987": {
        "botName": "T6_2H_DAGGER_KATAR_AVALON@2",
        "humanName": "Master'sBridledFury"
    },
    "5988": {
        "botName": "T6_2H_DAGGER_KATAR_AVALON@3",
        "humanName": "Master'sBridledFury"
    },
    "5989": {
        "botName": "T7_2H_DAGGER_KATAR_AVALON",
        "humanName": "Grandmaster'sBridledFury"
    },
    "5990": {
        "botName": "T7_2H_DAGGER_KATAR_AVALON@1",
        "humanName": "Grandmaster'sBridledFury"
    },
    "5991": {
        "botName": "T7_2H_DAGGER_KATAR_AVALON@2",
        "humanName": "Grandmaster'sBridledFury"
    },
    "5992": {
        "botName": "T7_2H_DAGGER_KATAR_AVALON@3",
        "humanName": "Grandmaster'sBridledFury"
    },
    "5993": {
        "botName": "T8_2H_DAGGER_KATAR_AVALON",
        "humanName": "Elder'sBridledFury"
    },
    "5994": {
        "botName": "T8_2H_DAGGER_KATAR_AVALON@1",
        "humanName": "Elder'sBridledFury"
    },
    "5995": {
        "botName": "T8_2H_DAGGER_KATAR_AVALON@2",
        "humanName": "Elder'sBridledFury"
    },
    "5996": {
        "botName": "T8_2H_DAGGER_KATAR_AVALON@3",
        "humanName": "Elder'sBridledFury"
    },
    "5997": {
        "botName": "T3_MAIN_SPEAR",
        "humanName": "Journeyman'sSpear"
    },
    "5998": {
        "botName": "T4_MAIN_SPEAR",
        "humanName": "Adept'sSpear"
    },
    "5999": {
        "botName": "T4_MAIN_SPEAR@1",
        "humanName": "Adept'sSpear"
    },
    "6000": {
        "botName": "T4_MAIN_SPEAR@2",
        "humanName": "Adept'sSpear"
    },
    "6001": {
        "botName": "T4_MAIN_SPEAR@3",
        "humanName": "Adept'sSpear"
    },
    "6002": {
        "botName": "T5_MAIN_SPEAR",
        "humanName": "Expert'sSpear"
    },
    "6003": {
        "botName": "T5_MAIN_SPEAR@1",
        "humanName": "Expert'sSpear"
    },
    "6004": {
        "botName": "T5_MAIN_SPEAR@2",
        "humanName": "Expert'sSpear"
    },
    "6005": {
        "botName": "T5_MAIN_SPEAR@3",
        "humanName": "Expert'sSpear"
    },
    "6006": {
        "botName": "T6_MAIN_SPEAR",
        "humanName": "Master'sSpear"
    },
    "6007": {
        "botName": "T6_MAIN_SPEAR@1",
        "humanName": "Master'sSpear"
    },
    "6008": {
        "botName": "T6_MAIN_SPEAR@2",
        "humanName": "Master'sSpear"
    },
    "6009": {
        "botName": "T6_MAIN_SPEAR@3",
        "humanName": "Master'sSpear"
    },
    "6010": {
        "botName": "T7_MAIN_SPEAR",
        "humanName": "Grandmaster'sSpear"
    },
    "6011": {
        "botName": "T7_MAIN_SPEAR@1",
        "humanName": "Grandmaster'sSpear"
    },
    "6012": {
        "botName": "T7_MAIN_SPEAR@2",
        "humanName": "Grandmaster'sSpear"
    },
    "6013": {
        "botName": "T7_MAIN_SPEAR@3",
        "humanName": "Grandmaster'sSpear"
    },
    "6014": {
        "botName": "T8_MAIN_SPEAR",
        "humanName": "Elder'sSpear"
    },
    "6015": {
        "botName": "T8_MAIN_SPEAR@1",
        "humanName": "Elder'sSpear"
    },
    "6016": {
        "botName": "T8_MAIN_SPEAR@2",
        "humanName": "Elder'sSpear"
    },
    "6017": {
        "botName": "T8_MAIN_SPEAR@3",
        "humanName": "Elder'sSpear"
    },
    "6018": {
        "botName": "T4_2H_SPEAR",
        "humanName": "Adept'sPike"
    },
    "6019": {
        "botName": "T4_2H_SPEAR@1",
        "humanName": "Adept'sPike"
    },
    "6020": {
        "botName": "T4_2H_SPEAR@2",
        "humanName": "Adept'sPike"
    },
    "6021": {
        "botName": "T4_2H_SPEAR@3",
        "humanName": "Adept'sPike"
    },
    "6022": {
        "botName": "T5_2H_SPEAR",
        "humanName": "Expert'sPike"
    },
    "6023": {
        "botName": "T5_2H_SPEAR@1",
        "humanName": "Expert'sPike"
    },
    "6024": {
        "botName": "T5_2H_SPEAR@2",
        "humanName": "Expert'sPike"
    },
    "6025": {
        "botName": "T5_2H_SPEAR@3",
        "humanName": "Expert'sPike"
    },
    "6026": {
        "botName": "T6_2H_SPEAR",
        "humanName": "Master'sPike"
    },
    "6027": {
        "botName": "T6_2H_SPEAR@1",
        "humanName": "Master'sPike"
    },
    "6028": {
        "botName": "T6_2H_SPEAR@2",
        "humanName": "Master'sPike"
    },
    "6029": {
        "botName": "T6_2H_SPEAR@3",
        "humanName": "Master'sPike"
    },
    "6030": {
        "botName": "T7_2H_SPEAR",
        "humanName": "Grandmaster'sPike"
    },
    "6031": {
        "botName": "T7_2H_SPEAR@1",
        "humanName": "Grandmaster'sPike"
    },
    "6032": {
        "botName": "T7_2H_SPEAR@2",
        "humanName": "Grandmaster'sPike"
    },
    "6033": {
        "botName": "T7_2H_SPEAR@3",
        "humanName": "Grandmaster'sPike"
    },
    "6034": {
        "botName": "T8_2H_SPEAR",
        "humanName": "Elder'sPike"
    },
    "6035": {
        "botName": "T8_2H_SPEAR@1",
        "humanName": "Elder'sPike"
    },
    "6036": {
        "botName": "T8_2H_SPEAR@2",
        "humanName": "Elder'sPike"
    },
    "6037": {
        "botName": "T8_2H_SPEAR@3",
        "humanName": "Elder'sPike"
    },
    "6038": {
        "botName": "T4_2H_GLAIVE",
        "humanName": "Adept'sGlaive"
    },
    "6039": {
        "botName": "T4_2H_GLAIVE@1",
        "humanName": "Adept'sGlaive"
    },
    "6040": {
        "botName": "T4_2H_GLAIVE@2",
        "humanName": "Adept'sGlaive"
    },
    "6041": {
        "botName": "T4_2H_GLAIVE@3",
        "humanName": "Adept'sGlaive"
    },
    "6042": {
        "botName": "T5_2H_GLAIVE",
        "humanName": "Expert'sGlaive"
    },
    "6043": {
        "botName": "T5_2H_GLAIVE@1",
        "humanName": "Expert'sGlaive"
    },
    "6044": {
        "botName": "T5_2H_GLAIVE@2",
        "humanName": "Expert'sGlaive"
    },
    "6045": {
        "botName": "T5_2H_GLAIVE@3",
        "humanName": "Expert'sGlaive"
    },
    "6046": {
        "botName": "T6_2H_GLAIVE",
        "humanName": "Master'sGlaive"
    },
    "6047": {
        "botName": "T6_2H_GLAIVE@1",
        "humanName": "Master'sGlaive"
    },
    "6048": {
        "botName": "T6_2H_GLAIVE@2",
        "humanName": "Master'sGlaive"
    },
    "6049": {
        "botName": "T6_2H_GLAIVE@3",
        "humanName": "Master'sGlaive"
    },
    "6050": {
        "botName": "T7_2H_GLAIVE",
        "humanName": "Grandmaster'sGlaive"
    },
    "6051": {
        "botName": "T7_2H_GLAIVE@1",
        "humanName": "Grandmaster'sGlaive"
    },
    "6052": {
        "botName": "T7_2H_GLAIVE@2",
        "humanName": "Grandmaster'sGlaive"
    },
    "6053": {
        "botName": "T7_2H_GLAIVE@3",
        "humanName": "Grandmaster'sGlaive"
    },
    "6054": {
        "botName": "T8_2H_GLAIVE",
        "humanName": "Elder'sGlaive"
    },
    "6055": {
        "botName": "T8_2H_GLAIVE@1",
        "humanName": "Elder'sGlaive"
    },
    "6056": {
        "botName": "T8_2H_GLAIVE@2",
        "humanName": "Elder'sGlaive"
    },
    "6057": {
        "botName": "T8_2H_GLAIVE@3",
        "humanName": "Elder'sGlaive"
    },
    "6058": {
        "botName": "T4_MAIN_SPEAR_KEEPER",
        "humanName": "Adept'sHeronSpear"
    },
    "6059": {
        "botName": "T4_MAIN_SPEAR_KEEPER@1",
        "humanName": "Adept'sHeronSpear"
    },
    "6060": {
        "botName": "T4_MAIN_SPEAR_KEEPER@2",
        "humanName": "Adept'sHeronSpear"
    },
    "6061": {
        "botName": "T4_MAIN_SPEAR_KEEPER@3",
        "humanName": "Adept'sHeronSpear"
    },
    "6062": {
        "botName": "T5_MAIN_SPEAR_KEEPER",
        "humanName": "Expert'sHeronSpear"
    },
    "6063": {
        "botName": "T5_MAIN_SPEAR_KEEPER@1",
        "humanName": "Expert'sHeronSpear"
    },
    "6064": {
        "botName": "T5_MAIN_SPEAR_KEEPER@2",
        "humanName": "Expert'sHeronSpear"
    },
    "6065": {
        "botName": "T5_MAIN_SPEAR_KEEPER@3",
        "humanName": "Expert'sHeronSpear"
    },
    "6066": {
        "botName": "T6_MAIN_SPEAR_KEEPER",
        "humanName": "Master'sHeronSpear"
    },
    "6067": {
        "botName": "T6_MAIN_SPEAR_KEEPER@1",
        "humanName": "Master'sHeronSpear"
    },
    "6068": {
        "botName": "T6_MAIN_SPEAR_KEEPER@2",
        "humanName": "Master'sHeronSpear"
    },
    "6069": {
        "botName": "T6_MAIN_SPEAR_KEEPER@3",
        "humanName": "Master'sHeronSpear"
    },
    "6070": {
        "botName": "T7_MAIN_SPEAR_KEEPER",
        "humanName": "Grandmaster'sHeronSpear"
    },
    "6071": {
        "botName": "T7_MAIN_SPEAR_KEEPER@1",
        "humanName": "Grandmaster'sHeronSpear"
    },
    "6072": {
        "botName": "T7_MAIN_SPEAR_KEEPER@2",
        "humanName": "Grandmaster'sHeronSpear"
    },
    "6073": {
        "botName": "T7_MAIN_SPEAR_KEEPER@3",
        "humanName": "Grandmaster'sHeronSpear"
    },
    "6074": {
        "botName": "T8_MAIN_SPEAR_KEEPER",
        "humanName": "Elder'sHeronSpear"
    },
    "6075": {
        "botName": "T8_MAIN_SPEAR_KEEPER@1",
        "humanName": "Elder'sHeronSpear"
    },
    "6076": {
        "botName": "T8_MAIN_SPEAR_KEEPER@2",
        "humanName": "Elder'sHeronSpear"
    },
    "6077": {
        "botName": "T8_MAIN_SPEAR_KEEPER@3",
        "humanName": "Elder'sHeronSpear"
    },
    "6078": {
        "botName": "T4_2H_HARPOON_HELL",
        "humanName": "Adept'sSpirithunter"
    },
    "6079": {
        "botName": "T4_2H_HARPOON_HELL@1",
        "humanName": "Adept'sSpirithunter"
    },
    "6080": {
        "botName": "T4_2H_HARPOON_HELL@2",
        "humanName": "Adept'sSpirithunter"
    },
    "6081": {
        "botName": "T4_2H_HARPOON_HELL@3",
        "humanName": "Adept'sSpirithunter"
    },
    "6082": {
        "botName": "T5_2H_HARPOON_HELL",
        "humanName": "Expert'sSpirithunter"
    },
    "6083": {
        "botName": "T5_2H_HARPOON_HELL@1",
        "humanName": "Expert'sSpirithunter"
    },
    "6084": {
        "botName": "T5_2H_HARPOON_HELL@2",
        "humanName": "Expert'sSpirithunter"
    },
    "6085": {
        "botName": "T5_2H_HARPOON_HELL@3",
        "humanName": "Expert'sSpirithunter"
    },
    "6086": {
        "botName": "T6_2H_HARPOON_HELL",
        "humanName": "Master'sSpirithunter"
    },
    "6087": {
        "botName": "T6_2H_HARPOON_HELL@1",
        "humanName": "Master'sSpirithunter"
    },
    "6088": {
        "botName": "T6_2H_HARPOON_HELL@2",
        "humanName": "Master'sSpirithunter"
    },
    "6089": {
        "botName": "T6_2H_HARPOON_HELL@3",
        "humanName": "Master'sSpirithunter"
    },
    "6090": {
        "botName": "T7_2H_HARPOON_HELL",
        "humanName": "Grandmaster'sSpirithunter"
    },
    "6091": {
        "botName": "T7_2H_HARPOON_HELL@1",
        "humanName": "Grandmaster'sSpirithunter"
    },
    "6092": {
        "botName": "T7_2H_HARPOON_HELL@2",
        "humanName": "Grandmaster'sSpirithunter"
    },
    "6093": {
        "botName": "T7_2H_HARPOON_HELL@3",
        "humanName": "Grandmaster'sSpirithunter"
    },
    "6094": {
        "botName": "T8_2H_HARPOON_HELL",
        "humanName": "Elder'sSpirithunter"
    },
    "6095": {
        "botName": "T8_2H_HARPOON_HELL@1",
        "humanName": "Elder'sSpirithunter"
    },
    "6096": {
        "botName": "T8_2H_HARPOON_HELL@2",
        "humanName": "Elder'sSpirithunter"
    },
    "6097": {
        "botName": "T8_2H_HARPOON_HELL@3",
        "humanName": "Elder'sSpirithunter"
    },
    "6098": {
        "botName": "T4_2H_TRIDENT_UNDEAD",
        "humanName": "Adept'sTrinitySpear"
    },
    "6099": {
        "botName": "T4_2H_TRIDENT_UNDEAD@1",
        "humanName": "Adept'sTrinitySpear"
    },
    "6100": {
        "botName": "T4_2H_TRIDENT_UNDEAD@2",
        "humanName": "Adept'sTrinitySpear"
    },
    "6101": {
        "botName": "T4_2H_TRIDENT_UNDEAD@3",
        "humanName": "Adept'sTrinitySpear"
    },
    "6102": {
        "botName": "T5_2H_TRIDENT_UNDEAD",
        "humanName": "Expert'sTrinitySpear"
    },
    "6103": {
        "botName": "T5_2H_TRIDENT_UNDEAD@1",
        "humanName": "Expert'sTrinitySpear"
    },
    "6104": {
        "botName": "T5_2H_TRIDENT_UNDEAD@2",
        "humanName": "Expert'sTrinitySpear"
    },
    "6105": {
        "botName": "T5_2H_TRIDENT_UNDEAD@3",
        "humanName": "Expert'sTrinitySpear"
    },
    "6106": {
        "botName": "T6_2H_TRIDENT_UNDEAD",
        "humanName": "Master'sTrinitySpear"
    },
    "6107": {
        "botName": "T6_2H_TRIDENT_UNDEAD@1",
        "humanName": "Master'sTrinitySpear"
    },
    "6108": {
        "botName": "T6_2H_TRIDENT_UNDEAD@2",
        "humanName": "Master'sTrinitySpear"
    },
    "6109": {
        "botName": "T6_2H_TRIDENT_UNDEAD@3",
        "humanName": "Master'sTrinitySpear"
    },
    "6110": {
        "botName": "T7_2H_TRIDENT_UNDEAD",
        "humanName": "Grandmaster'sTrinitySpear"
    },
    "6111": {
        "botName": "T7_2H_TRIDENT_UNDEAD@1",
        "humanName": "Grandmaster'sTrinitySpear"
    },
    "6112": {
        "botName": "T7_2H_TRIDENT_UNDEAD@2",
        "humanName": "Grandmaster'sTrinitySpear"
    },
    "6113": {
        "botName": "T7_2H_TRIDENT_UNDEAD@3",
        "humanName": "Grandmaster'sTrinitySpear"
    },
    "6114": {
        "botName": "T8_2H_TRIDENT_UNDEAD",
        "humanName": "Elder'sTrinitySpear"
    },
    "6115": {
        "botName": "T8_2H_TRIDENT_UNDEAD@1",
        "humanName": "Elder'sTrinitySpear"
    },
    "6116": {
        "botName": "T8_2H_TRIDENT_UNDEAD@2",
        "humanName": "Elder'sTrinitySpear"
    },
    "6117": {
        "botName": "T8_2H_TRIDENT_UNDEAD@3",
        "humanName": "Elder'sTrinitySpear"
    },
    "6118": {
        "botName": "T4_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Adept'sDaybreaker"
    },
    "6119": {
        "botName": "T4_MAIN_SPEAR_LANCE_AVALON@1",
        "humanName": "Adept'sDaybreaker"
    },
    "6120": {
        "botName": "T4_MAIN_SPEAR_LANCE_AVALON@2",
        "humanName": "Adept'sDaybreaker"
    },
    "6121": {
        "botName": "T4_MAIN_SPEAR_LANCE_AVALON@3",
        "humanName": "Adept'sDaybreaker"
    },
    "6122": {
        "botName": "T5_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Expert'sDaybreaker"
    },
    "6123": {
        "botName": "T5_MAIN_SPEAR_LANCE_AVALON@1",
        "humanName": "Expert'sDaybreaker"
    },
    "6124": {
        "botName": "T5_MAIN_SPEAR_LANCE_AVALON@2",
        "humanName": "Expert'sDaybreaker"
    },
    "6125": {
        "botName": "T5_MAIN_SPEAR_LANCE_AVALON@3",
        "humanName": "Expert'sDaybreaker"
    },
    "6126": {
        "botName": "T6_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Master'sDaybreaker"
    },
    "6127": {
        "botName": "T6_MAIN_SPEAR_LANCE_AVALON@1",
        "humanName": "Master'sDaybreaker"
    },
    "6128": {
        "botName": "T6_MAIN_SPEAR_LANCE_AVALON@2",
        "humanName": "Master'sDaybreaker"
    },
    "6129": {
        "botName": "T6_MAIN_SPEAR_LANCE_AVALON@3",
        "humanName": "Master'sDaybreaker"
    },
    "6130": {
        "botName": "T7_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Grandmaster'sDaybreaker"
    },
    "6131": {
        "botName": "T7_MAIN_SPEAR_LANCE_AVALON@1",
        "humanName": "Grandmaster'sDaybreaker"
    },
    "6132": {
        "botName": "T7_MAIN_SPEAR_LANCE_AVALON@2",
        "humanName": "Grandmaster'sDaybreaker"
    },
    "6133": {
        "botName": "T7_MAIN_SPEAR_LANCE_AVALON@3",
        "humanName": "Grandmaster'sDaybreaker"
    },
    "6134": {
        "botName": "T8_MAIN_SPEAR_LANCE_AVALON",
        "humanName": "Elder'sDaybreaker"
    },
    "6135": {
        "botName": "T8_MAIN_SPEAR_LANCE_AVALON@1",
        "humanName": "Elder'sDaybreaker"
    },
    "6136": {
        "botName": "T8_MAIN_SPEAR_LANCE_AVALON@2",
        "humanName": "Elder'sDaybreaker"
    },
    "6137": {
        "botName": "T8_MAIN_SPEAR_LANCE_AVALON@3",
        "humanName": "Elder'sDaybreaker"
    },
    "6138": {
        "botName": "T3_MAIN_AXE",
        "humanName": "Journeyman'sBattleaxe"
    },
    "6139": {
        "botName": "T4_MAIN_AXE",
        "humanName": "Adept'sBattleaxe"
    },
    "6140": {
        "botName": "T4_MAIN_AXE@1",
        "humanName": "Adept'sBattleaxe"
    },
    "6141": {
        "botName": "T4_MAIN_AXE@2",
        "humanName": "Adept'sBattleaxe"
    },
    "6142": {
        "botName": "T4_MAIN_AXE@3",
        "humanName": "Adept'sBattleaxe"
    },
    "6143": {
        "botName": "T5_MAIN_AXE",
        "humanName": "Expert'sBattleaxe"
    },
    "6144": {
        "botName": "T5_MAIN_AXE@1",
        "humanName": "Expert'sBattleaxe"
    },
    "6145": {
        "botName": "T5_MAIN_AXE@2",
        "humanName": "Expert'sBattleaxe"
    },
    "6146": {
        "botName": "T5_MAIN_AXE@3",
        "humanName": "Expert'sBattleaxe"
    },
    "6147": {
        "botName": "T6_MAIN_AXE",
        "humanName": "Master'sBattleaxe"
    },
    "6148": {
        "botName": "T6_MAIN_AXE@1",
        "humanName": "Master'sBattleaxe"
    },
    "6149": {
        "botName": "T6_MAIN_AXE@2",
        "humanName": "Master'sBattleaxe"
    },
    "6150": {
        "botName": "T6_MAIN_AXE@3",
        "humanName": "Master'sBattleaxe"
    },
    "6151": {
        "botName": "T7_MAIN_AXE",
        "humanName": "Grandmaster'sBattleaxe"
    },
    "6152": {
        "botName": "T7_MAIN_AXE@1",
        "humanName": "Grandmaster'sBattleaxe"
    },
    "6153": {
        "botName": "T7_MAIN_AXE@2",
        "humanName": "Grandmaster'sBattleaxe"
    },
    "6154": {
        "botName": "T7_MAIN_AXE@3",
        "humanName": "Grandmaster'sBattleaxe"
    },
    "6155": {
        "botName": "T8_MAIN_AXE",
        "humanName": "Elder'sBattleaxe"
    },
    "6156": {
        "botName": "T8_MAIN_AXE@1",
        "humanName": "Elder'sBattleaxe"
    },
    "6157": {
        "botName": "T8_MAIN_AXE@2",
        "humanName": "Elder'sBattleaxe"
    },
    "6158": {
        "botName": "T8_MAIN_AXE@3",
        "humanName": "Elder'sBattleaxe"
    },
    "6159": {
        "botName": "T4_2H_AXE",
        "humanName": "Adept'sGreataxe"
    },
    "6160": {
        "botName": "T4_2H_AXE@1",
        "humanName": "Adept'sGreataxe"
    },
    "6161": {
        "botName": "T4_2H_AXE@2",
        "humanName": "Adept'sGreataxe"
    },
    "6162": {
        "botName": "T4_2H_AXE@3",
        "humanName": "Adept'sGreataxe"
    },
    "6163": {
        "botName": "T5_2H_AXE",
        "humanName": "Expert'sGreataxe"
    },
    "6164": {
        "botName": "T5_2H_AXE@1",
        "humanName": "Expert'sGreataxe"
    },
    "6165": {
        "botName": "T5_2H_AXE@2",
        "humanName": "Expert'sGreataxe"
    },
    "6166": {
        "botName": "T5_2H_AXE@3",
        "humanName": "Expert'sGreataxe"
    },
    "6167": {
        "botName": "T6_2H_AXE",
        "humanName": "Master'sGreataxe"
    },
    "6168": {
        "botName": "T6_2H_AXE@1",
        "humanName": "Master'sGreataxe"
    },
    "6169": {
        "botName": "T6_2H_AXE@2",
        "humanName": "Master'sGreataxe"
    },
    "6170": {
        "botName": "T6_2H_AXE@3",
        "humanName": "Master'sGreataxe"
    },
    "6171": {
        "botName": "T7_2H_AXE",
        "humanName": "Grandmaster'sGreataxe"
    },
    "6172": {
        "botName": "T7_2H_AXE@1",
        "humanName": "Grandmaster'sGreataxe"
    },
    "6173": {
        "botName": "T7_2H_AXE@2",
        "humanName": "Grandmaster'sGreataxe"
    },
    "6174": {
        "botName": "T7_2H_AXE@3",
        "humanName": "Grandmaster'sGreataxe"
    },
    "6175": {
        "botName": "T8_2H_AXE",
        "humanName": "TheHandofKhor"
    },
    "6176": {
        "botName": "T8_2H_AXE@1",
        "humanName": "TheHandofKhor"
    },
    "6177": {
        "botName": "T8_2H_AXE@2",
        "humanName": "TheHandofKhor"
    },
    "6178": {
        "botName": "T8_2H_AXE@3",
        "humanName": "TheHandofKhor"
    },
    "6179": {
        "botName": "T4_2H_HALBERD",
        "humanName": "Adept'sHalberd"
    },
    "6180": {
        "botName": "T4_2H_HALBERD@1",
        "humanName": "Adept'sHalberd"
    },
    "6181": {
        "botName": "T4_2H_HALBERD@2",
        "humanName": "Adept'sHalberd"
    },
    "6182": {
        "botName": "T4_2H_HALBERD@3",
        "humanName": "Adept'sHalberd"
    },
    "6183": {
        "botName": "T5_2H_HALBERD",
        "humanName": "Expert'sHalberd"
    },
    "6184": {
        "botName": "T5_2H_HALBERD@1",
        "humanName": "Expert'sHalberd"
    },
    "6185": {
        "botName": "T5_2H_HALBERD@2",
        "humanName": "Expert'sHalberd"
    },
    "6186": {
        "botName": "T5_2H_HALBERD@3",
        "humanName": "Expert'sHalberd"
    },
    "6187": {
        "botName": "T6_2H_HALBERD",
        "humanName": "Master'sHalberd"
    },
    "6188": {
        "botName": "T6_2H_HALBERD@1",
        "humanName": "Master'sHalberd"
    },
    "6189": {
        "botName": "T6_2H_HALBERD@2",
        "humanName": "Master'sHalberd"
    },
    "6190": {
        "botName": "T6_2H_HALBERD@3",
        "humanName": "Master'sHalberd"
    },
    "6191": {
        "botName": "T7_2H_HALBERD",
        "humanName": "Grandmaster'sHalberd"
    },
    "6192": {
        "botName": "T7_2H_HALBERD@1",
        "humanName": "Grandmaster'sHalberd"
    },
    "6193": {
        "botName": "T7_2H_HALBERD@2",
        "humanName": "Grandmaster'sHalberd"
    },
    "6194": {
        "botName": "T7_2H_HALBERD@3",
        "humanName": "Grandmaster'sHalberd"
    },
    "6195": {
        "botName": "T8_2H_HALBERD",
        "humanName": "Elder'sHalberd"
    },
    "6196": {
        "botName": "T8_2H_HALBERD@1",
        "humanName": "Elder'sHalberd"
    },
    "6197": {
        "botName": "T8_2H_HALBERD@2",
        "humanName": "Elder'sHalberd"
    },
    "6198": {
        "botName": "T8_2H_HALBERD@3",
        "humanName": "Elder'sHalberd"
    },
    "6199": {
        "botName": "T4_2H_HALBERD_MORGANA",
        "humanName": "Adept'sCarrioncaller"
    },
    "6200": {
        "botName": "T4_2H_HALBERD_MORGANA@1",
        "humanName": "Adept'sCarrioncaller"
    },
    "6201": {
        "botName": "T4_2H_HALBERD_MORGANA@2",
        "humanName": "Adept'sCarrioncaller"
    },
    "6202": {
        "botName": "T4_2H_HALBERD_MORGANA@3",
        "humanName": "Adept'sCarrioncaller"
    },
    "6203": {
        "botName": "T5_2H_HALBERD_MORGANA",
        "humanName": "Expert'sCarrioncaller"
    },
    "6204": {
        "botName": "T5_2H_HALBERD_MORGANA@1",
        "humanName": "Expert'sCarrioncaller"
    },
    "6205": {
        "botName": "T5_2H_HALBERD_MORGANA@2",
        "humanName": "Expert'sCarrioncaller"
    },
    "6206": {
        "botName": "T5_2H_HALBERD_MORGANA@3",
        "humanName": "Expert'sCarrioncaller"
    },
    "6207": {
        "botName": "T6_2H_HALBERD_MORGANA",
        "humanName": "Master'sCarrioncaller"
    },
    "6208": {
        "botName": "T6_2H_HALBERD_MORGANA@1",
        "humanName": "Master'sCarrioncaller"
    },
    "6209": {
        "botName": "T6_2H_HALBERD_MORGANA@2",
        "humanName": "Master'sCarrioncaller"
    },
    "6210": {
        "botName": "T6_2H_HALBERD_MORGANA@3",
        "humanName": "Master'sCarrioncaller"
    },
    "6211": {
        "botName": "T7_2H_HALBERD_MORGANA",
        "humanName": "Grandmaster'sCarrioncaller"
    },
    "6212": {
        "botName": "T7_2H_HALBERD_MORGANA@1",
        "humanName": "Grandmaster'sCarrioncaller"
    },
    "6213": {
        "botName": "T7_2H_HALBERD_MORGANA@2",
        "humanName": "Grandmaster'sCarrioncaller"
    },
    "6214": {
        "botName": "T7_2H_HALBERD_MORGANA@3",
        "humanName": "Grandmaster'sCarrioncaller"
    },
    "6215": {
        "botName": "T8_2H_HALBERD_MORGANA",
        "humanName": "Elder'sCarrioncaller"
    },
    "6216": {
        "botName": "T8_2H_HALBERD_MORGANA@1",
        "humanName": "Elder'sCarrioncaller"
    },
    "6217": {
        "botName": "T8_2H_HALBERD_MORGANA@2",
        "humanName": "Elder'sCarrioncaller"
    },
    "6218": {
        "botName": "T8_2H_HALBERD_MORGANA@3",
        "humanName": "Elder'sCarrioncaller"
    },
    "6219": {
        "botName": "T4_2H_SCYTHE_HELL",
        "humanName": "Adept'sInfernalScythe"
    },
    "6220": {
        "botName": "T4_2H_SCYTHE_HELL@1",
        "humanName": "Adept'sInfernalScythe"
    },
    "6221": {
        "botName": "T4_2H_SCYTHE_HELL@2",
        "humanName": "Adept'sInfernalScythe"
    },
    "6222": {
        "botName": "T4_2H_SCYTHE_HELL@3",
        "humanName": "Adept'sInfernalScythe"
    },
    "6223": {
        "botName": "T5_2H_SCYTHE_HELL",
        "humanName": "Expert'sInfernalScythe"
    },
    "6224": {
        "botName": "T5_2H_SCYTHE_HELL@1",
        "humanName": "Expert'sInfernalScythe"
    },
    "6225": {
        "botName": "T5_2H_SCYTHE_HELL@2",
        "humanName": "Expert'sInfernalScythe"
    },
    "6226": {
        "botName": "T5_2H_SCYTHE_HELL@3",
        "humanName": "Expert'sInfernalScythe"
    },
    "6227": {
        "botName": "T6_2H_SCYTHE_HELL",
        "humanName": "Master'sInfernalScythe"
    },
    "6228": {
        "botName": "T6_2H_SCYTHE_HELL@1",
        "humanName": "Master'sInfernalScythe"
    },
    "6229": {
        "botName": "T6_2H_SCYTHE_HELL@2",
        "humanName": "Master'sInfernalScythe"
    },
    "6230": {
        "botName": "T6_2H_SCYTHE_HELL@3",
        "humanName": "Master'sInfernalScythe"
    },
    "6231": {
        "botName": "T7_2H_SCYTHE_HELL",
        "humanName": "Grandmaster'sInfernalScythe"
    },
    "6232": {
        "botName": "T7_2H_SCYTHE_HELL@1",
        "humanName": "Grandmaster'sInfernalScythe"
    },
    "6233": {
        "botName": "T7_2H_SCYTHE_HELL@2",
        "humanName": "Grandmaster'sInfernalScythe"
    },
    "6234": {
        "botName": "T7_2H_SCYTHE_HELL@3",
        "humanName": "Grandmaster'sInfernalScythe"
    },
    "6235": {
        "botName": "T8_2H_SCYTHE_HELL",
        "humanName": "Elder'sInfernalScythe"
    },
    "6236": {
        "botName": "T8_2H_SCYTHE_HELL@1",
        "humanName": "Elder'sInfernalScythe"
    },
    "6237": {
        "botName": "T8_2H_SCYTHE_HELL@2",
        "humanName": "Elder'sInfernalScythe"
    },
    "6238": {
        "botName": "T8_2H_SCYTHE_HELL@3",
        "humanName": "Elder'sInfernalScythe"
    },
    "6239": {
        "botName": "T4_2H_DUALAXE_KEEPER",
        "humanName": "Adept'sBearPaws"
    },
    "6240": {
        "botName": "T4_2H_DUALAXE_KEEPER@1",
        "humanName": "Adept'sBearPaws"
    },
    "6241": {
        "botName": "T4_2H_DUALAXE_KEEPER@2",
        "humanName": "Adept'sBearPaws"
    },
    "6242": {
        "botName": "T4_2H_DUALAXE_KEEPER@3",
        "humanName": "Adept'sBearPaws"
    },
    "6243": {
        "botName": "T5_2H_DUALAXE_KEEPER",
        "humanName": "Expert'sBearPaws"
    },
    "6244": {
        "botName": "T5_2H_DUALAXE_KEEPER@1",
        "humanName": "Expert'sBearPaws"
    },
    "6245": {
        "botName": "T5_2H_DUALAXE_KEEPER@2",
        "humanName": "Expert'sBearPaws"
    },
    "6246": {
        "botName": "T5_2H_DUALAXE_KEEPER@3",
        "humanName": "Expert'sBearPaws"
    },
    "6247": {
        "botName": "T6_2H_DUALAXE_KEEPER",
        "humanName": "Master'sBearPaws"
    },
    "6248": {
        "botName": "T6_2H_DUALAXE_KEEPER@1",
        "humanName": "Master'sBearPaws"
    },
    "6249": {
        "botName": "T6_2H_DUALAXE_KEEPER@2",
        "humanName": "Master'sBearPaws"
    },
    "6250": {
        "botName": "T6_2H_DUALAXE_KEEPER@3",
        "humanName": "Master'sBearPaws"
    },
    "6251": {
        "botName": "T7_2H_DUALAXE_KEEPER",
        "humanName": "Grandmaster'sBearPaws"
    },
    "6252": {
        "botName": "T7_2H_DUALAXE_KEEPER@1",
        "humanName": "Grandmaster'sBearPaws"
    },
    "6253": {
        "botName": "T7_2H_DUALAXE_KEEPER@2",
        "humanName": "Grandmaster'sBearPaws"
    },
    "6254": {
        "botName": "T7_2H_DUALAXE_KEEPER@3",
        "humanName": "Grandmaster'sBearPaws"
    },
    "6255": {
        "botName": "T8_2H_DUALAXE_KEEPER",
        "humanName": "Elder'sBearPaws"
    },
    "6256": {
        "botName": "T8_2H_DUALAXE_KEEPER@1",
        "humanName": "Elder'sBearPaws"
    },
    "6257": {
        "botName": "T8_2H_DUALAXE_KEEPER@2",
        "humanName": "Elder'sBearPaws"
    },
    "6258": {
        "botName": "T8_2H_DUALAXE_KEEPER@3",
        "humanName": "Elder'sBearPaws"
    },
    "6259": {
        "botName": "T4_2H_AXE_AVALON",
        "humanName": "Adept'sRealmbreaker"
    },
    "6260": {
        "botName": "T4_2H_AXE_AVALON@1",
        "humanName": "Adept'sRealmbreaker"
    },
    "6261": {
        "botName": "T4_2H_AXE_AVALON@2",
        "humanName": "Adept'sRealmbreaker"
    },
    "6262": {
        "botName": "T4_2H_AXE_AVALON@3",
        "humanName": "Adept'sRealmbreaker"
    },
    "6263": {
        "botName": "T5_2H_AXE_AVALON",
        "humanName": "Expert'sRealmbreaker"
    },
    "6264": {
        "botName": "T5_2H_AXE_AVALON@1",
        "humanName": "Expert'sRealmbreaker"
    },
    "6265": {
        "botName": "T5_2H_AXE_AVALON@2",
        "humanName": "Expert'sRealmbreaker"
    },
    "6266": {
        "botName": "T5_2H_AXE_AVALON@3",
        "humanName": "Expert'sRealmbreaker"
    },
    "6267": {
        "botName": "T6_2H_AXE_AVALON",
        "humanName": "Master'sRealmbreaker"
    },
    "6268": {
        "botName": "T6_2H_AXE_AVALON@1",
        "humanName": "Master'sRealmbreaker"
    },
    "6269": {
        "botName": "T6_2H_AXE_AVALON@2",
        "humanName": "Master'sRealmbreaker"
    },
    "6270": {
        "botName": "T6_2H_AXE_AVALON@3",
        "humanName": "Master'sRealmbreaker"
    },
    "6271": {
        "botName": "T7_2H_AXE_AVALON",
        "humanName": "Grandmaster'sRealmbreaker"
    },
    "6272": {
        "botName": "T7_2H_AXE_AVALON@1",
        "humanName": "Grandmaster'sRealmbreaker"
    },
    "6273": {
        "botName": "T7_2H_AXE_AVALON@2",
        "humanName": "Grandmaster'sRealmbreaker"
    },
    "6274": {
        "botName": "T7_2H_AXE_AVALON@3",
        "humanName": "Grandmaster'sRealmbreaker"
    },
    "6275": {
        "botName": "T8_2H_AXE_AVALON",
        "humanName": "Elder'sRealmbreaker"
    },
    "6276": {
        "botName": "T8_2H_AXE_AVALON@1",
        "humanName": "Elder'sRealmbreaker"
    },
    "6277": {
        "botName": "T8_2H_AXE_AVALON@2",
        "humanName": "Elder'sRealmbreaker"
    },
    "6278": {
        "botName": "T8_2H_AXE_AVALON@3",
        "humanName": "Elder'sRealmbreaker"
    },
    "6279": {
        "botName": "T1_MAIN_SWORD",
        "humanName": "Beginner'sBroadsword"
    },
    "6280": {
        "botName": "T2_MAIN_SWORD",
        "humanName": "Novice'sBroadsword"
    },
    "6281": {
        "botName": "T3_MAIN_SWORD",
        "humanName": "Journeyman'sBroadsword"
    },
    "6282": {
        "botName": "T4_MAIN_SWORD",
        "humanName": "Adept'sBroadsword"
    },
    "6283": {
        "botName": "T4_MAIN_SWORD@1",
        "humanName": "Adept'sBroadsword"
    },
    "6284": {
        "botName": "T4_MAIN_SWORD@2",
        "humanName": "Adept'sBroadsword"
    },
    "6285": {
        "botName": "T4_MAIN_SWORD@3",
        "humanName": "Adept'sBroadsword"
    },
    "6286": {
        "botName": "T5_MAIN_SWORD",
        "humanName": "Expert'sBroadsword"
    },
    "6287": {
        "botName": "T5_MAIN_SWORD@1",
        "humanName": "Expert'sBroadsword"
    },
    "6288": {
        "botName": "T5_MAIN_SWORD@2",
        "humanName": "Expert'sBroadsword"
    },
    "6289": {
        "botName": "T5_MAIN_SWORD@3",
        "humanName": "Expert'sBroadsword"
    },
    "6290": {
        "botName": "T6_MAIN_SWORD",
        "humanName": "Master'sBroadsword"
    },
    "6291": {
        "botName": "T6_MAIN_SWORD@1",
        "humanName": "Master'sBroadsword"
    },
    "6292": {
        "botName": "T6_MAIN_SWORD@2",
        "humanName": "Master'sBroadsword"
    },
    "6293": {
        "botName": "T6_MAIN_SWORD@3",
        "humanName": "Master'sBroadsword"
    },
    "6294": {
        "botName": "T7_MAIN_SWORD",
        "humanName": "Grandmaster'sBroadsword"
    },
    "6295": {
        "botName": "T7_MAIN_SWORD@1",
        "humanName": "Grandmaster'sBroadsword"
    },
    "6296": {
        "botName": "T7_MAIN_SWORD@2",
        "humanName": "Grandmaster'sBroadsword"
    },
    "6297": {
        "botName": "T7_MAIN_SWORD@3",
        "humanName": "Grandmaster'sBroadsword"
    },
    "6298": {
        "botName": "T8_MAIN_SWORD",
        "humanName": "Elder'sBroadsword"
    },
    "6299": {
        "botName": "T8_MAIN_SWORD@1",
        "humanName": "Elder'sBroadsword"
    },
    "6300": {
        "botName": "T8_MAIN_SWORD@2",
        "humanName": "Elder'sBroadsword"
    },
    "6301": {
        "botName": "T8_MAIN_SWORD@3",
        "humanName": "Elder'sBroadsword"
    },
    "6302": {
        "botName": "T4_2H_CLAYMORE",
        "humanName": "Adept'sClaymore"
    },
    "6303": {
        "botName": "T4_2H_CLAYMORE@1",
        "humanName": "Adept'sClaymore"
    },
    "6304": {
        "botName": "T4_2H_CLAYMORE@2",
        "humanName": "Adept'sClaymore"
    },
    "6305": {
        "botName": "T4_2H_CLAYMORE@3",
        "humanName": "Adept'sClaymore"
    },
    "6306": {
        "botName": "T5_2H_CLAYMORE",
        "humanName": "Expert'sClaymore"
    },
    "6307": {
        "botName": "T5_2H_CLAYMORE@1",
        "humanName": "Expert'sClaymore"
    },
    "6308": {
        "botName": "T5_2H_CLAYMORE@2",
        "humanName": "Expert'sClaymore"
    },
    "6309": {
        "botName": "T5_2H_CLAYMORE@3",
        "humanName": "Expert'sClaymore"
    },
    "6310": {
        "botName": "T6_2H_CLAYMORE",
        "humanName": "Master'sClaymore"
    },
    "6311": {
        "botName": "T6_2H_CLAYMORE@1",
        "humanName": "Master'sClaymore"
    },
    "6312": {
        "botName": "T6_2H_CLAYMORE@2",
        "humanName": "Master'sClaymore"
    },
    "6313": {
        "botName": "T6_2H_CLAYMORE@3",
        "humanName": "Master'sClaymore"
    },
    "6314": {
        "botName": "T7_2H_CLAYMORE",
        "humanName": "Grandmaster'sClaymore"
    },
    "6315": {
        "botName": "T7_2H_CLAYMORE@1",
        "humanName": "Grandmaster'sClaymore"
    },
    "6316": {
        "botName": "T7_2H_CLAYMORE@2",
        "humanName": "Grandmaster'sClaymore"
    },
    "6317": {
        "botName": "T7_2H_CLAYMORE@3",
        "humanName": "Grandmaster'sClaymore"
    },
    "6318": {
        "botName": "T8_2H_CLAYMORE",
        "humanName": "Elder'sClaymore"
    },
    "6319": {
        "botName": "T8_2H_CLAYMORE@1",
        "humanName": "Elder'sClaymore"
    },
    "6320": {
        "botName": "T8_2H_CLAYMORE@2",
        "humanName": "Elder'sClaymore"
    },
    "6321": {
        "botName": "T8_2H_CLAYMORE@3",
        "humanName": "Elder'sClaymore"
    },
    "6322": {
        "botName": "T4_2H_DUALSWORD",
        "humanName": "Adept'sDualSwords"
    },
    "6323": {
        "botName": "T4_2H_DUALSWORD@1",
        "humanName": "Adept'sDualSwords"
    },
    "6324": {
        "botName": "T4_2H_DUALSWORD@2",
        "humanName": "Adept'sDualSwords"
    },
    "6325": {
        "botName": "T4_2H_DUALSWORD@3",
        "humanName": "Adept'sDualSwords"
    },
    "6326": {
        "botName": "T5_2H_DUALSWORD",
        "humanName": "Expert'sDualSwords"
    },
    "6327": {
        "botName": "T5_2H_DUALSWORD@1",
        "humanName": "Expert'sDualSwords"
    },
    "6328": {
        "botName": "T5_2H_DUALSWORD@2",
        "humanName": "Expert'sDualSwords"
    },
    "6329": {
        "botName": "T5_2H_DUALSWORD@3",
        "humanName": "Expert'sDualSwords"
    },
    "6330": {
        "botName": "T6_2H_DUALSWORD",
        "humanName": "Master'sDualSwords"
    },
    "6331": {
        "botName": "T6_2H_DUALSWORD@1",
        "humanName": "Master'sDualSwords"
    },
    "6332": {
        "botName": "T6_2H_DUALSWORD@2",
        "humanName": "Master'sDualSwords"
    },
    "6333": {
        "botName": "T6_2H_DUALSWORD@3",
        "humanName": "Master'sDualSwords"
    },
    "6334": {
        "botName": "T7_2H_DUALSWORD",
        "humanName": "Grandmaster'sDualSwords"
    },
    "6335": {
        "botName": "T7_2H_DUALSWORD@1",
        "humanName": "Grandmaster'sDualSwords"
    },
    "6336": {
        "botName": "T7_2H_DUALSWORD@2",
        "humanName": "Grandmaster'sDualSwords"
    },
    "6337": {
        "botName": "T7_2H_DUALSWORD@3",
        "humanName": "Grandmaster'sDualSwords"
    },
    "6338": {
        "botName": "T8_2H_DUALSWORD",
        "humanName": "Elder'sDualSwords"
    },
    "6339": {
        "botName": "T8_2H_DUALSWORD@1",
        "humanName": "Elder'sDualSwords"
    },
    "6340": {
        "botName": "T8_2H_DUALSWORD@2",
        "humanName": "Elder'sDualSwords"
    },
    "6341": {
        "botName": "T8_2H_DUALSWORD@3",
        "humanName": "Elder'sDualSwords"
    },
    "6342": {
        "botName": "T4_MAIN_SCIMITAR_MORGANA",
        "humanName": "Adept'sClarentBlade"
    },
    "6343": {
        "botName": "T4_MAIN_SCIMITAR_MORGANA@1",
        "humanName": "Adept'sClarentBlade"
    },
    "6344": {
        "botName": "T4_MAIN_SCIMITAR_MORGANA@2",
        "humanName": "Adept'sClarentBlade"
    },
    "6345": {
        "botName": "T4_MAIN_SCIMITAR_MORGANA@3",
        "humanName": "Adept'sClarentBlade"
    },
    "6346": {
        "botName": "T5_MAIN_SCIMITAR_MORGANA",
        "humanName": "Expert'sClarentBlade"
    },
    "6347": {
        "botName": "T5_MAIN_SCIMITAR_MORGANA@1",
        "humanName": "Expert'sClarentBlade"
    },
    "6348": {
        "botName": "T5_MAIN_SCIMITAR_MORGANA@2",
        "humanName": "Expert'sClarentBlade"
    },
    "6349": {
        "botName": "T5_MAIN_SCIMITAR_MORGANA@3",
        "humanName": "Expert'sClarentBlade"
    },
    "6350": {
        "botName": "T6_MAIN_SCIMITAR_MORGANA",
        "humanName": "Master'sClarentBlade"
    },
    "6351": {
        "botName": "T6_MAIN_SCIMITAR_MORGANA@1",
        "humanName": "Master'sClarentBlade"
    },
    "6352": {
        "botName": "T6_MAIN_SCIMITAR_MORGANA@2",
        "humanName": "Master'sClarentBlade"
    },
    "6353": {
        "botName": "T6_MAIN_SCIMITAR_MORGANA@3",
        "humanName": "Master'sClarentBlade"
    },
    "6354": {
        "botName": "T7_MAIN_SCIMITAR_MORGANA",
        "humanName": "Grandmaster'sClarentBlade"
    },
    "6355": {
        "botName": "T7_MAIN_SCIMITAR_MORGANA@1",
        "humanName": "Grandmaster'sClarentBlade"
    },
    "6356": {
        "botName": "T7_MAIN_SCIMITAR_MORGANA@2",
        "humanName": "Grandmaster'sClarentBlade"
    },
    "6357": {
        "botName": "T7_MAIN_SCIMITAR_MORGANA@3",
        "humanName": "Grandmaster'sClarentBlade"
    },
    "6358": {
        "botName": "T8_MAIN_SCIMITAR_MORGANA",
        "humanName": "Elder'sClarentBlade"
    },
    "6359": {
        "botName": "T8_MAIN_SCIMITAR_MORGANA@1",
        "humanName": "Elder'sClarentBlade"
    },
    "6360": {
        "botName": "T8_MAIN_SCIMITAR_MORGANA@2",
        "humanName": "Elder'sClarentBlade"
    },
    "6361": {
        "botName": "T8_MAIN_SCIMITAR_MORGANA@3",
        "humanName": "Elder'sClarentBlade"
    },
    "6362": {
        "botName": "T4_2H_CLEAVER_HELL",
        "humanName": "Adept'sCarvingSword"
    },
    "6363": {
        "botName": "T4_2H_CLEAVER_HELL@1",
        "humanName": "Adept'sCarvingSword"
    },
    "6364": {
        "botName": "T4_2H_CLEAVER_HELL@2",
        "humanName": "Adept'sCarvingSword"
    },
    "6365": {
        "botName": "T4_2H_CLEAVER_HELL@3",
        "humanName": "Adept'sCarvingSword"
    },
    "6366": {
        "botName": "T5_2H_CLEAVER_HELL",
        "humanName": "Expert'sCarvingSword"
    },
    "6367": {
        "botName": "T5_2H_CLEAVER_HELL@1",
        "humanName": "Expert'sCarvingSword"
    },
    "6368": {
        "botName": "T5_2H_CLEAVER_HELL@2",
        "humanName": "Expert'sCarvingSword"
    },
    "6369": {
        "botName": "T5_2H_CLEAVER_HELL@3",
        "humanName": "Expert'sCarvingSword"
    },
    "6370": {
        "botName": "T6_2H_CLEAVER_HELL",
        "humanName": "Master'sCarvingSword"
    },
    "6371": {
        "botName": "T6_2H_CLEAVER_HELL@1",
        "humanName": "Master'sCarvingSword"
    },
    "6372": {
        "botName": "T6_2H_CLEAVER_HELL@2",
        "humanName": "Master'sCarvingSword"
    },
    "6373": {
        "botName": "T6_2H_CLEAVER_HELL@3",
        "humanName": "Master'sCarvingSword"
    },
    "6374": {
        "botName": "T7_2H_CLEAVER_HELL",
        "humanName": "Grandmaster'sCarvingSword"
    },
    "6375": {
        "botName": "T7_2H_CLEAVER_HELL@1",
        "humanName": "Grandmaster'sCarvingSword"
    },
    "6376": {
        "botName": "T7_2H_CLEAVER_HELL@2",
        "humanName": "Grandmaster'sCarvingSword"
    },
    "6377": {
        "botName": "T7_2H_CLEAVER_HELL@3",
        "humanName": "Grandmaster'sCarvingSword"
    },
    "6378": {
        "botName": "T8_2H_CLEAVER_HELL",
        "humanName": "Elder'sCarvingSword"
    },
    "6379": {
        "botName": "T8_2H_CLEAVER_HELL@1",
        "humanName": "Elder'sCarvingSword"
    },
    "6380": {
        "botName": "T8_2H_CLEAVER_HELL@2",
        "humanName": "Elder'sCarvingSword"
    },
    "6381": {
        "botName": "T8_2H_CLEAVER_HELL@3",
        "humanName": "Elder'sCarvingSword"
    },
    "6382": {
        "botName": "T4_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Adept'sGalatinePair"
    },
    "6383": {
        "botName": "T4_2H_DUALSCIMITAR_UNDEAD@1",
        "humanName": "Adept'sGalatinePair"
    },
    "6384": {
        "botName": "T4_2H_DUALSCIMITAR_UNDEAD@2",
        "humanName": "Adept'sGalatinePair"
    },
    "6385": {
        "botName": "T4_2H_DUALSCIMITAR_UNDEAD@3",
        "humanName": "Adept'sGalatinePair"
    },
    "6386": {
        "botName": "T5_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Expert'sGalatinePair"
    },
    "6387": {
        "botName": "T5_2H_DUALSCIMITAR_UNDEAD@1",
        "humanName": "Expert'sGalatinePair"
    },
    "6388": {
        "botName": "T5_2H_DUALSCIMITAR_UNDEAD@2",
        "humanName": "Expert'sGalatinePair"
    },
    "6389": {
        "botName": "T5_2H_DUALSCIMITAR_UNDEAD@3",
        "humanName": "Expert'sGalatinePair"
    },
    "6390": {
        "botName": "T6_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Master'sGalatinePair"
    },
    "6391": {
        "botName": "T6_2H_DUALSCIMITAR_UNDEAD@1",
        "humanName": "Master'sGalatinePair"
    },
    "6392": {
        "botName": "T6_2H_DUALSCIMITAR_UNDEAD@2",
        "humanName": "Master'sGalatinePair"
    },
    "6393": {
        "botName": "T6_2H_DUALSCIMITAR_UNDEAD@3",
        "humanName": "Master'sGalatinePair"
    },
    "6394": {
        "botName": "T7_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Grandmaster'sGalatinePair"
    },
    "6395": {
        "botName": "T7_2H_DUALSCIMITAR_UNDEAD@1",
        "humanName": "Grandmaster'sGalatinePair"
    },
    "6396": {
        "botName": "T7_2H_DUALSCIMITAR_UNDEAD@2",
        "humanName": "Grandmaster'sGalatinePair"
    },
    "6397": {
        "botName": "T7_2H_DUALSCIMITAR_UNDEAD@3",
        "humanName": "Grandmaster'sGalatinePair"
    },
    "6398": {
        "botName": "T8_2H_DUALSCIMITAR_UNDEAD",
        "humanName": "Elder'sGalatinePair"
    },
    "6399": {
        "botName": "T8_2H_DUALSCIMITAR_UNDEAD@1",
        "humanName": "Elder'sGalatinePair"
    },
    "6400": {
        "botName": "T8_2H_DUALSCIMITAR_UNDEAD@2",
        "humanName": "Elder'sGalatinePair"
    },
    "6401": {
        "botName": "T8_2H_DUALSCIMITAR_UNDEAD@3",
        "humanName": "Elder'sGalatinePair"
    },
    "6402": {
        "botName": "T4_2H_CLAYMORE_AVALON",
        "humanName": "Adept'sKingmaker"
    },
    "6403": {
        "botName": "T4_2H_CLAYMORE_AVALON@1",
        "humanName": "Adept'sKingmaker"
    },
    "6404": {
        "botName": "T4_2H_CLAYMORE_AVALON@2",
        "humanName": "Adept'sKingmaker"
    },
    "6405": {
        "botName": "T4_2H_CLAYMORE_AVALON@3",
        "humanName": "Adept'sKingmaker"
    },
    "6406": {
        "botName": "T5_2H_CLAYMORE_AVALON",
        "humanName": "Expert'sKingmaker"
    },
    "6407": {
        "botName": "T5_2H_CLAYMORE_AVALON@1",
        "humanName": "Expert'sKingmaker"
    },
    "6408": {
        "botName": "T5_2H_CLAYMORE_AVALON@2",
        "humanName": "Expert'sKingmaker"
    },
    "6409": {
        "botName": "T5_2H_CLAYMORE_AVALON@3",
        "humanName": "Expert'sKingmaker"
    },
    "6410": {
        "botName": "T6_2H_CLAYMORE_AVALON",
        "humanName": "Master'sKingmaker"
    },
    "6411": {
        "botName": "T6_2H_CLAYMORE_AVALON@1",
        "humanName": "Master'sKingmaker"
    },
    "6412": {
        "botName": "T6_2H_CLAYMORE_AVALON@2",
        "humanName": "Master'sKingmaker"
    },
    "6413": {
        "botName": "T6_2H_CLAYMORE_AVALON@3",
        "humanName": "Master'sKingmaker"
    },
    "6414": {
        "botName": "T7_2H_CLAYMORE_AVALON",
        "humanName": "Grandmaster'sKingmaker"
    },
    "6415": {
        "botName": "T7_2H_CLAYMORE_AVALON@1",
        "humanName": "Grandmaster'sKingmaker"
    },
    "6416": {
        "botName": "T7_2H_CLAYMORE_AVALON@2",
        "humanName": "Grandmaster'sKingmaker"
    },
    "6417": {
        "botName": "T7_2H_CLAYMORE_AVALON@3",
        "humanName": "Grandmaster'sKingmaker"
    },
    "6418": {
        "botName": "T8_2H_CLAYMORE_AVALON",
        "humanName": "Elder'sKingmaker"
    },
    "6419": {
        "botName": "T8_2H_CLAYMORE_AVALON@1",
        "humanName": "Elder'sKingmaker"
    },
    "6420": {
        "botName": "T8_2H_CLAYMORE_AVALON@2",
        "humanName": "Elder'sKingmaker"
    },
    "6421": {
        "botName": "T8_2H_CLAYMORE_AVALON@3",
        "humanName": "Elder'sKingmaker"
    },
    "6422": {
        "botName": "T3_2H_QUARTERSTAFF",
        "humanName": "Journeyman'sQuarterstaff"
    },
    "6423": {
        "botName": "T4_2H_QUARTERSTAFF",
        "humanName": "Adept'sQuarterstaff"
    },
    "6424": {
        "botName": "T4_2H_QUARTERSTAFF@1",
        "humanName": "Adept'sQuarterstaff"
    },
    "6425": {
        "botName": "T4_2H_QUARTERSTAFF@2",
        "humanName": "Adept'sQuarterstaff"
    },
    "6426": {
        "botName": "T4_2H_QUARTERSTAFF@3",
        "humanName": "Adept'sQuarterstaff"
    },
    "6427": {
        "botName": "T5_2H_QUARTERSTAFF",
        "humanName": "Expert'sQuarterstaff"
    },
    "6428": {
        "botName": "T5_2H_QUARTERSTAFF@1",
        "humanName": "Expert'sQuarterstaff"
    },
    "6429": {
        "botName": "T5_2H_QUARTERSTAFF@2",
        "humanName": "Expert'sQuarterstaff"
    },
    "6430": {
        "botName": "T5_2H_QUARTERSTAFF@3",
        "humanName": "Expert'sQuarterstaff"
    },
    "6431": {
        "botName": "T6_2H_QUARTERSTAFF",
        "humanName": "Master'sQuarterstaff"
    },
    "6432": {
        "botName": "T6_2H_QUARTERSTAFF@1",
        "humanName": "Master'sQuarterstaff"
    },
    "6433": {
        "botName": "T6_2H_QUARTERSTAFF@2",
        "humanName": "Master'sQuarterstaff"
    },
    "6434": {
        "botName": "T6_2H_QUARTERSTAFF@3",
        "humanName": "Master'sQuarterstaff"
    },
    "6435": {
        "botName": "T7_2H_QUARTERSTAFF",
        "humanName": "Grandmaster'sQuarterstaff"
    },
    "6436": {
        "botName": "T7_2H_QUARTERSTAFF@1",
        "humanName": "Grandmaster'sQuarterstaff"
    },
    "6437": {
        "botName": "T7_2H_QUARTERSTAFF@2",
        "humanName": "Grandmaster'sQuarterstaff"
    },
    "6438": {
        "botName": "T7_2H_QUARTERSTAFF@3",
        "humanName": "Grandmaster'sQuarterstaff"
    },
    "6439": {
        "botName": "T8_2H_QUARTERSTAFF",
        "humanName": "Elder'sQuarterstaff"
    },
    "6440": {
        "botName": "T8_2H_QUARTERSTAFF@1",
        "humanName": "Elder'sQuarterstaff"
    },
    "6441": {
        "botName": "T8_2H_QUARTERSTAFF@2",
        "humanName": "Elder'sQuarterstaff"
    },
    "6442": {
        "botName": "T8_2H_QUARTERSTAFF@3",
        "humanName": "Elder'sQuarterstaff"
    },
    "6443": {
        "botName": "T4_2H_IRONCLADEDSTAFF",
        "humanName": "Adept'sIron-cladStaff"
    },
    "6444": {
        "botName": "T4_2H_IRONCLADEDSTAFF@1",
        "humanName": "Adept'sIron-cladStaff"
    },
    "6445": {
        "botName": "T4_2H_IRONCLADEDSTAFF@2",
        "humanName": "Adept'sIron-cladStaff"
    },
    "6446": {
        "botName": "T4_2H_IRONCLADEDSTAFF@3",
        "humanName": "Adept'sIron-cladStaff"
    },
    "6447": {
        "botName": "T5_2H_IRONCLADEDSTAFF",
        "humanName": "Expert'sIron-cladStaff"
    },
    "6448": {
        "botName": "T5_2H_IRONCLADEDSTAFF@1",
        "humanName": "Expert'sIron-cladStaff"
    },
    "6449": {
        "botName": "T5_2H_IRONCLADEDSTAFF@2",
        "humanName": "Expert'sIron-cladStaff"
    },
    "6450": {
        "botName": "T5_2H_IRONCLADEDSTAFF@3",
        "humanName": "Expert'sIron-cladStaff"
    },
    "6451": {
        "botName": "T6_2H_IRONCLADEDSTAFF",
        "humanName": "Master'sIron-cladStaff"
    },
    "6452": {
        "botName": "T6_2H_IRONCLADEDSTAFF@1",
        "humanName": "Master'sIron-cladStaff"
    },
    "6453": {
        "botName": "T6_2H_IRONCLADEDSTAFF@2",
        "humanName": "Master'sIron-cladStaff"
    },
    "6454": {
        "botName": "T6_2H_IRONCLADEDSTAFF@3",
        "humanName": "Master'sIron-cladStaff"
    },
    "6455": {
        "botName": "T7_2H_IRONCLADEDSTAFF",
        "humanName": "Grandmaster'sIron-cladStaff"
    },
    "6456": {
        "botName": "T7_2H_IRONCLADEDSTAFF@1",
        "humanName": "Grandmaster'sIron-cladStaff"
    },
    "6457": {
        "botName": "T7_2H_IRONCLADEDSTAFF@2",
        "humanName": "Grandmaster'sIron-cladStaff"
    },
    "6458": {
        "botName": "T7_2H_IRONCLADEDSTAFF@3",
        "humanName": "Grandmaster'sIron-cladStaff"
    },
    "6459": {
        "botName": "T8_2H_IRONCLADEDSTAFF",
        "humanName": "Elder'sIron-cladStaff"
    },
    "6460": {
        "botName": "T8_2H_IRONCLADEDSTAFF@1",
        "humanName": "Elder'sIron-cladStaff"
    },
    "6461": {
        "botName": "T8_2H_IRONCLADEDSTAFF@2",
        "humanName": "Elder'sIron-cladStaff"
    },
    "6462": {
        "botName": "T8_2H_IRONCLADEDSTAFF@3",
        "humanName": "Elder'sIron-cladStaff"
    },
    "6463": {
        "botName": "T4_2H_DOUBLEBLADEDSTAFF",
        "humanName": "Adept'sDoubleBladedStaff"
    },
    "6464": {
        "botName": "T4_2H_DOUBLEBLADEDSTAFF@1",
        "humanName": "Adept'sDoubleBladedStaff"
    },
    "6465": {
        "botName": "T4_2H_DOUBLEBLADEDSTAFF@2",
        "humanName": "Adept'sDoubleBladedStaff"
    },
    "6466": {
        "botName": "T4_2H_DOUBLEBLADEDSTAFF@3",
        "humanName": "Adept'sDoubleBladedStaff"
    },
    "6467": {
        "botName": "T5_2H_DOUBLEBLADEDSTAFF",
        "humanName": "Expert'sDoubleBladedStaff"
    },
    "6468": {
        "botName": "T5_2H_DOUBLEBLADEDSTAFF@1",
        "humanName": "Expert'sDoubleBladedStaff"
    },
    "6469": {
        "botName": "T5_2H_DOUBLEBLADEDSTAFF@2",
        "humanName": "Expert'sDoubleBladedStaff"
    },
    "6470": {
        "botName": "T5_2H_DOUBLEBLADEDSTAFF@3",
        "humanName": "Expert'sDoubleBladedStaff"
    },
    "6471": {
        "botName": "T6_2H_DOUBLEBLADEDSTAFF",
        "humanName": "Master'sDoubleBladedStaff"
    },
    "6472": {
        "botName": "T6_2H_DOUBLEBLADEDSTAFF@1",
        "humanName": "Master'sDoubleBladedStaff"
    },
    "6473": {
        "botName": "T6_2H_DOUBLEBLADEDSTAFF@2",
        "humanName": "Master'sDoubleBladedStaff"
    },
    "6474": {
        "botName": "T6_2H_DOUBLEBLADEDSTAFF@3",
        "humanName": "Master'sDoubleBladedStaff"
    },
    "6475": {
        "botName": "T7_2H_DOUBLEBLADEDSTAFF",
        "humanName": "Grandmaster'sDoubleBladedStaff"
    },
    "6476": {
        "botName": "T7_2H_DOUBLEBLADEDSTAFF@1",
        "humanName": "Grandmaster'sDoubleBladedStaff"
    },
    "6477": {
        "botName": "T7_2H_DOUBLEBLADEDSTAFF@2",
        "humanName": "Grandmaster'sDoubleBladedStaff"
    },
    "6478": {
        "botName": "T7_2H_DOUBLEBLADEDSTAFF@3",
        "humanName": "Grandmaster'sDoubleBladedStaff"
    },
    "6479": {
        "botName": "T8_2H_DOUBLEBLADEDSTAFF",
        "humanName": "Elder'sDoubleBladedStaff"
    },
    "6480": {
        "botName": "T8_2H_DOUBLEBLADEDSTAFF@1",
        "humanName": "Elder'sDoubleBladedStaff"
    },
    "6481": {
        "botName": "T8_2H_DOUBLEBLADEDSTAFF@2",
        "humanName": "Elder'sDoubleBladedStaff"
    },
    "6482": {
        "botName": "T8_2H_DOUBLEBLADEDSTAFF@3",
        "humanName": "Elder'sDoubleBladedStaff"
    },
    "6483": {
        "botName": "T4_2H_COMBATSTAFF_MORGANA",
        "humanName": "Adept'sBlackMonkStave"
    },
    "6484": {
        "botName": "T4_2H_COMBATSTAFF_MORGANA@1",
        "humanName": "Adept'sBlackMonkStave"
    },
    "6485": {
        "botName": "T4_2H_COMBATSTAFF_MORGANA@2",
        "humanName": "Adept'sBlackMonkStave"
    },
    "6486": {
        "botName": "T4_2H_COMBATSTAFF_MORGANA@3",
        "humanName": "Adept'sBlackMonkStave"
    },
    "6487": {
        "botName": "T5_2H_COMBATSTAFF_MORGANA",
        "humanName": "Expert'sBlackMonkStave"
    },
    "6488": {
        "botName": "T5_2H_COMBATSTAFF_MORGANA@1",
        "humanName": "Expert'sBlackMonkStave"
    },
    "6489": {
        "botName": "T5_2H_COMBATSTAFF_MORGANA@2",
        "humanName": "Expert'sBlackMonkStave"
    },
    "6490": {
        "botName": "T5_2H_COMBATSTAFF_MORGANA@3",
        "humanName": "Expert'sBlackMonkStave"
    },
    "6491": {
        "botName": "T6_2H_COMBATSTAFF_MORGANA",
        "humanName": "Master'sBlackMonkStave"
    },
    "6492": {
        "botName": "T6_2H_COMBATSTAFF_MORGANA@1",
        "humanName": "Master'sBlackMonkStave"
    },
    "6493": {
        "botName": "T6_2H_COMBATSTAFF_MORGANA@2",
        "humanName": "Master'sBlackMonkStave"
    },
    "6494": {
        "botName": "T6_2H_COMBATSTAFF_MORGANA@3",
        "humanName": "Master'sBlackMonkStave"
    },
    "6495": {
        "botName": "T7_2H_COMBATSTAFF_MORGANA",
        "humanName": "Grandmaster'sBlackMonkStave"
    },
    "6496": {
        "botName": "T7_2H_COMBATSTAFF_MORGANA@1",
        "humanName": "Grandmaster'sBlackMonkStave"
    },
    "6497": {
        "botName": "T7_2H_COMBATSTAFF_MORGANA@2",
        "humanName": "Grandmaster'sBlackMonkStave"
    },
    "6498": {
        "botName": "T7_2H_COMBATSTAFF_MORGANA@3",
        "humanName": "Grandmaster'sBlackMonkStave"
    },
    "6499": {
        "botName": "T8_2H_COMBATSTAFF_MORGANA",
        "humanName": "Elder'sBlackMonkStave"
    },
    "6500": {
        "botName": "T8_2H_COMBATSTAFF_MORGANA@1",
        "humanName": "Elder'sBlackMonkStave"
    },
    "6501": {
        "botName": "T8_2H_COMBATSTAFF_MORGANA@2",
        "humanName": "Elder'sBlackMonkStave"
    },
    "6502": {
        "botName": "T8_2H_COMBATSTAFF_MORGANA@3",
        "humanName": "Elder'sBlackMonkStave"
    },
    "6503": {
        "botName": "T4_2H_TWINSCYTHE_HELL",
        "humanName": "Adept'sSoulscythe"
    },
    "6504": {
        "botName": "T4_2H_TWINSCYTHE_HELL@1",
        "humanName": "Adept'sSoulscythe"
    },
    "6505": {
        "botName": "T4_2H_TWINSCYTHE_HELL@2",
        "humanName": "Adept'sSoulscythe"
    },
    "6506": {
        "botName": "T4_2H_TWINSCYTHE_HELL@3",
        "humanName": "Adept'sSoulscythe"
    },
    "6507": {
        "botName": "T5_2H_TWINSCYTHE_HELL",
        "humanName": "Expert'sSoulscythe"
    },
    "6508": {
        "botName": "T5_2H_TWINSCYTHE_HELL@1",
        "humanName": "Expert'sSoulscythe"
    },
    "6509": {
        "botName": "T5_2H_TWINSCYTHE_HELL@2",
        "humanName": "Expert'sSoulscythe"
    },
    "6510": {
        "botName": "T5_2H_TWINSCYTHE_HELL@3",
        "humanName": "Expert'sSoulscythe"
    },
    "6511": {
        "botName": "T6_2H_TWINSCYTHE_HELL",
        "humanName": "Master'sSoulscythe"
    },
    "6512": {
        "botName": "T6_2H_TWINSCYTHE_HELL@1",
        "humanName": "Master'sSoulscythe"
    },
    "6513": {
        "botName": "T6_2H_TWINSCYTHE_HELL@2",
        "humanName": "Master'sSoulscythe"
    },
    "6514": {
        "botName": "T6_2H_TWINSCYTHE_HELL@3",
        "humanName": "Master'sSoulscythe"
    },
    "6515": {
        "botName": "T7_2H_TWINSCYTHE_HELL",
        "humanName": "Grandmaster'sSoulscythe"
    },
    "6516": {
        "botName": "T7_2H_TWINSCYTHE_HELL@1",
        "humanName": "Grandmaster'sSoulscythe"
    },
    "6517": {
        "botName": "T7_2H_TWINSCYTHE_HELL@2",
        "humanName": "Grandmaster'sSoulscythe"
    },
    "6518": {
        "botName": "T7_2H_TWINSCYTHE_HELL@3",
        "humanName": "Grandmaster'sSoulscythe"
    },
    "6519": {
        "botName": "T8_2H_TWINSCYTHE_HELL",
        "humanName": "Elder'sSoulscythe"
    },
    "6520": {
        "botName": "T8_2H_TWINSCYTHE_HELL@1",
        "humanName": "Elder'sSoulscythe"
    },
    "6521": {
        "botName": "T8_2H_TWINSCYTHE_HELL@2",
        "humanName": "Elder'sSoulscythe"
    },
    "6522": {
        "botName": "T8_2H_TWINSCYTHE_HELL@3",
        "humanName": "Elder'sSoulscythe"
    },
    "6523": {
        "botName": "T4_2H_ROCKSTAFF_KEEPER",
        "humanName": "Adept'sStaffofBalance"
    },
    "6524": {
        "botName": "T4_2H_ROCKSTAFF_KEEPER@1",
        "humanName": "Adept'sStaffofBalance"
    },
    "6525": {
        "botName": "T4_2H_ROCKSTAFF_KEEPER@2",
        "humanName": "Adept'sStaffofBalance"
    },
    "6526": {
        "botName": "T4_2H_ROCKSTAFF_KEEPER@3",
        "humanName": "Adept'sStaffofBalance"
    },
    "6527": {
        "botName": "T5_2H_ROCKSTAFF_KEEPER",
        "humanName": "Expert'sStaffofBalance"
    },
    "6528": {
        "botName": "T5_2H_ROCKSTAFF_KEEPER@1",
        "humanName": "Expert'sStaffofBalance"
    },
    "6529": {
        "botName": "T5_2H_ROCKSTAFF_KEEPER@2",
        "humanName": "Expert'sStaffofBalance"
    },
    "6530": {
        "botName": "T5_2H_ROCKSTAFF_KEEPER@3",
        "humanName": "Expert'sStaffofBalance"
    },
    "6531": {
        "botName": "T6_2H_ROCKSTAFF_KEEPER",
        "humanName": "Master'sStaffofBalance"
    },
    "6532": {
        "botName": "T6_2H_ROCKSTAFF_KEEPER@1",
        "humanName": "Master'sStaffofBalance"
    },
    "6533": {
        "botName": "T6_2H_ROCKSTAFF_KEEPER@2",
        "humanName": "Master'sStaffofBalance"
    },
    "6534": {
        "botName": "T6_2H_ROCKSTAFF_KEEPER@3",
        "humanName": "Master'sStaffofBalance"
    },
    "6535": {
        "botName": "T7_2H_ROCKSTAFF_KEEPER",
        "humanName": "Grandmaster'sStaffofBalance"
    },
    "6536": {
        "botName": "T7_2H_ROCKSTAFF_KEEPER@1",
        "humanName": "Grandmaster'sStaffofBalance"
    },
    "6537": {
        "botName": "T7_2H_ROCKSTAFF_KEEPER@2",
        "humanName": "Grandmaster'sStaffofBalance"
    },
    "6538": {
        "botName": "T7_2H_ROCKSTAFF_KEEPER@3",
        "humanName": "Grandmaster'sStaffofBalance"
    },
    "6539": {
        "botName": "T8_2H_ROCKSTAFF_KEEPER",
        "humanName": "Elder'sStaffofBalance"
    },
    "6540": {
        "botName": "T8_2H_ROCKSTAFF_KEEPER@1",
        "humanName": "Elder'sStaffofBalance"
    },
    "6541": {
        "botName": "T8_2H_ROCKSTAFF_KEEPER@2",
        "humanName": "Elder'sStaffofBalance"
    },
    "6542": {
        "botName": "T8_2H_ROCKSTAFF_KEEPER@3",
        "humanName": "Elder'sStaffofBalance"
    },
    "6543": {
        "botName": "T4_2H_QUARTERSTAFF_AVALON",
        "humanName": "Adept'sGrailseeker"
    },
    "6544": {
        "botName": "T4_2H_QUARTERSTAFF_AVALON@1",
        "humanName": "Adept'sGrailseeker"
    },
    "6545": {
        "botName": "T4_2H_QUARTERSTAFF_AVALON@2",
        "humanName": "Adept'sGrailseeker"
    },
    "6546": {
        "botName": "T4_2H_QUARTERSTAFF_AVALON@3",
        "humanName": "Adept'sGrailseeker"
    },
    "6547": {
        "botName": "T5_2H_QUARTERSTAFF_AVALON",
        "humanName": "Expert'sGrailseeker"
    },
    "6548": {
        "botName": "T5_2H_QUARTERSTAFF_AVALON@1",
        "humanName": "Expert'sGrailseeker"
    },
    "6549": {
        "botName": "T5_2H_QUARTERSTAFF_AVALON@2",
        "humanName": "Expert'sGrailseeker"
    },
    "6550": {
        "botName": "T5_2H_QUARTERSTAFF_AVALON@3",
        "humanName": "Expert'sGrailseeker"
    },
    "6551": {
        "botName": "T6_2H_QUARTERSTAFF_AVALON",
        "humanName": "Master'sGrailseeker"
    },
    "6552": {
        "botName": "T6_2H_QUARTERSTAFF_AVALON@1",
        "humanName": "Master'sGrailseeker"
    },
    "6553": {
        "botName": "T6_2H_QUARTERSTAFF_AVALON@2",
        "humanName": "Master'sGrailseeker"
    },
    "6554": {
        "botName": "T6_2H_QUARTERSTAFF_AVALON@3",
        "humanName": "Master'sGrailseeker"
    },
    "6555": {
        "botName": "T7_2H_QUARTERSTAFF_AVALON",
        "humanName": "Grandmaster'sGrailseeker"
    },
    "6556": {
        "botName": "T7_2H_QUARTERSTAFF_AVALON@1",
        "humanName": "Grandmaster'sGrailseeker"
    },
    "6557": {
        "botName": "T7_2H_QUARTERSTAFF_AVALON@2",
        "humanName": "Grandmaster'sGrailseeker"
    },
    "6558": {
        "botName": "T7_2H_QUARTERSTAFF_AVALON@3",
        "humanName": "Grandmaster'sGrailseeker"
    },
    "6559": {
        "botName": "T8_2H_QUARTERSTAFF_AVALON",
        "humanName": "Elder'sGrailseeker"
    },
    "6560": {
        "botName": "T8_2H_QUARTERSTAFF_AVALON@1",
        "humanName": "Elder'sGrailseeker"
    },
    "6561": {
        "botName": "T8_2H_QUARTERSTAFF_AVALON@2",
        "humanName": "Elder'sGrailseeker"
    },
    "6562": {
        "botName": "T8_2H_QUARTERSTAFF_AVALON@3",
        "humanName": "Elder'sGrailseeker"
    },
    "6563": {
        "botName": "T3_MAIN_HAMMER",
        "humanName": "Journeyman'sHammer"
    },
    "6564": {
        "botName": "T4_MAIN_HAMMER",
        "humanName": "Adept'sHammer"
    },
    "6565": {
        "botName": "T4_MAIN_HAMMER@1",
        "humanName": "Adept'sHammer"
    },
    "6566": {
        "botName": "T4_MAIN_HAMMER@2",
        "humanName": "Adept'sHammer"
    },
    "6567": {
        "botName": "T4_MAIN_HAMMER@3",
        "humanName": "Adept'sHammer"
    },
    "6568": {
        "botName": "T5_MAIN_HAMMER",
        "humanName": "Expert'sHammer"
    },
    "6569": {
        "botName": "T5_MAIN_HAMMER@1",
        "humanName": "Expert'sHammer"
    },
    "6570": {
        "botName": "T5_MAIN_HAMMER@2",
        "humanName": "Expert'sHammer"
    },
    "6571": {
        "botName": "T5_MAIN_HAMMER@3",
        "humanName": "Expert'sHammer"
    },
    "6572": {
        "botName": "T6_MAIN_HAMMER",
        "humanName": "Master'sHammer"
    },
    "6573": {
        "botName": "T6_MAIN_HAMMER@1",
        "humanName": "Master'sHammer"
    },
    "6574": {
        "botName": "T6_MAIN_HAMMER@2",
        "humanName": "Master'sHammer"
    },
    "6575": {
        "botName": "T6_MAIN_HAMMER@3",
        "humanName": "Master'sHammer"
    },
    "6576": {
        "botName": "T7_MAIN_HAMMER",
        "humanName": "Grandmaster'sHammer"
    },
    "6577": {
        "botName": "T7_MAIN_HAMMER@1",
        "humanName": "Grandmaster'sHammer"
    },
    "6578": {
        "botName": "T7_MAIN_HAMMER@2",
        "humanName": "Grandmaster'sHammer"
    },
    "6579": {
        "botName": "T7_MAIN_HAMMER@3",
        "humanName": "Grandmaster'sHammer"
    },
    "6580": {
        "botName": "T8_MAIN_HAMMER",
        "humanName": "Elder'sHammer"
    },
    "6581": {
        "botName": "T8_MAIN_HAMMER@1",
        "humanName": "Elder'sHammer"
    },
    "6582": {
        "botName": "T8_MAIN_HAMMER@2",
        "humanName": "Elder'sHammer"
    },
    "6583": {
        "botName": "T8_MAIN_HAMMER@3",
        "humanName": "Elder'sHammer"
    },
    "6584": {
        "botName": "T4_2H_POLEHAMMER",
        "humanName": "Adept'sPolehammer"
    },
    "6585": {
        "botName": "T4_2H_POLEHAMMER@1",
        "humanName": "Adept'sPolehammer"
    },
    "6586": {
        "botName": "T4_2H_POLEHAMMER@2",
        "humanName": "Adept'sPolehammer"
    },
    "6587": {
        "botName": "T4_2H_POLEHAMMER@3",
        "humanName": "Adept'sPolehammer"
    },
    "6588": {
        "botName": "T5_2H_POLEHAMMER",
        "humanName": "Expert'sPolehammer"
    },
    "6589": {
        "botName": "T5_2H_POLEHAMMER@1",
        "humanName": "Expert'sPolehammer"
    },
    "6590": {
        "botName": "T5_2H_POLEHAMMER@2",
        "humanName": "Expert'sPolehammer"
    },
    "6591": {
        "botName": "T5_2H_POLEHAMMER@3",
        "humanName": "Expert'sPolehammer"
    },
    "6592": {
        "botName": "T6_2H_POLEHAMMER",
        "humanName": "Master'sPolehammer"
    },
    "6593": {
        "botName": "T6_2H_POLEHAMMER@1",
        "humanName": "Master'sPolehammer"
    },
    "6594": {
        "botName": "T6_2H_POLEHAMMER@2",
        "humanName": "Master'sPolehammer"
    },
    "6595": {
        "botName": "T6_2H_POLEHAMMER@3",
        "humanName": "Master'sPolehammer"
    },
    "6596": {
        "botName": "T7_2H_POLEHAMMER",
        "humanName": "Grandmaster'sPolehammer"
    },
    "6597": {
        "botName": "T7_2H_POLEHAMMER@1",
        "humanName": "Grandmaster'sPolehammer"
    },
    "6598": {
        "botName": "T7_2H_POLEHAMMER@2",
        "humanName": "Grandmaster'sPolehammer"
    },
    "6599": {
        "botName": "T7_2H_POLEHAMMER@3",
        "humanName": "Grandmaster'sPolehammer"
    },
    "6600": {
        "botName": "T8_2H_POLEHAMMER",
        "humanName": "Elder'sPolehammer"
    },
    "6601": {
        "botName": "T8_2H_POLEHAMMER@1",
        "humanName": "Elder'sPolehammer"
    },
    "6602": {
        "botName": "T8_2H_POLEHAMMER@2",
        "humanName": "Elder'sPolehammer"
    },
    "6603": {
        "botName": "T8_2H_POLEHAMMER@3",
        "humanName": "Elder'sPolehammer"
    },
    "6604": {
        "botName": "T4_2H_HAMMER",
        "humanName": "Adept'sGreatHammer"
    },
    "6605": {
        "botName": "T4_2H_HAMMER@1",
        "humanName": "Adept'sGreatHammer"
    },
    "6606": {
        "botName": "T4_2H_HAMMER@2",
        "humanName": "Adept'sGreatHammer"
    },
    "6607": {
        "botName": "T4_2H_HAMMER@3",
        "humanName": "Adept'sGreatHammer"
    },
    "6608": {
        "botName": "T5_2H_HAMMER",
        "humanName": "Expert'sGreatHammer"
    },
    "6609": {
        "botName": "T5_2H_HAMMER@1",
        "humanName": "Expert'sGreatHammer"
    },
    "6610": {
        "botName": "T5_2H_HAMMER@2",
        "humanName": "Expert'sGreatHammer"
    },
    "6611": {
        "botName": "T5_2H_HAMMER@3",
        "humanName": "Expert'sGreatHammer"
    },
    "6612": {
        "botName": "T6_2H_HAMMER",
        "humanName": "Master'sGreatHammer"
    },
    "6613": {
        "botName": "T6_2H_HAMMER@1",
        "humanName": "Master'sGreatHammer"
    },
    "6614": {
        "botName": "T6_2H_HAMMER@2",
        "humanName": "Master'sGreatHammer"
    },
    "6615": {
        "botName": "T6_2H_HAMMER@3",
        "humanName": "Master'sGreatHammer"
    },
    "6616": {
        "botName": "T7_2H_HAMMER",
        "humanName": "Grandmaster'sGreatHammer"
    },
    "6617": {
        "botName": "T7_2H_HAMMER@1",
        "humanName": "Grandmaster'sGreatHammer"
    },
    "6618": {
        "botName": "T7_2H_HAMMER@2",
        "humanName": "Grandmaster'sGreatHammer"
    },
    "6619": {
        "botName": "T7_2H_HAMMER@3",
        "humanName": "Grandmaster'sGreatHammer"
    },
    "6620": {
        "botName": "T8_2H_HAMMER",
        "humanName": "Elder'sGreatHammer"
    },
    "6621": {
        "botName": "T8_2H_HAMMER@1",
        "humanName": "Elder'sGreatHammer"
    },
    "6622": {
        "botName": "T8_2H_HAMMER@2",
        "humanName": "Elder'sGreatHammer"
    },
    "6623": {
        "botName": "T8_2H_HAMMER@3",
        "humanName": "Elder'sGreatHammer"
    },
    "6624": {
        "botName": "T4_2H_HAMMER_UNDEAD",
        "humanName": "Adept'sTombhammer"
    },
    "6625": {
        "botName": "T4_2H_HAMMER_UNDEAD@1",
        "humanName": "Adept'sTombhammer"
    },
    "6626": {
        "botName": "T4_2H_HAMMER_UNDEAD@2",
        "humanName": "Adept'sTombhammer"
    },
    "6627": {
        "botName": "T4_2H_HAMMER_UNDEAD@3",
        "humanName": "Adept'sTombhammer"
    },
    "6628": {
        "botName": "T5_2H_HAMMER_UNDEAD",
        "humanName": "Expert'sTombhammer"
    },
    "6629": {
        "botName": "T5_2H_HAMMER_UNDEAD@1",
        "humanName": "Expert'sTombhammer"
    },
    "6630": {
        "botName": "T5_2H_HAMMER_UNDEAD@2",
        "humanName": "Expert'sTombhammer"
    },
    "6631": {
        "botName": "T5_2H_HAMMER_UNDEAD@3",
        "humanName": "Expert'sTombhammer"
    },
    "6632": {
        "botName": "T6_2H_HAMMER_UNDEAD",
        "humanName": "Master'sTombhammer"
    },
    "6633": {
        "botName": "T6_2H_HAMMER_UNDEAD@1",
        "humanName": "Master'sTombhammer"
    },
    "6634": {
        "botName": "T6_2H_HAMMER_UNDEAD@2",
        "humanName": "Master'sTombhammer"
    },
    "6635": {
        "botName": "T6_2H_HAMMER_UNDEAD@3",
        "humanName": "Master'sTombhammer"
    },
    "6636": {
        "botName": "T7_2H_HAMMER_UNDEAD",
        "humanName": "Grandmaster'sTombhammer"
    },
    "6637": {
        "botName": "T7_2H_HAMMER_UNDEAD@1",
        "humanName": "Grandmaster'sTombhammer"
    },
    "6638": {
        "botName": "T7_2H_HAMMER_UNDEAD@2",
        "humanName": "Grandmaster'sTombhammer"
    },
    "6639": {
        "botName": "T7_2H_HAMMER_UNDEAD@3",
        "humanName": "Grandmaster'sTombhammer"
    },
    "6640": {
        "botName": "T8_2H_HAMMER_UNDEAD",
        "humanName": "Elder'sTombhammer"
    },
    "6641": {
        "botName": "T8_2H_HAMMER_UNDEAD@1",
        "humanName": "Elder'sTombhammer"
    },
    "6642": {
        "botName": "T8_2H_HAMMER_UNDEAD@2",
        "humanName": "Elder'sTombhammer"
    },
    "6643": {
        "botName": "T8_2H_HAMMER_UNDEAD@3",
        "humanName": "Elder'sTombhammer"
    },
    "6644": {
        "botName": "T4_2H_DUALHAMMER_HELL",
        "humanName": "Adept'sForgeHammers"
    },
    "6645": {
        "botName": "T4_2H_DUALHAMMER_HELL@1",
        "humanName": "Adept'sForgeHammers"
    },
    "6646": {
        "botName": "T4_2H_DUALHAMMER_HELL@2",
        "humanName": "Adept'sForgeHammers"
    },
    "6647": {
        "botName": "T4_2H_DUALHAMMER_HELL@3",
        "humanName": "Adept'sForgeHammers"
    },
    "6648": {
        "botName": "T5_2H_DUALHAMMER_HELL",
        "humanName": "Expert'sForgeHammers"
    },
    "6649": {
        "botName": "T5_2H_DUALHAMMER_HELL@1",
        "humanName": "Expert'sForgeHammers"
    },
    "6650": {
        "botName": "T5_2H_DUALHAMMER_HELL@2",
        "humanName": "Expert'sForgeHammers"
    },
    "6651": {
        "botName": "T5_2H_DUALHAMMER_HELL@3",
        "humanName": "Expert'sForgeHammers"
    },
    "6652": {
        "botName": "T6_2H_DUALHAMMER_HELL",
        "humanName": "Master'sForgeHammers"
    },
    "6653": {
        "botName": "T6_2H_DUALHAMMER_HELL@1",
        "humanName": "Master'sForgeHammers"
    },
    "6654": {
        "botName": "T6_2H_DUALHAMMER_HELL@2",
        "humanName": "Master'sForgeHammers"
    },
    "6655": {
        "botName": "T6_2H_DUALHAMMER_HELL@3",
        "humanName": "Master'sForgeHammers"
    },
    "6656": {
        "botName": "T7_2H_DUALHAMMER_HELL",
        "humanName": "Grandmaster'sForgeHammers"
    },
    "6657": {
        "botName": "T7_2H_DUALHAMMER_HELL@1",
        "humanName": "Grandmaster'sForgeHammers"
    },
    "6658": {
        "botName": "T7_2H_DUALHAMMER_HELL@2",
        "humanName": "Grandmaster'sForgeHammers"
    },
    "6659": {
        "botName": "T7_2H_DUALHAMMER_HELL@3",
        "humanName": "Grandmaster'sForgeHammers"
    },
    "6660": {
        "botName": "T8_2H_DUALHAMMER_HELL",
        "humanName": "Elder'sForgeHammers"
    },
    "6661": {
        "botName": "T8_2H_DUALHAMMER_HELL@1",
        "humanName": "Elder'sForgeHammers"
    },
    "6662": {
        "botName": "T8_2H_DUALHAMMER_HELL@2",
        "humanName": "Elder'sForgeHammers"
    },
    "6663": {
        "botName": "T8_2H_DUALHAMMER_HELL@3",
        "humanName": "Elder'sForgeHammers"
    },
    "6664": {
        "botName": "T4_2H_RAM_KEEPER",
        "humanName": "Adept'sGrovekeeper"
    },
    "6665": {
        "botName": "T4_2H_RAM_KEEPER@1",
        "humanName": "Adept'sGrovekeeper"
    },
    "6666": {
        "botName": "T4_2H_RAM_KEEPER@2",
        "humanName": "Adept'sGrovekeeper"
    },
    "6667": {
        "botName": "T4_2H_RAM_KEEPER@3",
        "humanName": "Adept'sGrovekeeper"
    },
    "6668": {
        "botName": "T5_2H_RAM_KEEPER",
        "humanName": "Expert'sGrovekeeper"
    },
    "6669": {
        "botName": "T5_2H_RAM_KEEPER@1",
        "humanName": "Expert'sGrovekeeper"
    },
    "6670": {
        "botName": "T5_2H_RAM_KEEPER@2",
        "humanName": "Expert'sGrovekeeper"
    },
    "6671": {
        "botName": "T5_2H_RAM_KEEPER@3",
        "humanName": "Expert'sGrovekeeper"
    },
    "6672": {
        "botName": "T6_2H_RAM_KEEPER",
        "humanName": "Master'sGrovekeeper"
    },
    "6673": {
        "botName": "T6_2H_RAM_KEEPER@1",
        "humanName": "Master'sGrovekeeper"
    },
    "6674": {
        "botName": "T6_2H_RAM_KEEPER@2",
        "humanName": "Master'sGrovekeeper"
    },
    "6675": {
        "botName": "T6_2H_RAM_KEEPER@3",
        "humanName": "Master'sGrovekeeper"
    },
    "6676": {
        "botName": "T7_2H_RAM_KEEPER",
        "humanName": "Grandmaster'sGrovekeeper"
    },
    "6677": {
        "botName": "T7_2H_RAM_KEEPER@1",
        "humanName": "Grandmaster'sGrovekeeper"
    },
    "6678": {
        "botName": "T7_2H_RAM_KEEPER@2",
        "humanName": "Grandmaster'sGrovekeeper"
    },
    "6679": {
        "botName": "T7_2H_RAM_KEEPER@3",
        "humanName": "Grandmaster'sGrovekeeper"
    },
    "6680": {
        "botName": "T8_2H_RAM_KEEPER",
        "humanName": "Elder'sGrovekeeper"
    },
    "6681": {
        "botName": "T8_2H_RAM_KEEPER@1",
        "humanName": "Elder'sGrovekeeper"
    },
    "6682": {
        "botName": "T8_2H_RAM_KEEPER@2",
        "humanName": "Elder'sGrovekeeper"
    },
    "6683": {
        "botName": "T8_2H_RAM_KEEPER@3",
        "humanName": "Elder'sGrovekeeper"
    },
    "6684": {
        "botName": "T4_2H_HAMMER_AVALON",
        "humanName": "Adept'sHandofJustice"
    },
    "6685": {
        "botName": "T4_2H_HAMMER_AVALON@1",
        "humanName": "Adept'sHandofJustice"
    },
    "6686": {
        "botName": "T4_2H_HAMMER_AVALON@2",
        "humanName": "Adept'sHandofJustice"
    },
    "6687": {
        "botName": "T4_2H_HAMMER_AVALON@3",
        "humanName": "Adept'sHandofJustice"
    },
    "6688": {
        "botName": "T5_2H_HAMMER_AVALON",
        "humanName": "Expert'sHandofJustice"
    },
    "6689": {
        "botName": "T5_2H_HAMMER_AVALON@1",
        "humanName": "Expert'sHandofJustice"
    },
    "6690": {
        "botName": "T5_2H_HAMMER_AVALON@2",
        "humanName": "Expert'sHandofJustice"
    },
    "6691": {
        "botName": "T5_2H_HAMMER_AVALON@3",
        "humanName": "Expert'sHandofJustice"
    },
    "6692": {
        "botName": "T6_2H_HAMMER_AVALON",
        "humanName": "Master'sHandofJustice"
    },
    "6693": {
        "botName": "T6_2H_HAMMER_AVALON@1",
        "humanName": "Master'sHandofJustice"
    },
    "6694": {
        "botName": "T6_2H_HAMMER_AVALON@2",
        "humanName": "Master'sHandofJustice"
    },
    "6695": {
        "botName": "T6_2H_HAMMER_AVALON@3",
        "humanName": "Master'sHandofJustice"
    },
    "6696": {
        "botName": "T7_2H_HAMMER_AVALON",
        "humanName": "Grandmaster'sHandofJustice"
    },
    "6697": {
        "botName": "T7_2H_HAMMER_AVALON@1",
        "humanName": "Grandmaster'sHandofJustice"
    },
    "6698": {
        "botName": "T7_2H_HAMMER_AVALON@2",
        "humanName": "Grandmaster'sHandofJustice"
    },
    "6699": {
        "botName": "T7_2H_HAMMER_AVALON@3",
        "humanName": "Grandmaster'sHandofJustice"
    },
    "6700": {
        "botName": "T8_2H_HAMMER_AVALON",
        "humanName": "Elder'sHandofJustice"
    },
    "6701": {
        "botName": "T8_2H_HAMMER_AVALON@1",
        "humanName": "Elder'sHandofJustice"
    },
    "6702": {
        "botName": "T8_2H_HAMMER_AVALON@2",
        "humanName": "Elder'sHandofJustice"
    },
    "6703": {
        "botName": "T8_2H_HAMMER_AVALON@3",
        "humanName": "Elder'sHandofJustice"
    },
    "6704": {
        "botName": "T3_MAIN_MACE",
        "humanName": "Journeyman'sMace"
    },
    "6705": {
        "botName": "T4_MAIN_MACE",
        "humanName": "Adept'sMace"
    },
    "6706": {
        "botName": "T4_MAIN_MACE@1",
        "humanName": "Adept'sMace"
    },
    "6707": {
        "botName": "T4_MAIN_MACE@2",
        "humanName": "Adept'sMace"
    },
    "6708": {
        "botName": "T4_MAIN_MACE@3",
        "humanName": "Adept'sMace"
    },
    "6709": {
        "botName": "T5_MAIN_MACE",
        "humanName": "Expert'sMace"
    },
    "6710": {
        "botName": "T5_MAIN_MACE@1",
        "humanName": "Expert'sMace"
    },
    "6711": {
        "botName": "T5_MAIN_MACE@2",
        "humanName": "Expert'sMace"
    },
    "6712": {
        "botName": "T5_MAIN_MACE@3",
        "humanName": "Expert'sMace"
    },
    "6713": {
        "botName": "T6_MAIN_MACE",
        "humanName": "Master'sMace"
    },
    "6714": {
        "botName": "T6_MAIN_MACE@1",
        "humanName": "Master'sMace"
    },
    "6715": {
        "botName": "T6_MAIN_MACE@2",
        "humanName": "Master'sMace"
    },
    "6716": {
        "botName": "T6_MAIN_MACE@3",
        "humanName": "Master'sMace"
    },
    "6717": {
        "botName": "T7_MAIN_MACE",
        "humanName": "Grandmaster'sMace"
    },
    "6718": {
        "botName": "T7_MAIN_MACE@1",
        "humanName": "Grandmaster'sMace"
    },
    "6719": {
        "botName": "T7_MAIN_MACE@2",
        "humanName": "Grandmaster'sMace"
    },
    "6720": {
        "botName": "T7_MAIN_MACE@3",
        "humanName": "Grandmaster'sMace"
    },
    "6721": {
        "botName": "T8_MAIN_MACE",
        "humanName": "Elder'sMace"
    },
    "6722": {
        "botName": "T8_MAIN_MACE@1",
        "humanName": "Elder'sMace"
    },
    "6723": {
        "botName": "T8_MAIN_MACE@2",
        "humanName": "Elder'sMace"
    },
    "6724": {
        "botName": "T8_MAIN_MACE@3",
        "humanName": "Elder'sMace"
    },
    "6725": {
        "botName": "T4_2H_MACE",
        "humanName": "Adept'sHeavyMace"
    },
    "6726": {
        "botName": "T4_2H_MACE@1",
        "humanName": "Adept'sHeavyMace"
    },
    "6727": {
        "botName": "T4_2H_MACE@2",
        "humanName": "Adept'sHeavyMace"
    },
    "6728": {
        "botName": "T4_2H_MACE@3",
        "humanName": "Adept'sHeavyMace"
    },
    "6729": {
        "botName": "T5_2H_MACE",
        "humanName": "Expert'sHeavyMace"
    },
    "6730": {
        "botName": "T5_2H_MACE@1",
        "humanName": "Expert'sHeavyMace"
    },
    "6731": {
        "botName": "T5_2H_MACE@2",
        "humanName": "Expert'sHeavyMace"
    },
    "6732": {
        "botName": "T5_2H_MACE@3",
        "humanName": "Expert'sHeavyMace"
    },
    "6733": {
        "botName": "T6_2H_MACE",
        "humanName": "Master'sHeavyMace"
    },
    "6734": {
        "botName": "T6_2H_MACE@1",
        "humanName": "Master'sHeavyMace"
    },
    "6735": {
        "botName": "T6_2H_MACE@2",
        "humanName": "Master'sHeavyMace"
    },
    "6736": {
        "botName": "T6_2H_MACE@3",
        "humanName": "Master'sHeavyMace"
    },
    "6737": {
        "botName": "T7_2H_MACE",
        "humanName": "Grandmaster'sHeavyMace"
    },
    "6738": {
        "botName": "T7_2H_MACE@1",
        "humanName": "Grandmaster'sHeavyMace"
    },
    "6739": {
        "botName": "T7_2H_MACE@2",
        "humanName": "Grandmaster'sHeavyMace"
    },
    "6740": {
        "botName": "T7_2H_MACE@3",
        "humanName": "Grandmaster'sHeavyMace"
    },
    "6741": {
        "botName": "T8_2H_MACE",
        "humanName": "Elder'sHeavyMace"
    },
    "6742": {
        "botName": "T8_2H_MACE@1",
        "humanName": "Elder'sHeavyMace"
    },
    "6743": {
        "botName": "T8_2H_MACE@2",
        "humanName": "Elder'sHeavyMace"
    },
    "6744": {
        "botName": "T8_2H_MACE@3",
        "humanName": "Elder'sHeavyMace"
    },
    "6745": {
        "botName": "T4_2H_FLAIL",
        "humanName": "Adept'sMorningStar"
    },
    "6746": {
        "botName": "T4_2H_FLAIL@1",
        "humanName": "Adept'sMorningStar"
    },
    "6747": {
        "botName": "T4_2H_FLAIL@2",
        "humanName": "Adept'sMorningStar"
    },
    "6748": {
        "botName": "T4_2H_FLAIL@3",
        "humanName": "Adept'sMorningStar"
    },
    "6749": {
        "botName": "T5_2H_FLAIL",
        "humanName": "Expert'sMorningStar"
    },
    "6750": {
        "botName": "T5_2H_FLAIL@1",
        "humanName": "Expert'sMorningStar"
    },
    "6751": {
        "botName": "T5_2H_FLAIL@2",
        "humanName": "Expert'sMorningStar"
    },
    "6752": {
        "botName": "T5_2H_FLAIL@3",
        "humanName": "Expert'sMorningStar"
    },
    "6753": {
        "botName": "T6_2H_FLAIL",
        "humanName": "Master'sMorningStar"
    },
    "6754": {
        "botName": "T6_2H_FLAIL@1",
        "humanName": "Master'sMorningStar"
    },
    "6755": {
        "botName": "T6_2H_FLAIL@2",
        "humanName": "Master'sMorningStar"
    },
    "6756": {
        "botName": "T6_2H_FLAIL@3",
        "humanName": "Master'sMorningStar"
    },
    "6757": {
        "botName": "T7_2H_FLAIL",
        "humanName": "Grandmaster'sMorningStar"
    },
    "6758": {
        "botName": "T7_2H_FLAIL@1",
        "humanName": "Grandmaster'sMorningStar"
    },
    "6759": {
        "botName": "T7_2H_FLAIL@2",
        "humanName": "Grandmaster'sMorningStar"
    },
    "6760": {
        "botName": "T7_2H_FLAIL@3",
        "humanName": "Grandmaster'sMorningStar"
    },
    "6761": {
        "botName": "T8_2H_FLAIL",
        "humanName": "Elder'sMorningStar"
    },
    "6762": {
        "botName": "T8_2H_FLAIL@1",
        "humanName": "Elder'sMorningStar"
    },
    "6763": {
        "botName": "T8_2H_FLAIL@2",
        "humanName": "Elder'sMorningStar"
    },
    "6764": {
        "botName": "T8_2H_FLAIL@3",
        "humanName": "Elder'sMorningStar"
    },
    "6765": {
        "botName": "T4_MAIN_ROCKMACE_KEEPER",
        "humanName": "Adept'sBedrockMace"
    },
    "6766": {
        "botName": "T4_MAIN_ROCKMACE_KEEPER@1",
        "humanName": "Adept'sBedrockMace"
    },
    "6767": {
        "botName": "T4_MAIN_ROCKMACE_KEEPER@2",
        "humanName": "Adept'sBedrockMace"
    },
    "6768": {
        "botName": "T4_MAIN_ROCKMACE_KEEPER@3",
        "humanName": "Adept'sBedrockMace"
    },
    "6769": {
        "botName": "T5_MAIN_ROCKMACE_KEEPER",
        "humanName": "Expert'sBedrockMace"
    },
    "6770": {
        "botName": "T5_MAIN_ROCKMACE_KEEPER@1",
        "humanName": "Expert'sBedrockMace"
    },
    "6771": {
        "botName": "T5_MAIN_ROCKMACE_KEEPER@2",
        "humanName": "Expert'sBedrockMace"
    },
    "6772": {
        "botName": "T5_MAIN_ROCKMACE_KEEPER@3",
        "humanName": "Expert'sBedrockMace"
    },
    "6773": {
        "botName": "T6_MAIN_ROCKMACE_KEEPER",
        "humanName": "Master'sBedrockMace"
    },
    "6774": {
        "botName": "T6_MAIN_ROCKMACE_KEEPER@1",
        "humanName": "Master'sBedrockMace"
    },
    "6775": {
        "botName": "T6_MAIN_ROCKMACE_KEEPER@2",
        "humanName": "Master'sBedrockMace"
    },
    "6776": {
        "botName": "T6_MAIN_ROCKMACE_KEEPER@3",
        "humanName": "Master'sBedrockMace"
    },
    "6777": {
        "botName": "T7_MAIN_ROCKMACE_KEEPER",
        "humanName": "Grandmaster'sBedrockMace"
    },
    "6778": {
        "botName": "T7_MAIN_ROCKMACE_KEEPER@1",
        "humanName": "Grandmaster'sBedrockMace"
    },
    "6779": {
        "botName": "T7_MAIN_ROCKMACE_KEEPER@2",
        "humanName": "Grandmaster'sBedrockMace"
    },
    "6780": {
        "botName": "T7_MAIN_ROCKMACE_KEEPER@3",
        "humanName": "Grandmaster'sBedrockMace"
    },
    "6781": {
        "botName": "T8_MAIN_ROCKMACE_KEEPER",
        "humanName": "Elder'sBedrockMace"
    },
    "6782": {
        "botName": "T8_MAIN_ROCKMACE_KEEPER@1",
        "humanName": "Elder'sBedrockMace"
    },
    "6783": {
        "botName": "T8_MAIN_ROCKMACE_KEEPER@2",
        "humanName": "Elder'sBedrockMace"
    },
    "6784": {
        "botName": "T8_MAIN_ROCKMACE_KEEPER@3",
        "humanName": "Elder'sBedrockMace"
    },
    "6785": {
        "botName": "T4_MAIN_MACE_HELL",
        "humanName": "Adept'sIncubusMace"
    },
    "6786": {
        "botName": "T4_MAIN_MACE_HELL@1",
        "humanName": "Adept'sIncubusMace"
    },
    "6787": {
        "botName": "T4_MAIN_MACE_HELL@2",
        "humanName": "Adept'sIncubusMace"
    },
    "6788": {
        "botName": "T4_MAIN_MACE_HELL@3",
        "humanName": "Adept'sIncubusMace"
    },
    "6789": {
        "botName": "T5_MAIN_MACE_HELL",
        "humanName": "Expert'sIncubusMace"
    },
    "6790": {
        "botName": "T5_MAIN_MACE_HELL@1",
        "humanName": "Expert'sIncubusMace"
    },
    "6791": {
        "botName": "T5_MAIN_MACE_HELL@2",
        "humanName": "Expert'sIncubusMace"
    },
    "6792": {
        "botName": "T5_MAIN_MACE_HELL@3",
        "humanName": "Expert'sIncubusMace"
    },
    "6793": {
        "botName": "T6_MAIN_MACE_HELL",
        "humanName": "Master'sIncubusMace"
    },
    "6794": {
        "botName": "T6_MAIN_MACE_HELL@1",
        "humanName": "Master'sIncubusMace"
    },
    "6795": {
        "botName": "T6_MAIN_MACE_HELL@2",
        "humanName": "Master'sIncubusMace"
    },
    "6796": {
        "botName": "T6_MAIN_MACE_HELL@3",
        "humanName": "Master'sIncubusMace"
    },
    "6797": {
        "botName": "T7_MAIN_MACE_HELL",
        "humanName": "Grandmaster'sIncubusMace"
    },
    "6798": {
        "botName": "T7_MAIN_MACE_HELL@1",
        "humanName": "Grandmaster'sIncubusMace"
    },
    "6799": {
        "botName": "T7_MAIN_MACE_HELL@2",
        "humanName": "Grandmaster'sIncubusMace"
    },
    "6800": {
        "botName": "T7_MAIN_MACE_HELL@3",
        "humanName": "Grandmaster'sIncubusMace"
    },
    "6801": {
        "botName": "T8_MAIN_MACE_HELL",
        "humanName": "Elder'sIncubusMace"
    },
    "6802": {
        "botName": "T8_MAIN_MACE_HELL@1",
        "humanName": "Elder'sIncubusMace"
    },
    "6803": {
        "botName": "T8_MAIN_MACE_HELL@2",
        "humanName": "Elder'sIncubusMace"
    },
    "6804": {
        "botName": "T8_MAIN_MACE_HELL@3",
        "humanName": "Elder'sIncubusMace"
    },
    "6805": {
        "botName": "T4_2H_MACE_MORGANA",
        "humanName": "Adept'sCamlannMace"
    },
    "6806": {
        "botName": "T4_2H_MACE_MORGANA@1",
        "humanName": "Adept'sCamlannMace"
    },
    "6807": {
        "botName": "T4_2H_MACE_MORGANA@2",
        "humanName": "Adept'sCamlannMace"
    },
    "6808": {
        "botName": "T4_2H_MACE_MORGANA@3",
        "humanName": "Adept'sCamlannMace"
    },
    "6809": {
        "botName": "T5_2H_MACE_MORGANA",
        "humanName": "Expert'sCamlannMace"
    },
    "6810": {
        "botName": "T5_2H_MACE_MORGANA@1",
        "humanName": "Expert'sCamlannMace"
    },
    "6811": {
        "botName": "T5_2H_MACE_MORGANA@2",
        "humanName": "Expert'sCamlannMace"
    },
    "6812": {
        "botName": "T5_2H_MACE_MORGANA@3",
        "humanName": "Expert'sCamlannMace"
    },
    "6813": {
        "botName": "T6_2H_MACE_MORGANA",
        "humanName": "Master'sCamlannMace"
    },
    "6814": {
        "botName": "T6_2H_MACE_MORGANA@1",
        "humanName": "Master'sCamlannMace"
    },
    "6815": {
        "botName": "T6_2H_MACE_MORGANA@2",
        "humanName": "Master'sCamlannMace"
    },
    "6816": {
        "botName": "T6_2H_MACE_MORGANA@3",
        "humanName": "Master'sCamlannMace"
    },
    "6817": {
        "botName": "T7_2H_MACE_MORGANA",
        "humanName": "Grandmaster'sCamlannMace"
    },
    "6818": {
        "botName": "T7_2H_MACE_MORGANA@1",
        "humanName": "Grandmaster'sCamlannMace"
    },
    "6819": {
        "botName": "T7_2H_MACE_MORGANA@2",
        "humanName": "Grandmaster'sCamlannMace"
    },
    "6820": {
        "botName": "T7_2H_MACE_MORGANA@3",
        "humanName": "Grandmaster'sCamlannMace"
    },
    "6821": {
        "botName": "T8_2H_MACE_MORGANA",
        "humanName": "Elder'sCamlannMace"
    },
    "6822": {
        "botName": "T8_2H_MACE_MORGANA@1",
        "humanName": "Elder'sCamlannMace"
    },
    "6823": {
        "botName": "T8_2H_MACE_MORGANA@2",
        "humanName": "Elder'sCamlannMace"
    },
    "6824": {
        "botName": "T8_2H_MACE_MORGANA@3",
        "humanName": "Elder'sCamlannMace"
    },
    "6825": {
        "botName": "T4_2H_DUALMACE_AVALON",
        "humanName": "Adept'sOathkeepers"
    },
    "6826": {
        "botName": "T4_2H_DUALMACE_AVALON@1",
        "humanName": "Adept'sOathkeepers"
    },
    "6827": {
        "botName": "T4_2H_DUALMACE_AVALON@2",
        "humanName": "Adept'sOathkeepers"
    },
    "6828": {
        "botName": "T4_2H_DUALMACE_AVALON@3",
        "humanName": "Adept'sOathkeepers"
    },
    "6829": {
        "botName": "T5_2H_DUALMACE_AVALON",
        "humanName": "Expert'sOathkeepers"
    },
    "6830": {
        "botName": "T5_2H_DUALMACE_AVALON@1",
        "humanName": "Expert'sOathkeepers"
    },
    "6831": {
        "botName": "T5_2H_DUALMACE_AVALON@2",
        "humanName": "Expert'sOathkeepers"
    },
    "6832": {
        "botName": "T5_2H_DUALMACE_AVALON@3",
        "humanName": "Expert'sOathkeepers"
    },
    "6833": {
        "botName": "T6_2H_DUALMACE_AVALON",
        "humanName": "Master'sOathkeepers"
    },
    "6834": {
        "botName": "T6_2H_DUALMACE_AVALON@1",
        "humanName": "Master'sOathkeepers"
    },
    "6835": {
        "botName": "T6_2H_DUALMACE_AVALON@2",
        "humanName": "Master'sOathkeepers"
    },
    "6836": {
        "botName": "T6_2H_DUALMACE_AVALON@3",
        "humanName": "Master'sOathkeepers"
    },
    "6837": {
        "botName": "T7_2H_DUALMACE_AVALON",
        "humanName": "Grandmaster'sOathkeepers"
    },
    "6838": {
        "botName": "T7_2H_DUALMACE_AVALON@1",
        "humanName": "Grandmaster'sOathkeepers"
    },
    "6839": {
        "botName": "T7_2H_DUALMACE_AVALON@2",
        "humanName": "Grandmaster'sOathkeepers"
    },
    "6840": {
        "botName": "T7_2H_DUALMACE_AVALON@3",
        "humanName": "Grandmaster'sOathkeepers"
    },
    "6841": {
        "botName": "T8_2H_DUALMACE_AVALON",
        "humanName": "Elder'sOathkeepers"
    },
    "6842": {
        "botName": "T8_2H_DUALMACE_AVALON@1",
        "humanName": "Elder'sOathkeepers"
    },
    "6843": {
        "botName": "T8_2H_DUALMACE_AVALON@2",
        "humanName": "Elder'sOathkeepers"
    },
    "6844": {
        "botName": "T8_2H_DUALMACE_AVALON@3",
        "humanName": "Elder'sOathkeepers"
    },
    "6845": {
        "botName": "T3_2H_KNUCKLES_SET1",
        "humanName": "Journeyman'sBrawlerGloves"
    },
    "6846": {
        "botName": "T4_2H_KNUCKLES_SET1",
        "humanName": "Adept'sBrawlerGloves"
    },
    "6847": {
        "botName": "T4_2H_KNUCKLES_SET1@1",
        "humanName": "Adept'sBrawlerGloves"
    },
    "6848": {
        "botName": "T4_2H_KNUCKLES_SET1@2",
        "humanName": "Adept'sBrawlerGloves"
    },
    "6849": {
        "botName": "T4_2H_KNUCKLES_SET1@3",
        "humanName": "Adept'sBrawlerGloves"
    },
    "6850": {
        "botName": "T5_2H_KNUCKLES_SET1",
        "humanName": "Expert'sBrawlerGloves"
    },
    "6851": {
        "botName": "T5_2H_KNUCKLES_SET1@1",
        "humanName": "Expert'sBrawlerGloves"
    },
    "6852": {
        "botName": "T5_2H_KNUCKLES_SET1@2",
        "humanName": "Expert'sBrawlerGloves"
    },
    "6853": {
        "botName": "T5_2H_KNUCKLES_SET1@3",
        "humanName": "Expert'sBrawlerGloves"
    },
    "6854": {
        "botName": "T6_2H_KNUCKLES_SET1",
        "humanName": "Master'sBrawlerGloves"
    },
    "6855": {
        "botName": "T6_2H_KNUCKLES_SET1@1",
        "humanName": "Master'sBrawlerGloves"
    },
    "6856": {
        "botName": "T6_2H_KNUCKLES_SET1@2",
        "humanName": "Master'sBrawlerGloves"
    },
    "6857": {
        "botName": "T6_2H_KNUCKLES_SET1@3",
        "humanName": "Master'sBrawlerGloves"
    },
    "6858": {
        "botName": "T7_2H_KNUCKLES_SET1",
        "humanName": "Grandmaster'sBrawlerGloves"
    },
    "6859": {
        "botName": "T7_2H_KNUCKLES_SET1@1",
        "humanName": "Grandmaster'sBrawlerGloves"
    },
    "6860": {
        "botName": "T7_2H_KNUCKLES_SET1@2",
        "humanName": "Grandmaster'sBrawlerGloves"
    },
    "6861": {
        "botName": "T7_2H_KNUCKLES_SET1@3",
        "humanName": "Grandmaster'sBrawlerGloves"
    },
    "6862": {
        "botName": "T8_2H_KNUCKLES_SET1",
        "humanName": "Elder'sBrawlerGloves"
    },
    "6863": {
        "botName": "T8_2H_KNUCKLES_SET1@1",
        "humanName": "Elder'sBrawlerGloves"
    },
    "6864": {
        "botName": "T8_2H_KNUCKLES_SET1@2",
        "humanName": "Elder'sBrawlerGloves"
    },
    "6865": {
        "botName": "T8_2H_KNUCKLES_SET1@3",
        "humanName": "Elder'sBrawlerGloves"
    },
    "6866": {
        "botName": "T4_2H_KNUCKLES_SET2",
        "humanName": "Adept'sBattleBracers"
    },
    "6867": {
        "botName": "T4_2H_KNUCKLES_SET2@1",
        "humanName": "Adept'sBattleBracers"
    },
    "6868": {
        "botName": "T4_2H_KNUCKLES_SET2@2",
        "humanName": "Adept'sBattleBracers"
    },
    "6869": {
        "botName": "T4_2H_KNUCKLES_SET2@3",
        "humanName": "Adept'sBattleBracers"
    },
    "6870": {
        "botName": "T5_2H_KNUCKLES_SET2",
        "humanName": "Expert'sBattleBracers"
    },
    "6871": {
        "botName": "T5_2H_KNUCKLES_SET2@1",
        "humanName": "Expert'sBattleBracers"
    },
    "6872": {
        "botName": "T5_2H_KNUCKLES_SET2@2",
        "humanName": "Expert'sBattleBracers"
    },
    "6873": {
        "botName": "T5_2H_KNUCKLES_SET2@3",
        "humanName": "Expert'sBattleBracers"
    },
    "6874": {
        "botName": "T6_2H_KNUCKLES_SET2",
        "humanName": "Master'sBattleBracers"
    },
    "6875": {
        "botName": "T6_2H_KNUCKLES_SET2@1",
        "humanName": "Master'sBattleBracers"
    },
    "6876": {
        "botName": "T6_2H_KNUCKLES_SET2@2",
        "humanName": "Master'sBattleBracers"
    },
    "6877": {
        "botName": "T6_2H_KNUCKLES_SET2@3",
        "humanName": "Master'sBattleBracers"
    },
    "6878": {
        "botName": "T7_2H_KNUCKLES_SET2",
        "humanName": "Grandmaster'sBattleBracers"
    },
    "6879": {
        "botName": "T7_2H_KNUCKLES_SET2@1",
        "humanName": "Grandmaster'sBattleBracers"
    },
    "6880": {
        "botName": "T7_2H_KNUCKLES_SET2@2",
        "humanName": "Grandmaster'sBattleBracers"
    },
    "6881": {
        "botName": "T7_2H_KNUCKLES_SET2@3",
        "humanName": "Grandmaster'sBattleBracers"
    },
    "6882": {
        "botName": "T8_2H_KNUCKLES_SET2",
        "humanName": "Elder'sBattleBracers"
    },
    "6883": {
        "botName": "T8_2H_KNUCKLES_SET2@1",
        "humanName": "Elder'sBattleBracers"
    },
    "6884": {
        "botName": "T8_2H_KNUCKLES_SET2@2",
        "humanName": "Elder'sBattleBracers"
    },
    "6885": {
        "botName": "T8_2H_KNUCKLES_SET2@3",
        "humanName": "Elder'sBattleBracers"
    },
    "6886": {
        "botName": "T4_2H_KNUCKLES_SET3",
        "humanName": "Adept'sSpikedGauntlets"
    },
    "6887": {
        "botName": "T4_2H_KNUCKLES_SET3@1",
        "humanName": "Adept'sSpikedGauntlets"
    },
    "6888": {
        "botName": "T4_2H_KNUCKLES_SET3@2",
        "humanName": "Adept'sSpikedGauntlets"
    },
    "6889": {
        "botName": "T4_2H_KNUCKLES_SET3@3",
        "humanName": "Adept'sSpikedGauntlets"
    },
    "6890": {
        "botName": "T5_2H_KNUCKLES_SET3",
        "humanName": "Expert'sSpikedGauntlets"
    },
    "6891": {
        "botName": "T5_2H_KNUCKLES_SET3@1",
        "humanName": "Expert'sSpikedGauntlets"
    },
    "6892": {
        "botName": "T5_2H_KNUCKLES_SET3@2",
        "humanName": "Expert'sSpikedGauntlets"
    },
    "6893": {
        "botName": "T5_2H_KNUCKLES_SET3@3",
        "humanName": "Expert'sSpikedGauntlets"
    },
    "6894": {
        "botName": "T6_2H_KNUCKLES_SET3",
        "humanName": "Master'sSpikedGauntlets"
    },
    "6895": {
        "botName": "T6_2H_KNUCKLES_SET3@1",
        "humanName": "Master'sSpikedGauntlets"
    },
    "6896": {
        "botName": "T6_2H_KNUCKLES_SET3@2",
        "humanName": "Master'sSpikedGauntlets"
    },
    "6897": {
        "botName": "T6_2H_KNUCKLES_SET3@3",
        "humanName": "Master'sSpikedGauntlets"
    },
    "6898": {
        "botName": "T7_2H_KNUCKLES_SET3",
        "humanName": "Grandmaster'sSpikedGauntlets"
    },
    "6899": {
        "botName": "T7_2H_KNUCKLES_SET3@1",
        "humanName": "Grandmaster'sSpikedGauntlets"
    },
    "6900": {
        "botName": "T7_2H_KNUCKLES_SET3@2",
        "humanName": "Grandmaster'sSpikedGauntlets"
    },
    "6901": {
        "botName": "T7_2H_KNUCKLES_SET3@3",
        "humanName": "Grandmaster'sSpikedGauntlets"
    },
    "6902": {
        "botName": "T8_2H_KNUCKLES_SET3",
        "humanName": "Elder'sSpikedGauntlets"
    },
    "6903": {
        "botName": "T8_2H_KNUCKLES_SET3@1",
        "humanName": "Elder'sSpikedGauntlets"
    },
    "6904": {
        "botName": "T8_2H_KNUCKLES_SET3@2",
        "humanName": "Elder'sSpikedGauntlets"
    },
    "6905": {
        "botName": "T8_2H_KNUCKLES_SET3@3",
        "humanName": "Elder'sSpikedGauntlets"
    },
    "6906": {
        "botName": "T4_2H_KNUCKLES_KEEPER",
        "humanName": "Adept'sUrsineMaulers"
    },
    "6907": {
        "botName": "T4_2H_KNUCKLES_KEEPER@1",
        "humanName": "Adept'sUrsineMaulers"
    },
    "6908": {
        "botName": "T4_2H_KNUCKLES_KEEPER@2",
        "humanName": "Adept'sUrsineMaulers"
    },
    "6909": {
        "botName": "T4_2H_KNUCKLES_KEEPER@3",
        "humanName": "Adept'sUrsineMaulers"
    },
    "6910": {
        "botName": "T5_2H_KNUCKLES_KEEPER",
        "humanName": "Expert'sUrsineMaulers"
    },
    "6911": {
        "botName": "T5_2H_KNUCKLES_KEEPER@1",
        "humanName": "Expert'sUrsineMaulers"
    },
    "6912": {
        "botName": "T5_2H_KNUCKLES_KEEPER@2",
        "humanName": "Expert'sUrsineMaulers"
    },
    "6913": {
        "botName": "T5_2H_KNUCKLES_KEEPER@3",
        "humanName": "Expert'sUrsineMaulers"
    },
    "6914": {
        "botName": "T6_2H_KNUCKLES_KEEPER",
        "humanName": "Master'sUrsineMaulers"
    },
    "6915": {
        "botName": "T6_2H_KNUCKLES_KEEPER@1",
        "humanName": "Master'sUrsineMaulers"
    },
    "6916": {
        "botName": "T6_2H_KNUCKLES_KEEPER@2",
        "humanName": "Master'sUrsineMaulers"
    },
    "6917": {
        "botName": "T6_2H_KNUCKLES_KEEPER@3",
        "humanName": "Master'sUrsineMaulers"
    },
    "6918": {
        "botName": "T7_2H_KNUCKLES_KEEPER",
        "humanName": "Grandmaster'sUrsineMaulers"
    },
    "6919": {
        "botName": "T7_2H_KNUCKLES_KEEPER@1",
        "humanName": "Grandmaster'sUrsineMaulers"
    },
    "6920": {
        "botName": "T7_2H_KNUCKLES_KEEPER@2",
        "humanName": "Grandmaster'sUrsineMaulers"
    },
    "6921": {
        "botName": "T7_2H_KNUCKLES_KEEPER@3",
        "humanName": "Grandmaster'sUrsineMaulers"
    },
    "6922": {
        "botName": "T8_2H_KNUCKLES_KEEPER",
        "humanName": "Elder'sUrsineMaulers"
    },
    "6923": {
        "botName": "T8_2H_KNUCKLES_KEEPER@1",
        "humanName": "Elder'sUrsineMaulers"
    },
    "6924": {
        "botName": "T8_2H_KNUCKLES_KEEPER@2",
        "humanName": "Elder'sUrsineMaulers"
    },
    "6925": {
        "botName": "T8_2H_KNUCKLES_KEEPER@3",
        "humanName": "Elder'sUrsineMaulers"
    },
    "6926": {
        "botName": "T4_2H_KNUCKLES_HELL",
        "humanName": "Adept'sHellfireHands"
    },
    "6927": {
        "botName": "T4_2H_KNUCKLES_HELL@1",
        "humanName": "Adept'sHellfireHands"
    },
    "6928": {
        "botName": "T4_2H_KNUCKLES_HELL@2",
        "humanName": "Adept'sHellfireHands"
    },
    "6929": {
        "botName": "T4_2H_KNUCKLES_HELL@3",
        "humanName": "Adept'sHellfireHands"
    },
    "6930": {
        "botName": "T5_2H_KNUCKLES_HELL",
        "humanName": "Expert'sHellfireHands"
    },
    "6931": {
        "botName": "T5_2H_KNUCKLES_HELL@1",
        "humanName": "Expert'sHellfireHands"
    },
    "6932": {
        "botName": "T5_2H_KNUCKLES_HELL@2",
        "humanName": "Expert'sHellfireHands"
    },
    "6933": {
        "botName": "T5_2H_KNUCKLES_HELL@3",
        "humanName": "Expert'sHellfireHands"
    },
    "6934": {
        "botName": "T6_2H_KNUCKLES_HELL",
        "humanName": "Master'sHellfireHands"
    },
    "6935": {
        "botName": "T6_2H_KNUCKLES_HELL@1",
        "humanName": "Master'sHellfireHands"
    },
    "6936": {
        "botName": "T6_2H_KNUCKLES_HELL@2",
        "humanName": "Master'sHellfireHands"
    },
    "6937": {
        "botName": "T6_2H_KNUCKLES_HELL@3",
        "humanName": "Master'sHellfireHands"
    },
    "6938": {
        "botName": "T7_2H_KNUCKLES_HELL",
        "humanName": "Grandmaster'sHellfireHands"
    },
    "6939": {
        "botName": "T7_2H_KNUCKLES_HELL@1",
        "humanName": "Grandmaster'sHellfireHands"
    },
    "6940": {
        "botName": "T7_2H_KNUCKLES_HELL@2",
        "humanName": "Grandmaster'sHellfireHands"
    },
    "6941": {
        "botName": "T7_2H_KNUCKLES_HELL@3",
        "humanName": "Grandmaster'sHellfireHands"
    },
    "6942": {
        "botName": "T8_2H_KNUCKLES_HELL",
        "humanName": "Elder'sHellfireHands"
    },
    "6943": {
        "botName": "T8_2H_KNUCKLES_HELL@1",
        "humanName": "Elder'sHellfireHands"
    },
    "6944": {
        "botName": "T8_2H_KNUCKLES_HELL@2",
        "humanName": "Elder'sHellfireHands"
    },
    "6945": {
        "botName": "T8_2H_KNUCKLES_HELL@3",
        "humanName": "Elder'sHellfireHands"
    },
    "6946": {
        "botName": "T4_2H_KNUCKLES_MORGANA",
        "humanName": "Adept'sRavenstrikeCestus"
    },
    "6947": {
        "botName": "T4_2H_KNUCKLES_MORGANA@1",
        "humanName": "Adept'sRavenstrikeCestus"
    },
    "6948": {
        "botName": "T4_2H_KNUCKLES_MORGANA@2",
        "humanName": "Adept'sRavenstrikeCestus"
    },
    "6949": {
        "botName": "T4_2H_KNUCKLES_MORGANA@3",
        "humanName": "Adept'sRavenstrikeCestus"
    },
    "6950": {
        "botName": "T5_2H_KNUCKLES_MORGANA",
        "humanName": "Expert'sRavenstrikeCestus"
    },
    "6951": {
        "botName": "T5_2H_KNUCKLES_MORGANA@1",
        "humanName": "Expert'sRavenstrikeCestus"
    },
    "6952": {
        "botName": "T5_2H_KNUCKLES_MORGANA@2",
        "humanName": "Expert'sRavenstrikeCestus"
    },
    "6953": {
        "botName": "T5_2H_KNUCKLES_MORGANA@3",
        "humanName": "Expert'sRavenstrikeCestus"
    },
    "6954": {
        "botName": "T6_2H_KNUCKLES_MORGANA",
        "humanName": "Master'sRavenstrikeCestus"
    },
    "6955": {
        "botName": "T6_2H_KNUCKLES_MORGANA@1",
        "humanName": "Master'sRavenstrikeCestus"
    },
    "6956": {
        "botName": "T6_2H_KNUCKLES_MORGANA@2",
        "humanName": "Master'sRavenstrikeCestus"
    },
    "6957": {
        "botName": "T6_2H_KNUCKLES_MORGANA@3",
        "humanName": "Master'sRavenstrikeCestus"
    },
    "6958": {
        "botName": "T7_2H_KNUCKLES_MORGANA",
        "humanName": "Grandmaster'sRavenstrikeCestus"
    },
    "6959": {
        "botName": "T7_2H_KNUCKLES_MORGANA@1",
        "humanName": "Grandmaster'sRavenstrikeCestus"
    },
    "6960": {
        "botName": "T7_2H_KNUCKLES_MORGANA@2",
        "humanName": "Grandmaster'sRavenstrikeCestus"
    },
    "6961": {
        "botName": "T7_2H_KNUCKLES_MORGANA@3",
        "humanName": "Grandmaster'sRavenstrikeCestus"
    },
    "6962": {
        "botName": "T8_2H_KNUCKLES_MORGANA",
        "humanName": "Elder'sRavenstrikeCestus"
    },
    "6963": {
        "botName": "T8_2H_KNUCKLES_MORGANA@1",
        "humanName": "Elder'sRavenstrikeCestus"
    },
    "6964": {
        "botName": "T8_2H_KNUCKLES_MORGANA@2",
        "humanName": "Elder'sRavenstrikeCestus"
    },
    "6965": {
        "botName": "T8_2H_KNUCKLES_MORGANA@3",
        "humanName": "Elder'sRavenstrikeCestus"
    },
    "6966": {
        "botName": "T4_2H_KNUCKLES_AVALON",
        "humanName": "Adept'sFistsofAvalon"
    },
    "6967": {
        "botName": "T4_2H_KNUCKLES_AVALON@1",
        "humanName": "Adept'sFistsofAvalon"
    },
    "6968": {
        "botName": "T4_2H_KNUCKLES_AVALON@2",
        "humanName": "Adept'sFistsofAvalon"
    },
    "6969": {
        "botName": "T4_2H_KNUCKLES_AVALON@3",
        "humanName": "Adept'sFistsofAvalon"
    },
    "6970": {
        "botName": "T5_2H_KNUCKLES_AVALON",
        "humanName": "Expert'sFistsofAvalon"
    },
    "6971": {
        "botName": "T5_2H_KNUCKLES_AVALON@1",
        "humanName": "Expert'sFistsofAvalon"
    },
    "6972": {
        "botName": "T5_2H_KNUCKLES_AVALON@2",
        "humanName": "Expert'sFistsofAvalon"
    },
    "6973": {
        "botName": "T5_2H_KNUCKLES_AVALON@3",
        "humanName": "Expert'sFistsofAvalon"
    },
    "6974": {
        "botName": "T6_2H_KNUCKLES_AVALON",
        "humanName": "Master'sFistsofAvalon"
    },
    "6975": {
        "botName": "T6_2H_KNUCKLES_AVALON@1",
        "humanName": "Master'sFistsofAvalon"
    },
    "6976": {
        "botName": "T6_2H_KNUCKLES_AVALON@2",
        "humanName": "Master'sFistsofAvalon"
    },
    "6977": {
        "botName": "T6_2H_KNUCKLES_AVALON@3",
        "humanName": "Master'sFistsofAvalon"
    },
    "6978": {
        "botName": "T7_2H_KNUCKLES_AVALON",
        "humanName": "Grandmaster'sFistsofAvalon"
    },
    "6979": {
        "botName": "T7_2H_KNUCKLES_AVALON@1",
        "humanName": "Grandmaster'sFistsofAvalon"
    },
    "6980": {
        "botName": "T7_2H_KNUCKLES_AVALON@2",
        "humanName": "Grandmaster'sFistsofAvalon"
    },
    "6981": {
        "botName": "T7_2H_KNUCKLES_AVALON@3",
        "humanName": "Grandmaster'sFistsofAvalon"
    },
    "6982": {
        "botName": "T8_2H_KNUCKLES_AVALON",
        "humanName": "Elder'sFistsofAvalon"
    },
    "6983": {
        "botName": "T8_2H_KNUCKLES_AVALON@1",
        "humanName": "Elder'sFistsofAvalon"
    },
    "6984": {
        "botName": "T8_2H_KNUCKLES_AVALON@2",
        "humanName": "Elder'sFistsofAvalon"
    },
    "6985": {
        "botName": "T8_2H_KNUCKLES_AVALON@3",
        "humanName": "Elder'sFistsofAvalon"
    },
    "6986": {
        "botName": "T2_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "Adventurer'sHandbook"
    },
    "6987": {
        "botName": "T3_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "MagicalTome"
    },
    "6988": {
        "botName": "T4_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "AncientScripture"
    },
    "6989": {
        "botName": "T5_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "TomeofKnowledge"
    },
    "6990": {
        "botName": "T6_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "EncyclopediaofPower"
    },
    "6991": {
        "botName": "T7_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "OccultOctavo"
    },
    "6992": {
        "botName": "T8_FURNITUREITEM_TROPHY_GENERAL",
        "humanName": "LedgerofTruths"
    },
    "6993": {
        "botName": "T8_FURNITUREITEM_TROPHY_FISHING_BOSS",
        "humanName": "TrophyShark"
    },
    "6994": {
        "botName": "T2_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "NoviceMercenary'sTrophy"
    },
    "6995": {
        "botName": "T3_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "JourneymanMercenary'sTrophy"
    },
    "6996": {
        "botName": "T4_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "AdeptMercenary'sTrophy"
    },
    "6997": {
        "botName": "T5_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "ExpertMercenary'sTrophy"
    },
    "6998": {
        "botName": "T6_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "MasterMercenary'sTrophy"
    },
    "6999": {
        "botName": "T7_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "GrandmasterMercenary'sTrophy"
    },
    "7000": {
        "botName": "T8_FURNITUREITEM_TROPHY_MERCENARY",
        "humanName": "ElderMercenary'sTrophy"
    },
    "7001": {
        "botName": "T2_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedFoxHead"
    },
    "7002": {
        "botName": "T3_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedWolfHead"
    },
    "7003": {
        "botName": "T4_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedBoarHead"
    },
    "7004": {
        "botName": "T5_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedBearHead"
    },
    "7005": {
        "botName": "T6_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedDirewolfHead"
    },
    "7006": {
        "botName": "T7_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedDireboarHead"
    },
    "7007": {
        "botName": "T8_FURNITUREITEM_TROPHY_HIDE",
        "humanName": "StuffedDirebearHead"
    },
    "7008": {
        "botName": "T2_FURNITUREITEM_TROPHY_ORE",
        "humanName": "CopperOreSample"
    },
    "7009": {
        "botName": "T3_FURNITUREITEM_TROPHY_ORE",
        "humanName": "TinOreSample"
    },
    "7010": {
        "botName": "T4_FURNITUREITEM_TROPHY_ORE",
        "humanName": "IronOreSample"
    },
    "7011": {
        "botName": "T5_FURNITUREITEM_TROPHY_ORE",
        "humanName": "TitaniumOreSample"
    },
    "7012": {
        "botName": "T6_FURNITUREITEM_TROPHY_ORE",
        "humanName": "RuniteOreSample"
    },
    "7013": {
        "botName": "T7_FURNITUREITEM_TROPHY_ORE",
        "humanName": "MeteoriteOreSample"
    },
    "7014": {
        "botName": "T8_FURNITUREITEM_TROPHY_ORE",
        "humanName": "AdamantiumOreSample"
    },
    "7015": {
        "botName": "T2_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "ComfyCottonTrophy"
    },
    "7016": {
        "botName": "T3_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "FineFlaxTrophy"
    },
    "7017": {
        "botName": "T4_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "ExquisiteHempTrophy"
    },
    "7018": {
        "botName": "T5_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "SoftSkyflowerTrophy"
    },
    "7019": {
        "botName": "T6_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "ComfyAmberleafCottonTrophy"
    },
    "7020": {
        "botName": "T7_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "FineSunflaxTrophy"
    },
    "7021": {
        "botName": "T8_FURNITUREITEM_TROPHY_FIBER",
        "humanName": "ExquisiteGhostHempTrophy"
    },
    "7022": {
        "botName": "T2_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "LimestoneFragment"
    },
    "7023": {
        "botName": "T3_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "SandstoneFragment"
    },
    "7024": {
        "botName": "T4_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "TravertineFragment"
    },
    "7025": {
        "botName": "T5_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "GraniteFragment"
    },
    "7026": {
        "botName": "T6_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "SlateFragment"
    },
    "7027": {
        "botName": "T7_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "BasaltFragment"
    },
    "7028": {
        "botName": "T8_FURNITUREITEM_TROPHY_ROCK",
        "humanName": "MarbleFragment"
    },
    "7029": {
        "botName": "T2_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "BirchBonsai"
    },
    "7030": {
        "botName": "T3_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "ChestnutBonsai"
    },
    "7031": {
        "botName": "T4_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "PineBonsai"
    },
    "7032": {
        "botName": "T5_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "CedarBonsai"
    },
    "7033": {
        "botName": "T6_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "BloodoakBonsai"
    },
    "7034": {
        "botName": "T7_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "AshenbarkBonsai"
    },
    "7035": {
        "botName": "T8_FURNITUREITEM_TROPHY_WOOD",
        "humanName": "WhitewoodBonsai"
    },
    "7036": {
        "botName": "T2_FURNITUREITEM_TROPHY_FISH",
        "humanName": "CarpTrophy"
    },
    "7037": {
        "botName": "T3_FURNITUREITEM_TROPHY_FISH",
        "humanName": "PerchTrophy"
    },
    "7038": {
        "botName": "T4_FURNITUREITEM_TROPHY_FISH",
        "humanName": "PikeTrophy"
    },
    "7039": {
        "botName": "T5_FURNITUREITEM_TROPHY_FISH",
        "humanName": "TroutTrophy"
    },
    "7040": {
        "botName": "T6_FURNITUREITEM_TROPHY_FISH",
        "humanName": "ZanderTrophy"
    },
    "7041": {
        "botName": "T7_FURNITUREITEM_TROPHY_FISH",
        "humanName": "CatfishTrophy"
    },
    "7042": {
        "botName": "T8_FURNITUREITEM_TROPHY_FISH",
        "humanName": "SwordfishTrophy"
    },
    "7043": {
        "botName": "UNIQUE_WEAPONMASTER_HEAD_PROTOTYPE"
    },
    "7044": {
        "botName": "UNIQUE_WEAPONMASTER_ARMOR_PROTOTYPE"
    },
    "7045": {
        "botName": "UNIQUE_WEAPONMASTER_SHOES_PROTOTYPE"
    },
    "7046": {
        "botName": "UNIQUE_WEAPONMASTER_POTION_PROTOTYPE"
    },
    "7047": {
        "botName": "UNIQUE_WEAPONMASTER_IDLE_PROTOTYPE"
    },
    "7048": {
        "botName": "UNIQUE_GVGTOKEN_GENERIC",
        "humanName": "SiphonedEnergy"
    },
    "7049": {
        "botName": "T4_CAPEITEM_FW_BRIDGEWATCH_BP",
        "humanName": "Adept'sBridgewatchCrest"
    },
    "7050": {
        "botName": "T5_CAPEITEM_FW_BRIDGEWATCH_BP",
        "humanName": "Expert'sBridgewatchCrest"
    },
    "7051": {
        "botName": "T6_CAPEITEM_FW_BRIDGEWATCH_BP",
        "humanName": "Master'sBridgewatchCrest"
    },
    "7052": {
        "botName": "T7_CAPEITEM_FW_BRIDGEWATCH_BP",
        "humanName": "Grandmaster'sBridgewatchCrest"
    },
    "7053": {
        "botName": "T8_CAPEITEM_FW_BRIDGEWATCH_BP",
        "humanName": "Elder'sBridgewatchCrest"
    },
    "7054": {
        "botName": "T4_CAPEITEM_FW_FORTSTERLING_BP",
        "humanName": "Adept'sFortSterlingCrest"
    },
    "7055": {
        "botName": "T5_CAPEITEM_FW_FORTSTERLING_BP",
        "humanName": "Expert'sFortSterlingCrest"
    },
    "7056": {
        "botName": "T6_CAPEITEM_FW_FORTSTERLING_BP",
        "humanName": "Master'sFortSterlingCrest"
    },
    "7057": {
        "botName": "T7_CAPEITEM_FW_FORTSTERLING_BP",
        "humanName": "Grandmaster'sFortSterlingCrest"
    },
    "7058": {
        "botName": "T8_CAPEITEM_FW_FORTSTERLING_BP",
        "humanName": "Elder'sFortSterlingCrest"
    },
    "7059": {
        "botName": "T4_CAPEITEM_FW_LYMHURST_BP",
        "humanName": "Adept'sLymhurstCrest"
    },
    "7060": {
        "botName": "T5_CAPEITEM_FW_LYMHURST_BP",
        "humanName": "Expert'sLymhurstCrest"
    },
    "7061": {
        "botName": "T6_CAPEITEM_FW_LYMHURST_BP",
        "humanName": "Master'sLymhurstCrest"
    },
    "7062": {
        "botName": "T7_CAPEITEM_FW_LYMHURST_BP",
        "humanName": "Grandmaster'sLymhurstCrest"
    },
    "7063": {
        "botName": "T8_CAPEITEM_FW_LYMHURST_BP",
        "humanName": "Elder'sLymhurstCrest"
    },
    "7064": {
        "botName": "T4_CAPEITEM_FW_MARTLOCK_BP",
        "humanName": "Adept'sMartlockCrest"
    },
    "7065": {
        "botName": "T5_CAPEITEM_FW_MARTLOCK_BP",
        "humanName": "Expert'sMartlockCrest"
    },
    "7066": {
        "botName": "T6_CAPEITEM_FW_MARTLOCK_BP",
        "humanName": "Master'sMartlockCrest"
    },
    "7067": {
        "botName": "T7_CAPEITEM_FW_MARTLOCK_BP",
        "humanName": "Grandmaster'sMartlockCrest"
    },
    "7068": {
        "botName": "T8_CAPEITEM_FW_MARTLOCK_BP",
        "humanName": "Elder'sMartlockCrest"
    },
    "7069": {
        "botName": "T4_CAPEITEM_FW_THETFORD_BP",
        "humanName": "Adept'sThetfordCrest"
    },
    "7070": {
        "botName": "T5_CAPEITEM_FW_THETFORD_BP",
        "humanName": "Expert'sThetfordCrest"
    },
    "7071": {
        "botName": "T6_CAPEITEM_FW_THETFORD_BP",
        "humanName": "Master'sThetfordCrest"
    },
    "7072": {
        "botName": "T7_CAPEITEM_FW_THETFORD_BP",
        "humanName": "Grandmaster'sThetfordCrest"
    },
    "7073": {
        "botName": "T8_CAPEITEM_FW_THETFORD_BP",
        "humanName": "Elder'sThetfordCrest"
    },
    "7074": {
        "botName": "T4_CAPEITEM_FW_CAERLEON_BP",
        "humanName": "Adept'sCaerleonCrest"
    },
    "7075": {
        "botName": "T5_CAPEITEM_FW_CAERLEON_BP",
        "humanName": "Expert'sCaerleonCrest"
    },
    "7076": {
        "botName": "T6_CAPEITEM_FW_CAERLEON_BP",
        "humanName": "Master'sCaerleonCrest"
    },
    "7077": {
        "botName": "T7_CAPEITEM_FW_CAERLEON_BP",
        "humanName": "Grandmaster'sCaerleonCrest"
    },
    "7078": {
        "botName": "T8_CAPEITEM_FW_CAERLEON_BP",
        "humanName": "Elder'sCaerleonCrest"
    },
    "7079": {
        "botName": "T4_CAPEITEM_HERETIC_BP",
        "humanName": "Adept'sHereticCrest"
    },
    "7080": {
        "botName": "T5_CAPEITEM_HERETIC_BP",
        "humanName": "Expert'sHereticCrest"
    },
    "7081": {
        "botName": "T6_CAPEITEM_HERETIC_BP",
        "humanName": "Master'sHereticCrest"
    },
    "7082": {
        "botName": "T7_CAPEITEM_HERETIC_BP",
        "humanName": "Grandmaster'sHereticCrest"
    },
    "7083": {
        "botName": "T8_CAPEITEM_HERETIC_BP",
        "humanName": "Elder'sHereticCrest"
    },
    "7084": {
        "botName": "T4_CAPEITEM_UNDEAD_BP",
        "humanName": "Adept'sUndeadCrest"
    },
    "7085": {
        "botName": "T5_CAPEITEM_UNDEAD_BP",
        "humanName": "Expert'sUndeadCrest"
    },
    "7086": {
        "botName": "T6_CAPEITEM_UNDEAD_BP",
        "humanName": "Master'sUndeadCrest"
    },
    "7087": {
        "botName": "T7_CAPEITEM_UNDEAD_BP",
        "humanName": "Grandmaster'sUndeadCrest"
    },
    "7088": {
        "botName": "T8_CAPEITEM_UNDEAD_BP",
        "humanName": "Elder'sUndeadCrest"
    },
    "7089": {
        "botName": "T4_CAPEITEM_KEEPER_BP",
        "humanName": "Adept'sKeeperCrest"
    },
    "7090": {
        "botName": "T5_CAPEITEM_KEEPER_BP",
        "humanName": "Expert'sKeeperCrest"
    },
    "7091": {
        "botName": "T6_CAPEITEM_KEEPER_BP",
        "humanName": "Master'sKeeperCrest"
    },
    "7092": {
        "botName": "T7_CAPEITEM_KEEPER_BP",
        "humanName": "Grandmaster'sKeeperCrest"
    },
    "7093": {
        "botName": "T8_CAPEITEM_KEEPER_BP",
        "humanName": "Elder'sKeeperCrest"
    },
    "7094": {
        "botName": "T4_CAPEITEM_MORGANA_BP",
        "humanName": "Adept'sMorganaCrest"
    },
    "7095": {
        "botName": "T5_CAPEITEM_MORGANA_BP",
        "humanName": "Expert'sMorganaCrest"
    },
    "7096": {
        "botName": "T6_CAPEITEM_MORGANA_BP",
        "humanName": "Master'sMorganaCrest"
    },
    "7097": {
        "botName": "T7_CAPEITEM_MORGANA_BP",
        "humanName": "Grandmaster'sMorganaCrest"
    },
    "7098": {
        "botName": "T8_CAPEITEM_MORGANA_BP",
        "humanName": "Elder'sMorganaCrest"
    },
    "7099": {
        "botName": "T4_CAPEITEM_DEMON_BP",
        "humanName": "Adept'sDemonCrest"
    },
    "7100": {
        "botName": "T5_CAPEITEM_DEMON_BP",
        "humanName": "Expert'sDemonCrest"
    },
    "7101": {
        "botName": "T6_CAPEITEM_DEMON_BP",
        "humanName": "Master'sDemonCrest"
    },
    "7102": {
        "botName": "T7_CAPEITEM_DEMON_BP",
        "humanName": "Grandmaster'sDemonCrest"
    },
    "7103": {
        "botName": "T8_CAPEITEM_DEMON_BP",
        "humanName": "Elder'sDemonCrest"
    },
    "7104": {
        "botName": "T1_FACTION_FOREST_TOKEN_1",
        "humanName": "Treeheart"
    },
    "7105": {
        "botName": "T1_FACTION_HIGHLAND_TOKEN_1",
        "humanName": "Rockheart"
    },
    "7106": {
        "botName": "T1_FACTION_STEPPE_TOKEN_1",
        "humanName": "Beastheart"
    },
    "7107": {
        "botName": "T1_FACTION_MOUNTAIN_TOKEN_1",
        "humanName": "Mountainheart"
    },
    "7108": {
        "botName": "T1_FACTION_SWAMP_TOKEN_1",
        "humanName": "Vineheart"
    },
    "7109": {
        "botName": "T1_FACTION_CAERLEON_TOKEN_1",
        "humanName": "Shadowheart"
    },
    "7110": {
        "botName": "T4_LOOTBAG_EXPEDITION_ROYAL_SIGIL",
        "humanName": "SealedRoyalSigil"
    },
    "7111": {
        "botName": "T4_LOOTBAG_ARENA_RANK_UP_2",
        "humanName": "CrystalArenaChest-IronII"
    },
    "7112": {
        "botName": "T5_LOOTBAG_ARENA_RANK_UP_3",
        "humanName": "CrystalArenaChest-BronzeI"
    },
    "7113": {
        "botName": "T5_LOOTBAG_ARENA_RANK_UP_4",
        "humanName": "CrystalArenaChest-BronzeII"
    },
    "7114": {
        "botName": "T6_LOOTBAG_ARENA_RANK_UP_5",
        "humanName": "CrystalArenaChest-SilverI"
    },
    "7115": {
        "botName": "T6_LOOTBAG_ARENA_RANK_UP_6",
        "humanName": "CrystalArenaChest-SilverII"
    },
    "7116": {
        "botName": "T7_LOOTBAG_ARENA_RANK_UP_7",
        "humanName": "CrystalArenaChest-GoldI"
    },
    "7117": {
        "botName": "T7_LOOTBAG_ARENA_RANK_UP_8",
        "humanName": "CrystalArenaChest-GoldII"
    },
    "7118": {
        "botName": "T8_LOOTBAG_ARENA_RANK_UP_9",
        "humanName": "CrystalArenaChest-Crystal"
    },
    "7119": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_0",
        "humanName": "VictoryPouch(Arena)"
    },
    "7120": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_1",
        "humanName": "VictoryPouch(IronI)"
    },
    "7121": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_2",
        "humanName": "VictoryPouch(IronII)"
    },
    "7122": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_3",
        "humanName": "VictoryPouch(BronzeI)"
    },
    "7123": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_4",
        "humanName": "VictoryPouch(BronzeII)"
    },
    "7124": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_5",
        "humanName": "VictoryPouch(SilverI)"
    },
    "7125": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_6",
        "humanName": "VictoryPouch(SilverII)"
    },
    "7126": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_7",
        "humanName": "VictoryPouch(GoldI)"
    },
    "7127": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_8",
        "humanName": "VictoryPouch(GoldII)"
    },
    "7128": {
        "botName": "T2_LOOTBAG_ARENA_WIN_BASIC_9",
        "humanName": "VictoryPouch(Crystal)"
    },
    "7129": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_0",
        "humanName": "PremiumVictoryPouch(Arena)"
    },
    "7130": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_1",
        "humanName": "PremiumVictoryPouch(IronI)"
    },
    "7131": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_2",
        "humanName": "PremiumVictoryPouch(IronII)"
    },
    "7132": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_3",
        "humanName": "PremiumVictoryPouch(BronzeI)"
    },
    "7133": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_4",
        "humanName": "PremiumVictoryPouch(BronzeII)"
    },
    "7134": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_5",
        "humanName": "PremiumVictoryPouch(SilverI)"
    },
    "7135": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_6",
        "humanName": "PremiumVictoryPouch(SilverII)"
    },
    "7136": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_7",
        "humanName": "PremiumVictoryPouch(GoldI)"
    },
    "7137": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_8",
        "humanName": "PremiumVictoryPouch(GoldII)"
    },
    "7138": {
        "botName": "T3_LOOTBAG_ARENA_WIN_PREMIUM_9",
        "humanName": "PremiumVictoryPouch(Crystal)"
    },
    "7139": {
        "botName": "T4_LOOTCHEST_CRYSTAL_LEAGUE",
        "humanName": "Adept'sCrystalLeagueChest"
    },
    "7140": {
        "botName": "T5_LOOTCHEST_CRYSTAL_LEAGUE",
        "humanName": "Expert'sCrystalLeagueChest"
    },
    "7141": {
        "botName": "T6_LOOTCHEST_CRYSTAL_LEAGUE",
        "humanName": "Master'sCrystalLeagueChest"
    },
    "7142": {
        "botName": "T7_LOOTCHEST_CRYSTAL_LEAGUE",
        "humanName": "Grandmaster'sCrystalLeagueChest"
    },
    "7143": {
        "botName": "T8_LOOTCHEST_CRYSTAL_LEAGUE",
        "humanName": "Elder'sCrystalLeagueChest"
    },
    "7144": {
        "botName": "UNIQUE_SKILLBOOK_ADC_GENERAL_01",
        "humanName": "Adventurer'sTome"
    },
    "7145": {
        "botName": "UNIQUE_SILVERBAG_ADC_GENERAL_01",
        "humanName": "BagofSilver"
    },
    "7146": {
        "botName": "UNIQUE_REPAIRPOWDER_ADC_GENERAL_01",
        "humanName": "ScrollofRepair"
    },
    "7147": {
        "botName": "UNIQUE_FOCUSPOTION_ADC_GENERAL_01",
        "humanName": "FocusRestorationPotion"
    },
    "7148": {
        "botName": "UNIQUE_FOCUSPOTION_ADC_NONTRADABLE_01",
        "humanName": "FocusRestorationPotion"
    },
    "7149": {
        "botName": "UNIQUE_FOCUSPOTION_TUTORIAL_01",
        "humanName": "DilutedFocusRestorationPotion"
    },
    "7150": {
        "botName": "UNIQUE_LOOTCHEST_ADC_OCT2018_01",
        "humanName": "HarvestChallengeChest"
    },
    "7151": {
        "botName": "UNIQUE_LOOTCHEST_ADC_NOV2018",
        "humanName": "GrimChallengeChest"
    },
    "7152": {
        "botName": "UNIQUE_LOOTCHEST_ADC_DEC2018",
        "humanName": "YuletideChallengeChest"
    },
    "7153": {
        "botName": "UNIQUE_LOOTCHEST_ADC_JAN2019",
        "humanName": "FrostChallengeChest"
    },
    "7154": {
        "botName": "UNIQUE_LOOTCHEST_ADC_FEB2019",
        "humanName": "CarnivalChallengeChest"
    },
    "7155": {
        "botName": "UNIQUE_LOOTCHEST_ADC_MAR2019",
        "humanName": "KeeperChallengeChest"
    },
    "7156": {
        "botName": "UNIQUE_LOOTCHEST_ADC_APR2019",
        "humanName": "HunterChallengeChest"
    },
    "7157": {
        "botName": "UNIQUE_LOOTCHEST_ADC_MAY2019",
        "humanName": "MorganaChallengeChest"
    },
    "7158": {
        "botName": "UNIQUE_LOOTCHEST_ADC_JUN2019",
        "humanName": "KnightChallengeChest"
    },
    "7159": {
        "botName": "UNIQUE_LOOTCHEST_ADC_JUL2019",
        "humanName": "UndeadChallengeChest"
    },
    "7160": {
        "botName": "UNIQUE_LOOTCHEST_ADC_AUG2019",
        "humanName": "DivineChallengeChest"
    },
    "7161": {
        "botName": "UNIQUE_LOOTCHEST_ADC_SEP2019",
        "humanName": "HereticChallengeChest"
    },
    "7162": {
        "botName": "UNIQUE_LOOTCHEST_ADC_OCT2019",
        "humanName": "HarvestChallengeChest"
    },
    "7163": {
        "botName": "UNIQUE_AVATARRING_ADC_NOV2018",
        "humanName": "AvatarRing"
    },
    "7164": {
        "botName": "UNIQUE_AVATARRING_ADC_DEC2018",
        "humanName": "AvatarRing"
    },
    "7165": {
        "botName": "UNIQUE_AVATARRING_ADC_JAN2019",
        "humanName": "AvatarRing"
    },
    "7166": {
        "botName": "UNIQUE_AVATARRING_ADC_FEB2019",
        "humanName": "AvatarRing"
    },
    "7167": {
        "botName": "UNIQUE_AVATARRING_ADC_MAR2019",
        "humanName": "AvatarRing"
    },
    "7168": {
        "botName": "UNIQUE_AVATARRING_ADC_APR2019",
        "humanName": "AvatarRing"
    },
    "7169": {
        "botName": "UNIQUE_AVATARRING_ADC_MAY2019",
        "humanName": "AvatarRing"
    },
    "7170": {
        "botName": "UNIQUE_AVATARRING_ADC_JUN2019",
        "humanName": "AvatarRing"
    },
    "7171": {
        "botName": "UNIQUE_AVATARRING_ADC_JUL2019",
        "humanName": "AvatarRing"
    },
    "7172": {
        "botName": "UNIQUE_AVATARRING_ADC_AUG2019",
        "humanName": "AvatarRing"
    },
    "7173": {
        "botName": "UNIQUE_AVATARRING_ADC_SEP2019",
        "humanName": "AvatarRing"
    },
    "7174": {
        "botName": "UNIQUE_AVATARRING_ADC_OCT2019",
        "humanName": "AvatarRing"
    },
    "7175": {
        "botName": "UNIQUE_AVATARRING_CHARITY_MARCH2020",
        "humanName": "AvatarRing"
    },
    "7176": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_01",
        "humanName": "AvatarRing"
    },
    "7177": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_NATURE",
        "humanName": "AvatarRing"
    },
    "7178": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_FIRE",
        "humanName": "AvatarRing"
    },
    "7179": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_ARCANE",
        "humanName": "AvatarRing"
    },
    "7180": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_SWORDS",
        "humanName": "AvatarRing"
    },
    "7181": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_FARMING",
        "humanName": "AvatarRing"
    },
    "7182": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_AXES",
        "humanName": "AvatarRing"
    },
    "7183": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_FISHING",
        "humanName": "AvatarRing"
    },
    "7184": {
        "botName": "UNIQUE_AVATARRING_ADC_TOKENLOCKED_NECROMANCER",
        "humanName": "AvatarRing"
    },
    "7185": {
        "botName": "UNIQUE_AVATAR_ADC_TOKENLOCKED_01",
        "humanName": "Avatar"
    },
    "7186": {
        "botName": "T8_GVGSEASONREWARD_FAMEBUFF",
        "humanName": "Elder'sKnight'sVow"
    },
    "7187": {
        "botName": "T7_GVGSEASONREWARD_FAMEBUFF",
        "humanName": "Grandmaster'sKnight'sVow"
    },
    "7188": {
        "botName": "T6_GVGSEASONREWARD_FAMEBUFF",
        "humanName": "Master'sKnight'sVow"
    },
    "7189": {
        "botName": "T5_GVGSEASONREWARD_FAMEBUFF",
        "humanName": "Expert'sKnight'sVow"
    },
    "7190": {
        "botName": "T4_GVGSEASONREWARD_FAMEBUFF",
        "humanName": "Adept'sKnight'sVow"
    },
    "7191": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_NEUTRAL"
    },
    "7192": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_01",
        "humanName": "IronCampaignChest"
    },
    "7193": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_02",
        "humanName": "BronzeCampaignChest"
    },
    "7194": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_03",
        "humanName": "SilverCampaignChest"
    },
    "7195": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_SWAMP_04",
        "humanName": "GoldCampaignChest"
    },
    "7196": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_01",
        "humanName": "IronCampaignChest"
    },
    "7197": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_02",
        "humanName": "BronzeCampaignChest"
    },
    "7198": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_03",
        "humanName": "SilverCampaignChest"
    },
    "7199": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_MOUNTAIN_04",
        "humanName": "GoldCampaignChest"
    },
    "7200": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_01",
        "humanName": "IronCampaignChest"
    },
    "7201": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_02",
        "humanName": "BronzeCampaignChest"
    },
    "7202": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_03",
        "humanName": "SilverCampaignChest"
    },
    "7203": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_FOREST_04",
        "humanName": "GoldCampaignChest"
    },
    "7204": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_01",
        "humanName": "IronCampaignChest"
    },
    "7205": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_02",
        "humanName": "BronzeCampaignChest"
    },
    "7206": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_03",
        "humanName": "SilverCampaignChest"
    },
    "7207": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_STEPPE_04",
        "humanName": "GoldCampaignChest"
    },
    "7208": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_01",
        "humanName": "IronCampaignChest"
    },
    "7209": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_02",
        "humanName": "BronzeCampaignChest"
    },
    "7210": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_03",
        "humanName": "SilverCampaignChest"
    },
    "7211": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_HIGHLAND_04",
        "humanName": "GoldCampaignChest"
    },
    "7212": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_01",
        "humanName": "IronCampaignChest"
    },
    "7213": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_02",
        "humanName": "BronzeCampaignChest"
    },
    "7214": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_03",
        "humanName": "SilverCampaignChest"
    },
    "7215": {
        "botName": "UNIQUE_LOOTCHEST_FACTIONCAMPAIGN_REWARD_CAERLEON_04",
        "humanName": "GoldCampaignChest"
    },
    "7216": {
        "botName": "UNIQUE_LOOTCHEST_CONQUEROR_WEEKLY_REWARD",
        "humanName": "GrandConqueror'sChest"
    },
    "7217": {
        "botName": "UNIQUE_LOOTCHEST_CONQUEROR_FAVOR_PURCHASE",
        "humanName": "Conqueror'sChest"
    },
    "7218": {
        "botName": "UNIQUE_LOOTCHEST_BATTLEMOUNT_CRYSTAL",
        "humanName": "CrystalBattleMountChest"
    },
    "7219": {
        "botName": "UNIQUE_LOOTCHEST_BATTLEMOUNT_GOLD",
        "humanName": "GoldBattleMountChest"
    },
    "7220": {
        "botName": "UNIQUE_LOOTCHEST_BATTLEMOUNT_SILVER",
        "humanName": "SilverBattleMountChest"
    },
    "7221": {
        "botName": "UNIQUE_LOOTCHEST_BATTLEMOUNT_BRONZE",
        "humanName": "BronzeBattleMountChest"
    },
    "7222": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_09_1ST",
        "humanName": "1stPlaceStatue-Season9"
    },
    "7223": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_09_2ND",
        "humanName": "2ndPlaceStatue-Season9"
    },
    "7224": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_09_3RD",
        "humanName": "3rdPlaceStatue-Season9"
    },
    "7225": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_10_1ST",
        "humanName": "1stPlaceStatue-Season10"
    },
    "7226": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_10_2ND",
        "humanName": "2ndPlaceStatue-Season10"
    },
    "7227": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_10_3RD",
        "humanName": "3rdPlaceStatue-Season10"
    },
    "7228": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_11_1ST",
        "humanName": "1stPlaceStatue-Season11"
    },
    "7229": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_11_2ND",
        "humanName": "2ndPlaceStatue-Season11"
    },
    "7230": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_11_3RD",
        "humanName": "3rdPlaceStatue-Season11"
    },
    "7231": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_12_1ST",
        "humanName": "1stPlaceStatue-Season12"
    },
    "7232": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_12_2ND",
        "humanName": "2ndPlaceStatue-Season12"
    },
    "7233": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_12_3RD",
        "humanName": "3rdPlaceStatue-Season12"
    },
    "7234": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_13_1ST",
        "humanName": "1stPlaceStatue-Season13"
    },
    "7235": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_13_2ND",
        "humanName": "2ndPlaceStatue-Season13"
    },
    "7236": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_13_3RD",
        "humanName": "3rdPlaceStatue-Season13"
    },
    "7237": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_1ST",
        "humanName": "1stPlaceStatue-EnergySurgeSeason"
    },
    "7238": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_2ND",
        "humanName": "2ndPlaceStatue-EnergySurgeSeason"
    },
    "7239": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_ENERGY_RUSH_3RD",
        "humanName": "3rdPlaceStatue-EnergySurgeSeason"
    },
    "7240": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_14_1ST",
        "humanName": "1stPlaceStatue-Season14"
    },
    "7241": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_14_2ND",
        "humanName": "2ndPlaceStatue-Season14"
    },
    "7242": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_14_3RD",
        "humanName": "3rdPlaceStatue-Season14"
    },
    "7243": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_15_1ST",
        "humanName": "1stPlaceStatue-Season15"
    },
    "7244": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_15_2ND",
        "humanName": "2ndPlaceStatue-Season15"
    },
    "7245": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_15_3RD",
        "humanName": "3rdPlaceStatue-Season15"
    },
    "7246": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_16_1ST"
    },
    "7247": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_16_2ND"
    },
    "7248": {
        "botName": "UNIQUE_FURNITUREITEM_GVG_SEASON_16_3RD"
    },
    "7249": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_1ST",
        "humanName": "AvatarRing"
    },
    "7250": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_2ND",
        "humanName": "AvatarRing"
    },
    "7251": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_3RD",
        "humanName": "AvatarRing"
    },
    "7252": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_CRYSTAL",
        "humanName": "AvatarRingSet"
    },
    "7253": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_GOLD",
        "humanName": "AvatarRingSet"
    },
    "7254": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_SILVER",
        "humanName": "AvatarRingSet"
    },
    "7255": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_BRONZE",
        "humanName": "AvatarRingSet"
    },
    "7256": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_IRON",
        "humanName": "AvatarRing"
    },
    "7257": {
        "botName": "UNIQUE_AVATARRING_GVGSEASONREWARD_AVALON_INVASION",
        "humanName": "AvatarRing"
    },
    "7258": {
        "botName": "UNIQUE_AVATARRING_TELLAFRIEND",
        "humanName": "AvatarRing"
    },
    "7259": {
        "botName": "UNIQUE_AVATARRING_ORIGINAL_PLAYER",
        "humanName": "AvatarRing"
    },
    "7260": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_04",
        "humanName": "Avatar"
    },
    "7261": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_05",
        "humanName": "Avatar"
    },
    "7262": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_06",
        "humanName": "Avatar"
    },
    "7263": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_07",
        "humanName": "Avatar"
    },
    "7264": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_AVALON_INVASION",
        "humanName": "Avatar"
    },
    "7265": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_08",
        "humanName": "Avatar"
    },
    "7266": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_09",
        "humanName": "Avatar"
    },
    "7267": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_10",
        "humanName": "Avatar"
    },
    "7268": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_11",
        "humanName": "Avatar"
    },
    "7269": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_12",
        "humanName": "Avatar"
    },
    "7270": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_13",
        "humanName": "Avatar"
    },
    "7271": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_CRYSTAL",
        "humanName": "AvatarSet"
    },
    "7272": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_GOLD",
        "humanName": "AvatarSet"
    },
    "7273": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_SILVER",
        "humanName": "AvatarSet"
    },
    "7274": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_ENERGY_RUSH_BRONZE",
        "humanName": "Avatar"
    },
    "7275": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_14_CRYSTAL",
        "humanName": "AvatarSet"
    },
    "7276": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_14_GOLD",
        "humanName": "AvatarSet"
    },
    "7277": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_14_SILVER",
        "humanName": "AvatarSet"
    },
    "7278": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_14_BRONZE",
        "humanName": "Avatar"
    },
    "7279": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_15_CRYSTAL",
        "humanName": "AvatarSet"
    },
    "7280": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_15_GOLD",
        "humanName": "AvatarSet"
    },
    "7281": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_15_SILVER",
        "humanName": "AvatarSet"
    },
    "7282": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_15_BRONZE",
        "humanName": "Avatar"
    },
    "7283": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_16_CRYSTAL",
        "humanName": "AvatarSet"
    },
    "7284": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_16_GOLD",
        "humanName": "AvatarSet"
    },
    "7285": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_16_SILVER",
        "humanName": "AvatarSet"
    },
    "7286": {
        "botName": "UNIQUE_AVATAR_GVGSEASON_16_BRONZE",
        "humanName": "Avatar"
    },
    "7287": {
        "botName": "T6_HELLGATE_2V2_LETHAL_1_MAP",
        "humanName": "Master'sHellgateRitual(2v2-Lethal)"
    },
    "7288": {
        "botName": "T7_HELLGATE_5V5_LETHAL_1_MAP",
        "humanName": "Grandmaster'sHellgateRitual(5v5-Lethal)"
    },
    "7289": {
        "botName": "T8_HELLGATE_10V10_LETHAL_1_MAP",
        "humanName": "Elder'sHellgateRitual(10v10-Lethal)"
    },
    "7290": {
        "botName": "T5_HELLGATE_2V2_NON_LETHAL_1_MAP",
        "humanName": "Expert'sHellgateRitual(2v2-Nonlethal)"
    },
    "7291": {
        "botName": "T5_HELLGATE_5V5_NON_LETHAL_1_MAP",
        "humanName": "Expert'sHellgateRitual(5v5-Nonlethal)"
    },
    "7292": {
        "botName": "T5_HELLGATE_10V10_NON_LETHAL_1_MAP",
        "humanName": "Expert'sHellgateRitual(10v10-Nonlethal)"
    },
    "7293": {
        "botName": "T6_RANDOM_DUNGEON_ELITE_TOKEN_1",
        "humanName": "Master'sDungeonMap(LargeGroup)"
    },
    "7294": {
        "botName": "T7_RANDOM_DUNGEON_ELITE_TOKEN_1",
        "humanName": "Grandmaster'sDungeonMap(LargeGroup)"
    },
    "7295": {
        "botName": "T8_RANDOM_DUNGEON_ELITE_TOKEN_1",
        "humanName": "Elder'sDungeonMap(LargeGroup)"
    },
    "7296": {
        "botName": "T6_RANDOM_DUNGEON_ELITE_TOKEN_2@1",
        "humanName": "UncommonMaster'sDungeonMap(LargeGroup)"
    },
    "7297": {
        "botName": "T7_RANDOM_DUNGEON_ELITE_TOKEN_2@1",
        "humanName": "UncommonGrandmaster'sDungeonMap(LargeGroup)"
    },
    "7298": {
        "botName": "T8_RANDOM_DUNGEON_ELITE_TOKEN_2@1",
        "humanName": "UncommonElder'sDungeonMap(LargeGroup)"
    },
    "7299": {
        "botName": "T6_RANDOM_DUNGEON_ELITE_TOKEN_3@2",
        "humanName": "RareMaster'sDungeonMap(LargeGroup)"
    },
    "7300": {
        "botName": "T7_RANDOM_DUNGEON_ELITE_TOKEN_3@2",
        "humanName": "RareGrandmaster'sDungeonMap(LargeGroup)"
    },
    "7301": {
        "botName": "T8_RANDOM_DUNGEON_ELITE_TOKEN_3@2",
        "humanName": "RareElder'sDungeonMap(LargeGroup)"
    },
    "7302": {
        "botName": "T6_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
        "humanName": "ExceptionalMaster'sDungeonMap(LargeGroup)"
    },
    "7303": {
        "botName": "T7_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
        "humanName": "ExceptionalGrandmaster'sDungeonMap(LargeGroup)"
    },
    "7304": {
        "botName": "T8_RANDOM_DUNGEON_ELITE_TOKEN_4@3",
        "humanName": "ExceptionalElder'sDungeonMap(LargeGroup)"
    },
    "7305": {
        "botName": "T2_RANDOM_DUNGEON_SOLO_TOKEN_1"
    },
    "7306": {
        "botName": "T3_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Journeyman'sDungeonMap(Solo)"
    },
    "7307": {
        "botName": "T4_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Adept'sDungeonMap(Solo)"
    },
    "7308": {
        "botName": "T5_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Expert'sDungeonMap(Solo)"
    },
    "7309": {
        "botName": "T6_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Master'sDungeonMap(Solo)"
    },
    "7310": {
        "botName": "T7_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Grandmaster'sDungeonMap(Solo)"
    },
    "7311": {
        "botName": "T8_RANDOM_DUNGEON_SOLO_TOKEN_1",
        "humanName": "Elder'sDungeonMap(Solo)"
    },
    "7312": {
        "botName": "T4_RANDOM_DUNGEON_SOLO_TOKEN_2@1",
        "humanName": "UncommonAdept'sDungeonMap(Solo)"
    },
    "7313": {
        "botName": "T5_RANDOM_DUNGEON_SOLO_TOKEN_2@1",
        "humanName": "UncommonExpert'sDungeonMap(Solo)"
    },
    "7314": {
        "botName": "T6_RANDOM_DUNGEON_SOLO_TOKEN_2@1",
        "humanName": "UncommonMaster'sDungeonMap(Solo)"
    },
    "7315": {
        "botName": "T7_RANDOM_DUNGEON_SOLO_TOKEN_2@1",
        "humanName": "UncommonGrandmaster'sDungeonMap(Solo)"
    },
    "7316": {
        "botName": "T8_RANDOM_DUNGEON_SOLO_TOKEN_2@1",
        "humanName": "UncommonElder'sDungeonMap(Solo)"
    },
    "7317": {
        "botName": "T4_RANDOM_DUNGEON_SOLO_TOKEN_3@2",
        "humanName": "RareAdept'sDungeonMap(Solo)"
    },
    "7318": {
        "botName": "T5_RANDOM_DUNGEON_SOLO_TOKEN_3@2",
        "humanName": "RareExpert'sDungeonMap(Solo)"
    },
    "7319": {
        "botName": "T6_RANDOM_DUNGEON_SOLO_TOKEN_3@2",
        "humanName": "RareMaster'sDungeonMap(Solo)"
    },
    "7320": {
        "botName": "T7_RANDOM_DUNGEON_SOLO_TOKEN_3@2",
        "humanName": "RareGrandmaster'sDungeonMap(Solo)"
    },
    "7321": {
        "botName": "T8_RANDOM_DUNGEON_SOLO_TOKEN_3@2",
        "humanName": "RareElder'sDungeonMap(Solo)"
    },
    "7322": {
        "botName": "T4_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
        "humanName": "ExceptionalAdept'sDungeonMap(Solo)"
    },
    "7323": {
        "botName": "T5_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
        "humanName": "ExceptionalExpert'sDungeonMap(Solo)"
    },
    "7324": {
        "botName": "T6_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
        "humanName": "ExceptionalMaster'sDungeonMap(Solo)"
    },
    "7325": {
        "botName": "T7_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
        "humanName": "ExceptionalGrandmaster'sDungeonMap(Solo)"
    },
    "7326": {
        "botName": "T8_RANDOM_DUNGEON_SOLO_TOKEN_4@3",
        "humanName": "ExceptionalElder'sDungeonMap(Solo)"
    },
    "7327": {
        "botName": "T4_RANDOM_DUNGEON_TOKEN_1",
        "humanName": "Adept'sDungeonMap(Group)"
    },
    "7328": {
        "botName": "T5_RANDOM_DUNGEON_TOKEN_1",
        "humanName": "Expert'sDungeonMap(Group)"
    },
    "7329": {
        "botName": "T6_RANDOM_DUNGEON_TOKEN_1",
        "humanName": "Master'sDungeonMap(Group)"
    },
    "7330": {
        "botName": "T7_RANDOM_DUNGEON_TOKEN_1",
        "humanName": "Grandmaster'sDungeonMap(Group)"
    },
    "7331": {
        "botName": "T8_RANDOM_DUNGEON_TOKEN_1",
        "humanName": "Elder'sDungeonMap(Group)"
    },
    "7332": {
        "botName": "T4_RANDOM_DUNGEON_TOKEN_2@1",
        "humanName": "UncommonAdept'sDungeonMap(Group)"
    },
    "7333": {
        "botName": "T5_RANDOM_DUNGEON_TOKEN_2@1",
        "humanName": "UncommonExpert'sDungeonMap(Group)"
    },
    "7334": {
        "botName": "T6_RANDOM_DUNGEON_TOKEN_2@1",
        "humanName": "UncommonMaster'sDungeonMap(Group)"
    },
    "7335": {
        "botName": "T7_RANDOM_DUNGEON_TOKEN_2@1",
        "humanName": "UncommonGrandmaster'sDungeonMap(Group)"
    },
    "7336": {
        "botName": "T8_RANDOM_DUNGEON_TOKEN_2@1",
        "humanName": "UncommonElder'sDungeonMap(Group)"
    },
    "7337": {
        "botName": "T4_RANDOM_DUNGEON_TOKEN_3@2",
        "humanName": "RareAdept'sDungeonMap(Group)"
    },
    "7338": {
        "botName": "T5_RANDOM_DUNGEON_TOKEN_3@2",
        "humanName": "RareExpert'sDungeonMap(Group)"
    },
    "7339": {
        "botName": "T6_RANDOM_DUNGEON_TOKEN_3@2",
        "humanName": "RareMaster'sDungeonMap(Group)"
    },
    "7340": {
        "botName": "T7_RANDOM_DUNGEON_TOKEN_3@2",
        "humanName": "RareGrandmaster'sDungeonMap(Group)"
    },
    "7341": {
        "botName": "T8_RANDOM_DUNGEON_TOKEN_3@2",
        "humanName": "RareElder'sDungeonMap(Group)"
    },
    "7342": {
        "botName": "T4_RANDOM_DUNGEON_TOKEN_4@3",
        "humanName": "ExceptionalAdept'sDungeonMap(Group)"
    },
    "7343": {
        "botName": "T5_RANDOM_DUNGEON_TOKEN_4@3",
        "humanName": "ExceptionalExpert'sDungeonMap(Group)"
    },
    "7344": {
        "botName": "T6_RANDOM_DUNGEON_TOKEN_4@3",
        "humanName": "ExceptionalMaster'sDungeonMap(Group)"
    },
    "7345": {
        "botName": "T7_RANDOM_DUNGEON_TOKEN_4@3",
        "humanName": "ExceptionalGrandmaster'sDungeonMap(Group)"
    },
    "7346": {
        "botName": "T8_RANDOM_DUNGEON_TOKEN_4@3",
        "humanName": "ExceptionalElder'sDungeonMap(Group)"
    },
    "7347": {
        "botName": "SKIN_HORSE_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sHorse"
    },
    "7348": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_FOUNDER_LEGENDARY",
        "humanName": "RidingHorseSkin"
    },
    "7349": {
        "botName": "SKIN_HORSE_STARTERPACK",
        "humanName": "LegendaryAdventurer'sHorse"
    },
    "7350": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_STARTERPACK",
        "humanName": "RidingHorseSkin"
    },
    "7351": {
        "botName": "SKIN_HORSE_TELLAFRIEND",
        "humanName": "Recruiter'sHorse"
    },
    "7352": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_TELLAFRIEND",
        "humanName": "RidingHorseSkin"
    },
    "7353": {
        "botName": "SKIN_HORSE_PONY_TELLAFRIEND",
        "humanName": "Recruiter'sPony"
    },
    "7354": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_PONY_TELLAFRIEND",
        "humanName": "RidingHorseSkin"
    },
    "7355": {
        "botName": "SKIN_HORSE_UNDEAD",
        "humanName": "Bonehorse"
    },
    "7356": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_UNDEAD",
        "humanName": "RidingHorseSkin"
    },
    "7357": {
        "botName": "SKIN_HORSE_UNDEAD_HALLOWEEN",
        "humanName": "HorseMacabre"
    },
    "7358": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_UNDEAD_HALLOWEEN",
        "humanName": "RidingHorseSkin"
    },
    "7359": {
        "botName": "SKIN_HORSE_BROWN",
        "humanName": "BrownMare"
    },
    "7360": {
        "botName": "SKIN_HORSE_KEEPER",
        "humanName": "KeeperHorse"
    },
    "7361": {
        "botName": "SKIN_HORSE_UNICORN",
        "humanName": "NightshadeUnicorn"
    },
    "7362": {
        "botName": "SKIN_HORSE_GUILDBANNER",
        "humanName": "JoustingHorse"
    },
    "7363": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_GUILDBANNER",
        "humanName": "RidingHorseSkin"
    },
    "7364": {
        "botName": "SKIN_HORSE_UNICORN_WHITE_TELLAFRIEND",
        "humanName": "Unicorn"
    },
    "7365": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_UNICORN_WHITE_TELLAFRIEND",
        "humanName": "RidingHorseSkin"
    },
    "7366": {
        "botName": "SKIN_HORSE_JESTER_TELLAFRIEND",
        "humanName": "JesterHorse"
    },
    "7367": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_JESTER_TELLAFRIEND",
        "humanName": "RidingHorseSkin"
    },
    "7368": {
        "botName": "SKIN_HORSE_QUESTING_BEAST",
        "humanName": "Chimera"
    },
    "7369": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_QUESTING_BEAST",
        "humanName": "RidingHorseSkin"
    },
    "7370": {
        "botName": "SKIN_ARMORED_HORSE_ARENA",
        "humanName": "ArenaVeteran'sArmoredHorse"
    },
    "7371": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_ARENA_COPY",
        "humanName": "ArmoredHorseSkin"
    },
    "7372": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_ARENA",
        "humanName": "ArmoredHorseSkin"
    },
    "7373": {
        "botName": "SKIN_ARMORED_HORSE_MORGANA",
        "humanName": "MorganaMare"
    },
    "7374": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_MORGANA",
        "humanName": "ArmoredHorseSkin"
    },
    "7375": {
        "botName": "SKIN_ARMORED_HORSE_UNDEAD",
        "humanName": "ArmoredBonehorse"
    },
    "7376": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_UNDEAD",
        "humanName": "ArmoredHorseSkin"
    },
    "7377": {
        "botName": "SKIN_ARMORED_HORSE_T5_MOUNT_GUILD",
        "humanName": "Expert'sGuildWarhorse"
    },
    "7378": {
        "botName": "SKIN_ARMORED_HORSE_T6_MOUNT_GUILD",
        "humanName": "Master'sGuildWarhorse"
    },
    "7379": {
        "botName": "SKIN_ARMORED_HORSE_T7_MOUNT_GUILD",
        "humanName": "Grandmaster'sGuildWarhorse"
    },
    "7380": {
        "botName": "SKIN_ARMORED_HORSE_T8_MOUNT_GUILD",
        "humanName": "Elder'sGuildWarhorse"
    },
    "7381": {
        "botName": "SKIN_ARMORED_HORSE_PONY_NATIVE_CLIENT",
        "humanName": "ArmoredPony"
    },
    "7382": {
        "botName": "SKIN_ARMORED_HORSE_GREEN_TELLAFRIEND"
    },
    "7383": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_GREEN_TELLAFRIEND"
    },
    "7384": {
        "botName": "SKIN_OX_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sOx"
    },
    "7385": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_FOUNDER_LEGENDARY",
        "humanName": "TransportOxSkin"
    },
    "7386": {
        "botName": "SKIN_OX_CART_STARTERPACK",
        "humanName": "LegendaryAdventurer'sCart"
    },
    "7387": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_CART_STARTERPACK",
        "humanName": "TransportOxSkin"
    },
    "7388": {
        "botName": "SKIN_OX_YAK_TELLAFRIEND",
        "humanName": "Recruiter'sYak"
    },
    "7389": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_YAK_TELLAFRIEND",
        "humanName": "TransportOxSkin"
    },
    "7390": {
        "botName": "SKIN_OX_TRANSPORT_RAM_TELLAFRIEND",
        "humanName": "Recruiter'sBighornRam"
    },
    "7391": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_TRANSPORT_RAM_TELLAFRIEND",
        "humanName": "TransportOxSkin"
    },
    "7392": {
        "botName": "SKIN_OX_BLACKMARKET",
        "humanName": "BlackMarketOx"
    },
    "7393": {
        "botName": "SKIN_OX_BISON_AH",
        "humanName": "AuctionHouseOx"
    },
    "7394": {
        "botName": "SKIN_OX_BISON_ROYAL",
        "humanName": "RoyalOx"
    },
    "7395": {
        "botName": "SKIN_OX_CART_HERETIC",
        "humanName": "HereticCart"
    },
    "7396": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_CART_HERETIC",
        "humanName": "TransportOxSkin"
    },
    "7397": {
        "botName": "SKIN_OX_CART_LUXUS_TELLAFRIEND",
        "humanName": "LuxuryCart"
    },
    "7398": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_CART_LUXUS_TELLAFRIEND",
        "humanName": "TransportOxSkin"
    },
    "7399": {
        "botName": "SKIN_OX_FARMER_TELLAFRIEND",
        "humanName": "Farmer'sOx"
    },
    "7400": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_FARMER_TELLAFRIEND",
        "humanName": "Farmer'sOx"
    },
    "7401": {
        "botName": "SKIN_DIREWOLF_WHITE",
        "humanName": "Ghostwolf"
    },
    "7402": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_WHITE",
        "humanName": "DirewolfSkin"
    },
    "7403": {
        "botName": "SKIN_DIREWOLF_SPECTER",
        "humanName": "SpecterWolf"
    },
    "7404": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_SPECTER",
        "humanName": "DirewolfSkin"
    },
    "7405": {
        "botName": "SKIN_DIREWOLF_GREY_TELLAFRIEND",
        "humanName": "Recruiter'sGreyWolf"
    },
    "7406": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_GREY_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7407": {
        "botName": "SKIN_DIREWOLF_BLOODHOUND_TELLAFRIEND",
        "humanName": "Recruiter'sRottweiler"
    },
    "7408": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_BLOODHOUND_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7409": {
        "botName": "SKIN_DIREWOLF_BERNARD_TELLAFRIEND",
        "humanName": "Recruiter'sSaintBernard"
    },
    "7410": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_BERNARD_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7411": {
        "botName": "SKIN_DIREWOLF_HUSKYSLEIGH_TELLAFRIEND",
        "humanName": "Recruiter'sHuskySled"
    },
    "7412": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_HUSKYSLEIGH_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7413": {
        "botName": "SKIN_DIREWOLF_DIREFOX_TELLAFRIEND",
        "humanName": "Recruiter'sDireFox"
    },
    "7414": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_DIREFOX_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7415": {
        "botName": "SKIN_DIREWOLF_BOBTAIL",
        "humanName": "Sheepdog"
    },
    "7416": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_BOBTAIL",
        "humanName": "DirewolfSkin"
    },
    "7417": {
        "botName": "SKIN_DIREWOLF_HYENA_TELLAFRIEND",
        "humanName": "IronjawHyena"
    },
    "7418": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_HYENA_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7419": {
        "botName": "SKIN_DIREWOLF_SHEPHERD_TELLAFRIEND",
        "humanName": "Shepherd"
    },
    "7420": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_SHEPHERD_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7421": {
        "botName": "SKIN_DIREWOLF_SNOWFOX_TELLAFRIEND",
        "humanName": "SnowFox"
    },
    "7422": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREWOLF_SNOWFOX_TELLAFRIEND",
        "humanName": "DirewolfSkin"
    },
    "7423": {
        "botName": "SKIN_GIANTSTAG_WHITE",
        "humanName": "Master'sGiantStag"
    },
    "7424": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_WHITE",
        "humanName": "StagSkin"
    },
    "7425": {
        "botName": "SKIN_GIANTSTAG_TELLAFRIEND",
        "humanName": "Recruiter'sGiantStag"
    },
    "7426": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_TELLAFRIEND",
        "humanName": "StagSkin"
    },
    "7427": {
        "botName": "SKIN_GIANTSTAG_XMAS",
        "humanName": "YuleStag"
    },
    "7428": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_XMAS",
        "humanName": "StagSkin"
    },
    "7429": {
        "botName": "SKIN_GIANTSTAG_IMPALA_TELLAFRIEND",
        "humanName": "Recruiter'sImpala"
    },
    "7430": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_IMPALA_TELLAFRIEND",
        "humanName": "StagSkin"
    },
    "7431": {
        "botName": "SKIN_GIANTSTAG_DIVINE",
        "humanName": "DivineStag"
    },
    "7432": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_DIVINE",
        "humanName": "StagSkin"
    },
    "7433": {
        "botName": "SKIN_GIANTSTAG_ALPACA",
        "humanName": "StagSkin"
    },
    "7434": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_ALPACA",
        "humanName": "StagSkin"
    },
    "7435": {
        "botName": "SKIN_GIANTSTAG_REINDEER_TELLAFRIEND",
        "humanName": "FestiveReindeer"
    },
    "7436": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_REINDEER_TELLAFRIEND",
        "humanName": "StagSkin"
    },
    "7437": {
        "botName": "SKIN_GIANTSTAG_FAWN_TELLAFRIEND",
        "humanName": "SummerFawn"
    },
    "7438": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_FAWN_TELLAFRIEND",
        "humanName": "StagSkin"
    },
    "7439": {
        "botName": "SKIN_COUGAR_TIGER_WHITE_TELLAFRIEND",
        "humanName": "Recruiter'sWhiteTiger"
    },
    "7440": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_TIGER_WHITE_TELLAFRIEND",
        "humanName": "SwiftclawSkin"
    },
    "7441": {
        "botName": "SKIN_COUGAR_TIGER_TELLAFRIEND",
        "humanName": "Recruiter'sTiger"
    },
    "7442": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_TIGER_TELLAFRIEND",
        "humanName": "SwiftclawSkin"
    },
    "7443": {
        "botName": "SKIN_COUGAR_LYNX_TELLAFRIEND",
        "humanName": "Lynx"
    },
    "7444": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_LYNX_TELLAFRIEND",
        "humanName": "SwiftclawSkin"
    },
    "7445": {
        "botName": "SKIN_COUGAR_ARENA",
        "humanName": "ArenaChampion'sSabertooth"
    },
    "7446": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_ARENA_COPY",
        "humanName": "SwiftclawSkin"
    },
    "7447": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_ARENA",
        "humanName": "SwiftclawSkin"
    },
    "7448": {
        "botName": "SKIN_COUGAR_TOURNAMENT",
        "humanName": "SabertoothRex"
    },
    "7449": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_TOURNAMENT",
        "humanName": "SwiftclawSkin"
    },
    "7450": {
        "botName": "SKIN_COUGAR_TOURNAMENT_02",
        "humanName": "SaberTigerRex"
    },
    "7451": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_TOURNAMENT_02",
        "humanName": "SwiftclawSkin"
    },
    "7452": {
        "botName": "SKIN_COUGAR_OCCULT",
        "humanName": "OccultCougar"
    },
    "7453": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_OCCULT",
        "humanName": "SwiftclawSkin"
    },
    "7454": {
        "botName": "SKIN_COUGAR_ARMORED_GREY",
        "humanName": "SteelplateCougar"
    },
    "7455": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_ARMORED_GREY",
        "humanName": "SwiftclawSkin"
    },
    "7456": {
        "botName": "SKIN_COUGAR_SNOWLEOPARD_TELLAFRIEND",
        "humanName": "SnowLeopard"
    },
    "7457": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_SNOWLEOPARD_TELLAFRIEND",
        "humanName": "SwiftclawSkin"
    },
    "7458": {
        "botName": "SKIN_DIREBOAR_HOUSEPIG",
        "humanName": "DomesticatedHog"
    },
    "7459": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREBOAR_HOUSEPIG",
        "humanName": "DireboarSkin"
    },
    "7460": {
        "botName": "SKIN_DIREBOAR_PIG_TELLAFRIEND",
        "humanName": "Recruiter'sPig"
    },
    "7461": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREBOAR_PIG_TELLAFRIEND",
        "humanName": "DireboarSkin"
    },
    "7462": {
        "botName": "SKIN_DIREBOAR_WHITE_TELLAFRIEND",
        "humanName": "WhiteDireboar"
    },
    "7463": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREBOAR_WHITE_TELLAFRIEND",
        "humanName": "DireboarSkin"
    },
    "7464": {
        "botName": "SKIN_DIREBEAR_PANDA_TELLAFRIEND",
        "humanName": "Panda"
    },
    "7465": {
        "botName": "UNIQUE_UNLOCK_SKIN_DIREBEAR_PANDA_TELLAFRIEND",
        "humanName": "DirebearSkin"
    },
    "7466": {
        "botName": "SKIN_LIZARD_SAND_SALAMANDER_TELLAFRIEND",
        "humanName": "Recruiter'sSandSalamander"
    },
    "7467": {
        "botName": "UNIQUE_UNLOCK_SKIN_LIZARD_SAND_SALAMANDER_TELLAFRIEND",
        "humanName": "SwampDragonSkin"
    },
    "7468": {
        "botName": "SKIN_DONKEY_HALLOWEEN",
        "humanName": "Jacko'Donkey"
    },
    "7469": {
        "botName": "UNIQUE_UNLOCK_SKIN_DONKEY_HALLOWEEN",
        "humanName": "MuleSkin"
    },
    "7470": {
        "botName": "SKIN_DONKEY_UNIQUE_TELLAFRIEND",
        "humanName": "Recruiter'sDonkey"
    },
    "7471": {
        "botName": "UNIQUE_UNLOCK_SKIN_DONKEY_UNIQUE_TELLAFRIEND",
        "humanName": "MuleSkin"
    },
    "7472": {
        "botName": "UNIQUE_HEAD_VANITY_NO_HELMET",
        "humanName": "HideHelmet"
    },
    "7473": {
        "botName": "UNIQUE_HEAD_VANITY_NO_CAPE",
        "humanName": "HideCape"
    },
    "7474": {
        "botName": "UNIQUE_HEAD_VANITY_NO_MAIN_HAND",
        "humanName": "HideMainHand"
    },
    "7475": {
        "botName": "UNIQUE_HEAD_VANITY_NO_OFF_HAND",
        "humanName": "HideOff-Hand"
    },
    "7476": {
        "botName": "UNIQUE_HEAD_VANITY_JESTER",
        "humanName": "JesterMask"
    },
    "7477": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_JESTER",
        "humanName": "WardrobeSkin"
    },
    "7478": {
        "botName": "UNIQUE_ARMOR_VANITY_JESTER",
        "humanName": "JesterCostume"
    },
    "7479": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_JESTER",
        "humanName": "WardrobeSkin"
    },
    "7480": {
        "botName": "UNIQUE_SHOES_VANITY_JESTER",
        "humanName": "JesterShoes"
    },
    "7481": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_JESTER",
        "humanName": "WardrobeSkin"
    },
    "7482": {
        "botName": "UNIQUE_HEAD_VANITY_DRESS_RED",
        "humanName": "RedTulipHat"
    },
    "7483": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_DRESS_RED",
        "humanName": "WardrobeSkin"
    },
    "7484": {
        "botName": "UNIQUE_ARMOR_VANITY_DRESS_RED",
        "humanName": "RedTulipDress"
    },
    "7485": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_DRESS_RED",
        "humanName": "WardrobeSkin"
    },
    "7486": {
        "botName": "UNIQUE_SHOES_VANITY_DRESS_RED",
        "humanName": "RedTulipShoes"
    },
    "7487": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_DRESS_RED",
        "humanName": "WardrobeSkin"
    },
    "7488": {
        "botName": "UNIQUE_HEAD_VANITY_DRESS_BLACK",
        "humanName": "Noblewoman'sJewelry"
    },
    "7489": {
        "botName": "UNIQUE_ARMOR_VANITY_DRESS_BLACK",
        "humanName": "Noblewoman'sDress"
    },
    "7490": {
        "botName": "UNIQUE_SHOES_VANITY_DRESS_BLACK",
        "humanName": "Noblewoman'sShoes"
    },
    "7491": {
        "botName": "UNIQUE_HEAD_VANITY_DRESS_BLUE",
        "humanName": "BluePrincessHat"
    },
    "7492": {
        "botName": "UNIQUE_ARMOR_VANITY_DRESS_BLUE",
        "humanName": "BluePrincessDress"
    },
    "7493": {
        "botName": "UNIQUE_SHOES_VANITY_DRESS_BLUE",
        "humanName": "BluePrincessShoes"
    },
    "7494": {
        "botName": "UNIQUE_HEAD_VANITY_RICH_NOBLE",
        "humanName": "RichNoble'sHat"
    },
    "7495": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_RICH_NOBLE",
        "humanName": "WardrobeSkin"
    },
    "7496": {
        "botName": "UNIQUE_ARMOR_VANITY_RICH_NOBLE",
        "humanName": "RichNoble'sDoublet"
    },
    "7497": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_RICH_NOBLE",
        "humanName": "WardrobeSkin"
    },
    "7498": {
        "botName": "UNIQUE_SHOES_VANITY_RICH_NOBLE",
        "humanName": "RichNoble'sFootwear"
    },
    "7499": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_RICH_NOBLE",
        "humanName": "WardrobeSkin"
    },
    "7500": {
        "botName": "UNIQUE_HEAD_VANITY_SANTACLAUS",
        "humanName": "YuleHat"
    },
    "7501": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_SANTACLAUS",
        "humanName": "WardrobeSkin"
    },
    "7502": {
        "botName": "UNIQUE_ARMOR_VANITY_SANTACLAUS",
        "humanName": "YuleCoat"
    },
    "7503": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_SANTACLAUS",
        "humanName": "WardrobeSkin"
    },
    "7504": {
        "botName": "UNIQUE_SHOES_VANITY_SANTACLAUS",
        "humanName": "YuleShoes"
    },
    "7505": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_SANTACLAUS",
        "humanName": "WardrobeSkin"
    },
    "7506": {
        "botName": "UNIQUE_BACKPACK_VANITY_SANTACLAUS",
        "humanName": "YuleBackpack"
    },
    "7507": {
        "botName": "UNIQUE_UNLOCK_BACKPACK_VANITY_SANTACLAUS",
        "humanName": "WardrobeSkin"
    },
    "7508": {
        "botName": "UNIQUE_HEAD_VANITY_WEDDING_DRESS",
        "humanName": "BridalVeil"
    },
    "7509": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_DRESS",
        "humanName": "WardrobeSkin"
    },
    "7510": {
        "botName": "UNIQUE_ARMOR_VANITY_WEDDING_DRESS",
        "humanName": "BridalDress"
    },
    "7511": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_DRESS",
        "humanName": "WardrobeSkin"
    },
    "7512": {
        "botName": "UNIQUE_SHOES_VANITY_WEDDING_DRESS",
        "humanName": "BridalShoes"
    },
    "7513": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_DRESS",
        "humanName": "WardrobeSkin"
    },
    "7514": {
        "botName": "UNIQUE_OFF_VANITY_WEDDING_DRESS",
        "humanName": "BridalBouquet"
    },
    "7515": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_WEDDING_DRESS",
        "humanName": "WardrobeSkin"
    },
    "7516": {
        "botName": "UNIQUE_HEAD_VANITY_WEDDING_TUXEDO",
        "humanName": "Groom'sHat"
    },
    "7517": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_TUXEDO",
        "humanName": "WardrobeSkin"
    },
    "7518": {
        "botName": "UNIQUE_ARMOR_VANITY_WEDDING_TUXEDO",
        "humanName": "Groom'sSuit"
    },
    "7519": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_TUXEDO",
        "humanName": "WardrobeSkin"
    },
    "7520": {
        "botName": "UNIQUE_SHOES_VANITY_WEDDING_TUXEDO",
        "humanName": "Groom'sShoes"
    },
    "7521": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_TUXEDO",
        "humanName": "WardrobeSkin"
    },
    "7522": {
        "botName": "UNIQUE_CAPE_VANITY_WEDDING_TUXEDO",
        "humanName": "Groom'sCape"
    },
    "7523": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_WEDDING_TUXEDO",
        "humanName": "WardrobeSkin"
    },
    "7524": {
        "botName": "UNIQUE_OFF_VANITY_WEDDING_TUXEDO",
        "humanName": "WeddingRing"
    },
    "7525": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_WEDDING_TUXEDO",
        "humanName": "WardrobeSkin"
    },
    "7526": {
        "botName": "UNIQUE_HEAD_VANITY_BARD",
        "humanName": "Bard'sHat"
    },
    "7527": {
        "botName": "UNIQUE_ARMOR_VANITY_BARD",
        "humanName": "Bard'sSuit"
    },
    "7528": {
        "botName": "UNIQUE_SHOES_VANITY_BARD",
        "humanName": "Bard'sShoes"
    },
    "7529": {
        "botName": "UNIQUE_HEAD_VANITY_PRIEST",
        "humanName": "Monk'sHood"
    },
    "7530": {
        "botName": "UNIQUE_ARMOR_VANITY_PRIEST",
        "humanName": "Monk'sRobe"
    },
    "7531": {
        "botName": "UNIQUE_SHOES_VANITY_PRIEST",
        "humanName": "Monk'sSandals"
    },
    "7532": {
        "botName": "UNIQUE_OFF_VANITY_PRIEST",
        "humanName": "Monk'sWalkingStaff"
    },
    "7533": {
        "botName": "UNIQUE_HEAD_VANITY_INNKEEPER",
        "humanName": "Innkeeper'sHat"
    },
    "7534": {
        "botName": "UNIQUE_ARMOR_VANITY_INNKEEPER",
        "humanName": "Innkeeper'sShirt"
    },
    "7535": {
        "botName": "UNIQUE_SHOES_VANITY_INNKEEPER",
        "humanName": "Innkeeper'sShoes"
    },
    "7536": {
        "botName": "UNIQUE_OFF_VANITY_INNKEEPER",
        "humanName": "Innkeeper'sBeerMug"
    },
    "7537": {
        "botName": "UNIQUE_HEAD_VANITY_PIRATE",
        "humanName": "Navigator'sHat"
    },
    "7538": {
        "botName": "UNIQUE_ARMOR_VANITY_PIRATE",
        "humanName": "Navigator'sCoat"
    },
    "7539": {
        "botName": "UNIQUE_SHOES_VANITY_PIRATE",
        "humanName": "Navigator'sBoots"
    },
    "7540": {
        "botName": "UNIQUE_OFF_VANITY_PIRATE",
        "humanName": "Navigator'sParrotCage"
    },
    "7541": {
        "botName": "UNIQUE_OFF_VANITY_CHARITY_MARCH2020",
        "humanName": "StaffofHermes"
    },
    "7542": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_CHARITY_MARCH2020",
        "humanName": "WardrobeSkin"
    },
    "7543": {
        "botName": "UNIQUE_VANITY_2H_FW_BRIDGEWATCH_BANNER"
    },
    "7544": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_BRIDGEWATCH_BANNER",
        "humanName": "BridgewatchWarbanner"
    },
    "7545": {
        "botName": "UNIQUE_VANITY_2H_FW_THETFORD_BANNER"
    },
    "7546": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_THETFORD_BANNER",
        "humanName": "ThetfordWarbanner"
    },
    "7547": {
        "botName": "UNIQUE_VANITY_2H_FW_FORTSTERLING_BANNER"
    },
    "7548": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_FORTSTERLING_BANNER",
        "humanName": "FortSterlingWarbanner"
    },
    "7549": {
        "botName": "UNIQUE_VANITY_2H_FW_MARTLOCK_BANNER"
    },
    "7550": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_MARTLOCK_BANNER",
        "humanName": "MartlockWarbanner"
    },
    "7551": {
        "botName": "UNIQUE_VANITY_2H_FW_LYMHURST_BANNER"
    },
    "7552": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_LYMHURST_BANNER",
        "humanName": "LymhurstWarbanner"
    },
    "7553": {
        "botName": "UNIQUE_VANITY_2H_FW_CAERLEON_BANNER"
    },
    "7554": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_FW_CAERLEON_BANNER",
        "humanName": "CaerleonWarbanner"
    },
    "7555": {
        "botName": "UNIQUE_HEAD_VANITY_ARENA_SET_01",
        "humanName": "ArenaVeteran'sCirclet"
    },
    "7556": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_ARENA_SET_01_COPY",
        "humanName": "WardrobeSkin"
    },
    "7557": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_ARENA_SET_01",
        "humanName": "WardrobeSkin"
    },
    "7558": {
        "botName": "UNIQUE_ARMOR_VANITY_ARENA_SET_01",
        "humanName": "ArenaVeteran'sCloak"
    },
    "7559": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_ARENA_SET_01_COPY",
        "humanName": "WardrobeSkin"
    },
    "7560": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_ARENA_SET_01",
        "humanName": "WardrobeSkin"
    },
    "7561": {
        "botName": "UNIQUE_SHOES_VANITY_ARENA_SET_01",
        "humanName": "ArenaVeteran'sBoots"
    },
    "7562": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_ARENA_SET_01_COPY",
        "humanName": "WardrobeSkin"
    },
    "7563": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_ARENA_SET_01",
        "humanName": "WardrobeSkin"
    },
    "7564": {
        "botName": "UNIQUE_CAPE_VANITY_ARENA_SET_01",
        "humanName": "ArenaVeteran'sCape"
    },
    "7565": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_ARENA_SET_01_COPY",
        "humanName": "WardrobeSkin"
    },
    "7566": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_ARENA_SET_01",
        "humanName": "WardrobeSkin"
    },
    "7567": {
        "botName": "UNIQUE_HEAD_VANITY_ARENA_EYEPATCH",
        "humanName": "ArenaVeteran'sEyepatch"
    },
    "7568": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_ARENA_EYEPATCH_COPY",
        "humanName": "WardrobeSkin"
    },
    "7569": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_ARENA_EYEPATCH",
        "humanName": "WardrobeSkin"
    },
    "7570": {
        "botName": "T4_CAPE_ARENA_BANNER",
        "humanName": "ArenaVeteran'sSmallBanner"
    },
    "7571": {
        "botName": "UNIQUE_UNLOCK_T4_CAPE_ARENA_BANNER_COPY",
        "humanName": "WardrobeSkin"
    },
    "7572": {
        "botName": "UNIQUE_UNLOCK_T4_CAPE_ARENA_BANNER",
        "humanName": "WardrobeSkin"
    },
    "7573": {
        "botName": "T6_CAPE_ARENA_BANNER",
        "humanName": "ArenaVeteran'sMediumBanner"
    },
    "7574": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_ARENA_BANNER_COPY",
        "humanName": "WardrobeSkin"
    },
    "7575": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_ARENA_BANNER",
        "humanName": "WardrobeSkin"
    },
    "7576": {
        "botName": "T8_CAPE_ARENA_BANNER",
        "humanName": "ArenaVeteran'sLargeBanner"
    },
    "7577": {
        "botName": "UNIQUE_UNLOCK_T8_CAPE_ARENA_BANNER_COPY",
        "humanName": "WardrobeSkin"
    },
    "7578": {
        "botName": "UNIQUE_UNLOCK_T8_CAPE_ARENA_BANNER",
        "humanName": "WardrobeSkin"
    },
    "7579": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_GLADIATOR_ARENA",
        "humanName": "WardrobeSkin"
    },
    "7580": {
        "botName": "UNIQUE_HEAD_VANITY_GLADIATOR_ARENA",
        "humanName": "ArenaGladiatorHelm"
    },
    "7581": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_GLADIATOR_ARENA",
        "humanName": "WardrobeSkin"
    },
    "7582": {
        "botName": "UNIQUE_ARMOR_VANITY_GLADIATOR_ARENA",
        "humanName": "ArenaGladiatorArmor"
    },
    "7583": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_GLADIATOR_ARENA",
        "humanName": "WardrobeSkin"
    },
    "7584": {
        "botName": "UNIQUE_SHOES_VANITY_GLADIATOR_ARENA",
        "humanName": "ArenaGladiatorBoots"
    },
    "7585": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_GLADIATOR_ARENA",
        "humanName": "WardrobeSkin"
    },
    "7586": {
        "botName": "UNIQUE_CAPE_VANITY_GLADIATOR_ARENA",
        "humanName": "ArenaGladiatorCape"
    },
    "7587": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "WardrobeSkin"
    },
    "7588": {
        "botName": "UNIQUE_HEAD_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "CrystalGladiatorHelm"
    },
    "7589": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "WardrobeSkin"
    },
    "7590": {
        "botName": "UNIQUE_ARMOR_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "CrystalGladiatorArmor"
    },
    "7591": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "WardrobeSkin"
    },
    "7592": {
        "botName": "UNIQUE_SHOES_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "CrystalGladiatorBoots"
    },
    "7593": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "WardrobeSkin"
    },
    "7594": {
        "botName": "UNIQUE_CAPE_VANITY_GLADIATOR_CRYSTAL",
        "humanName": "CrystalGladiatorCape"
    },
    "7595": {
        "botName": "UNIQUE_HEAD_TELLAFRIEND_BATRIDER",
        "humanName": "MasterofBatsHelmet"
    },
    "7596": {
        "botName": "UNIQUE_UNLOCK_HEAD_TELLAFRIEND_BATRIDER",
        "humanName": "WardrobeSkin"
    },
    "7597": {
        "botName": "UNIQUE_HEAD_VANITY_EASTER_WHITE",
        "humanName": "SnowBunnyStalkerHat"
    },
    "7598": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_EASTER_WHITE",
        "humanName": "WardrobeSkin"
    },
    "7599": {
        "botName": "UNIQUE_HEAD_VANITY_EASTER_BROWN",
        "humanName": "BunnyStalkerHat"
    },
    "7600": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_EASTER_BROWN",
        "humanName": "WardrobeSkin"
    },
    "7601": {
        "botName": "UNIQUE_ARMOR_VANITY_EASTER",
        "humanName": "BunnyStalkerOveralls"
    },
    "7602": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_EASTER",
        "humanName": "WardrobeSkin"
    },
    "7603": {
        "botName": "UNIQUE_SHOES_VANITY_EASTER",
        "humanName": "BunnyStalkerShoes"
    },
    "7604": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_EASTER",
        "humanName": "WardrobeSkin"
    },
    "7605": {
        "botName": "UNIQUE_BACKPACK_VANITY_EASTER",
        "humanName": "BunnyStalkerBasket"
    },
    "7606": {
        "botName": "UNIQUE_UNLOCK_BACKPACK_VANITY_EASTER",
        "humanName": "WardrobeSkin"
    },
    "7607": {
        "botName": "UNIQUE_HEAD_VANITY_PLAGUEDOC",
        "humanName": "HygienicMask"
    },
    "7608": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PLAGUEDOC",
        "humanName": "WardrobeSkin"
    },
    "7609": {
        "botName": "UNIQUE_ARMOR_VANITY_PLAGUEDOC",
        "humanName": "HygienicCoat"
    },
    "7610": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_PLAGUEDOC",
        "humanName": "WardrobeSkin"
    },
    "7611": {
        "botName": "UNIQUE_SHOES_VANITY_PLAGUEDOC",
        "humanName": "HygienicBoots"
    },
    "7612": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_PLAGUEDOC",
        "humanName": "WardrobeSkin"
    },
    "7613": {
        "botName": "UNIQUE_HEAD_VANITY_SKELETON",
        "humanName": "LaughingSkull"
    },
    "7614": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_SKELETON",
        "humanName": "WardrobeSkin"
    },
    "7615": {
        "botName": "UNIQUE_ARMOR_VANITY_SKELETON",
        "humanName": "Ribcage"
    },
    "7616": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_SKELETON",
        "humanName": "WardrobeSkin"
    },
    "7617": {
        "botName": "UNIQUE_SHOES_VANITY_SKELETON",
        "humanName": "Legbones"
    },
    "7618": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_SKELETON",
        "humanName": "WardrobeSkin"
    },
    "7619": {
        "botName": "UNIQUE_CAPE_VANITY_SKELETON",
        "humanName": "RaggedCape"
    },
    "7620": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_SKELETON",
        "humanName": "WardrobeSkin"
    },
    "7621": {
        "botName": "UNIQUE_HEAD_VANITY_PUMPKIN_01",
        "humanName": "GrinningPumpkinHead"
    },
    "7622": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_01",
        "humanName": "WardrobeSkin"
    },
    "7623": {
        "botName": "UNIQUE_HEAD_VANITY_PUMPKIN_02",
        "humanName": "SadPumpkinHead"
    },
    "7624": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_02",
        "humanName": "WardrobeSkin"
    },
    "7625": {
        "botName": "UNIQUE_HEAD_VANITY_PUMPKIN_03",
        "humanName": "AngryPumpkinHead"
    },
    "7626": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PUMPKIN_03",
        "humanName": "WardrobeSkin"
    },
    "7627": {
        "botName": "UNIQUE_HEAD_XMAS",
        "humanName": "UncleFrost'sHat"
    },
    "7628": {
        "botName": "UNIQUE_UNLOCK_HEAD_XMAS",
        "humanName": "WardrobeSkin"
    },
    "7629": {
        "botName": "UNIQUE_VANITY_2H_PORTALGUN_TELLAFRIEND",
        "humanName": "Recruiter'sPortalCannon"
    },
    "7630": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_PORTALGUN_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7631": {
        "botName": "UNIQUE_VANITY_2H_CHICKENGUN_EASTER",
        "humanName": "TheEggsecutioner"
    },
    "7632": {
        "botName": "UNIQUE_UNLOCK_UNIQUE_VANITY_2H_CHICKENGUN_EASTER",
        "humanName": "WardrobeSkin"
    },
    "7633": {
        "botName": "UNIQUE_VANITY_MAIN_BEERMUG_TELLAFRIEND",
        "humanName": "Recruiter'sBeerMug"
    },
    "7634": {
        "botName": "UNIQUE_UNLOCK_VANITY_MAIN_BEERMUG_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7635": {
        "botName": "UNIQUE_VANITY_MAIN_HORN_TELLAFRIEND",
        "humanName": "Recruiter'sHunterHorn"
    },
    "7636": {
        "botName": "UNIQUE_UNLOCK_VANITY_MAIN_HORN_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7637": {
        "botName": "UNIQUE_VANITY_MAIN_FOXCROP_TELLAFRIEND",
        "humanName": "Recruiter'sFoxCrop"
    },
    "7638": {
        "botName": "UNIQUE_UNLOCK_VANITY_MAIN_FOXCROP_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7639": {
        "botName": "UNIQUE_VANITY_MAIN_TRUMPET_TELLAFRIEND",
        "humanName": "Recruiter'sTrumpet"
    },
    "7640": {
        "botName": "UNIQUE_UNLOCK_VANITY_MAIN_TRUMPET_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7641": {
        "botName": "UNIQUE_VANITY_MAIN_BEERMUG_02_TELLAFRIEND",
        "humanName": "Recruiter'sAleMug"
    },
    "7642": {
        "botName": "UNIQUE_UNLOCK_VANITY_MAIN_BEERMUG_02_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7643": {
        "botName": "UNIQUE_CAPE_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sCloak"
    },
    "7644": {
        "botName": "UNIQUE_UNLOCK_CAPE_FOUNDER_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7645": {
        "botName": "UNIQUE_HEAD_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sHat"
    },
    "7646": {
        "botName": "UNIQUE_UNLOCK_HEAD_FOUNDER_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7647": {
        "botName": "UNIQUE_ARMOR_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sArmor"
    },
    "7648": {
        "botName": "UNIQUE_UNLOCK_ARMOR_FOUNDER_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7649": {
        "botName": "UNIQUE_SHOES_FOUNDER_LEGENDARY",
        "humanName": "LegendaryExplorer'sBoots"
    },
    "7650": {
        "botName": "UNIQUE_UNLOCK_SHOES_FOUNDER_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7651": {
        "botName": "UNIQUE_HEAD_FOUNDER_ELITE",
        "humanName": "Explorer'sHat"
    },
    "7652": {
        "botName": "UNIQUE_UNLOCK_HEAD_FOUNDER_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7653": {
        "botName": "UNIQUE_ARMOR_FOUNDER_ELITE",
        "humanName": "Explorer'sArmor"
    },
    "7654": {
        "botName": "UNIQUE_UNLOCK_ARMOR_FOUNDER_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7655": {
        "botName": "UNIQUE_SHOES_FOUNDER_ELITE",
        "humanName": "Explorer'sBoots"
    },
    "7656": {
        "botName": "UNIQUE_UNLOCK_SHOES_FOUNDER_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7657": {
        "botName": "UNIQUE_CAPE_STARTERPACK_LEGENDARY",
        "humanName": "LegendaryAdventurer'sCloak"
    },
    "7658": {
        "botName": "UNIQUE_UNLOCK_CAPE_STARTERPACK_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7659": {
        "botName": "UNIQUE_HEAD_STARTERPACK_LEGENDARY",
        "humanName": "LegendaryAdventurer'sHat"
    },
    "7660": {
        "botName": "UNIQUE_UNLOCK_HEAD_STARTERPACK_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7661": {
        "botName": "UNIQUE_ARMOR_STARTERPACK_LEGENDARY",
        "humanName": "LegendaryAdventurer'sArmor"
    },
    "7662": {
        "botName": "UNIQUE_UNLOCK_ARMOR_STARTERPACK_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7663": {
        "botName": "UNIQUE_SHOES_STARTERPACK_LEGENDARY",
        "humanName": "LegendaryAdventurer'sBoots"
    },
    "7664": {
        "botName": "UNIQUE_UNLOCK_SHOES_STARTERPACK_LEGENDARY",
        "humanName": "WardrobeSkin"
    },
    "7665": {
        "botName": "UNIQUE_HEAD_STARTERPACK_ELITE",
        "humanName": "Adventurer'sHelmet"
    },
    "7666": {
        "botName": "UNIQUE_UNLOCK_HEAD_STARTERPACK_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7667": {
        "botName": "UNIQUE_ARMOR_STARTERPACK_ELITE",
        "humanName": "Adventurer'sJacket"
    },
    "7668": {
        "botName": "UNIQUE_UNLOCK_ARMOR_STARTERPACK_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7669": {
        "botName": "UNIQUE_SHOES_STARTERPACK_ELITE",
        "humanName": "Adventurer'sShoes"
    },
    "7670": {
        "botName": "UNIQUE_UNLOCK_SHOES_STARTERPACK_ELITE",
        "humanName": "WardrobeSkin"
    },
    "7671": {
        "botName": "UNIQUE_HEAD_VANITY_SKELETON_UNDEAD",
        "humanName": "UndeadSkull"
    },
    "7672": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_SKELETON_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7673": {
        "botName": "UNIQUE_ARMOR_VANITY_SKELETON_UNDEAD",
        "humanName": "UndeadRibcage"
    },
    "7674": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_SKELETON_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7675": {
        "botName": "UNIQUE_SHOES_VANITY_SKELETON_UNDEAD",
        "humanName": "UndeadLegs"
    },
    "7676": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_SKELETON_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7677": {
        "botName": "UNIQUE_CAPE_VANITY_SKELETON_UNDEAD",
        "humanName": "RaggedUndeadCape"
    },
    "7678": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_SKELETON_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7679": {
        "botName": "UNIQUE_CAPE_TELLAFRIEND",
        "humanName": "Recruiter'sCape"
    },
    "7680": {
        "botName": "UNIQUE_UNLOCK_CAPE_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7681": {
        "botName": "UNIQUE_CAPE_TELLAFRIEND_02",
        "humanName": "RiurosCape"
    },
    "7682": {
        "botName": "UNIQUE_UNLOCK_CAPE_TELLAFRIEND_02",
        "humanName": "WardrobeSkin"
    },
    "7683": {
        "botName": "UNIQUE_CAPE_TELLAFRIEND_BATRIDER",
        "humanName": "MasterofBatsCape"
    },
    "7684": {
        "botName": "UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BATRIDER",
        "humanName": "WardrobeSkin"
    },
    "7685": {
        "botName": "UNIQUE_CAPE_TELLAFRIEND_BANNER",
        "humanName": "Recruiter'sBanner"
    },
    "7686": {
        "botName": "UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BANNER",
        "humanName": "WardrobeSkin"
    },
    "7687": {
        "botName": "UNIQUE_CAPE_TELLAFRIEND_BANNER_02",
        "humanName": "OgroniosBanner"
    },
    "7688": {
        "botName": "UNIQUE_UNLOCK_CAPE_TELLAFRIEND_BANNER_02",
        "humanName": "WardrobeSkin"
    },
    "7689": {
        "botName": "UNIQUE_CAPE_TOAD_TELLAFRIEND",
        "humanName": "Recruiter'sCape-Toad"
    },
    "7690": {
        "botName": "UNIQUE_UNLOCK_CAPE_TOAD_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7691": {
        "botName": "UNIQUE_CAPE_BLOODHOUND_TELLAFRIEND",
        "humanName": "Recruiter'sCape-Rottweiler"
    },
    "7692": {
        "botName": "UNIQUE_UNLOCK_CAPE_BLOODHOUND_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7693": {
        "botName": "UNIQUE_CAPE_TIGER_TELLAFRIEND",
        "humanName": "Recruiter'sTigerCape"
    },
    "7694": {
        "botName": "UNIQUE_UNLOCK_CAPE_TIGER_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7695": {
        "botName": "UNIQUE_CAPE_RAM_TELLAFRIEND",
        "humanName": "Recruiter'sFurCape"
    },
    "7696": {
        "botName": "UNIQUE_UNLOCK_CAPE_RAM_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7697": {
        "botName": "UNIQUE_CAPE_WOLF_GREY_TELLAFRIEND",
        "humanName": "Recruiter'sGreyWolfCape"
    },
    "7698": {
        "botName": "UNIQUE_UNLOCK_CAPE_WOLF_GREY_TELLAFRIEND",
        "humanName": "WardrobeSkin"
    },
    "7699": {
        "botName": "T6_CAPE_PLATE_UNDEAD",
        "humanName": "DecorativeUndeadPlatemailCape"
    },
    "7700": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_PLATE_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7701": {
        "botName": "T6_CAPE_LEATHER_UNDEAD",
        "humanName": "DecorativeUndeadLeatherCape"
    },
    "7702": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_LEATHER_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7703": {
        "botName": "T6_CAPE_CLOTH_UNDEAD",
        "humanName": "DecorativeUndeadClothCape"
    },
    "7704": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_CLOTH_UNDEAD",
        "humanName": "WardrobeSkin"
    },
    "7705": {
        "botName": "T6_CAPE_PLATE_KEEPER",
        "humanName": "DecorativeKeeperPlatemailCape"
    },
    "7706": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_PLATE_KEEPER",
        "humanName": "WardrobeSkin"
    },
    "7707": {
        "botName": "T6_CAPE_LEATHER_KEEPER",
        "humanName": "DecorativeKeeperLeatherCape"
    },
    "7708": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_LEATHER_KEEPER",
        "humanName": "WardrobeSkin"
    },
    "7709": {
        "botName": "T6_CAPE_CLOTH_KEEPER",
        "humanName": "DecorativeKeeperClothCape"
    },
    "7710": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_CLOTH_KEEPER",
        "humanName": "WardrobeSkin"
    },
    "7711": {
        "botName": "T6_CAPE_PLATE_MORGANA",
        "humanName": "DecorativeMorganaPlatemailCape"
    },
    "7712": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_PLATE_MORGANA",
        "humanName": "WardrobeSkin"
    },
    "7713": {
        "botName": "T6_CAPE_LEATHER_MORGANA",
        "humanName": "DecorativeMorganaLeatherCape"
    },
    "7714": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_LEATHER_MORGANA",
        "humanName": "WardrobeSkin"
    },
    "7715": {
        "botName": "T6_CAPE_CLOTH_MORGANA",
        "humanName": "DecorativeMorganaClothCape"
    },
    "7716": {
        "botName": "UNIQUE_UNLOCK_T6_CAPE_CLOTH_MORGANA",
        "humanName": "WardrobeSkin"
    },
    "7717": {
        "botName": "UNIQUE_HEAD_VANITY_ROGUE",
        "humanName": "RogueAdventurer'sHood"
    },
    "7718": {
        "botName": "UNIQUE_ARMOR_VANITY_ROGUE",
        "humanName": "RogueAdventurer'sArmor"
    },
    "7719": {
        "botName": "UNIQUE_SHOES_VANITY_ROGUE",
        "humanName": "RogueAdventurer'sBoots"
    },
    "7720": {
        "botName": "UNIQUE_CAPE_VANITY_ROGUE",
        "humanName": "RogueAdventurer'sCape"
    },
    "7721": {
        "botName": "UNIQUE_VANITY_MAIN_POISONBOTTLE_ROGUE",
        "humanName": "RogueAdventurer'sPoisonBottle"
    },
    "7722": {
        "botName": "SKIN_ARMORED_HORSE_ROGUE",
        "humanName": "RogueAdventurer'sArmoredHorse"
    },
    "7723": {
        "botName": "UNIQUE_ARMOR_VANITY_ROGUE_GUILD_COLORED",
        "humanName": "RogueAdventurer'sGuildArmor"
    },
    "7724": {
        "botName": "UNIQUE_CAPE_VANITY_ROGUE_GUILD_COLORED",
        "humanName": "RogueAdventurer'sGuildCape"
    },
    "7725": {
        "botName": "SKIN_ARMORED_HORSE_ROGUE_GUILD_COLORED",
        "humanName": "RogueAdventurer'sGuildArmoredHorse"
    },
    "7726": {
        "botName": "UNIQUE_HEAD_VANITY_KNIGHT",
        "humanName": "KnightAdventurer'sHelmet"
    },
    "7727": {
        "botName": "UNIQUE_ARMOR_VANITY_KNIGHT",
        "humanName": "KnightAdventurer'sArmor"
    },
    "7728": {
        "botName": "UNIQUE_SHOES_VANITY_KNIGHT",
        "humanName": "KnightAdventurer'sBoots"
    },
    "7729": {
        "botName": "UNIQUE_CAPE_VANITY_KNIGHT",
        "humanName": "KnightAdventurer'sCape"
    },
    "7730": {
        "botName": "UNIQUE_VANITY_2H_BANNER_KNIGHT_GUILD_COLORED",
        "humanName": "KnightAdventurer'sWarbanner"
    },
    "7731": {
        "botName": "SKIN_ARMORED_HORSE_KNIGHT",
        "humanName": "KnightAdventurer'sArmoredHorse"
    },
    "7732": {
        "botName": "UNIQUE_HEAD_VANITY_KNIGHT_GUILD_COLORED",
        "humanName": "KnightAdventurer'sGuildHelmet"
    },
    "7733": {
        "botName": "UNIQUE_ARMOR_VANITY_KNIGHT_GUILD_COLORED",
        "humanName": "KnightAdventurer'sGuildArmor"
    },
    "7734": {
        "botName": "UNIQUE_CAPE_VANITY_KNIGHT_GUILD_COLORED",
        "humanName": "KnightAdventurer'sGuildCape"
    },
    "7735": {
        "botName": "SKIN_ARMORED_HORSE_KNIGHT_GUILD_COLORED",
        "humanName": "KnightAdventurer'sGuildArmoredHorse"
    },
    "7736": {
        "botName": "UNIQUE_HEAD_VANITY_MAGE",
        "humanName": "MageAdventurer'sHat"
    },
    "7737": {
        "botName": "UNIQUE_ARMOR_VANITY_MAGE",
        "humanName": "MageAdventurer'sArmor"
    },
    "7738": {
        "botName": "UNIQUE_SHOES_VANITY_MAGE",
        "humanName": "MageAdventurer'sBoots"
    },
    "7739": {
        "botName": "UNIQUE_CAPE_VANITY_MAGE",
        "humanName": "MageAdventurer'sCape"
    },
    "7740": {
        "botName": "UNIQUE_VANITY_2H_SPELLBOOK_MAGE",
        "humanName": "MageAdventurer'sSpellbook"
    },
    "7741": {
        "botName": "SKIN_ARMORED_HORSE_MAGE",
        "humanName": "MageAdventurer'sArmoredHorse"
    },
    "7742": {
        "botName": "UNIQUE_HEAD_VANITY_MAGE_GUILD_COLORED",
        "humanName": "MageAdventurer'sGuildHat"
    },
    "7743": {
        "botName": "UNIQUE_ARMOR_VANITY_MAGE_GUILD_COLORED",
        "humanName": "MageAdventurer'sGuildArmor"
    },
    "7744": {
        "botName": "UNIQUE_CAPE_VANITY_MAGE_GUILD_COLORED",
        "humanName": "MageAdventurer'sGuildCape"
    },
    "7745": {
        "botName": "SKIN_ARMORED_HORSE_MAGE_GUILD_COLORED",
        "humanName": "MageAdventurer'sGuildArmoredHorse"
    },
    "7746": {
        "botName": "SKIN_COUGAR_MIST",
        "humanName": "Miststalker"
    },
    "7747": {
        "botName": "UNIQUE_HEAD_VANITY_BARBARIAN",
        "humanName": "Barbarian'sHelmet"
    },
    "7748": {
        "botName": "UNIQUE_ARMOR_VANITY_BARBARIAN",
        "humanName": "Barbarian'sHarness"
    },
    "7749": {
        "botName": "UNIQUE_SHOES_VANITY_BARBARIAN",
        "humanName": "Barbarian'sBoots"
    },
    "7750": {
        "botName": "UNIQUE_CAPE_VANITY_BARBARIAN",
        "humanName": "Barbarian'sCape"
    },
    "7751": {
        "botName": "SKIN_DIREWOLF_BARBARIAN",
        "humanName": "WarBeast"
    },
    "7752": {
        "botName": "UNIQUE_HEAD_VANITY_SOULKEEPER",
        "humanName": "KeeperofSoulsCowl"
    },
    "7753": {
        "botName": "UNIQUE_ARMOR_VANITY_SOULKEEPER",
        "humanName": "KeeperofSoulsArmor"
    },
    "7754": {
        "botName": "UNIQUE_SHOES_VANITY_SOULKEEPER",
        "humanName": "KeeperofSoulsBoots"
    },
    "7755": {
        "botName": "UNIQUE_CAPE_VANITY_SOULKEEPER",
        "humanName": "KeeperofSoulsCape"
    },
    "7756": {
        "botName": "UNIQUE_VANITY_2H_PHYLACTERY_SOULKEEPER",
        "humanName": "PhylacteryofSouls"
    },
    "7757": {
        "botName": "SKIN_STAG_SOULKEEPER",
        "humanName": "KeeperofSoulsStag"
    },
    "7758": {
        "botName": "SKIN_HORSE_HELL",
        "humanName": "HellMare"
    },
    "7759": {
        "botName": "SKIN_COUGAR_DARK",
        "humanName": "Darkfang"
    },
    "7760": {
        "botName": "UNIQUE_HEAD_VANITY_PALADIN",
        "humanName": "Paladin'sHelmet"
    },
    "7761": {
        "botName": "UNIQUE_ARMOR_VANITY_PALADIN",
        "humanName": "Paladin'sArmor"
    },
    "7762": {
        "botName": "UNIQUE_SHOES_VANITY_PALADIN",
        "humanName": "Paladin'sBoots"
    },
    "7763": {
        "botName": "UNIQUE_CAPE_VANITY_PALADIN",
        "humanName": "Paladin'sCape"
    },
    "7764": {
        "botName": "SKIN_ARMORED_HORSE_PALADIN",
        "humanName": "Paladin'sWarhorse"
    },
    "7765": {
        "botName": "UNIQUE_ARMOR_VANITY_PALADIN_GUILD_COLORED",
        "humanName": "Paladin'sGuildArmor"
    },
    "7766": {
        "botName": "UNIQUE_CAPE_VANITY_PALADIN_GUILD_COLORED",
        "humanName": "Paladin'sGuildCape"
    },
    "7767": {
        "botName": "SKIN_ARMORED_HORSE_PALADIN_GUILD_COLORED",
        "humanName": "Paladin'sGuildWarhorse"
    },
    "7768": {
        "botName": "SKIN_OX_MIST",
        "humanName": "Mistbison"
    },
    "7769": {
        "botName": "UNIQUE_HEAD_VANITY_DEMONHUNTER",
        "humanName": "DemonHunter'sHat"
    },
    "7770": {
        "botName": "UNIQUE_ARMOR_VANITY_DEMONHUNTER",
        "humanName": "DemonHunter'sCoat"
    },
    "7771": {
        "botName": "UNIQUE_SHOES_VANITY_DEMONHUNTER",
        "humanName": "DemonHunter'sBoots"
    },
    "7772": {
        "botName": "UNIQUE_CAPE_VANITY_DEMONHUNTER",
        "humanName": "DemonHunter'sCape"
    },
    "7773": {
        "botName": "SKIN_HORSE_DEMONHUNTER",
        "humanName": "DemonHunter'sHorse"
    },
    "7774": {
        "botName": "SKIN_DIREWOLF_MIST",
        "humanName": "Mistwolf"
    },
    "7775": {
        "botName": "UNIQUE_HEAD_VANITY_DRUID",
        "humanName": "Druid'sHorns"
    },
    "7776": {
        "botName": "UNIQUE_ARMOR_VANITY_DRUID",
        "humanName": "Druid'sVestments"
    },
    "7777": {
        "botName": "UNIQUE_SHOES_VANITY_DRUID",
        "humanName": "Druid'sShoes"
    },
    "7778": {
        "botName": "UNIQUE_CAPE_VANITY_DRUID",
        "humanName": "Druid'sCape"
    },
    "7779": {
        "botName": "SKIN_STAG_DRUID",
        "humanName": "Druid'sStag"
    },
    "7780": {
        "botName": "SKIN_COUGAR_SHADOWCAT",
        "humanName": "Shadowcat"
    },
    "7781": {
        "botName": "UNIQUE_HEAD_VANITY_DEMONICWARRIOR",
        "humanName": "DemonicWarrior'sHelmet"
    },
    "7782": {
        "botName": "UNIQUE_ARMOR_VANITY_DEMONICWARRIOR",
        "humanName": "DemonicWarrior'sArmor"
    },
    "7783": {
        "botName": "UNIQUE_SHOES_VANITY_DEMONICWARRIOR",
        "humanName": "DemonicWarrior'sBoots"
    },
    "7784": {
        "botName": "UNIQUE_CAPE_VANITY_DEMONICWARRIOR",
        "humanName": "DemonicWarrior'sCape"
    },
    "7785": {
        "botName": "SKIN_DIREWOLF_DEMONICWARRIOR",
        "humanName": "SaddledHellhound"
    },
    "7786": {
        "botName": "UNIQUE_HEAD_VANITY_MONK",
        "humanName": "MasterofFistsTattoo"
    },
    "7787": {
        "botName": "UNIQUE_HEAD_VANITY_MONK_HAT",
        "humanName": "MasterofFistsHat"
    },
    "7788": {
        "botName": "UNIQUE_HEAD_VANITY_MONK_MASK",
        "humanName": "MasterofFistsMask"
    },
    "7789": {
        "botName": "UNIQUE_ARMOR_VANITY_MONK",
        "humanName": "MasterofFistsRobes"
    },
    "7790": {
        "botName": "UNIQUE_SHOES_VANITY_MONK",
        "humanName": "MasterofFistsSandals"
    },
    "7791": {
        "botName": "UNIQUE_CAPE_VANITY_MONK",
        "humanName": "MasterofFistsScroll"
    },
    "7792": {
        "botName": "SKIN_HORSE_MONK",
        "humanName": "MasterofFistsHorse"
    },
    "7793": {
        "botName": "UNIQUE_HEAD_VANITY_MONK_MASK_GUILD_COLORED",
        "humanName": "MasterofFistsGuildMask"
    },
    "7794": {
        "botName": "UNIQUE_ARMOR_VANITY_MONK_GUILD_COLORED",
        "humanName": "MasterofFistsGuildRobes"
    },
    "7795": {
        "botName": "SKIN_DIREWOLF_UNDEAD",
        "humanName": "UndeadDirewolf"
    },
    "7796": {
        "botName": "UNIQUE_HEAD_VANITY_MARAUDER",
        "humanName": "Reaver'sHelmet"
    },
    "7797": {
        "botName": "UNIQUE_ARMOR_VANITY_MARAUDER",
        "humanName": "Reaver'sArmor"
    },
    "7798": {
        "botName": "UNIQUE_SHOES_VANITY_MARAUDER",
        "humanName": "Reaver'sBoots"
    },
    "7799": {
        "botName": "UNIQUE_CAPE_VANITY_MARAUDER",
        "humanName": "Reaver'sCape"
    },
    "7800": {
        "botName": "SKIN_ARMORED_HORSE_MARAUDER",
        "humanName": "Reaver'sArmoredHorse"
    },
    "7801": {
        "botName": "T7_MAIN_SUMMONERSTAFF_PROTOTYPE"
    },
    "7802": {
        "botName": "T7_MAIN_SUMMONERSTAFF_PROTOTYPE@1"
    },
    "7803": {
        "botName": "T7_MAIN_SUMMONERSTAFF_PROTOTYPE@2"
    },
    "7804": {
        "botName": "T7_MAIN_SUMMONERSTAFF_PROTOTYPE@3"
    },
    "7805": {
        "botName": "UNIQUE_TEST_DUNGEONMAP_PROTOTYPE"
    },
    "7806": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_01_TEMPLATE"
    },
    "7807": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_02_TEMPLATE"
    },
    "7808": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_03_S11_TEMPLATE"
    },
    "7809": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_03_TEMPLATE"
    },
    "7810": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_NOVENDOR_LVL_02_TEMPLATE"
    },
    "7811": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_04_TEMPLATE"
    },
    "7812": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_05_TEMPLATE"
    },
    "7813": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_06_TEMPLATE"
    },
    "7814": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_CITY_LVL_07_TEMPLATE"
    },
    "7815": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_01_TEMPLATE"
    },
    "7816": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_02_TEMPLATE"
    },
    "7817": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_03_TEMPLATE"
    },
    "7818": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NOVENDOR_LVL_02_TEMPLATE"
    },
    "7819": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NOVENDOR_LVL_03_TEMPLATE"
    },
    "7820": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_04_TEMPLATE"
    },
    "7821": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_05_TEMPLATE"
    },
    "7822": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_06_TEMPLATE"
    },
    "7823": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_07_TEMPLATE"
    },
    "7824": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_08_TEMPLATE"
    },
    "7825": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_LVL_09_TEMPLATE"
    },
    "7826": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_01_TEMPLATE"
    },
    "7827": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_02_TEMPLATE"
    },
    "7828": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_03_TEMPLATE"
    },
    "7829": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_04_TEMPLATE"
    },
    "7830": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_05_TEMPLATE"
    },
    "7831": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_06_TEMPLATE"
    },
    "7832": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_07_TEMPLATE"
    },
    "7833": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_08_TEMPLATE"
    },
    "7834": {
        "botName": "T4_TOKEN_CRYSTALLEAGUE_NONLETHAL_LVL_09_TEMPLATE"
    },
    "7835": {
        "botName": "UNIQUE_TOKEN_COMMUNITY",
        "humanName": "CommunityToken"
    },
    "7836": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_COMMON",
        "humanName": "CommonCommunityChest"
    },
    "7837": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_COMMON_PREMIUM@1",
        "humanName": "PremiumCommonCommunityChest"
    },
    "7838": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_RARE",
        "humanName": "RareCommunityChest"
    },
    "7839": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_RARE_PREMIUM@1",
        "humanName": "PremiumRareCommunityChest"
    },
    "7840": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_EPIC",
        "humanName": "EpicCommunityChest"
    },
    "7841": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_EPIC_PREMIUM@1",
        "humanName": "PremiumEpicCommunityChest"
    },
    "7842": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_LEGENDARY",
        "humanName": "LegendaryCommunityChest"
    },
    "7843": {
        "botName": "UNIQUE_LOOTCHEST_COMMUNITY_LEGENDARY_PREMIUM@1",
        "humanName": "PremiumLegendaryCommunityChest"
    },
    "7844": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_DRESS_BLUE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7845": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_DRESS_BLACK_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7846": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PRIEST_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7847": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_DRESS_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7848": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_WEDDING_TUXEDO_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7849": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_BARD_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7850": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_INNKEEPER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7851": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_PIRATE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7852": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_DRESS_BLUE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7853": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_DRESS_BLACK_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7854": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_PRIEST_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7855": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_DRESS_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7856": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_WEDDING_TUXEDO_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7857": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_BARD_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7858": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_INNKEEPER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7859": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_PIRATE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7860": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_DRESS_BLUE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7861": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_DRESS_BLACK_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7862": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_PRIEST_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7863": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_DRESS_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7864": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_WEDDING_TUXEDO_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7865": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_BARD_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7866": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_INNKEEPER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7867": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_PIRATE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7868": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_WEDDING_TUXEDO_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7869": {
        "botName": "UNIQUE_UNLOCK_VANITY_2H_CHICKENGUN_EASTER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7870": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_PRIEST_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7871": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_WEDDING_DRESS_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7872": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_WEDDING_TUXEDO_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7873": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_INNKEEPER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7874": {
        "botName": "UNIQUE_UNLOCK_OFF_VANITY_PIRATE_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7875": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_BROWN_NON_TRADABLE",
        "humanName": "RidingHorseSkin"
    },
    "7876": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_KEEPER_NON_TRADABLE",
        "humanName": "RidingHorseSkin"
    },
    "7877": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_UNICORN_NON_TRADABLE",
        "humanName": "RidingHorseSkin"
    },
    "7878": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_T5_GUILD_NON_TRADABLE",
        "humanName": "ArmoredHorseSkin"
    },
    "7879": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_T6_GUILD_NON_TRADABLE",
        "humanName": "ArmoredHorseSkin"
    },
    "7880": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_T7_GUILD_NON_TRADABLE",
        "humanName": "ArmoredHorseSkin"
    },
    "7881": {
        "botName": "UNIQUE_UNLOCK_SKIN_ARMORED_HORSE_T8_GUILD_NON_TRADABLE",
        "humanName": "ArmoredHorseSkin"
    },
    "7882": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_BISON_AH_NON_TRADABLE",
        "humanName": "TransportOxSkin"
    },
    "7883": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_BISON_ROYAL_NON_TRADABLE",
        "humanName": "TransportOxSkin"
    },
    "7884": {
        "botName": "UNIQUE_UNLOCK_SKIN_OX_BLACKMARKET_NON_TRADABLE",
        "humanName": "TransportOxSkin"
    },
    "7885": {
        "botName": "UNIQUE_HEAD_VANITY_DRESS_GREEN",
        "humanName": "GreenPrincessHat"
    },
    "7886": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_DRESS_GREEN_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7887": {
        "botName": "UNIQUE_ARMOR_VANITY_DRESS_GREEN",
        "humanName": "GreenPrincessDress"
    },
    "7888": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_DRESS_GREEN_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7889": {
        "botName": "UNIQUE_SHOES_VANITY_DRESS_GREEN",
        "humanName": "GreenPrincessShoes"
    },
    "7890": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_DRESS_GREEN_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7891": {
        "botName": "UNIQUE_HEAD_VANITY_ENTERTAINER",
        "humanName": "Entertainer'sMask"
    },
    "7892": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_ENTERTAINER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7893": {
        "botName": "UNIQUE_ARMOR_VANITY_ENTERTAINER",
        "humanName": "Entertainer'sCostume"
    },
    "7894": {
        "botName": "UNIQUE_UNLOCK_ARMOR_VANITY_ENTERTAINER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7895": {
        "botName": "UNIQUE_SHOES_VANITY_ENTERTAINER",
        "humanName": "Entertainer'sShoes"
    },
    "7896": {
        "botName": "UNIQUE_UNLOCK_SHOES_VANITY_ENTERTAINER_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7897": {
        "botName": "UNIQUE_HEAD_VANITY_NIGHTGOWN",
        "humanName": "SleepingCap"
    },
    "7898": {
        "botName": "UNIQUE_UNLOCK_HEAD_VANITY_NIGHTGOWN_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7899": {
        "botName": "UNIQUE_CAPE_VANITY_HYENA",
        "humanName": "HyenaCape"
    },
    "7900": {
        "botName": "UNIQUE_UNLOCK_CAPE_VANITY_HYENA_NON_TRADABLE",
        "humanName": "WardrobeSkin"
    },
    "7901": {
        "botName": "SKIN_COUGAR_AMETHYST",
        "humanName": "AmethystCougar"
    },
    "7902": {
        "botName": "UNIQUE_UNLOCK_SKIN_COUGAR_AMETHYST",
        "humanName": "SwiftclawSkin"
    },
    "7903": {
        "botName": "SKIN_GIANTSTAG_ALPACA_BROWN",
        "humanName": "BrownAlpaca"
    },
    "7904": {
        "botName": "UNIQUE_UNLOCK_SKIN_GIANTSTAG_ALPACA_BROWN",
        "humanName": "StagSkin"
    },
    "7905": {
        "botName": "SKIN_HORSE_UNICORN_AMETHYST",
        "humanName": "AmethystUnicorn"
    },
    "7906": {
        "botName": "UNIQUE_UNLOCK_SKIN_HORSE_UNICORN_AMETHYST",
        "humanName": "RidingHorseSkin"
    },
    "7907": {
        "botName": "T1_KILL_EMOTE_TOMBSTONE_CHARGES_NONTRADABLE",
        "humanName": "TombstoneVictoryEmoteCharge"
    },
    "7908": {
        "botName": "T1_KILL_EMOTE_FLAG_CHARGES_NONTRADABLE",
        "humanName": "GuildBannerVictoryEmoteCharge"
    },
    "7909": {
        "botName": "T1_KILL_EMOTE_GHOST_CHARGES_NONTRADABLE",
        "humanName": "GhostVictoryEmoteCharge"
    },
    "7910": {
        "botName": "T1_KILL_EMOTE_OVERGROWN_CHARGES_NONTRADABLE",
        "humanName": "OvergrownVictoryEmoteCharge"
    },
    "7911": {
        "botName": "T1_KILL_EMOTE_TOMBSTONE_CHARGES_TRADABLE"
    },
    "7912": {
        "botName": "T1_KILL_EMOTE_FLAG_CHARGES_TRADABLE"
    },
    "7913": {
        "botName": "T1_KILL_EMOTE_GHOST_CHARGES_TRADABLE"
    },
    "7914": {
        "botName": "T1_KILL_EMOTE_OVERGROWN_CHARGES_TRADABLE"
    },
    "7915": {
        "botName": "T4_DEBUG_HEAD_HIDDEN"
    },
    "7916": {
        "botName": "T4_DEBUG_ARMOR_HIDDEN"
    },
    "7917": {
        "botName": "T4_DEBUG_CAPE_HIDDEN"
    },
    "7918": {
        "botName": "T4_DEBUG_SHOES_HIDDEN"
    },
    "7919": {
        "botName": "T4_DEBUG_MAINHAND_HIDDEN"
    },
    "7920": {
        "botName": "T4_DEBUG_OFFHAND_HIDDEN"
    },
    "7921": {
        "botName": "UNIQUE_FURNITUREITEM_KILLTROPHY_SKULL"
    },
    "7922": {
        "botName": "T2_JOURNAL_WOOD_EMPTY",
        "humanName": "NoviceLumberjack'sJournal(Empty)"
    },
    "7923": {
        "botName": "T2_JOURNAL_WOOD_FULL",
        "humanName": "NoviceLumberjack'sJournal(Full)"
    },
    "7924": {
        "botName": "T3_JOURNAL_WOOD_EMPTY",
        "humanName": "JourneymanLumberjack'sJournal(Empty)"
    },
    "7925": {
        "botName": "T3_JOURNAL_WOOD_FULL",
        "humanName": "JourneymanLumberjack'sJournal(Full)"
    },
    "7926": {
        "botName": "T4_JOURNAL_WOOD_EMPTY",
        "humanName": "AdeptLumberjack'sJournal(Empty)"
    },
    "7927": {
        "botName": "T4_JOURNAL_WOOD_FULL",
        "humanName": "AdeptLumberjack'sJournal(Full)"
    },
    "7928": {
        "botName": "T5_JOURNAL_WOOD_EMPTY",
        "humanName": "ExpertLumberjack'sJournal(Empty)"
    },
    "7929": {
        "botName": "T5_JOURNAL_WOOD_FULL",
        "humanName": "ExpertLumberjack'sJournal(Full)"
    },
    "7930": {
        "botName": "T6_JOURNAL_WOOD_EMPTY",
        "humanName": "MasterLumberjack'sJournal(Empty)"
    },
    "7931": {
        "botName": "T6_JOURNAL_WOOD_FULL",
        "humanName": "MasterLumberjack'sJournal(Full)"
    },
    "7932": {
        "botName": "T7_JOURNAL_WOOD_EMPTY",
        "humanName": "GrandmasterLumberjack'sJournal(Empty)"
    },
    "7933": {
        "botName": "T7_JOURNAL_WOOD_FULL",
        "humanName": "GrandmasterLumberjack'sJournal(Full)"
    },
    "7934": {
        "botName": "T8_JOURNAL_WOOD_EMPTY",
        "humanName": "ElderLumberjack'sJournal(Empty)"
    },
    "7935": {
        "botName": "T8_JOURNAL_WOOD_FULL",
        "humanName": "ElderLumberjack'sJournal(Full)"
    },
    "7936": {
        "botName": "T2_JOURNAL_STONE_EMPTY",
        "humanName": "NoviceStonecutter'sJournal(Empty)"
    },
    "7937": {
        "botName": "T2_JOURNAL_STONE_FULL",
        "humanName": "NoviceStonecutter'sJournal(Full)"
    },
    "7938": {
        "botName": "T3_JOURNAL_STONE_EMPTY",
        "humanName": "JourneymanStonecutter'sJournal(Empty)"
    },
    "7939": {
        "botName": "T3_JOURNAL_STONE_FULL",
        "humanName": "JourneymanStonecutter'sJournal(Full)"
    },
    "7940": {
        "botName": "T4_JOURNAL_STONE_EMPTY",
        "humanName": "AdeptStonecutter'sJournal(Empty)"
    },
    "7941": {
        "botName": "T4_JOURNAL_STONE_FULL",
        "humanName": "AdeptStonecutter'sJournal(Full)"
    },
    "7942": {
        "botName": "T5_JOURNAL_STONE_EMPTY",
        "humanName": "ExpertStonecutter'sJournal(Empty)"
    },
    "7943": {
        "botName": "T5_JOURNAL_STONE_FULL",
        "humanName": "ExpertStonecutter'sJournal(Full)"
    },
    "7944": {
        "botName": "T6_JOURNAL_STONE_EMPTY",
        "humanName": "MasterStonecutter'sJournal(Empty)"
    },
    "7945": {
        "botName": "T6_JOURNAL_STONE_FULL",
        "humanName": "MasterStonecutter'sJournal(Full)"
    },
    "7946": {
        "botName": "T7_JOURNAL_STONE_EMPTY",
        "humanName": "GrandmasterStonecutter'sJournal(Empty)"
    },
    "7947": {
        "botName": "T7_JOURNAL_STONE_FULL",
        "humanName": "GrandmasterStonecutter'sJournal(Full)"
    },
    "7948": {
        "botName": "T8_JOURNAL_STONE_EMPTY",
        "humanName": "ElderStonecutter'sJournal(Empty)"
    },
    "7949": {
        "botName": "T8_JOURNAL_STONE_FULL",
        "humanName": "ElderStonecutter'sJournal(Full)"
    },
    "7950": {
        "botName": "T2_JOURNAL_ORE_EMPTY",
        "humanName": "NoviceProspector'sJournal(Empty)"
    },
    "7951": {
        "botName": "T2_JOURNAL_ORE_FULL",
        "humanName": "NoviceProspector'sJournal(Full)"
    },
    "7952": {
        "botName": "T3_JOURNAL_ORE_EMPTY",
        "humanName": "JourneymanProspector'sJournal(Empty)"
    },
    "7953": {
        "botName": "T3_JOURNAL_ORE_FULL",
        "humanName": "JourneymanProspector'sJournal(Full)"
    },
    "7954": {
        "botName": "T4_JOURNAL_ORE_EMPTY",
        "humanName": "AdeptProspector'sJournal(Empty)"
    },
    "7955": {
        "botName": "T4_JOURNAL_ORE_FULL",
        "humanName": "AdeptProspector'sJournal(Full)"
    },
    "7956": {
        "botName": "T5_JOURNAL_ORE_EMPTY",
        "humanName": "ExpertProspector'sJournal(Empty)"
    },
    "7957": {
        "botName": "T5_JOURNAL_ORE_FULL",
        "humanName": "ExpertProspector'sJournal(Full)"
    },
    "7958": {
        "botName": "T6_JOURNAL_ORE_EMPTY",
        "humanName": "MasterProspector'sJournal(Empty)"
    },
    "7959": {
        "botName": "T6_JOURNAL_ORE_FULL",
        "humanName": "MasterProspector'sJournal(Full)"
    },
    "7960": {
        "botName": "T7_JOURNAL_ORE_EMPTY",
        "humanName": "GrandmasterProspector'sJournal(Empty)"
    },
    "7961": {
        "botName": "T7_JOURNAL_ORE_FULL",
        "humanName": "GrandmasterProspector'sJournal(Full)"
    },
    "7962": {
        "botName": "T8_JOURNAL_ORE_EMPTY",
        "humanName": "ElderProspector'sJournal(Empty)"
    },
    "7963": {
        "botName": "T8_JOURNAL_ORE_FULL",
        "humanName": "ElderProspector'sJournal(Full)"
    },
    "7964": {
        "botName": "T2_JOURNAL_FIBER_EMPTY",
        "humanName": "NoviceCropper'sJournal(Empty)"
    },
    "7965": {
        "botName": "T2_JOURNAL_FIBER_FULL",
        "humanName": "NoviceCropper'sJournal(Full)"
    },
    "7966": {
        "botName": "T3_JOURNAL_FIBER_EMPTY",
        "humanName": "JourneymanCropper'sJournal(Empty)"
    },
    "7967": {
        "botName": "T3_JOURNAL_FIBER_FULL",
        "humanName": "JourneymanCropper'sJournal(Full)"
    },
    "7968": {
        "botName": "T4_JOURNAL_FIBER_EMPTY",
        "humanName": "AdeptCropper'sJournal(Empty)"
    },
    "7969": {
        "botName": "T4_JOURNAL_FIBER_FULL",
        "humanName": "AdeptCropper'sJournal(Full)"
    },
    "7970": {
        "botName": "T5_JOURNAL_FIBER_EMPTY",
        "humanName": "ExpertCropper'sJournal(Empty)"
    },
    "7971": {
        "botName": "T5_JOURNAL_FIBER_FULL",
        "humanName": "ExpertCropper'sJournal(Full)"
    },
    "7972": {
        "botName": "T6_JOURNAL_FIBER_EMPTY",
        "humanName": "MasterCropper'sJournal(Empty)"
    },
    "7973": {
        "botName": "T6_JOURNAL_FIBER_FULL",
        "humanName": "MasterCropper'sJournal(Full)"
    },
    "7974": {
        "botName": "T7_JOURNAL_FIBER_EMPTY",
        "humanName": "GrandmasterCropper'sJournal(Empty)"
    },
    "7975": {
        "botName": "T7_JOURNAL_FIBER_FULL",
        "humanName": "GrandmasterCropper'sJournal(Full)"
    },
    "7976": {
        "botName": "T8_JOURNAL_FIBER_EMPTY",
        "humanName": "ElderCropper'sJournal(Empty)"
    },
    "7977": {
        "botName": "T8_JOURNAL_FIBER_FULL",
        "humanName": "ElderCropper'sJournal(Full)"
    },
    "7978": {
        "botName": "T2_JOURNAL_HIDE_EMPTY",
        "humanName": "NoviceGamekeeper'sJournal(Empty)"
    },
    "7979": {
        "botName": "T2_JOURNAL_HIDE_FULL",
        "humanName": "NoviceGamekeeper'sJournal(Full)"
    },
    "7980": {
        "botName": "T3_JOURNAL_HIDE_EMPTY",
        "humanName": "JourneymanGamekeeper'sJournal(Empty)"
    },
    "7981": {
        "botName": "T3_JOURNAL_HIDE_FULL",
        "humanName": "JourneymanGamekeeper'sJournal(Full)"
    },
    "7982": {
        "botName": "T4_JOURNAL_HIDE_EMPTY",
        "humanName": "AdeptGamekeeper'sJournal(Empty)"
    },
    "7983": {
        "botName": "T4_JOURNAL_HIDE_FULL",
        "humanName": "AdeptGamekeeper'sJournal(Full)"
    },
    "7984": {
        "botName": "T5_JOURNAL_HIDE_EMPTY",
        "humanName": "ExpertGamekeeper'sJournal(Empty)"
    },
    "7985": {
        "botName": "T5_JOURNAL_HIDE_FULL",
        "humanName": "ExpertGamekeeper'sJournal(Full)"
    },
    "7986": {
        "botName": "T6_JOURNAL_HIDE_EMPTY",
        "humanName": "MasterGamekeeper'sJournal(Empty)"
    },
    "7987": {
        "botName": "T6_JOURNAL_HIDE_FULL",
        "humanName": "MasterGamekeeper'sJournal(Full)"
    },
    "7988": {
        "botName": "T7_JOURNAL_HIDE_EMPTY",
        "humanName": "GrandmasterGamekeeper'sJournal(Empty)"
    },
    "7989": {
        "botName": "T7_JOURNAL_HIDE_FULL",
        "humanName": "GrandmasterGamekeeper'sJournal(Full)"
    },
    "7990": {
        "botName": "T8_JOURNAL_HIDE_EMPTY",
        "humanName": "ElderGamekeeper'sJournal(Empty)"
    },
    "7991": {
        "botName": "T8_JOURNAL_HIDE_FULL",
        "humanName": "ElderGamekeeper'sJournal(Full)"
    },
    "7992": {
        "botName": "T2_JOURNAL_WARRIOR_EMPTY",
        "humanName": "NoviceBlacksmith'sJournal(Empty)"
    },
    "7993": {
        "botName": "T2_JOURNAL_WARRIOR_FULL",
        "humanName": "NoviceBlacksmith'sJournal(Full)"
    },
    "7994": {
        "botName": "T3_JOURNAL_WARRIOR_EMPTY",
        "humanName": "JourneymanBlacksmith'sJournal(Empty)"
    },
    "7995": {
        "botName": "T3_JOURNAL_WARRIOR_FULL",
        "humanName": "JourneymanBlacksmith'sJournal(Full)"
    },
    "7996": {
        "botName": "T4_JOURNAL_WARRIOR_EMPTY",
        "humanName": "AdeptBlacksmith'sJournal(Empty)"
    },
    "7997": {
        "botName": "T4_JOURNAL_WARRIOR_FULL",
        "humanName": "AdeptBlacksmith'sJournal(Full)"
    },
    "7998": {
        "botName": "T5_JOURNAL_WARRIOR_EMPTY",
        "humanName": "ExpertBlacksmith'sJournal(Empty)"
    },
    "7999": {
        "botName": "T5_JOURNAL_WARRIOR_FULL",
        "humanName": "ExpertBlacksmith'sJournal(Full)"
    },
    "8000": {
        "botName": "T6_JOURNAL_WARRIOR_EMPTY",
        "humanName": "MasterBlacksmith'sJournal(Empty)"
    },
    "8001": {
        "botName": "T6_JOURNAL_WARRIOR_FULL",
        "humanName": "MasterBlacksmith'sJournal(Full)"
    },
    "8002": {
        "botName": "T7_JOURNAL_WARRIOR_EMPTY",
        "humanName": "GrandmasterBlacksmith'sJournal(Empty)"
    },
    "8003": {
        "botName": "T7_JOURNAL_WARRIOR_FULL",
        "humanName": "GrandmasterBlacksmith'sJournal(Full)"
    },
    "8004": {
        "botName": "T8_JOURNAL_WARRIOR_EMPTY",
        "humanName": "ElderBlacksmith'sJournal(Empty)"
    },
    "8005": {
        "botName": "T8_JOURNAL_WARRIOR_FULL",
        "humanName": "ElderBlacksmith'sJournal(Full)"
    },
    "8006": {
        "botName": "T2_JOURNAL_HUNTER_EMPTY",
        "humanName": "NoviceFletcher'sJournal(Empty)"
    },
    "8007": {
        "botName": "T2_JOURNAL_HUNTER_FULL",
        "humanName": "NoviceFletcher'sJournal(Full)"
    },
    "8008": {
        "botName": "T3_JOURNAL_HUNTER_EMPTY",
        "humanName": "JourneymanFletcher'sJournal(Empty)"
    },
    "8009": {
        "botName": "T3_JOURNAL_HUNTER_FULL",
        "humanName": "JourneymanFletcher'sJournal(Full)"
    },
    "8010": {
        "botName": "T4_JOURNAL_HUNTER_EMPTY",
        "humanName": "AdeptFletcher'sJournal(Empty)"
    },
    "8011": {
        "botName": "T4_JOURNAL_HUNTER_FULL",
        "humanName": "AdeptFletcher'sJournal(Full)"
    },
    "8012": {
        "botName": "T5_JOURNAL_HUNTER_EMPTY",
        "humanName": "ExpertFletcher'sJournal(Empty)"
    },
    "8013": {
        "botName": "T5_JOURNAL_HUNTER_FULL",
        "humanName": "ExpertFletcher'sJournal(Full)"
    },
    "8014": {
        "botName": "T6_JOURNAL_HUNTER_EMPTY",
        "humanName": "MasterFletcher'sJournal(Empty)"
    },
    "8015": {
        "botName": "T6_JOURNAL_HUNTER_FULL",
        "humanName": "MasterFletcher'sJournal(Full)"
    },
    "8016": {
        "botName": "T7_JOURNAL_HUNTER_EMPTY",
        "humanName": "GrandmasterFletcher'sJournal(Empty)"
    },
    "8017": {
        "botName": "T7_JOURNAL_HUNTER_FULL",
        "humanName": "GrandmasterFletcher'sJournal(Full)"
    },
    "8018": {
        "botName": "T8_JOURNAL_HUNTER_EMPTY",
        "humanName": "ElderFletcher'sJournal(Empty)"
    },
    "8019": {
        "botName": "T8_JOURNAL_HUNTER_FULL",
        "humanName": "ElderFletcher'sJournal(Full)"
    },
    "8020": {
        "botName": "T2_JOURNAL_MAGE_EMPTY",
        "humanName": "NoviceImbuer'sJournal(Empty)"
    },
    "8021": {
        "botName": "T2_JOURNAL_MAGE_FULL",
        "humanName": "NoviceImbuer'sJournal(Full)"
    },
    "8022": {
        "botName": "T3_JOURNAL_MAGE_EMPTY",
        "humanName": "JourneymanImbuer'sJournal(Empty)"
    },
    "8023": {
        "botName": "T3_JOURNAL_MAGE_FULL",
        "humanName": "JourneymanImbuer'sJournal(Full)"
    },
    "8024": {
        "botName": "T4_JOURNAL_MAGE_EMPTY",
        "humanName": "AdeptImbuer'sJournal(Empty)"
    },
    "8025": {
        "botName": "T4_JOURNAL_MAGE_FULL",
        "humanName": "AdeptImbuer'sJournal(Full)"
    },
    "8026": {
        "botName": "T5_JOURNAL_MAGE_EMPTY",
        "humanName": "ExpertImbuer'sJournal(Empty)"
    },
    "8027": {
        "botName": "T5_JOURNAL_MAGE_FULL",
        "humanName": "ExpertImbuer'sJournal(Full)"
    },
    "8028": {
        "botName": "T6_JOURNAL_MAGE_EMPTY",
        "humanName": "MasterImbuer'sJournal(Empty)"
    },
    "8029": {
        "botName": "T6_JOURNAL_MAGE_FULL",
        "humanName": "MasterImbuer'sJournal(Full)"
    },
    "8030": {
        "botName": "T7_JOURNAL_MAGE_EMPTY",
        "humanName": "GrandmasterImbuer'sJournal(Empty)"
    },
    "8031": {
        "botName": "T7_JOURNAL_MAGE_FULL",
        "humanName": "GrandmasterImbuer'sJournal(Full)"
    },
    "8032": {
        "botName": "T8_JOURNAL_MAGE_EMPTY",
        "humanName": "ElderImbuer'sJournal(Empty)"
    },
    "8033": {
        "botName": "T8_JOURNAL_MAGE_FULL",
        "humanName": "ElderImbuer'sJournal(Full)"
    },
    "8034": {
        "botName": "T2_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "NoviceTinker'sJournal(Empty)"
    },
    "8035": {
        "botName": "T2_JOURNAL_TOOLMAKER_FULL",
        "humanName": "NoviceTinker'sJournal(Full)"
    },
    "8036": {
        "botName": "T3_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "JourneymanTinker'sJournal(Empty)"
    },
    "8037": {
        "botName": "T3_JOURNAL_TOOLMAKER_FULL",
        "humanName": "JourneymanTinker'sJournal(Full)"
    },
    "8038": {
        "botName": "T4_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "AdeptTinker'sJournal(Empty)"
    },
    "8039": {
        "botName": "T4_JOURNAL_TOOLMAKER_FULL",
        "humanName": "AdeptTinker'sJournal(Full)"
    },
    "8040": {
        "botName": "T5_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "ExpertTinker'sJournal(Empty)"
    },
    "8041": {
        "botName": "T5_JOURNAL_TOOLMAKER_FULL",
        "humanName": "ExpertTinker'sJournal(Full)"
    },
    "8042": {
        "botName": "T6_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "MasterTinker'sJournal(Empty)"
    },
    "8043": {
        "botName": "T6_JOURNAL_TOOLMAKER_FULL",
        "humanName": "MasterTinker'sJournal(Full)"
    },
    "8044": {
        "botName": "T7_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "GrandmasterTinker'sJournal(Empty)"
    },
    "8045": {
        "botName": "T7_JOURNAL_TOOLMAKER_FULL",
        "humanName": "GrandmasterTinker'sJournal(Full)"
    },
    "8046": {
        "botName": "T8_JOURNAL_TOOLMAKER_EMPTY",
        "humanName": "ElderTinker'sJournal(Empty)"
    },
    "8047": {
        "botName": "T8_JOURNAL_TOOLMAKER_FULL",
        "humanName": "ElderTinker'sJournal(Full)"
    },
    "8048": {
        "botName": "T2_JOURNAL_MERCENARY_EMPTY",
        "humanName": "NoviceMercenary'sJournal(Empty)"
    },
    "8049": {
        "botName": "T2_JOURNAL_MERCENARY_FULL",
        "humanName": "NoviceMercenary'sJournal(Full)"
    },
    "8050": {
        "botName": "T3_JOURNAL_MERCENARY_EMPTY",
        "humanName": "JourneymanMercenary'sJournal(Empty)"
    },
    "8051": {
        "botName": "T3_JOURNAL_MERCENARY_FULL",
        "humanName": "JourneymanMercenary'sJournal(Full)"
    },
    "8052": {
        "botName": "T4_JOURNAL_MERCENARY_EMPTY",
        "humanName": "AdeptMercenary'sJournal(Empty)"
    },
    "8053": {
        "botName": "T4_JOURNAL_MERCENARY_FULL",
        "humanName": "AdeptMercenary'sJournal(Full)"
    },
    "8054": {
        "botName": "T5_JOURNAL_MERCENARY_EMPTY",
        "humanName": "ExpertMercenary'sJournal(Empty)"
    },
    "8055": {
        "botName": "T5_JOURNAL_MERCENARY_FULL",
        "humanName": "ExpertMercenary'sJournal(Full)"
    },
    "8056": {
        "botName": "T6_JOURNAL_MERCENARY_EMPTY",
        "humanName": "MasterMercenary'sJournal(Empty)"
    },
    "8057": {
        "botName": "T6_JOURNAL_MERCENARY_FULL",
        "humanName": "MasterMercenary'sJournal(Full)"
    },
    "8058": {
        "botName": "T7_JOURNAL_MERCENARY_EMPTY",
        "humanName": "GrandmasterMercenary'sJournal(Empty)"
    },
    "8059": {
        "botName": "T7_JOURNAL_MERCENARY_FULL",
        "humanName": "GrandmasterMercenary'sJournal(Full)"
    },
    "8060": {
        "botName": "T8_JOURNAL_MERCENARY_EMPTY",
        "humanName": "ElderMercenary'sJournal(Empty)"
    },
    "8061": {
        "botName": "T8_JOURNAL_MERCENARY_FULL",
        "humanName": "ElderMercenary'sJournal(Full)"
    },
    "8062": {
        "botName": "T2_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Novice'sGeneralistTrophyJournal(Empty)"
    },
    "8063": {
        "botName": "T2_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Novice'sGeneralistTrophyJournal(Full)"
    },
    "8064": {
        "botName": "T3_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Journeyman'sGeneralistTrophyJournal(Empty)"
    },
    "8065": {
        "botName": "T3_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Journeyman'sGeneralistTrophyJournal(Full)"
    },
    "8066": {
        "botName": "T4_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Adept'sGeneralistTrophyJournal(Empty)"
    },
    "8067": {
        "botName": "T4_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Adept'sGeneralistTrophyJournal(Full)"
    },
    "8068": {
        "botName": "T5_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Expert'sGeneralistTrophyJournal(Empty)"
    },
    "8069": {
        "botName": "T5_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Expert'sGeneralistTrophyJournal(Full)"
    },
    "8070": {
        "botName": "T6_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Master'sGeneralistTrophyJournal(Empty)"
    },
    "8071": {
        "botName": "T6_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Master'sGeneralistTrophyJournal(Full)"
    },
    "8072": {
        "botName": "T7_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Grandmaster'sGeneralistTrophyJournal(Empty)"
    },
    "8073": {
        "botName": "T7_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Grandmaster'sGeneralistTrophyJournal(Full)"
    },
    "8074": {
        "botName": "T8_JOURNAL_TROPHY_GENERAL_EMPTY",
        "humanName": "Elder'sGeneralistTrophyJournal(Empty)"
    },
    "8075": {
        "botName": "T8_JOURNAL_TROPHY_GENERAL_FULL",
        "humanName": "Elder'sGeneralistTrophyJournal(Full)"
    },
    "8076": {
        "botName": "T2_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "NoviceMercenary'sTrophyJournal(Empty)"
    },
    "8077": {
        "botName": "T2_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "NoviceMercenary'sTrophyJournal(Full)"
    },
    "8078": {
        "botName": "T3_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "JourneymanMercenary'sTrophyJournal(Empty)"
    },
    "8079": {
        "botName": "T3_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "JourneymanMercenary'sTrophyJournal(Full)"
    },
    "8080": {
        "botName": "T4_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "AdeptMercenary'sTrophyJournal(Empty)"
    },
    "8081": {
        "botName": "T4_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "AdeptMercenary'sTrophyJournal(Full)"
    },
    "8082": {
        "botName": "T5_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "ExpertMercenary'sTrophyJournal(Empty)"
    },
    "8083": {
        "botName": "T5_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "ExpertMercenary'sTrophyJournal(Full)"
    },
    "8084": {
        "botName": "T6_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "MasterMercenary'sTrophyJournal(Empty)"
    },
    "8085": {
        "botName": "T6_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "MasterMercenary'sTrophyJournal(Full)"
    },
    "8086": {
        "botName": "T7_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "GrandmasterMercenary'sTrophyJournal(Empty)"
    },
    "8087": {
        "botName": "T7_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "GrandmasterMercenary'sTrophyJournal(Full)"
    },
    "8088": {
        "botName": "T8_JOURNAL_TROPHY_MERCENARY_EMPTY",
        "humanName": "ElderMercenary'sTrophyJournal(Empty)"
    },
    "8089": {
        "botName": "T8_JOURNAL_TROPHY_MERCENARY_FULL",
        "humanName": "ElderMercenary'sTrophyJournal(Full)"
    },
    "8090": {
        "botName": "T2_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "NoviceGamekeeper'sTrophyJournal(Empty)"
    },
    "8091": {
        "botName": "T2_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "NoviceGamekeeper'sTrophyJournal(Full)"
    },
    "8092": {
        "botName": "T3_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "JourneymanGamekeeper'sTrophyJournal(Empty)"
    },
    "8093": {
        "botName": "T3_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "JourneymanGamekeeper'sTrophyJournal(Full)"
    },
    "8094": {
        "botName": "T4_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "AdeptGamekeeper'sTrophyJournal(Empty)"
    },
    "8095": {
        "botName": "T4_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "AdeptGamekeeper'sTrophyJournal(Full)"
    },
    "8096": {
        "botName": "T5_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "ExpertGamekeeper'sTrophyJournal(Empty)"
    },
    "8097": {
        "botName": "T5_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "ExpertGamekeeper'sTrophyJournal(Full)"
    },
    "8098": {
        "botName": "T6_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "MasterGamekeeper'sTrophyJournal(Empty)"
    },
    "8099": {
        "botName": "T6_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "MasterGamekeeper'sTrophyJournal(Full)"
    },
    "8100": {
        "botName": "T7_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "GrandmasterGamekeeper'sTrophyJournal(Empty)"
    },
    "8101": {
        "botName": "T7_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "GrandmasterGamekeeper'sTrophyJournal(Full)"
    },
    "8102": {
        "botName": "T8_JOURNAL_TROPHY_HIDE_EMPTY",
        "humanName": "ElderGamekeeper'sTrophyJournal(Empty)"
    },
    "8103": {
        "botName": "T8_JOURNAL_TROPHY_HIDE_FULL",
        "humanName": "ElderGamekeeper'sTrophyJournal(Full)"
    },
    "8104": {
        "botName": "T2_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "NoviceLumberjack'sTrophyJournal(Empty)"
    },
    "8105": {
        "botName": "T2_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "NoviceLumberjack'sTrophyJournal(Full)"
    },
    "8106": {
        "botName": "T3_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "JourneymanLumberjack'sTrophyJournal(Empty)"
    },
    "8107": {
        "botName": "T3_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "JourneymanLumberjack'sTrophyJournal(Full)"
    },
    "8108": {
        "botName": "T4_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "AdeptLumberjack'sTrophyJournal(Empty)"
    },
    "8109": {
        "botName": "T4_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "AdeptLumberjack'sTrophyJournal(Full)"
    },
    "8110": {
        "botName": "T5_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "ExpertLumberjack'sTrophyJournal(Empty)"
    },
    "8111": {
        "botName": "T5_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "ExpertLumberjack'sTrophyJournal(Full)"
    },
    "8112": {
        "botName": "T6_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "MasterLumberjack'sTrophyJournal(Empty)"
    },
    "8113": {
        "botName": "T6_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "MasterLumberjack'sTrophyJournal(Full)"
    },
    "8114": {
        "botName": "T7_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "GrandmasterLumberjack'sTrophyJournal(Empty)"
    },
    "8115": {
        "botName": "T7_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "GrandmasterLumberjack'sTrophyJournal(Full)"
    },
    "8116": {
        "botName": "T8_JOURNAL_TROPHY_WOOD_EMPTY",
        "humanName": "ElderLumberjack'sTrophyJournal(Empty)"
    },
    "8117": {
        "botName": "T8_JOURNAL_TROPHY_WOOD_FULL",
        "humanName": "ElderLumberjack'sTrophyJournal(Full)"
    },
    "8118": {
        "botName": "T2_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "NoviceStonecutter'sTrophyJournal(Empty)"
    },
    "8119": {
        "botName": "T2_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "NoviceStonecutter'sTrophyJournal(Full)"
    },
    "8120": {
        "botName": "T3_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "JourneymanStonecutter'sTrophyJournal(Empty)"
    },
    "8121": {
        "botName": "T3_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "JourneymanStonecutter'sTrophyJournal(Full)"
    },
    "8122": {
        "botName": "T4_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "AdeptStonecutter'sTrophyJournal(Empty)"
    },
    "8123": {
        "botName": "T4_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "AdeptStonecutter'sTrophyJournal(Full)"
    },
    "8124": {
        "botName": "T5_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "ExpertStonecutter'sTrophyJournal(Empty)"
    },
    "8125": {
        "botName": "T5_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "ExpertStonecutter'sTrophyJournal(Full)"
    },
    "8126": {
        "botName": "T6_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "MasterStonecutter'sTrophyJournal(Empty)"
    },
    "8127": {
        "botName": "T6_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "MasterStonecutter'sTrophyJournal(Full)"
    },
    "8128": {
        "botName": "T7_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "GrandmasterStonecutter'sTrophyJournal(Empty)"
    },
    "8129": {
        "botName": "T7_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "GrandmasterStonecutter'sTrophyJournal(Full)"
    },
    "8130": {
        "botName": "T8_JOURNAL_TROPHY_STONE_EMPTY",
        "humanName": "ElderStonecutter'sTrophyJournal(Empty)"
    },
    "8131": {
        "botName": "T8_JOURNAL_TROPHY_STONE_FULL",
        "humanName": "ElderStonecutter'sTrophyJournal(Full)"
    },
    "8132": {
        "botName": "T2_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "NoviceProspector'sTrophyJournal(Empty)"
    },
    "8133": {
        "botName": "T2_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "NoviceProspector'sTrophyJournal(Full)"
    },
    "8134": {
        "botName": "T3_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "JourneymanProspector'sTrophyJournal(Empty)"
    },
    "8135": {
        "botName": "T3_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "JourneymanProspector'sTrophyJournal(Full)"
    },
    "8136": {
        "botName": "T4_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "AdeptProspector'sTrophyJournal(Empty)"
    },
    "8137": {
        "botName": "T4_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "AdeptProspector'sTrophyJournal(Full)"
    },
    "8138": {
        "botName": "T5_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "ExpertProspector'sTrophyJournal(Empty)"
    },
    "8139": {
        "botName": "T5_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "ExpertProspector'sTrophyJournal(Full)"
    },
    "8140": {
        "botName": "T6_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "MasterProspector'sTrophyJournal(Empty)"
    },
    "8141": {
        "botName": "T6_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "MasterProspector'sTrophyJournal(Full)"
    },
    "8142": {
        "botName": "T7_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "GrandmasterProspector'sTrophyJournal(Empty)"
    },
    "8143": {
        "botName": "T7_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "GrandmasterProspector'sTrophyJournal(Full)"
    },
    "8144": {
        "botName": "T8_JOURNAL_TROPHY_ORE_EMPTY",
        "humanName": "ElderProspector'sTrophyJournal(Empty)"
    },
    "8145": {
        "botName": "T8_JOURNAL_TROPHY_ORE_FULL",
        "humanName": "ElderProspector'sTrophyJournal(Full)"
    },
    "8146": {
        "botName": "T2_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "NoviceCropper'sTrophyJournal(Empty)"
    },
    "8147": {
        "botName": "T2_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "NoviceCropper'sTrophyJournal(Full)"
    },
    "8148": {
        "botName": "T3_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "JourneymanCropper'sTrophyJournal(Empty)"
    },
    "8149": {
        "botName": "T3_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "JourneymanCropper'sTrophyJournal(Full)"
    },
    "8150": {
        "botName": "T4_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "AdeptCropper'sTrophyJournal(Empty)"
    },
    "8151": {
        "botName": "T4_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "AdeptCropper'sTrophyJournal(Full)"
    },
    "8152": {
        "botName": "T5_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "ExpertCropper'sTrophyJournal(Empty)"
    },
    "8153": {
        "botName": "T5_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "ExpertCropper'sTrophyJournal(Full)"
    },
    "8154": {
        "botName": "T6_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "MasterCropper'sTrophyJournal(Empty)"
    },
    "8155": {
        "botName": "T6_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "MasterCropper'sTrophyJournal(Full)"
    },
    "8156": {
        "botName": "T7_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "GrandmasterCropper'sTrophyJournal(Empty)"
    },
    "8157": {
        "botName": "T7_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "GrandmasterCropper'sTrophyJournal(Full)"
    },
    "8158": {
        "botName": "T8_JOURNAL_TROPHY_FIBER_EMPTY",
        "humanName": "ElderCropper'sTrophyJournal(Empty)"
    },
    "8159": {
        "botName": "T8_JOURNAL_TROPHY_FIBER_FULL",
        "humanName": "ElderCropper'sTrophyJournal(Full)"
    },
    "8160": {
        "botName": "T2_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "NoviceFisherman'sTrophyJournal(Empty)"
    },
    "8161": {
        "botName": "T2_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "NoviceFisherman'sTrophyJournal(Full)"
    },
    "8162": {
        "botName": "T3_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "JourneymanFisherman'sTrophyJournal(Empty)"
    },
    "8163": {
        "botName": "T3_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "JourneymanFisherman'sTrophyJournal(Full)"
    },
    "8164": {
        "botName": "T4_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "AdeptFisherman'sTrophyJournal(Empty)"
    },
    "8165": {
        "botName": "T4_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "AdeptFisherman'sTrophyJournal(Full)"
    },
    "8166": {
        "botName": "T5_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "ExpertFisherman'sTrophyJournal(Empty)"
    },
    "8167": {
        "botName": "T5_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "ExpertFisherman'sTrophyJournal(Full)"
    },
    "8168": {
        "botName": "T6_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "MasterFisherman'sTrophyJournal(Empty)"
    },
    "8169": {
        "botName": "T6_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "MasterFisherman'sTrophyJournal(Full)"
    },
    "8170": {
        "botName": "T7_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "GrandmasterFisherman'sTrophyJournal(Empty)"
    },
    "8171": {
        "botName": "T7_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "GrandmasterFisherman'sTrophyJournal(Full)"
    },
    "8172": {
        "botName": "T8_JOURNAL_TROPHY_FISHING_EMPTY",
        "humanName": "ElderFisherman'sTrophyJournal(Empty)"
    },
    "8173": {
        "botName": "T8_JOURNAL_TROPHY_FISHING_FULL",
        "humanName": "ElderFisherman'sTrophyJournal(Full)"
    },
    "8174": {
        "botName": "T2_JOURNAL_FISHING_EMPTY",
        "humanName": "NoviceFisherman'sJournal(Empty)"
    },
    "8175": {
        "botName": "T2_JOURNAL_FISHING_FULL",
        "humanName": "NoviceFisherman'sJournal(Full)"
    },
    "8176": {
        "botName": "T3_JOURNAL_FISHING_EMPTY",
        "humanName": "JourneymanFisherman'sJournal(Empty)"
    },
    "8177": {
        "botName": "T3_JOURNAL_FISHING_FULL",
        "humanName": "JourneymanFisherman'sJournal(Full)"
    },
    "8178": {
        "botName": "T4_JOURNAL_FISHING_EMPTY",
        "humanName": "AdeptFisherman'sJournal(Empty)"
    },
    "8179": {
        "botName": "T4_JOURNAL_FISHING_FULL",
        "humanName": "AdeptFisherman'sJournal(Full)"
    },
    "8180": {
        "botName": "T5_JOURNAL_FISHING_EMPTY",
        "humanName": "ExpertFisherman'sJournal(Empty)"
    },
    "8181": {
        "botName": "T5_JOURNAL_FISHING_FULL",
        "humanName": "ExpertFisherman'sJournal(Full)"
    },
    "8182": {
        "botName": "T6_JOURNAL_FISHING_EMPTY",
        "humanName": "MasterFisherman'sJournal(Empty)"
    },
    "8183": {
        "botName": "T6_JOURNAL_FISHING_FULL",
        "humanName": "MasterFisherman'sJournal(Full)"
    },
    "8184": {
        "botName": "T7_JOURNAL_FISHING_EMPTY",
        "humanName": "GrandmasterFisherman'sJournal(Empty)"
    },
    "8185": {
        "botName": "T7_JOURNAL_FISHING_FULL",
        "humanName": "GrandmasterFisherman'sJournal(Full)"
    },
    "8186": {
        "botName": "T8_JOURNAL_FISHING_EMPTY",
        "humanName": "ElderFisherman'sJournal(Empty)"
    },
    "8187": {
        "botName": "T8_JOURNAL_FISHING_FULL",
        "humanName": "ElderFisherman'sJournal(Full)"
    }
}
listOfItems = {}
orderedList = {}
function checkExists(botName) {
    if (listOfItems[botName] == undefined) {
        listOfItems[botName] = {}
        listOfItems[botName].name=botName
        listOfItems[botName].sellingFor = 0
        listOfItems[botName].buyingFor = 0
        listOfItems[botName].soldInMonth = 0
    }
}

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET') {
        stringList=JSON.stringify(orderedList)
        res.end(stringList)
    }
    if (req.method === 'POST') {
        const buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }

        const data = Buffer.concat(buffers).toString();
        object = JSON.parse(data)

        //Sold in a week
        if (object.AlbionId) {
            botName = idList[object.AlbionId]['botName'] + '%' + object.QualityLevel
            checkExists(botName)
            quantityTotal = 0
            priceTotal = 0

            for (let index = 0; index < object.MarketHistories.length; index++) {
                quantityTotal += object.MarketHistories[index].ItemAmount
                priceTotal += object.MarketHistories[index].SilverAmount
            }
            previousPrice = (priceTotal / 10000) / quantityTotal
            listOfItems[botName].soldInMonth = quantityTotal
            listOfItems[botName].previousPrice = Math.round(previousPrice)


        }

        // Prices
        if (object.Orders) {
            orders = object.Orders
            for (let index = 0; index < orders.length; index++) {
                itemObject = orders[index]
                item = itemObject.ItemTypeId + '%' + itemObject.QualityLevel
                price = itemObject.UnitPriceSilver / 10000
                checkExists(item)
                if (itemObject.AuctionType == 'offer') {
                    if (listOfItems[item].sellingFor == 0) {
                        listOfItems[item].sellingFor = price
                    }
                    else if (price < listOfItems[item].sellingFor) {
                        listOfItems[item].sellingFor = price
                    }
                }
                else {
                    if (price > listOfItems[item].buyingFor) {
                        listOfItems[item].buyingFor = price
                    }
                }

            }


        }
        for (const key in listOfItems) {
            profit = (listOfItems[key].sellingFor * 0.955) - (listOfItems[key].buyingFor * 1.015)
            listOfItems[key].profit = Math.round(profit)
        }
        orderedList = Object.keys(listOfItems).sort().reduce(
            (obj, key) => {
                obj[key] = listOfItems[key];
                return obj;
            },
            {}
        );
    }
});
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});