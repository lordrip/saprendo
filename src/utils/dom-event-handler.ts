export const domEventHandler = (handler: Function) => (event: Event) => {
  const value = (event.currentTarget as any).value;

  handler(value);
};
