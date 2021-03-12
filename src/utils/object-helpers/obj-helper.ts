export const updateObjInArray = (items: any[], itemId: any, objPropName: string, newObjProps: {[key: string]: any}) => {
    return items.map((item) => (item.id === itemId) ? {...item, ...newObjProps} : item)
}