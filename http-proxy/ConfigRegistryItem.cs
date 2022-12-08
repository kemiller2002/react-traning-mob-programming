using System;


/*
[
  {
    "category": "Applications",
    "code": "ConfigRegistryTreeMode",
    "description": "Config registry edit tree mode",
    "value": false
  },
  {
    "category": "Applications",
    "code": "IPLockoutMessageText",
    "description": "Message to display when IP address is locked out of application",
    "value": "Your IP Address has been locked out. Please try again"
  },
  {
    "category": "Applications",
    "code": "MaxUserNameAttempts",
    "description": "Number of attempts to allow IP address to enter username",
    "value": "10"
  },
  {
    "category": "LetterTemplating",
    "code": "LetterTemplates",
    "description": "Toggle Letter Templates",
    "value": true
  },
  {
    "category": "LetterTemplating",
    "code": "LetterTemplatesDefaultCss",
    "description": "Sets the default css for the margin on all new letters",
    "value": "body { margin: 1in }"
  }
]

*/




public class ConfigRegistryItem 
{

    public string category {get;set;}
    public string code {get;set;}
    public string description {get;set;}
    public string value {get;set;}



}