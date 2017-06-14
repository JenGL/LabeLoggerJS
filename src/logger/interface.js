export default class LogInterface {
  constructor(service) {
    this._service = service;
  }

  set level(level) {
    this._service.level = level;
  }

  get level() {
    return this._service.level;
  }

  getLogger(label) {
    return this._service.getLogger(label);
  }

  active(label) {
    return this._service.active(label);
  }

  deactive(label) {
    return this._service.deactive(label);
  }
}
