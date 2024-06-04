export const handleApiError = (error: any): never => {
  console.error("API error:", error);
  throw error;
};
