const isDevelopment = (['development', 'test', 'testing'].includes(process.env.NODE_ENV || '')) || false;

const debug = {
  execute(type, ...content) {
    if (isDevelopment) {
      console[type](...content);
    }
  },
  getActions() {
    return ['error', 'log', 'table', 'assert', 'count', 'time', 'timeEnd', 'clear', 'dir'];
  }
};

debug.getActions().forEach((type) => {
  debug[type] = (...content) => {
    debug.execute(type, ...content);
  };
});

module.exports = debug;
