/**
 * handles exceptions
 */
export const handleExceptions = () => {
  ['uncaughtException', 'unhandledRejection'].forEach((exception) =>
    process.on(exception, (err) => {
      console.log(err.message);
      process.exit(1);
    })
  );
};
