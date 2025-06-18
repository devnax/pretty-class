export type classNamesTypes = string | Record<string, boolean> | classNamesTypes[] | undefined | null | false;
export const classNames = (...args: classNamesTypes[]): string => {
  return args.flatMap(item => {
    if (!item) return [];
    if (typeof item === 'string') return item;
    if (Array.isArray(item)) return classNames(...item);
    if (typeof item === 'object') return Object.keys(item).filter(key => item[key]);
    return []
  }).join(' ')
};

export default classNames