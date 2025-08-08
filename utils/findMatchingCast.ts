
export const findMatchingCastMembers = (castOne: any[], castTwo: any[]) => {
  const castTwoIds = new Set(castTwo.map((member) => member.id));
  return castOne
    .filter((member) => castTwoIds.has(member.id))
    .map((member) => member.name);
};