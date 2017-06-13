import { LogService, LogLevel} from '../src/index.js';

describe("index.js import", function () {
  beforeEach(function () {
    spyOn(console, 'log');
  });

  it("should work normally", function () {
    const logger = LogService.getLogger("TEST");
    LogService.level = LogLevel.DEBUG;
    LogService.active("TEST");
    logger.log("testing logger");
    expect(console.log).toHaveBeenCalled();
  });
});
