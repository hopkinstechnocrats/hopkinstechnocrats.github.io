var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "reefscape",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 7,
      "maxSize": 7,
      "required": "true"
    },
    { "name": "Event Code",
      "code": "e",
      "type": "event",
      "defaultValue": "2025mndu2",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "pm": "Practice<br>",
        "qm": "Quals<br>",
        "sf": "Semi-Finals<br>",
        "f": "Finals"
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
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
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
    { "name": "Leave Start",
      "code": "AutoLeaveStart",
      "type": "bool"
    },
    { "name": "Coral L4",
      "code": "AutoCoralL4Scores",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "AutoCoralL3Scores",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "AutoCoralL2Scores",
      "type": "counter"
    },
    { "name": "Coral L1",
      "code": "AutoCoralL1Scores",
      "type": "counter"
    },
    { "name": "Dropped Coral",
      "code": "AutoDroppedCoral",
      "type": "counter"
    },
    { "name": "Algae Net Scores",
      "code": "AutoNetScores",
      "type": "counter"
    },
    { "name": "Algae Processor Scores",
      "code": "AutoProcessorScores",
      "type": "counter"
    },
    { "name": "Algae Removed",
      "code": "AutoAlgaeRemoved",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Coral L4",
      "code": "TeleopCoralL4Scores",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "TeleopCoralL3Scores",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "TeleopCoralL2Scores",
      "type": "counter"
    },
    { "name": "Coral L1",
      "code": "TeleopCoralL1Scores",
      "type": "counter"
    },
    { "name": "Coral Dropped",
      "code": "TeleopCoralDropped",
      "type": "counter"
    },
    { "name": "Algae Net Scores",
      "code": "TeleopNetScores",
      "type": "counter"
    },
    { "name": "Algae Processor Scores",
      "code": "TeleProcessorScores",
      "type": "Counter"
      },
    { "name": "Algae Removed",
      "code": "TeleopAlgaeRemoved",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "More than 5s to Position Climb",
    "code": "MoreThan5sToPositionClimb",
    "type": "bool"
    },
    { "name": "Time Left After Climbing?",
    "code": "TimeLeftAfterClimbing", 
    "type": "bool"
    },
    { "name": "Final Robot Status",
      "code": "FinalRobotStatus",
      "type": "radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Failed Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Ground Pickup",
      "code": "GroundPickup",
      "type": "bool"
      },
    {"name": "Defense Bot?",
      "code": "DefenseBot",
      "type": "bool"
    },
    { "name": "Defense Rating",
      "code": "DefenseRating",
      "type": "radio",
      "choices": {
        "3": "3(Very Effective)",
        "2": "2(Average)<br>",
        "1": "1(Not Effective)<br>",
        "0": "0(Not Observed)<br>"
      },
      "defaultValue": "0"
    },
    { "name": "Driver Skill",
    "code": "DriverSkill",
    "type": "radio",
    "choices": {
      "3": "3(Very Effective)",
      "2": "2(Average)<br>",
      "1": "1(Not Effective)<br>",
      "0": "0(Not Observed)<br>"
    },
    "defaultValue": "0"
  },
    { "name": "Died/Immobilized",
      "code": "Died/Immobilized",
      "type": "bool"
    },
    { "name": "Unstable?",
      "code": "Unstable",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "Comments",
      "type": "text",
      "size": 15,
      "maxSize": 220
    }
  ]
}`;
