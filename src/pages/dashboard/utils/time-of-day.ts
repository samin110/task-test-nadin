  // Calculate time
 export const timeOfDay = (): string => {
    const hour: number = new Date().getHours();

    if (hour < 12) return "Morning";

    if (hour >= 12 && hour <= 17) return "Afternoon";

    return "Evening";
  };