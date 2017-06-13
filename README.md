# LabeLoggerJS
Label based logger for javascript. Allows to enable specific logs command identified with labels.

# Usage

* import LogService and LogLevel
* query a logger with label to LogService
* use the logger (log command are the same of console commands: debug, log, info, warn, error)

There are 5 possible log levels that enable/disable log methods.
A disabled method prints nothing.
An enabled method prints nothing if the corresponding logger's label is not active.

* DEBUG: enable every log method
* VERBOSE: enable every log method but .debug()
* WARN: enable .warn() and .error() methods
* ERROR: enable only .error() method
* SILENT: disable every method

# example

```
import { LogService,  LogLevel} from 'index.js';

const logger = LogService.getLogger("DB");

logger.log("prova"); // print nothing because label DB is not active
LogService.active("DB");

logger.log("test"); // prints "[DB]: test"
```

# RunTime label/level configuration

The LogService instance is assigned to window.logger in such a way you can use logger.activate() and logger.level 
directly from the browser console in order to change the logger settings
