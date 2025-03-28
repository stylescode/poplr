
export const findMatchingCastMembers = (castOne: any[], castTwo: any[]) => {
  return castOne.filter((memberOne) =>
    castTwo.some((memberTwo) => memberOne.id === memberTwo.id)
  );
};