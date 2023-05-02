export const groupArrayByKey = <T extends Record<K, any>, K extends keyof T>(
  array: T[],
  key: K
): Record<any, T[]> => {
  return array.reduce((result, currentValue) => {
    const keyValue = currentValue[key] as any;

    if (!key || !keyValue) {
      return result;
    }

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    (result[keyValue] = result[keyValue] || []).push(currentValue);
    return result;
  }, {} as Record<any, T[]>);
};
