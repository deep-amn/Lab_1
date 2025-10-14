export const validStaffService = {
  validateEmployee: (name: string) => {
    if (name.trim().length < 3) {
      return { valid: false, error: "Name must be at least 3 characters long." };
    }
    return { valid: true, error: "" };
  },

  validateRole: (roleTitle: string) => {
    if (roleTitle.trim().length < 3) {
      return { valid: false, error: "Role title must be at least 3 characters long." };
    }
    return { valid: true, error: "" };
  },
};
