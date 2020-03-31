
var d = 0;
var k = 0;
function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }


    c = document.getElementsByClassName("mapspan chest available").length;
    d = document.getElementsByClassName("mapspan dungeon available").length;


    
 

    if (unopened == 0) {
        return "opened";
        
    }
    if (canGet == unopened) {
        return "available";
        c++;
    }
    if (canGet == 0) {
        return "unavailable";
        c--;
    }
    return "possible";
}


function checkCountMinus() {
    for (var k = 0; k < 1; k++) {
        c--;
    }
}

function hasBoom()
{
    return ((items.Bombs || items.Bombsb || items.GiantBombs))
}

function canSmash()
{
    return (hasBoom() || items.Chainball);
}

function shootPew()
{
    return (hasBoom() && items.Bow);
}

function canPlay(song){
    return (song && items.Ocarina);
}

//Need lanturn to burn the web at the entrance and sword to get past Golden Wolf
function canAccessForest() {
    return (items.Lanturn && items.Sword >= 2);
}

//Need iron boots to beat Gor Coron
function canAccessMines() {
    return (items.IronBoots);
}

//Need iron boots to use water bombs and Zora Armor so you do not drown
function canAccessLakebed() {
    return (items.ZoraArmor && hasBoom() && items.IronBoots);
}

//Need Auru's Memo to use the cannon to get to the desert
function canAccessDesert() {
    return (items.Entry);
}

//Need Aleshi's Sketch to get the Coral Earring to get the ReekfishScent
function canAccessSnowpeak() {
    return (items.Entry >= 2 && items.Scent >=4 && items.Rod >=2);
}

//Need Golden Cuccoo to reach Sacred Grove then need bow to beat Skull Kid and need Master Sword to open Dungeon Entrance
function canAccessTot() {
    return (items.Entry >= 3 && items.Sword >=3 && items.Bow);
}

//Need Dominion Rod to move the Owl Statues and Charm to get Skybook to access Cannon and Clawshot to enter cannon
function canAccessCITS() {
    return (items.Dominion && items.Entry >= 4 && items.Clawshot && items.Charm >= 4);
}

// You only need the Mirror Shard from City in the Sky to open up Pallace of Twilight
function canAccessPoT() {
    return (items.Shard4);
}

//To enter Hyrule you need to beat Zant so the requirements for beating Zant are the same as entering Hyrule
function canAccessHyrule() {
    return (canAccessPoT() && items.Clawshot > 1 && items.Sword > 3 && items.Boomerang && items.IronBoots && items.ZoraArmor && items.Chainball);
}


