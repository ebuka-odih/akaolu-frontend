/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'nprogress' {
    const NProgress: {
      start: () => void;
      done: () => void;
      configure: (options: { showSpinner?: boolean }) => void;
    };
    export default NProgress;
  }
  declare module "@/__registry__" {
    export const Index: any;
  }
  