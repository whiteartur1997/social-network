export const required = (value: string) => {
    if(value) return undefined;
    
    return "This field is required"
}

export const maxLength = (max: number) => (value: string) => {
   return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);

