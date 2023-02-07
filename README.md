Benefits
1. No need to third party library for logging.
2. Centralize logging service for printing message in a console. 3. You want to disable logging temporarily.
4. Send log to servers and store in a local storage.
5. You have a source code of this, you can modify as you want.

How to use
1. Download the logging application.
2. Go to the project folder from a terminal
3. Build the library using following command a. ng build logger
4. now copy the folder from dist and put any location on your system.
5. Install the library in your project from following command
a. npm install <location of logger-library>
6. Put the logging configuration information in environment.ts or
environment.prod.ts file of your project
7. app.module.ts changes –
    a. import the library
        import {LoggerModule, LoggerService} from ‘logger’;
    b. import the module
        LoggerModule.forRoot(environment.logPublisherConfig)
    c. add the LoggerService in a providers.
