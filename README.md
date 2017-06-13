# LabeLoggerJS
Label based logger for javascript. Allows to enable specific logs command identified with labels.

# Usage

* import LogService and LogLevel
* query a logger with label to LogService
* use the logger

# example

```
import { LogService } from 'index.js';
import { LogLevel } from 'index.js';

const logger = LogService.getLogger("DB");

logger.log("prova"); // print nothing because label DB is not active
LogService.active("DB");

logger.log("test"); // prints "[DB]: test"
```
# RunTime label/level configuration

The LogService instance is assigned to window.logger in such a way you can use logger.activate() and logger.level 
directly from the browser console in order to change the logger settings
