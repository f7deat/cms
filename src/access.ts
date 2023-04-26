export default (initialState: any) => {
  const canSeeAdmin = !!(initialState && initialState !== 'dontHaveAccess');
  return {
    canSeeAdmin,
  };
};