// define dungeon chests
var dungeons = [
{
        name: "Ordon Village",
        x: "55.5%",
        y: "85.84%",
        chestlist: {
            'Wooden Sword Chest': { isAvailable: function () {
                return (items.Slingshot); }, },
            'Link House Basement Chest': { isAvailable: function () {
                return items.Lanturn; }, },
            'Fishing Rod': { isAvailable: function () {
                return true; }, },
            'Seras Bottle': { isAvailable: function () {
                return items.Rod; }, },
            'Slingshot': { isAvailable: function () {
                return items.Rod; }, },
            'Ordon Shield': { isAvailable: function () {
                return true; }, },
            'Ordon Sword': { isAvailable: function () {
                return true; }, },
            'Iron Boots Chest': { isAvailable: function () {
                return (items.Shadow1); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Forest Temple",
        x: "47.58%",
        y: "66.2%",
        chestlist: {
            'Entrance Vine Chest': { isAvailable: function () { return canAccessForest() && (items.Bow || items.Slingshot || items.Clawshot || items.Boomerang || items.Chainball); }, },
            'Central Chest Behind Stairs': { isAvailable: function () { return canAccessForest(); }, },
            'Dungeon Map Chest': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'Windless Bridge Chest': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'Second Monkey Under Bridge Chest': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'Totem Pole Chest': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'West Tile Worm Small Chest': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'Deku Like Piece of Heart': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'Big Baba Small Key': { isAvailable: function () { return items.Lanturn && (items.Bow || items.Slingshot || items.Clawshot || items.Boomerang || items.Chainball) && canAccessForest(); }, },
            'Boomerang': { isAvailable: function () { return items.Lanturn && (items.Bow || items.Slingshot || items.Clawshot || items.Boomerang || items.Chainball) && canAccessForest(); }, },
            'West Tile Worm Heart Piece': { isAvailable: function () { return items.Lanturn && items.Boomerang && canAccessForest(); }, },
            'Compass Chest': { isAvailable: function () { return items.Boomerang && canAccessForest(); }, },
            'Big Key Chest': { isAvailable: function () { return items.Lanturn && items.Boomerang && canAccessForest(); }, },
            'Water Cave Near Big Key': { isAvailable: function () { return items.Lanturn && canAccessForest(); }, },
            'North Deku Like Chest': { isAvailable: function () { return items.Lanturn && items.Boomerang && canAccessForest(); }, },
            'East Tile Worm Chest': { isAvailable: function () { return items.Lanturn && items.Boomerang && canAccessForest(); }, },
            'Diababa': { isAvailable: function () { return items.Lanturn && items.Boomerang && canAccessForest(); }, },
        },
        isBeatable: function() {
            if (canAccessForest() && items.Boomerang && items.Lanturn) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Goron Mines",
        x: "85.91%",
        y: "38.16%",
        chestlist: {
            'Entrace Small Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Main Magnet Room Bottom Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Gor Amato Small Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Gor Amato Key Shard': { isAvailable: function () {
                return canAccessMines(); }, },
            'Magnet Maze Heart Piece': { isAvailable: function () {
                return canAccessMines(); }, },
            'Switch Room Underwater Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Switch Room Small Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'After Switch Room Heart Piece': { isAvailable: function () {
                return canAccessMines(); }, },
            'Outside Beamos Chest': { isAvailable: function () {
                return canAccessMines(); }, },
            'Gor Ebizo Key Shard': { isAvailable: function () {
                return canAccessMines(); }, },
            'Gor Ebizo Small Chest ': { isAvailable: function () { 
                return canAccessMines(); }, },
            'Small Chest Before Dangoro': { isAvailable: function () { 
                return canAccessMines(); }, },
            'Bow Chest': { isAvailable: function () { 
                return canAccessMines(); }, },
            'Compass Chest': { isAvailable: function () { 
                return  canAccessMines() && items.Bow; }, },
            'Gor Liggs Key Shard': { isAvailable: function () { 
                return canAccessMines() && items.Bow; }, },
            'Gor Liggs Chest': { isAvailable: function () { 
                return canAccessMines() && items.Bow; }, },
            'Main Magnet Room Top Chest': { isAvailable: function () { 
                return canAccessMines() && items.Bow; }, },
            'Outside Underwater Chest': { isAvailable: function () { 
                return canAccessMines(); }, },
            'Outside Clawshot Chest': { isAvailable: function () { 
                return canAccessMines() && items.Clawshot; }, },
            'Fyrus': { isAvailable: function () { 
                return canAccessMines() && items.Bow; }, },
        },
        isBeatable: function() {
            if (canAccessMines && items.IronBoots && items.Clawshot && items.Bow) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Lakebed Temple",
        x: "40.33%",
        y: "47.76%",
        chestlist: {
            'Lobby Left Chest': { isAvailable: function () {
                return canAccessLakebed(); }, },
            'Lobby Rear Chest': { isAvailable: function () {
                return canAccessLakebed(); }, },
            'Stalactite Room Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Central Room Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'East Stalactite Room Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'East Second Floor Southwest Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'East Second Floor Southeast Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'East Water Supply Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Before Deku Toad Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Before Deku Toad Submerged Left Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Before Deku Toad Submerged Right Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Clawshot Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'Central Room Chanelier Heart Piece': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'Central Room Center Spire Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew(); }, },
            'East Water Supply Clawshot Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Lower Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Water Supply Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Second Floor Southwest Underwater Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Second Floor Central Small Chest': { isAvailable: function () {
                return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Second Floor Northeast Chest': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Second Floor Southeast Chest': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'Big Key Chest': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'West Water Maze Small Chest': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'East Stalactite Room Heart Piece': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
            'Morpheel': { isAvailable: function () { return canAccessLakebed() && shootPew() && items.Clawshot; }, },
        },
        isBeatable: function () {
            if (canAccessLakebed() && shootPew() && items.Clawshot) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Arbiter's Grounds",
        x: "15.2%",
        y: "41.44%",
        chestlist: {
            'Entrance Chest': { isAvailable: function () {
                return canAccessDesert()  }, },
            'Lobby Heart Piece Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'East Redead Lower Small Chest': {
                isAvailable: function () { return canAccessDesert() && items.Sword >= 3; }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'East Upper Turnable Readed Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'Ghoul Rat Small Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'West Small Chest Behind Block': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'West Chandelier Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'Stalfos West Small Chest': { isAvailable: function () {
                return canAccessDesert() && (hasBoom() || items.Chainball) && items.Lanturn; }, },
            'Stalfos Northeast Small Chest': { isAvailable: function () {
                return canAccessDesert() && (hasBoom() || items.Chainball) && items.Lanturn; }, },
            'North Turning Room Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'Spinner Chest': { isAvailable: function () {
                return canAccessDesert() && items.Lanturn; }, },
            'Spinner Room First Small Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Spinner Room Second Small Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Spinner Room Lower Central Small Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Spinner Room Heart Piece Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Spinner Room Lower North Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Big Key Chest': { isAvailable: function () {
                return canAccessDesert() && items.Spinner && items.Lanturn; }, },
            'Stalord': {
                isAvailable: function () {
                    return canAccessDesert() && items.Spinner && items.Lanturn && (items.Boomerang || items.Clawshot) && (hasBoom() || items.Chainball);
                },
            },
        },
        isBeatable: function() {
            if (canAccessDesert() && items.Lanturn && items.Spinner && (items.Boomerang || items.Clawshot) && (hasBoom() || items.Chainball)) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Snowpeak Ruins",
        x: "21.31%",
        y: "28.64%",
        chestlist: {
            'Entrance Left Armor Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; } },
            'Entrance Right Armor Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; } },
            'Dungeon Map': { isAvailable: function () { 
				return canAccessSnowpeak(); } },
            'Courtyard Partially Buried Small Chest': { isAvailable: function () {
                return canAccessSnowpeak(); } },
            'Courtyard Open Chest': { isAvailable: function () {
                return canAccessSnowpeak(); } },
            'Ordon Pumpkin Chest': { isAvailable: function () {
                return canAccessSnowpeak();  } },
            'Courtyard Buried Small Chest': { isAvailable: function () {
                return canAccessSnowpeak(); } },
            'Wooden Beam Room Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && (hasBoom() || items.Chainball); } },
            'Compass Chest': { isAvailable: function () {
                return canAccessSnowpeak() && (hasBoom() || items.Chainball); } },
            'Courtyard South Ice Wall Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && (hasBoom() || items.Chainball); } },
            'Ball and Chain': { isAvailable: function () {
                return canAccessSnowpeak() && (hasBoom() || items.Chainball); } },
            'Goat Cheese Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; } },
            'West Breakable Floor Heart Piece': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; } },
            'Wooden Beam Room Chandelier Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; } },
            'Entrace Chandelier Heart Piece Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; }  },
            'East Chilfos Chandelier Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball && items.Clawshot; } },
            'West Cannon Storage Left Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball; }  },
            'West Cannon Storage Right Small Chest': { isAvailable: function () {
                return canAccessSnowpeak() && (hasBoom() || items.Chainball);  } },
            'Bedroom Key Chest': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball && hasBoom(); } },
            'Blizzeta': { isAvailable: function () {
                return canAccessSnowpeak() && items.Chainball && hasBoom();  } },
        },
        isBeatable: function () {
            if (canAccessSnowpeak() && items.Chainball && hasBoom()) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Temple of Time",
        x: "43.83%",
        y: "63.36%",
        chestlist: {
            'Lobby Lanturn Chest': { isAvailable: function () {
                return canAccessTot() && items.Lanturn; }, },
            'First Stair Pot Small Chest': { isAvailable: function () {
                return canAccessTot(); }, },
            'First Stair Window Small Chest': { isAvailable: function () {
                return canAccessTot(); }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessTot(); }, },
            'Armos Room Left Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Scale Room Spider Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Third Stair Swinging Gilloutine Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Third Stair Window Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Dominion Rod Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Scale Room Upper Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
            'Helmasaur Room Small Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
            'Big Key Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
            'Second Stair Heart Piece Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
            'Armos Room South Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner; }, },
            'Armos Room Right Heart Piece Chest': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
            'Armagohma': { isAvailable: function () {
                return canAccessTot() && items.Spinner && items.Dominion; }, },
       },
        isBeatable: function() {
            if (canAccessTot() && items.Spinner && items.Dominion) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "City In The Sky",
        x: "38.0%",
        y: "50.56%",
        chestlist: {
            'Southwest Underwater Chest': { isAvailable: function () {
                return canAccessCITS() && items.IronBoots; }, },
            'Underwater Southeast Chest': { isAvailable: function () {
                return canAccessCITS() && items.IronBoots; }, },
            'West First Chest': { isAvailable: function () {
                return canAccessCITS() && items.Spinner; }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessCITS() && items.Spinner && items.IronBoots; }, },
            'East Tile Worm Small Chest': { isAvailable: function () {
                return canAccessCITS() && items.Spinner && items.IronBoots; }, },
            'East After-Dinofols Small Chest': { isAvailable: function () {
                return canAccessCITS() && items.Spinner && items.IronBoots; }, },
            'East After-Dinofols Chest': { isAvailable: function () {
                return canAccessCITS() && items.Spinner && items.IronBoots; }, },
            'Double Clawshot Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots; }, },
            'Compass Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >=2; }, },
            'West Baba Serpent Alcove Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Narrow Ledge Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Tile Worm Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Big Baba Tower West Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Big Baba Tower North Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Big Baba Tower Heart Piece Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Gardens Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Gardens Poe Island Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Gardens Lower Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'West Gardens Heart Piece Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Central Outside Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Central Outside Poe Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Big Key Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Central Upper Small Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'North Fan Chest': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
            'Argorok': { isAvailable: function () { 
                return canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2; }, },
        },
        isBeatable: function() {
            if (canAccessCITS() && items.Spinner && items.IronBoots && items.Clawshot >= 2) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Palace of Twilight",
        x: "15.0%",
        y: "37.44%",
        chestlist: {

            'West First Room Central Chest': { isAvailable: function () {
                return canAccessPoT(); }, },
            'West First Room Heart Piece Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot; }, },
            'West Second Room Central Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot; }, },
            'Compass Chest Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot; }, },
            'West Second Room Southeast Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot >1; }, },
            'East First Room Small Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot; }, },
            'East First Room North Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot; }, },
            'East Second Room Northeast Small Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot >1; }, },
            'East Second Room Northwest Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1; }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1; }, },
            'East Second Room Southeast Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1; }, },
            'East First Room Heart Piece Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1; }, },
            'East First Room West Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1; }, },
            'Central First Room Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1 && items.Sword >3; }, },
            'Big Key Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1 && items.Sword > 3; }, },
            'Central Outdoor Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1 && items.Sword > 3; }, },
            'Central Tower Chest': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1 && items.Sword > 3; }, },
            'Zant': { isAvailable: function () {
                return canAccessPoT() && items.Clawshot > 1 && items.Sword > 3 && items.Boomerang && items.IronBoots && items.ZoraArmor && items.Chainball; }, },
        },
        isBeatable: function() {
            if (canAccessPoT() && items.Clawshot > 1 && items.Sword > 3 && items.Boomerang && items.IronBoots && items.ZoraArmor && items.Chainball) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                    
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Hyrule Castle",
        x: "53.78%",
        y: "36.56%",
        chestlist: {
            'Graveyard Grave Switch Room Right Chest': { isAvailable: function () {
                return canAccessHyrule(); }, },
            'Graveyard Grave Switch Room Front Left Small Chest': { isAvailable: function () {
                return canAccessHyrule() && hasBoom(); }, },
            'Graveyard Grave Switch Room Back Left Small Chest': { isAvailable: function () {
                return canAccessHyrule() && hasBoom(); }, },
            'Graveyard Owl Statue Chest': { isAvailable: function () {
                return canAccessHyrule() && hasBoom() && items.Lanturn && items.Dominion; }, },
            'Dungeon Map Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Boomerang; }, },
            'East Castle Balcony Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Boomerang; }, },
            'West Courtyard Northern Small Chest': { isAvailable: function () {
                return canAccessHyrule(); }, },
            'West Courtyard Central Small Chest': { isAvailable: function () {
                return canAccessHyrule(); }, },
            'King Bublin Key': { isAvailable: function () {
                return canAccessHyrule(); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessHyrule(); }, },
            'Lanturn Staircase Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang; }, },
            'Main Hall Southwest Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang && (items.Bow || items.Lanturn); }, },
            'Main Hall Northwest Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang && (items.Bow || items.Lanturn); }, },
            'Southeast Balcony Tower Chest Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang && (items.Bow || items.Lanturn); }, },
            'Big Key Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang && (items.Bow || items.Lanturn); }, },
            'Treasure Room First Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot >1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Second Chest Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Third Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Fourth Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Fifth Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room First Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Second Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Third Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Fourth Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Fifth Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Sixth Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Seventh Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            'Treasure Room Eighth Small Chest': { isAvailable: function () {
                return canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && (items.Bow || items.Lanturn) && items.Spinner; }, },
            },
        isBeatable: function () {
            if (canAccessHyrule() && items.Clawshot > 1 && items.Boomerang && items.Bow && items.Lanturn && items.Spinner && items.Dominion && hasBoom() ) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    /*
    {
        name: "Cave of Ordeals",
        x: "16.08%",
        y: "59.64%",
        chestlist: {
            'Floor 10 Reward (HD Only)': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Floor 20 Reward (HD Only)': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Floor 30 Reward (HD Only)': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Floor 40 Reward (HD Only)': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Floor 50 Reward (HD Only)': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    */
    {
        name: "Lake Hylia Lanturn Cave",
        x: "40.75%",
        y: "55.68%",
        chestlist: {
            'First Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Second Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Third Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Fourth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Fifth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Sixth Chest (Lanturn Chest)': { isAvailable: function () {
                return canSmash(); }, },
            'Seventh Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Eighth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Ninth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Tenth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Eleventh Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Twelfth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Thirteenth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Fourteenth Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Heart Piece Chest': { isAvailable: function () { 
                return canSmash() && items.Lanturn; }, },
        },
        isBeatable: function() {
            if ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && items.Glove  && items.Bow) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Bridge of Eldin Stockcave",
        x: "81.0%",
        y: "27.6%",
        chestlist: {
            'Dodongo Chest': { isAvailable: function () {
                return items.Clawshot && items.IronBoots; }, },
            'Lanturn Chest': { isAvailable: function () {
                return items.Clawshot && items.Lanturn && items.IronBoots; }, },
            'Heart Piece Chest': { isAvailable: function () {
                return items.Clawshot && items.Lanturn && items.IronBoots; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Kakariko Village",
        x: "80.41%",
        y: "53.36%",
        chestlist: {
            'Inn Small Chest': { isAvailable: function () {
                return true; }, },
            'Barnes Bomb Bag': { isAvailable: function () {
                return items.Shadow2; }, },
            'Eldin Spring Heart Piece': { isAvailable: function () {
                return items.IronBoots && canSmash(); }, },
            'Bomb Rock Spire Heart Piece': { isAvailable: function () {
                    return items.Boomerang && shootPew(); }, },
            'Graveyard Lanturn Chest': { isAvailable: function () {
                return items.Lanturn; }, },
            'Watchtower Chest': { isAvailable: function () {
                return items.Shadow2; }, },
            'Watchtower Alcove Chest': { isAvailable: function () {
                return canSmash(); }, },
            'Archery Heart Piece': { isAvailable: function () {
                return items.Bow; }, },
            'Cliff Heart Piece': { isAvailable: function () {
                return shootPew() && items.Boomerang; }, },
            'Hylian Shield': { isAvailable: function () {
                return items.Shadow1; }, },
            'Hawkeye': { isAvailable: function () {
                return items.Bow && items.Shield >1; }, },
            'Zora Armor': { isAvailable: function () {
                return items.Lanturn && items.IronBoots && items.Boomerang && items.Bow && hasBoom(); }, },
            'Coral Earring': { isAvailable: function () {
                return items.Entry >= 2; }, },
            'Renados Letter': { isAvailable: function () {
                return items.Shard3; }, },
            'Horse Call': { isAvailable: function () {
                return items.Charm >=4; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Lanayru Spring",
        x: "42.5%",
        y: "52.08%",
        chestlist: {
            'Underwater Left Small Chest': { isAvailable: function () {
                return items.IronBoots; }, },
            'Underwater Right Small Chest': { isAvailable: function () {
                return items.IronBoots; }, },
            'Southern Room Left Chest': { isAvailable: function () {
                return items.Clawshot; }, },
            'Southern Room Right Chest': { isAvailable: function () {
                return items.Clawshot; }, },
            'Heart Piece Chest': { isAvailable: function () {
                return items.Clawshot && items.Lanturn; }, },
            'West Double Clawshot Chest': { isAvailable: function () {
                return items.Clawshot >1; }, },
            'East Double Clawshot Chest': { isAvailable: function () {
                return items.Clawshot >1; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Hyrule Castle Town",
        x: "53.75%",
        y: "41.2%",
        chestlist: {
            'East Small Chest': { isAvailable: function () {
                return items.Charm >= 2; }, },
            'Magic Armor': { isAvailable: function () {
                return items.Wallet >2 && items.Lanturn && items.IronBoots && items.Boomerang && items.Bow && hasBoom(); }, },
            'Donation Heart Piece': { isAvailable: function () {
                return true; }, },
            'STAR Challenge 1': { isAvailable: function () {
                return items.Clawshot; }, },
            'STAR Challenge 2': { isAvailable: function () {
                return items.Clawshot >1; }, },
            'Agitha 1': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 2': { isAvailable: function () {
                return items.Bugs >1; }, },
            'Jovani Bottle': { isAvailable: function () {
                return items.Soul >1; }, },
            'Invoice': { isAvailable: function () {
                return items.Charm >=1; }, },
            'Agitha 1st Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 2nd Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 3rd Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 4th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 5th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 6th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 7th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 8th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 9th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 10th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 11th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 12th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 13th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 14th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 15th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 16th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 17th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 18th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 19th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 20th Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 21st Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 22nd Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha 23rd Bug': { isAvailable: function () {
                return items.Bugs; }, },
            'Agitha All Bugs': { isAvailable: function () {
                return items.Bugs; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Kakariko Gorge Lanturn Cave",
        x: "65.91%",
        y: "57.31%",
        chestlist: {
            'First Chest': { isAvailable: function () {
                return canSmash() && items.Lanturn; }, },
            'Second Chest': { isAvailable: function () {
                return canSmash() && items.Lanturn; }, },
            'Heart Piece Chest': { isAvailable: function () {
                return canSmash() && items.Lanturn; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Bublin Camp",
        x: "14.98%",
        y: "44.96%",
        chestlist: {
            'Outside Watchtower Small Chest': {
                isAvailable: function () {
                    return canAccessDesert();
                },
            },
            'Inner Tent Small Chest': {
                isAvailable: function () {
                    return canAccessDesert();
                },
            },
            'Cooked Boar Heart Piece': {
                isAvailable: function () {
                    return canAccessDesert();
                },
            },
            'Outside Arbiter Grounds Lanturn Chest': {
                isAvailable: function () {
                    return items.Lanturn && canAccessDesert();
                },
            },
        },
        isBeatable: function () {
            return this.canGetChest();
        },
        canGetChest: function () {
            return generalCanGetChest(this.chestlist);
        },
    },
];

//define overworld chests
var chests = [
    {
        name: "Herding Goats Heart Piece",
        x: "56.33%",
        y: "90.16%",
        isAvailable: function () {
            if (items.Shadow1) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Rat and Chu-Chu Chest",
        x: "54.33%",
        y: "90.16%",
        isAvailable: function () {
            if (items.Sword >2 && items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Lanturn",
        x: "56.16%",
        y: "71.76%",
        isAvailable: function () {
            if (items.Slingshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Coro's Bottle",
        x: "56.16%",
        y: "72.76%",
        isAvailable: function () {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "North Faron Cave Small Chest",
        x: "54.33%",
        y: "68.08%",
        isAvailable: function() {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "North Faron Cave Heart Piece Chest",
        x: "53.33%",
        y: "68.08%",
        isAvailable: function() {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "South Faron Cave Small Chest",
        x: "53.7%",
        y: "71.8%",
        isAvailable: function () {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Mist - North Mist Small Chest",
        x: "51.91%",
        y: "69.2%",
        isAvailable: function() {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Mist - West Stump Small Chest",
        x: "51.01%",
        y: "70.2%",
        isAvailable: function() {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Mist - East Mist Chest",
        x: "52.10%",
        y: "70.2%",
        isAvailable: function() {
            if (items.Lanturn) {
                return "available";
            }
            return "unavailable"
        },
    },
    {
        name: "Mist - Owl Statue Chest",
        x: "54.01%",
        y: "69.6%",
        isAvailable: function () {
            if (items.Dominion && canSmash() && items.Sword >=3) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Mist - Skybook Letter",
        x: "55.01%",
        y: "69.6%",
        isAvailable: function () {
            if (items.Dominion && canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
	        name: "Near Shop Chest",
	        x: "48.66%",
	        y: "69.6%",
	        isAvailable: function() {
	            if (items.Lanturn) {
	                return "available";
        	    }
	            return "unavailable"
	        },
	},
    {
        name: "Master Sword",
        x: "44.20%",
        y: "65.68%",
        isAvailable: function() {
            if (items.Shadow3)
                return "available";
            return "unavailable";
        },
    },
    {
        name: "Alcove Heart Piece Chest",
        x: "85.83%",
        y: "41.28%",
        isAvailable: function() {
            if (items.Shadow2 || items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Past - Heart Piece",
        x: "45.08%",
        y: "68.88%",
        isAvailable: function() {
            if (canAccessTot() && items.Dominion)
                return "available";
            return "unavailable";
        },
    },
    {
        name: "Bomb Rock Ledge Heart Piece",
        x: "71.91%",
        y: "43.52%",
        isAvailable: function() {
            if (canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Ashei Sketch",
        x: "50.43%",
        y: "11.06%",
        isAvailable: function () {
            if (items.Shard1) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Small Chest Under Waterfall",
        x: "55.43%",
        y: "10.56%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Small Chest Near Mother and Child Isles",
        x: "56.23%",
        y: "11.44%",
        isAvailable: function () {
            return "available";
        }
    },
    {
        name: "Underwater Chest",
        x: "39.85%",
        y: "54.06%",
        isAvailable: function() {
            if (items.IronBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Deku Baba Heart Piece Chest",
        x: "42.16%",
        y: "68.88%",
        isAvailable: function() {
            if (items.Sword >2 && canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Helmasaur Chest",
        x: "45.25%",
        y: "38.48%",
        isAvailable: function () {
            if (items.Sword > 2 && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Water Toadpoli Chest",
        x: "38.95%",
        y: "55.26%",
        isAvailable: function() {
            if (items.Sword >=3 && items.Shadow3) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Outside Lanayru Spring - Left Statue Small Chest",
        x: "42.05%",
        y: "50.76%",
        isAvailable: function() {
                return "available";  
        },
    },
    {
        name: "Outside Lanayru Spring - Right Statue Chest",
        x: "43.15%",
        y: "50.76%",
        isAvailable: function() {
                return "available";
            }
    },
    {
        name: "Flight-By-Fowl (5)",
        x: "43.5%",
        y: "48.0%",
        isAvailable: function () {
            return "available";
        }
    },
    {
        name: "Grotto - Shell Blade Chest",
        x: "38.41%",
        y: "45.92%",
        isAvailable: function() {
            if (items.Sword >2 && items.IronBoots && items.Shadow3) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Underwater Right Chest",
        x: "55.5%",
        y: "08.48%",
        isAvailable: function() {
            if (items.Lanturn && items.IronBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Goron In Lava Rock",
        x: "55.05%",
        y: "07.2%",
        isAvailable: function() {
            if (items.IronBoots && hasBoom()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Underwater Left Chest",
        x: "54.5%",
        y: "08.48%",
        isAvailable: function() {
            if (items.Boomerang && items.IronBoots && items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Skultulla Chest",
        x: "54.0%",
        y: "22.8%",
        isAvailable: function() {
            if (items.Sword >2 && items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Behind Gate Underwater Chest",
        x: "53.83%",
        y: "29.84%",
        isAvailable: function() {
            if (items.Sword >2 && items.IronBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Bridge Vines Chest",
        x: "41.58%",
        y: "45.84%",
        isAvailable: function() {
            if (items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Bubble Chest",
        x: "46.33%",
        y: "56.24%",
        isAvailable: function () {
            if (items.Sword >2 && items.Clawshot && items.Lanturn && shootPew()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Oustide Grotto Chest",
        x: "44.83%",
        y: "56.24%",
        isAvailable: function () {
            if (items.Clawshot && shootPew()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Under Bridge Chest",
        x: "54.91%",
        y: "58.8%",
        isAvailable: function () {
            if (items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Chu, Baba, and Keese  Right Chest",
        x: "58.11%",
        y: "64.16%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Chu, Baba, and Keese  Left Chest",
        x: "57.01%",
        y: "64.16%",
        isAvailable: function () {
            if (items.Sword >2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Chu, Baba, and Keese  Rear Chest",
        x: "57.01%",
        y: "65.16%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Castle Pillar Chest",
        x: "52.83%",
        y: "45.16%",
        isAvailable: function () {
            if (items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Tetike Chest",
        x: "55.8%",
        y: "46.12%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Bombling Left Chest",
        x: "69.66%",
        y: "39.36%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Bombling Right Chest",
        x: "70.86%",
        y: "39.36%",
        isAvailable: function () {
            if (items.Sword > 2 && items.Lanturn) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Water Bomb Fish Chest",
        x: "77.41%",
        y: "34.88%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Skulltula Chest",
        x: "33.58%",
        y: "60.32%",
        isAvailable: function () {
            if (canAccessDesert() && items.Sword >2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Peahat Chest",
        x: "29.08%",
        y: "60.24%",
        isAvailable: function () {
            if (canAccessDesert() && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "East Canyon Chest",
        x: "29.33%",
        y: "56.88%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Lone Small Chest",
        x: "22.50%",
        y: "57.68%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "West Canyon Chest",
        x: "14.08%",
        y: "57.64%",
        isAvailable: function () {
            if (canAccessDesert() && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Poe and Boulder Chest",
        x: "21.66%",
        y: "50.64%",
        isAvailable: function () {
            if (canAccessDesert() && items.Sword > 2 && canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "North Small Chest Behind Gate",
        x: "17%",
        y: "49.28%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "South Chest Behind Gate",
        x: "26.5%",
        y: "61.28%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Top-Left Small Chest by Campfire",
        x: "15%",
        y: "51.36%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Right Small Chest by Campfire",
        x: "16%",
        y: "51.36%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Bottom-Left Small Chest by Campfire",
        x: "15%",
        y: "52.36%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Small Chest With Boxes",
        x: "16.33%",
        y: "47.76%",
        isAvailable: function () {
            if (canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Spinner Wall Heart Piece Chest",
        x: "41.41%",
        y: "38.08%",
        isAvailable: function () {
            if (items.Spinner) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Stalfos Left Small Chest",
        x: "74.16%",
        y: "19.6%",
        isAvailable: function () {
            if (items.Spinner) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Stalfos Right Small Chest",
        x: "75.16%",
        y: "19.6%",
        isAvailable: function () {
            if (items.Spinner) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Stalfos Heart Piece Chest",
        x: "74.66%",
        y: "18.6%",
        isAvailable: function () {
            if (items.Spinner && canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Fountain Chest",
        x: "54.01%",
        y: "45.68%",
        isAvailable: function () {
            if (items.Spinner && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Wooden Statue",
        x: "54.01%",
        y: "47.68%",
        isAvailable: function () {
            if (items.Charm >=2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Frozen Lanturn Chest",
        x: "38.26%",
        y: "11.48%",
        isAvailable: function () {
            if (items.Chainball && items.Lanturn && canAccessSnowpeak()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Grotto - Freezard Chest",
        x: "42.5%",
        y: "9.12%",
        isAvailable: function () {
            if (items.Sword >2 && items.Chainball && canAccessSnowpeak()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Frozen Block Cave Chest",
        x: "52.85%",
        y: "26.04%",
        isAvailable: function () {
            if (items.Chainball) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Lost Woods - Lanturn Chest",
        x: "45.41%",
        y: "70.8%",
        isAvailable: function () {
            if (items.Lanturn && items.Boomerang) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Lost Woods - Spinner Chest",
        x: "42.91%",
        y: "70.8%",
        isAvailable: function () {
            if (items.Spinner && items.Boomerang) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Eldin Bridge Owl Chest",
        x: "77.75%",
        y: "32.64%",
        isAvailable: function () {
            if (items.Dominion && items.Clawshot >=1 && items.Entry >=1) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Eldin Bridge Skybook Letter",
        x: "77.75%",
        y: "28.64%",
        isAvailable: function () {
            if (items.Dominion) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gorge Owl Statue Chest",
        x: "66%",
        y: "48.8%",
        isAvailable: function () {
            if (items.Dominion) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gorge Skybook Letter",
        x: "67%",
        y: "48.8%",
        isAvailable: function () {
            if (items.Dominion) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Castle Ruins Owl Statue Chest",
        x: "45.38%",
        y: "43.84%",
        isAvailable: function () {
            if (items.Dominion) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Castle Ruins Skybook Letter",
        x: "46.38%",
        y: "43.84%",
        isAvailable: function () {
            if (items.Dominion) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hylia Bridge Owl Statue Chest",
        x: "41.45%",
        y: "43.44%",
        isAvailable: function () {
            if (items.Dominion && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hylia Bridge Skybook Letter",
        x: "42.45%",
        y: "43.44%",
        isAvailable: function () {
            if (items.Dominion && items.Clawshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gerudo Desert Owl Statue Chest",
        x: "20.58%",
        y: "59.6%",
        isAvailable: function () {
            if (items.Dominion && canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gerudo Desert Skybook Letter",
        x: "20.58%",
        y: "61.1%",
        isAvailable: function () {
            if (items.Dominion && canAccessDesert()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gorge Spire Chest",
        x: "61.75%",
        y: "52.16%",
        isAvailable: function () {
            if (items.Clawshot > 1) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Lake Chasm Chest",
        x: "51.50%",
        y: "46.88%",
        isAvailable: function () {
            if (items.Clawshot > 1) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gorge Spire Heart Piece",
        x: "62.85%",
        y: "52.40%",
        isAvailable: function () {
            if (items.Boomerang) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Fishing Hole Heart Piece",
        x: "64.5%",
        y: "9%",
        isAvailable: function () {
            if (items.Sword >2 || canSmash()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Fishing Hole Bottle",
        x: "65.8%",
        y: "9.5%",
        isAvailable: function () {
            if (items.Rod && (items.Sword >2 || canSmash())) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Plumm Fruit Game Heart Piece",
        x: "65.8%",
        y: "14.5%",
        isAvailable: function () {
            if (items.Sword > 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Aurus Memo",
        x: "35.58%",
        y: "53.36%",
        isAvailable: function () {
            if (items.Shadow3 && items.Sword >2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Iza Bomb Bag",
        x: "65.8%",
        y: "12%",
        isAvailable: function () {
            if (items.Lanturn && items.IronBoots && items.Boomerang && items.Bow && hasBoom()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Giant Bomb Bag",
        x: "66.8%",
        y: "12%",
        isAvailable: function () {
            if (items.Lanturn && items.IronBoots && items.Boomerang && items.Bow && hasBoom()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Tree Heart Piece",
        x: "56%",
        y: "60.88%",
        isAvailable: function () {
            if (items.Boomerang) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hot Springwater Goron",
        x: "60.25%",
        y: "40.4%",
        isAvailable: function () {
            if (items.Lanturn && items.IronBoots && items.Boomerang && items.Bow && hasBoom()) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Snowboard Racing",
        x: "36.25%",
        y: "11.68%",
        isAvailable: function () {
            if (items.Shard2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hidden Village - Impaz - Llia Charm",
        x: "71%",
        y: "24.8%",
        isAvailable: function () {
            if (items.Charm >=3) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hidden Village - Impaz - Skybook",
        x: "71%",
        y: "25.8%",
        isAvailable: function () {
            if (items.Charm >= 4) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hidden Village - Hide and Seek",
        x: "72%",
        y: "23.8%",
        isAvailable: function () {
            if (items.Charm >= 4) {
                return "available";
            }
            return "unavailable";
        },
    },
]

