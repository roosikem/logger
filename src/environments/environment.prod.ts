export const environment = {
  production: true,
  logPublisherConfig : [
    {
      "loggerName": "console",
      "loggerLocation": "",
      "isActive": false
    },
    {
      "loggerName": "localstorage",
      "loggerLocation": "logging",
      "isActive": false
    },
    {
      "loggerName": "api",
      "loggerLocation": "/api/log",
      "isActive": false 
    },
    {
      "loggerName": "file",
      "loggerLocation": "c:/weneedtoimplement.txt",
      "isActive": false 
    }
  ]
};
