import scheduler from 'node-cron';

export const run = (fn, cronExp) => {
    scheduler.schedule(cronExp, fn);
};
