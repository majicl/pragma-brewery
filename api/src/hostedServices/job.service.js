import scheduler from 'node-cron';

export const run = (fn, cronExp) => {
    return scheduler.schedule(cronExp, fn);
};

export default {
    run,
};
