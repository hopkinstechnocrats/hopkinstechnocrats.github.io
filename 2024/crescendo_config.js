var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Beach Bash",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025Minne",
      "required": "true"
    },
    { "name": "Match Level",
    "code": "l",
    "type": "level",
    "choices": {
      "qm": "Quals<br>",
      "pl": "Playoffs"
    },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "2129": "2129<br>",
        "2239(tau-cans)": "Team 2239(tau-cans)<br>",
        "2239(phi-nixes)": "Team 2239(phi-nixes)<br>",
        "2450": "Team 2450<br>",
        "2491": "Team 2491<br>",
        "2502(A)": "Team 2502(A)<br>",
        "2502(B)": "Team 2502(B)<br>",
        "2502(C)": "Team 2502(C)<br>",
        "2549": "Team 2549<br>",
        "7850": "Team 7850<br>",
        "9157": "Team 9157<br>"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "AutoLeaveStartZone",
      "type": "bool"
    },
    { "name": "Net Scores",
      "code": "NetScoresAuto",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "NetMissesAuto",
      "type": "counter"
    },
    { "name": "Hoop Scores",
      "code": "HoopScoresAuto",
      "type": "counter"
    },
    {"name": "Hoops Misses",
      "code": "HoopMissesAuto",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Net Scores",
      "code": "NetScoresTele",
      "type": "counter"
    },
    { "name": "Net Misses",
      "code": "NetMissesTele",
      "type": "counter"
    },
    { "name": "Hoop Scores",
      "code": "HoopScoresTele",
      "type": "counter"
    },
    {"name": "Hoops Misses",
      "code": "HoopMissesTele",
      "type": "counter"
    }
  ],

  "endgame": [
    {"name": "End in Start Zone",
    "code": "EndedInStartZoneEndGame",
    "type": "bool"
    },
    {"name": "Sharks Collected",
    "code": "SharksCollectedTotal",
    "type": "counter"
    }
  ],
  "postmatch": [
    {"name": "Played Heavy Defense",
    "code": "RobotPlayedHeavyDefenseInMatch",
    "type": "bool"
    },
    { "name": "Defense Rating",
      "code": "DriverRatingInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue": "0"
    },
    { "name": "Driver Skill",
      "code": "DriverSkillInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue": "0"
    },
    { "name": "Speed Rating",
      "code": "SpeedRatingInMatch",
      "type": "radio",
      "choices": {
        "5": "5(Very Effective)<br>",
        "4": "4<br>",
        "3": "3(Average)<br>",
        "2": "2<br>",
        "1": "1(Not Effective)<br>",
        "x": "0(Not Observed)"
      },
      "defaultValue":"0"
    },
    {"name": "Excessive Net Hits(3+)",
    "code": "RobotHitTheNetExcessively",
    "type": "bool"
    },
    {"name": "Excessive Shots Out of Starting Zone(4+)",
    "code": "RobotShotFromTheStartZoneExcessively",
    "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "RobotDiedInMatch",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "RobotWasTippyInMatch",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "RobotWouldMakeGoodPartner",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "CommentsAboutRobotFromMatch",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;

