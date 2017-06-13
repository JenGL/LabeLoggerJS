import LogService from '../src/log_service';
import level from '../src/log_levels';


describe("Logger", function () {
  let logService;
  beforeEach(function () {
    logService = new LogService(level.SILENT);
    spyOn(console, 'log');
    spyOn(console, 'debug');
  });

  afterEach(function() {
    logService = null;
    window.logger = null;
  });

  it("should not log anything if level is set to silent", function () {
    const logger = logService.getLogger("TEST");
    logger.log("testing logger");
    expect(console.log).not.toHaveBeenCalled();
  });

  it("should not log if level is enabled but label is not", function () {
    const logger = logService.getLogger("TEST");
    logService.level = level.VERBOSE;
    logger.log("testing logger");
    expect(console.log).not.toHaveBeenCalled();
  });

  it("should not log if label is enabled but level is not", function () {
    const logger = logService.getLogger("TEST");
    logService.level = level.WARN;
    logService.active("TEST");
    logger.log("testing logger");
    expect(console.log).not.toHaveBeenCalled();
  });

  it("should log if level and label are enabled", function () {
    const logger = logService.getLogger("TEST");
    logService.level = level.VERBOSE;
    logService.active("TEST");
    logger.log("testing logger");
    expect(console.log).toHaveBeenCalled();
  });

  it("should log only the enabled logger", function () {
    logService.level = level.DEBUG;
    logService.active("TEST");
    const logger = logService.getLogger("TEST");
    const logger2 = logService.getLogger("TEST2");
    logger.log("testing logger");
    expect(console.log).toHaveBeenCalled();
    logger2.debug("testing logger2");
    expect(console.debug).not.toHaveBeenCalled();
  });

});
