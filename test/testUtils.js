/**
 * Factory function to find an element in a given wrapper with the 'data-test' attribute containing val.
 * @function findByTestAttr
 * @param {DOM} wrapper - Shallow wrapper containing the DOM
 * @param {string} val - Attribute value
 * @returns {} find out what it returns
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}]`);
};
